"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9228],{73431:function(n,t,e){var a=e(47313),o=e(39180),r=e(2717),i=e(28830),l=e(60535),u=e(46417);t.Z=function(){var n=(0,r.I0)(),t=(0,r.v9)((function(n){return n.formLang}),r.wU),e=t.languages,c=t.defaultLang;(0,a.useEffect)((function(){l.Z.getAllActive().then((function(t){var e=t.data;n((0,i.dc)(e)),n((0,i.mh)(e.find((function(n){return 1===n.default})).locale))}))}),[]);return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(o.ZP.Group,{value:c,onChange:function(t){var e=t.target.value;n((0,i.mh)(e))},className:"float-right",buttonStyle:"solid",children:null===e||void 0===e?void 0:e.map((function(n){return(0,u.jsx)(o.ZP.Button,{value:n.locale,children:n.title},n.id)}))})})}},97388:function(n,t,e){e.d(t,{Z:function(){return x}});var a=e(15861),o=e(29439),r=e(87757),i=e.n(r),l=e(47313),u=e(16609),c=e(97421),s=e.p+"static/media/pin.0e41858db80c699cd8a2.png",d=e(31881),f=e.n(d);function v(n){return g.apply(this,arguments)}function g(){return g=(0,a.Z)(i().mark((function n(t){var e,a,o=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>1&&void 0!==o[1]?o[1]:c.kr,a={latlng:"".concat(null===t||void 0===t?void 0:t.lat,",").concat(null===t||void 0===t?void 0:t.lng),key:e},n.abrupt("return",f().get("https://maps.googleapis.com/maps/api/geocode/json",{params:a}).then((function(n){var t;return null===(t=n.data.results[0])||void 0===t?void 0:t.formatted_address})).catch((function(n){return"not found"})));case 3:case"end":return n.stop()}}),n)}))),g.apply(this,arguments)}var m=e(5958),p=e(23560),h=e(24511),Z=e(46417);var x=(0,u.GoogleApiWrapper)({apiKey:c.kr})((function(n){var t=(0,l.useState)(),e=(0,o.Z)(t,2),r=e[0],d=e[1],f=(0,h.$)().t,g=function(){var t=(0,a.Z)(i().mark((function t(e,a,o){var r,l,u;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.latLng,l={lat:r.lat(),lng:r.lng()},n.setLocation(l),t.next=5,v(l,c.kr);case 5:u=t.sent,n.setAddress(u);case 7:case"end":return t.stop()}}),t)})));return function(n,e,a){return t.apply(this,arguments)}}(),x=function(){var t=(0,a.Z)(i().mark((function t(e){var a,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={lat:null===e||void 0===e?void 0:e.lat,lng:null===e||void 0===e?void 0:e.lng},n.setLocation(a),t.next=4,v(a,c.kr);case 4:o=t.sent,n.setAddress(o);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),b=function(){var n=(0,a.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,navigator.geolocation.getCurrentPosition((function(n){var t={lat:n.coords.latitude,lng:n.coords.longitude};d(t)}),(function(n){p.Am.warning(f("turn.on.gps"))}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(0,l.useEffect)((function(){b()}),[]);for(var j=[{lat:Number(n.location.lat)||0,lng:Number(n.location.lng)||0}],y=new n.google.maps.LatLngBounds,w=0;w<j.length;w++)y.extend(j[w]);return(0,Z.jsxs)("div",{className:"map-container",style:{height:400,width:"100%"},children:[(0,Z.jsx)("button",{className:"map-button",type:"button",onClick:function(){b(),r&&x(r)},children:(0,Z.jsx)(m.nDs,{})}),(0,Z.jsx)(u.Map,{cursor:"pointer",onClick:g,google:n.google,defaultZoom:12,zoom:10,className:"clickable",initialCenter:n.location,center:n.location,children:(0,Z.jsx)(u.Marker,{position:n.location,icon:{url:s,scaledSize:new n.google.maps.Size(32,32)},className:"marker"})})]})}))},17649:function(n,t,e){e.d(t,{Z:function(){return a}});e(97421);function a(n){if(null===n||void 0===n||!n.location)return{lat:47.4143302506288,lng:8.532059477976883};var t=n.location.split(", ");return{lat:Number(null===t||void 0===t?void 0:t[0]),lng:Number(null===t||void 0===t?void 0:t[1])}}},75336:function(n,t,e){e.d(t,{Z:function(){return r}});var a=e(93433),o=e(4942);function r(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title",r=n.map((function(n){return(0,o.Z)({},n.locale,""===t["".concat(e,"[").concat(n.locale,"]")]?void 0:t["".concat(e,"[").concat(n.locale,"]")])}));return Object.assign.apply(Object,[{}].concat((0,a.Z)(r)))}},24010:function(n,t,e){e.r(t);var a=e(1413),o=e(93433),r=e(4942),i=e(29439),l=e(47313),u=e(97890),c=e(23560),s=e(10976),d=e(77181),f=e(2717),v=e(90954),g=e(24511),m=e(73431),p=e(75336),h=e(44337),Z=e(16611),x=e(88551),b=e(46417);t.default=function(){var n=(0,g.$)().t,t=(0,f.v9)((function(n){return n.menu}),f.wU).activeMenu,e=(0,f.I0)(),j=s.Z.useForm(),y=(0,i.Z)(j,1)[0],w=(0,u.s0)(),k=(0,u.UO)().id,N=(0,l.useState)(!1),S=(0,i.Z)(N,2),_=S[0],L=S[1],C=(0,f.v9)((function(n){return n.formLang}),f.wU).languages;(0,l.useEffect)((function(){return function(){var n=y.getFieldsValue(!0);n.open_time=JSON.stringify(null===n||void 0===n?void 0:n.open_time),n.close_time=JSON.stringify(null===n||void 0===n?void 0:n.close_time),e((0,v.nc)({activeMenu:t,data:n}))}}),[]);var A=function(n){L(!0),h.Z.getById(n).then((function(n){var i,l=n.data,u=(0,a.Z)((0,a.Z)((0,a.Z)({},l),{},{mapCoordinates:{lat:Number(null===l||void 0===l?void 0:l.location.latitude),lng:Number(null===l||void 0===l?void 0:l.location.longitude)}},function(n){if(!n)return{};var t=n.translations,e=C.map((function(n){var e;return(0,r.Z)({},"title[".concat(n.locale,"]"),null===(e=t.find((function(t){return t.locale===n.locale})))||void 0===e?void 0:e.title)}));return Object.assign.apply(Object,[{}].concat((0,o.Z)(e)))}(l)),{},{address:null===(i=l.address)||void 0===i?void 0:i.address});e((0,v.nc)({activeMenu:t,data:u})),y.setFieldsValue((0,a.Z)({},u))})).finally((function(){e((0,v.A_)(t)),L(!1)}))};return(0,l.useEffect)((function(){t.refetch&&A(k)}),[t.refetch]),(0,b.jsx)(d.Z,{loading:_,title:n("edit.branch"),className:"h-100",extra:(0,b.jsx)(m.Z,{}),children:(0,b.jsx)(x.Z,{form:y,handleSubmit:function(o){var r={title:(0,p.Z)(C,o,"title"),address:{address:o.address,office:null,house:null,floor:null},location:{longitude:o.location.lng,latitude:o.location.lat}},i="seller/branch";return h.Z.update(k,r).then((function(){c.Am.success(n("successfully.updated")),(0,f.dC)((function(){e((0,v.ph)((0,a.Z)((0,a.Z)({},t),{},{nextUrl:i}))),e((0,Z._)({}))})),w("/".concat(i))}))}})})}},88551:function(n,t,e){e.d(t,{Z:function(){return x}});var a=e(1413),o=e(29439),r=e(4942),i=e(47313),l=e(10976),u=e(68197),c=e(59624),s=e(66672),d=e(59491),f=e(97388),v=e(24511),g=e(2717),m=e(17649),p=e(47168),h=e(97421),Z=e(46417);function x(n){var t,e,x=n.form,b=n.handleSubmit,j=(0,v.$)().t,y=(0,g.v9)((function(n){return n.menu}),g.wU).activeMenu,w=(0,g.v9)((function(n){return n.formLang}),g.wU),k=w.languages,N=w.defaultLang,S=(0,g.v9)((function(n){return n.globalSettings}),g.wU).settings,_=(0,g.v9)((function(n){return n.globalSettings.settings}),g.wU).google_map_key,L=(0,p.usePlacesWidget)({apiKey:_||h.kr,onPlaceSelected:function(n){var t={lat:null===n||void 0===n?void 0:n.geometry.location.lat(),lng:null===n||void 0===n?void 0:n.geometry.location.lng()};V(t),x.setFieldsValue((0,r.Z)({},"address[".concat(N,"]"),null===n||void 0===n?void 0:n.formatted_address))}}),C=L.ref,A=(0,i.useState)(!1),U=(0,o.Z)(A,2),F=U[0],O=U[1],M=(0,i.useState)(null!==(t=null===y||void 0===y||null===(e=y.data)||void 0===e?void 0:e.mapCoordinates)&&void 0!==t?t:(0,m.Z)(S)),I=(0,o.Z)(M,2),P=I[0],V=I[1];return(0,Z.jsxs)(l.Z,{name:"branch-form",layout:"vertical",onFinish:function(n){O(!0);var t=(0,a.Z)((0,a.Z)({},n),{},{location:P});b(t).finally((function(){return O(!1)}))},form:x,initialValues:(0,a.Z)({},y.data),className:"d-flex flex-column h-100",children:[(0,Z.jsxs)(u.Z,{gutter:12,children:[(0,Z.jsx)(c.Z,{span:12,children:k.map((function(n,t){return(0,Z.jsx)(l.Z.Item,{label:j("title"),name:"title[".concat(n.locale,"]"),rules:[{required:n.locale===N,message:j("required")}],hidden:n.locale!==N,children:(0,Z.jsx)(s.Z,{})},"title"+t)}))}),(0,Z.jsx)(c.Z,{span:12,children:(0,Z.jsx)(l.Z.Item,{label:j("address"),name:"address",rules:[{required:!0,message:j("required")}],children:(0,Z.jsx)("input",{className:"address-input",ref:C,placeholder:""})})}),(0,Z.jsx)(c.Z,{span:24,children:(0,Z.jsx)(f.Z,{location:P,setLocation:V,setAddress:function(n){return x.setFieldsValue({address:n})}})})]}),(0,Z.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,Z.jsx)("div",{className:"pb-5",children:(0,Z.jsx)(d.Z,{type:"primary",htmlType:"submit",loading:F,children:j("submit")})})})]})}}}]);