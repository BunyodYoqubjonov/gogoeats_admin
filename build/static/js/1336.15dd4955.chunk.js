"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1336],{55940:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(1413),o=t(45987),s=(t(47313),t(59491)),c=t(47515),u=t(23560),r=t(24511),l=t(79492),a=t(46417),d=["size","onClick","type"];function f(e){var n=e.size,t=void 0===n?"":n,f=e.onClick,h=e.type,v=void 0===h?"default":h,Z=(0,o.Z)(e,d),x=(0,r.$)().t,p=(0,l.Z)().isDemo;return(0,a.jsx)(s.Z,(0,i.Z)({size:t,icon:(0,a.jsx)(c.Z,{}),onClick:function(e){p?u.Am.warning(x("cannot.work.demo")):f(e)},type:v},Z))}},53233:function(e,n,t){var i=t(1413),o=t(29439),s=t(47313),c=t(56140),u=t(67251),r=t(45705),l=t(86345),a=t(78267),d=t(37388),f=t(59491),h=t(99587),v=t(24511),Z=t(46417),x=c.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,c=e.setColumns,p=e.style,m=e.size,b=void 0===m?"":m,g=e.iconOnly,j=(0,v.$)().t,k=(0,s.useState)(!1),y=(0,o.Z)(k,2),w=y[0],C=y[1],z=(0,Z.jsx)(u.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,Z.jsx)(u.Z.Item,{children:(0,Z.jsxs)(r.Z,{className:"d-flex justify-content-between",children:[(0,Z.jsx)(x,{children:e.title}),(0,Z.jsx)(l.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));c(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,Z.jsx)(a.Z,{overlay:z,trigger:["click"],onVisibleChange:function(e){C(e)},visible:w,children:(0,Z.jsx)(d.Z,{title:j("change.columns"),children:(0,Z.jsx)(f.Z,{style:(0,i.Z)({},p),size:b,icon:(0,Z.jsx)(h.Z,{}),children:g?null:j("Columns")})})})}},91336:function(e,n,t){t.r(n);var i=t(4942),o=t(93433),s=t(1413),c=t(29439),u=t(47313),r=t(86345),l=t(66204),a=t(45705),d=t(59491),f=t(77181),h=t(78508),v=t(97890),Z=t(12019),x=t(47515),p=t(55768),m=t(69658),b=t(74580),g=t(2717),j=t(90954),k=t(23560),y=t(24511),w=t(73346),C=t(96708),z=t(70816),_=t.n(z),S=t(55940),V=t(53233),H=t(46417);n.default=function(){var e=(0,y.$)().t,n=(0,g.I0)(),t=(0,v.s0)(),z=(0,u.useContext)(b._).setIsModalVisible,I=(0,u.useState)(null),A=(0,c.Z)(I,2),M=A[0],O=A[1],N=(0,u.useState)(null),B=(0,c.Z)(N,2),E=B[0],T=B[1],$=(0,u.useState)(null),D=(0,c.Z)($,2),L=D[0],P=D[1],R=(0,u.useState)(!1),U=(0,c.Z)(R,2),K=U[0],q=U[1],F=(0,u.useState)(null),G=(0,c.Z)(F,2),J=G[0],Q=G[1],W=(0,g.v9)((function(e){return e.menu}),g.wU).activeMenu,X=(0,g.v9)((function(e){return e.bonus}),g.wU),Y=X.bonus,ee=X.meta,ne=X.loading,te=(0,u.useState)([{title:e("id"),dataIndex:"id",key:"id",is_show:!0},{title:e("bonus.product"),dataIndex:"bonusStock",key:"bonusStock",is_show:!0,render:function(e,n){var t,i;return null===n||void 0===n||null===(t=n.bonusable)||void 0===t||null===(i=t.product)||void 0===i?void 0:i.translation.title}},{title:e("active"),dataIndex:"status",key:"status",is_show:!0,render:function(e,n){return(0,H.jsx)(r.Z,{onChange:function(){z(!0),T(n.id),P(!0)},checked:e},n.id+e)}},{title:e("expired.at"),dataIndex:"expired_at",key:"expired_at",is_show:!0,render:function(e){return(0,H.jsx)("div",{children:_()(new Date).isBefore(e)?(0,H.jsx)(l.Z,{color:"blue",children:e}):(0,H.jsx)(l.Z,{color:"error",children:e})})}},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,n){return(0,H.jsxs)(a.Z,{children:[(0,H.jsx)(d.Z,{type:"primary",icon:(0,H.jsx)(Z.Z,{}),onClick:function(){return ce(n)}}),(0,H.jsx)(S.Z,{icon:(0,H.jsx)(x.Z,{}),onClick:function(){z(!0),O([n.id]),P(!1),Q(!0)}})]})}}]),ie=(0,c.Z)(te,2),oe=ie[0],se=ie[1],ce=function(i){n((0,j.bL)({url:"seller/product-bonus/".concat(i.id),id:"bonus_edit",name:e("edit.bonus")})),t("/seller/product-bonus/".concat(i.id))};(0,u.useEffect)((function(){W.refetch&&(n((0,C.k)({})),n((0,j.A_)(W)))}),[W.refetch]);var ue={id:M,onChange:function(e){O(e)}};return(0,H.jsxs)(f.Z,{title:e("bonus"),extra:(0,H.jsxs)(a.Z,{children:[(0,H.jsx)(d.Z,{icon:(0,H.jsx)(p.Z,{}),type:"primary",onClick:function(){n((0,j.bL)({id:"add.bonus",url:"seller/product-bonus/add",name:e("add.bonus")})),t("/seller/product-bonus/add")},children:e("add.bonus")}),(0,H.jsx)(S.Z,{className:"",type:"danger",onClick:function(){null===M||0===M.length?k.Am.warning(e("select.the.product")):(z(!0),Q(!1))},children:e("delete.all")}),(0,H.jsx)(V.Z,{columns:oe,setColumns:se})]}),children:[(0,H.jsx)(h.Z,{scroll:{x:!0},rowSelection:ue,columns:null===oe||void 0===oe?void 0:oe.filter((function(e){return e.is_show})),dataSource:Y,pagination:{pageSize:ee.per_page,page:ee.current_page,total:ee.total},rowKey:function(e){return e.id},loading:ne,onChange:function(e){var t=e.pageSize,i=e.current;n((0,C.k)({perPage:t,page:i}))}}),(0,H.jsx)(m.Z,{click:L?function(){q(!0),w.Z.setActive(E).then((function(){z(!1),n((0,C.k)({})),k.Am.success(e("successfully.updated"))})).finally((function(){return q(!1)}))}:function(){q(!0);var t=(0,s.Z)({},Object.assign.apply(Object,[{}].concat((0,o.Z)(M.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));w.Z.delete(t).then((function(){n((0,C.k)({})),k.Am.success(e("successfully.deleted")),Q(null)})).finally((function(){z(!1),q(!1)}))},text:e(L?"set.active.bonus":J?"delete":"all.delete"),setText:O,loading:K})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(1413),o=t(47313),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},c=t(17469),u=function(e,n){return o.createElement(c.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:s}))};u.displayName="PlusCircleOutlined";var r=o.forwardRef(u)},99587:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(1413),o=t(47313),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},c=t(17469),u=function(e,n){return o.createElement(c.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:s}))};u.displayName="TableOutlined";var r=o.forwardRef(u)}}]);