webpackJsonp([0],{"1ogH":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"secret"},[a("h1",[e._v(e._s(e.message))]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:{name:"Home"}}},[e._v("Home")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/survey"}},[e._v("Survey")])],1)])])},o=[],s={render:r,staticRenderFns:o};t.a=s},"946P":function(e,t){},Fs8J:function(e,t,a){"use strict";t.a={name:"Home",data:function(){return{username:"",email:"",password:"",passwordVerify:"",food:"",showForm:!0,showError:!1}},methods:{validateForm:function(){""!=this.username&&""!=this.food&&""!=this.email&&this.password===this.passwordVerify?(console.log("Form is valid."),this.showForm=!1):(console.log("Form is NOT valid."),this.showError=!1)}}}},M93x:function(e,t,a){"use strict";function r(e){a("PMlw")}var o=a("xJD8"),s=a("ZYbk"),n=a("VU/8"),i=r,u=n(o.a,s.a,!1,i,null,null);t.a=u.exports},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("7+uW"),o=a("M93x"),s=a("YaEn");r.a.config.productionTip=!1,new r.a({el:"#app",router:s.a,template:"<App/>",components:{App:o.a}})},Ok8N:function(e,t,a){"use strict";function r(e){a("aF5M")}var o=a("jSRt"),s=a("bbNN"),n=a("VU/8"),i=r,u=n(o.a,s.a,!1,i,"data-v-39a22de0",null);t.a=u.exports},PMlw:function(e,t){},QHyY:function(e,t,a){"use strict";t.a={name:"Secret",data:function(){return{message:"Always check your devtools!"}}}},TOY4:function(e,t){},UHBQ:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showForm,expression:"showForm"}],staticClass:"form-container"},[a("h1",[e._v("Join the Web Developers Club!")]),e._v(" "),a("p",[e._v("Sign up to access our special, secret page. Just create an account and answer a brief survey.")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.showError,expression:"showError"}],staticClass:"error"},[e._v(" There are errors in the form data you have submitted. Sorry, please doublecheck your information. All fields are required.")]),e._v(" "),a("form",{on:{submit:function(t){t.preventDefault(),e.validateForm(t)}}},[a("p",[a("label",{attrs:{for:"username"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",id:"username",size:"32",placeholder:"Enter your username."},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})])]),e._v(" "),a("p",[a("label",{attrs:{for:"email"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email",size:"32",placeholder:"youremail@example.com"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),e._v(" "),a("p",[a("label",{attrs:{for:"password"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password",size:"32",placeholder:"Enter your password here."},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),e._v(" "),a("p",[a("label",{attrs:{for:"passwordVerify"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordVerify,expression:"passwordVerify"}],attrs:{type:"password",id:"passwordVerify",size:"32",placeholder:"Enter your password again for verification purposes."},domProps:{value:e.passwordVerify},on:{input:function(t){t.target.composing||(e.passwordVerify=t.target.value)}}})])]),e._v(" "),a("p",[a("label",{attrs:{for:"food"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.food,expression:"food"}],attrs:{type:"text",id:"food",size:"40",placeholder:"What would your last meal on earth be?"},domProps:{value:e.food},on:{input:function(t){t.target.composing||(e.food=t.target.value)}}})])]),e._v(" "),e._m(0)])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.showForm,expression:"!showForm"}],staticClass:"success-message"},[a("h1",[e._v("Thank you for signing up!")]),e._v(" "),a("p",[e._v("Please take our new member survey. "),a("router-link",{attrs:{to:"Survey"}},[e._v("Click here")])],1)])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("input",{attrs:{type:"submit",value:"Submit"}})])}],s={render:r,staticRenderFns:o};t.a=s},YaEn:function(e,t,a){"use strict";var r=a("7+uW"),o=a("/ocq"),s=a("lO7g"),n=a("Ok8N"),i=a("gN/9");r.a.use(o.a),t.a=new o.a({routes:[{path:"/",name:"Home",component:s.a},{path:"/survey",name:"Survey",component:n.a},{path:"/Secret",name:"Secret",component:i.a}]})},ZYbk:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],s={render:r,staticRenderFns:o};t.a=s},aF5M:function(e,t){},bbNN:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"survey"},[a("h1",[e._v("New Member Survey")]),e._v(" "),a("p",[e._v("Please complete the new member survey.")]),e._v(" "),a("form",{on:{submit:function(t){t.preventDefault(),e.validateForm(t)}}},[a("p",{directives:[{name:"show",rawName:"v-show",value:e.showError,expression:"showError"}],staticClass:"error"},[e._v(" There are errors in the form data you have submitted. Sorry, please doublecheck your information. All fields are required.")]),e._v(" "),a("p",[a("label",{attrs:{for:"q1"}},[e._v("Q1: How long have you been building websites?"),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.q1,expression:"q1"}],attrs:{type:"text",id:"q1"},domProps:{value:e.q1},on:{input:function(t){t.target.composing||(e.q1=t.target.value)}}})])]),e._v(" "),a("p",[e._v("Q2: What languages interest you the most?"),a("br"),e._v(" "),e._l(e.languageOptions,function(t,r){return a("label",{key:t},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.q2,expression:"q2"}],attrs:{type:"checkbox"},domProps:{value:r.value,checked:Array.isArray(e.q2)?e._i(e.q2,r.value)>-1:e.q2},on:{change:function(t){var a=e.q2,o=t.target,s=!!o.checked;if(Array.isArray(a)){var n=r.value,i=e._i(a,n);o.checked?i<0&&(e.q2=a.concat([n])):i>-1&&(e.q2=a.slice(0,i).concat(a.slice(i+1)))}else e.q2=s}}}),e._v("\n        "+e._s(r.text)+"\n        ")])})],2),e._v(" "),a("p",[e._v("Q3: What other topics interest you?"),a("br"),e._v(" "),e._l(e.topicOptions,function(t,r){return a("label",{key:t},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.q3,expression:"q3"}],attrs:{type:"checkbox"},domProps:{value:r.value,checked:Array.isArray(e.q3)?e._i(e.q3,r.value)>-1:e.q3},on:{change:function(t){var a=e.q3,o=t.target,s=!!o.checked;if(Array.isArray(a)){var n=r.value,i=e._i(a,n);o.checked?i<0&&(e.q3=a.concat([n])):i>-1&&(e.q3=a.slice(0,i).concat(a.slice(i+1)))}else e.q3=s}}}),e._v("\n          "+e._s(r.text)+"\n        ")])})],2),e._v(" "),a("p",[a("label",{attrs:{for:"q4"}},[e._v("Q4: What kinds of websites would you like to build someday?"),a("br"),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.q4,expression:"q4"}],attrs:{cols:"70",rows:"8",id:"q4",placeholder:"Type your response here."},domProps:{value:e.q4},on:{input:function(t){t.target.composing||(e.q4=t.target.value)}}})])]),e._v(" "),a("p",[a("label",{attrs:{for:"q5"}},[e._v("Q5: Spaces or Tabs?\n          "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.q5,expression:"q5"}],attrs:{id:"q5"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.q5=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("Select your preference.")]),e._v(" "),a("option",{attrs:{value:"spaces"}},[e._v("Spaces")]),e._v(" "),a("option",{attrs:{value:"tabs"}},[e._v("Tabs")])])])]),e._v(" "),e._m(0)])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("input",{attrs:{type:"submit",value:"Submit"}})])}],s={render:r,staticRenderFns:o};t.a=s},"gN/9":function(e,t,a){"use strict";function r(e){a("946P")}var o=a("QHyY"),s=a("1ogH"),n=a("VU/8"),i=r,u=n(o.a,s.a,!1,i,"data-v-96521534",null);t.a=u.exports},jSRt:function(e,t,a){"use strict";t.a={name:"Survey",data:function(){return{showError:!1,q1:"",q2:[],q3:[],q4:"",q5:"",languageOptions:[{text:"JavaScript",value:"js"},{text:"Python",value:"py"},{text:"Ruby",value:"ruby"},{text:"Java",value:"java"},{text:"PHP",value:"php"}],topicOptions:[{text:"Accessibility",value:"axe"},{text:"Experience Design",value:"ux"},{text:"Operations",value:"ops"},{text:"Search Engine Optimization",value:"seo"},{text:"Multimedia",value:"media"}]}},methods:{validateForm:function(){""!=this.q1&&this.q2.length>0&&this.q3.length>0&&""!=this.q4&&""!=this.q5?(console.log("Form is valid."),this.$router.push("Secret")):(console.log("Form is NOT valid."),this.showError=!0)}}}},lO7g:function(e,t,a){"use strict";function r(e){a("TOY4")}var o=a("Fs8J"),s=a("UHBQ"),n=a("VU/8"),i=r,u=n(o.a,s.a,!1,i,"data-v-20805b95",null);t.a=u.exports},xJD8:function(e,t,a){"use strict";t.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.08b6cb45ee0242e9a7e9.js.map