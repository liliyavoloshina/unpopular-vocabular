(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-563a771c"],{"148a":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("b-field",{attrs:{label:"Unopular:"}},[r("p",{staticClass:"control"},[r("span",{staticClass:"button is-static"},[r("b-icon",{attrs:{icon:"gem",size:"is-small",type:"is-primary"}})],1)]),r("b-input",{attrs:{value:t.word.unpopular,readonly:""}})],1),r("b-field",{attrs:{label:"Popular synonym:"}},[r("p",{staticClass:"control"},[r("span",{staticClass:"button is-static"},[r("b-icon",{attrs:{icon:"fire-alt",size:"is-small",type:"is-danger"}})],1)]),r("b-input",{attrs:{value:t.word.popular,readonly:""}})],1),r("p",{staticClass:"has-text-weight-bold ",class:"high"===t.word.popularity?"has-text-primary":"has-text-success"},[t._v(" "+t._s(t.popularity)+" ")])],1),r("div",{staticClass:"column"},[r("p",{staticClass:"is-size-5"},[t._v(" "+t._s(t.word.description)+" ")])])]),r("div",{staticClass:"buttons"},[r("b-button",{attrs:{to:{name:"EditWord",params:{id:t.$route.params.id}},tag:"router-link",type:"is-warning","icon-right":"pen"}},[t._v(" Edit Word ")])],1),r("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}})],1)},a=[],s=r("1da1"),i=(r("96cf"),r("c55b")),u={name:"SingleWord",data:function(){return{word:{},isLoading:!1}},computed:{popularity:function(){return"high"===this.word.popularity?"This word is very unpopular!":"This word is quite popular..."}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,Object(i["c"])(t.$route.params.id);case 3:t.word=e.sent,t.isLoading=!1;case 5:case"end":return e.stop()}}),e)})))()}},c=u,o=r("2877"),p=Object(o["a"])(c,n,a,!1,null,null,null);e["default"]=p.exports},c55b:function(t,e,r){"use strict";r.d(e,"d",(function(){return i})),r.d(e,"c",(function(){return u})),r.d(e,"e",(function(){return c})),r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return p}));var n=r("1da1"),a=(r("96cf"),r("0d5e")),s=r("4da1"),i=Object(s["b"])(Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].get("/words");case 2:return e=t.sent,t.abrupt("return",e.data.words);case 4:case"end":return t.stop()}}),t)})))),u=Object(s["b"])(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].get("/words/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.word);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),c=Object(s["b"])(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].patch("/words/".concat(e._id),e);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),o=Object(s["b"])(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].post("/words",e);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),p=Object(s["b"])(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"]["delete"]("/words/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}]);
//# sourceMappingURL=chunk-563a771c.9427c64b.js.map