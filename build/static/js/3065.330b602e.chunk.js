"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3065],{55940:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(1413),i=n(45987),o=(n(47313),n(59491)),r=n(47515),l=n(23560),d=n(24511),s=n(79492),c=n(46417),u=["size","onClick","type"];function v(e){var t=e.size,n=void 0===t?"":t,v=e.onClick,f=e.type,h=void 0===f?"default":f,p=(0,i.Z)(e,u),Z=(0,d.$)().t,m=(0,s.Z)().isDemo;return(0,c.jsx)(o.Z,(0,a.Z)({size:n,icon:(0,c.jsx)(r.Z,{}),onClick:function(e){m?l.Am.warning(Z("cannot.work.demo")):v(e)},type:h},p))}},53233:function(e,t,n){var a=n(1413),i=n(29439),o=n(47313),r=n(56140),l=n(67251),d=n(45705),s=n(86345),c=n(78267),u=n(37388),v=n(59491),f=n(99587),h=n(24511),p=n(46417),Z=r.Z.Text;t.Z=function(e){var t=e.columns,n=void 0===t?[]:t,r=e.setColumns,m=e.style,x=e.size,g=void 0===x?"":x,j=e.iconOnly,b=(0,h.$)().t,y=(0,o.useState)(!1),w=(0,i.Z)(y,2),_=w[0],C=w[1],k=(0,p.jsx)(l.Z,{children:null===n||void 0===n?void 0:n.map((function(e,t){return(0,p.jsx)(l.Z.Item,{children:(0,p.jsxs)(d.Z,{className:"d-flex justify-content-between",children:[(0,p.jsx)(Z,{children:e.title}),(0,p.jsx)(s.Z,{defaultChecked:!0,onClick:function(){return function(e){var t=null===n||void 0===n?void 0:n.map((function(t){return t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t}));r(t)}(e)},disabled:1===t})]})},e+t)}))});return(0,p.jsx)(c.Z,{overlay:k,trigger:["click"],onVisibleChange:function(e){C(e)},visible:_,children:(0,p.jsx)(u.Z,{title:b("change.columns"),children:(0,p.jsx)(v.Z,{style:(0,a.Z)({},m),size:g,icon:(0,p.jsx)(f.Z,{}),children:j?null:b("Columns")})})})}},51988:function(e,t,n){n.d(t,{Z:function(){return s}});n(47313);var a=n(24511),i=n(66188),o=n.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",r=n.p+"static/media/noresult.ac4af107751f94856a9c.riv",l=n.p+"static/media/nosell.32cb2c2cc548a15c820d.riv",d=n(46417);var s=function(e){var t=e.id,n=void 0===t?"noresult":t,s=e.text,c=void 0===s?"":s,u=(0,a.$)().t,v={src:{noproductsfound:o,noresult:r,nosell:l}[n],artboard:"New Artboard",autoplay:!0},f=(0,i.useRive)(v).RiveComponent;return(0,d.jsxs)("div",{className:"animation-canvas",children:[(0,d.jsx)("div",{style:{width:"100%",height:200},children:(0,d.jsx)(f,{})}),(0,d.jsx)("div",{className:"text",children:u(c)})]})}},41481:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(1413),i=n(29439),o=n(45987),r=n(47313),l=n(66672),d=n(16031),s=n(40765),c=n(46417),u=["handleChange","defaultValue","resetSearch"];function v(e){var t=e.handleChange,n=e.defaultValue,v=e.resetSearch,f=(0,o.Z)(e,u),h=(0,r.useState)(n),p=(0,i.Z)(h,2),Z=p[0],m=p[1],x=(0,r.useMemo)((function(){return(0,d.debounce)((function(e){t(e)}),800)}),[t]);return(0,r.useEffect)((function(){m(n)}),[v,n]),(0,c.jsx)(l.Z,(0,a.Z)({value:Z,onChange:function(e){m(e.target.value),x(e.target.value)},prefix:(0,c.jsx)(s.Z,{})},f))}},89281:function(e,t,n){n.d(t,{h:function(){return f}});var a=n(1413),i=n(29439),o=n(45987),r=n(47313),l=n(12279),d=n.n(l),s=n(74294),c=n(72652),u=n(46417),v=["fetchOptions","debounceTimeout","onClear"],f=function(e){var t=e.fetchOptions,n=e.debounceTimeout,l=void 0===n?400:n,f=e.onClear,h=(0,o.Z)(e,v),p=(0,r.useState)(!1),Z=(0,i.Z)(p,2),m=Z[0],x=Z[1],g=(0,r.useState)([]),j=(0,i.Z)(g,2),b=j[0],y=j[1],w=(0,r.useMemo)((function(){return d()((function(e){y([]),x(!0),t(e).then((function(e){y(e),x(!1)}))}),l)}),[t,l]);return(0,u.jsx)(s.Z,(0,a.Z)((0,a.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:w,onClear:function(){w(""),f&&f()},notFoundContent:m?(0,u.jsx)(c.Z,{size:"small"}):"no results"},h),{},{options:b,onFocus:function(){w("")}}))}},13945:function(e,t,n){function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{Z:function(){return a}})},11101:function(e,t,n){var a=n(34344),i={getAll:function(e){return a.Z.get("rest/brands/paginate",{params:e})},getById:function(e,t){return a.Z.get("rest/brands/".concat(e),{params:t})}};t.Z=i},29955:function(e,t,n){var a=n(34344),i={getAll:function(e){return a.Z.get("dashboard/seller/categories/paginate",{params:e})},getById:function(e,t){return a.Z.get("dashboard/seller/categories/".concat(e),{params:t})},search:function(e){return a.Z.get("dashboard/seller/categories/search",{params:e})},paginateSelect:function(e){return a.Z.get("dashboard/seller/categories/select-paginate",{params:e})}};t.Z=i},33454:function(e,t,n){n.r(t),n.d(t,{default:function(){return ne}});var a=n(73591),i=n(24511),o=n(97890),r=n(15861),l=n(4942),d=n(93433),s=n(1413),c=n(29439),u=n(87757),v=n.n(u),f=n(47313),h=n(54757),p=n(12019),Z=n(66407),m=n(47515),x=n(55768),g=n(26824),j=n(66204),b=n(45705),y=n(86345),w=n(59491),_=n(77181),C=n(78508),k=n(9274),S=n(23560),I=n(97421),z=n(74580),M=n(69658),N=n(2717),V=n(90954),A=n(18333),P=n(95882),O=n(13945),T=n(80314),H=n(41481),q=n(89281),W=n(11101),R=n(29955),U=n(55940),K=n(53233),$=n(3925),F=n(51988),L=n(46417),E=a.Z.TabPane,B=["blue","red","gold","volcano","cyan","lime"],D=["all","published","pending","unpublished","deleted_at"],Q=function(){var e,t,n,u,Q,G,J,X,Y,ee,te=(0,i.$)().t,ne=(0,N.I0)(),ae=(0,o.s0)(),ie=(0,f.useState)(null),oe=(0,c.Z)(ie,2),re=oe[0],le=oe[1],de=(0,f.useState)("all"),se=(0,c.Z)(de,2),ce=se[0],ue=se[1],ve=(0,f.useState)(null),fe=(0,c.Z)(ve,2),he=fe[0],pe=fe[1],Ze=(0,f.useState)(!1),me=(0,c.Z)(Ze,2),xe=me[0],ge=me[1],je=(0,f.useState)(""),be=(0,c.Z)(je,2),ye=be[0],we=be[1],_e=function(){ne((0,V.nc)({activeMenu:Ke,data:null}))},Ce=(0,f.useState)([{title:te("id"),dataIndex:"id",is_show:!0,sorter:function(e,t){return e.id-t.id}},{title:te("image"),dataIndex:"img",is_show:!0,render:function(e,t){return(0,L.jsx)(g.Z,{width:100,src:t.deleted_at?"https://fakeimg.pl/640x360":I.bV+e,placeholder:!0,style:{borderRadius:4}})}},{title:te("name"),dataIndex:"name",is_show:!0},{title:te("status"),is_show:!0,dataIndex:"status",key:"status",render:function(e){return(0,L.jsx)("div",{children:"pending"===e?(0,L.jsx)(j.Z,{color:"blue",children:te(e)}):"unpublished"===e?(0,L.jsx)(j.Z,{color:"error",children:te(e)}):(0,L.jsx)(j.Z,{color:"cyan",children:te(e)})})}},{title:te("translations"),dataIndex:"locales",is_show:!0,render:function(e,t){var n;return(0,L.jsx)(b.Z,{children:null===(n=t.locales)||void 0===n?void 0:n.map((function(e,t){return(0,L.jsx)(j.Z,{className:"text-uppercase",color:[B[t]],children:e})}))})}},{title:te("shop"),dataIndex:"shop_id",is_show:!0,render:function(e,t){var n,a;return null===t||void 0===t||null===(n=t.shop)||void 0===n||null===(a=n.translation)||void 0===a?void 0:a.title}},{title:te("category"),dataIndex:"category_name",is_show:!0},{title:te("active"),dataIndex:"active",is_show:!0,render:function(e,t){return(0,L.jsx)(y.Z,{onChange:function(){ze(!0),pe(t.uuid),le(!0)},disabled:t.deleted_at,checked:e})}},{title:te("options"),dataIndex:"options",is_show:!0,render:function(e,t){return(0,L.jsxs)(b.Z,{children:["unpublished"===(null===t||void 0===t?void 0:t.status)&&(null===t||void 0===t?void 0:t.status_note)&&(0,L.jsx)(w.Z,{icon:(0,L.jsx)(h.Z,{}),onClick:function(){console.log(t),ge(!0),we(t.status_note)}}),(0,L.jsx)(w.Z,{type:"primary",icon:(0,L.jsx)(p.Z,{}),onClick:function(){return function(e){ne((0,V.bL)({id:"product-edit",url:"seller/product/".concat(e.uuid),name:te("edit.food")})),_e(),ae("/seller/product/".concat(e.uuid))}(t)},disabled:t.deleted_at}),(0,L.jsx)(w.Z,{icon:(0,L.jsx)(Z.Z,{}),onClick:function(){return function(e){ne((0,V.bL)({id:"product-clone",url:"seller/product-clone/".concat(e.uuid),name:te("clone.product")})),_e(),ae("/seller/product-clone/".concat(e.uuid))}(t)},disabled:t.deleted_at}),(0,L.jsx)(U.Z,{icon:(0,L.jsx)(m.Z,{}),onClick:function(){ze(!0),pe([t.id]),Ue(!0),le(!1)},disabled:t.deleted_at})]})}}]),ke=(0,c.Z)(Ce,2),Se=ke[0],Ie=ke[1],ze=(0,f.useContext)(z._).setIsModalVisible,Me=(0,f.useState)(!1),Ne=(0,c.Z)(Me,2),Ve=Ne[0],Ae=Ne[1],Pe=(0,f.useState)(!1),Oe=(0,c.Z)(Pe,2),Te=Oe[0],He=Oe[1],qe=(0,f.useState)(null),We=(0,c.Z)(qe,2),Re=We[0],Ue=We[1],Ke=(0,N.v9)((function(e){return e.menu}),N.wU).activeMenu,$e=(0,N.v9)((function(e){return e.product}),N.wU),Fe=$e.products,Le=$e.meta,Ee=$e.loading,Be=$e.params,De=(0,N.v9)((function(e){return e.myShop}),N.wU).myShop,Qe=(null===(e=Ke.data)||void 0===e?void 0:e.role)||ce,Ge=Ke.data,Je={search:null===Ge||void 0===Ge?void 0:Ge.search,brand_id:null===Ge||void 0===Ge||null===(t=Ge.brand)||void 0===t?void 0:t.value,category_id:null===Ge||void 0===Ge||null===(n=Ge.category)||void 0===n?void 0:n.value,status:"deleted_at"===Qe||"all"===Qe?void 0:Qe,deleted_at:"deleted_at"===Qe?Qe:void 0,sort:null===Ge||void 0===Ge?void 0:Ge.sort,column:null===Ge||void 0===Ge?void 0:Ge.column,perPage:null===Ge||void 0===Ge?void 0:Ge.perPage,page:null===Ge||void 0===Ge?void 0:Ge.page};(0,T.Z)((function(){ne((0,P.MW)(Je))}),[Ke.data]),(0,f.useEffect)((function(){Ke.refetch&&(ne((0,P.MW)(Je)),ne((0,V.A_)(Ke)))}),[Ke.refetch]);function Xe(){return Xe=(0,r.Z)(v().mark((function e(t){var n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={shop_id:null===De||void 0===De?void 0:De.id,search:t},e.abrupt("return",W.Z.getAll(n).then((function(e){return e.data.map((function(e){return{label:e.title,value:e.id}}))})));case 2:case"end":return e.stop()}}),e)}))),Xe.apply(this,arguments)}function Ye(){return Ye=(0,r.Z)(v().mark((function e(t){var n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={search:0===t.length?null:t,type:"main",perPage:5},e.abrupt("return",R.Z.search(n).then((function(e){return e.data.map((function(e){var t;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))})));case 2:case"end":return e.stop()}}),e)}))),Ye.apply(this,arguments)}var et=function(e){var t=Ke.data;ne((0,V.nc)({activeMenu:Ke,data:(0,s.Z)((0,s.Z)({},t),e)}))},tt={selectedRowKeys:he,onChange:function(e){pe(e)}};return console.log("activeMenu => ",Ke.data),(0,L.jsxs)(f.Fragment,{children:[(0,L.jsx)(_.Z,{className:"p-0",title:te("food"),extra:(0,L.jsxs)(b.Z,{wrap:!0,children:[(0,L.jsx)(q.h,{placeholder:te("select.category"),fetchOptions:function(e){return Ye.apply(this,arguments)},style:{minWidth:150},onChange:function(e){return et({category:e})},value:null===(u=Ke.data)||void 0===u?void 0:u.category}),(0,L.jsx)(q.h,{placeholder:te("select.brand"),fetchOptions:function(e){return Xe.apply(this,arguments)},style:{minWidth:150},onChange:function(e){return et({brand:e})},value:null===(Q=Ke.data)||void 0===Q?void 0:Q.brand}),(0,L.jsx)(w.Z,{icon:(0,L.jsx)(x.Z,{}),type:"primary",onClick:function(){ne((0,V.bL)({id:"product-add",url:"seller/product/add",name:te("add.food")})),_e(),ae("/seller/product/add")},children:te("add.food")}),(0,L.jsx)(K.Z,{columns:Se,setColumns:Ie})]}),children:(0,L.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,L.jsx)(H.Z,{placeholder:te("search"),handleChange:function(e){return et({search:e})},defaultValue:null===(G=Ke.data)||void 0===G?void 0:G.search,resetSearch:!(null!==(J=Ke.data)&&void 0!==J&&J.search),className:"w-25"}),(0,L.jsxs)(b.Z,{wrap:!0,children:[(0,L.jsxs)(w.Z,{onClick:function(){ne((0,V.bL)({id:"seller-product-import",url:"seller/product/import",name:te("food.import")})),ae("/seller/product/import")},children:[(0,L.jsx)($.o5r,{className:"mr-2"}),te("import")]}),(0,L.jsxs)(w.Z,{loading:Te,onClick:function(){var e,t,n,a;He(!0);var i={shop_id:null===De||void 0===De?void 0:De.id,category_id:null===Ke||void 0===Ke||null===(e=Ke.data)||void 0===e||null===(t=e.category)||void 0===t?void 0:t.value,brand_id:null===Ke||void 0===Ke||null===(n=Ke.data)||void 0===n||null===(a=n.brand)||void 0===a?void 0:a.value};A.Z.export(i).then((function(e){var t=I.S0+e.data.file_name;window.location.href=t})).finally((function(){return He(!1)}))},children:[(0,L.jsx)($.bwQ,{className:"mr-2"}),te("export")]}),(0,L.jsx)(U.Z,{size:"",onClick:function(){null===he||0===he.length?S.Am.warning(te("select.the.product")):(ze(!0),Ue(!1))},children:te("delete.selected")})]})]})}),(0,L.jsxs)(_.Z,{children:[(0,L.jsx)(a.Z,{className:"mt-3",activeKey:Qe,onChange:function(e){et({role:e,page:1}),ue(e)},type:"card",children:D.map((function(e){return(0,L.jsx)(E,{tab:te(e)},e)}))}),(0,L.jsx)(C.Z,{locale:{emptyText:(0,L.jsx)(F.Z,{})},scroll:{x:!0},rowSelection:tt,loading:Ee,columns:null===Se||void 0===Se?void 0:Se.filter((function(e){return e.is_show})),dataSource:Fe,pagination:{pageSize:Be.perPage,page:(null===(X=Ke.data)||void 0===X?void 0:X.page)||1,total:Le.total,defaultCurrent:null===(Y=Ke.data)||void 0===Y?void 0:Y.page,current:null===(ee=Ke.data)||void 0===ee?void 0:ee.page},onChange:function(e,t,n){var a=e.pageSize,i=e.current,o=n.field,r=n.order,l=(0,O.Z)(r);ne((0,V.nc)({activeMenu:Ke,data:(0,s.Z)((0,s.Z)({},Ke.data),{},{perPage:a,page:i,column:o,sort:l})}))},rowKey:function(e){return e.id}})]}),(0,L.jsx)(M.Z,{click:re?function(){Ae(!0),A.Z.setActive(he).then((function(){ze(!1),ne((0,P.MW)(Je)),S.Am.success(te("successfully.updated")),le(!0)})).finally((function(){return Ae(!1)}))}:function(){Ae(!0);var e=(0,s.Z)({},Object.assign.apply(Object,[{}].concat((0,d.Z)(he.map((function(e,t){return(0,l.Z)({},"ids[".concat(t,"]"),e)}))))));A.Z.delete(e).then((function(){ze(!1),S.Am.success(te("successfully.deleted")),ne((0,P.MW)(e))})).finally((function(){return Ae(!1)}))},text:te(re?"set.active.food":Re?"delete":"all.delete"),loading:Ve,setText:pe,setActive:le}),(0,L.jsxs)(k.Z,{title:"Reject message",closable:!1,visible:xe,footer:null,centered:!0,children:[(0,L.jsx)("p",{children:ye}),(0,L.jsx)("div",{className:"d-flex justify-content-end",children:(0,L.jsx)(w.Z,{type:"primary",className:"mr-2",onClick:function(){return ge(!1)},children:"Close"})})]})]})},G=n(45464),J=n(71810),X=n(4901),Y=n(81218),ee={type:"product"};function te(e){var t,n,a,r=e.parentId,u=(0,i.$)().t,v=(0,f.useContext)(z._).setIsModalVisible,Z=(0,f.useState)(!1),x=(0,c.Z)(Z,2),y=x[0],I=x[1],A=(0,f.useState)(!1),P=(0,c.Z)(A,2),H=P[0],q=P[1],W=(0,f.useState)(""),R=(0,c.Z)(W,2),U=R[0],$=R[1],F=(0,f.useState)(null),E=(0,c.Z)(F,2),B=E[0],D=E[1],Q=(0,N.I0)(),te=(0,o.s0)(),ne=(0,N.v9)((function(e){return e.menu}),N.wU).activeMenu,ae=(0,N.v9)((function(e){return e.requestModels}),N.wU),ie=ae.data,oe=ae.meta,re=ae.loading,le=ae.params,de=ne.data,se=(0,o.UO)().uuid,ce={search:null===de||void 0===de?void 0:de.search,sort:null===de||void 0===de?void 0:de.sort,column:null===de||void 0===de?void 0:de.column,perPage:null===de||void 0===de?void 0:de.perPage,page:null===de||void 0===de?void 0:de.page,parent_id:r,type:"product"},ue=(0,f.useState)([{title:u("name"),dataIndex:"name",key:"name",is_show:!0,render:function(e,t){var n,a,i;return(0,L.jsxs)(b.Z,{children:[null===(n=t.model)||void 0===n?void 0:n.translation.title," ",(0,L.jsx)(X.WFu,{})," ",t.data["title[".concat(null===(a=t.model)||void 0===a||null===(i=a.translation)||void 0===i?void 0:i.locale,"]")]]})}},{title:u("image"),dataIndex:"img",key:"img",is_show:!0,render:function(e,t){var n,a,i,o;return(0,L.jsxs)(b.Z,{children:[(0,L.jsx)(g.Z,{src:(0,G.Z)(null===(n=t.model)||void 0===n?void 0:n.img),alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0}),(0,L.jsx)(X.WFu,{}),(0,L.jsx)(g.Z,{src:(0,G.Z)((null===(a=t.data.images)||void 0===a||null===(i=a.at(0))||void 0===i?void 0:i.url)||(null===(o=t.data.images)||void 0===o?void 0:o.at(0))),alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0})]})}},{title:u("status"),is_show:!0,dataIndex:"status",key:"status",render:function(e,t){return(0,L.jsx)("div",{children:"pending"===e?(0,L.jsx)(j.Z,{color:"blue",children:u(e)}):"canceled"===e?(0,L.jsx)(j.Z,{color:"error",children:u(e)}):(0,L.jsx)(j.Z,{color:"cyan",children:u(e)})})}},{title:u("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,t){return(0,L.jsxs)(b.Z,{children:["canceled"===(null===t||void 0===t?void 0:t.status)&&(null===t||void 0===t?void 0:t.status_note)&&(0,L.jsx)(w.Z,{icon:(0,L.jsx)(h.Z,{}),onClick:function(){q(!0),$(t.status_note)}}),(0,L.jsx)(w.Z,{icon:(0,L.jsx)(p.Z,{}),onClick:function(){return function(e){Q((0,V.bL)({url:"seller/product-request/".concat(e.id),id:"product_request_edit",name:u("product.request.edit")})),te("/seller/product-request/".concat(e.id),{state:{parentId:r,parentUuid:se}})}(t)}}),(0,L.jsx)(w.Z,{danger:!0,icon:(0,L.jsx)(m.Z,{}),type:"primary",onClick:function(){D([t.id]),v(!0)}})]})}}]),ve=(0,c.Z)(ue,2),fe=ve[0],he=ve[1];(0,f.useEffect)((function(){Q((0,J._7)(ce)),Q((0,V.A_)(ne))}),[ne.refetch]),(0,T.Z)((function(){Q((0,J._7)(ce))}),[ne.data]);var pe={selectedRowKeys:B,onChange:function(e){D(e)}};return(0,L.jsxs)(_.Z,{title:u("requests"),extra:(0,L.jsx)(b.Z,{wrap:!0,children:(0,L.jsx)(K.Z,{columns:fe,setColumns:he})}),children:[(0,L.jsx)(C.Z,{scroll:{x:!0},rowSelection:pe,columns:null===fe||void 0===fe?void 0:fe.filter((function(e){return e.is_show})),dataSource:ie,pagination:{pageSize:le.perPage,page:(null===(t=ne.data)||void 0===t?void 0:t.page)||1,total:oe.total,defaultCurrent:null===(n=ne.data)||void 0===n?void 0:n.page,current:null===(a=ne.data)||void 0===a?void 0:a.page},rowKey:function(e){return e.key},onChange:function(e,t,n){var a=e.pageSize,i=e.current,o=n.field,r=n.order,l=(0,O.Z)(r);Q((0,V.nc)({activeMenu:ne,data:(0,s.Z)((0,s.Z)({},ne.data),{},{perPage:a,page:i,column:o,sort:l})}))},loading:re}),(0,L.jsx)(M.Z,{click:function(){I(!0);var e=(0,s.Z)({},Object.assign.apply(Object,[{}].concat((0,d.Z)(B.map((function(e,t){return(0,l.Z)({},"ids[".concat(t,"]"),e)}))))));Y.Z.delete(e).then((function(){S.Am.success(u("successfully.deleted")),Q((0,J._7)(ee)),v(!1)})).finally((function(){return I(!1)}))},text:u("delete"),setText:D,loading:y}),(0,L.jsxs)(k.Z,{title:u("reject.message"),closable:!1,visible:H,footer:null,centered:!0,children:[(0,L.jsx)("p",{children:U}),(0,L.jsx)("div",{className:"d-flex justify-content-end",children:(0,L.jsx)(w.Z,{type:"primary",className:"mr-2",onClick:function(){return q(!1)},children:u("close")})})]})]})}function ne(){var e,t=(0,i.$)().t,n=(0,o.TH)();return(0,L.jsxs)(a.Z,{defaultActiveKey:(null===(e=n.state)||void 0===e?void 0:e.tab)||"list",destroyInactiveTabPane:!0,children:[(0,L.jsx)(a.Z.TabPane,{tab:t("product.list"),children:(0,L.jsx)(Q,{})},"list"),(0,L.jsx)(a.Z.TabPane,{tab:t("requests"),children:(0,L.jsx)(te,{})},"request")]})}},99587:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(1413),i=n(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},r=n(17469),l=function(e,t){return i.createElement(r.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:o}))};l.displayName="TableOutlined";var d=i.forwardRef(l)}}]);