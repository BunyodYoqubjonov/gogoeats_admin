"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6161],{48567:function(e,n,t){var l=t(1413),i=t(29439),a=t(10976),r=t(75649),o=t(68197),s=t(59624),c=t(59491),u=t(74294),d=(t(47313),t(24511)),h=t(2717),f=t(46417);n.Z=function(e){var n,t=e.handleClose,v=e.openDrower,Z=e.setMenuData,x=(0,d.$)().t,m=(0,h.v9)((function(e){return e.theme.theme}),h.wU).direction,p=(0,h.v9)((function(e){return e.formLang}),h.wU).languages,j=a.Z.useForm(),g=(0,i.Z)(j,1)[0],y=(0,h.I0)(),b=(0,h.v9)((function(e){return e.menu}),h.wU).activeMenu;return(0,f.jsx)(r.Z,{title:x("filter"),placement:"rtl"===m?"left":"right",closable:!0,onClose:t,visible:v,footer:(0,f.jsxs)(o.Z,{gutter:12,children:[(0,f.jsx)(s.Z,{span:12,children:(0,f.jsx)(c.Z,{className:"w-100",type:"primary",onClick:function(){return g.submit()},children:x("result")})}),(0,f.jsx)(s.Z,{span:12,children:(0,f.jsx)(c.Z,{className:"w-100",onClick:function(){return function(){var e=b.data;y(Z({activeMenu:b,data:(0,l.Z)((0,l.Z)({},e),{},{filter:void 0})})),t()}()},children:x("clear")})})]}),children:(0,f.jsxs)(a.Z,{form:g,name:"basic",layout:"vertical",onFinish:function(e){var n=b.data;y(Z({activeMenu:b,data:(0,l.Z)((0,l.Z)({},n),{},{filter:e})})),t()},initialValues:(0,l.Z)({},null===(n=b.data)||void 0===n?void 0:n.filter),children:[(0,f.jsx)(a.Z.Item,{label:x("language"),rules:[{required:!0,message:x("required")}],name:"equal",children:(0,f.jsxs)(u.Z,{children:[(0,f.jsx)(u.Z.Option,{value:"equal",children:x("equal")}),(0,f.jsx)(u.Z.Option,{value:"not_equal",children:x("not.equal")})]})}),(0,f.jsx)(a.Z.Item,{label:x("locale"),rules:[{required:!0,message:x("required")}],name:"lang",children:(0,f.jsx)(u.Z,{children:p.map((function(e,n){return(0,f.jsx)(u.Z.Option,{value:e.locale,children:e.title},e.locale+n)}))})})]})},"left")}},55940:function(e,n,t){t.d(n,{Z:function(){return h}});var l=t(1413),i=t(45987),a=(t(47313),t(59491)),r=t(47515),o=t(23560),s=t(24511),c=t(79492),u=t(46417),d=["size","onClick","type"];function h(e){var n=e.size,t=void 0===n?"":n,h=e.onClick,f=e.type,v=void 0===f?"default":f,Z=(0,i.Z)(e,d),x=(0,s.$)().t,m=(0,c.Z)().isDemo;return(0,u.jsx)(a.Z,(0,l.Z)({size:t,icon:(0,u.jsx)(r.Z,{}),onClick:function(e){m?o.Am.warning(x("cannot.work.demo")):h(e)},type:v},Z))}},53233:function(e,n,t){var l=t(1413),i=t(29439),a=t(47313),r=t(56140),o=t(67251),s=t(45705),c=t(86345),u=t(78267),d=t(37388),h=t(59491),f=t(99587),v=t(24511),Z=t(46417),x=r.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,r=e.setColumns,m=e.style,p=e.size,j=void 0===p?"":p,g=e.iconOnly,y=(0,v.$)().t,b=(0,a.useState)(!1),w=(0,i.Z)(b,2),C=w[0],k=w[1],_=(0,Z.jsx)(o.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,Z.jsx)(o.Z.Item,{children:(0,Z.jsxs)(s.Z,{className:"d-flex justify-content-between",children:[(0,Z.jsx)(x,{children:e.title}),(0,Z.jsx)(c.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));r(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,Z.jsx)(u.Z,{overlay:_,trigger:["click"],onVisibleChange:function(e){k(e)},visible:C,children:(0,Z.jsx)(d.Z,{title:y("change.columns"),children:(0,Z.jsx)(h.Z,{style:(0,l.Z)({},m),size:j,icon:(0,Z.jsx)(f.Z,{}),children:g?null:y("Columns")})})})}},48008:function(e,n,t){t(47313);var l=t(9274),i=t(87569),a=t(59491),r=t(24511),o=t(46417);n.Z=function(e){var n=e.open,t=e.handleCancel,s=e.text,c=e.click,u=e.loading,d=e.subTitle,h=(0,r.$)().t;return(0,o.jsxs)(l.Z,{closable:!1,visible:n,footer:null,centered:!0,children:[(0,o.jsx)(i.ZP,{status:"warning",title:s,subTitle:d}),(0,o.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,o.jsx)(a.Z,{type:"primary",className:"mr-2",onClick:c,loading:u,children:h("yes")}),(0,o.jsx)(a.Z,{onClick:function(){return t()},children:h("no")})]})]})}},41481:function(e,n,t){t.d(n,{Z:function(){return h}});var l=t(1413),i=t(29439),a=t(45987),r=t(47313),o=t(66672),s=t(16031),c=t(40765),u=t(46417),d=["handleChange","defaultValue","resetSearch"];function h(e){var n=e.handleChange,t=e.defaultValue,h=e.resetSearch,f=(0,a.Z)(e,d),v=(0,r.useState)(t),Z=(0,i.Z)(v,2),x=Z[0],m=Z[1],p=(0,r.useMemo)((function(){return(0,s.debounce)((function(e){n(e)}),800)}),[n]);return(0,r.useEffect)((function(){m(t)}),[h,t]),(0,u.jsx)(o.Z,(0,l.Z)({value:x,onChange:function(e){m(e.target.value),p(e.target.value)},prefix:(0,u.jsx)(c.Z,{})},f))}},13945:function(e,n,t){function l(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return l}})},56161:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var l=t(4942),i=t(93433),a=t(1413),r=t(29439),o=t(47313),s=t(12019),c=t(66407),u=t(47515),d=t(55768),h=t(73591),f=t(45705),v=t(66204),Z=t(26824),x=t(86345),m=t(59491),p=t(77181),j=t(78508),g=t(97890),y=t(23560),b=t(74580),w=t(69658),C=t(2717),k=t(90954),_=t(49067),N=t(44528),z=t(24511),V=t(10976),I=t(9274),S=t(68197),q=t(59624),M=t(74294),H=t(46417),O=["new","approved","rejected"];function A(e){var n=e.data,t=e.handleCancel,l=e.paramsData,i=(0,z.$)().t,s=(0,C.v9)((function(e){return e.menu}),C.wU).activeMenu,c=V.Z.useForm(),u=(0,r.Z)(c,1)[0],d=(0,C.I0)(),h=(0,o.useState)(!1),f=(0,r.Z)(h,2),v=f[0],Z=f[1];return(0,H.jsx)(I.Z,{visible:!!n,title:i(n.name),onCancel:t,footer:[(0,H.jsx)(m.Z,{type:"primary",onClick:function(){return u.submit()},loading:v,children:i("save")}),(0,H.jsx)(m.Z,{type:"default",onClick:t,children:i("cancel")})],children:(0,H.jsx)(V.Z,{form:u,layout:"vertical",onFinish:function(e){Z(!0);var i=(0,a.Z)({},e);_.Z.statusChange(n.uuid,i).then((function(){t(),d((0,N.N)(l)),d((0,k.A_)(s))})).finally((function(){return Z(!1)}))},initialValues:{status:n.status},children:(0,H.jsx)(S.Z,{gutter:12,children:(0,H.jsx)(q.Z,{span:24,children:(0,H.jsx)(V.Z.Item,{label:i("status"),name:"status",rules:[{required:!0,message:i("required")}],children:(0,H.jsx)(M.Z,{children:O.map((function(e,n){return(0,H.jsx)(M.Z.Option,{value:e,children:i(e)},e+n)}))})})})})})})}var T=t(55940),D=t(41481),P=t(80314),U=t(48567),$=t(6957),E=t(5958),F=t(53233),L=t(26672),K=t(48008),R=t(13945),B=h.Z.TabPane,G=["blue","red","gold","volcano","cyan","lime"],J=["all","new","approved","rejected","deleted_at"],Q=function(){var e,n,t,V,I,S,q,M,O,Q,W=(0,z.$)().t,X=(0,C.I0)(),Y=(0,g.s0)(),ee=(0,o.useState)(null),ne=(0,r.Z)(ee,2),te=ne[0],le=ne[1],ie=(0,C.v9)((function(e){return e.auth}),C.wU).user,ae=(0,o.useState)(!1),re=(0,r.Z)(ae,2),oe=re[0],se=re[1],ce=(0,o.useState)(null),ue=(0,r.Z)(ce,2),de=ue[0],he=ue[1],fe=(0,o.useState)(null),ve=(0,r.Z)(fe,2),Ze=ve[0],xe=ve[1],me=(0,o.useState)("all"),pe=(0,r.Z)(me,2),je=pe[0],ge=pe[1],ye=(0,C.v9)((function(e){return e.menu}),C.wU).activeMenu,be=(null===(e=ye.data)||void 0===e?void 0:e.role)||je,we=(0,o.useContext)(b._).setIsModalVisible,Ce=(0,o.useState)(null),ke=(0,r.Z)(Ce,2),_e=ke[0],Ne=ke[1],ze=(0,o.useState)(null),Ve=(0,r.Z)(ze,2),Ie=Ve[0],Se=Ve[1],qe=(0,o.useState)(!1),Me=(0,r.Z)(qe,2),He=Me[0],Oe=Me[1],Ae=(0,C.v9)((function(e){return e.shop}),C.wU),Te=Ae.shops,De=Ae.meta,Pe=Ae.loading,Ue=Ae.params,$e=(0,o.useState)([{title:W("id"),dataIndex:"id",is_show:!0,sorter:!0,key:"id"},{title:W("title"),dataIndex:"name",is_show:!0,key:"title"},{title:W("translations"),dataIndex:"locales",is_show:!0,key:"locales",render:function(e,n){var t;return(0,H.jsx)(f.Z,{children:null===(t=n.locales)||void 0===t?void 0:t.map((function(e,n){return(0,H.jsx)(v.Z,{className:"text-uppercase",color:[G[n]],children:e})}))})}},{title:W("logo"),dataIndex:"logo_img",is_show:!0,key:"logo",render:function(e,n){return(0,H.jsx)(Z.Z,{alt:"images background",className:"img rounded",src:n.deleted_at?"https://via.placeholder.com/150":e||"https://via.placeholder.com/150",effect:"blur",width:50,height:50,preview:!0,placeholder:!0})}},{title:W("background"),dataIndex:"back",is_show:!0,render:function(e,n){return(0,H.jsx)(Z.Z,{alt:"images background",className:"img rounded",src:n.deleted_at?"https://via.placeholder.com/150":e||"https://via.placeholder.com/150",effect:"blur",width:50,height:50,preview:!0,placeholder:!0})}},{title:W("seller"),dataIndex:"seller",is_show:!0,key:"seller"},{title:W("open.time"),dataIndex:"open",is_show:!0,key:"open.time",render:function(e,n){return n.open?(0,H.jsxs)(v.Z,{color:"blue",children:[" ",W("open")," "]}):(0,H.jsxs)(v.Z,{color:"red",children:[" ",W("closed")," "]})}},{title:W("tax"),is_show:!0,dataIndex:"tax",key:"tax",render:function(e){return"".concat(e," %")}},{title:W("verify"),dataIndex:"verify",is_show:!0,render:function(e,n){return(0,H.jsx)(x.Z,{onChange:function(){we(!0),Ne(n.uuid),Se(!0)},disabled:n.deleted_at,checked:e})}},{title:W("status"),dataIndex:"status",key:"status",is_show:!0,render:function(e,n){return(0,H.jsxs)("div",{children:["new"===e?(0,H.jsx)(v.Z,{color:"blue",children:W(e)}):"rejected"===e?(0,H.jsx)(v.Z,{color:"error",children:W(e)}):(0,H.jsx)(v.Z,{color:"cyan",children:W(e)}),!n.deleted_at&&(0,H.jsx)(s.Z,{onClick:function(){return le(n)}})]})}},{title:W("options"),dataIndex:"options",key:"options",is_show:!0,render:function(e,n){return(0,H.jsxs)(f.Z,{children:[(0,H.jsx)(m.Z,{type:"primary",icon:(0,H.jsx)(s.Z,{}),disabled:null===n||void 0===n?void 0:n.deleted_at,onClick:function(){return function(e){X((0,k.bL)({id:"edit-shop",url:"shop/".concat(e.uuid),name:W("edit.shop")})),Y("/shop/".concat(e.uuid),{state:"edit"})}(n)}}),(0,H.jsx)(m.Z,{icon:(0,H.jsx)(c.Z,{}),onClick:function(){return function(e){X((0,k.bL)({id:"shop-clone",url:"shop-clone/".concat(e.uuid),name:W("shop.clone")})),Y("/shop-clone/".concat(e.uuid),{state:"clone"})}(n)},disabled:n.deleted_at}),"manager"!==(null===ie||void 0===ie?void 0:ie.role)?(0,H.jsx)(T.Z,{disabled:n.deleted_at,icon:(0,H.jsx)(u.Z,{}),onClick:function(){Ne([n.id]),we(!0),he(!0),Se(!1)}}):""]})}}]),Ee=(0,r.Z)($e,2),Fe=Ee[0],Le=Ee[1],Ke=null===ye||void 0===ye?void 0:ye.data,Re={search:null===Ke||void 0===Ke?void 0:Ke.search,lang:"equal"===(null===Ke||void 0===Ke||null===(n=Ke.filter)||void 0===n?void 0:n.equal)?null===Ke||void 0===Ke||null===(t=Ke.filter)||void 0===t?void 0:t.lang:$.Z.language,not_lang:"not_equal"===(null===Ke||void 0===Ke||null===(V=Ke.filter)||void 0===V?void 0:V.equal)?null===Ke||void 0===Ke||null===(I=Ke.filter)||void 0===I?void 0:I.lang:null,status:"deleted_at"===be||"all"===be?void 0:be,deleted_at:"deleted_at"===be?be:void 0,page:null===Ke||void 0===Ke?void 0:Ke.page,perPage:null===Ke||void 0===Ke?void 0:Ke.perPage,sort:null===Ke||void 0===Ke?void 0:Ke.sort,column:null===Ke||void 0===Ke?void 0:Ke.column};(0,o.useEffect)((function(){ye.refetch&&(X((0,N.N)(Re)),X((0,k.A_)(ye)))}),[ye.refetch]),(0,P.Z)((function(){X((0,N.N)(Re))}),[Ke]);var Be=function(e){var n=ye.data;X((0,k.nc)({activeMenu:ye,data:(0,a.Z)((0,a.Z)({},n),e)}))},Ge={selectedRowKeys:_e,onChange:function(e){Ne(e)}};return(0,H.jsxs)(p.Z,{title:W("shops"),extra:(0,H.jsxs)(f.Z,{wrap:!0,children:["deleted_at"!==be?(0,H.jsxs)(f.Z,{wrap:!0,children:[(0,H.jsx)(m.Z,{icon:(0,H.jsx)(d.Z,{}),type:"primary",onClick:function(){X((0,k.bL)({id:"add-shop",url:"shop/add",name:W("add.shop")})),Y("/shop/add")},children:W("add.shop")}),(0,H.jsx)(T.Z,{size:"",onClick:function(){null===_e||0===_e.length?y.Am.warning(W("select.the.product")):(we(!0),he(!1))},children:W("delete.selected")}),(0,H.jsx)(T.Z,{size:"",onClick:function(){return xe({delete:!0})},children:W("delete.all")})]}):(0,H.jsx)(T.Z,{icon:(0,H.jsx)(L.uOc,{className:"mr-2"}),onClick:function(){return xe({restore:!0})},children:W("restore.all")}),(0,H.jsx)(m.Z,{className:"settings-button",onClick:function(){return se(!0)},children:(0,H.jsx)(E.Ol$,{className:"icon"})}),(0,H.jsx)(F.Z,{columns:Fe,setColumns:Le})]}),children:["deleted_at"!==be&&(0,H.jsx)("div",{className:"d-flex justify-content-between",children:(0,H.jsx)(D.Z,{placeholder:W("search"),handleChange:function(e){return Be({search:e})},defaultValue:null===(S=ye.data)||void 0===S?void 0:S.search,resetSearch:!(null!==(q=ye.data)&&void 0!==q&&q.search),className:"w-25"})}),(0,H.jsx)(h.Z,{className:"mt-3",activeKey:be,onChange:function(e){Be({role:e,page:1}),ge(e)},type:"card",children:J.map((function(e){return(0,H.jsx)(B,{tab:W(e)},e)}))}),(0,H.jsx)(j.Z,{scroll:{x:!0},rowSelection:Ge,columns:null===Fe||void 0===Fe?void 0:Fe.filter((function(e){return e.is_show})),dataSource:Te,loading:Pe,pagination:{pageSize:Ue.perPage,page:(null===(M=ye.data)||void 0===M?void 0:M.page)||1,total:De.total,defaultCurrent:null===(O=ye.data)||void 0===O?void 0:O.page,current:null===(Q=ye.data)||void 0===Q?void 0:Q.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var l=e.pageSize,i=e.current,r=t.field,o=t.order,s=(0,R.Z)(o);X((0,k.nc)({activeMenu:ye,data:(0,a.Z)((0,a.Z)({},ye.data),{},{perPage:l,page:i,column:r,sort:s})}))}}),te&&(0,H.jsx)(A,{data:te,handleCancel:function(){return le(null)},paramsData:Re}),(0,H.jsx)(w.Z,{click:Ie?function(){Oe(!0),_.Z.setVerify(_e).then((function(e){we(!1),y.Am.success(W("successfully.updated")),X((0,N.N)(Re)),Se(!1)})).finally((function(){Oe(!1),Ne(null)}))}:function(){Oe(!0);var e=(0,a.Z)({},Object.assign.apply(Object,[{}].concat((0,i.Z)(_e.map((function(e,n){return(0,l.Z)({},"ids[".concat(n,"]"),e)}))))));_.Z.delete(e).then((function(){y.Am.success(W("successfully.deleted")),we(!1),X((0,N.N)(Re)),he(null),Se(!1),Ne(null)})).finally((function(){return Oe(!1)}))},text:W(Ie?"set.verify.product":de?"delete":"all.delete"),loading:He,setText:Ne,setVerify:Se}),oe&&(0,H.jsx)(U.Z,{handleClose:function(){return se(!1)},openDrower:oe,setMenuData:k.nc}),Ze&&(0,H.jsx)(K.Z,{open:Ze,handleCancel:function(){return xe(null)},click:Ze.restore?function(){Oe(!0),_.Z.restoreAll().then((function(){y.Am.success(W("successfully.restored")),X((0,N.N)(Re)),xe(null)})).finally((function(){return Oe(!1)}))}:function(){Oe(!0),_.Z.dropAll().then((function(){y.Am.success(W("successfully.deleted")),X((0,N.N)()),xe(null)})).finally((function(){return Oe(!1)}))},text:Ze.restore?W("restore.modal.text"):W("read.carefully"),subTitle:Ze.restore?"":W("confirm.deletion"),loading:He,setText:Ne,setVerify:Se})]})}},55768:function(e,n,t){t.d(n,{Z:function(){return s}});var l=t(1413),i=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},r=t(17469),o=function(e,n){return i.createElement(r.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:n,icon:a}))};o.displayName="PlusCircleOutlined";var s=i.forwardRef(o)},99587:function(e,n,t){t.d(n,{Z:function(){return s}});var l=t(1413),i=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},r=t(17469),o=function(e,n){return i.createElement(r.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:n,icon:a}))};o.displayName="TableOutlined";var s=i.forwardRef(o)}}]);