"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3344],{55940:function(e,t,n){n.d(t,{Z:function(){return f}});var i=n(1413),a=n(45987),l=(n(47313),n(59491)),o=n(47515),c=n(23560),s=n(24511),r=n(79492),d=n(46417),u=["size","onClick","type"];function f(e){var t=e.size,n=void 0===t?"":t,f=e.onClick,h=e.type,v=void 0===h?"default":h,p=(0,a.Z)(e,u),Z=(0,s.$)().t,m=(0,r.Z)().isDemo;return(0,d.jsx)(l.Z,(0,i.Z)({size:n,icon:(0,d.jsx)(o.Z,{}),onClick:function(e){m?c.Am.warning(Z("cannot.work.demo")):f(e)},type:v},p))}},53233:function(e,t,n){var i=n(1413),a=n(29439),l=n(47313),o=n(56140),c=n(67251),s=n(45705),r=n(86345),d=n(78267),u=n(37388),f=n(59491),h=n(99587),v=n(24511),p=n(46417),Z=o.Z.Text;t.Z=function(e){var t=e.columns,n=void 0===t?[]:t,o=e.setColumns,m=e.style,g=e.size,x=void 0===g?"":g,j=e.iconOnly,y=(0,v.$)().t,b=(0,l.useState)(!1),k=(0,a.Z)(b,2),w=k[0],C=k[1],_=(0,p.jsx)(c.Z,{children:null===n||void 0===n?void 0:n.map((function(e,t){return(0,p.jsx)(c.Z.Item,{children:(0,p.jsxs)(s.Z,{className:"d-flex justify-content-between",children:[(0,p.jsx)(Z,{children:e.title}),(0,p.jsx)(r.Z,{defaultChecked:!0,onClick:function(){return function(e){var t=null===n||void 0===n?void 0:n.map((function(t){return t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t}));o(t)}(e)},disabled:1===t})]})},e+t)}))});return(0,p.jsx)(d.Z,{overlay:_,trigger:["click"],onVisibleChange:function(e){C(e)},visible:w,children:(0,p.jsx)(u.Z,{title:y("change.columns"),children:(0,p.jsx)(f.Z,{style:(0,i.Z)({},m),size:x,icon:(0,p.jsx)(h.Z,{}),children:j?null:y("Columns")})})})}},48008:function(e,t,n){n(47313);var i=n(9274),a=n(87569),l=n(59491),o=n(24511),c=n(46417);t.Z=function(e){var t=e.open,n=e.handleCancel,s=e.text,r=e.click,d=e.loading,u=e.subTitle,f=(0,o.$)().t;return(0,c.jsxs)(i.Z,{closable:!1,visible:t,footer:null,centered:!0,children:[(0,c.jsx)(a.ZP,{status:"warning",title:s,subTitle:u}),(0,c.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,c.jsx)(l.Z,{type:"primary",className:"mr-2",onClick:r,loading:d,children:f("yes")}),(0,c.jsx)(l.Z,{onClick:function(){return n()},children:f("no")})]})]})}},13945:function(e,t,n){function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{Z:function(){return i}})},13344:function(e,t,n){n.r(t);var i=n(4942),a=n(93433),l=n(1413),o=n(29439),c=n(47313),s=n(73591),r=n(45705),d=n(66204),u=n(26824),f=n(59491),h=n(77181),v=n(78508),p=n(97421),Z=n(97890),m=n(12019),g=n(66407),x=n(47515),j=n(55768),y=n(69658),b=n(74580),k=n(2717),w=n(90954),C=n(61197),_=n(60692),z=n(23560),S=n(24511),V=n(55940),H=n(53233),I=n(48008),M=n(26672),T=n(80314),N=n(70816),A=n.n(N),P=n(13945),O=n(46417),Y=["published","deleted_at"],$=s.Z.TabPane,D=["blue","red","gold","volcano","cyan","lime"];t.default=function(){var e,t,n,N=(0,S.$)().t,E=(0,k.I0)(),K=(0,Z.s0)(),L=(0,c.useState)(null),R=(0,o.Z)(L,2),B=R[0],U=R[1],q=(0,c.useContext)(b._).setIsModalVisible,F=(0,c.useState)(!1),G=(0,o.Z)(F,2),J=G[0],Q=G[1],W=(0,c.useState)("published"),X=(0,o.Z)(W,2),ee=X[0],te=X[1],ne=(0,k.v9)((function(e){return e.menu}),k.wU).activeMenu,ie=(0,k.v9)((function(e){return e.shopTag}),k.wU),ae=ie.shopTag,le=ie.meta,oe=ie.loading,ce=ie.params,se=(0,c.useState)(null),re=(0,o.Z)(se,2),de=re[0],ue=re[1],fe=ne.data,he=(null===fe||void 0===fe?void 0:fe.role)||ee,ve={sort:null===fe||void 0===fe?void 0:fe.sort,column:null===fe||void 0===fe?void 0:fe.column,perPage:null===fe||void 0===fe?void 0:fe.perPage,page:null===fe||void 0===fe?void 0:fe.page,status:"deleted_at"===he?null:he,deleted_at:"deleted_at"===he?he:null},pe=(0,c.useState)([{title:N("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:N("title"),dataIndex:"title",key:"title",is_show:!0,render:function(e,t){var n;return null===(n=t.translation)||void 0===n?void 0:n.title}},{title:N("translations"),dataIndex:"locales",is_show:!0,render:function(e,t){var n;return(0,O.jsx)(r.Z,{children:null===(n=t.locales)||void 0===n?void 0:n.map((function(e,t){return(0,O.jsx)(d.Z,{color:[D[t]],className:"text-uppercase",children:e})}))})}},{title:N("image"),dataIndex:"img",key:"img",is_show:!0,render:function(e,t){return(0,O.jsx)(u.Z,{src:t.deleted_at?"https://fakeimg.pl/640x360":p.bV+e,alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0})}},{title:N("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:function(e){return A()(e).format("YYYY-MM-DD")}},{title:N("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,t){return(0,O.jsxs)(r.Z,{children:[(0,O.jsx)(f.Z,{type:"primary",icon:(0,O.jsx)(m.Z,{}),onClick:function(){return xe(t)},disabled:t.deleted_at}),(0,O.jsx)(f.Z,{icon:(0,O.jsx)(g.Z,{}),onClick:function(){return je(t)},disabled:t.deleted_at}),(0,O.jsx)(V.Z,{disabled:t.deleted_at,icon:(0,O.jsx)(x.Z,{}),onClick:function(){q(!0),ue([t.id])}})]})}}]),Ze=(0,o.Z)(pe,2),me=Ze[0],ge=Ze[1],xe=function(e){E((0,w.bL)({url:"shop-tag/".concat(e.id),id:"shop_tag_edit",name:N("edit.shop.tag")})),K("/shop-tag/".concat(e.id))},je=function(e){E((0,w.bL)({url:"shop-tag/clone/".concat(e.id),id:"shop_tag_clone",name:N("clone.shop.tag")})),K("/shop-tag/clone/".concat(e.id))};(0,T.Z)((function(){E((0,_.S)(ve))}),[ne.data]),(0,c.useEffect)((function(){ne.refetch&&(E((0,_.S)(ve)),E((0,w.A_)(ne)))}),[ne.refetch]);var ye={selectedRowKeys:de,onChange:function(e){ue(e)}};return(0,O.jsxs)(h.Z,{title:N("shop.tags"),extra:(0,O.jsxs)(r.Z,{wrap:!0,children:[(0,O.jsx)(f.Z,{type:"primary",icon:(0,O.jsx)(j.Z,{}),onClick:function(){E((0,w.bL)({id:"shop-tag/add",url:"shop-tag/add",name:N("add.shop.tag")})),K("/shop-tag/add")},children:N("add.tag")}),"published"===he?(0,O.jsx)(V.Z,{size:"",onClick:function(){return U({delete:!0})},children:N("delete.all")}):(0,O.jsx)(V.Z,{size:"",icon:(0,O.jsx)(M.uOc,{className:"mr-2"}),onClick:function(){return U({restore:!0})},children:N("restore.all")}),"deleted_at"!==he&&(0,O.jsx)(V.Z,{size:"",onClick:function(){null===de||0===de.length?z.Am.warning(N("select.the.product")):q(!0)},children:N("delete.selected")}),(0,O.jsx)(H.Z,{setColumns:ge,columns:me})]}),children:[(0,O.jsx)(s.Z,{className:"mt-3",activeKey:he,onChange:function(e){!function(e){var t=ne.data;E((0,w.nc)({activeMenu:ne,data:(0,l.Z)((0,l.Z)({},t),e)}))}({role:e,page:1}),te(e)},type:"card",children:Y.map((function(e){return(0,O.jsx)($,{tab:N(e)},e)}))}),(0,O.jsx)(v.Z,{scroll:{x:!0},rowSelection:ye,columns:null===me||void 0===me?void 0:me.filter((function(e){return e.is_show})),dataSource:ae,pagination:{pageSize:ce.perPage,page:(null===(e=ne.data)||void 0===e?void 0:e.page)||1,total:le.total,defaultCurrent:null===(t=ne.data)||void 0===t?void 0:t.page,current:null===(n=ne.data)||void 0===n?void 0:n.page},rowKey:function(e){return e.id},loading:oe,onChange:function(e,t,n){var i=e.pageSize,a=e.current,o=n.field,c=n.order,s=(0,P.Z)(c);E((0,w.nc)({activeMenu:ne,data:(0,l.Z)((0,l.Z)({},ne.data),{},{perPage:i,page:a,column:o,sort:s})}))}}),(0,O.jsx)(y.Z,{click:function(){Q(!0);var e=(0,l.Z)({},Object.assign.apply(Object,[{}].concat((0,a.Z)(de.map((function(e,t){return(0,i.Z)({},"ids[".concat(t,"]"),e)}))))));C.Z.delete(e).then((function(){E((0,_.S)()),z.Am.success(N("successfully.deleted")),q(!1)})).finally((function(){Q(!1)}))},text:N("delete"),loading:J,setText:ue}),B&&(0,O.jsx)(I.Z,{open:B,handleCancel:function(){return U(null)},click:B.restore?function(){Q(!0),C.Z.restoreAll().then((function(){E((0,_.S)(ve)),z.Am.success(N("successfully.deleted"))})).finally((function(){U(null),Q(!1)}))}:function(){Q(!0),C.Z.dropAll().then((function(){E((0,_.S)()),z.Am.success(N("successfully.deleted"))})).finally((function(){U(null),Q(!1)}))},text:B.restore?N("restore.modal.text"):N("read.carefully"),subTitle:B.restore?"":N("confirm.deletion"),loading:J,setText:ue})]})}},55768:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(1413),a=n(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},o=n(17469),c=function(e,t){return a.createElement(o.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:l}))};c.displayName="PlusCircleOutlined";var s=a.forwardRef(c)},99587:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(1413),a=n(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},o=n(17469),c=function(e,t){return a.createElement(o.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:l}))};c.displayName="TableOutlined";var s=a.forwardRef(c)}}]);