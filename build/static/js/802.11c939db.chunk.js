"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[802],{55940:function(e,n,t){t.d(n,{Z:function(){return v}});var i=t(1413),o=t(45987),a=(t(47313),t(59491)),c=t(47515),l=t(23560),r=t(24511),d=t(79492),u=t(46417),s=["size","onClick","type"];function v(e){var n=e.size,t=void 0===n?"":n,v=e.onClick,f=e.type,h=void 0===f?"default":f,p=(0,o.Z)(e,s),Z=(0,r.$)().t,m=(0,d.Z)().isDemo;return(0,u.jsx)(a.Z,(0,i.Z)({size:t,icon:(0,u.jsx)(c.Z,{}),onClick:function(e){m?l.Am.warning(Z("cannot.work.demo")):v(e)},type:h},p))}},53233:function(e,n,t){var i=t(1413),o=t(29439),a=t(47313),c=t(56140),l=t(67251),r=t(45705),d=t(86345),u=t(78267),s=t(37388),v=t(59491),f=t(99587),h=t(24511),p=t(46417),Z=c.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,c=e.setColumns,m=e.style,x=e.size,g=void 0===x?"":x,j=e.iconOnly,w=(0,h.$)().t,y=(0,a.useState)(!1),C=(0,o.Z)(y,2),b=C[0],z=C[1],_=(0,p.jsx)(l.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,p.jsx)(l.Z.Item,{children:(0,p.jsxs)(r.Z,{className:"d-flex justify-content-between",children:[(0,p.jsx)(Z,{children:e.title}),(0,p.jsx)(d.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));c(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,p.jsx)(u.Z,{overlay:_,trigger:["click"],onVisibleChange:function(e){z(e)},visible:b,children:(0,p.jsx)(s.Z,{title:w("change.columns"),children:(0,p.jsx)(v.Z,{style:(0,i.Z)({},m),size:g,icon:(0,p.jsx)(f.Z,{}),children:j?null:w("Columns")})})})}},13945:function(e,n,t){function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return i}})},70802:function(e,n,t){t.r(n);var i=t(4942),o=t(93433),a=t(1413),c=t(29439),l=t(47313),r=t(66204),d=t(45705),u=t(59491),s=t(77181),v=t(78508),f=t(97890),h=t(12019),p=t(47515),Z=t(55768),m=t(74580),x=t(69658),g=t(23560),j=t(23861),w=t(2717),y=t(90954),C=t(24511),b=t(70816),z=t.n(b),_=t(55940),k=t(53233),V=t(80314),I=t(51353),H=t(13945),M=t(46417);n.default=function(){var e,n,t,b=(0,C.$)().t,S=(0,w.I0)(),Y=(0,f.s0)(),D=(0,l.useState)([{title:b("id"),dataIndex:"id",is_show:!0},{title:b("title"),dataIndex:"title",is_show:!0,render:function(e,n){var t;return null===(t=n.translation)||void 0===t?void 0:t.title}},{title:b("name"),dataIndex:"name",is_show:!0},{title:b("type"),dataIndex:"type",is_show:!0},{title:b("price"),dataIndex:"price",is_show:!0},{title:b("quantity"),dataIndex:"qty",is_show:!0},{title:b("expired.at"),dataIndex:"expired_at",is_show:!0,render:function(e){return(0,M.jsx)("div",{children:z()(new Date).isBefore(e)?(0,M.jsx)(r.Z,{color:"blue",children:z()(e).format("YYYY-MM-DD")}):(0,M.jsx)(r.Z,{color:"error",children:z()(e).format("YYYY-MM-DD")})})}},{title:b("options"),dataIndex:"options",is_show:!0,render:function(e,n){return(0,M.jsxs)(d.Z,{children:[(0,M.jsx)(u.Z,{type:"primary",icon:(0,M.jsx)(h.Z,{}),onClick:function(){return function(e){S((0,y.bL)({url:"coupon/".concat(e.id),id:"coupon_edit",name:b("edit.coupon")})),Y("/coupon/".concat(e.id))}(n)}}),(0,M.jsx)(_.Z,{icon:(0,M.jsx)(p.Z,{}),onClick:function(){T([n.id]),B(!0),L(!0)}})]})}}]),O=(0,c.Z)(D,2),P=O[0],A=O[1],B=(0,l.useContext)(m._).setIsModalVisible,E=(0,l.useState)(null),N=(0,c.Z)(E,2),R=N[0],T=N[1],$=(0,l.useState)(null),q=(0,c.Z)($,2),K=q[0],L=q[1],U=(0,l.useState)(!1),F=(0,c.Z)(U,2),G=F[0],J=F[1],Q=(0,w.v9)((function(e){return e.menu}),w.wU).activeMenu,W=(0,w.v9)((function(e){return e.coupons}),w.wU),X=W.coupons,ee=W.meta,ne=W.loading,te=W.params,ie=Q.data,oe={search:null===ie||void 0===ie?void 0:ie.search,sort:null===ie||void 0===ie?void 0:ie.sort,status:null===ie||void 0===ie?void 0:ie.role,column:null===ie||void 0===ie?void 0:ie.column,perPage:null===ie||void 0===ie?void 0:ie.perPage,page:null===ie||void 0===ie?void 0:ie.page};(0,l.useEffect)((function(){Q.refetch&&(S((0,I.v)(oe)),S((0,y.A_)(Q)))}),[Q.refetch]),(0,V.Z)((function(){S((0,I.v)(oe))}),[Q.data]);var ae={selectedRowKeys:R,onChange:function(e){T(e)}};return(0,M.jsxs)(s.Z,{title:b("coupons"),extra:(0,M.jsxs)(d.Z,{wrap:!0,children:[(0,M.jsx)(u.Z,{icon:(0,M.jsx)(Z.Z,{}),type:"primary",onClick:function(){S((0,y.bL)({id:"add.coupon",url:"coupon/add",name:b("add.coupon")})),Y("/coupon/add")},children:b("add.coupon")}),(0,M.jsx)(_.Z,{onClick:function(){null===R||0===R.length?g.Am.warning(b("select.the.product")):(B(!0),L(!1))},children:b("delete.selected")}),(0,M.jsx)(k.Z,{columns:P,setColumns:A})]}),children:[(0,M.jsx)(v.Z,{scroll:{x:!0},rowSelection:ae,rowKey:function(e){return e.id},dataSource:X,columns:null===P||void 0===P?void 0:P.filter((function(e){return e.is_show})),pagination:{pageSize:te.perPage,page:(null===(e=Q.data)||void 0===e?void 0:e.page)||1,total:ee.total,defaultCurrent:null===(n=Q.data)||void 0===n?void 0:n.page,current:null===(t=Q.data)||void 0===t?void 0:t.page},loading:ne,onChange:function(e,n,t){var i=e.pageSize,o=e.current,c=t.field,l=t.order,r=(0,H.Z)(l);S((0,y.nc)({activeMenu:Q,data:(0,a.Z)((0,a.Z)({},Q.data),{},{perPage:i,page:o,column:c,sort:r})}))}}),(0,M.jsx)(x.Z,{click:function(){J(!0);var e=(0,a.Z)({},Object.assign.apply(Object,[{}].concat((0,o.Z)(R.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));j.Z.delete(e).then((function(){g.Am.success(b("successfully.deleted")),T(null),B(!1),S((0,I.v)()),L(null)})).finally((function(){return J(!1)}))},text:b(K?"delete":"all.delete"),setText:T,loading:G})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(1413),o=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},c=t(17469),l=function(e,n){return o.createElement(c.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};l.displayName="PlusCircleOutlined";var r=o.forwardRef(l)},99587:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(1413),o=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},c=t(17469),l=function(e,n){return o.createElement(c.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};l.displayName="TableOutlined";var r=o.forwardRef(l)}}]);