"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3319],{73319:function(e,n,t){t.r(n),t.d(n,{default:function(){return Y}});var i=t(4942),r=t(93433),a=t(1413),o=t(29439),l=t(47313),d=t(31741),s=t(55613),u=t(45705),c=t(59491),v=t(77181),f=t(78508),h=t(23560),m=t(69658),x=t(74580),g=t(2717),p=t(90954),Z=t(80314),y=t(13945),w=t(24511),j=t(28305),k=t(99361),C=t(70816),_=t.n(C),b=t(97890),S=t(55940),I=t(53233),M=t(20093),P=t(46417);function Y(){var e=(0,w.$)().t,n=(0,g.I0)(),t=(0,b.s0)(),C=(0,l.useState)([{title:e("order.id"),dataIndex:"order",key:"order",render:function(i){return(0,P.jsxs)("div",{className:"text-hover",onClick:function(){return function(i){n((0,p.bL)({id:"order_details",url:"order/details/".concat(i),name:e("order.details")})),t("/order/details/".concat(i))}(null===i||void 0===i?void 0:i.id)},children:["#",null===i||void 0===i?void 0:i.id]})},sorter:!0,is_show:!0},{title:e("user"),dataIndex:"user",key:"user",is_show:!0,render:function(e){return(0,P.jsxs)("div",{className:"text-hover",children:[null===e||void 0===e?void 0:e.firstname," ",(null===e||void 0===e?void 0:e.lastname)||""]})}},{title:e("deliveryman"),dataIndex:"deliveryman",key:"deliveryman",is_show:!0,render:function(e){return(0,P.jsxs)("div",{className:"text-hover",children:[null===e||void 0===e?void 0:e.firstname," ",(null===e||void 0===e?void 0:e.lastname)||""]})}},{title:e("rating"),dataIndex:"rating",key:"rating",is_show:!0,render:function(e){return(0,P.jsx)(s.Z,{allowHalf:!0,disabled:!0,defaultValue:e})}},{title:e("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:function(e){return _()(e).format("YYYY-MM-DD HH:mm")}},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,n){return(0,P.jsx)(u.Z,{children:(0,P.jsx)(c.Z,{type:"primary",icon:(0,P.jsx)(d.Z,{}),onClick:function(){return L(n.id)}})})}}]),Y=(0,o.Z)(C,2),z=Y[0],A=Y[1],H=(0,l.useContext)(x._).setIsModalVisible,N=(0,l.useState)(null),D=(0,o.Z)(N,2),O=D[0],U=D[1],V=(0,l.useState)(null),E=(0,o.Z)(V,2),K=E[0],L=E[1],R=(0,l.useState)(!1),T=(0,o.Z)(R,2),$=T[0],q=T[1],B=(0,l.useState)(null),F=(0,o.Z)(B,2),G=F[0],J=F[1],Q=(0,g.v9)((function(e){return e.menu}),g.wU).activeMenu,W=(0,g.v9)((function(e){return e.deliveryboyReview}),g.wU),X=W.reviews,ee=W.meta,ne=W.loading,te=W.params,ie=Q.data,re={sort:null===ie||void 0===ie?void 0:ie.sort,column:null===ie||void 0===ie?void 0:ie.column,perPage:null===ie||void 0===ie?void 0:ie.perPage,page:null===ie||void 0===ie?void 0:ie.page,assign:"deliveryman"};(0,l.useEffect)((function(){Q.refetch&&(n((0,M.C1)(re)),n((0,p.A_)(Q)))}),[Q.refetch]),(0,Z.Z)((function(){n((0,M.C1)(re))}),[Q.data]);var ae={id:O,onChange:function(e){U(e)}};return(0,P.jsxs)(v.Z,{title:e("deliveryboy.reviews"),extra:(0,P.jsxs)(u.Z,{wrap:!0,children:[(0,P.jsx)(S.Z,{size:"",onClick:function(){null===O||0===O.length?h.Am.warning(e("select.the.product")):(H(!0),J(!1))},children:e("delete.selected")}),(0,P.jsx)(I.Z,{columns:z,setColumns:A})]}),children:[(0,P.jsx)(f.Z,{scroll:{x:!0},rowSelection:ae,columns:null===z||void 0===z?void 0:z.filter((function(e){return e.is_show})),dataSource:X,pagination:{pageSize:te.perPage,page:te.page,total:ee.total,defaultCurrent:te.page},rowKey:function(e){return e.id},onChange:function(e,t,i){var r=e.pageSize,a=e.current,o=i.field,l=i.order,d=(0,y.Z)(l);n((0,p.nc)({activeMenu:Q,data:{perPage:r,page:a,column:o,sort:d}}))},loading:ne}),(0,P.jsx)(m.Z,{click:function(){q(!0);var t=(0,a.Z)({},Object.assign.apply(Object,[{}].concat((0,r.Z)(O.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));j.Z.delete(t).then((function(){h.Am.success(e("successfully.deleted")),n((0,M.C1)()),H(!1)})).finally((function(){return q(!1)}))},text:e(G?"delete":"all.delete"),setText:U,loading:$}),K&&(0,P.jsx)(k.Z,{id:K,handleCancel:function(){return L(null)}})]})}}}]);