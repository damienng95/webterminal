(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"0668":function(t,e,a){},"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{staticClass:"bg-grey-1",attrs:{view:"hHh lpR fFf"}},[a("q-header",{staticClass:"bg-white text-grey-8 q-py-xs",attrs:{elevated:"","height-hint":"58"}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),t.$q.screen.gt.xs?a("q-btn",{staticClass:"q-ml-xs",attrs:{flat:"","no-caps":"","no-wrap":""}},[a("q-toolbar-title",{staticClass:"text-weight-bold",attrs:{shrink:""}},[t._v("\n            Webterminal\n          ")])],1):t._e(),a("q-space"),a("div",{staticClass:"q-gutter-sm row items-center no-wrap"},[t.$q.screen.gt.sm?a("q-btn",{attrs:{round:"",dense:"",flat:"",color:"primary",icon:t.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen"},on:{click:function(e){return t.$q.fullscreen.toggle()}}}):t._e(),t.$q.screen.gt.sm?a("q-btn",{attrs:{round:"",dense:"",flat:"",color:"grey-8",icon:"message"}},[a("q-tooltip",[t._v("Messages")])],1):t._e(),a("q-btn",{attrs:{round:"",dense:"",flat:"",color:"grey-8",icon:"notifications"}},[a("q-badge",{attrs:{color:"red","text-color":"white",floating:""}},[t._v("\n              "+t._s(t.message_count)+"\n            ")]),a("q-menu",[a("q-list",{staticStyle:{"min-width":"100px"}},[a("messages"),a("q-card",{staticClass:"text-center no-shadow no-border"},[a("q-btn",{staticClass:"text-indigo-8",staticStyle:{"max-width":"120px !important"},attrs:{label:"View All",flat:"",dense:""}})],1)],1)],1),a("q-tooltip",[t._v("Notifications")])],1),a("q-btn",{attrs:{round:"",flat:""}},[a("q-avatar",{attrs:{size:"26px"}},[a("img",{attrs:{src:t.userInfo.avatar}})]),a("q-tooltip",[t._v("Account")]),a("q-menu",[a("q-list",{staticStyle:{"min-width":"100px"}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{src:t.userInfo.avatar}})])],1),a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v(t._s(t.userInfo.username))]),a("q-item-label",{attrs:{caption:"",lines:"4"}},[a("span",{staticClass:"text-weight-bold"},[t._v(t._s(t.userInfo.role))])])],1)],1),a("q-separator",{attrs:{inset:"item"}}),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[a("q-item-section",[t._v("My Profile")])],1),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[a("q-item-section",{on:{click:t.Logout}},[t._v("Log Out")])],1)],1)],1)],1)],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-2",width:240},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-scroll-area",{staticClass:"fit"},[a("q-list",{attrs:{padding:""}},[t._l(t.links1,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.text,attrs:{clickable:"",to:{name:e.name},"active-class":"my-menu-link",active:t.linked===e.icon},on:{click:function(a){t.linked=e.icon}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"grey",name:e.icon}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t(e.text)))])],1)],1)})),a("q-separator",{directives:[{name:"show",rawName:"v-show",value:t.links2.length>0,expression:"links2.length > 0"}],staticClass:"q-my-md"}),t._l(t.links2,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.text,attrs:{clickable:"","active-class":"my-menu-link",to:{name:e.name},active:t.linked===e.icon},on:{click:function(a){t.linked=e.icon}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"grey",name:e.icon}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t(e.text)))])],1)],1)})),a("q-separator",{directives:[{name:"show",rawName:"v-show",value:t.links3.length>0,expression:"links3.length > 0"}],staticClass:"q-mt-md q-mb-xs"}),t._l(t.links3,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.text,attrs:{clickable:"","active-class":"my-menu-link",to:{name:e.name},active:t.linked===e.icon},on:{click:function(a){t.linked=e.icon}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"grey",name:e.icon}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t(e.text)))])],1)],1)})),a("q-separator",{staticClass:"q-mt-md q-mb-lg"}),a("div",{staticClass:"q-px-md text-grey-9"},[a("div",{staticClass:"row items-center q-gutter-x-sm q-gutter-y-xs"},t._l(t.buttons1,(function(e){return a("a",{key:e.text,staticClass:"YL__drawer-footer-link",attrs:{href:"/#/"+e.name}},[t._v("\n                "+t._s(t.$t(e.text))+"\n              ")])})),0)]),a("div",{staticClass:"q-py-md q-px-md text-grey-9"},[a("div",{staticClass:"row items-center q-gutter-x-sm q-gutter-y-xs"},t._l(t.buttons2,(function(e){return a("a",{key:e.text,staticClass:"YL__drawer-footer-link",attrs:{href:"/#/"+e.name}},[t._v("\n                "+t._s(t.$t(e.text))+"\n              ")])})),0)]),a("div",{staticClass:"q-py-md q-px-md text-grey-9"},[a("div",{staticClass:"row items-center q-gutter-x-sm q-gutter-y-xs"},[t._v("\n              © 2021 Webterminal\n            ")])])],2)],1)],1),a("q-page-container",[a("router-view")],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.messages,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,staticStyle:{"max-width":"420px"},attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{src:e.avatar}})])],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e.name))]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v(t._s(e.msg))])],1),a("q-item-section",{attrs:{side:""}},[t._v("\n      "+t._s(e.time)+"\n    ")])],1)})),1)},r=[],o={name:"Messages",data:function(){return{messages:[]}}},l=o,c=a("2877"),m=a("66e5"),u=a("4074"),p=a("cb32"),d=a("0170"),v=a("714f"),q=a("eebe"),g=a.n(q),f=Object(c["a"])(l,i,r,!1,null,"0b309509",null),b=f.exports;g()(f,"components",{QItem:m["a"],QItemSection:u["a"],QAvatar:p["a"],QItemLabel:d["a"]}),g()(f,"directives",{Ripple:v["a"]});var x={name:"MyLayout",data:function(){return{linked:"",leftDrawerOpen:!1,links1:[],links2:[],links3:[],buttons1:[{text:"About",name:"about"},{text:"Contact us",name:"contact"}],buttons2:[],message_count:0}},mounted:function(){this.links1=[{icon:"home",text:"Webterminal",name:"home"},{icon:"play_arrow",text:"Command execution",name:"play_arrow"},{icon:"playlist_play",text:"Batch command execution",name:"playlist_play"}],this.links2=[{icon:"format_list_numbered",text:"Credential",name:"credential"},{icon:"devices",text:"Server",name:"server"},{icon:"group_work",text:"Group",name:"group"},{icon:"list_alt",text:"Commands",name:"command"}],this.links3=[{icon:"view_list",text:"Audit",name:"log"},{icon:"account_box",text:"User",name:"user"},{icon:"lock",text:"Permission",name:"permission"},{icon:"settings",text:"Settings",name:"setting"}],this.getMenuList()},components:{Messages:b},computed:{userInfo:function(){var t=localStorage.getItem("userinfo");return t?JSON.parse(t):{username:"Anonymous",avatar:"https://cdn.quasar.dev/img/boy-avatar.png",role:"Developer"}}},methods:{Logout:function(){this.$store.dispatch("Logout")},getMenuList:function(){var t=this;this.$axios.get("/permission/api/getmenulist/").then((function(e){t.links1=e.data.links1,t.links2=e.data.links2,t.links3=e.data.links3})).catch((function(t){console.log(t)}))}}},_=x,k=(a("83ec"),a("4d5a")),w=a("e359"),h=a("65c6"),y=a("9c40"),C=a("068f"),Q=a("6ac5"),I=a("2c91"),$=a("05c0"),L=a("58a8"),S=a("4e73"),N=a("1c1c"),O=a("f09f"),A=a("eb85"),M=a("9404"),D=a("4983"),P=a("0016"),T=a("09e3"),B=a("7f67"),J=Object(c["a"])(_,n,s,!1,null,null,null);e["default"]=J.exports;g()(J,"components",{QLayout:k["a"],QHeader:w["a"],QToolbar:h["a"],QBtn:y["a"],QImg:C["a"],QToolbarTitle:Q["a"],QSpace:I["a"],QTooltip:$["a"],QBadge:L["a"],QMenu:S["a"],QList:N["a"],QCard:O["a"],QAvatar:p["a"],QItem:m["a"],QItemSection:u["a"],QItemLabel:d["a"],QSeparator:A["a"],QDrawer:M["a"],QScrollArea:D["a"],QIcon:P["a"],QPageContainer:T["a"]}),g()(J,"directives",{Ripple:v["a"],ClosePopup:B["a"]})},"83ec":function(t,e,a){"use strict";var n=a("0668"),s=a.n(n);s.a}}]);