"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9743],{13945:function(e,n,t){function r(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return r}})},84017:function(e,n,t){function r(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$";if(!e)return"0";var t=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return n+" "+t}t.d(n,{Z:function(){return r}})},99743:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(4942),i=t(1413),o=t(29439),d=t(47313),a=t(99096),l=t(77181),u=t(45705),c=t(78508),s=t(97890),v=t(2717),f=t(90954),h=t(24511),p=t(80314),m=t(13945),y=t(84017),g=t(70816),_=t.n(g),Y=t(10924),Z=t(46417),x=a.Z.RangePicker;function w(){var e,n,t,a,g,w,M,b=(0,s.UO)().type,D=(0,v.I0)(),j=(0,h.$)().t,k=(0,v.v9)((function(e){return e.currency}),v.wU).defaultCurrency,C=[{title:j("order.id"),is_show:!0,dataIndex:"order_id",key:"order_id",sorter:!0,render:function(e){return(0,Z.jsxs)("span",{className:"text-hover",children:["#",e]})}},{title:j("order.total_price"),is_show:!0,dataIndex:"transaction",key:"transaction",render:function(e){var n;return(0,Z.jsx)("span",{children:(0,y.Z)(null===e||void 0===e||null===(n=e.order)||void 0===n?void 0:n.total_price,k.symbol)})}},{title:j("delivery.fee"),is_show:!0,dataIndex:"delivery_fee",key:"delivery_fee",render:function(e,n){var t;return(0,y.Z)(null===n||void 0===n||null===(t=n.order)||void 0===t?void 0:t.delivery_fee)}},{title:j("payment.type"),is_show:!0,dataIndex:"transaction",key:"transaction",render:function(e){var n;return j(null===e||void 0===e||null===(n=e.payment_system)||void 0===n?void 0:n.tag)||"-"}}],P=(0,v.v9)((function(e){return e.menu}),v.wU).activeMenu,A=(0,d.useState)(_()().subtract(1,"month"),_()()),I=(0,o.Z)(A,2),N=I[0],S=I[1],U=(0,v.v9)((function(e){return e.paymentToPartners}),v.wU),$=U.list,z=U.loading,F=U.params,O=U.meta,E=P.data,K={search:null===E||void 0===E?void 0:E.search,sort:null===E||void 0===E?void 0:E.sort,column:null===E||void 0===E?void 0:E.column,perPage:null===E||void 0===E?void 0:E.perPage,page:null===E||void 0===E?void 0:E.page,user_id:null===E||void 0===E?void 0:E.user_id,shop_id:null!==(null===(e=P.data)||void 0===e?void 0:e.shop_id)?null===(n=P.data)||void 0===n?void 0:n.shop_id:null,date_from:Array.isArray(N)?null===(t=N[0])||void 0===t?void 0:t.format("YYYY-MM-DD"):_()().subtract(1,"month").format("YYYY-MM-DD"),date_to:Array.isArray(N)?null===(a=N[1])||void 0===a?void 0:a.format("YYYY-MM-DD"):_()().format("YYYY-MM-DD"),type:b};(0,p.Z)((function(){D((0,Y.db)(K))}),[E,N,b]);return(0,d.useEffect)((function(){null!==P&&void 0!==P&&P.refetch&&(D((0,Y.db)(K)),D((0,f.A_)(P)))}),[null===P||void 0===P?void 0:P.refetch]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(l.Z,{children:(0,Z.jsx)("div",{className:"flex justify-content-space-between",children:(0,Z.jsx)(u.Z,{wrap:!0,className:"order-filter",style:{flex:1,width:"100%"},children:(0,Z.jsx)(x,{value:N,onChange:function(e){var n,t;n=function(n){var t,r;return(0,i.Z)((0,i.Z)({},n),{date_from:null===e||void 0===e||null===(t=e[0])||void 0===t?void 0:t.format("YYYY-MM-DD"),date_to:null===e||void 0===e||null===(r=e[1])||void 0===r?void 0:r.format("YYYY-MM-DD")})},D((0,f.nc)({activeMenu:P,data:(0,i.Z)((0,i.Z)({},E),(0,r.Z)({},t,n))})),S(e)},disabledDate:function(e){return e&&e>_()().endOf("day")},style:{width:"100%"}})})})}),(0,Z.jsx)(l.Z,{children:(0,Z.jsx)(c.Z,{scroll:{x:!0},columns:null===C||void 0===C?void 0:C.filter((function(e){return e.is_show})),dataSource:$,loading:z,pagination:{pageSize:F.perPage,page:(null===(g=P.data)||void 0===g?void 0:g.page)||1,total:null===O||void 0===O?void 0:O.total,defaultCurrent:null===(w=P.data)||void 0===w?void 0:w.page,current:null===(M=P.data)||void 0===M?void 0:M.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var r=e.pageSize,o=e.current,d=t.field,a=t.order,l=(0,m.Z)(a);D((0,f.nc)({activeMenu:P,data:(0,i.Z)((0,i.Z)({},E),{},{perPage:r,page:o,column:d,sort:l})}))}})})]})}}}]);