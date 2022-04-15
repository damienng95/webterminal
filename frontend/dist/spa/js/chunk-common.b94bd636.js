(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{2025:function(e,t,n){},"257f":function(e,t,n){"use strict";var o=n("2025"),a=n.n(o);a.a},"268c":function(e,t,n){"use strict";t["a"]={IDLE:0,CONNECTING:1,WAITING:2,CONNECTED:3,DISCONNECTING:4,DISCONNECTED:5,0:{name:"SUCCESS",text:"The operation succeeded. No error."},1:{name:"CONNECTING",text:"Connecting to Guacamole."},2:{name:"WAITING",text:"Connected to Guacamole. Waiting for response..."},3:{name:"CONNECTED",text:"Connect to the server success."},4:{name:"DISCONNECTING",text:"The user manually disconnect the server connection."},5:{name:"DISCONNECTED",text:"Disconnected from the server."},256:{name:"UNSUPPORTED",text:"The requested operation is unsupported."},512:{name:"SERVER_ERROR",text:"An internal error occurred, and the operation could not be performed."},513:{name:"SERVER_BUSY",text:"The operation could not be performed because the server is busy."},514:{name:"UPSTREAM_TIMEOUT",text:"The upstream server is not responding. In most cases, the upstream server is the remote desktop server."},515:{name:"UPSTREAM_ERROR",text:"The upstream server encountered an error. In most cases, the upstream server is the remote desktop server."},516:{name:"RESOURCE_NOT_FOUND",text:"An associated resource, such as a file or stream, could not be found, and thus the operation failed."},517:{name:"RESOURCE_CONFLICT",text:"A resource is already in use or locked, preventing the requested operation."},518:{name:"RESOURCE_CLOSED",text:"The requested operation cannot continue because the associated resource has been closed."},519:{name:"UPSTREAM_NOT_FOUND",text:"The upstream server does not appear to exist, or cannot be reached over the network. In most cases, the upstream server is the remote desktop server."},520:{name:"UPSTREAM_UNAVAILABLE",text:"The upstream server is refusing to service connections. In most cases, the upstream server is the remote desktop server."},521:{name:"SESSION_CONFLICT",text:"The session within the upstream server has ended because it conflicts with another session. In most cases, the upstream server is the remote desktop server."},522:{name:"SESSION_TIMEOUT",text:"The session within the upstream server has ended because it appeared to be inactive. In most cases, the upstream server is the remote desktop server."},523:{name:"SESSION_CLOSED",text:"The session within the upstream server has been forcibly closed. In most cases, the upstream server is the remote desktop server."},768:{name:"CLIENT_BAD_REQUEST",text:"The parameters of the request are illegal or otherwise invalid."},769:{name:"CLIENT_UNAUTHORIZED",text:"Permission was denied, because the user is not logged in. Note that the user may be logged into Guacamole, but still not logged in with respect to the remote desktop server."},771:{name:"CLIENT_FORBIDDEN",text:"Permission was denied, and logging in will not solve the problem."},776:{name:"CLIENT_TIMEOUT",text:"The client (usually the user of Guacamole or their browser) is taking too long to respond."},781:{name:"CLIENT_OVERRUN",text:"The client has sent more data than the protocol allows."},783:{name:"CLIENT_BAD_TYPE",text:"The client has sent data of an unexpected or illegal type."},797:{name:"CLIENT_TOO_MANY",text:"The client is already using too many resources. Existing resources must be freed before further requests are allowed."}}},"449f":function(e,t,n){"use strict";var o=n("a9c6"),a=n.n(o),s=function(e){var t=this;this.touchMouseThreshold=3,this.scrollThreshold=53,this.PIXELS_PER_LINE=18,this.PIXELS_PER_PAGE=16*this.PIXELS_PER_LINE,this.currentState=new a.a.Mouse.State(0,0,!1,!1,!1,!1,!1),this.onmousedown=null,this.onmouseup=null,this.onmousemove=null,this.onmouseout=null;var n=0,o=0;function s(e){e.stopPropagation(),e.preventDefault&&e.preventDefault(),e.returnValue=!1}function i(){n=t.touchMouseThreshold}function r(e){var n=e.deltaY||-e.wheelDeltaY||-e.wheelDelta;if(n?1===e.deltaMode?n=e.deltaY*t.PIXELS_PER_LINE:2===e.deltaMode&&(n=e.deltaY*t.PIXELS_PER_PAGE):n=e.detail*t.PIXELS_PER_LINE,o+=n,o<=-t.scrollThreshold){do{t.onmousedown&&(t.currentState.up=!0,t.onmousedown(t.currentState)),t.onmouseup&&(t.currentState.up=!1,t.onmouseup(t.currentState)),o+=t.scrollThreshold}while(o<=-t.scrollThreshold);o=0}if(o>=t.scrollThreshold){do{t.onmousedown&&(t.currentState.down=!0,t.onmousedown(t.currentState)),t.onmouseup&&(t.currentState.down=!1,t.onmouseup(t.currentState)),o-=t.scrollThreshold}while(o>=t.scrollThreshold);o=0}s(e)}e.addEventListener("contextmenu",(function(e){s(e)}),!1),e.addEventListener("mousemove",(function(o){n?n--:(t.currentState.fromClientPosition(e,o.clientX,o.clientY),t.onmousemove&&t.onmousemove(t.currentState))}),!1),e.addEventListener("mousedown",(function(e){if(s(e),!n){switch(e.button){case 0:t.currentState.left=!0;break;case 1:t.currentState.middle=!0;break;case 2:t.currentState.right=!0;break}t.onmousedown&&t.onmousedown(t.currentState)}}),!1),e.addEventListener("mouseup",(function(e){if(s(e),!n){switch(e.button){case 0:t.currentState.left=!1;break;case 1:t.currentState.middle=!1;break;case 2:t.currentState.right=!1;break}t.onmouseup&&t.onmouseup(t.currentState)}}),!1),e.addEventListener("mouseout",(function(n){n||(n=window.event);var o=n.relatedTarget||n.toElement;while(o){if(o===e)return;o=o.parentNode}s(n),(t.currentState.left||t.currentState.middle||t.currentState.right)&&(t.currentState.left=!1,t.currentState.middle=!1,t.currentState.right=!1,t.onmouseup&&t.onmouseup(t.currentState)),t.onmouseout&&t.onmouseout()}),!1),e.addEventListener("selectstart",(function(e){s(e)}),!1),e.addEventListener("touchmove",i,!1),e.addEventListener("touchstart",i,!1),e.addEventListener("touchend",i,!1),e.addEventListener("DOMMouseScroll",r,!1),e.addEventListener("mousewheel",r,!1),e.addEventListener("wheel",r,!1);var c=function(){var e=document.createElement("div");if(!("cursor"in e.style))return!1;try{e.style.cursor="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==) 0 0, auto"}catch(t){return!1}return/\burl\([^()]*\)\s+0\s+0\b/.test(e.style.cursor||"")}();this.setCursor=function(t,n,o){if(c){var a=t.toDataURL("image/png");return e.style.cursor="url("+a+") "+n+" "+o+", auto",!0}return!1}};s.State=a.a.Mouse.State,s.Touchpad=a.a.Mouse.Touchpad,s.Touchscreen=a.a.Mouse.Touchscreen,t["a"]={mouse:s}},"7ad4":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{staticClass:"shadow-2 rounded-borders",attrs:{view:"lhh LpR lff",container:""}},[n("q-tabs",{directives:[{name:"show",rawName:"v-show",value:e.showtab,expression:"showtab"}],attrs:{align:"left","active-color":"primary",stretch:"","no-caps":"",dense:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[n("q-tab",{key:"ssh",attrs:{name:"ssh"},on:{click:function(t){e.selected="ssh"}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[n("div",[e._v("\n          SSH\n        ")])]),n("q-tab",{key:"sftp",attrs:{name:"sftp"},on:{click:function(t){e.selected="sftp"}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[n("div",[e._v("\n          SFTP\n        ")])])],1),n("q-tab-panels",{staticClass:"fit",attrs:{animated:"","keep-alive":""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[n("q-tab-panel",{key:"ssh",attrs:{name:"ssh","keep-alive":""}},[n("div",{attrs:{id:e.id}}),n("q-page-sticky",{directives:[{name:"show",rawName:"v-show",value:e.showtoolbar,expression:"showtoolbar"}],attrs:{position:"right",offset:e.fabPos}},[n("q-fab",{directives:[{name:"touch-pan",rawName:"v-touch-pan.prevent.mouse",value:e.moveFab,expression:"moveFab",modifiers:{prevent:!0,mouse:!0}}],attrs:{glossy:"",icon:"add",direction:"up",color:"primary",disable:e.draggingFab},model:{value:e.toolbar,callback:function(t){e.toolbar=t},expression:"toolbar"}},[n("q-fab-action",{attrs:{square:"",color:"primary",icon:e.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen",disable:e.draggingFab},on:{click:function(t){return e.$q.fullscreen.toggle()}}}),n("q-fab-action",{attrs:{square:"",color:"primary",icon:"folder",disable:e.draggingFab},on:{click:function(t){return e.onClick("folder")}}})],1)],1)],1),n("q-tab-panel",{key:"sftp",attrs:{name:"sftp","keep-alive":""}},[n("keep-alive",[n("iframe",{staticStyle:{width:"100%"},attrs:{src:e.sftpaddress,frameborder:"0",allowfullscreen:"",height:e.height}})])],1)],1)],1)},a=[],s=(n("551c"),n("06db"),n("7f7f"),n("c5f6"),n("fcf3")),i=(n("abb2"),n("47d0")),r=n("173c"),c=n("fc74"),l=n.n(c),d=n("59a1"),u=n.n(d),h=n("c47a"),f=n.n(h),m=(n("34ef"),n("b123")),p=n.n(m);function b(e,t,n){void 0===t&&(t={});var o=this,a=function(t){return e.send(new Uint8Array(t))},s=null;function i(){return!!s.get_confirmed_session()||!t.noTerminalWriteOutsideSession}function r(e){"string"===typeof e.data?i()&&o.write(e.data):s.consume(e.data)}s=new p.a.Sentry({to_terminal:function(e){i()&&o.write(String.fromCharCode.apply(String,e))},sender:a,on_retract:n.onzmodemRetract,on_detect:n.onZmodemDetect}),e.binaryType="arraybuffer",e.addEventListener("message",r)}var v=function(){function e(){l()(this,e),f()(this,"_disposables",[])}return u()(e,[{key:"activate",value:function(e){e.zmodemAttach=b,e.zmodemBrowser=p.a.Browser}},{key:"dispose",value:function(){this._disposables.forEach((function(e){return e.dispose()})),this._disposables.length=0}}]),e}(),w=p.a,g={props:{id:{type:String,required:!0},username:{type:String,required:!0},password:{type:String,required:!0},serverid:{type:Number,required:!1},loginuser:{type:String,required:!1},showtoolbar:{type:Boolean,required:!1,default:!0},ip:{type:String,required:!1,default:null},commandid:{type:Number,required:!1,default:null}},name:"Terminal",data:function(){return{fabPos:[0,18],draggingFab:!1,fiton:null,term:null,ws:null,toolbar:!0,selected:"ssh",showtab:!1,height:window.innerHeight,sftpaddress:null,attachAddon:null,zsession:null}},methods:{onClick:function(e){console.log("Clicked on a fab action",e),"folder"===e&&(this.showtab=!this.showtab,"sftp"===this.selected?this.selected="sftp":this.selected="ssh")},moveFab:function(e){this.draggingFab=!0!==e.isFirst&&!0!==e.isFinal,this.fabPos=[this.fabPos[0]-e.delta.x,this.fabPos[1]-e.delta.y]},saveToDisk:function(e,t){return w.Browser.save_to_disk(t,e.get_details().name)},onWindowResize:function(){console.log("resize");try{this.showtoolbar?document.getElementById(this.id).style.height=window.innerHeight-94+"px":document.getElementById(this.id).style.height="180px",this.fiton.fit(),this.ws&&(console.log("send resize"),this.term.scrollToBottom(),this.ws.send(JSON.stringify(["set_size",this.term.cols,this.term.rows,this.term.cols,this.term.rows])))}catch(e){}},onOfferReceive:function(e){e.skip(),this.$q.notify({type:"negative",textColor:"grey-10",multiLine:!0,message:this.$t("Due to the low performance, please use web sftp function instead!"),timeout:5e3,position:"top"}),this.$q.notify({type:"negative",textColor:"grey-10",multiLine:!0,message:this.$t("SSH serssion has been aborted, Please recreate a new fressh session!"),timeout:5e3,position:"top"})},onZmodemEnd:function(){this.attachAddon=new r["AttachAddon"](this.ws),this.term.loadAddon(this.attachAddon),this.term.focus(),this.term.write("\r\n")},onZmodemEndSend:function(){this.zsession&&this.zsession.close&&this.zsession.close(),this.onZmodemEnd()},onZmodemCatch:function(e){console.log(e),this.onZmodemEnd()},onReceiveZmodemSession:function(){var e=this;return this.zsession.on("offer",this.onOfferReceive),this.zsession.start(),new Promise((function(t){e.zsession.on("session_end",t)})).then(this.onZmodemEnd).catch(this.onZmodemCatch)},onzmodemRetract:function(){console.log("zmodemRetract")},onZmodemDetect:function(e){this.attachAddon.dispose(),this.term.blur();var t=e.confirm();this.zsession=t,"receive"===t.type?this.onReceiveZmodemSession():(console.log("upload"),this.onZmodemEnd(),this.onZmodemEndSend(),this.$q.notify({type:"negative",textColor:"grey-10",multiLine:!0,message:this.$t("Due to the low performance, please use web sftp function instead!"),timeout:5e3,position:"top"}),this.$q.notify({type:"negative",textColor:"grey-10",multiLine:!0,message:this.$t("SSH serssion has been aborted, Please recreate a new fressh session!"),timeout:5e3,position:"top"}))}},created:function(){},mounted:function(){this.sftpaddress="/elfinder/?url=/elfinder/yawd-connector/sftp/".concat(this.serverid,"/").concat(this.loginuser,"/?webterminal-token-access=").concat(localStorage.getItem("webterminal-token-access"));var e=new s["Terminal"]({cursorBlink:!0,bellStyle:"sound",theme:"black",fullscreenWin:!0});this.term=e;var t=document.getElementById(this.id);this.showtoolbar?t.style.height=window.innerHeight-136+"px":t.style.height="180px";var n=new i["FitAddon"];e.loadAddon(n),e.open(t),this.fiton=n,this.fiton.fit(),e.focus();var o=new v;e.loadAddon(o),window.addEventListener("resize",this.onWindowResize);var a="https:"===window.location.protocol?"wss":"ws",c="",l="ws";this.ip&&(l="execute"),c="".concat(a,"://").concat(window.location.hostname,":").concat(window.location.port,"/").concat(l,"?username=").concat(this.username,"&password=").concat(this.password,"&width=").concat(e.cols,"&height=").concat(e.rows,"&ip=").concat(this.ip,"&commandid=").concat(this.commandid);var d=new WebSocket(c);e.zmodemAttach(d,{noTerminalWriteOutsideSession:!0},this),this.attachAddon=new r["AttachAddon"](d,void 0,"utf-8");var u=new r["AttachAddon"](d),h=this;d.onopen=function(t){e.loadAddon(u),e._initialized=!0,h.ws=d},d.onclose=function(){h.ws=null}},beforeDestroy:function(){console.log("destory"),window.removeEventListener("resize",this.onWindowResize)},components:{}},y=g,S=n("2877"),E=n("4d5a"),T=n("429b"),k=n("7460"),C=n("adad"),x=n("823b"),A=n("de5e"),N=n("c294"),q=n("72db"),I=n("75c3"),L=n("eebe"),_=n.n(L),R=Object(S["a"])(y,o,a,!1,null,null,null);t["a"]=R.exports;_()(R,"components",{QLayout:E["a"],QTabs:T["a"],QTab:k["a"],QTabPanels:C["a"],QTabPanel:x["a"],QPageSticky:A["a"],QFab:N["a"],QFabAction:q["a"]}),_()(R,"directives",{TouchPan:I["a"]})},a4ec:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{staticClass:"shadow-2 rounded-borders",attrs:{view:"lhh LpR lff",container:""}},[n("q-tabs",{directives:[{name:"show",rawName:"v-show",value:e.showtab,expression:"showtab"}],attrs:{align:"left","active-color":"primary",stretch:"","no-caps":"",dense:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[n("q-tab",{key:"rdp",attrs:{name:"rdp"},on:{click:function(t){e.selected="rdp"}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[n("div",[e._v("\n          RDP\n        ")])]),n("q-tab",{key:"file",attrs:{name:"file"},on:{click:function(t){e.selected="file"}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[n("div",[e._v("\n          File Management\n        ")])])],1),n("q-tab-panels",{staticClass:"fit",attrs:{animated:"","keep-alive":""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[n("q-tab-panel",{key:"rdp",attrs:{name:"rdp","keep-alive":""}},[n("div",{ref:"viewport",staticClass:"viewport"},[n("div",{ref:"display",staticClass:"display",attrs:{tabindex:"0"}}),n("q-dialog",{model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[n("q-card",{attrs:{color:"warning",flat:""}},[n("q-card-section",{staticClass:"row items-center q-pb-none"},[n("div",{staticClass:"text-h6"},[e._v(e._s(e.title))]),n("q-space"),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),n("q-card-section",{staticClass:"q-pt-none"},[e._v("\n                "+e._s(e.errorMessage)+"\n              ")]),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{attrs:{flat:"",label:"Reconnect",color:"primary"},on:{click:e.reconnect}}),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1)],1),n("q-page-sticky",{attrs:{position:"right",offset:e.fabPos}},[n("q-fab",{directives:[{name:"touch-pan",rawName:"v-touch-pan.prevent.mouse",value:e.moveFab,expression:"moveFab",modifiers:{prevent:!0,mouse:!0}}],attrs:{glossy:"",icon:"add",direction:"up",color:"primary",disable:e.draggingFab},model:{value:e.toolbar,callback:function(t){e.toolbar=t},expression:"toolbar"}},[n("q-fab-action",{attrs:{square:"",color:"primary",icon:e.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen",disable:e.draggingFab},on:{click:function(t){return e.$q.fullscreen.toggle()}}}),n("q-fab-action",{attrs:{square:"",color:"primary",icon:"folder",disable:e.draggingFab},on:{click:function(t){return e.onClick("folder")}}})],1)],1)],1)]),n("q-tab-panel",{key:"file",attrs:{name:"file","keep-alive":""}},[n("keep-alive",[n("iframe",{staticStyle:{width:"100%"},attrs:{src:e.sftpaddress,frameborder:"0",allowfullscreen:"",height:e.height}})])],1)],1)],1)},a=[],s=(n("ac6a"),n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("6b54"),n("06db"),n("f751"),n("7f7f"),n("c5f6"),n("a9c6")),i=n.n(s),r=n("449f"),c=n("cf78"),l=n("268c");function d(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=u(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,s=!0,i=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return s=e.done,e},e:function(e){i=!0,a=e},f:function(){try{s||null==o.return||o.return()}finally{if(i)throw a}}}}function u(e,t){if(e){if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}i.a.Mouse=r["a"].mouse;var f="",m="",p="https:"===window.location.protocol?"wss":"ws";f="".concat(p,"://").concat(window.location.hostname,":").concat(window.location.port,"/websocket-tunnel"),m="".concat(window.location.protocol,"://").concat(location.host,":").concat(window.location.port,"/tunnel");var b={components:{},props:{forceHttp:{type:Boolean,required:!1,default:!1},username:{type:String,required:!0},password:{type:String,required:!0},serverid:{type:Number,required:!1},loginuser:{type:String,required:!1}},data:function(){return{sftpaddress:null,height:window.innerHeight,showtab:!1,selected:"rdp",toolbar:!0,draggingFab:!1,fabPos:[0,18],alert:!1,connected:!1,display:null,currentAdjustedHeight:null,client:null,keyboard:null,mouse:null,lastEvent:null,connectionState:l["a"].IDLE,arguments:{},errorMessage:"",title:"",query:"username=user&password=pass"}},watch:{connectionState:function(e){e>=5&&(this.errorMessage=l["a"][e].text,this.title=l["a"][e].name,this.alert=!0)},selected:function(e){"rdp"===e&&this.resize()}},methods:{onClick:function(e){console.log("Clicked on a fab action",e),"folder"===e&&(this.showtab=!this.showtab,"rdp"===this.selected?this.selected="rdp":this.selected="file")},moveFab:function(e){this.draggingFab=!0!==e.isFirst&&!0!==e.isFinal,this.fabPos=[this.fabPos[0]-e.delta.x,this.fabPos[1]-e.delta.y]},reconnect:function(){this.alert=!1,this.connect(this.query)},send:function(e){if(this.client){var t,n=d(e.data);try{for(n.s();!(t=n.n()).done;){var o=t.value;this.client.sendKeyEvent(1,o.charCodeAt(0))}}catch(a){n.e(a)}finally{n.f()}}},copy:function(e){this.client&&(c["a"].cache={type:"text/plain",data:e.data},c["a"].setRemoteClipboard(this.client))},handleMouseState:function(e){var t=Object.assign({},e,{x:e.x/this.display.getScale(),y:e.y/this.display.getScale()});this.client.sendMouseState(t)},resize:function(){var e=this,t=this.$refs.viewport;if(t&&t.offsetWidth){var n=window.devicePixelRatio||1,o=t.clientWidth*n,a=t.clientHeight*n;this.display.getWidth()===o&&this.display.getHeight()===a||this.client.sendSize(o,a),setTimeout((function(){var n=Math.min(t.clientWidth/Math.max(e.display.getWidth(),1),t.clientHeight/Math.max(e.display.getHeight(),1));e.display.scale(n)}),100)}},connect:function(e){var t,n=this;t=window.WebSocket&&!this.forceHttp?new i.a.WebSocketTunnel(f):new i.a.HTTPTunnel(m,!0),this.client&&(this.display.scale(0),this.uninstallKeyboard()),this.client=new i.a.Client(t),c["a"].install(this.client),t.onerror=function(e){console.error("Tunnel failed ".concat(JSON.stringify(e))),n.connectionState=e.code},t.onstatechange=function(e){switch(console.log("tunnel on state change",e),e){case i.a.Tunnel.State.CONNECTING:n.connectionState=l["a"].CONNECTING;break;case i.a.Tunnel.State.OPEN:n.connectionState=l["a"].CONNECTED;break;case i.a.Tunnel.State.UNSTABLE:break;case i.a.Tunnel.State.CLOSED:n.connectionState=l["a"].DISCONNECTED;break}},this.client.onstatechange=function(e){switch(console.log("client on state change",e),e){case 0:n.connectionState=l["a"].IDLE;break;case 1:break;case 2:n.connectionState=l["a"].WAITING;break;case 3:n.connectionState=l["a"].CONNECTED,window.addEventListener("resize",n.resize),n.$refs.viewport.addEventListener("mouseenter",n.resize),c["a"].setRemoteClipboard(n.client);case 4:case 5:break}},this.client.onerror=function(e){console.log("client on error",e),n.client.disconnect(),console.error("Client error ".concat(JSON.stringify(e))),n.connectionState=e.code},this.client.onsync=function(){},this.client.onargv=function(e,t,o){if("text/plain"===t){var a=new i.a.StringReader(e),s="";a.ontext=function(e){s+=e},a.onend=function(){var e=n.client.createArgumentValueStream("text/plain",o);e.onack=function(e){e.isError()||(n.arguments[o]=s)}}}},this.client.onclipboard=c["a"].onClipboard,this.display=this.client.getDisplay();var o=this.$refs.display;o.appendChild(this.display.getElement()),o.addEventListener("contextmenu",(function(e){e.stopPropagation(),e.preventDefault&&e.preventDefault(),e.returnValue=!1})),this.client.connect(e),window.onunload=function(){return n.client.disconnect()},this.mouse=new i.a.Mouse(o),this.mouse.onmouseout=function(){n.display&&n.display.showCursor(!1)},o.onclick=function(){o.focus()},o.onfocus=function(){o.className="focus"},o.onblur=function(){o.className=""},this.keyboard=new i.a.Keyboard(o),this.installKeyboard(),this.mouse.onmousedown=this.mouse.onmouseup=this.mouse.onmousemove=this.handleMouseState,setTimeout((function(){n.resize(),o.focus()}),1e3)},installKeyboard:function(){var e=this;this.keyboard.onkeydown=function(t){e.client.sendKeyEvent(1,t)},this.keyboard.onkeyup=function(t){e.client.sendKeyEvent(0,t)}},uninstallKeyboard:function(){this.keyboard.onkeydown=this.keyboard.onkeyup=function(){}}},mounted:function(){if(this.query&&!this.connected){this.connected=!0;var e=this.$refs.viewport,t=window.devicePixelRatio||1,n=e.clientWidth*t,o=e.clientHeight*t;this.connect("username=".concat(this.username,"&password=").concat(this.password,"&width=").concat(n,"&height=").concat(o)),this.query="username=".concat(this.username,"&password=").concat(this.password,"&width=").concat(n,"&height=").concat(o)}this.sftpaddress="/elfinder/?url=/elfinder/yawd-connector/default/".concat(this.serverid,"/").concat(this.loginuser,"/?webterminal-token-access=").concat(localStorage.getItem("webterminal-token-access"))}},v=b,w=(n("257f"),n("2877")),g=n("4d5a"),y=n("429b"),S=n("7460"),E=n("adad"),T=n("823b"),k=n("24e8"),C=n("f09f"),x=n("a370"),A=n("2c91"),N=n("9c40"),q=n("4b7e"),I=n("de5e"),L=n("c294"),_=n("72db"),R=n("7f67"),O=n("75c3"),P=n("eebe"),D=n.n(P),M=Object(w["a"])(v,o,a,!1,null,"20e39290",null);t["a"]=M.exports;D()(M,"components",{QLayout:g["a"],QTabs:y["a"],QTab:S["a"],QTabPanels:E["a"],QTabPanel:T["a"],QDialog:k["a"],QCard:C["a"],QCardSection:x["a"],QSpace:A["a"],QBtn:N["a"],QCardActions:q["a"],QPageSticky:I["a"],QFab:L["a"],QFabAction:_["a"]}),D()(M,"directives",{ClosePopup:R["a"],TouchPan:O["a"]})},cf78:function(e,t,n){"use strict";var o=n("967e"),a=n.n(o),s=(n("96cf"),n("fa84")),i=n.n(s),r=n("a9c6"),c=n.n(r),l={install:function(e){l.getLocalClipboard().then((function(e){return l.cache=e})),window.addEventListener("load",l.update(e),!0),window.addEventListener("copy",l.update(e)),window.addEventListener("cut",l.update(e)),window.addEventListener("focus",(function(t){t.target===window&&l.update(e)()}),!0)},update:function(e){return function(){l.getLocalClipboard().then((function(t){l.cache=t,l.setRemoteClipboard(e)}))}},setRemoteClipboard:function(e){if(l.cache){var t,n=e.createClipboardStream(l.cache.type);"string"===typeof l.cache.data?(t=new c.a.StringWriter(n),t.sendText(l.cache.data),t.sendEnd()):(t=new c.a.BlobWriter(n),t.oncomplete=function(){t.sendEnd()},t.sendBlob(l.cache.data))}}};l.getLocalClipboard=i()(a.a.mark((function e(){var t;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!navigator.clipboard||!navigator.clipboard.readText){e.next=5;break}return e.next=3,navigator.clipboard.readText();case 3:return t=e.sent,e.abrupt("return",{type:"text/plain",data:t});case 5:case"end":return e.stop()}}),e)}))),l.setLocalClipboard=function(){var e=i()(a.a.mark((function e(t){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!navigator.clipboard||!navigator.clipboard.writeText){e.next=4;break}if("text/plain"!==t.type){e.next=4;break}return e.next=4,navigator.clipboard.writeText(t.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l.onClipboard=function(e,t){var n;if(/^text\//.exec(t)){n=new c.a.StringReader(e);var o="";n.ontext=function(e){o+=e},n.onend=function(){l.setLocalClipboard({type:t,data:o})}}else n=new c.a.BlobReader(e,t),n.onend=function(){l.setLocalClipboard({type:t,data:n.getBlob()})}},t["a"]=l}}]);