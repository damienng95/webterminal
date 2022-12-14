import json
import copy
import uuid
from django.http import HttpResponse, Http404
from django.utils.decorators import method_decorator
from django.views.generic.base import View
from django.views.decorators.csrf import csrf_exempt
from elfinder.exceptions import ElfinderErrorMessages
from elfinder.connector import ElfinderConnector
from elfinder.conf import settings as ls
from django.shortcuts import get_object_or_404
from common.models import ServerInfor
import re
from django.contrib.auth.mixins import PermissionRequiredMixin
from common.views import LoginRequiredMixin
from django.conf import settings
from common.utils import mkdir_p
import os
try:
    from StringIO import StringIO
except ImportError:
    from io import StringIO
import paramiko
from elfinder.sftpstoragedriver.sftpstorage import SFTPStorage
from django.http import StreamingHttpResponse
from django.views.generic import TemplateView
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework_simplejwt.authentication import JWTTokenUserAuthentication


class CustomJWTAuth(JWTTokenUserAuthentication):
    def authenticate(self, request):
        raw_token = request.GET.get("webterminal-token-access", None)
        if raw_token is None:
            return None

        validated_token = self.get_validated_token(raw_token)

        return self.get_user(validated_token), validated_token

# import pysnooper

# @pysnooper.snoop()


class ElfinderConnectorView(APIView):
    """
    Default elfinder backend view
    """
    permission_required = 'common.can_filemanage_serverinfo'
    raise_exception = True
    permission_classes = [
        permissions.IsAuthenticated
    ]
    authentication_classes = [JWTTokenUserAuthentication,CustomJWTAuth]

    def render_to_response(self, context, **kwargs):
        """
        It returns a json-encoded response, unless it was otherwise requested
        by the command operation
        """
        kwargs = {}
        additional_headers = {}
        # create response headers
        if 'header' in context:
            for key in context['header']:
                if key == 'Content-Type':
                    kwargs['content_type'] = context['header'][key]
                elif key.lower() == 'status':
                    kwargs['status'] = context['header'][key]
                else:
                    additional_headers[key] = context['header'][key]
            del context['header']

        # return json if not header
        if not 'content_type' in kwargs:
            kwargs['content_type'] = 'application/json'

        if 'pointer' in context:  # return file
            if 'storage' in context['volume']._options.keys() and isinstance(context['volume']._options['storage'], SFTPStorage):
                # stream sftp file download
                def file_iterator(file_name, chunk_size=32768):
                    while True:
                        c = file_name.read(chunk_size)
                        if c:
                            yield c
                        else:
                            context['volume'].close(
                                context['pointer'], context['info']['hash'])
                            # fix sftp open transfer not close session bug
                            if 'storage' in context['volume']._options.keys() and isinstance(context['volume']._options['storage'], SFTPStorage):
                                context['volume']._options['storage'].sftp.close()
                            break
                the_file_name = additional_headers["Content-Location"]
                if isinstance(the_file_name, bytes):
                    the_file_name = the_file_name.decode()
                response = StreamingHttpResponse(
                    file_iterator(context['pointer']))
                response['Content-Type'] = 'application/octet-stream'
                response['Content-Disposition'] = 'attachment;filename="{0}"'.format(
                    the_file_name)
                return response
            else:
                context['pointer'].seek(0)
                kwargs['content'] = context['pointer'].read()
                context['volume'].close(
                    context['pointer'], context['info']['hash'])
        # raw error, return only the error list
        elif 'raw' in context and context['raw'] and 'error' in context and context['error']:
            kwargs['content'] = context['error']
        elif kwargs['content_type'] == 'application/json':  # return json
            kwargs['content'] = json.dumps(context)
        else:  # return context as is!
            kwargs['content'] = context

        response = HttpResponse(**kwargs)
        for key, value in additional_headers.items():
            response[key] = value

        return response

    @staticmethod
    def handler_chunk(src, args):
        """
        handler chunk parameter
        """
        if "chunk" in src:
            args['chunk_name'] = re.findall(
                r'(.*?).\d+_\d+.part$', src['chunk'])[0]
            first_chunk_flag = re.findall(
                r'.*?.(\d+)_\d+.part$', src['chunk'])[0]
            if int(first_chunk_flag) == 0:
                args['is_first_chunk'] = True
            else:
                args['is_first_chunk'] = False
        else:
            args['chunk_name'] = False
            args['is_first_chunk'] = False

    def output(self, cmd, src):
        """
        Collect command arguments, operate and return self.render_to_response()
        """
        args = {}
        cmd_args = self.elfinder.commandArgsList(cmd)
        for name in cmd_args:
            if name == 'request':
                args['request'] = self.request
            elif name == 'FILES':
                args['FILES'] = self.request.FILES
            elif name == 'targets':
                args[name] = src.getlist('targets[]')
            else:
                arg = name
                if name.endswith('_'):
                    name = name[:-1]
                if name in src:
                    try:
                        args[arg] = src.get(name).strip()
                    except:
                        args[arg] = src.get(name)
        if cmd == 'mkdir':
            args['name'] = src.getlist(
                'dirs[]') if 'dirs[]' in src else src.getlist('name')
        elif cmd == "upload":
            if 'upload_path[]' in src:
                dir_path = src.getlist('upload_path[]')
                if len(list(set(dir_path))) == 1 and dir_path[0] == args['target']:
                    args['upload_path'] = False
                    self.handler_chunk(src, args)
                else:
                    args['upload_path'] = dir_path
                    self.handler_chunk(src, args)
            else:
                args['upload_path'] = False
                self.handler_chunk(src, args)
        elif cmd == "size":
            args['targets'] = src.getlist('targets[0]')
        args['debug'] = src['debug'] if 'debug' in src else False
        return self.render_to_response(self.elfinder.execute(cmd, **args))

    def get_command(self, src):
        """
        Get requested command
        """
        try:
            return src['cmd']
        except KeyError:
            return 'open'

    def get_optionset(self, **kwargs):
        set_ = ls.ELFINDER_CONNECTOR_OPTION_SETS[kwargs['optionset']]
        if kwargs['start_path'] != 'default':
            for root in set_['roots']:
                root['startPath'] = kwargs['start_path']
        temp_dict = copy.deepcopy(set_)
        u_id_dict = {'debug': temp_dict['debug'], 'roots': {
            kwargs['u_id']: temp_dict['roots']}}
        return u_id_dict

    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        if not kwargs['optionset'] in ls.ELFINDER_CONNECTOR_OPTION_SETS:
            raise Http404
        return super(ElfinderConnectorView, self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):
        """
        used in get method calls
        """
        u_id = str(uuid.uuid4())
        kwargs['u_id'] = u_id
        loginuser = kwargs.get("loginuser", None)
        if kwargs['optionset'] == 'sftp':
            server_object = get_object_or_404(
                ServerInfor, id=kwargs['start_path'])
            optinon_sets = self.get_optionset(**kwargs)
            optinon_sets['roots'][u_id][0]['alias'] = '{0}-{1}'.format(
                server_object.name, server_object.ip)
            key_label = "%s::%s" % (
                server_object.ip, loginuser)
            port = None
            method = None
            key = None
            password = None
            for credential in server_object.credentials.all():
                if credential.username == loginuser:
                    port = credential.port
                    method = credential.method
                    if method == 'password':
                        password = credential.password
                    else:
                        password = credential.password
                        key = credential.key
            if method == 'password':
                optinon_sets['roots'][u_id][0]['storageKwArgs'] = {'host': server_object.ip,
                                                                   'params': {'port': port,
                                                                              'username': loginuser,
                                                                              'password': password,
                                                                              'timeout': 30},
                                                                   'root_path': '/', 'interactive': False,
                                                                   'key_label': key_label}
            else:
                private_key = StringIO(key)
                if 'RSA' in key:
                    private_key = paramiko.RSAKey.from_private_key(
                        private_key,password=password)
                elif 'DSA' in key:
                    private_key = paramiko.DSSKey.from_private_key(
                        private_key,password=password)
                elif 'EC' in key:
                    private_key = paramiko.ECDSAKey.from_private_key(
                        private_key,password=password)
                elif 'OPENSSH' in key:
                    private_key = paramiko.Ed25519Key.from_private_key(
                        private_key,password=password)
                optinon_sets['roots'][u_id][0]['storageKwArgs'] = {'host': server_object.ip,
                                                                   'params': {'port': port,
                                                                              'username': loginuser,
                                                                              'pkey': private_key,
                                                                              'timeout': 30},
                                                                   'root_path': '/', 'interactive': False,
                                                                   'key_label': key_label}
            self.elfinder = ElfinderConnector(
                optinon_sets, u_id, request.session)
        else:
            optinon_sets = self.get_optionset(**kwargs)
            optinon_sets['roots'][u_id][0]['alias'] = '{0}_tmp_dir'.format(
                request.user.username)
            optinon_sets['roots'][u_id][0]['path'] = os.path.join(
                settings.MEDIA_ROOT, request.user.username, 'Download')
            optinon_sets['roots'][u_id][0]['URL'] = '{0}{1}/{2}/'.format(
                settings.MEDIA_URL, request.user.username, 'Download')
            mkdir_p(os.path.join(settings.MEDIA_ROOT, request.user.username))
            self.elfinder = ElfinderConnector(
                optinon_sets, u_id, request.session)
        return self.output(self.get_command(request.GET), request.GET)

    def post(self, request, *args, **kwargs):
        """
        called in post method calls.
        It only allows for the 'upload' command
        """
        u_id = str(uuid.uuid4())
        kwargs['u_id'] = u_id
        loginuser = kwargs.get("loginuser", None)
        if kwargs['optionset'] == 'sftp':
            server_object = get_object_or_404(
                ServerInfor, id=kwargs['start_path'])
            optinon_sets = self.get_optionset(**kwargs)
            optinon_sets['roots'][u_id][0]['alias'] = '{0}-{1}'.format(
                server_object.name, server_object.ip)
            key_label = "%s::%s" % (
                server_object.ip, loginuser)
            port = None
            method = None
            key = None
            password = None
            for credential in server_object.credentials.all():
                if credential.username == loginuser:
                    port = credential.port
                    method = credential.method
                    if method == 'password':
                        password = credential.password
                    else:
                        password = credential.password
                        key = credential.key
            if method == 'password':
                optinon_sets['roots'][u_id][0]['storageKwArgs'] = {'host': server_object.ip,
                                                                   'params': {'port': port,
                                                                              'username': loginuser,
                                                                              'password': password,
                                                                              'timeout': 30},
                                                                   'root_path': '/', 'interactive': False,
                                                                   'key_label': key_label}
            else:
                private_key = StringIO(key)
                if 'RSA' in key:
                    private_key = paramiko.RSAKey.from_private_key(
                        private_key,password=password)
                elif 'DSA' in key:
                    private_key = paramiko.DSSKey.from_private_key(
                        private_key,password=password)
                elif 'EC' in key:
                    private_key = paramiko.ECDSAKey.from_private_key(
                        private_key,password=password)
                elif 'OPENSSH' in key:
                    private_key = paramiko.Ed25519Key.from_private_key(
                        private_key,password=password)
                optinon_sets['roots'][u_id][0]['storageKwArgs'] = {'host': server_object.ip,
                                                                   'params': {'port': port,
                                                                              'username': loginuser,
                                                                              'pkey': private_key,
                                                                              'timeout': 30},
                                                                   'root_path': '/', 'interactive': False,
                                                                   'key_label': key_label}
            self.elfinder = ElfinderConnector(
                optinon_sets, u_id, request.session)
        else:
            optinon_sets = self.get_optionset(**kwargs)
            optinon_sets['roots'][u_id][0]['alias'] = '{0}_tmp_dir'.format(
                request.user.username)
            optinon_sets['roots'][u_id][0]['path'] = os.path.join(
                settings.MEDIA_ROOT, request.user.username, 'Download')
            optinon_sets['roots'][u_id][0]['URL'] = '{0}{1}/{2}/'.format(
                settings.MEDIA_URL, request.user.username, 'Download')
            self.elfinder = ElfinderConnector(
                optinon_sets, u_id, request.session)
        cmd = self.get_command(request.POST)

        if not cmd in ['upload']:
            self.render_to_response({'error': self.elfinder.error(
                ElfinderErrorMessages.ERROR_UPLOAD, ElfinderErrorMessages.ERROR_UPLOAD_TOTAL_SIZE)})
        return self.output(cmd, request.POST)


class ElfinderView(TemplateView):
    template_name = 'elfinder/elfinder.html'

    def get_context_data(self, **kwargs):
        context = super(ElfinderView, self).get_context_data(**kwargs)
        context["url"] = self.request.GET.get(
            "url", "/elfinder/yawd-connector/default/1/loginuser/")
        return context
