"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9456],{53233:function(e,n,t){var a=t(1413),r=t(29439),i=t(47313),u=t(56140),l=t(67251),o=t(45705),c=t(86345),d=t(78267),s=t(37388),f=t(59491),h=t(99587),v=t(24511),m=t(46417),Z=u.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,u=e.setColumns,g=e.style,x=e.size,p=void 0===x?"":x,w=e.iconOnly,j=(0,v.$)().t,b=(0,i.useState)(!1),y=(0,r.Z)(b,2),C=y[0],z=y[1],V=(0,m.jsx)(l.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,m.jsx)(l.Z.Item,{children:(0,m.jsxs)(o.Z,{className:"d-flex justify-content-between",children:[(0,m.jsx)(Z,{children:e.title}),(0,m.jsx)(c.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));u(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,m.jsx)(d.Z,{overlay:V,trigger:["click"],onVisibleChange:function(e){z(e)},visible:C,children:(0,m.jsx)(s.Z,{title:j("change.columns"),children:(0,m.jsx)(f.Z,{style:(0,a.Z)({},g),size:p,icon:(0,m.jsx)(h.Z,{}),children:w?null:j("Columns")})})})}},41481:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(1413),r=t(29439),i=t(45987),u=t(47313),l=t(66672),o=t(16031),c=t(40765),d=t(46417),s=["handleChange","defaultValue","resetSearch"];function f(e){var n=e.handleChange,t=e.defaultValue,f=e.resetSearch,h=(0,i.Z)(e,s),v=(0,u.useState)(t),m=(0,r.Z)(v,2),Z=m[0],g=m[1],x=(0,u.useMemo)((function(){return(0,o.debounce)((function(e){n(e)}),800)}),[n]);return(0,u.useEffect)((function(){g(t)}),[f,t]),(0,d.jsx)(l.Z,(0,a.Z)({value:Z,onChange:function(e){g(e.target.value),x(e.target.value)},prefix:(0,d.jsx)(c.Z,{})},h))}},13945:function(e,n,t){function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return a}})},84017:function(e,n,t){function a(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$";if(!e)return"0";var t=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return n+" "+t}t.d(n,{Z:function(){return a}})},39456:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var a=t(4942),r=t(1413),i=t(29439),u=t(47313),l=t(77181),o=t(45705),c=t(78508),d=t(2717),s=t(90954),f=t(24511),h=t(13945),v=t(80314),m=t(84017),Z=t(48418),g=t(41481),x=t(53233),p=t(46417);function w(){var e,n,t=(0,f.$)().t,w=(0,d.I0)(),j=(0,d.v9)((function(e){return e.menu}),d.wU).activeMenu,b=(0,d.v9)((function(e){return e.wallet}),d.wU),y=b.wallets,C=b.loading,z=b.meta,V=b.params,k=(0,d.v9)((function(e){return e.currency}),d.wU).defaultCurrency,_=(0,u.useState)([{title:t("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:t("firstname"),dataIndex:"firstname",key:"firstname",is_show:!0},{title:t("lastname"),dataIndex:"lastname",key:"lastname",is_show:!0},{title:t("wallet"),dataIndex:"wallet",key:"wallet",is_show:!0,render:function(e){return(0,m.Z)(null===e||void 0===e?void 0:e.price,k.symbol)}},{title:t("phone"),dataIndex:"phone",key:"phone",is_show:!0},{title:t("role"),dataIndex:"role",key:"role",is_show:!0}]),H=(0,i.Z)(_,2),I=H[0],S=H[1];(0,u.useEffect)((function(){j.refetch&&(w((0,Z.uJ)()),w((0,s.A_)(j)))}),[j.refetch]),(0,v.Z)((function(){var e=j.data,n={sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page,search:null===e||void 0===e?void 0:e.search};w((0,Z.uJ)(n))}),[j.data]);return(0,p.jsx)(l.Z,{title:t("wallets"),extra:(0,p.jsxs)(o.Z,{wrap:!0,children:[(0,p.jsx)(g.Z,{placeholder:t("search"),handleChange:function(e){return function(e,n){var t=j.data;w((0,s.nc)({activeMenu:j,data:(0,r.Z)((0,r.Z)({},t),{},(0,a.Z)({},n,e))}))}(e,"search")},defaultValue:null===(e=j.data)||void 0===e?void 0:e.search,resetSearch:!(null!==(n=j.data)&&void 0!==n&&n.search)}),(0,p.jsx)(x.Z,{columns:I,setColumns:S})]}),children:(0,p.jsx)(c.Z,{scroll:{x:!0},columns:null===I||void 0===I?void 0:I.filter((function(e){return e.is_show})),dataSource:y,loading:C,pagination:{pageSize:V.perPage,page:V.page,total:z.total,defaultCurrent:V.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var a=e.pageSize,r=e.current,i=t.field,u=t.order,l=(0,h.Z)(u);w((0,s.nc)({activeMenu:j,data:{perPage:a,page:r,column:i,sort:l}}))}})})}},99587:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(1413),r=t(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},u=t(17469),l=function(e,n){return r.createElement(u.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:i}))};l.displayName="TableOutlined";var o=r.forwardRef(l)}}]);