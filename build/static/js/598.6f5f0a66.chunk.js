(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[598],{33834:function(e,n,t){"use strict";t.d(n,{K:function(){return o}});var a=t(4942),r=t(1413),i=t(97890),s=t(74776),l=t.n(s),o=function(){var e=(0,i.s0)(),n=(0,i.TH)(),t=l().parse(n.search,{ignoreQueryPrefix:!0});return{values:t,set:function(n,i){return e({search:l().stringify((0,r.Z)((0,r.Z)({},t),{},(0,a.Z)({},n,i)))})},reset:function(n){var a=(0,r.Z)({},t);a[n]&&delete a[n],e({search:l().stringify((0,r.Z)({},a))})},clear:function(){return e({search:l().stringify({})})},merge:function(n){return e({search:l().stringify((0,r.Z)((0,r.Z)({},t),n))})}}}},11529:function(e,n,t){"use strict";t.r(n);var a=t(93433),r=t(4942),i=t(1413),s=t(29439),l=t(47313),o=t(2717),u=t(73431),d=t(24511),c=t(28780),m=t(83999),v=t(77181),f=t(2977),p=t(33834),h=t(90954),Z=t(53149),x=t(97890),g=t(51282),j=t(80049),w=t(48662),y=t(68150),b=t(46417),_=m.Z.Step;n.default=function(){var e,n=(0,d.$)().t,t=(0,o.v9)((function(e){return e.menu}),o.wU).activeMenu,S=(0,p.K)(),q=Number((null===(e=S.values)||void 0===e?void 0:e.step)||0),k=(0,l.useState)(t.refetch),F=(0,s.Z)(k,2),I=F[0],N=F[1],C=(0,o.I0)(),P=(0,x.UO)().uuid,T=(0,o.v9)((function(e){return e.formLang}),o.wU).languages,U=function(){var e=q+1;S.set("step",e)},M=function(){var e=q-1;S.set("step",e)},O=function(e){N(!0),Z.Z.getById(e).then((function(e){var n,s,l,o,u,d,c=(0,i.Z)((0,i.Z)((0,i.Z)({},e.data),function(e){if(null===e||void 0===e||!e.translations)return{};var n=e.translations,t=T.map((function(e){var t,a,i,s;return s={},(0,r.Z)(s,"title[".concat(e.locale,"]"),null===(t=n.find((function(n){return n.locale===e.locale})))||void 0===t?void 0:t.title),(0,r.Z)(s,"description[".concat(e.locale,"]"),null===(a=n.find((function(n){return n.locale===e.locale})))||void 0===a?void 0:a.description),(0,r.Z)(s,"address[".concat(e.locale,"]"),null===(i=n.find((function(n){return n.locale===e.locale})))||void 0===i?void 0:i.address),s}));return Object.assign.apply(Object,[{}].concat((0,a.Z)(t)))}(e.data)),{},{logo_img:V(e.data.logo_img),background_img:V(e.data.background_img),user:{label:e.data.seller.firstname+" "+e.data.seller.lastname,value:e.data.seller.id},delivery_time_from:null===(n=e.data)||void 0===n?void 0:n.delivery_time.from,delivery_time_to:null===(s=e.data)||void 0===s?void 0:s.delivery_time.to,delivery_time_type:null===(l=e.data)||void 0===l?void 0:l.delivery_time.type,recommended:"recommended"===e.data.mark,categories:null===(o=e.data)||void 0===o||null===(u=o.categories)||void 0===u?void 0:u.map((function(e){var n;return{label:null===e||void 0===e||null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id,key:e.id}})),tags:null===(d=e.data)||void 0===d?void 0:d.tags.map((function(e){var n;return{label:null===e||void 0===e||null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id,key:e.id}}))});C((0,h.nc)({activeMenu:t,data:c}))})).finally((function(){N(!1),C((0,h.A_)(t))}))},V=function(e){return{items:e,uid:e,url:e,name:e}};return(0,l.useEffect)((function(){t.refetch&&P&&O(P)}),[t.refetch]),(0,b.jsxs)(v.Z,{title:n("restaurant.edit"),extra:(0,b.jsx)(u.Z,{}),children:[(0,b.jsx)(m.Z,{current:q,onChange:function(e){C((0,h.nc)({activeMenu:t,data:(0,i.Z)((0,i.Z)({},t.data),{},{step:e})})),S.set("step",e)},children:c.S.map((function(e){return(0,b.jsx)(_,{title:n(e.title)},e.title)}))}),I?(0,b.jsx)(g.Z,{}):(0,b.jsxs)("div",{className:"steps-content",children:["First-content"===c.S[q].content&&(0,b.jsx)(j.Z,{next:U,loading:I,action_type:"edit",user:!0}),"Second-content"===c.S[q].content&&(0,b.jsx)(y.Z,{next:U,prev:M}),"Third-content"===c.S[q].content&&(0,b.jsx)(w.Z,{next:U,prev:M}),"Four-content"===c.S[q].content&&(0,b.jsx)(f.Z,{next:U,prev:M})]})]})}},28780:function(e,n,t){"use strict";t.d(n,{S:function(){return a}});var a=[{title:"restaurant",content:"First-content"},{title:"map",content:"Second-content"},{title:"delivery",content:"Third-content"},{title:"user",content:"Four-content"}]},2977:function(e,n,t){"use strict";t.d(n,{Z:function(){return _}});var a=t(1413),r=t(29439),i=t(47313),s=t(10976),l=t(68197),o=t(59624),u=t(66672),d=t(16124),c=t(45705),m=t(59491),v=t(97890),f=t(2717),p=t(49986),h=t(23560),Z=t(90954),x=t(70816),g=t.n(x),j=t(24511),w=t(51282),y=t(79492),b=t(46417);function _(e){var n,t=e.prev,x=(0,y.Z)().isDemo,_=(0,j.$)().t,S=(0,f.v9)((function(e){return e.menu}),f.wU).activeMenu,q=(0,f.I0)(),k=(0,v.s0)(),F=(0,i.useState)(null),I=(0,r.Z)(F,2),N=I[0],C=I[1],P=(0,i.useState)(!1),T=(0,r.Z)(P,2),U=T[0],M=T[1],O=(0,i.useState)(!1),V=(0,r.Z)(O,2),A=V[0],B=V[1],E=s.Z.useForm(),K=(0,r.Z)(E,1)[0];console.log(x);return(0,i.useEffect)((function(){var e,n,t;null!==S&&void 0!==S&&S.data&&(t=null===S||void 0===S||null===(e=S.data)||void 0===e||null===(n=e.seller)||void 0===n?void 0:n.uuid,B(!0),p.Z.getById(t).then((function(e){var n=e.data;K.setFieldsValue({firstname:n.firstname,lastname:n.lastname,email:n.email,phone:n.phone,password_confirmation:n.password_confirmation,password:n.password})})).finally((function(){return B(!1)})))}),[]),(0,b.jsx)(b.Fragment,{children:A?(0,b.jsx)(w.Z,{}):(0,b.jsx)(s.Z,{form:K,layout:"vertical",initialValues:(0,a.Z)((0,a.Z)({gender:"male",role:"admin"},S.data),{},{birthday:null!==(n=S.data)&&void 0!==n&&n.birthday?g()(S.data.birthday):null}),onFinish:function(e){var n,t;M(!0);var r={firstname:e.firstname,lastname:e.lastname,email:e.email,phone:e.phone,password_confirmation:e.password_confirmation,password:e.password},i="restaurants";p.Z.update(null===S||void 0===S||null===(n=S.data)||void 0===n||null===(t=n.seller)||void 0===t?void 0:t.uuid,r).then((function(){h.Am.success(_("successfully.updated")),k("/".concat(i)),q((0,Z.ph)((0,a.Z)((0,a.Z)({},S),{},{nextUrl:i})))})).catch((function(e){return C(e.response.data.params)})).finally((function(){return M(!1)}))},className:"py-4",children:(0,b.jsxs)(l.Z,{gutter:12,children:[(0,b.jsx)(o.Z,{span:12,children:(0,b.jsx)(s.Z.Item,{label:_("firstname"),name:"firstname",help:null!==N&&void 0!==N&&N.firstname?N.firstname[0]:null,validateStatus:null!==N&&void 0!==N&&N.firstname?"error":"success",rules:[{required:!1,message:_("required")}],children:(0,b.jsx)(u.Z,{className:"w-100"})})}),(0,b.jsx)(o.Z,{span:12,children:(0,b.jsx)(s.Z.Item,{label:_("lastname"),name:"lastname",help:null!==N&&void 0!==N&&N.lastname?N.lastname[0]:null,validateStatus:null!==N&&void 0!==N&&N.lastname?"error":"success",rules:[{required:!1,message:_("required")}],children:(0,b.jsx)(u.Z,{className:"w-100"})})}),x||(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o.Z,{span:12,children:(0,b.jsx)(s.Z.Item,{label:_("phone"),name:"phone",help:null!==N&&void 0!==N&&N.phone?N.phone[0]:null,validateStatus:null!==N&&void 0!==N&&N.phone?"error":"success",rules:[{required:!1,message:_("required")}],children:(0,b.jsx)(d.Z,{min:0,className:"w-100"})})}),(0,b.jsx)(o.Z,{span:12,children:(0,b.jsx)(s.Z.Item,{label:_("email"),name:"email",help:null!==N&&void 0!==N&&N.email?N.email[0]:null,validateStatus:null!==N&&void 0!==N&&N.email?"error":"success",rules:[{required:!0,message:_("required")}],children:(0,b.jsx)(u.Z,{type:"email",className:"w-100"})})}),(0,b.jsx)(o.Z,{span:12,children:(0,b.jsx)(s.Z.Item,{label:_("password"),name:"password",help:null!==N&&void 0!==N&&N.password?N.password[0]:null,validateStatus:null!==N&&void 0!==N&&N.password?"error":"success",rules:[{required:!1,message:_("required")}],children:(0,b.jsx)(u.Z.Password,{type:"password",className:"w-100",autoComplete:"off"})})}),(0,b.jsx)(o.Z,{span:12,children:(0,b.jsx)(s.Z.Item,{label:_("password.confirmation"),help:null!==N&&void 0!==N&&N.password_confirmation?N.password_confirmation[0]:null,validateStatus:null!==N&&void 0!==N&&N.password_confirmation?"error":"success",name:"password_confirmation",dependencies:["password"],hasFeedback:!0,rules:[{required:!1,message:_("required")},function(e){var n=e.getFieldValue;return{validator:function(e,t){return t&&n("password")!==t?Promise.reject(_("passwords.do.not.match")):Promise.resolve()}}}],children:(0,b.jsx)(u.Z.Password,{type:"password",className:"w-100",autoComplete:"off"})})})]}),(0,b.jsx)(o.Z,{span:24,children:(0,b.jsxs)(c.Z,{children:[(0,b.jsx)(m.Z,{type:"primary",htmlType:"submit",loading:U,children:_("save")}),(0,b.jsx)(m.Z,{htmlType:"submit",onClick:function(){return t()},children:_("prev")})]})})]})})})}},24654:function(){}}]);