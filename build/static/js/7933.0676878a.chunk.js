"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7933],{55940:function(n,e,t){t.d(e,{Z:function(){return v}});var i=t(1413),a=t(45987),s=(t(47313),t(59491)),o=t(47515),r=t(23560),l=t(24511),c=t(79492),d=t(46417),u=["size","onClick","type"];function v(n){var e=n.size,t=void 0===e?"":e,v=n.onClick,h=n.type,f=void 0===h?"default":h,Z=(0,a.Z)(n,u),p=(0,l.$)().t,x=(0,c.Z)().isDemo;return(0,d.jsx)(s.Z,(0,i.Z)({size:t,icon:(0,d.jsx)(o.Z,{}),onClick:function(n){x?r.Am.warning(p("cannot.work.demo")):v(n)},type:f},Z))}},53233:function(n,e,t){var i=t(1413),a=t(29439),s=t(47313),o=t(56140),r=t(67251),l=t(45705),c=t(86345),d=t(78267),u=t(37388),v=t(59491),h=t(99587),f=t(24511),Z=t(46417),p=o.Z.Text;e.Z=function(n){var e=n.columns,t=void 0===e?[]:e,o=n.setColumns,x=n.style,m=n.size,j=void 0===m?"":m,g=n.iconOnly,_=(0,f.$)().t,y=(0,s.useState)(!1),w=(0,a.Z)(y,2),b=w[0],C=w[1],k=(0,Z.jsx)(r.Z,{children:null===t||void 0===t?void 0:t.map((function(n,e){return(0,Z.jsx)(r.Z.Item,{children:(0,Z.jsxs)(l.Z,{className:"d-flex justify-content-between",children:[(0,Z.jsx)(p,{children:n.title}),(0,Z.jsx)(c.Z,{defaultChecked:!0,onClick:function(){return function(n){var e=null===t||void 0===t?void 0:t.map((function(e){return e.dataIndex===n.dataIndex&&(e.is_show=!(null!==e&&void 0!==e&&e.is_show)),e}));o(e)}(n)},disabled:1===e})]})},n+e)}))});return(0,Z.jsx)(d.Z,{overlay:k,trigger:["click"],onVisibleChange:function(n){C(n)},visible:b,children:(0,Z.jsx)(u.Z,{title:_("change.columns"),children:(0,Z.jsx)(v.Z,{style:(0,i.Z)({},x),size:j,icon:(0,Z.jsx)(h.Z,{}),children:g?null:_("Columns")})})})}},13945:function(n,e,t){function i(n){switch(n){case"ascend":return"asc";case"descend":return"desc"}}t.d(e,{Z:function(){return i}})},77933:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var i=t(4942),a=t(93433),s=t(1413),o=t(29439),r=t(47313),l=t(66204),c=t(59491),d=t(45705),u=t(77181),v=t(78508),h=t(12019),f=t(47515),Z=t(2717),p=t(69915),x=t(74580),m=t(24511),j=t(23560),g=t(53233),_=t(90954),y=t(80314),w=t(55940),b=t(97890),C=t(69658),k=t(10976),z=t(9274),I=t(68197),S=t(59624),V=t(74294),A=t(82747),H=t(46417),M=["new","approved","canceled"];function R(n){var e=n.data,t=n.handleCancel,i=n.paramsData,a=(0,Z.v9)((function(n){return n.menu}),Z.wU).activeMenu,l=k.Z.useForm(),d=(0,o.Z)(l,1)[0],u=(0,Z.I0)(),v=(0,m.$)().t,h=(0,r.useState)(null),f=(0,o.Z)(h,2),x=f[0],g=f[1],y=(0,r.useState)(!1),w=(0,o.Z)(y,2),b=w[0],C=w[1],R=(0,r.useState)(!1),D=(0,o.Z)(R,2),F=D[0],O=D[1];(0,r.useEffect)((function(){O(!0),A.Z.getById(null===e||void 0===e?void 0:e.id).then((function(n){var e=n.data,t={ads_package_id:null===e||void 0===e?void 0:e.ads_package_id,banner_id:null===e||void 0===e?void 0:e.banner_id,active:null===e||void 0===e?void 0:e.active,position_page:null===e||void 0===e?void 0:e.position_page};g(t)})).catch((function(n){return j.Am.error(n.message)})).finally((function(){return O(!1)}))}),[null===e||void 0===e?void 0:e.id]);return(0,H.jsx)(z.Z,{visible:!!e,title:e.title,onCancel:t,footer:[(0,H.jsx)(c.Z,{type:"primary",onClick:function(){return d.submit()},loading:b,children:v("save")}),(0,H.jsx)(c.Z,{type:"default",onClick:t,children:v("cancel")})],children:(0,H.jsx)(k.Z,{form:d,layout:"vertical",onFinish:function(n){C(!0);var o=(0,s.Z)({},n);console.log("shopAdData => ",x),!F&&A.Z.update(e.id,(0,s.Z)((0,s.Z)({},x),{},{status:null===o||void 0===o?void 0:o.status})).then((function(){t(),u((0,p.R)(i)),u((0,_.A_)(a))})).finally((function(){return C(!1)}))},initialValues:{status:e.status},children:(0,H.jsx)(I.Z,{gutter:12,children:(0,H.jsx)(S.Z,{span:24,children:(0,H.jsx)(k.Z.Item,{label:v("status"),name:"status",rules:[{required:!0,message:v("required")}],children:(0,H.jsx)(V.Z,{children:M.map((function(n){return(0,H.jsx)(V.Z.Option,{children:v(n)},n)}))})})})})})})}var D=t(13945),F=t(70816),O=t.n(F);function Y(){var n=(0,m.$)().t,e=(0,Z.I0)(),t=(0,b.s0)(),k=(0,Z.v9)((function(n){return n.menu}),Z.wU).activeMenu,z=(0,Z.v9)((function(n){return n.shopAds}),Z.wU),I=z.shopAdsList,S=z.loading,V=z.meta,M=(0,r.useContext)(x._).setIsModalVisible,F=(0,r.useState)(null),Y=(0,o.Z)(F,2),$=Y[0],E=Y[1],L=(0,r.useState)(null),N=(0,o.Z)(L,2),P=N[0],T=N[1],U=(0,r.useState)(null),q=(0,o.Z)(U,2),B=q[0],K=q[1],G=(0,r.useState)(!1),J=(0,o.Z)(G,2),Q=J[0],W=J[1],X=(0,r.useState)(null),nn=(0,o.Z)(X,2),en=nn[0],tn=nn[1],an=k.data,sn={search:null===an||void 0===an?void 0:an.serach,perPage:null===an||void 0===an?void 0:an.perPage,page:null===an||void 0===an?void 0:an.page,sort:null===an||void 0===an?void 0:an.sort};(0,r.useEffect)((function(){k.refetch&&(e((0,p.R)(sn)),e((0,_.A_)(k)))}),[k.refetch]),(0,y.Z)((function(){e((0,p.R)(sn))}),[k.data]);var on=function(){e((0,_.bL)({id:"transactions",url:"transactions",name:n("transactions")})),t("/transactions")},rn={selectedRowKeys:$,onChange:function(n){E(n)}},ln=(0,r.useState)([{title:n("id"),dataIndex:"id",is_show:!0,sorter:function(n,e){return n.id-e.id}},{title:n("shop"),dataIndex:"title",is_show:!0,render:function(n,e){var t,i;return(0,H.jsx)("span",{children:null===e||void 0===e||null===(t=e.shop)||void 0===t||null===(i=t.translation)||void 0===i?void 0:i.title})}},{title:n("expire.at"),dataIndex:"expire_at",is_show:!0,render:function(e,t){return(0,H.jsx)(H.Fragment,{children:null!==t&&void 0!==t&&t.expired_at?O()(null===t||void 0===t?void 0:t.expired_at).format("YYYY-MM-DD HH:mm"):(0,H.jsx)("span",{children:n("not.expired")})})}},{title:n("status"),is_show:!0,dataIndex:"status",key:"status",render:function(e,t){return(0,H.jsxs)("div",{children:["new"===e?(0,H.jsx)(l.Z,{color:"blue",children:n(e)}):"canceled"===e?(0,H.jsx)(l.Z,{color:"error",children:n(e)}):(0,H.jsx)(l.Z,{color:"cyan",children:n(e)}),t.deleted_at?"":(0,H.jsx)(h.Z,{onClick:function(){return tn(t)}})]})}},{title:n("transaction"),dataIndex:"transaction",is_show:!0,render:function(e,t){var i;return(0,H.jsx)(H.Fragment,{children:e?(0,H.jsx)(c.Z,{onClick:on,color:"cyan",children:null===t||void 0===t||null===(i=t.transaction)||void 0===i?void 0:i.status}):(0,H.jsx)(c.Z,{color:"error",children:n("not.paid")})})}},{title:n("options"),dataIndex:"options",is_show:!0,render:function(i,a){return(0,H.jsxs)(d.Z,{children:[(0,H.jsx)(c.Z,{type:"primary",icon:(0,H.jsx)(h.Z,{}),onClick:function(){return function(i){e((0,_.bL)({id:"shop-ads",url:"shop-ads/".concat(i.id),name:n("edit.shop.ads")})),t("/shop-ads/".concat(i.id))}(a)},disabled:a.deleted_at}),(0,H.jsx)(w.Z,{icon:(0,H.jsx)(f.Z,{}),onClick:function(){M(!0),E([a.id]),T(!0),K(!1)},disabled:a.deleted_at})]})}}]),cn=(0,o.Z)(ln,2),dn=cn[0],un=cn[1];return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(u.Z,{className:"p-0",children:(0,H.jsxs)(d.Z,{wrap:!0,size:[14,20],children:[(0,H.jsx)(w.Z,{size:"",onClick:function(){null===$||0===$.length?j.Am.warning(n("select.the.product")):(M(!0),T(!1))},children:n("delete.selected")}),(0,H.jsx)(g.Z,{columns:dn,setColumns:un})]})}),(0,H.jsx)(u.Z,{children:(0,H.jsx)(v.Z,{scroll:{x:!0},dataSource:I,columns:null===dn||void 0===dn?void 0:dn.filter((function(n){return null===n||void 0===n?void 0:n.is_show})),rowSelection:rn,rowKey:function(n){return n.id},loading:Q||S,pagination:{pageSize:V.per_page,page:V.current_page,total:V.total},onChange:function(n,t,i){var a=n.pageSize,o=n.current,r=i.field,l=i.order,c=(0,D.Z)(l);e((0,_.nc)({activeMenu:k,data:(0,s.Z)((0,s.Z)({},k.data),{},{perPage:a,page:o,column:r,sort:c})}))}})}),en&&(0,H.jsx)(R,{data:en,handleCancel:function(){return tn(null)},paramsData:sn}),(0,H.jsx)(C.Z,{click:B?function(){W(!0),A.Z.setActive($).then((function(){M(!1),e((0,p.R)(sn)),j.Am.success(n("successfully.updated")),K(!1)})).finally((function(){return W(!1)}))}:function(){W(!0);var t=(0,s.Z)({},Object.assign.apply(Object,[{}].concat((0,a.Z)($.map((function(n,e){return(0,i.Z)({},"ids[".concat(e,"]"),n)}))))));A.Z.delete(t).then((function(){M(!1),j.Am.success(n("successfully.deleted")),e((0,p.R)(sn)),T(null),K(!1)})).finally((function(){W(!1),E(null)}))},text:n(B?"set.active.advert":P?"delete":"all.delete"),setText:E,setActive:K})]})}},99587:function(n,e,t){t.d(e,{Z:function(){return l}});var i=t(1413),a=t(47313),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},o=t(17469),r=function(n,e){return a.createElement(o.Z,(0,i.Z)((0,i.Z)({},n),{},{ref:e,icon:s}))};r.displayName="TableOutlined";var l=a.forwardRef(r)}}]);