"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[955],{70955:function(e,t,n){n.r(t);var a=n(1413),r=n(93433),c=n(4942),i=n(29439),u=n(47313),o=n(10976),s=n(77181),l=n(72652),d=n(23560),f=n(97890),v=n(73431),Z=n(2717),p=n(90954),m=n(30763),g=n(97421),h=n(24511),y=n(80349),b=n(10582),j=n(46417);t.default=function(){var e=(0,h.$)().t,t=(0,f.s0)(),n=(0,Z.I0)(),w=(0,Z.v9)((function(e){return e.menu}),Z.wU).activeMenu,k=(0,u.useState)(!1),x=(0,i.Z)(k,2),U=x[0],C=x[1],_=o.Z.useForm(),F=(0,i.Z)(_,1)[0],M=(0,u.useState)(null),O=(0,i.Z)(M,2),S=O[0],V=O[1],A=(0,f.UO)().uuid,E=(0,Z.v9)((function(e){return e.careerCategory}),Z.wU).params,I=(0,Z.v9)((function(e){return e.formLang}),Z.wU).languages;(0,u.useEffect)((function(){return function(){var e=F.getFieldsValue(!0);n((0,p.nc)({activeMenu:w,data:e}))}}),[]);var N=function(e){C(!0),m.Z.getById(e).then((function(e){var t,i=e.data,u=(0,a.Z)((0,a.Z)((0,a.Z)({},i),function(e){if(!e)return{};var t=e.translations,n=I.map((function(e){var n,a,r;return r={},(0,c.Z)(r,"title[".concat(e.locale,"]"),null===(n=t.find((function(t){return t.locale===e.locale})))||void 0===n?void 0:n.title),(0,c.Z)(r,"description[".concat(e.locale,"]"),null===(a=t.find((function(t){return t.locale===e.locale})))||void 0===a?void 0:a.description),r}));return Object.assign.apply(Object,[{}].concat((0,r.Z)(n)))}(i)),{},{image:[(t=i.img,{name:t,url:g.bV+t})],keywords:i.keywords.split(",")});F.setFieldsValue(u),n((0,p.nc)({activeMenu:w,data:u}))})).finally((function(){C(!1),n((0,p.A_)(w))}))};return(0,u.useEffect)((function(){w.refetch&&N(A)}),[w.refetch]),(0,j.jsx)(s.Z,{title:e("edit.career.category"),extra:(0,j.jsx)(v.Z,{}),children:U?(0,j.jsx)("div",{className:"d-flex justify-content-center align-items-center py-5",children:(0,j.jsx)(l.Z,{size:"large",className:"mt-5 pt-5"})}):(0,j.jsx)(b.Z,{form:F,handleSubmit:function(r,c){var i,u=(0,a.Z)((0,a.Z)({},r),{},{type:"career",active:r.active?1:0,keywords:r.keywords.join(","),parent_id:null,"images[0]":null===(i=c[0])||void 0===i?void 0:i.name}),o="catalog/career-categories";return m.Z.update(A,u).then((function(){d.Am.success(e("successfully.updated")),(0,Z.dC)((function(){n((0,p.ph)((0,a.Z)((0,a.Z)({},w),{},{nextUrl:o}))),n((0,y.X)(E))})),t("/".concat(o))})).catch((function(e){return V(e.response.data.params)}))},error:S})})}}}]);