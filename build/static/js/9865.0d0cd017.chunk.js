"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9865],{53233:function(e,n,t){var r=t(1413),a=t(29439),i=t(47313),o=t(56140),d=t(67251),u=t(45705),c=t(86345),l=t(78267),s=t(37388),v=t(59491),f=t(99587),h=t(24511),m=t(46417),Z=o.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,o=e.setColumns,p=e.style,x=e.size,g=void 0===x?"":x,y=e.iconOnly,j=(0,h.$)().t,_=(0,i.useState)(!1),w=(0,a.Z)(_,2),b=w[0],C=w[1],k=(0,m.jsx)(d.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,m.jsx)(d.Z.Item,{children:(0,m.jsxs)(u.Z,{className:"d-flex justify-content-between",children:[(0,m.jsx)(Z,{children:e.title}),(0,m.jsx)(c.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));o(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,m.jsx)(l.Z,{overlay:k,trigger:["click"],onVisibleChange:function(e){C(e)},visible:b,children:(0,m.jsx)(s.Z,{title:j("change.columns"),children:(0,m.jsx)(v.Z,{style:(0,r.Z)({},p),size:g,icon:(0,m.jsx)(f.Z,{}),children:y?null:j("Columns")})})})}},41481:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(1413),a=t(29439),i=t(45987),o=t(47313),d=t(66672),u=t(16031),c=t(40765),l=t(46417),s=["handleChange","defaultValue","resetSearch"];function v(e){var n=e.handleChange,t=e.defaultValue,v=e.resetSearch,f=(0,i.Z)(e,s),h=(0,o.useState)(t),m=(0,a.Z)(h,2),Z=m[0],p=m[1],x=(0,o.useMemo)((function(){return(0,u.debounce)((function(e){n(e)}),800)}),[n]);return(0,o.useEffect)((function(){p(t)}),[v,t]),(0,l.jsx)(d.Z,(0,r.Z)({value:Z,onChange:function(e){p(e.target.value),x(e.target.value)},prefix:(0,l.jsx)(c.Z,{})},f))}},13945:function(e,n,t){function r(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return r}})},84017:function(e,n,t){function r(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$";if(!e)return"0";var t=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return n+" "+t}t.d(n,{Z:function(){return r}})},99865:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r=t(1413),a=t(29439),i=t(47313),o=t(73591),d=t(45705),u=t(59491),c=t(77181),l=t(78508),s=t(97890),v=t(31741),f=t(2717),h=t(90954),m=t(24511),Z=t(80314),p=t(22054),x=t(13945),g=t(41481),y=t(84017),j=t(53233),_=t(70816),w=t.n(_),b=t(46417),C=o.Z.TabPane,k=["accepted","ready","on_a_way","delivered","canceled"];function z(){var e,n,t,_=(0,f.I0)(),z=(0,s.s0)(),V=(0,m.$)().t,H=(0,f.v9)((function(e){return e.currency}),f.wU).defaultCurrency,I=(0,f.v9)((function(e){return e.menu}),f.wU).activeMenu,S=(0,i.useState)("accepted"),M=(0,a.Z)(S,2),P=M[0],N=M[1],Y=(null===(e=I.data)||void 0===e?void 0:e.role)||P,$=null===I||void 0===I?void 0:I.data,B={search:null===$||void 0===$?void 0:$.search,sort:null===$||void 0===$?void 0:$.sort,column:null===$||void 0===$?void 0:$.column,perPage:null===$||void 0===$?void 0:$.perPage,page:null===$||void 0===$?void 0:$.page,user_id:null===$||void 0===$?void 0:$.userId,status:Y},E=(0,i.useState)([{title:V("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:V("client"),dataIndex:"user",key:"user",is_show:!0,render:function(e){return(0,b.jsxs)("div",{children:[e.firstname," ",e.lastname]})}},{title:V("number.of.products"),dataIndex:"order_details_count",key:"rate",is_show:!0,render:function(e){return(0,b.jsxs)("div",{className:"text-lowercase",children:[e||0," ",V("products")]})}},{title:V("amount"),dataIndex:"details",key:"price",is_show:!0,render:function(e,n){return(0,y.Z)(null===n||void 0===n?void 0:n.total_price,H.symbol)}},{title:V("payment.type"),dataIndex:"transaction",key:"transaction",is_show:!0,render:function(e){var n;return V(null===e||void 0===e||null===(n=e.payment_system)||void 0===n?void 0:n.tag)||"-"}},{title:"created.at",dataIndex:"created_at",key:"created_at",is_show:!0,render:function(e,n){return w()(null===n||void 0===n?void 0:n.created_at).format("YYYY-MM-DD HH:mm")}},{title:V("options"),key:"options",is_show:!0,render:function(e,n){return(0,b.jsx)(d.Z,{children:(0,b.jsx)(u.Z,{icon:(0,b.jsx)(v.Z,{}),onClick:function(){return function(e){_((0,h.bL)({url:"deliveryman/order/details/".concat(e.id),id:"order_details",name:V("order.details")})),z("/deliveryman/order/details/".concat(e.id))}(n)}})})}}]),T=(0,a.Z)(E,2),U=T[0],D=T[1],K=(0,f.v9)((function(e){return e.orders}),f.wU),O=K.orders,A=K.meta,F=K.loading,L=K.params;(0,Z.Z)((function(){_((0,p.Bu)(B))}),[null===I||void 0===I?void 0:I.data]),(0,i.useEffect)((function(){null!==I&&void 0!==I&&I.refetch&&(_((0,p.Bu)(B)),_((0,h.A_)(I)))}),[null===I||void 0===I?void 0:I.refetch]);var R=function(e){var n=I.data;_((0,h.nc)({activeMenu:I,data:(0,r.Z)((0,r.Z)({},n),e)}))};return(0,b.jsxs)(c.Z,{title:V("orders"),extra:(0,b.jsxs)(d.Z,{wrap:!0,children:[(0,b.jsx)(g.Z,{placeholder:V("search"),handleChange:function(e){return R({search:e})},defaultValue:null===(n=I.data)||void 0===n?void 0:n.search,resetSearch:!(null!==(t=I.data)&&void 0!==t&&t.search)}),(0,b.jsx)(j.Z,{columns:U,setColumns:D})]}),children:[(0,b.jsx)(o.Z,{onChange:function(e){R({role:e,page:1}),N(e)},type:"card",activeKey:Y,children:k.map((function(e){return(0,b.jsx)(C,{tab:V(e)},e)}))}),(0,b.jsx)(l.Z,{scroll:{x:!0},columns:null===U||void 0===U?void 0:U.filter((function(e){return e.is_show})),dataSource:O,loading:F,pagination:{pageSize:L.perPage,page:L.page,total:A.total,defaultCurrent:L.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var a=e.pageSize,i=e.current,o=t.field,d=t.order,u=(0,x.Z)(d);_((0,h.nc)({activeMenu:I,data:(0,r.Z)((0,r.Z)({},I.data),{},{perPage:a,page:i,column:o,sort:u})}))}})]})}},99587:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(1413),a=t(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},o=t(17469),d=function(e,n){return a.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};d.displayName="TableOutlined";var u=a.forwardRef(d)}}]);