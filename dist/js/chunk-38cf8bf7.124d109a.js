(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38cf8bf7"],{"5b55":function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));var i={EMAIL_CONFIRMATION:"email-confirmation",FORGOT_PASSWORD:"forgot-password"}},ca34:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-fullheight is-light"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container is-max-desktop"},[s("div",{staticClass:"box columns is-multiline is-centered"},[s("div",{staticClass:"column is-full has-text-centered"},[s("b-icon",{staticStyle:{fontSize:"56px"},attrs:{icon:"paper-plane",size:"is-large",type:"is-info"}})],1),s("div",{staticClass:"column is-full has-text-centered"},[s("p",{staticClass:"is-size-4 pb-5"},[t._v(t._s(t.mainText)+" Please check your inbox")]),s("div",{staticClass:"buttons"},[s("b-button",{attrs:{tag:"a",href:"mailto:",type:"is-primary",expanded:"",focused:""}},[t._v("Check email")])],1),t.emailType===t.EMAIL_TYPES.EMAIL_CONFIRMATION?s("p",{staticClass:"is-size-5 mt-2 has-text-grey"},[t._v(" Is "),s("span",{staticClass:"has-text-primary"},[t._v(t._s(t.email))]),t._v(" your correct email? If not, "),s("router-link",{staticClass:"is-underlined has-text-link",attrs:{to:{name:"Signup"}}},[t._v("restart sign up proccess")])],1):t._e()])])])])])},a=[],n=s("6e92"),r=s("5b55"),l={name:"EmailSent",props:{emailType:{type:String,default:r["a"].EMAIL_CONFIRMATION}},data:function(){return{email:""}},computed:{mainText:function(){return this.emailType===r["a"].EMAIL_CONFIRMATION?"We've sent you a link to confirm your email address.":"Instructions for resetting your password were sent to your email."}},created:function(){this.EMAIL_TYPES=r["a"],this.emailType===r["a"].EMAIL_CONFIRMATION&&(this.email=Object(n["c"])().email)}},o=l,c=s("2877"),u=Object(c["a"])(o,i,a,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-38cf8bf7.124d109a.js.map