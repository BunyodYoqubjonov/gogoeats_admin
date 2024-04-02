"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7764],{89281:function(e,t,n){n.d(t,{h:function(){return m}});var r=n(1413),i=n(29439),a=n(45987),s=n(47313),u=n(12279),l=n.n(u),d=n(74294),o=n(72652),c=n(46417),f=["fetchOptions","debounceTimeout","onClear"],m=function(e){var t=e.fetchOptions,n=e.debounceTimeout,u=void 0===n?400:n,m=e.onClear,v=(0,a.Z)(e,f),p=(0,s.useState)(!1),h=(0,i.Z)(p,2),Z=h[0],x=h[1],Y=(0,s.useState)([]),j=(0,i.Z)(Y,2),b=j[0],g=j[1],y=(0,s.useMemo)((function(){return l()((function(e){g([]),x(!0),t(e).then((function(e){g(e),x(!1)}))}),u)}),[t,u]);return(0,c.jsx)(d.Z,(0,r.Z)((0,r.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:y,onClear:function(){y(""),m&&m()},notFoundContent:Z?(0,c.jsx)(o.Z,{size:"small"}):"no results"},v),{},{options:b,onFocus:function(){y("")}}))}},57764:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(1413),i=n(29439),a=n(47313),s=n(97890),u=n(23560),l=n(10976),d=n(77181),o=n(70816),c=n.n(o),f=n(2717),m=n(90954),v=n(57409),p=n(69660),h=n(24511),Z=n(8550),x=n(51282),Y=n(4191),j=n(46417);function b(){var e=(0,h.$)().t,t=(0,f.v9)((function(e){return e.menu}),f.wU).activeMenu,n=(0,f.I0)(),o=(0,s.UO)().id,b=l.Z.useForm(),g=(0,i.Z)(b,1)[0],y=(0,s.s0)(),M=(0,a.useState)(!1),D=(0,i.Z)(M,2),w=D[0],S=D[1];(0,a.useEffect)((function(){return function(){var e=g.getFieldsValue(!0),i=JSON.stringify(e.start),a=JSON.stringify(e.end),s=(0,r.Z)((0,r.Z)({},e),{},{start:i,end:a});n((0,m.nc)({activeMenu:t,data:s}))}}),[]),(0,a.useEffect)((function(){t.refetch&&(S(!0),v.Z.getById(o).then((function(e){var i=e.data,a={price:null===i||void 0===i?void 0:i.price,type:null===i||void 0===i?void 0:i.type,products:null===i||void 0===i?void 0:i.products.map((function(e){var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:null===e||void 0===e?void 0:e.id}})),start:c()(null===i||void 0===i?void 0:i.start,"YYYY-MM-DD"),end:c()(null===i||void 0===i?void 0:i.end,"YYYY-MM-DD"),image:[(0,Z.Z)(null===i||void 0===i?void 0:i.img)]};g.setFieldsValue(a),n((0,m.nc)({activeMenu:t,data:(0,r.Z)((0,r.Z)({},a),{},{start:null===i||void 0===i?void 0:i.start,end:null===i||void 0===i?void 0:i.end})}))})).finally((function(){S(!1),n((0,m.A_)(t))})))}),[t.refetch]);return(0,j.jsx)(d.Z,{title:e("edit.discount"),className:"h-100",children:w?(0,j.jsx)(x.Z,{}):(0,j.jsx)(Y.Z,{form:g,handleSubmit:function(i,a){var s;if(c()(i.start).format("YYYY-MM-DD")>c()(i.end).format("YYYY-MM-DD"))return u.Am.error(e("start.date.must.be.before.end.date"));var l={price:i.price,type:i.type,products:i.products.map((function(e){return e.value})),start:i.start?c()(i.start).format("YYYY-MM-DD"):void 0,end:i.end?c()(i.end).format("YYYY-MM-DD"):void 0,images:[null===(s=a[0])||void 0===s?void 0:s.name]},d="seller/discounts";return v.Z.update(o,l).then((function(){u.Am.success(e("successfully.updated")),(0,f.dC)((function(){n((0,m.ph)((0,r.Z)((0,r.Z)({},t),{},{nextUrl:d}))),n((0,p.k)({}))})),y("/".concat(d))}))}})})}},4191:function(e,t,n){n.d(t,{Z:function(){return M}});var r=n(1413),i=n(15861),a=n(29439),s=n(87757),u=n.n(s),l=n(47313),d=n(10976),o=n(68197),c=n(59624),f=n(74294),m=n(16124),v=n(99096),p=n(59491),h=n(70816),Z=n.n(h),x=n(89281),Y=n(5764),j=n(24511),b=n(2717),g=n(18333),y=n(46417);function M(e){var t,n,s=e.form,h=e.handleSubmit,M=(0,j.$)().t,D=(0,b.v9)((function(e){return e.menu}),b.wU).activeMenu,w=(0,b.v9)((function(e){return e.myShop}),b.wU).myShop,S=(0,l.useState)(!1),q=(0,a.Z)(S,2),I=q[0],N=q[1],O=(0,l.useState)(null!==(t=D.data)&&void 0!==t&&t.image?null===(n=D.data)||void 0===n?void 0:n.image:[]),C=(0,a.Z)(O,2),k=C[0],F=C[1];function U(){return(U=(0,i.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={search:t,shop_id:w.id,status:"published",active:1,rest:1},e.abrupt("return",g.Z.getAll(n).then((function(e){return e.data.map((function(e){var t;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,y.jsxs)(d.Z,{name:"discount-form",layout:"vertical",onFinish:function(e){N(!0),h(e,k).finally((function(){return N(!1)}))},form:s,initialValues:(0,r.Z)({},function(){var e,t=D.data;if(null===(e=D.data)||void 0===e||!e.start)return t;var n=D.data.start,i=D.data.end;return(0,r.Z)((0,r.Z)({},t),{},{start:Z()(n,"YYYY-MM-DD"),end:Z()(i,"YYYY-MM-DD")})}()),className:"d-flex flex-column h-100",children:[(0,y.jsxs)(o.Z,{gutter:12,children:[(0,y.jsx)(c.Z,{span:12,children:(0,y.jsx)(d.Z.Item,{label:M("type"),name:"type",rules:[{required:!0,message:M("required")}],children:(0,y.jsxs)(f.Z,{children:[(0,y.jsx)(f.Z.Option,{value:"fix",children:M("fix")}),(0,y.jsx)(f.Z.Option,{value:"percent",children:M("percent")})]})})}),(0,y.jsx)(c.Z,{span:12,children:(0,y.jsx)(d.Z.Item,{label:M("price"),name:"price",rules:[{required:!0,message:M("required")}],children:(0,y.jsx)(m.Z,{min:0,className:"w-100"})})}),(0,y.jsx)(c.Z,{span:12,children:(0,y.jsx)(d.Z.Item,{label:M("start.date"),name:"start",rules:[{required:!0,message:M("required")}],children:(0,y.jsx)(v.Z,{className:"w-100",placeholder:"",disabledDate:function(e){return Z()().add(-1,"days")>=e}})})}),(0,y.jsx)(c.Z,{span:12,children:(0,y.jsx)(d.Z.Item,{label:M("end.date"),name:"end",rules:[{required:!0,message:M("required")}],children:(0,y.jsx)(v.Z,{className:"w-100",placeholder:"",disabledDate:function(e){return Z()().add(-1,"days")>=e}})})}),(0,y.jsx)(c.Z,{span:24,children:(0,y.jsx)(d.Z.Item,{label:M("products"),name:"products",rules:[{required:!0,message:M("required")}],children:(0,y.jsx)(x.h,{fetchOptions:function(e){return U.apply(this,arguments)},mode:"multiple"})})}),(0,y.jsx)(c.Z,{span:24,children:(0,y.jsx)(d.Z.Item,{label:M("image"),name:"images",rules:[{required:!k.length,message:M("required")}],children:(0,y.jsx)(Y.Z,{type:"discounts",imageList:k,setImageList:F,form:s,multiple:!1,name:"image"})})})]}),(0,y.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,y.jsx)("div",{className:"pb-5",children:(0,y.jsx)(p.Z,{type:"primary",htmlType:"submit",loading:I,children:M("submit")})})})]})}}}]);