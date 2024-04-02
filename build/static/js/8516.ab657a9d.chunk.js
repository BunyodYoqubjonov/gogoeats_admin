"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8516],{52008:function(e,l,a){a(47313);l.Z=a.p+"static/media/paystack.6d6a77c8d6bfc75061ec651e5c2e74eb.svg"},89802:function(e,l,a){a.d(l,{q:function(){return o}});var r=a(1413),n=a(29439),t=a(45987),i=a(47313),s=a(74294),u=a(72652),c=a(46417),d=["fetchOptions","refetch"],o=function(e){var l=e.fetchOptions,a=e.refetch,o=void 0!==a&&a,p=(0,t.Z)(e,d),m=(0,i.useState)(!1),h=(0,n.Z)(m,2),v=h[0],x=h[1],Z=(0,i.useState)([]),y=(0,n.Z)(Z,2),j=y[0],f=y[1];return(0,c.jsx)(s.Z,(0,r.Z)((0,r.Z)({labelInValue:!0,filterOption:!1,notFoundContent:v?(0,c.jsx)(u.Z,{size:"small"}):"no results"},p),{},{options:v?[]:j,onFocus:function(){j.length&&!o||(x(!0),l().then((function(e){f(e),x(!1)})))}}))}},58516:function(e,l,a){a.r(l),a.d(l,{default:function(){return A}});var r=a(15861),n=a(1413),t=a(29439),i=a(87757),s=a.n(i),u=a(47313),c=a(10976),d=a(77181),o=a(68197),p=a(59624),m=a(74294),h=a(72652),v=a(66672),x=a(86345),Z=a(59491),y=a(24511),j=a(90954),f=a(2717),b=a(23560),g=a(97890),q=a(52008),_=a(26672),k=a(92709),I=a(79053),w=a(91260),F=a(26457),z=a(89802),P=a(30554),C=a(6957),N=a(5764),S=a(46417);function A(){var e,l,a,i=(0,y.$)().t,A=c.Z.useForm(),O=(0,t.Z)(A,1)[0],V=(0,u.useState)(!1),U=(0,t.Z)(V,2),W=U[0],L=U[1],R=(0,u.useState)(!1),B=(0,t.Z)(R,2),D=B[0],E=B[1],K=(0,u.useState)([]),M=(0,t.Z)(K,2),T=M[0],$=M[1],G=(0,u.useState)(null),H=(0,t.Z)(G,2),J=H[0],Q=H[1],X=(0,f.v9)((function(e){return e.formLang}),f.wU).languages,Y=(0,f.v9)((function(e){return e.menu}),f.wU).activeMenu,ee=(0,u.useState)(null!==(e=Y.data)&&void 0!==e&&e.image?[null===(l=Y.data)||void 0===l?void 0:l.image]:[]),le=(0,t.Z)(ee,2),ae=le[0],re=le[1],ne=(0,f.v9)((function(e){return e.currency}),f.wU).defaultCurrency,te=(0,f.I0)(),ie=(0,g.s0)();function se(){return(se=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.abrupt("return",F.Z.getAll().then((function(e){var l=e.data.filter((function(e){return"wallet"!==e.tag})).filter((function(e){return"cash"!==e.tag})).map((function(e){return{label:e.tag[0].toUpperCase()+e.tag.substring(1),value:e.id,key:e.id}}));$(l)})).finally((function(){return E(!1)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,u.useEffect)((function(){!function(){se.apply(this,arguments)}()}),[]);return(0,S.jsx)(d.Z,{title:i("add.payment.payloads"),className:"h-100",children:(0,S.jsxs)(c.Z,{layout:"vertical",name:"user-address",form:O,onFinish:function(e){var l,a,r;delete e.payment_id,"FlutterWave"!==(null===J||void 0===J?void 0:J.label)||ae[0]?(L(!0),w.x.create({payment_id:J.value,payload:(0,n.Z)((0,n.Z)({},e),{},{logo:ae[0]?ae[0].name:void 0,paypal_currency:null===(l=e.paypal_currency)||void 0===l?void 0:l.label,currency:null!==(a=e.currency)&&void 0!==a&&a.label?null===(r=e.currency)||void 0===r?void 0:r.label:e.currency,paypal_validate_ssl:null!==e&&void 0!==e&&e.paypal_validate_ssl?Number(null===e||void 0===e?void 0:e.paypal_validate_ssl):void 0})}).then((function(){var e="payment-payloads";b.Am.success(i("successfully.created")),(0,f.dC)((function(){te((0,j.ph)((0,n.Z)((0,n.Z)({},Y),{},{nextUrl:e}))),te((0,I.j)({})),te((0,j.xo)(Y))})),ie("/".concat(e))})).catch((function(e){var l,a,r;b.Am.dismiss(),b.Am.error(null===e||void 0===e||null===(l=e.response)||void 0===l||null===(a=l.data)||void 0===a||null===(r=a.params)||void 0===r?void 0:r.payment_id[0])})).finally((function(){return L(!1)}))):b.Am.error(i("choose.payload.image"))},children:[(0,S.jsxs)(o.Z,{gutter:12,children:[(0,S.jsx)(p.Z,{span:"Cash"===(null===J||void 0===J?void 0:J.label)||"Wallet"===(null===J||void 0===J?void 0:J.label)?12:24,children:(0,S.jsx)(c.Z.Item,{label:i("payment"),name:"payment_id",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(m.Z,{notFoundContent:D?(0,S.jsx)(h.Z,{size:"small"}):"no results",allowClear:!0,options:T,onSelect:function(e){var l=T.find((function(l){return l.value===e}));switch(l.label){case"Paypal":O.setFieldsValue({paypal_validate_ssl:!0,paypal_locale:C.Z.language,paypal_currency:{label:null===ne||void 0===ne?void 0:ne.title,value:null===ne||void 0===ne?void 0:ne.id}});break;case"Stripe":case"Razorpay":case"Paystack":case"FlutterWave":O.setFieldsValue({currency:null===ne||void 0===ne?void 0:ne.title});break;default:O.resetFields()}Q(l)}})})}),"Cash"===(null===J||void 0===J?void 0:J.label)||"Wallet"===(null===J||void 0===J?void 0:J.label)?"":(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(p.Z,{span:24,className:"d-flex justify-content-center mt-4 mb-5",children:function(e){switch(e){case"Paypal":return(0,S.jsx)(_.kD0,{size:80});case"Stripe":return(0,S.jsx)(k.K6C,{size:80});case"Razorpay":return(0,S.jsx)(k.r98,{size:80});case"Paystack":return(0,S.jsx)("img",{src:q.Z,alt:"img",width:"80",height:"80"});case"Flutterwave":return(0,S.jsx)(k.Bq1,{size:80});default:return null}}(null===J||void 0===J?void 0:J.label)}),"Paystack"===(null===J||void 0===J?void 0:J.label)?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("paystack.pk"),name:"paystack_pk",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(v.Z,{})})}),(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("paystack.sk"),name:"paystack_sk",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(v.Z,{})})})," ",(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("currency"),name:"currency",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(z.q,{placeholder:i("select.currency"),valuePropName:"label",defaultValue:{value:ne.id,label:ne.title},fetchOptions:function(){return P.Z.getAll().then((function(e){return e.data.filter((function(e){return e.active})).map((function(e){return{value:e.id,label:"".concat(e.title),key:e.id}}))}))}})})})]}):"Paypal"===(null===J||void 0===J?void 0:J.label)?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("paypal.mode"),name:"paypal_mode",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(m.Z,{options:[{value:"live",label:i("live")},{value:"sandbox",label:i("sandbox")}]})})}),(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("paypal.sandbox.client.id"),name:"paypal_sandbox_client_id",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(v.Z,{})})}),(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("paypal.sandbox.client.secret"),name:"paypal_sandbox_client_secret",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(v.Z,{})})}),(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("paypal.sandbox.app.id"),name:"paypal_sandbox_app_id",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(v.Z,{})})}),(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("paypal.live.client.id"),name:"paypal_live_client_id",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(v.Z,{})})}),(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("paypal.live.client.secret"),name:"paypal_live_client_secret",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(v.Z,{})})}),(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("paypal.live.app.id"),name:"paypal_live_app_id",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(v.Z,{})})}),(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("paypal.payment.action"),name:"paypal_payment_action",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(m.Z,{options:[{value:"Sale",label:i("sale")},{value:"Order",label:i("order")},{value:"Authorization",label:i("authorization")}]})})}),(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("paypal.currency"),name:"paypal_currency",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(z.q,{placeholder:i("select.currency"),valuePropName:"label",defaultValue:{value:ne.id,label:ne.title},fetchOptions:function(){return P.Z.getAll().then((function(e){return e.data.filter((function(e){return e.active})).map((function(e){return{value:e.id,label:"".concat(e.title),key:e.id}}))}))}})})}),(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("paypal.locale"),name:"paypal_locale",rules:[{required:!0,message:i("required")}],valuePropName:"value",children:(0,S.jsx)(m.Z,{placeholder:i("select.locale"),defaultValue:{label:null===(a=X.find((function(e){return e.locale===C.Z.language})))||void 0===a?void 0:a.title,value:C.Z.language},options:null===X||void 0===X?void 0:X.map((function(e){return{value:e.locale,label:e.locale}}))})})}),(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("paypal.validate.ssl"),name:"paypal_validate_ssl",valuePropName:"checked",children:(0,S.jsx)(x.Z,{defaultChecked:!0})})})]}):"Stripe"===(null===J||void 0===J?void 0:J.label)?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("stripe.pk"),name:"stripe_pk",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(v.Z,{})})}),(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("stripe.sk"),name:"stripe_sk",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(v.Z,{})})})," ",(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("currency"),name:"currency",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(z.q,{placeholder:i("select.currency"),valuePropName:"label",defaultValue:{value:ne.id,label:ne.title},fetchOptions:function(){return P.Z.getAll().then((function(e){return e.data.filter((function(e){return e.active})).map((function(e){return{value:e.id,label:"".concat(e.title),key:e.id}}))}))}})})})]}):"Razorpay"===(null===J||void 0===J?void 0:J.label)?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("razorpay.key"),name:"razorpay_key",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(v.Z,{})})}),(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("razorpay.secret"),name:"razorpay_secret",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(v.Z,{})})})," ",(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("currency"),name:"currency",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(z.q,{placeholder:i("select.currency"),valuePropName:"label",defaultValue:{value:ne.id,label:ne.title},fetchOptions:function(){return P.Z.getAll().then((function(e){return e.data.filter((function(e){return e.active})).map((function(e){return{value:e.id,label:"".concat(e.title),key:e.id}}))}))}})})})]}):"FlutterWave"===(null===J||void 0===J?void 0:J.label)?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("payload.title"),name:"title",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(v.Z,{})})}),(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("payload.description"),name:"description",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(v.Z,{})})}),(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("flw_pk"),name:"flw_pk",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(v.Z,{})})}),(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("flw_sk"),name:"flw_sk",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(v.Z,{})})})," ",(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("key"),name:"key",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(v.Z,{})})}),(0,S.jsx)(p.Z,{span:12,children:(0,S.jsx)(c.Z.Item,{label:i("currency"),name:"currency",rules:[{required:!0,message:i("required")}],children:(0,S.jsx)(z.q,{placeholder:i("select.currency"),valuePropName:"label",defaultValue:{value:ne.id,label:ne.title},fetchOptions:function(){return P.Z.getAll().then((function(e){return e.data.filter((function(e){return e.active})).map((function(e){return{value:e.id,label:"".concat(e.title),key:e.id}}))}))}})})}),(0,S.jsx)(p.Z,{span:6,children:(0,S.jsx)(c.Z.Item,{rules:[{required:!0}],label:i("logo"),children:(0,S.jsx)(N.Z,{type:"brands",imageList:ae,setImageList:re,form:O,multiple:!1})})})]}):null]})]}),(0,S.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,S.jsx)("div",{className:"pb-5",children:(0,S.jsx)(Z.Z,{type:"primary",htmlType:"submit",loading:W,disabled:W,children:i("submit")})})})]})})}}}]);