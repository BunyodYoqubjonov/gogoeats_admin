"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1215],{53233:function(e,n,t){var l=t(1413),i=t(29439),a=t(47313),r=t(56140),o=t(67251),s=t(45705),d=t(86345),u=t(78267),c=t(37388),h=t(59491),v=t(99587),m=t(24511),p=t(46417),f=r.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,r=e.setColumns,Z=e.style,x=e.size,g=void 0===x?"":x,j=e.iconOnly,b=(0,m.$)().t,I=(0,a.useState)(!1),w=(0,i.Z)(I,2),y=w[0],C=w[1],_=(0,p.jsx)(o.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,p.jsx)(o.Z.Item,{children:(0,p.jsxs)(s.Z,{className:"d-flex justify-content-between",children:[(0,p.jsx)(f,{children:e.title}),(0,p.jsx)(d.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));r(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,p.jsx)(u.Z,{overlay:_,trigger:["click"],onVisibleChange:function(e){C(e)},visible:y,children:(0,p.jsx)(c.Z,{title:b("change.columns"),children:(0,p.jsx)(h.Z,{style:(0,l.Z)({},Z),size:g,icon:(0,p.jsx)(v.Z,{}),children:j?null:b("Columns")})})})}},13945:function(e,n,t){function l(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return l}})},84017:function(e,n,t){function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$";if(!e)return"0";var t=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return n+" "+t}t.d(n,{Z:function(){return l}})},41215:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var l=t(1413),i=t(29439),a=t(47313),r=t(31741),o=t(73591),s=t(45705),d=t(59491),u=t(77181),c=t(78508),h=t(2717),v=t(84304),m=t(13945),p=t(90954),f=t(80314),Z=t(9274),x=t(68197),g=t(59624),j=t(83371),b=t(26824),I=t(58328),w=t(24511),y=t(51282),C=t(84017),_=t(85711),z=t(46417);function V(e){var n,t,l,r=e.uuid,o=e.handleCancel,s=(0,a.useState)({}),u=(0,i.Z)(s,2),c=u[0],v=u[1],m=(0,a.useState)(!1),p=(0,i.Z)(m,2),f=p[0],V=p[1],k=(0,w.$)().t,H=(0,h.v9)((function(e){return e.currency}),h.wU).defaultCurrency;return(0,a.useEffect)((function(){!function(e){V(!0),I.Z.getById(e).then((function(e){return v(e.data)})).finally((function(){return V(!1)}))}(r)}),[r]),(0,z.jsx)(Z.Z,{visible:!!r,title:k("user"),onCancel:o,footer:[(0,z.jsx)(d.Z,{type:"default",onClick:o,children:k("cancel")})],className:c.shop?"large-modal":"",children:f?(0,z.jsx)(y.Z,{}):(0,z.jsxs)(x.Z,{gutter:24,children:[(0,z.jsx)(g.Z,{span:c.shop?12:24,children:(0,z.jsxs)(j.Z,{bordered:!0,children:[(0,z.jsx)(j.Z.Item,{span:3,label:k("avatar"),children:(0,z.jsx)(b.Z,{src:(0,_.Z)(c.img),alt:c.firstname,width:80,className:"rounded"})}),(0,z.jsx)(j.Z.Item,{span:3,label:k("user.id"),children:c.id}),(0,z.jsxs)(j.Z.Item,{span:3,label:k("name"),children:[c.firstname," ",c.lastname||""]}),(0,z.jsx)(j.Z.Item,{span:3,label:k("gender"),children:c.gender}),(0,z.jsx)(j.Z.Item,{span:3,label:k("birthday"),children:c.birthday}),(0,z.jsx)(j.Z.Item,{span:3,label:k("email"),children:c.email}),(0,z.jsx)(j.Z.Item,{span:3,label:k("phone"),children:c.phone}),(0,z.jsx)(j.Z.Item,{span:3,label:k("role"),children:c.role}),(0,z.jsx)(j.Z.Item,{span:3,label:k("wallet"),children:(0,C.Z)(null===(n=c.wallet)||void 0===n?void 0:n.price,null===H||void 0===H?void 0:H.symbol)})]})}),c.shop?(0,z.jsx)(g.Z,{span:12,children:(0,z.jsxs)(j.Z,{bordered:!0,children:[(0,z.jsx)(j.Z.Item,{span:3,label:k("shop.id"),children:c.shop.id}),(0,z.jsx)(j.Z.Item,{span:3,label:k("shop.name"),children:null===(t=c.shop.translation)||void 0===t?void 0:t.title}),(0,z.jsx)(j.Z.Item,{span:3,label:k("shop.logo"),children:(0,z.jsx)("img",{src:(0,_.Z)(c.shop.logo_img),alt:null===(l=c.shop.translation)||void 0===l?void 0:l.title,width:100,className:"rounded"})}),(0,z.jsx)(j.Z.Item,{span:3,label:k("shop.phone"),children:c.shop.phone}),(0,z.jsxs)(j.Z.Item,{span:3,label:k("shop.open_close.time"),children:[c.shop.open_time," - ",c.shop.close_time]}),(0,z.jsx)(j.Z.Item,{span:3,label:k("delivery.range"),children:c.shop.delivery_range})]})}):""]})})}var k=t(53233),H=o.Z.TabPane,S=["moderator","cook","waiter","deliveryman","user"];function P(){var e,n=(0,w.$)().t,t=(0,h.I0)(),Z=(0,h.v9)((function(e){return e.menu}),h.wU).activeMenu,x=(0,h.v9)((function(e){return e.user}),h.wU),g=x.users,j=x.loading,b=x.meta,I=x.params,y=(0,a.useState)(null),C=(0,i.Z)(y,2),_=C[0],P=C[1],N=(0,a.useState)([{title:n("id"),dataIndex:"id",sorter:!0,is_show:!0},{title:n("firstname"),dataIndex:"firstname",is_show:!0},{title:n("lastname"),dataIndex:"lastname",is_show:!0},{title:n("email"),dataIndex:"email",is_show:!0},{title:n("role"),dataIndex:"role",is_show:!0},{title:n("options"),dataIndex:"options",is_show:!0,render:function(e,n){return(0,z.jsx)(s.Z,{children:(0,z.jsx)(d.Z,{icon:(0,z.jsx)(r.Z,{}),onClick:function(){return P(n.uuid)}})})}}]),M=(0,i.Z)(N,2),$=M[0],E=M[1];(0,a.useEffect)((function(){if(Z.refetch){var e=Z.data,n={sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,role:(null===e||void 0===e?void 0:e.role)||"moderator",perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};t((0,v.pc)(n)),t((0,p.A_)(Z))}}),[Z.refetch]),(0,f.Z)((function(){var e=Z.data,n={sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,role:null===e||void 0===e?void 0:e.role,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};t((0,v.pc)(n))}),[Z.data]);return(0,z.jsxs)(u.Z,{title:n("shop.users"),extra:(0,z.jsx)(k.Z,{columns:$,setColumns:E}),children:[(0,z.jsx)(o.Z,{activeKey:(null===(e=Z.data)||void 0===e?void 0:e.role)||"moderator",onChange:function(e){t((0,p.nc)({activeMenu:Z,data:(0,l.Z)((0,l.Z)({},Z.data),{},{role:e})}))},type:"card",children:S.map((function(e){return(0,z.jsx)(H,{tab:n(e)},e)}))}),(0,z.jsx)(c.Z,{scroll:{x:!0},columns:null===$||void 0===$?void 0:$.filter((function(e){return e.is_show})),dataSource:g,loading:j,pagination:{pageSize:I.perPage,page:I.page,total:b.total,defaultCurrent:I.page},rowKey:function(e){return e.id},onChange:function(e,n,i){var a=e.pageSize,r=e.current,o=i.field,s=i.order,d=(0,m.Z)(s);t((0,p.nc)({activeMenu:Z,data:(0,l.Z)((0,l.Z)({},Z.data),{},{perPage:a,page:r,column:o,sort:d})}))}}),_&&(0,z.jsx)(V,{uuid:_,handleCancel:function(){return P(null)}})]})}},99587:function(e,n,t){t.d(n,{Z:function(){return s}});var l=t(1413),i=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},r=t(17469),o=function(e,n){return i.createElement(r.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:n,icon:a}))};o.displayName="TableOutlined";var s=i.forwardRef(o)}}]);