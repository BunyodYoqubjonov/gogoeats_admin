"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[2786],{82786:function(e,t,n){n.r(t);var r=n(1413),a=n(29439),u=n(47313),c=n(10976),i=n(77181),s=n(23560),o=n(97890),d=n(73431),l=n(2717),f=n(90954),v=n(30763),h=n(80349),Z=n(24511),m=n(10582),p=n(46417);t.default=function(){var e=(0,Z.$)().t,t=(0,o.s0)(),n=(0,l.I0)(),g=(0,l.v9)((function(e){return e.menu}),l.wU).activeMenu,b=(0,l.v9)((function(e){return e.careerCategory}),l.wU).params,k=c.Z.useForm(),w=(0,a.Z)(k,1)[0],y=(0,u.useState)(null),x=(0,a.Z)(y,2),j=x[0],C=x[1];(0,u.useEffect)((function(){return function(){var e=w.getFieldsValue(!0);n((0,f.nc)({activeMenu:g,data:e}))}}),[]);return(0,p.jsx)(i.Z,{title:e("add.category"),extra:(0,p.jsx)(d.Z,{}),children:(0,p.jsx)(m.Z,{form:w,handleSubmit:function(a,u){var c,i=(0,r.Z)((0,r.Z)({},a),{},{type:"career",active:a.active?1:0,keywords:a.keywords.join(","),parent_id:null,"images[0]":null===u||void 0===u||null===(c=u[0])||void 0===c?void 0:c.name}),o="catalog/career-categories";return v.Z.create(i).then((function(){s.Am.success(e("successfully.created")),(0,l.dC)((function(){n((0,f.ph)((0,r.Z)((0,r.Z)({},g),{},{nextUrl:o}))),n((0,h.X)(b))})),t("/".concat(o))})).catch((function(e){return C(e.response.data.params)}))},error:j})})}}}]);