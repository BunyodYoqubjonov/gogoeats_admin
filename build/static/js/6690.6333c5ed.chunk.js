(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6690],{55940:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var i=n(1413),r=n(45987),a=(n(47313),n(59491)),o=n(47515),l=n(23560),s=n(24511),d=n(79492),c=n(46417),u=["size","onClick","type"];function f(e){var t=e.size,n=void 0===t?"":t,f=e.onClick,v=e.type,h=void 0===v?"default":v,p=(0,r.Z)(e,u),m=(0,s.$)().t,Z=(0,d.Z)().isDemo;return(0,c.jsx)(a.Z,(0,i.Z)({size:n,icon:(0,c.jsx)(o.Z,{}),onClick:function(e){Z?l.Am.warning(m("cannot.work.demo")):f(e)},type:h},p))}},53233:function(e,t,n){"use strict";var i=n(1413),r=n(29439),a=n(47313),o=n(56140),l=n(67251),s=n(45705),d=n(86345),c=n(78267),u=n(37388),f=n(59491),v=n(99587),h=n(24511),p=n(46417),m=o.Z.Text;t.Z=function(e){var t=e.columns,n=void 0===t?[]:t,o=e.setColumns,Z=e.style,x=e.size,y=void 0===x?"":x,g=e.iconOnly,j=(0,h.$)().t,w=(0,a.useState)(!1),b=(0,r.Z)(w,2),_=b[0],k=b[1],C=(0,p.jsx)(l.Z,{children:null===n||void 0===n?void 0:n.map((function(e,t){return(0,p.jsx)(l.Z.Item,{children:(0,p.jsxs)(s.Z,{className:"d-flex justify-content-between",children:[(0,p.jsx)(m,{children:e.title}),(0,p.jsx)(d.Z,{defaultChecked:!0,onClick:function(){return function(e){var t=null===n||void 0===n?void 0:n.map((function(t){return t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t}));o(t)}(e)},disabled:1===t})]})},e+t)}))});return(0,p.jsx)(c.Z,{overlay:C,trigger:["click"],onVisibleChange:function(e){k(e)},visible:_,children:(0,p.jsx)(u.Z,{title:j("change.columns"),children:(0,p.jsx)(f.Z,{style:(0,i.Z)({},Z),size:y,icon:(0,p.jsx)(v.Z,{}),children:g?null:j("Columns")})})})}},48008:function(e,t,n){"use strict";n(47313);var i=n(9274),r=n(87569),a=n(59491),o=n(24511),l=n(46417);t.Z=function(e){var t=e.open,n=e.handleCancel,s=e.text,d=e.click,c=e.loading,u=e.subTitle,f=(0,o.$)().t;return(0,l.jsxs)(i.Z,{closable:!1,visible:t,footer:null,centered:!0,children:[(0,l.jsx)(r.ZP,{status:"warning",title:s,subTitle:u}),(0,l.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,l.jsx)(a.Z,{type:"primary",className:"mr-2",onClick:d,loading:c,children:f("yes")}),(0,l.jsx)(a.Z,{onClick:function(){return n()},children:f("no")})]})]})}},13945:function(e,t,n){"use strict";function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{Z:function(){return i}})},33834:function(e,t,n){"use strict";n.d(t,{K:function(){return s}});var i=n(4942),r=n(1413),a=n(97890),o=n(74776),l=n.n(o),s=function(){var e=(0,a.s0)(),t=(0,a.TH)(),n=l().parse(t.search,{ignoreQueryPrefix:!0});return{values:n,set:function(t,a){return e({search:l().stringify((0,r.Z)((0,r.Z)({},n),{},(0,i.Z)({},t,a)))})},reset:function(t){var i=(0,r.Z)({},n);i[t]&&delete i[t],e({search:l().stringify((0,r.Z)({},i))})},clear:function(){return e({search:l().stringify({})})},merge:function(t){return e({search:l().stringify((0,r.Z)((0,r.Z)({},n),t))})}}}},21622:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ce}});var i=n(15861),r=n(4942),a=n(1413),o=n(93433),l=n(29439),s=n(87757),d=n.n(s),c=n(47313),u=n(73591),f=n(99096),v=n(66204),h=n(59491),p=n(45705),m=n(67251),Z=n(77181),x=n(37388),y=n(78267),g=n(78508),j=n(97890),w=n(12019),b=n(31741),_=n(47515),k=n(6986),C=n(55768),S=n(15386),A=n(2717),H=n(90954),M=n(24511),Y=n(80314),z=n(22054),U=n(13945),D=n(41481),V=n(73270),P=n(84017),I=n(89281),T=n(49986),N=n(7920),O=n(24077),R=n(53233),B=n(40197),L=n(80355),E=n(24391),K=n(23560),$=n(55940),F=n(7370),G=n(74580),Q=n(69658),X=n(70816),q=n.n(X),W=n(97421),J=n(5958),ee=n(26672),te=n(3925),ne=n(48008),ie=n(53149),re=n(33834),ae=n(21186),oe=n(79492),le=n(46417),se=u.Z.TabPane,de=f.Z.RangePicker;function ce(){var e,t,n,s,f,X,ce,ue,fe=(0,j.UO)().type,ve=(0,A.I0)(),he=(0,j.s0)(),pe=(0,M.$)().t,me=(0,A.v9)((function(e){return e.currency}),A.wU).defaultCurrency,Ze=(0,A.v9)((function(e){return e.orderStatus}),A.wU).statusList,xe=(0,oe.Z)().isDemo,ye=(0,c.useState)(null),ge=(0,l.Z)(ye,2),je=ge[0],we=ge[1],be=(0,c.useState)(null),_e=(0,l.Z)(be,2),ke=_e[0],Ce=_e[1],Se=(0,c.useState)(null),Ae=(0,l.Z)(Se,2),He=Ae[0],Me=Ae[1],Ye=(0,c.useState)(null),ze=(0,l.Z)(Ye,2),Ue=ze[0],De=ze[1],Ve=[{name:"all",id:"0",active:!0,sort:0}].concat((0,o.Z)(Ze),[{name:"deleted_at",id:null===Ze||void 0===Ze?void 0:Ze.length,active:!0,sort:null===Ze||void 0===Ze?void 0:Ze.length}]),Pe=(0,c.useState)(null),Ie=(0,l.Z)(Pe,2),Te=Ie[0],Ne=Ie[1],Oe=function(e){ve((0,H.bL)({url:"order/details/".concat(e.id),id:"order_details",name:pe("order.details")})),he("/order/details/".concat(e.id))},Re=(0,c.useState)([{title:pe("id"),is_show:!0,dataIndex:"id",key:"id",sorter:!0},{title:pe("client"),is_show:!0,dataIndex:"user",key:"user",render:function(e){return(0,le.jsxs)("div",{children:[null===e||void 0===e?void 0:e.firstname," ",(null===e||void 0===e?void 0:e.lastname)||""]})}},{title:pe("status"),is_show:!0,dataIndex:"status",key:"status",render:function(e,t){return(0,le.jsxs)("div",{className:"cursor-pointer",children:["new"===e?(0,le.jsx)(v.Z,{color:"blue",children:pe(e)}):"canceled"===e?(0,le.jsx)(v.Z,{color:"error",children:pe(e)}):(0,le.jsx)(v.Z,{color:"cyan",children:pe(e)}),"delivered"===e||"canceled"===e||t.deleted_at?"":(0,le.jsx)(w.Z,{onClick:function(e){e.stopPropagation(),we(t)},disabled:t.deleted_at})]})}},{title:pe("deliveryman"),is_show:!0,dataIndex:"deliveryman",key:"deliveryman",render:function(e,t){return(0,le.jsx)("div",{children:"ready"===t.status&&"pickup"!==t.delivery_type?(0,le.jsx)(h.Z,{disabled:t.deleted_at,type:"link",onClick:function(){return De(t)},children:(0,le.jsxs)(p.Z,{children:[e?"".concat(e.firstname," ").concat(e.lastname):pe("add.deliveryman"),(0,le.jsx)(w.Z,{})]})}):(0,le.jsxs)("div",{children:[null===e||void 0===e?void 0:e.firstname," ",null===e||void 0===e?void 0:e.lastname]})})}},{title:pe("number.of.products"),dataIndex:"order_details_count",key:"order_details_count",is_show:!0,render:function(e){return(0,le.jsxs)("div",{className:"text-lowercase",children:[e||0," ",pe("products")]})}},{title:pe("amount"),is_show:!0,dataIndex:"total_price",key:"total_price",render:function(e,t){var n,i,r=null===(n=t.transaction)||void 0===n?void 0:n.status;return(0,le.jsxs)(le.Fragment,{children:[(0,le.jsx)("span",{children:(0,P.Z)(e,me.symbol)}),(0,le.jsx)("br",{}),(0,le.jsx)("span",{className:"progress"===r?"text-primary":"paid"===r?"text-success":"rejected"===r?"text-danger":"text-info",children:null===(i=t.transaction)||void 0===i?void 0:i.status})]})}},{title:pe("payment.type"),is_show:!0,dataIndex:"transaction",key:"transaction",render:function(e){var t;return pe(null===e||void 0===e||null===(t=e.payment_system)||void 0===t?void 0:t.tag)||"-"}},{title:pe("created.at"),is_show:!0,dataIndex:"created_at",key:"created_at",render:function(e,t){return q()(null===t||void 0===t?void 0:t.created_at).format("YYYY-MM-DD HH:mm")}},{title:pe("delivery.date"),is_show:!0,dataIndex:"delivery_date",key:"delivery_date"},{title:pe("options"),is_show:!0,key:"options",render:function(e,t){return(0,le.jsxs)(p.Z,{children:[(0,le.jsx)(h.Z,{disabled:t.deleted_at,icon:(0,le.jsx)(J.Y4r,{}),onClick:function(e){e.stopPropagation(),Ce(t.id)}}),(0,le.jsx)(h.Z,{disabled:t.deleted_at,icon:(0,le.jsx)(b.Z,{}),onClick:function(e){e.stopPropagation(),Oe(t)}}),(0,le.jsx)(h.Z,{type:"primary",icon:(0,le.jsx)(w.Z,{}),onClick:function(e){e.stopPropagation(),function(e){ve((0,V.bn)()),ve((0,H.bL)({url:"order/".concat(e.id),id:"order_edit",name:pe("edit.order")})),he("/order/".concat(e.id))}(t)},disabled:"delivered"===t.status||"canceled"===t.status||t.deleted_at}),(0,le.jsx)($.Z,{disabled:t.deleted_at,icon:(0,le.jsx)(_.Z,{}),onClick:function(e){e.stopPropagation(),ot([t.id]),Ke(!0),ct(!0)}}),(0,le.jsx)(h.Z,{disabled:t.deleted_at,icon:(0,le.jsx)(k.Z,{}),onClick:function(e){e.stopPropagation(),Me(t.id)}})]})}}]),Be=(0,l.Z)(Re,2),Le=Be[0],Ee=Be[1],Ke=(0,c.useContext)(G._).setIsModalVisible,$e=(0,c.useState)(!1),Fe=(0,l.Z)($e,2),Ge=Fe[0],Qe=Fe[1],Xe=(0,A.v9)((function(e){return e.menu}),A.wU).activeMenu,qe=(0,re.K)(),We=(0,c.useState)(qe.values.status||"all"),Je=(0,l.Z)(We,2),et=Je[0],tt=Je[1],nt=(null===(e=Xe.data)||void 0===e?void 0:e.role)||et,it=(0,c.useState)(null),rt=(0,l.Z)(it,2),at=rt[0],ot=rt[1],lt=(0,c.useState)(null),st=(0,l.Z)(lt,2),dt=st[0],ct=st[1],ut=(0,c.useState)(!1),ft=(0,l.Z)(ut,2),vt=ft[0],ht=ft[1],pt=(0,c.useState)(q()().subtract(1,"months"),q()()),mt=(0,l.Z)(pt,2),Zt=mt[0],xt=mt[1],yt=(0,A.v9)((function(e){return e.orders}),A.wU),gt=yt.orders,jt=yt.loading,wt=yt.params,bt=(yt.statistic,yt.meta),_t=Xe.data,kt={search:null===_t||void 0===_t?void 0:_t.search,sort:null===_t||void 0===_t?void 0:_t.sort,column:null===_t||void 0===_t?void 0:_t.column,perPage:null===_t||void 0===_t?void 0:_t.perPage,page:null===_t||void 0===_t?void 0:_t.page,user_id:null===_t||void 0===_t?void 0:_t.user_id,status:"deleted_at"===nt||"all"===nt?void 0:nt,deleted_at:"deleted_at"===nt?"deleted_at":void 0,shop_id:null!==(null===(t=Xe.data)||void 0===t?void 0:t.shop_id)?null===(n=Xe.data)||void 0===n?void 0:n.shop_id:null,delivery_type:"scheduled"!==fe?fe:void 0,delivery_date_from:"scheduled"===fe?q()().add(1,"day").format("YYYY-MM-DD"):void 0,date_from:(null===Zt||void 0===Zt||null===(s=Zt[0])||void 0===s?void 0:s.format("YYYY-MM-DD"))||null,date_to:(null===Zt||void 0===Zt||null===(f=Zt[1])||void 0===f?void 0:f.format("YYYY-MM-DD"))||null};(0,Y.Z)((function(){ve((0,z.AU)(kt))}),[_t,Zt,fe]);var Ct=function(e,t){ve((0,H.nc)({activeMenu:Xe,data:(0,a.Z)((0,a.Z)({},_t),(0,r.Z)({},t,e))}))};function St(){return St=(0,i.Z)(d().mark((function e(t){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={search:t,perPage:10},e.abrupt("return",T.Z.search(n).then((function(e){return e.data.map((function(e){return{label:"".concat(e.firstname," ").concat(e.lastname),value:e.id}}))})));case 2:case"end":return e.stop()}}),e)}))),St.apply(this,arguments)}var At=function(){we(null),De(null),Ce(null),Me(null)};function Ht(){return Ht=(0,i.Z)(d().mark((function e(t){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={search:t,status:"approved"},e.abrupt("return",ie.Z.getAll(n).then((function(e){return e.data.map((function(e){var t;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))})));case 2:case"end":return e.stop()}}),e)}))),Ht.apply(this,arguments)}(0,c.useEffect)((function(){null!==Xe&&void 0!==Xe&&Xe.refetch&&(ve((0,z.AU)(kt)),ve((0,H.A_)(Xe)))}),[null===Xe||void 0===Xe?void 0:Xe.refetch]),(0,c.useEffect)((function(){ve((0,B.dX)())}),[]);var Mt={selectedRowKeys:at,onChange:function(e){ot(e)}},Yt=(0,le.jsxs)(m.Z,{children:[(0,le.jsx)(m.Z.Item,{onClick:function(){xe?K.Am.warning(pe("cannot.work.demo")):Ne({delete:!0})},disabled:"deleted_at"===nt,children:(0,le.jsxs)(p.Z,{children:[(0,le.jsx)(_.Z,{}),pe("delete.all")]})}),(0,le.jsx)(m.Z.Item,{onClick:function(){xe?K.Am.warning(pe("cannot.work.demo")):Ne({restore:!0})},children:(0,le.jsxs)(p.Z,{children:[(0,le.jsx)(ee.uOc,{}),pe("restore.all")]})})]});return(0,le.jsxs)(le.Fragment,{children:[(0,le.jsxs)(p.Z,{className:"justify-content-end w-100 mb-3",children:[(0,le.jsx)(ae.Z,{listType:"orders"}),(0,le.jsx)(h.Z,{type:"primary",icon:(0,le.jsx)(C.Z,{}),onClick:function(){ve((0,V.bn)()),ve((0,H.K0)({id:"pos.system_01",url:"pos-system",name:"pos.system"})),he("/pos-system")},style:{width:"100%"},children:pe("add.order")})]}),(0,le.jsx)(Z.Z,{children:(0,le.jsxs)(p.Z,{wrap:!0,className:"order-filter",children:[(0,le.jsx)(D.Z,{defaultValue:null===_t||void 0===_t?void 0:_t.search,resetSearch:!(null!==_t&&void 0!==_t&&_t.search),placeholder:pe("search"),handleChange:function(e){return Ct(e,"search")}}),(0,le.jsx)(I.h,{placeholder:pe("select.shop"),fetchOptions:function(e){return Ht.apply(this,arguments)},style:{width:"100%"},onSelect:function(e){return Ct(e.value,"shop_id")},onDeselect:function(){return Ct(null,"shop_id")},allowClear:!0,value:null===_t||void 0===_t?void 0:_t.shop_id}),(0,le.jsx)(I.h,{placeholder:pe("select.client"),fetchOptions:function(e){return St.apply(this,arguments)},onSelect:function(e){return Ct(e.value,"user_id")},onDeselect:function(){return Ct(null,"user_id")},style:{width:"100%"},value:null===_t||void 0===_t?void 0:_t.user_id}),(0,le.jsx)(de,{value:Zt,onChange:function(e){Ct((function(t){var n,i;return(0,a.Z)((0,a.Z)({},t),{date_from:null===e||void 0===e||null===(n=e[0])||void 0===n?void 0:n.format("YYYY-MM-DD"),date_to:null===e||void 0===e||null===(i=e[1])||void 0===i?void 0:i.format("YYYY-MM-DD")})})),xt(e)},disabledDate:function(e){return e&&e>q()().endOf("day")},style:{width:"100%"}}),(0,le.jsxs)(h.Z,{onClick:function(){Qe(!0),F.Z.export(kt).then((function(e){var t=W.S0+e.data.file_name;window.location.href=t})).finally((function(){return Qe(!1)}))},loading:Ge,style:{width:"100%"},children:[(0,le.jsx)(te.bwQ,{className:"mr-2"}),pe("export")]}),(0,le.jsx)(h.Z,{onClick:function(){(0,A.dC)((function(){ve((0,z.H5)()),ve((0,H.nc)({activeMenu:Xe,data:null}))})),ve((0,z.AU)({status:null,page:null===_t||void 0===_t?void 0:_t.page,perPage:20}))},style:{width:"100%"},icon:(0,le.jsx)(S.Z,{}),children:pe("clear")})]})}),(0,le.jsxs)(Z.Z,{children:[(0,le.jsxs)(p.Z,{className:"justify-content-between align-items-start w-100",children:[(0,le.jsx)(u.Z,{onChange:function(e){var t=e;ve((0,H.nc)({activeMenu:Xe,data:{role:t,page:1}})),tt(e),he("?status=".concat(t))},type:"card",activeKey:nt,children:Ve.filter((function(e){return!0===e.active})).map((function(e){return(0,le.jsx)(se,{tab:pe(e.name)},e.name)}))}),(0,le.jsxs)(p.Z,{children:[(0,le.jsx)(x.Z,{title:pe("delete.selected"),children:(0,le.jsx)($.Z,{disabled:"deleted_at"===nt,type:"primary",onClick:function(){null===at||0===at.length?K.Am.warning(pe("select.the.product")):(Ke(!0),ct(!1))}})}),(0,le.jsx)(R.Z,{setColumns:Ee,columns:Le,iconOnly:!0}),(0,le.jsx)(y.Z,{overlay:Yt,children:(0,le.jsx)(h.Z,{children:pe("options")})})]})]}),(0,le.jsx)(g.Z,{scroll:{x:!0},rowSelection:Mt,columns:null===Le||void 0===Le?void 0:Le.filter((function(e){return e.is_show})),dataSource:gt,loading:jt,pagination:{pageSize:wt.perPage,page:(null===(X=Xe.data)||void 0===X?void 0:X.page)||1,total:null===bt||void 0===bt?void 0:bt.total,defaultCurrent:null===(ce=Xe.data)||void 0===ce?void 0:ce.page,current:null===(ue=Xe.data)||void 0===ue?void 0:ue.page},rowKey:function(e){return e.id},onChange:function(e,t,n){var i=e.pageSize,r=e.current,o=n.field,l=n.order,s=(0,U.Z)(l);ve((0,H.nc)({activeMenu:Xe,data:(0,a.Z)((0,a.Z)({},_t),{},{perPage:i,page:r,column:o,sort:s})}))},onRow:function(e){return{onClick:function(){"deleted_at"!==nt&&Oe(e)}}}})]}),je&&(0,le.jsx)(N.Z,{orderDetails:je,handleCancel:At,status:Ze}),Ue&&(0,le.jsx)(O.Z,{orderDetails:Ue,handleCancel:At}),ke&&(0,le.jsx)(L.Z,{id:ke,handleCancel:At}),He&&(0,le.jsx)(E.Z,{id:He,handleCancel:At}),(0,le.jsx)(Q.Z,{click:function(){ht(!0);var e=(0,a.Z)({},Object.assign.apply(Object,[{}].concat((0,o.Z)(at.map((function(e,t){return(0,r.Z)({},"ids[".concat(t,"]"),e)}))))));F.Z.delete(e).then((function(){K.Am.success(pe("successfully.deleted")),Ke(!1),ve((0,z.AU)(kt)),ct(null)})).finally((function(){ot(null),ht(!1)}))},text:pe(dt?"delete":"all.delete"),loading:vt,setText:ot}),Te&&(0,le.jsx)(ne.Z,{open:Te,handleCancel:function(){return Ne(null)},click:Te.restore?function(){ht(!0),F.Z.restoreAll().then((function(){K.Am.success(pe("it.will.take.some.time.to.return.the.files")),ve((0,z.AU)(kt)),Ne(null)})).finally((function(){return ht(!1)}))}:function(){ht(!0),F.Z.dropAll().then((function(){K.Am.success(pe("successfully.deleted")),ve((0,z.AU)(kt)),Ne(null)})).finally((function(){return ht(!1)}))},text:Te.restore?pe("restore.modal.text"):pe("read.carefully"),subTitle:Te.restore?"":pe("confirm.deletion"),loading:vt,setText:ot})]})}},21186:function(e,t,n){"use strict";var i=n(39180),r=(n(47313),n(58821)),a=n(54972),o=n(97890),l=n(46417),s=[{value:"orders-board",title:"Board",icon:(0,l.jsx)(a.Ez2,{size:20})},{value:"orders",title:"List",icon:(0,l.jsx)(r.Ps6,{size:20})}];t.Z=function(e){var t=e.listType,n=(0,o.UO)().type,r=(0,o.s0)();return(0,l.jsx)(i.ZP.Group,{value:t,onChange:function(e){r("/".concat(e.target.value).concat(n?"/".concat(n):""))},className:"float-right",buttonStyle:"solid",children:null===s||void 0===s?void 0:s.map((function(e){return(0,l.jsx)(i.ZP.Button,{value:e.value,children:(0,l.jsxs)("div",{className:"d-flex align-items-center",style:{gap:"10px"},children:[e.icon,e.title]})},e.value)}))})}},15386:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(1413),r=n(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"}}]},name:"clear",theme:"outlined"},o=n(17469),l=function(e,t){return r.createElement(o.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:a}))};l.displayName="ClearOutlined";var s=r.forwardRef(l)},99587:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(1413),r=n(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},o=n(17469),l=function(e,t){return r.createElement(o.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:a}))};l.displayName="TableOutlined";var s=r.forwardRef(l)},83334:function(e,t){var n,i,r;i=[],void 0===(r="function"===typeof(n=function(){return function e(t,n,i){var r,a,o=window,l="application/octet-stream",s=i||l,d=t,c=!n&&!i&&d,u=document.createElement("a"),f=function(e){return String(e)},v=o.Blob||o.MozBlob||o.WebKitBlob||f,h=n||"download";if(v=v.call?v.bind(o):Blob,"true"===String(this)&&(s=(d=[d,s])[0],d=d[1]),c&&c.length<2048&&(h=c.split("/").pop().split("?")[0],u.href=c,-1!==u.href.indexOf(c))){var p=new XMLHttpRequest;return p.open("GET",c,!0),p.responseType="blob",p.onload=function(t){e(t.target.response,h,l)},setTimeout((function(){p.send()}),0),p}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(d)){if(!(d.length>2096103.424&&v!==f))return navigator.msSaveBlob?navigator.msSaveBlob(y(d),h):g(d);s=(d=y(d)).type||l}else if(/([\x80-\xff])/.test(d)){for(var m=0,Z=new Uint8Array(d.length),x=Z.length;m<x;++m)Z[m]=d.charCodeAt(m);d=new v([Z],{type:s})}function y(e){for(var t=e.split(/[:;,]/),n=t[1],i=("base64"==t[2]?atob:decodeURIComponent)(t.pop()),r=i.length,a=0,o=new Uint8Array(r);a<r;++a)o[a]=i.charCodeAt(a);return new v([o],{type:n})}function g(e,t){if("download"in u)return u.href=e,u.setAttribute("download",h),u.className="download-js-link",u.innerHTML="downloading...",u.style.display="none",document.body.appendChild(u),setTimeout((function(){u.click(),document.body.removeChild(u),!0===t&&setTimeout((function(){o.URL.revokeObjectURL(u.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,l)),window.open(e)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=e),!0;var n=document.createElement("iframe");document.body.appendChild(n),!t&&/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,l)),n.src=e,setTimeout((function(){document.body.removeChild(n)}),333)}if(r=d instanceof v?d:new v([d],{type:s}),navigator.msSaveBlob)return navigator.msSaveBlob(r,h);if(o.URL)g(o.URL.createObjectURL(r),!0);else{if("string"===typeof r||r.constructor===f)try{return g("data:"+s+";base64,"+o.btoa(r))}catch(j){return g("data:"+s+","+encodeURIComponent(r))}(a=new FileReader).onload=function(e){g(this.result)},a.readAsDataURL(r)}return!0}})?n.apply(t,i):n)||(e.exports=r)},24654:function(){}}]);