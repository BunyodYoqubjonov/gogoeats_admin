"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8505],{68328:function(e,t,n){n.d(t,{Z:function(){return Z}});var i=n(1413),r=n(29439),a=n(47313),s=n(10976),l=n(68197),u=n(59624),c=n(66672),o=n(86345),d=n(59491),m=n(5764),f=n(2717),v=n(24511),h=n(46417);function Z(e){var t,n,Z=e.form,j=e.handleSubmit,b=(0,v.$)().t,g=(0,f.v9)((function(e){return e.menu}),f.wU).activeMenu,x=(0,a.useState)(null!==(t=g.data)&&void 0!==t&&t.image?null===(n=g.data)||void 0===n?void 0:n.image:[]),p=(0,r.Z)(x,2),y=p[0],w=p[1],P=(0,a.useState)(!1),E=(0,r.Z)(P,2),I=E[0],S=E[1];return(0,h.jsxs)(s.Z,{name:"basic",layout:"vertical",onFinish:function(e){S(!0),j(e,y).finally((function(){return S(!1)}))},form:Z,initialValues:(0,i.Z)({active:!0},g.data),children:[(0,h.jsxs)(l.Z,{gutter:12,children:[(0,h.jsx)(u.Z,{span:12,children:(0,h.jsx)(s.Z.Item,{label:b("title"),name:"title",rules:[{validator:function(e,t){return t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(b("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(b("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(b("required")))}}],children:(0,h.jsx)(c.Z,{})})}),(0,h.jsx)(u.Z,{span:6,children:(0,h.jsx)(s.Z.Item,{label:b("image"),name:"images",rules:[{validator:function(){return 0===(null===y||void 0===y?void 0:y.length)?Promise.reject(new Error(b("required"))):Promise.resolve()}}],children:(0,h.jsx)(m.Z,{type:"brands",imageList:y,setImageList:w,form:Z,multiple:!1})})}),(0,h.jsx)(u.Z,{span:6,children:(0,h.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,h.jsx)(s.Z.Item,{label:b("active"),name:"active",valuePropName:"checked",children:(0,h.jsx)(o.Z,{})})})})]}),(0,h.jsx)(d.Z,{type:"primary",htmlType:"submit",loading:I,children:b("submit")})]})}},48505:function(e,t,n){n.r(t);var i=n(1413),r=n(29439),a=n(47313),s=n(97890),l=n(23560),u=n(10976),c=n(77181),o=n(72652),d=n(97421),m=n(2717),f=n(90954),v=n(11216),h=n(73253),Z=n(24511),j=n(68328),b=n(46417);t.default=function(){var e=(0,Z.$)().t,t=(0,m.v9)((function(e){return e.menu}),m.wU).activeMenu,n=(0,s.UO)().id,g=(0,m.I0)(),x=u.Z.useForm(),p=(0,r.Z)(x,1)[0],y=(0,s.s0)(),w=(0,a.useState)(!1),P=(0,r.Z)(w,2),E=P[0],I=P[1];(0,a.useEffect)((function(){return function(){var e=p.getFieldsValue(!0);g((0,f.nc)({activeMenu:t,data:e}))}}),[]);return(0,a.useEffect)((function(){t.refetch&&function(e){I(!0),v.Z.getById(e).then((function(e){var n,r=e.data,a=(0,i.Z)((0,i.Z)({},r),{},{image:[(n=r.img,{name:n,url:d.bV+n})]});p.setFieldsValue(a),g((0,f.nc)({activeMenu:t,data:a}))})).finally((function(){I(!1),g((0,f.A_)(t))}))}(n)}),[t.refetch]),(0,b.jsx)(c.Z,{title:e("clone.brand"),children:E?(0,b.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,b.jsx)(o.Z,{size:"large",className:"py-5"})}):(0,b.jsx)(j.Z,{form:p,handleSubmit:function(n,r){var a,s="catalog/brands",u={status:"published"},c=(0,i.Z)((0,i.Z)({},n),{},{active:n.active?1:0,"images[0]":null===(a=r[0])||void 0===a?void 0:a.name});return v.Z.create(c).then((function(){l.Am.success(e("successfully.cloned")),(0,m.dC)((function(){g((0,f.ph)((0,i.Z)((0,i.Z)({},t),{},{nextUrl:s}))),g((0,h.S0)(u))})),y("/".concat(s))}))}})})}}}]);