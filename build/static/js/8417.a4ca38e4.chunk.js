"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8417],{55940:function(e,t,n){n.d(t,{Z:function(){return f}});var i=n(1413),l=n(45987),c=(n(47313),n(59491)),r=n(47515),o=n(23560),a=n(24511),s=n(79492),d=n(46417),u=["size","onClick","type"];function f(e){var t=e.size,n=void 0===t?"":t,f=e.onClick,h=e.type,v=void 0===h?"default":h,p=(0,l.Z)(e,u),Z=(0,a.$)().t,m=(0,s.Z)().isDemo;return(0,d.jsx)(c.Z,(0,i.Z)({size:n,icon:(0,d.jsx)(r.Z,{}),onClick:function(e){m?o.Am.warning(Z("cannot.work.demo")):f(e)},type:v},p))}},53233:function(e,t,n){var i=n(1413),l=n(29439),c=n(47313),r=n(56140),o=n(67251),a=n(45705),s=n(86345),d=n(78267),u=n(37388),f=n(59491),h=n(99587),v=n(24511),p=n(46417),Z=r.Z.Text;t.Z=function(e){var t=e.columns,n=void 0===t?[]:t,r=e.setColumns,m=e.style,x=e.size,g=void 0===x?"":x,j=e.iconOnly,y=(0,v.$)().t,b=(0,c.useState)(!1),w=(0,l.Z)(b,2),k=w[0],_=w[1],C=(0,p.jsx)(o.Z,{children:null===n||void 0===n?void 0:n.map((function(e,t){return(0,p.jsx)(o.Z.Item,{children:(0,p.jsxs)(a.Z,{className:"d-flex justify-content-between",children:[(0,p.jsx)(Z,{children:e.title}),(0,p.jsx)(s.Z,{defaultChecked:!0,onClick:function(){return function(e){var t=null===n||void 0===n?void 0:n.map((function(t){return t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t}));r(t)}(e)},disabled:1===t})]})},e+t)}))});return(0,p.jsx)(d.Z,{overlay:C,trigger:["click"],onVisibleChange:function(e){_(e)},visible:k,children:(0,p.jsx)(u.Z,{title:y("change.columns"),children:(0,p.jsx)(f.Z,{style:(0,i.Z)({},m),size:g,icon:(0,p.jsx)(h.Z,{}),children:j?null:y("Columns")})})})}},48008:function(e,t,n){n(47313);var i=n(9274),l=n(87569),c=n(59491),r=n(24511),o=n(46417);t.Z=function(e){var t=e.open,n=e.handleCancel,a=e.text,s=e.click,d=e.loading,u=e.subTitle,f=(0,r.$)().t;return(0,o.jsxs)(i.Z,{closable:!1,visible:t,footer:null,centered:!0,children:[(0,o.jsx)(l.ZP,{status:"warning",title:a,subTitle:u}),(0,o.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,o.jsx)(c.Z,{type:"primary",className:"mr-2",onClick:s,loading:d,children:f("yes")}),(0,o.jsx)(c.Z,{onClick:function(){return n()},children:f("no")})]})]})}},13945:function(e,t,n){function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{Z:function(){return i}})},84017:function(e,t,n){function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$";if(!e)return"0";var n=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return t+" "+n}n.d(t,{Z:function(){return i}})},28417:function(e,t,n){n.r(t);var i=n(4942),l=n(93433),c=n(1413),r=n(29439),o=n(47313),a=n(12019),s=n(47515),d=n(55768),u=n(73591),f=n(45705),h=n(26824),v=n(56140),p=n(59491),Z=n(77181),m=n(78508),x=n(23560),g=n(69658),j=n(74580),y=n(2717),b=n(97890),w=n(90954),k=n(24511),_=n(55940),C=n(53233),z=n(80314),V=n(13945),T=n(84017),N=n(64441),H=n(97421),I=n(12545),S=n(26672),A=n(48008),M=n(46417),O=["published","deleted_at"],P=u.Z.TabPane;t.default=function(){var e,t=(0,k.$)().t,n=(0,y.I0)(),$=(0,b.s0)(),E=(0,o.useContext)(j._).setIsModalVisible,K=(0,o.useState)(null),L=(0,r.Z)(K,2),R=L[0],U=L[1],B=(0,o.useState)(!1),F=(0,r.Z)(B,2),D=F[0],q=F[1],G=(0,o.useState)(null),J=(0,r.Z)(G,2),Q=J[0],W=J[1],X=(0,o.useState)(null),Y=(0,r.Z)(X,2),ee=Y[0],te=Y[1],ne=(0,y.v9)((function(e){return e.menu}),y.wU).activeMenu,ie=(0,o.useState)("published"),le=(0,r.Z)(ie,2),ce=le[0],re=le[1],oe=(null===(e=ne.data)||void 0===e?void 0:e.role)||ce,ae=null===ne||void 0===ne?void 0:ne.data,se=(0,y.v9)((function(e){return e.currency}),y.wU).defaultCurrency,de={sort:null===ae||void 0===ae?void 0:ae.sort,column:null===ae||void 0===ae?void 0:ae.column,search:null!==ae&&void 0!==ae&&ae.search?ae.search:void 0,perPage:null===ae||void 0===ae?void 0:ae.perPage,page:null===ae||void 0===ae?void 0:ae.page,deleted_at:"deleted_at"===(null===ae||void 0===ae?void 0:ae.role)?null===ae||void 0===ae?void 0:ae.role:null},ue=(0,y.v9)((function(e){return e.reciept}),y.wU),fe=ue.recepts,he=ue.meta,ve=ue.loading,pe=(0,o.useState)([{title:t("id"),dataIndex:"id",key:"id",is_show:!0,sorter:!0},{title:t("title"),dataIndex:"title",key:"title",render:function(e,t){var n;return null===(n=t.translation)||void 0===n?void 0:n.title},is_show:!0},{title:t("shop/restaurant"),dataIndex:"shop",key:"shop",is_show:!0,render:function(e,i){var l,c;return(0,M.jsxs)(f.Z,{children:[(0,M.jsx)(h.Z,{width:100,src:i.deleted_at?"https://fakeimg.pl/640x360":H.bV+i.bg_img,alt:null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title,preview:!0,placeholder:!0,className:"rounded"}),(0,M.jsx)(v.Z.Text,{className:"text-hover",onClick:function(){return function(e){n((0,w.bL)({id:"edit-shop",url:"shop/".concat(e.uuid),name:t("edit.shop")})),$("/shop/".concat(e.uuid))}(e)},children:null===e||void 0===e||null===(c=e.translation)||void 0===c?void 0:c.title})]})}},{title:t("image"),dataIndex:"img",key:"img",is_show:!0,render:function(e,t){return(0,M.jsx)(h.Z,{width:100,src:t.deleted_at?"https://fakeimg.pl/640x360":H.bV+e,preview:!0,placeholder:!0,className:"rounded"})}},{title:t("recipe.category"),dataIndex:"category",key:"category",is_show:!0,render:function(e){var t;return null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title}},{title:t("discount"),dataIndex:"discount",key:"discount",is_show:!0,render:function(e,t){return"fix"===t.discount_type?(0,T.Z)(t.discount_price,se.symbol):"".concat(t.discount_price," %")}},{title:t("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,i){return(0,M.jsxs)(f.Z,{children:[(0,M.jsx)(p.Z,{type:"primary",icon:(0,M.jsx)(a.Z,{}),onClick:function(){return function(e){n((0,w.bL)({url:"recept/edit/".concat(e.id),id:"recepe_edit",name:t("edit.recepe")})),$("/recept/edit/".concat(e.id),{state:"edit"})}(i)},disabled:i.deleted_at}),(0,M.jsx)(_.Z,{disabled:i.deleted_at,icon:(0,M.jsx)(s.Z,{}),onClick:function(){U([i.id]),E(!0),W(!0)}})]})}}]),Ze=(0,r.Z)(pe,2),me=Ze[0],xe=Ze[1];(0,z.Z)((function(){n((0,N.Tc)(de))}),[ne.data]),(0,o.useEffect)((function(){ne.refetch&&(n((0,N.Tc)(de)),n((0,w.A_)(ne)))}),[ne.refetch]);var ge={selectedRowKeys:R,onChange:function(e){U(e)}};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(Z.Z,{className:"p-0",children:(0,M.jsxs)(f.Z,{wrap:!0,className:"justify-content-end w-100",children:["deleted_at"!==oe&&(0,M.jsx)(_.Z,{size:"",onClick:function(){null===R||0===R.length?x.Am.warning(t("select.the.product")):(E(!0),W(!1))},children:t("delete.selected")}),(0,M.jsx)(p.Z,{type:"primary",icon:(0,M.jsx)(d.Z,{}),onClick:function(){n((0,w.bL)({id:"recepe_add",url:"recept/add",name:t("add.recepe")})),$("/recept/add")},children:t("add.recepe")}),"deleted_at"!==oe?(0,M.jsx)(_.Z,{size:"",onClick:function(){return te({delete:!0})},children:t("delete.all")}):(0,M.jsx)(_.Z,{icon:(0,M.jsx)(S.uOc,{className:"mr-2"}),onClick:function(){return te({restore:!0})},children:t("restore.all")}),(0,M.jsx)(C.Z,{columns:me,setColumns:xe})]})}),(0,M.jsxs)(Z.Z,{title:t("recepes"),children:[(0,M.jsx)(u.Z,{className:"mt-3",activeKey:oe,onChange:function(e){!function(e){var t=ne.data;n((0,w.nc)({activeMenu:ne,data:(0,c.Z)((0,c.Z)({},t),e)}))}({role:e,page:1}),re(e)},type:"card",children:O.map((function(e){return(0,M.jsx)(P,{tab:t(e)},e)}))}),(0,M.jsx)(m.Z,{scroll:{x:!0},rowSelection:ge,columns:null===me||void 0===me?void 0:me.filter((function(e){return e.is_show})),dataSource:fe,pagination:{pageSize:he.per_page,page:he.current_page,total:he.total},rowKey:function(e){return e.id},onChange:function(e,t,i){var l=e.pageSize,r=e.current,o=i.field,a=i.order,s=(0,V.Z)(a);n((0,w.nc)({activeMenu:ne,data:(0,c.Z)((0,c.Z)({},ae),{},{perPage:l,page:r,column:o,sort:s})}))},loading:ve})]}),(0,M.jsx)(g.Z,{click:function(){q(!0);var e=(0,c.Z)({},Object.assign.apply(Object,[{}].concat((0,l.Z)(R.map((function(e,t){return(0,i.Z)({},"ids[".concat(t,"]"),e)}))))));I.Z.delete(e).then((function(){x.Am.success(t("successfully.deleted")),n((0,N.Tc)(de)),E(!1),W(null)})).finally((function(){U(null),q(!1)}))},text:t(Q?"delete":"all.delete"),setText:U,loading:D}),ee&&(0,M.jsx)(A.Z,{open:ee,handleCancel:function(){return te(null)},click:ee.restore?function(){q(!0),I.Z.restoreAll().then((function(){x.Am.success(t("successfully.deleted")),n((0,N.Tc)(de)),te(null)})).finally((function(){return q(!1)}))}:function(){q(!0),I.Z.dropAll().then((function(){x.Am.success(t("successfully.deleted")),n((0,N.Tc)()),te(null)})).finally((function(){U(null),q(!1)}))},text:ee.restore?t("restore.modal.text"):t("read.carefully"),subTitle:ee.restore?"":t("confirm.deletion"),loading:D,setText:U})]})}},55768:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(1413),l=n(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},r=n(17469),o=function(e,t){return l.createElement(r.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:c}))};o.displayName="PlusCircleOutlined";var a=l.forwardRef(o)},99587:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(1413),l=n(47313),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},r=n(17469),o=function(e,t){return l.createElement(r.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:c}))};o.displayName="TableOutlined";var a=l.forwardRef(o)}}]);