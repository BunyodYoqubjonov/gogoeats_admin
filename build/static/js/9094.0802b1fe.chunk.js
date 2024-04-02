"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9094],{52008:function(e,n,t){t(47313);n.Z=t.p+"static/media/paystack.6d6a77c8d6bfc75061ec651e5c2e74eb.svg"},19094:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var r=t(29439),i=t(47313),a=t(77181),s=t(68197),c=t(59624),l=t(41068),o=t(59491),u=t(72652),d=t(34344),h={getAll:function(e){return d.Z.get("dashboard/seller/subscriptions",{params:e})},attach:function(e,n){return d.Z.post("dashboard/seller/subscriptions/".concat(e,"/attach"),n)},transactionCreate:function(e,n){return d.Z.post("payments/subscription/".concat(e,"/transactions"),n)}},p=t(2717),m=t(24511),f=t(15861),v=t(87757),x=t.n(v),y=t(9274),j=t(42111),b=t(51282),g=t(23560),w=t(73339),Z=t(52008),N=t(26672),k=t(92709),S=t(57864),C=t(20637),A=t(46417),_=["wallet"];function z(e){var n,t,l=e.modal,u=e.handleCancel,d=(0,m.$)().t,v=(0,p.I0)(),z=(0,p.v9)((function(e){return e.payment}),p.wU),U=z.payments,I=z.loading,E=(0,p.v9)((function(e){return e.myShop}),p.wU).myShop,B=(0,p.v9)((function(e){return e.myShop.myShop}),p.wU).seller,$=(0,i.useState)(!1),D=(0,r.Z)($,2),F=D[0],K=D[1],M=(0,i.useState)({}),P=(0,r.Z)(M,2),R=P[0],T=P[1],q=(0,i.useState)(null),G=(0,r.Z)(q,2),H=G[0],J=G[1],L=(0,i.useState)(null),O=(0,r.Z)(L,2),Q=O[0],V=O[1],W=(0,p.v9)((function(e){return e.globalSettings.settings}),p.wU).payment_type;function X(){return(X=(0,f.Z)(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.Z.getById(E.id).then((function(e){var n=e.data;return J(n.map((function(e){return{label:e.payment.tag||"no name",value:e.payment.id,key:e.payment.id}})))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return(Y=(0,f.Z)(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C.Z.getAll().then((function(e){var n=e.data;return V(n.map((function(e){return{label:e.tag||"no name",value:e.id,key:e.id}})))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,i.useEffect)((function(){U.length||v((0,j.dA)()),function(){X.apply(this,arguments)}(),function(){Y.apply(this,arguments)}()}),[]);var ee=function(e){switch(e){case"wallet":return(0,A.jsx)(S.dk2,{size:80});case"paypal":return(0,A.jsx)(N.kD0,{size:80});case"stripe":return(0,A.jsx)(k.K6C,{size:80});case"razorpay":return(0,A.jsx)(k.r98,{size:80});case"paystack":return(0,A.jsx)("img",{src:Z.Z,alt:"img",width:"80",height:"80"})}};return(0,A.jsx)(y.Z,{visible:!!l,title:d("purchase.subscription"),onCancel:u,footer:[(0,A.jsx)(o.Z,{type:"primary",onClick:function(){var e;R.value?"wallet"===R.label&&(null===B||void 0===B||null===(e=B.wallet)||void 0===e?void 0:e.price)<l.price?g.Am.warning(d("insufficient.balance")):(K(!0),h.attach(l.id).then((function(e){return function(e){var n={payment_sys_id:R.value};h.transactionCreate(e,n).then((function(){u(),g.Am.success(d("successfully.purchased")),v((0,w.S)())})).finally((function(){return K(!1)}))}(e.data.id)})).error((function(){return K(!1)}))):g.Am.warning(d("please.select.payment.type"))},loading:F,children:d("save")},"save-btn"),(0,A.jsx)(o.Z,{type:"default",onClick:u,children:d("cancel")},"cancel-btn")],children:I?(0,A.jsx)(b.Z,{}):(0,A.jsx)(s.Z,{gutter:12,children:null===(n="admin"===W?Q:H)||void 0===n||null===(t=n.filter((function(e){return"cash"!==(null===e||void 0===e?void 0:e.label)})))||void 0===t?void 0:t.map((function(e,n){return(0,A.jsx)(c.Z,{span:8,children:(0,A.jsxs)(a.Z,{className:"payment-card ".concat((null===R||void 0===R?void 0:R.label)===e.label?"active":""),onClick:function(){return n=e,void(_.includes(n.label)?T(n):g.Am.warning(d("cannot.work.demo")));var n},children:[(0,A.jsx)("div",{className:"payment-icon",children:ee(null===e||void 0===e?void 0:e.label)}),(0,A.jsx)("div",{className:"font-weight-bold mt-2",children:d(null===e||void 0===e?void 0:e.label)})]})},n)}))})})}var U=t(90954),I=[];function E(){var e=(0,m.$)().t,n=(0,p.v9)((function(e){return e.currency}),p.wU).defaultCurrency,t=(0,p.v9)((function(e){return e.myShop}),p.wU).myShop,d=(0,i.useState)(null),f=(0,r.Z)(d,2),v=f[0],x=f[1],y=(0,i.useState)(!1),j=(0,r.Z)(y,2),b=j[0],g=j[1],w=(0,i.useState)([]),Z=(0,r.Z)(w,2),N=Z[0],k=Z[1],S=N.length,C=(0,p.v9)((function(e){return e.menu}),p.wU).activeMenu,_=(0,p.I0)(),E=function(){g(!0),h.getAll().then((function(e){k(e.data)})).finally((function(){g(!1),_((0,U.A_)(C))}))};return(0,i.useEffect)((function(){C.refetch&&E()}),[C.refetch]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(a.Z,{className:"h-100",children:b?(0,A.jsx)(c.Z,{className:"ant-col-spin d-flex justify-content-center",children:(0,A.jsx)(u.Z,{size:"large"})}):(0,A.jsxs)("div",{children:[(0,A.jsxs)("div",{className:"text-center mb-4",children:[(0,A.jsx)("h2",{className:"font-weight-semibold",children:"Pick a base plan"}),(0,A.jsx)(s.Z,{type:"flex",justify:"center",children:(0,A.jsx)(c.Z,{sm:24,md:12,lg:8,children:(0,A.jsx)("p",{children:"Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission."})})})]}),(0,A.jsx)(s.Z,{children:N.map((function(r,i){var a,s;return(0,A.jsx)(c.Z,{span:6,className:S===i+1?"":"border-right",children:(0,A.jsx)(l.Z.Ribbon,{text:e("active"),color:"red",className:(null===t||void 0===t||null===(a=t.subscription)||void 0===a||null===(s=a.subscription)||void 0===s?void 0:s.id)===r.id?"":"d-none",children:(0,A.jsxs)("div",{className:"p-3",children:[(0,A.jsxs)("div",{className:"text-center",children:[(0,A.jsxs)("h1",{className:"display-4 mt-4",children:[(0,A.jsx)("span",{className:"font-size-md d-inline-block mr-1",style:{transform:"translate(0px, -17px)"},children:null===n||void 0===n?void 0:n.symbol}),(0,A.jsx)("span",{children:r.price})]}),(0,A.jsxs)("p",{className:"mb-0 text-lowercase",children:[r.month," ",e("month")]}),(0,A.jsxs)("p",{className:"mb-0 text-lowercase",children:[e("order.limit")," ",null===r||void 0===r?void 0:r.order_limit]}),(0,A.jsxs)("p",{className:"mb-0 text-lowercase",children:[e("product.limit")," ",null===r||void 0===r?void 0:r.product_limit]}),(0,A.jsx)("p",{className:"mb-0 text-lowercase",children:Boolean(null===r||void 0===r?void 0:r.with_report)?e("with.report"):e("without.report")})]}),(0,A.jsx)("div",{className:"mt-4",children:(0,A.jsx)("h2",{className:"text-center font-weight-semibold",children:r.type})}),(0,A.jsx)("div",{className:"d-flex justify-content-center mt-3",children:(0,A.jsx)("div",{children:null===I||void 0===I?void 0:I.map((function(e,n){return(0,A.jsxs)("p",{children:[(0,A.jsx)(l.Z,{color:"blue"}),(0,A.jsx)("span",{children:e})]},"pricing-feature-".concat(n))}))})}),(0,A.jsx)("div",{className:"mt-3 text-center",children:(0,A.jsx)(o.Z,{type:"default",onClick:function(){return x(r)},children:e("purchase")})})]})})},"price-column-".concat(i))}))})]})}),v&&(0,A.jsx)(z,{modal:v,handleCancel:function(){return x(null)},refetch:E})]})}}}]);