"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[555],{60555:function(t,e,n){n.r(e),n.d(e,{default:function(){return j}});var c=n(1413),u=n(93433),a=n(4942),r=n(29439),i=n(47313),o=n(97890),s=n(23560),l=n(10976),d=n(77181),f=n(2717),h=n(90954),b=n(94843),g=n(56078),p=n(73431),v=n(24511),m=n(44287),Z=n(46417);function j(){var t=(0,v.$)().t,e=(0,f.v9)((function(t){return t.menu}),f.wU).activeMenu,n=(0,f.v9)((function(t){return t.formLang}),f.wU).languages,j=(0,f.I0)(),x=l.Z.useForm(),k=(0,r.Z)(x,1)[0],w=(0,o.s0)();function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"title",c=n.map((function(n){return(0,a.Z)({},n.locale,t["".concat(e,"[").concat(n.locale,"]")])}));return Object.assign.apply(Object,[{}].concat((0,u.Z)(c)))}(0,i.useEffect)((function(){return function(){var t=k.getFieldsValue(!0);j((0,h.nc)({activeMenu:e,data:t}))}}),[]);return(0,Z.jsx)(d.Z,{title:t("add.blog"),extra:(0,Z.jsx)(p.Z,{}),children:(0,Z.jsx)(m.Z,{form:k,handleSubmit:function(n,u){var a="blogs",r={status:"published",type:"blog"},i={type:"blog",active:n.active?1:0,images:u.length?u.map((function(t){return t.name})):void 0,title:y(n),description:y(n,"description"),short_desc:y(n,"short_desc")};return g.Z.create(i).then((function(){s.Am.success(t("successfully.created")),(0,f.dC)((function(){j((0,h.ph)((0,c.Z)((0,c.Z)({},e),{},{nextUrl:a}))),j((0,b.J)(r))})),w("/".concat(a))}))}})})}}}]);