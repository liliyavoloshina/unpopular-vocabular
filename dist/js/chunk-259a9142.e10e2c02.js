(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-259a9142"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):i(n(t))}},"502d":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("b-field",{attrs:{label:"Unpopular:"}},[r("p",{staticClass:"control"},[r("span",{staticClass:"button is-static"},[r("b-icon",{attrs:{icon:"gem",size:"is-small",type:"is-primary"}})],1)]),r("b-input",{attrs:{placeholder:"Unpopular...",type:"text",required:""},model:{value:t.word.unpopular,callback:function(e){t.$set(t.word,"unpopular",e)},expression:"word.unpopular"}})],1),r("b-field",{attrs:{label:"Popular synonym:"}},[r("p",{staticClass:"control"},[r("span",{staticClass:"button is-static"},[r("b-icon",{attrs:{icon:"fire-alt",size:"is-small",type:"is-danger"}})],1)]),r("b-input",{attrs:{placeholder:"Popular...",type:"text",required:""},model:{value:t.word.popular,callback:function(e){t.$set(t.word,"popular",e)},expression:"word.popular"}})],1),r("b-field",{attrs:{label:"Description:"}},[r("b-input",{attrs:{maxlength:"200",type:"textarea"},model:{value:t.word.description,callback:function(e){t.$set(t.word,"description",e)},expression:"word.description"}})],1),r("b-field",{attrs:{label:"Popularity:"}},[r("b-select",{model:{value:t.word.popularity,callback:function(e){t.$set(t.word,"popularity",e)},expression:"word.popularity"}},[r("option",{attrs:{value:"high",selected:""}},[t._v("Very unpopular")]),r("option",{attrs:{value:"low"}},[t._v("Quite popular")])])],1),r("div",{staticClass:"buttons mt-5"},[r("b-button",{attrs:{type:"is-primary",disabled:!t.isValid,loading:t.isLoading},on:{click:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._v("Submit")])],1)],1)},i=[],o=r("1da1"),a=(r("96cf"),r("fb6a"),r("a4d3"),r("e01a"),{name:"SubmitForm",props:{word:{type:Object,required:!1,default:function(){return{popular:"",unpopular:"",description:"",popularity:"high"}}}},data:function(){return{isLoading:!1}},computed:{isValid:function(){return""!=this.word.popular&&""!=this.word.unpopular}},methods:{capitalizeFirstLetter:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},onSubmit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.isLoading=!0,t.$emit("createOrUpdate",{_id:t.word._id,popular:t.capitalizeFirstLetter(t.word.popular),unpopular:t.capitalizeFirstLetter(t.word.unpopular),description:t.capitalizeFirstLetter(t.word.description),popularity:t.word.popularity}),t.isLoading=!1;case 3:case"end":return e.stop()}}),e)})))()}}}),s=a,c=(r("de9b"),r("2877")),u=Object(c["a"])(s,n,i,!1,null,null,null);e["a"]=u.exports},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},7591:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("submit-form",{on:{createOrUpdate:t.createOrUpdate}})],1),t._m(0)])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"column"},[r("p",{staticClass:"is-size-5"},[t._v("You can add the unpopular word yourself. Just be sure it's "),r("span",{staticClass:"has-text-danger has-text-weight-bold"},[t._v("really rare")]),t._v(". ")]),r("p",{staticClass:"is-size-5 mt-2"},[t._v(" You can check this by finding out the position of the word in the frequency dictionary. The smaller it is, the more often this word occurs in various paper and electronic sources.")]),r("p",{staticClass:"is-size-5 mt-2"},[t._v("For example, in "),r("a",{attrs:{href:"https://wooordhunt.ru/"}},[t._v("this")]),t._v(" dictionary you can see this number.")])])}],o=r("1da1"),a=(r("96cf"),r("c55b")),s=r("502d"),c={components:{SubmitForm:s["a"]},name:"NewWord",methods:{createOrUpdate:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(a["d"])(t);case 2:n=r.sent,e.$buefy.toast.open({message:"Word successfully created!",type:"is-success"}),e.$router.push("/words/".concat(n._id));case 4:case"end":return r.stop()}}),r)})))()}}},u=c,l=r("2877"),f=Object(l["a"])(u,n,i,!1,null,null,null);e["default"]=f.exports},"75d7":function(t,e,r){},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),a=r("c430"),s=r("83ab"),c=r("4930"),u=r("fdbf"),l=r("d039"),f=r("5135"),p=r("e8b5"),d=r("861d"),b=r("825a"),v=r("7b0b"),h=r("fc6a"),m=r("c04e"),y=r("5c6c"),w=r("7c73"),g=r("df75"),O=r("241c"),S=r("057f"),x=r("7418"),_=r("06cf"),j=r("9bf2"),C=r("d1e7"),k=r("9112"),P=r("6eeb"),$=r("5692"),z=r("f772"),F=r("d012"),E=r("90e3"),L=r("b622"),U=r("e538"),N=r("746f"),A=r("d44e"),J=r("69f3"),q=r("b727").forEach,D=z("hidden"),R="Symbol",T="prototype",V=L("toPrimitive"),W=J.set,I=J.getterFor(R),Q=Object[T],Y=i.Symbol,M=o("JSON","stringify"),B=_.f,G=j.f,H=S.f,K=C.f,X=$("symbols"),Z=$("op-symbols"),tt=$("string-to-symbol-registry"),et=$("symbol-to-string-registry"),rt=$("wks"),nt=i.QObject,it=!nt||!nt[T]||!nt[T].findChild,ot=s&&l((function(){return 7!=w(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=B(Q,e);n&&delete Q[e],G(t,e,r),n&&t!==Q&&G(Q,e,n)}:G,at=function(t,e){var r=X[t]=w(Y[T]);return W(r,{type:R,tag:t,description:e}),s||(r.description=e),r},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Y},ct=function(t,e,r){t===Q&&ct(Z,e,r),b(t);var n=m(e,!0);return b(r),f(X,n)?(r.enumerable?(f(t,D)&&t[D][n]&&(t[D][n]=!1),r=w(r,{enumerable:y(0,!1)})):(f(t,D)||G(t,D,y(1,{})),t[D][n]=!0),ot(t,n,r)):G(t,n,r)},ut=function(t,e){b(t);var r=h(e),n=g(r).concat(bt(r));return q(n,(function(e){s&&!ft.call(r,e)||ct(t,e,r[e])})),t},lt=function(t,e){return void 0===e?w(t):ut(w(t),e)},ft=function(t){var e=m(t,!0),r=K.call(this,e);return!(this===Q&&f(X,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(X,e)||f(this,D)&&this[D][e])||r)},pt=function(t,e){var r=h(t),n=m(e,!0);if(r!==Q||!f(X,n)||f(Z,n)){var i=B(r,n);return!i||!f(X,n)||f(r,D)&&r[D][n]||(i.enumerable=!0),i}},dt=function(t){var e=H(h(t)),r=[];return q(e,(function(t){f(X,t)||f(F,t)||r.push(t)})),r},bt=function(t){var e=t===Q,r=H(e?Z:h(t)),n=[];return q(r,(function(t){!f(X,t)||e&&!f(Q,t)||n.push(X[t])})),n};if(c||(Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),r=function(t){this===Q&&r.call(Z,t),f(this,D)&&f(this[D],e)&&(this[D][e]=!1),ot(this,e,y(1,t))};return s&&it&&ot(Q,e,{configurable:!0,set:r}),at(e,t)},P(Y[T],"toString",(function(){return I(this).tag})),P(Y,"withoutSetter",(function(t){return at(E(t),t)})),C.f=ft,j.f=ct,_.f=pt,O.f=S.f=dt,x.f=bt,U.f=function(t){return at(L(t),t)},s&&(G(Y[T],"description",{configurable:!0,get:function(){return I(this).description}}),a||P(Q,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:Y}),q(g(rt),(function(t){N(t)})),n({target:R,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=Y(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:pt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:dt,getOwnPropertySymbols:bt}),n({target:"Object",stat:!0,forced:l((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(v(t))}}),M){var vt=!c||l((function(){var t=Y();return"[null]"!=M([t])||"{}"!=M({a:t})||"{}"!=M(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(d(e)||void 0!==t)&&!st(t))return p(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),i[1]=e,M.apply(null,i)}})}Y[T][V]||k(Y[T],V,Y[T].valueOf),A(Y,R),F[D]=!0},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),a=r("50c4"),s=r("65f0"),c=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,l=4==t,f=6==t,p=7==t,d=5==t||f;return function(b,v,h,m){for(var y,w,g=o(b),O=i(g),S=n(v,h,3),x=a(O.length),_=0,j=m||s,C=e?j(b,x):r||p?j(b,0):void 0;x>_;_++)if((d||_ in O)&&(y=O[_],w=S(y,_,g),t))if(e)C[_]=w;else if(w)switch(t){case 3:return!0;case 5:return y;case 6:return _;case 2:c.call(C,y)}else switch(t){case 4:return!1;case 7:c.call(C,y)}return f?-1:u||l?l:C}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},de9b:function(t,e,r){"use strict";r("75d7")},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),a=r("5135"),s=r("861d"),c=r("9bf2").f,u=r("e893"),l=o.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(p,l);var d=p.prototype=l.prototype;d.constructor=p;var b=d.toString,v="Symbol(test)"==String(l("test")),h=/^Symbol\((.*)\)[^)]+$/;c(d,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=b.call(t);if(a(f,t))return"";var r=v?e.slice(7,-1):e.replace(h,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:p})}},e538:function(t,e,r){var n=r("b622");e.f=n},fb6a:function(t,e,r){"use strict";var n=r("23e7"),i=r("861d"),o=r("e8b5"),a=r("23cb"),s=r("50c4"),c=r("fc6a"),u=r("8418"),l=r("b622"),f=r("1dde"),p=f("slice"),d=l("species"),b=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!p},{slice:function(t,e){var r,n,l,f=c(this),p=s(f.length),h=a(t,p),m=a(void 0===e?p:e,p);if(o(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?i(r)&&(r=r[d],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(f,h,m);for(n=new(void 0===r?Array:r)(v(m-h,0)),l=0;h<m;h++,l++)h in f&&u(n,l,f[h]);return n.length=l,n}})}}]);
//# sourceMappingURL=chunk-259a9142.e10e2c02.js.map