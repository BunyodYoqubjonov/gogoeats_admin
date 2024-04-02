"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9068],{20776:function(e,n,t){t.d(n,{o:function(){return p}});var r=t(1413),a=t(29439),i=t(45987),l=t(47313),o=t(84762),s=t(72652),u=t(12279),c=t.n(u),d=t(46417),m=["fetchOptions","refetch","debounceTimeout"],p=function(e){var n=e.fetchOptions,t=e.refetch,u=void 0!==t&&t,p=e.debounceTimeout,f=void 0===p?400:p,v=(0,i.Z)(e,m),h=(0,l.useState)(!1),Z=(0,a.Z)(h,2),g=Z[0],x=Z[1],j=(0,l.useState)([]),b=(0,a.Z)(j,2),y=b[0],w=b[1],_=(0,l.useMemo)((function(){return c()((function(e){w([]),x(!0),n(e).then((function(e){w(e),x(!1)}))}),f)}),[]);return(0,d.jsx)(o.Z,(0,r.Z)({showSearch:!0,labelInValue:!0,filterTreeNode:function(e,n){var t;return null===(t=n.label)||void 0===t?void 0:t.localeCompare(e)},treeLine:!0,onSearch:function(e){return _(e)},treeData:g?[]:y,treeDefaultExpandAll:!0,onFocus:function(){y.length&&!u||(x(!0),n().then((function(e){w(e),x(!1)})))},notFoundContent:g?(0,d.jsx)(s.Z,{size:"small"}):"no results"},v))}},19107:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(15861),a=t(87757),i=t.n(a),l=t(31881),o=t.n(l),s=t(97421);function u(e){return c.apply(this,arguments)}function c(){return c=(0,r.Z)(i().mark((function e(n){var t,r,a=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:s.kr,r={address:n,key:t},e.abrupt("return",o().get("https://maps.googleapis.com/maps/api/geocode/json",{params:r}).then((function(e){return e.data.results[0]})).catch((function(e){return"not found"})));case 3:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}},30008:function(e,n,t){t.d(n,{Z:function(){return J}});var r=t(1413),a=t(29439),i=t(47313),l=t(10976),o=t(45705),s=t(59491),u=t(97890),c=t(2717),d=t(90954),m=t(49067),p=t(24511),f=t(17649),v=t(4942),h=t(93433),Z=t(15861),g=t(87757),x=t.n(g),j=t(84762),b=t(66204),y=t(68197),w=t(59624),_=t(77181),k=t(66672),I=t(86345),P=t(16124),q=t(46155),S=t(74294),F=t(52421),O=t(97388),E=t(5764),N=t(98447),V=t(13622),C=t(61197),H=t(30763),L=t(49986),D=t(74551),M=t(45005),R=t(20776),z=t(97421),A=t(52838),Y=t(19107),B=t(46417),T=j.Z.SHOW_ALL,U=function(e){var n=e.backImage,t=e.setBackImage,r=e.logoImage,o=e.setLogoImage,u=e.form,d=e.user,m=e.setLocation,f=e.location,g=(0,p.$)().t,j=l.Z.useWatch("categories",u),U=(0,i.useState)(null),J=(0,a.Z)(U,2),W=J[0],$=J[1],K=(0,i.useState)(null),G=(0,a.Z)(K,2),Q=G[0],X=G[1],ee=(0,i.useState)(null),ne=(0,a.Z)(ee,2),te=ne[0],re=ne[1],ae=(0,c.v9)((function(e){return e.formLang}),c.wU),ie=ae.defaultLang,le=ae.languages,oe=(0,i.useState)(""),se=(0,a.Z)(oe,2),ue=se[0],ce=se[1],de=(0,A.Z)({apiKey:z.kr,libraries:["places","geocode"]}),me=de.placePredictions,pe=de.getPlacePredictions,fe=de.isPlacePredictionsLoading;function ve(){return(ve=(0,Z.Z)(x().mark((function e(n){var t;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:n,roles:"user","empty-shop":1},re(!1),e.abrupt("return",L.Z.search(t).then((function(e){return e.data.map((function(e){return{label:e.firstname+" "+(e.lastname||""),value:e.id}}))})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(){return(he=(0,Z.Z)(x().mark((function e(n){var t;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:n,type:"shop",active:1,lang:ie},re(!1),e.abrupt("return",H.Z.getAll(t).then((function(e){return e.data.map((function(e){var n,t;return{label:(null===(n=e.translation)||void 0===n?void 0:n.title)||"no name",value:e.id,disabled:0===(null===(t=e.children)||void 0===t?void 0:t.length),children:e.children.map((function(n){var t,r;return{label:null===(t=n.translation)||void 0===t?void 0:t.title,value:n.id,parent:{label:(null===(r=e.translation)||void 0===r?void 0:r.title)||"no name",value:e.id}}}))}}))})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ze(){return(Ze=(0,Z.Z)(x().mark((function e(n){var t;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return re(!1),t={search:n},e.abrupt("return",C.Z.getAll(t).then((function(e){return e.data.map((function(e){var n;return{label:(null===(n=e.translation)||void 0===n?void 0:n.title)||"no name",value:e.id}}))})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ge=function(){$(!0),re(!0)},xe=function(){$(!1),X(!1)},je=function(e){if(e.children)if(j.some((function(n){return n.value===e.value}))){var n=j.filter((function(n){return n.value!==e.value})),t=n.filter((function(n){return!e.children.some((function(e){return e.value===n.value}))}));u.setFieldsValue({categories:t})}else u.setFieldsValue({categories:j.concat([{label:e.label,value:e.value}].concat((0,h.Z)(e.children.map((function(e){return{label:e.label,value:e.value}})))))});else null!==j&&void 0!==j&&j.some((function(n){return n.value===e.value}))?u.setFieldsValue({categories:j.filter((function(n){return n.value!==e.value}))}):u.setFieldsValue({categories:j.concat([e.parent,{label:e.label,value:e.value}])})};return(0,B.jsxs)(y.Z,{gutter:12,children:[(0,B.jsx)(w.Z,{span:24,children:(0,B.jsx)(_.Z,{children:(0,B.jsxs)(y.Z,{gutter:12,children:[(0,B.jsx)(w.Z,{span:4,children:(0,B.jsx)(l.Z.Item,{label:g("logo.image"),name:"logo_img",rules:[{validator:function(e,n){return 0===(null===r||void 0===r?void 0:r.length)?Promise.reject(new Error(g("required"))):Promise.resolve()}}],children:(0,B.jsx)(E.Z,{type:"shops/logo",imageList:r,setImageList:o,form:u,multiple:!1,name:"logo_img"})})}),(0,B.jsx)(w.Z,{span:4,children:(0,B.jsx)(l.Z.Item,{label:g("background.image"),name:"background_img",rules:[{validator:function(e,t){return 0===(null===n||void 0===n?void 0:n.length)?Promise.reject(new Error(g("required"))):Promise.resolve()}}],children:(0,B.jsx)(E.Z,{type:"shops/background",imageList:n,setImageList:t,form:u,multiple:!1,name:"background_img"})})}),(0,B.jsx)(w.Z,{span:10,children:(0,B.jsx)(l.Z.Item,{label:g("status.note"),name:"status_note",rules:[{validator:function(e,n){return n?n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(g("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.length)<5?Promise.reject(new Error(g("must.be.at.least.5"))):Promise.resolve():Promise.reject(new Error(g("required")))}}],children:(0,B.jsx)(F.Z,{rows:4})})}),(0,B.jsx)(w.Z,{span:4,children:(0,B.jsx)(l.Z.Item,{name:"status",label:g("status"),children:(0,B.jsx)(k.Z,{disabled:!0})})}),(0,B.jsx)(w.Z,{span:2,children:(0,B.jsx)(l.Z.Item,{label:g("open"),name:"open",valuePropName:"checked",children:(0,B.jsx)(I.Z,{disabled:!0})})})]})})}),(0,B.jsx)(w.Z,{span:24,children:(0,B.jsx)(_.Z,{title:g("general"),children:(0,B.jsxs)(y.Z,{gutter:12,children:[(0,B.jsx)(w.Z,{span:12,children:(0,B.jsxs)(y.Z,{gutter:12,children:[(0,B.jsx)(w.Z,{span:24,children:le.map((function(e,n){return(0,B.jsx)(l.Z.Item,{label:g("title"),name:"title[".concat(e.locale,"]"),rules:[{validator:function(n,t){return t||(null===e||void 0===e?void 0:e.locale)!==ie?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(g("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.length)<2?Promise.reject(new Error(g("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(g("required")))}}],hidden:e.locale!==ie,children:(0,B.jsx)(k.Z,{})},"title"+n)}))}),(0,B.jsx)(w.Z,{span:24,children:(0,B.jsx)(l.Z.Item,{label:g("phone"),name:"phone",rules:[{required:!0,message:g("required")}],children:(0,B.jsx)(P.Z,{min:0,className:"w-100"})})})]})}),(0,B.jsx)(w.Z,{span:12,children:le.map((function(e,n){return(0,B.jsx)(l.Z.Item,{label:g("description"),name:"description[".concat(e.locale,"]"),rules:[{validator:function(n,t){return t||(null===e||void 0===e?void 0:e.locale)!==ie?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(g("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.length)<5?Promise.reject(new Error(g("must.be.at.least.5"))):Promise.resolve():Promise.reject(new Error(g("required")))}}],hidden:e.locale!==ie,children:(0,B.jsx)(F.Z,{rows:4})},"desc"+n)}))}),(0,B.jsx)(w.Z,{span:8,children:(0,B.jsx)(l.Z.Item,{label:g("shop.tags"),name:"tags",rules:[{required:!0,message:g("required")}],children:(0,B.jsx)(V.R,{mode:"multiple",fetchOptions:function(e){return Ze.apply(this,arguments)},refetch:te})})}),(0,B.jsx)(w.Z,{span:8,children:(0,B.jsx)(l.Z.Item,{label:g("seller"),name:"user",rules:[{required:!0,message:g("required")}],children:(0,B.jsx)(V.R,{disabled:!d,fetchOptions:function(e){return ve.apply(this,arguments)},refetch:te,dropdownRender:function(e){return(0,B.jsxs)(B.Fragment,{children:[e,(0,B.jsx)(q.Z,{style:{margin:"8px 0"}}),(0,B.jsx)(s.Z,{className:"w-100",icon:(0,B.jsx)(N.Z,{}),onClick:ge,children:g("add.user")})]})}})})}),(0,B.jsx)(w.Z,{span:8,children:(0,B.jsx)(l.Z.Item,{label:g("categories"),name:"categories",rules:[{required:!0,message:g("required")}],children:(0,B.jsx)(R.o,{treeCheckable:!0,tagRender:function(e){var n=e.label,t=e.onClose;return(0,B.jsx)(b.Z,{onMouseDown:function(e){e.preventDefault(),e.stopPropagation()},onClose:t,style:{marginRight:3},children:n})},showCheckedStrategy:T,treeCheckStrictly:!0,refetch:!0,onSelect:function(e,n){return je(n)},onDeselect:function(e,n){return je(n)},fetchOptions:function(e){return he.apply(this,arguments)}})})})]})})}),(0,B.jsx)(w.Z,{span:8,children:(0,B.jsx)(_.Z,{title:g("delivery"),children:(0,B.jsxs)(y.Z,{gutter:8,children:[(0,B.jsx)(w.Z,{span:12,children:(0,B.jsx)(l.Z.Item,{name:"price",label:g("min.price"),rules:[{required:!0,message:g("required")}],children:(0,B.jsx)(P.Z,{min:0,className:"w-100"})})}),(0,B.jsx)(w.Z,{span:12,children:(0,B.jsx)(l.Z.Item,{name:"price_per_km",label:g("price.per.km"),rules:[{required:!0,message:g("required")}],children:(0,B.jsx)(P.Z,{min:0,className:"w-100"})})})]})})}),(0,B.jsx)(w.Z,{span:8,children:(0,B.jsx)(_.Z,{title:g("delivery.time"),children:(0,B.jsxs)(y.Z,{gutter:12,children:[(0,B.jsx)(w.Z,{span:12,children:(0,B.jsx)(l.Z.Item,{name:"delivery_time_type",label:g("delivery_time_type"),rules:[{required:!0,message:g("required")}],children:(0,B.jsxs)(S.Z,{className:"w-100",children:[(0,B.jsx)(S.Z.Option,{value:"minute",label:g("minutes")}),(0,B.jsx)(S.Z.Option,{value:"hour",label:g("hour")})]})})}),(0,B.jsx)(w.Z,{span:12,children:(0,B.jsx)(l.Z.Item,{name:"delivery_time_from",label:g("delivery_time_from"),rules:[{required:!0,message:g("required")}],children:(0,B.jsx)(P.Z,{min:0,className:"w-100"})})}),(0,B.jsx)(w.Z,{span:12,children:(0,B.jsx)(l.Z.Item,{name:"delivery_time_to",label:g("delivery_time_to"),rules:[{required:!0,message:g("required")}],children:(0,B.jsx)(P.Z,{min:0,className:"w-100"})})})]})})}),(0,B.jsx)(w.Z,{span:8,children:(0,B.jsx)(_.Z,{title:g("order.info"),children:(0,B.jsxs)(y.Z,{gutter:12,children:[(0,B.jsx)(w.Z,{span:12,children:(0,B.jsx)(l.Z.Item,{label:g("min.amount"),name:"min_amount",rules:[{required:!0,message:g("required")}],children:(0,B.jsx)(P.Z,{min:0,className:"w-100"})})}),(0,B.jsx)(w.Z,{span:12,children:(0,B.jsx)(l.Z.Item,{label:g("tax"),name:"tax",rules:[{required:!0,message:g("required")}],children:(0,B.jsx)(P.Z,{min:0,max:100,addonAfter:"%",className:"w-100"})})}),(0,B.jsx)(w.Z,{span:12,children:(0,B.jsx)(l.Z.Item,{label:g("admin.comission"),name:"percentage",rules:[{required:!0,message:g("required")}],children:(0,B.jsx)(P.Z,{min:0,max:100,className:"w-100",addonAfter:"%"})})})]})})}),(0,B.jsx)(w.Z,{span:24,children:(0,B.jsx)(_.Z,{title:g("address"),children:(0,B.jsxs)(y.Z,{gutter:12,children:[(0,B.jsx)(w.Z,{span:12,children:le.map((function(e,n){return(0,B.jsx)(l.Z.Item,{label:g("address"),name:"address[".concat(e.locale,"]"),rules:[{required:e.locale===ie,message:g("required")}],hidden:e.locale!==ie,children:(0,B.jsx)(S.Z,{allowClear:!0,searchValue:ue,showSearch:!0,autoClearSearchValue:!0,loading:fe,options:null===me||void 0===me?void 0:me.map((function(e){return{label:e.description,value:e.description}})),onSearch:function(e){ce(e),e.length>0&&pe({input:e})},onSelect:function(){var e=(0,Z.Z)(x().mark((function e(n){var t;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Y.Z)(n);case 2:t=e.sent,m({lat:null===t||void 0===t?void 0:t.geometry.location.lat,lng:null===t||void 0===t?void 0:t.geometry.location.lng});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})},"address"+n)}))}),(0,B.jsx)(w.Z,{span:24,children:(0,B.jsx)(O.Z,{location:f,setLocation:m,setAddress:function(e){return u.setFieldsValue((0,v.Z)({},"address[".concat(ie,"]"),e))}})})]})})}),W&&(0,B.jsx)(D.Z,{visible:W,handleCancel:function(){return xe()}}),Q&&(0,B.jsx)(M.Z,{visible:Q,handleCancel:function(){return xe()}})]})},J=function(e){var n,t,v,h,Z,g,x,j,b,y=e.next,w=e.action_type,_=void 0===w?"":w,k=e.user,I=(0,p.$)().t,P=l.Z.useForm(),q=(0,a.Z)(P,1)[0],S=(0,u.s0)(),F=(0,c.I0)(),O=(0,u.UO)().uuid,E=(0,c.v9)((function(e){return e.menu}),c.wU).activeMenu,N=(0,c.v9)((function(e){return e.globalSettings}),c.wU).settings,V=(0,i.useState)(null!==E&&void 0!==E&&null!==(n=E.data)&&void 0!==n&&n.location?{lat:parseFloat(null===E||void 0===E||null===(t=E.data)||void 0===t||null===(v=t.location)||void 0===v?void 0:v.latitude),lng:parseFloat(null===E||void 0===E||null===(h=E.data)||void 0===h||null===(Z=h.location)||void 0===Z?void 0:Z.longitude)}:(0,f.Z)(N)),C=(0,a.Z)(V,2),H=C[0],L=C[1],D=(0,i.useState)(!1),M=(0,a.Z)(D,2),R=M[0],z=M[1],A=(0,i.useState)(null!==(g=E.data)&&void 0!==g&&g.logo_img?[null===(x=E.data)||void 0===x?void 0:x.logo_img]:[]),Y=(0,a.Z)(A,2),T=Y[0],J=Y[1],W=(0,i.useState)(null!==(j=E.data)&&void 0!==j&&j.background_img?[null===(b=E.data)||void 0===b?void 0:b.background_img]:[]),$=(0,a.Z)(W,2),K=$[0],G=$[1];(0,i.useEffect)((function(){return function(){var e=q.getFieldsValue(!0);e.open_time=JSON.stringify(null===e||void 0===e?void 0:e.open_time),e.close_time=JSON.stringify(null===e||void 0===e?void 0:e.close_time),F((0,d.nc)({activeMenu:E,data:(0,r.Z)((0,r.Z)({},E.data),e)}))}}),[]);return(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)(l.Z,{form:q,name:"basic",layout:"vertical",onFinish:function(e){var n,t,a;z(!0);var i=(0,r.Z)((0,r.Z)({},e),{},{"images[0]":null===(n=T[0])||void 0===n?void 0:n.name,"images[1]":null===(t=K[0])||void 0===t?void 0:t.name,delivery_time_type:e.delivery_time_type,delivery_time_to:e.delivery_time_to,delivery_time_from:e.delivery_time_from,categories:e.categories.map((function(e){return e.value})),tags:null===e||void 0===e||null===(a=e.tags)||void 0===a?void 0:a.map((function(e){return e.value})),user_id:e.user.value,open:void 0,"location[latitude]":H.lat,"location[longitude]":H.lng,user:void 0,delivery_time:0});"edit"===_?function(e,n){m.Z.update(O,n).then((function(){F((0,d.nc)({activeMenu:E,data:e})),y()})).catch((function(e){return console.error(e.response.data.params)})).finally((function(){return z(!1)}))}(e,i):function(e,n){m.Z.create(n).then((function(n){var t=n.data;F((0,d.SS)({id:"shop-".concat(t.uuid),url:"shop/".concat(t.uuid),name:I("add.shop"),data:(0,r.Z)((0,r.Z)({},e),{},{id:null===t||void 0===t?void 0:t.id,seller:null===t||void 0===t?void 0:t.seller}),refetch:!1})),S("/shop/".concat(t.uuid,"?step=1"))})).catch((function(e){return console.error(e.response.data.params)})).finally((function(){return z(!1)}))}(e,i)},initialValues:(0,r.Z)({open:!1,status:"new"},E.data),children:[(0,B.jsx)(U,{form:q,user:k,backImage:K,setBackImage:G,logoImage:T,setLogoImage:J,location:H,setLocation:L}),(0,B.jsx)(o.Z,{children:(0,B.jsx)(s.Z,{type:"primary",htmlType:"submit",loading:R,children:I("next")})})]})})}},20131:function(e,n,t){var r=t(29439),a=t(47313),i=t(51282),l=t(70816),o=t.n(l),s=t(78790),u=t(49682),c=t(97890),d=t(21429),m=t(22899),p=t(10976),f=t(46417);n.Z=function(e){var n=e.next,t=e.prev,l=p.Z.useForm(),v=(0,r.Z)(l,1)[0],h=(0,a.useState)([]),Z=(0,r.Z)(h,2),g=Z[0],x=Z[1],j=(0,a.useState)(new Array(7).fill(!1)),b=(0,r.Z)(j,2),y=b[0],w=b[1],_=(0,a.useState)(!1),k=(0,r.Z)(_,2),I=k[0],P=k[1],q=(0,a.useState)(!1),S=(0,r.Z)(q,2),F=S[0],O=S[1],E=(0,c.UO)().uuid;return(0,a.useEffect)((function(){return v.setFieldsValue({working_days:d.P}),E&&(O(!0),u.Z.getById(E).then((function(e){x(e.data.closed_dates.filter((function(e){return e.day>o()(new Date).format("YYYY-MM-DD")})).map((function(e){return new Date(e.day)})))})),s.Z.getById(E).then((function(e){w(0!==e.data.dates.length?e.data.dates.map((function(e){return e.disabled})):[]),0!==e.data.dates.length&&v.setFieldsValue({working_days:e.data.dates.map((function(e){return{title:e.day,from:o()(e.from,"HH:mm:ss"),to:o()(e.to,"HH:mm:ss"),disabled:Boolean(e.disabled)}}))})})).finally((function(){return O(!1)}))),function(){O(!1),P(!1)}}),[]),(0,f.jsx)(f.Fragment,{children:F?(0,f.jsx)(i.Z,{}):(0,f.jsx)(m.Z,{onFinish:function(e){P(!0);var t={dates:g?g.map((function(e){return o()(e).format("YYYY-MM-DD")})):void 0},r={dates:e.working_days.map((function(e){return{day:e.title,from:o()(e.from?e.from:"00").format("HH-mm"),to:o()(e.to?e.to:"00").format("HH-mm"),disabled:e.disabled}}))};u.Z.update(E,t).then((function(){n()})).finally((function(){return P(!1)})),0!==e.working_days.length&&s.Z.update(E,r).then((function(){n()})).finally((function(){return P(!1)}))},prev:t,form:v,lines:y,loadingBtn:I,days:g,setDays:x,setLines:w,weeks:d.P})})}},98447:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(1413),a=t(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"}}]},name:"appstore",theme:"outlined"},l=t(17469),o=function(e,n){return a.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};o.displayName="AppstoreOutlined";var s=a.forwardRef(o)},25050:function(e,n,t){var r=t(87462),a=t(47313),i=t(99096),l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},o=i.Z.TimePicker,s=i.Z.RangePicker,u=a.forwardRef((function(e,n){return a.createElement(s,(0,r.Z)({},e,{dropdownClassName:e.popupClassName,picker:"time",mode:void 0,ref:n}))})),c=a.forwardRef((function(e,n){var t=e.addon,i=e.renderExtraFooter,s=e.popupClassName,u=l(e,["addon","renderExtraFooter","popupClassName"]),c=a.useMemo((function(){return i||(t||void 0)}),[t,i]);return a.createElement(o,(0,r.Z)({},u,{dropdownClassName:s,mode:void 0,ref:n,renderExtraFooter:c}))}));c.displayName="TimePicker",c.RangePicker=u,n.Z=c}}]);