"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9809],{55940:function(e,n,t){t.d(n,{Z:function(){return v}});var i=t(1413),r=t(45987),l=(t(47313),t(59491)),a=t(47515),u=t(23560),o=t(24511),s=t(79492),c=t(46417),d=["size","onClick","type"];function v(e){var n=e.size,t=void 0===n?"":n,v=e.onClick,f=e.type,h=void 0===f?"default":f,p=(0,r.Z)(e,d),x=(0,o.$)().t,Z=(0,s.Z)().isDemo;return(0,c.jsx)(l.Z,(0,i.Z)({size:t,icon:(0,c.jsx)(a.Z,{}),onClick:function(e){Z?u.Am.warning(x("cannot.work.demo")):v(e)},type:h},p))}},53233:function(e,n,t){var i=t(1413),r=t(29439),l=t(47313),a=t(56140),u=t(67251),o=t(45705),s=t(86345),c=t(78267),d=t(37388),v=t(59491),f=t(99587),h=t(24511),p=t(46417),x=a.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,a=e.setColumns,Z=e.style,m=e.size,g=void 0===m?"":m,j=e.iconOnly,y=(0,h.$)().t,b=(0,l.useState)(!1),C=(0,r.Z)(b,2),w=C[0],k=C[1],_=(0,p.jsx)(u.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,p.jsx)(u.Z.Item,{children:(0,p.jsxs)(o.Z,{className:"d-flex justify-content-between",children:[(0,p.jsx)(x,{children:e.title}),(0,p.jsx)(s.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));a(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,p.jsx)(c.Z,{overlay:_,trigger:["click"],onVisibleChange:function(e){k(e)},visible:w,children:(0,p.jsx)(d.Z,{title:y("change.columns"),children:(0,p.jsx)(v.Z,{style:(0,i.Z)({},Z),size:g,icon:(0,p.jsx)(f.Z,{}),children:j?null:y("Columns")})})})}},89281:function(e,n,t){t.d(n,{h:function(){return f}});var i=t(1413),r=t(29439),l=t(45987),a=t(47313),u=t(12279),o=t.n(u),s=t(74294),c=t(72652),d=t(46417),v=["fetchOptions","debounceTimeout","onClear"],f=function(e){var n=e.fetchOptions,t=e.debounceTimeout,u=void 0===t?400:t,f=e.onClear,h=(0,l.Z)(e,v),p=(0,a.useState)(!1),x=(0,r.Z)(p,2),Z=x[0],m=x[1],g=(0,a.useState)([]),j=(0,r.Z)(g,2),y=j[0],b=j[1],C=(0,a.useMemo)((function(){return o()((function(e){b([]),m(!0),n(e).then((function(e){b(e),m(!1)}))}),u)}),[n,u]);return(0,d.jsx)(s.Z,(0,i.Z)((0,i.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:C,onClear:function(){C(""),f&&f()},notFoundContent:Z?(0,d.jsx)(c.Z,{size:"small"}):"no results"},h),{},{options:y,onFocus:function(){C("")}}))}},84963:function(e,n,t){t.d(n,{Z:function(){return C}});var i=t(15861),r=t(1413),l=t(29439),a=t(87757),u=t.n(a),o=t(10976),s=t(66672),c=t(9274),d=t(59491),v=t(47313),f=t(8922),h=t(24511),p=t(2717),x=t(23560),Z=t(20503),m=t(8550),g=t(34319),j=t(22307),y=t(89281),b=t(46417);function C(e){var n=e.modal,t=e.handleCancel,a=e.onSuccess,C=e.groupId,w=o.Z.useForm(),k=(0,l.Z)(w,1)[0],_=(0,h.$)().t,V=(0,p.I0)(),z=(0,v.useState)(!1),S=(0,l.Z)(z,2),I=S[0],H=S[1],O=(0,v.useState)("text"),N=(0,l.Z)(O,2),A=N[0],M=N[1],F=(0,v.useState)(null),P=(0,l.Z)(F,2),$=P[0],E=P[1],T=(0,v.useState)(""),G=(0,l.Z)(T,2),R=G[0],U=G[1];(0,p.v9)((function(e){return e.extraGroup}),p.wU).extraGroups;(0,v.useEffect)((function(){if(null!==n&&void 0!==n&&n.id){var e,t,i;M(n.group.type);var l=(0,r.Z)((0,r.Z)({},n),{},{extra_group_id:{label:null===n||void 0===n||null===(e=n.group)||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:null===n||void 0===n||null===(i=n.group)||void 0===i?void 0:i.id},value:n.value});switch(n.group.type){case"color":U(n.value);break;case"image":E((0,m.Z)(n.value))}k.setFieldsValue(l)}C&&k.setFieldsValue({extra_group_id:{value:C}})}),[n,C]);function q(e,n){switch(e){case"color":return n.hex;case"text":return n;case"image":return n.name;default:return""}}function B(){return(B=(0,i.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={perPage:10,active:1,search:n},console.log("search => ",t),e.abrupt("return",j.Z.getAllGroups(t).then((function(e){var n;return null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.map((function(e){var n;return{value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e||null===(n=e.translation)||void 0===n?void 0:n.title,key:null===e||void 0===e?void 0:e.id}}))})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,b.jsx)(c.Z,{title:null!==n&&void 0!==n&&n.id?_("edit.extra"):_("add.extra"),visible:!!n,onCancel:t,footer:[(0,b.jsx)(d.Z,{type:"primary",onClick:function(){return k.submit()},loading:I,children:_("save")}),(0,b.jsx)(d.Z,{type:"default",onClick:t,children:_("cancel")})],children:(0,b.jsxs)(o.Z,{name:"extra-form",layout:"vertical",form:k,onFinish:function(e){var i;console.log(e);var r={extra_group_id:null===e||void 0===e||null===(i=e.extra_group_id)||void 0===i?void 0:i.value,value:q(A,e.value)};null!==n&&void 0!==n&&n.id?function(e,n){H(!0),j.Z.updateValue(e,n).then((function(){x.Am.success(_("successfully.updated")),t(),V((0,g.is)())})).finally((function(){return H(!1)}))}(n.id,r):function(e){H(!0),j.Z.createValue(e).then((function(){x.Am.success(_("successfully.created")),t(),V((0,g.is)()),a&&a()})).finally((function(){return H(!1)}))}(r)},children:[(0,b.jsx)(o.Z.Item,{name:"extra_group_id",label:_("extra.group"),hidden:!!C,rules:[{required:!0,message:""}],children:(0,b.jsx)(y.h,{fetchOptions:function(e){return B.apply(this,arguments)}})}),(0,b.jsx)(o.Z.Item,{name:"value",label:_("value"),rules:[{required:!0,message:""}],children:function(e){switch(e){case"color":return(0,b.jsx)(f.xS,{onChangeComplete:function(e){return U(e.hex)},color:R,disableAlpha:!0});case"text":return(0,b.jsx)(s.Z,{placeholder:_("enter.extra.value")});case"image":return(0,b.jsx)(Z.Z,{type:"extras",image:$,setImage:E,form:k,name:"value"});default:return""}}(A)})]})})}},99809:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var i=t(4942),r=t(93433),l=t(1413),a=t(29439),u=t(47313),o=t(45705),s=t(26824),c=t(59491),d=t(77181),v=t(78508),f=t(12019),h=t(47515),p=t(55768),x=t(23560),Z=t(24511),m=t(2717),g=t(34319),j=t(22307),y=t(84963),b=t(9274),C=t(46417);function w(e){var n=e.id,t=e.loading,i=e.handleClose,r=e.text,l=e.click,a=(0,Z.$)().t;return(0,C.jsxs)(b.Z,{closable:!1,visible:!!n,footer:null,centered:!0,children:[(0,C.jsx)("p",{children:r}),(0,C.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,C.jsx)(c.Z,{type:"primary",className:"mr-2",onClick:l,loading:t,children:a("yes")}),(0,C.jsx)(c.Z,{onClick:i,children:a("no")})]})]})}var k=t(55940),_=t(97421),V=t(90954),z=t(53233),S=t(80314);function I(){var e,n,t,b=(0,Z.$)().t,I=(0,m.I0)(),H=(0,m.v9)((function(e){return e.menu}),m.wU).activeMenu,O=(0,m.v9)((function(e){return e.extraValue}),m.wU),N=O.extraValues,A=O.loading,M=O.meta,F=(0,u.useState)(null),P=(0,a.Z)(F,2),$=P[0],E=P[1],T=(0,u.useState)(null),G=(0,a.Z)(T,2),R=G[0],U=G[1],q=(0,u.useState)(!1),B=(0,a.Z)(q,2),D=B[0],K=B[1],J=(0,u.useState)([{title:b("id"),dataIndex:"id",key:"id",is_show:!0},{title:b("title"),dataIndex:"extra_group_id",key:"extra_group_id",is_show:!0,render:function(e,n){var t,i;return null===(t=n.group)||void 0===t||null===(i=t.translation)||void 0===i?void 0:i.title}},{title:b("created.by"),dataIndex:"shop",key:"shop",is_show:!0,render:function(e,n){var t;return null!==n&&void 0!==n&&null!==(t=n.group)&&void 0!==t&&t.shop?b("you"):b("admin")}},{title:b("value"),dataIndex:"value",key:"value",is_show:!0,render:function(e,n){return(0,C.jsxs)(o.Z,{className:"extras",children:["color"===n.group.type?(0,C.jsx)("div",{className:"extra-color-wrapper-contain",style:{backgroundColor:n.value}}):null,"image"===n.group.type?(0,C.jsx)(s.Z,{width:100,src:_.bV+n.value,className:"borderRadius"}):null,"image"===n.group.type?null:(0,C.jsx)("span",{children:n.value})]})}},{title:b("options"),is_show:!0,render:function(e){var n,t;return(0,C.jsxs)(o.Z,{children:[(0,C.jsx)(c.Z,{type:"primary",icon:(0,C.jsx)(f.Z,{}),onClick:function(){return U(e)},disabled:!(null!==e&&void 0!==e&&null!==(n=e.group)&&void 0!==n&&n.shop_id)}),(0,C.jsx)(k.Z,{type:"primary",danger:!0,icon:(0,C.jsx)(h.Z,{}),onClick:function(){return E([e.id])},disabled:!(null!==e&&void 0!==e&&null!==(t=e.group)&&void 0!==t&&t.shop_id)})]})}}]),L=(0,a.Z)(J,2),Q=L[0],W=L[1],X=null===H||void 0===H?void 0:H.data,Y={perPage:null===X||void 0===X?void 0:X.perPage,page:null===X||void 0===X?void 0:X.page};return(0,S.Z)((function(){I((0,g.is)(Y))}),[null===H||void 0===H?void 0:H.data]),(0,u.useEffect)((function(){H.refetch&&(I((0,g.is)()),I((0,V.A_)(H)))}),[H.refetch]),(0,C.jsxs)(d.Z,{title:b("extra.value"),extra:(0,C.jsxs)(o.Z,{wrap:!0,children:[(0,C.jsx)(c.Z,{type:"primary",icon:(0,C.jsx)(p.Z,{}),onClick:function(){return U({})},children:b("add.extra")}),(0,C.jsx)(z.Z,{columns:Q,setColumns:W})]}),children:[(0,C.jsx)(v.Z,{scroll:{x:!0},loading:A,columns:null===Q||void 0===Q?void 0:Q.filter((function(e){return e.is_show})),dataSource:N,rowKey:function(e){return e.id},pagination:{pageSize:Y.perPage,page:(null===(e=H.data)||void 0===e?void 0:e.page)||1,total:M.total,defaultCurrent:null===(n=H.data)||void 0===n?void 0:n.page,current:null===(t=H.data)||void 0===t?void 0:t.page},onChange:function(e,n,t){var i=e.pageSize,r=e.current,a=t.field;I((0,V.nc)({activeMenu:H,data:(0,l.Z)((0,l.Z)({},H.data),{},{perPage:i,page:r,column:a})}))}}),R&&(0,C.jsx)(y.Z,{modal:R,handleCancel:function(){return U(null)}}),$&&(0,C.jsx)(w,{id:$,click:function(){K(!0);var e=(0,l.Z)({},Object.assign.apply(Object,[{}].concat((0,r.Z)($.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));j.Z.deleteValue(e).then((function(){x.Am.success(b("successfully.deleted")),E(null),I((0,g.is)())})).finally((function(){return K(!1)}))},text:b("delete.extra"),loading:D,handleClose:function(){return E(null)}})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(1413),r=t(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},a=t(17469),u=function(e,n){return r.createElement(a.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:l}))};u.displayName="PlusCircleOutlined";var o=r.forwardRef(u)},99587:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(1413),r=t(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},a=t(17469),u=function(e,n){return r.createElement(a.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:l}))};u.displayName="TableOutlined";var o=r.forwardRef(u)}}]);