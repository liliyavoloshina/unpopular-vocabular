(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab182"],{"148a":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("b-field",{attrs:{label:"Unopular:"}},[a("p",{staticClass:"control"},[a("span",{staticClass:"button is-static"},[a("b-icon",{attrs:{icon:"gem",size:"is-small",type:"is-primary"}})],1)]),a("b-input",{attrs:{value:t.word.unpopular,readonly:""}})],1),a("b-field",{attrs:{label:"Popular synonym:"}},[a("p",{staticClass:"control"},[a("span",{staticClass:"button is-static"},[a("b-icon",{attrs:{icon:"fire-alt",size:"is-small",type:"is-danger"}})],1)]),a("b-input",{attrs:{value:t.word.popular,readonly:""}})],1),a("p",{staticClass:"has-text-weight-bold ",class:"high"===t.word.popularity?"has-text-primary":"has-text-success"},[t._v(" "+t._s(t.popularity))])],1),a("div",{staticClass:"column"},[a("p",{staticClass:"is-size-5"},[t._v(" "+t._s(t.word.description)+" ")])])]),a("div",{staticClass:"buttons"},[a("b-button",{attrs:{to:{name:"EditWord",params:{id:this.$route.params.id}},tag:"router-link",type:"is-warning","icon-right":"pen"}},[t._v("Edit Word")])],1),a("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:t.isLoading,callback:function(s){t.isLoading=s},expression:"isLoading"}})],1)},n=[],r=a("1da1"),e=(a("96cf"),a("c55b")),o={name:"SingleWord",data:function(){return{word:"",isLoading:!1}},computed:{popularity:function(){return"high"===this.word.popularity?"This word is very unpopular!":"This word is quite popular..."}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.isLoading=!0,s.next=3,Object(e["b"])(t.$route.params.id);case 3:t.word=s.sent,t.isLoading=!1;case 5:case"end":return s.stop()}}),s)})))()}},l=o,c=a("2877"),u=Object(c["a"])(l,i,n,!1,null,null,null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0ab182.93194d5c.js.map