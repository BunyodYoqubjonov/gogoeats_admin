"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1175],{89281:function(e,n,t){t.d(n,{h:function(){return f}});var i=t(1413),r=t(29439),u=t(45987),a=t(47313),o=t(12279),s=t.n(o),l=t(74294),c=t(72652),d=t(46417),h=["fetchOptions","debounceTimeout","onClear"],f=function(e){var n=e.fetchOptions,t=e.debounceTimeout,o=void 0===t?400:t,f=e.onClear,m=(0,u.Z)(e,h),Z=(0,a.useState)(!1),v=(0,r.Z)(Z,2),b=v[0],x=v[1],p=(0,a.useState)([]),j=(0,r.Z)(p,2),g=j[0],_=j[1],k=(0,a.useMemo)((function(){return s()((function(e){_([]),x(!0),n(e).then((function(e){_(e),x(!1)}))}),o)}),[n,o]);return(0,d.jsx)(l.Z,(0,i.Z)((0,i.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:k,onClear:function(){k(""),f&&f()},notFoundContent:b?(0,d.jsx)(c.Z,{size:"small"}):"no results"},m),{},{options:g,onFocus:function(){k("")}}))}},71175:function(e,n,t){t.r(n);var i=t(1413),r=t(29439),u=t(47313),a=t(97890),o=t(23560),s=t(10976),l=t(77181),c=t(2717),d=t(90954),h=t(24511),f=t(16895),m=t(9715),Z=t(46417);n.default=function(){var e=(0,h.$)().t,n=(0,c.v9)((function(e){return e.menu}),c.wU).activeMenu,t=(0,c.I0)(),v=s.Z.useForm(),b=(0,r.Z)(v,1)[0],x=(0,a.s0)();(0,u.useEffect)((function(){return function(){var e=b.getFieldsValue(!0);t((0,d.nc)({activeMenu:n,data:e}))}}),[]);return(0,Z.jsx)(l.Z,{title:e("add.booking.table"),children:(0,Z.jsx)(m.Z,{form:b,handleSubmit:function(r){var u=(0,i.Z)((0,i.Z)({},r),{},{chair_count:String(r.chair_count),shop_section_id:r.shop_section_id.value}),a="seller/booking/tables";return f.Z.create(u).then((function(){o.Am.success(e("successfully.created")),x("/".concat(a)),t((0,d.ph)((0,i.Z)((0,i.Z)({},n),{},{nextUrl:a})))}))}})})}},9715:function(e,n,t){t.d(n,{Z:function(){return b}});var i=t(1413),r=t(29439),u=t(47313),a=t(10976),o=t(68197),s=t(59624),l=t(66672),c=t(16124),d=t(59491),h=t(89281),f=t(24511),m=t(73459),Z=t(2717),v=t(46417);function b(e){var n=e.form,t=e.handleSubmit,b=(0,f.$)().t,x=(0,Z.v9)((function(e){return e.menu}),Z.wU).activeMenu,p=(0,u.useState)(!1),j=(0,r.Z)(p,2),g=j[0],_=j[1];return(0,v.jsxs)(a.Z,{name:"booking-form",layout:"vertical",onFinish:function(e){_(!0),t(e).finally((function(){return _(!1)}))},form:n,initialValues:(0,i.Z)({},null===x||void 0===x?void 0:x.data),children:[(0,v.jsxs)(o.Z,{gutter:12,children:[(0,v.jsx)(s.Z,{span:12,children:(0,v.jsx)(a.Z.Item,{label:b("zona"),name:"shop_section_id",rules:[{required:!0,message:b("required")}],children:(0,v.jsx)(h.h,{fetchOptions:function(e){return m.Z.getAll({search:e}).then((function(e){return e.data.map((function(e){var n;return{label:null===e||void 0===e||null===(n=e.translation)||void 0===n?void 0:n.title,value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},debounceTimeout:300})})}),(0,v.jsx)(s.Z,{span:12,children:(0,v.jsx)(a.Z.Item,{label:"name",name:"name",rules:[{required:!0,message:"required"}],children:(0,v.jsx)(l.Z,{})})}),(0,v.jsx)(s.Z,{span:12,children:(0,v.jsx)(a.Z.Item,{label:b("chair.count"),name:"chair_count",rules:[{required:!0,message:b("required")}],children:(0,v.jsx)(c.Z,{className:"w-100"})})}),(0,v.jsx)(s.Z,{span:12,children:(0,v.jsx)(a.Z.Item,{label:b("tax"),name:"tax",rules:[{required:!0,message:b("required")}],children:(0,v.jsx)(c.Z,{className:"w-100"})})})]}),(0,v.jsx)(d.Z,{type:"primary",htmlType:"submit",loading:g,children:b("submit")})]})}}}]);