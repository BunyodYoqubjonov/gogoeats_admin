"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9405],{84017:function(e,n,i){function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$";if(!e)return"0";var i=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return n+" "+i}i.d(n,{Z:function(){return l}})},89405:function(e,n,i){i.r(n),i.d(n,{default:function(){return w}});var l=i(29439),t=i(47313),s=(i(55291),i(77181)),r=i(59491),o=i(68197),d=i(59624),a=i(83371),c=i(26824),u=i(86345),h=i(72652),p=i(92102),m=i(45464),v=(i(97421),i(12019)),x=i(2717),b=i(97890),Z=i(90954),f=i(24511),j=i(73339),g=i(84017),y=i(79492),I=i(46417);function w(){var e,n,i,w,k,S,_,C=(0,f.$)().t,N=(0,t.useState)(!1),U=(0,l.Z)(N,2),$=U[0],z=U[1],A=(0,x.I0)(),D=(0,b.s0)(),E=((0,x.v9)((function(e){return e.myShop}),x.wU).myShop,(0,x.v9)((function(e){return e.menu}),x.wU).activeMenu),F=(0,x.v9)((function(e){return e.myShop}),x.wU),L=F.myShop,M=F.loading,W=(0,x.v9)((function(e){return e.currency}),x.wU).defaultCurrency,q=(0,x.v9)((function(e){return e.auth}),x.wU).user,B=(0,y.Z)(),G=B.isDemo,H=B.demoShop;return(0,t.useEffect)((function(){E.refetch&&(A((0,j.S)()),A((0,Z.A_)(E)))}),[E.refetch]),(0,I.jsx)(s.Z,{title:C("my.shop"),extra:"seller"!==(null===q||void 0===q?void 0:q.role)?null:(0,I.jsx)(r.Z,{type:"primary",icon:(0,I.jsx)(v.Z,{}),onClick:function(){A((0,Z.bL)({data:L.uuid,id:"edit-shop",url:"my-shop/edit",name:C("edit.shop")})),D("/my-shop/edit")},children:C("shop.edit")}),children:M?(0,I.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,I.jsx)(h.Z,{size:"large",className:"py-5"})}):(0,I.jsx)(o.Z,{gutter:12,children:(0,I.jsx)(d.Z,{span:20,children:(0,I.jsxs)("div",{className:"position-relative",children:[(0,I.jsxs)(a.Z,{bordered:!0,children:[(0,I.jsx)(a.Z.Item,{label:C("shop.name"),span:2,children:null===(e=L.translation)||void 0===e?void 0:e.title}),(0,I.jsx)(a.Z.Item,{label:C("shop.address"),span:2,children:null===(n=L.translation)||void 0===n?void 0:n.address}),(0,I.jsx)(a.Z.Item,{label:C("phone"),span:2,children:L.phone}),(0,I.jsx)(a.Z.Item,{label:C("tax"),span:2,children:L.tax}),(0,I.jsx)(a.Z.Item,{label:C("background.image"),span:2,children:L.background_img?(0,I.jsx)(c.Z,{width:200,src:(0,m.Z)(L.background_img),alt:"shop"}):""}),(0,I.jsx)(a.Z.Item,{label:C("logo.image"),span:2,children:L.logo_img?(0,I.jsx)(c.Z,{width:200,src:(0,m.Z)(L.logo_img),alt:"shop"}):""}),(0,I.jsx)(a.Z.Item,{label:C("open"),span:2,children:(0,I.jsx)(u.Z,{name:"open",defaultChecked:L.open,onChange:function(){z(!0),p.Z.setWorkingStatus().then((function(){return A((0,Z.xo)(E))})).finally((function(){return z(!1)}))},disabled:G&&L.id==H})}),(0,I.jsx)(a.Z.Item,{label:C("wallet"),span:2,children:(0,g.Z)(null===(i=L.seller)||void 0===i||null===(w=i.wallet)||void 0===w?void 0:w.price,null===W||void 0===W?void 0:W.symbol)})]}),L.subscription?(0,I.jsxs)(a.Z,{title:C("subscription"),bordered:!0,className:"mt-5",children:[(0,I.jsx)(a.Z.Item,{label:C("type"),span:3,children:null===(k=L.subscription)||void 0===k?void 0:k.type}),(0,I.jsx)(a.Z.Item,{label:C("price"),span:3,children:(0,g.Z)(null===(S=L.subscription)||void 0===S?void 0:S.price,null===W||void 0===W?void 0:W.symbol)}),(0,I.jsx)(a.Z.Item,{label:C("expired.at"),span:3,children:null===(_=L.subscription)||void 0===_?void 0:_.expired_at})]}):"",$&&(0,I.jsx)("div",{className:"loader",children:(0,I.jsx)(h.Z,{})})]})})})})}}}]);