# -*- coding: utf-8 -*-
"""
Django settings for webterminal project.
Generated by 'django-admin startproject' using Django 1.11.5.
For more information on this file, see
https://docs.djangoproject.com/en/1.11/topics/settings/
For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.11/ref/settings/
"""

from django.conf.locale.en import formats as en_formats
import os
import sys
from django.utils.translation import gettext_lazy as _
from datetime import timedelta

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.11/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '$@naaul9f4zi*3s%bze)5cq)q5ufwi!gj5do=area84pimi9p*'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'webterminal',
    'channels',
    'rest_framework.authtoken',
    'rest_framework_simplejwt.token_blacklist',
    'rest_framework',
    'elfinder',
    'guacamole',
    'permission',
    'common',
    # 'guardian',
    'django_otp',
    'django_otp.plugins.otp_totp',
    'django_otp.plugins.otp_hotp',
    'django_otp.plugins.otp_static',
    'crispy_forms',
    'corsheaders'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django_otp.middleware.OTPMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'webterminal.urls'
OTP_TOTP_ISSUER = 'webterminal'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'debug': True,
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'django.template.context_processors.i18n',
                'common.context_processors.detect_webterminal_helper_is_installed'
            ],
        },
    },
]

WSGI_APPLICATION = 'webterminal.wsgi.application'

ASGI_APPLICATION = "webterminal.routing.application"


# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db', 'db.sqlite3'),
    }
}


# Password validation
# https://docs.djangoproject.com/en/1.11/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/

STATIC_URL = '/static/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static"),
]

# Channels settings
CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",  # use redis backend
        "CONFIG": {
            "hosts": [(os.environ.get('REDISHOST','localhost'), 6379)],  # set redis address
            "channel_capacity": {
                "http.request": 1000,
                "websocket.send*": 10000,
            },
            "capacity": 1000000000,
        }
    },
}

# Rest framework api auth config
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
        # 'rest_framework_simplejwt.authentication.JWTTokenUserAuthentication',
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.SessionAuthentication'
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
        'rest_framework.permissions.IsAdminUser',
        "rest_framework.permissions.DjangoModelPermissions"
    ),
    'DEFAULT_PARSER_CLASSES': (
        'rest_framework.parsers.JSONParser',
        'rest_framework.parsers.MultiPartParser',
        'rest_framework.parsers.FormParser',
    ),
    # 'PAGE_SIZE': 10
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=1200),
    'REFRESH_TOKEN_LIFETIME': timedelta(hours=20),
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': True,

    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,
    'AUDIENCE': None,
    'ISSUER': None,

    'AUTH_HEADER_TYPES': ('Bearer', 'JWT', 'TOKEN', 'Webterminal-jwt'),
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',

    # 'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.RefreshToken',),
    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',

    'UPDATE_LAST_LOGIN': True,

    'JTI_CLAIM': 'jti',

    'SLIDING_TOKEN_REFRESH_EXP_CLAIM': 'refresh_exp',
    'SLIDING_TOKEN_LIFETIME': timedelta(minutes=5),
    'SLIDING_TOKEN_REFRESH_LIFETIME': timedelta(days=1),
    'JWT_AUTH_COOKIE': 'JWT',
}

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

LOCALE_PATHS = [
    os.path.join(BASE_DIR, 'locale')
]

LOG_LEVEL = 'DEBUG' if DEBUG else 'INFO'

# Logging setting
if not DEBUG:
    LOGGING = {
        'version': 1,
        'disable_existing_loggers': False,
        'formatters': {
            'verbose': {
                'format': '%(levelname)s %(asctime)s %(module)s %(process)d %(thread)d %(message)s'
            },
            'main': {
                'datefmt': '%Y-%m-%d %H:%M:%S',
                'format': '%(asctime)s [%(module)s %(levelname)s] %(message)s',
            },
            'simple': {
                'format': '%(levelname)s %(message)s'
            },
        },
        'handlers': {
            'null': {
                'level': 'DEBUG',
                'class': 'logging.NullHandler',
            },
            'console': {
                'level': 'DEBUG',
                'class': 'logging.StreamHandler',
                'formatter': 'main'
            },
            'file': {
                'level': 'DEBUG',
                'class': 'logging.FileHandler',
                'formatter': 'main',
                'filename': os.path.join(BASE_DIR, 'log', 'webterminal.log')
            },
            'sshconsumer': {
                'level': 'DEBUG',
                'class': 'logging.FileHandler',
                'formatter': 'main',
                'filename': os.path.join(BASE_DIR, 'log', 'sshconsumer.log')
            },
        },
        'loggers': {
            'django': {
                'handlers': ['null'],
                'propagate': False,
                'level': LOG_LEVEL,
            },
            'django.request': {
                'handlers': ['console', 'file'],
                'level': LOG_LEVEL,
                'propagate': False,
            },
            'django.server': {
                'handlers': ['console', 'file'],
                'level': LOG_LEVEL,
                'propagate': False,
            },
            'webterminal.views': {
                'handlers': ['console', 'file'],
                'level': LOG_LEVEL,
                'propagate': False,
            },
            'webterminal.consumers': {
                'handlers': ['console', 'sshconsumer'],
                'level': LOG_LEVEL,
                'propagate': False,
            },
            'webterminal.interactive': {
                'handlers': ['console', 'sshconsumer'],
                'level': LOG_LEVEL,
                'propagate': False,
            },
            'webterminal.sudoterminal': {
                'handlers': ['console', 'sshconsumer'],
                'level': LOG_LEVEL,
                'propagate': False,
            },
            'django.db': {
                'handlers': ['console', 'file'],
                'level': 'INFO'
            }
        }
    }

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    # 'guardian.backends.ObjectPermissionBackend',
)

CRISPY_TEMPLATE_PACK = 'bootstrap3'

en_formats.DATETIME_FORMAT = 'Y-m-d H:i:s'
en_formats.DATETIME_INPUT_FORMATS = 'Y-m-d H:i:s'

LANGUAGES = [
    ('zh-hans', _('Simple Chinese')),
    ('en', _('English')),
    ('zh-hant', _('traditional Chinese')),
]

CHANNELS_WS_PROTOCOLS = ["guacamole"]

# guacd daemon host address and port
GUACD_HOST = os.environ.get('GUACDHOST','127.0.0.1')
GUACD_PORT = '4822'

# session will expire when user close browser
SESSION_EXPIRE_AT_BROWSER_CLOSE = True
SESSION_SAVE_EVERY_REQUEST = False

try:
    sys.path.append(os.getcwd() + '/..')
    from extra_settings import *
except ImportError:
    # session will expire in 30 minutes
    SESSION_COOKIE_AGE = 30 * 60 * 60
    EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"
    pass

CORS_ORIGIN_ALLOW_ALL = False
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOW_METHODS = [
    'DELETE',
    'GET',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
]
CSRF_TRUSTED_ORIGINS = [
    '127.0.0.1',
]
CORS_ORIGIN_WHITELIST = [
    'http://127.0.0.1:8080',
]
CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
    'X-Frame-Options'
]
X_FRAME_OPTIONS = 'ALLOW-FROM http://127.0.0.1:8080/'
APPEND_SLASH = False
USE_X_FORWARDED_HOST = True
USE_X_FORWARDED_PORT = True
