(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"206c":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"q-pa-md"},[s("q-table",{attrs:{title:e.$t("permission.Permission"),data:e.data,columns:e.columns,"row-key":"name",filter:e.filter,color:"primary",loading:e.loading},scopedSlots:e._u([{key:"top",fn:function(t){return[s("q-btn",{attrs:{color:"primary",label:e.$t("permission.new"),"no-caps":""},on:{click:e.AddNewPermission}}),s("q-space"),s("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:e.$t("Search"),filled:""},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!0),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),s("q-btn",{staticClass:"q-ml-md",attrs:{flat:"",round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:t.toggleFullscreen}})]}},{key:"header",fn:function(t){return[s("q-tr",{attrs:{props:t}},e._l(t.cols,(function(i){return s("q-th",{key:i.name,attrs:{props:t}},[e._v("\n          "+e._s(i.label)+"\n        ")])})),1)]}},{key:"body-cell-action",fn:function(t){return[s("q-td",{attrs:{props:t}},[s("q-btn",{attrs:{dense:"",round:"",flat:"",color:"grey",icon:"edit"},on:{click:function(s){return e.editRow(t)}}}),s("q-btn",{attrs:{dense:"",round:"",flat:"",color:"grey",icon:"delete"},on:{click:function(s){return e.deleteRow(t)}}})],1)]}},{key:"body-cell-user",fn:function(t){return[s("q-td",{attrs:{props:t}},[e._v("\n        "+e._s(t.row.user.username)+"\n      ")])]}},{key:"body-cell-groups",fn:function(t){return[s("q-td",{attrs:{props:t}},e._l(t.row.groups,(function(t,i){return s("a",{key:i},[e._v("\n          "+e._s(t.name)+"\n          "),s("br")])})),0)]}},{key:"body-cell-permissions",fn:function(t){return[s("q-td",{attrs:{props:t}},e._l(t.row.permissions,(function(t){return s("a",{key:t.id},[e._v("\n          "+e._s(e.$t(t.name))+"\n          "),s("br")])})),0)]}},{key:"loading",fn:function(){return[s("q-inner-loading",{attrs:{showing:"",color:"primary"}})]},proxy:!0}])}),s("q-dialog",{attrs:{"full-width":"","full-height":"",maximized:!0},model:{value:e.createpermissionmodal,callback:function(t){e.createpermissionmodal=t},expression:"createpermissionmodal"}},[s("q-card",[s("q-card-section",{staticClass:"row items-center q-pb-none"},[s("div",{staticClass:"text-h6"},[e._v(e._s(e.modaltitle))]),s("q-space"),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),s("q-card-section",[s("div",[s("div",{staticClass:"q-pa-md"},[s("q-form",{staticClass:"q-gutter-md",on:{submit:e.onSubmit,reset:e.onReset}},[s("q-select",{attrs:{"option-value":"value","use-input":"","use-chips":"","emit-value":"","map-options":"",label:e.$t("permission.Users"),"input-debounce":"0",options:e.users_list},on:{filter:e.filterUsers},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),s("div",[e._v("\n                "+e._s(e.$t("permission.Groups"))+"\n                "),e._l(e.groups,(function(t,i){return s("div",{key:i,staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("q-select",{attrs:{"use-input":"","input-debounce":"0",label:e.$t("permission.Group"),options:e.groups_list},on:{filter:e.filterFn},scopedSlots:e._u([{key:"no-option",fn:function(){return[s("q-item",[s("q-item-section",{staticClass:"text-grey"},[e._v("\n                            No results\n                          ")])],1)]},proxy:!0}],null,!0),model:{value:t.group,callback:function(s){e.$set(t,"group",s)},expression:"line.group"}})],1),s("div",{staticClass:"col-lg-1"},[s("div",{staticClass:"block float-left"},[s("q-btn",{attrs:{round:"",icon:"delete"},on:{click:function(t){return e.removeGroup(i)}}}),i+1===e.groups.length?s("q-btn",{attrs:{round:"",icon:"add"},on:{click:e.addGroup}}):e._e()],1)])])}))],2),s("div",[e._v("\n                "+e._s(e.$t("permission.Credential"))+"\n                "),e._l(e.lines,(function(t,i){return s("div",{key:i,staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("q-select",{attrs:{"use-input":"","input-debounce":"0",label:e.$t("permission.credential"),options:e.credentials_list},on:{filter:e.filterCredential},scopedSlots:e._u([{key:"no-option",fn:function(){return[s("q-item",[s("q-item-section",{staticClass:"text-grey"},[e._v("\n                            No results\n                          ")])],1)]},proxy:!0}],null,!0),model:{value:t.credential,callback:function(s){e.$set(t,"credential",s)},expression:"line.credential"}})],1),s("div",{staticClass:"col-lg-1"},[s("div",{staticClass:"block float-left"},[s("q-btn",{attrs:{round:"",icon:"delete"},on:{click:function(t){return e.removeLine(i)}}}),i+1===e.lines.length?s("q-btn",{attrs:{round:"",icon:"add"},on:{click:e.addLine}}):e._e()],1)])])}))],2),s("div",[e._v("\n                "+e._s(e.$t("permission.Permissions"))+"\n                "),s("q-list",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{"no-border":""}},[e._l(e.permissiontree,(function(t,i){return[s("q-item",{key:i},[s("q-slide-item",{staticStyle:{"min-width":"100px"}},[s("q-item-label",[s("q-chip",{attrs:{color:"info"}},[e._v("\n                            "+e._s(e.$t(t.Name))+"\n                          ")])],1)],1),s("div",e._l(t.values,(function(i){return s("q-checkbox",{key:i.name,staticStyle:{"min-width":"150px"},attrs:{val:i,label:e.$t(i.Name)},model:{value:t.selectedValues,callback:function(s){e.$set(t,"selectedValues",s)},expression:"item.selectedValues"}})})),1)],1)]}))],2)],1),s("q-tree",{staticClass:"col-12 col-sm-6",attrs:{nodes:e.permissiontree,"node-key":"label","tick-strategy":e.tickStrategy,ticked:e.ticked,expanded:e.expanded,"default-expand-all":""},on:{"update:ticked":function(t){e.ticked=t},"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"default-header",fn:function(t){return[s("div",{staticClass:"row items-center"},[s("div",{staticClass:"text-default"},[e._v(e._s(e.$t("permissiontree."+t.node.text)))])])]}}])}),s("div",[s("q-btn",{attrs:{label:e.$t("Submit"),type:"submit",color:"primary"}}),s("q-btn",{staticClass:"q-ml-sm",attrs:{label:e.$t("Reset"),type:"reset",color:"primary",flat:""}})],1)],1)],1)])])],1)],1)],1)},n=[],o=(s("5df3"),s("4f7f"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("7f7f"),{name:"Permission",watch:{groups:function(){this.blockRemoval=this.groups.length<=1},lines:function(){this.blockRemoval=this.lines.length<=1}},computed:{modaltitle:{get:function(){return this.create?this.create_title:this.update_title},set:function(e){this.modaltitle=e}}},data:function(){return{columns:[{name:"user",align:"center",label:this.$t("username"),field:"user",sortable:!0},{name:"permissions",align:"center",label:this.$t("Permissions"),field:"permissions",sortable:!0},{name:"groups",align:"center",label:this.$t("Groups"),field:"groups",sortable:!0},{name:"action",align:"center",label:this.$t("action"),field:"",sortable:!0}],data:[],createpermissionmodal:!1,create:!0,id:null,create_title:this.$t("permission.create_permission"),update_title:this.$t("permission.update_permission"),groups:[],groups_list:[],permissiontree:[],checkedProperties:[],skus:[],loading:!1,filter:null,credentials_list:[],lines:[],ticked:[],expanded:[],tickStrategy:"leaf-filtered",users_list:[],user:null,permissionTree:Object(),groupsList:[],usersList:[],credentialList:[]}},methods:{editRow:function(e){var t=this;this.onReset(),this.create=!1,this.id=e.row.id;var s=this;e.row.groups.map((function(e){s.groups.unshift({group:{label:e.name,value:e.id}})})),e.row.credentials.map((function(e){t.credentialList.map((function(t){t.value===e&&s.lines.unshift({credential:{label:t.label,value:e}})}))})),this.user=e.row.user.id,e.row.permissions.map((function(e){s.ticked.push(e.name)})),this.createpermissionmodal=!0},deleteRow:function(e){var t=this;this.$q.dialog({title:this.$t("Confirm"),message:"".concat(this.$t("permission.delete_permission",{name:e.row.user.username})," ?"),cancel:!0,persistent:!0,ok:{push:!0,color:"negative"}}).onOk((function(){t.deletePermission(e.row.id,e.row.username)}))},AddNewPermission:function(){this.create=!0,this.createpermissionmodal=!0,this.onReset()},onSubmit:function(){var e=this,t=[];this.ticked.map((function(s){("string"===typeof s||s instanceof String)&&t.push(e.permissionTree[s])}));var s=[];this.groups.map((function(e){e.group&&e.group.value&&s.push(e.group.value)}));var i=Object();i.permissions=t,i.user=this.user,i.groups=s;var n="";this.usersList.map((function(t){t.value===e.user&&(n=t.label)})),i.credentials=[],this.lines.map((function(e){e.credential&&e.credential.value&&i.credentials.push(e.credential.value)})),i.name=n,this.create?this.createPermission(i):this.updatePermission(this.id,i)},onReset:function(){this.permissions=[],this.user=null,this.groups=[],this.groups.push({group:null}),this.lines=[],this.lines.push({credential:null}),this.expanded=[],this.ticked=[]},fetchdata:function(){var e=this;e.loading=!0,this.$axios.get("/permission/api/permissionwithinfo/").then((function(t){e.data=t.data,e.loading=!1})).catch((function(t){console.log(t),e.loading=!1}))},fetchpermissiontree:function(){var e=this;e.loading=!0,this.$axios.get("/permission/api/permissiontree/").then((function(t){e.permissiontree=t.data.permissiontree,e.permissionTree=t.data.permissiontreemap})).catch((function(e){console.log(e)}))},deletePermission:function(e,t){var s=this,i=this;this.$axios.delete("/permission/api/permission/".concat(e,"/")).then((function(e){i.$q.notify({type:"positive",textColor:"grey-10",multiLine:!0,message:"".concat(i.$t("permission.delete_permission_success",{name:t})," !"),timeout:2e3,position:"top"}),s.fetchdata()})).catch((function(e){console.log(e);var t=[];e.response&&e.response.data&&e.response.data instanceof Object===!0&&Object.keys(e.response.data).map((function(s){"non_field_errors"===s?t.push("".concat(e.response.data[s])):t.push("".concat(s,": ").concat(e.response.data[s]))})),t.map((function(e){i.$q.notify({type:"negative",color:"red-5",textColor:"white",multiLine:!0,message:e,timeout:5e3,position:"top"})}))}))},filterFn:function(e,t){var s=this;t((function(){if(""===e)s.groups_list=s.groupsList;else{var t=e.toLowerCase();s.groups_list=s.groupsList.filter((function(e){return e.label.toLowerCase().indexOf(t)>-1}))}}))},filterUsers:function(e,t){var s=this;t((function(){if(""===e)s.users_list=s.usersList;else{var t=e.toLowerCase();s.users_list=s.usersList.filter((function(e){return e.label.toLowerCase().indexOf(t)>-1}))}}))},addGroup:function(){var e=this.groups.filter((function(e){return null===e.number}));e.length>=1&&this.groups.length>0||this.groups.push({group:null})},removeGroup:function(e){this.blockRemoval||this.groups.splice(e,1)},fetchGroup:function(){var e=this,t=this;this.$axios.get("/common/api/servergroup/").then((function(s){t.groups_list=[],s.data.map((function(s){t.groups_list.push({label:"".concat(s.name),value:s.id}),e.groupsList.push({label:"".concat(s.name),value:s.id})}))})).catch((function(e){console.log(e)}))},fetchusers:function(){var e=this,t=this;t.loading=!0,this.$axios.get("/common/api/users/").then((function(s){t.users_list=[],s.data.map((function(s){t.users_list.push({label:s.username,value:s.id}),e.usersList.push({label:s.username,value:s.id})})),t.loading=!1})).catch((function(e){console.log(e),t.loading=!1}))},createPermission:function(e){var t=this,s=this;this.$axios.post("/permission/api/permission/",e).then((function(i){s.$q.notify({type:"positive",textColor:"grey-10",multiLine:!0,message:"".concat(s.$t("permission.create_permission_success",{name:e.name})," !"),timeout:2e3,position:"top"}),s.createpermissionmodal=!1,t.fetchdata()})).catch((function(e){var t=[];e.response.data instanceof Object===!0&&Object.keys(e.response.data).map((function(s){"non_field_errors"===s?t.push("".concat(e.response.data[s])):t.push("".concat(s,": ").concat(e.response.data[s]))})),t.map((function(e){s.$q.notify({type:"negative",color:"red-5",textColor:"white",multiLine:!0,message:e,timeout:5e3,position:"top"})}))}))},updatePermission:function(e,t){var s=this,i=this;this.$axios.patch("/permission/api/permission/".concat(e,"/"),t).then((function(e){i.$q.notify({type:"positive",textColor:"grey-10",multiLine:!0,message:"".concat(i.$t("permission.update_permission_success",{name:t.name})," !"),timeout:2e3,position:"top"}),i.createpermissionmodal=!1,s.fetchdata()})).catch((function(e){var t=[];e.response.data instanceof Object===!0&&Object.keys(e.response.data).map((function(s){"non_field_errors"===s?t.push("".concat(e.response.data[s])):t.push("".concat(s,": ").concat(e.response.data[s]))})),t.map((function(e){i.$q.notify({type:"negative",color:"red-5",textColor:"white",multiLine:!0,message:e,timeout:5e3,position:"top"})}))}))},filterCredential:function(e,t){var s=this;t((function(){var t=[];s.lines.map((function(e){e.credential&&t.push(e.credential)}));var i=new Set(s.credentialList.map((function(e){return e.label})));if(s.credentialList.map((function(e){0===t.length&&t.push({label:e.label,value:e.value});var s=new Set(t.map((function(e){return e.label})));i.size!==s.size&&(s.has(e.label)||t.push({label:e.label,value:e.value}))})),""===e)s.credentials_list=t;else{var n=e.toLowerCase();s.credentials_list=t.filter((function(e){return e.label.toLowerCase().indexOf(n)>-1}))}}))},fetchCredential:function(){var e=this,t=this;this.$axios.get("/common/api/credential/").then((function(s){t.credentials_list=[],s.data.map((function(s){t.credentials_list.push({label:"".concat(s.username),value:s.id}),e.credentialList.push({label:"".concat(s.username),value:s.id})}))})).catch((function(e){console.log(e)}))},addLine:function(){var e=this.lines.filter((function(e){return null===e.number}));e.length>=1&&this.lines.length>0||this.lines.push({credential:null})},removeLine:function(e){this.blockRemoval||this.lines.splice(e,1)}},created:function(){this.fetchdata(),this.fetchGroup(),this.fetchpermissiontree(),this.fetchusers(),this.fetchCredential()},mounted:function(){this.addGroup()}}),a=o,r=s("2877"),l=s("eaac"),c=s("9c40"),u=s("2c91"),p=s("27f9"),d=s("0016"),m=s("bd08"),f=s("357e"),h=s("db86"),v=s("74f7"),g=s("24e8"),b=s("f09f"),_=s("a370"),y=s("0378"),k=s("ddd8"),q=s("66e5"),w=s("4074"),x=s("1c1c"),$=s("de1d"),C=s("0170"),L=s("b047"),Q=s("8f8e"),S=s("7f41"),P=s("7f67"),O=s("eebe"),R=s.n(O),G=Object(r["a"])(a,i,n,!1,null,"593b03e7",null);t["default"]=G.exports;R()(G,"components",{QTable:l["a"],QBtn:c["a"],QSpace:u["a"],QInput:p["a"],QIcon:d["a"],QTr:m["a"],QTh:f["a"],QTd:h["a"],QInnerLoading:v["a"],QDialog:g["a"],QCard:b["a"],QCardSection:_["a"],QForm:y["a"],QSelect:k["a"],QItem:q["a"],QItemSection:w["a"],QList:x["a"],QSlideItem:$["a"],QItemLabel:C["a"],QChip:L["a"],QCheckbox:Q["a"],QTree:S["a"]}),R()(G,"directives",{ClosePopup:P["a"]})}}]);