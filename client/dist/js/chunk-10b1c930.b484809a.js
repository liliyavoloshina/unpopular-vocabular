(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10b1c930"],{"33bc":function(t,e,r){},3786:function(t,e,r){"use strict";r.d(e,"f",(function(){return o})),r.d(e,"e",(function(){return u})),r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return c})),r.d(e,"d",(function(){return l})),r.d(e,"c",(function(){return p}));var n=r("1da1"),a=(r("96cf"),r("0d5e")),s=r("4da1"),o=Object(s["b"])(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].post("/signup",e);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),u=Object(s["b"])(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].post("/signin",e);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),i=Object(s["b"])(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].post("/forgot-password",e);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),c=Object(s["b"])(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].post("/confirm-email",{confirmationToken:e});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),l=Object(s["b"])(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].post("/reset-password",e);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),p=Object(s["b"])(Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].get("/logout");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)}))))},6331:function(t,e,r){"use strict";r("33bc")},"6fea":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"base-wrapper"},[r("the-navbar",{staticClass:"base-navbar"}),r("div",{staticClass:"container base-content"},[r("router-view")],1),r("the-footer",{staticClass:"base-footer"})],1)},a=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-navbar",{attrs:{type:"is-dark"},scopedSlots:t._u([{key:"brand",fn:function(){return[r("b-navbar-item",{attrs:{tag:"router-link",to:{name:"Home"}}},[r("img",{attrs:{src:"/favicon.ico",alt:"Lightweight UI components for Vue.js based on Bulma"}})])]},proxy:!0},{key:"start",fn:function(){return[r("b-navbar-item",{staticClass:"is-dark",attrs:{tag:"router-link",to:{name:"Words"},exact:""}},[t._v(" Words ")]),r("b-navbar-item",{attrs:{tag:"router-link",to:{name:"NewWord"},exact:""}},[t._v(" New ")]),r("b-navbar-item",{attrs:{tag:"router-link",to:{name:"Test"},exact:""}},[t._v(" Test ")])]},proxy:!0},{key:"end",fn:function(){return[r("b-navbar-item",{attrs:{tag:"div"}},[t.isLoggedIn?r("b-dropdown",{attrs:{position:"is-bottom-left"},scopedSlots:t._u([{key:"trigger",fn:function(){return[r("b-button",{staticClass:"navbar-item",attrs:{rounded:"",role:"button"}},[r("b-icon",{attrs:{icon:"user"}})],1)]},proxy:!0}],null,!1,1728331898)},[r("b-dropdown-item",{attrs:{custom:"","aria-role":"menuitem"}},[t._v(" Logged as "),r("b",{staticClass:"has-text-success"},[t._v(t._s(t.userName))])]),r("hr",{staticClass:"dropdown-divider"}),r("b-dropdown-item",{attrs:{"has-link":"","aria-role":"menuitem"}},[r("router-link",{attrs:{to:{name:"User",params:{id:t.userId}}}},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"wrench"}}),t._v(" Profile ")],1)],1),r("hr",{staticClass:"dropdown-divider"}),r("b-dropdown-item",{attrs:{value:"logout","aria-role":"menuitem"},on:{click:t.logout}},[r("b-icon",{staticClass:"mr-1",attrs:{icon:"door-open"}}),t._v(" Logout ")],1)],1):r("div",{staticClass:"buttons"},[r("router-link",{staticClass:"button is-primary",attrs:{to:{name:"Signup"}}},[r("strong",[t._v("Sign up")])]),r("router-link",{staticClass:"button is-light",attrs:{to:{name:"Login"}}},[t._v(" Log in ")])],1)],1)]},proxy:!0}])})},o=[],u=r("1da1"),i=(r("96cf"),r("b0c0"),r("6e92")),c=r("4da1"),l=r("3786"),p={name:"TheNavbar",data:function(){return{user:null,EventBus:c["a"]}},computed:{isLoggedIn:function(){return!!this.user},userName:function(){var t;return null===(t=this.user)||void 0===t?void 0:t.name},userId:function(){var t;return null===(t=this.user)||void 0===t?void 0:t.id}},created:function(){var t=this;this.user=Object(i["c"])(),c["a"].$on("logout",(function(){t.user=null}))},methods:{logout:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.user=null,Object(i["a"])(),"Home"!==t.$route.name&&t.$router.push({name:"Home"}),e.next=5,Object(l["c"])();case 5:case"end":return e.stop()}}),e)})))()}}},b=p,d=r("2877"),f=Object(d["a"])(b,s,o,!1,null,null,null),m=f.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer has-background-dark"},[r("div",{staticClass:"content has-text-centered"},[r("p",[t._v(" UnpopularVocabular by "),r("a",{staticClass:"has-text-pink",attrs:{href:"https://github.com/liliyavoloshina"}},[t._v("Liliya Voloshina")]),t._v(" "),r("br"),t._v(" This project is open-source and for educational purposes only "),r("br"),t._v(" Branch on GitHub: "),r("a",{staticClass:"has-text-warning",attrs:{href:"https://github.com/liliyavoloshina/unpopular-vocabular"}},[t._v("UnpopularVocabular")])])])])}],g={},w=Object(d["a"])(g,v,h,!1,null,null,null),k=w.exports,x={name:"BaseLayout",components:{TheNavbar:m,TheFooter:k}},_=x,j=(r("fab6"),r("6331"),Object(d["a"])(_,n,a,!1,null,null,null));e["default"]=j.exports}}]);
//# sourceMappingURL=chunk-10b1c930.b484809a.js.map