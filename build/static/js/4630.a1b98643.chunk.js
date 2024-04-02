"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[4630],{13945:function(e,n,l){function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}l.d(n,{Z:function(){return i}})},84630:function(e,n,l){l.r(n),l.d(n,{default:function(){return F}});var i=l(1413),t=l(29439),d=l(47313),o=l(45705),a=l(26824),r=l(66204),u=l(59491),s=l(77181),c=l(78508),v=l(2717),h=l(90954),m=l(24511),f=l(33175),x=l(80314),p=l(13945),Z=l(12019),j=l(31741),g=l(9274),b=l(83371),w=l(46417);function y(e){var n,l,i,t,d,o,a,r,s,c,v=e.data,h=e.handleClose,f=(0,m.$)().t;return(0,w.jsx)(g.Z,{title:f("request.details"),visible:!!v,onCancel:h,footer:(0,w.jsx)(u.Z,{type:"default",onClick:h,children:f("cancel")}),children:(0,w.jsxs)(b.Z,{bordered:!0,children:[(0,w.jsx)(b.Z.Item,{span:3,label:f("id"),children:null===v||void 0===v?void 0:v.id}),(0,w.jsx)(b.Z.Item,{span:3,label:f("firstname"),children:f(null===v||void 0===v||null===(n=v.model)||void 0===n?void 0:n.firstname)}),(0,w.jsx)(b.Z.Item,{span:3,label:f("lastname"),children:f(null===v||void 0===v||null===(l=v.model)||void 0===l?void 0:l.lastname)}),(0,w.jsxs)(b.Z.Item,{span:3,label:f("car"),children:[f(null===v||void 0===v||null===(i=v.data)||void 0===i?void 0:i.brand)," ",f(null===v||void 0===v||null===(t=v.data)||void 0===t?void 0:t.model)]}),(0,w.jsx)(b.Z.Item,{span:3,label:f("car.number"),children:f(null===v||void 0===v||null===(d=v.data)||void 0===d?void 0:d.number)}),(0,w.jsx)(b.Z.Item,{span:3,label:f("color"),children:f(null===v||void 0===v||null===(o=v.data)||void 0===o?void 0:o.color)}),(0,w.jsxs)(b.Z.Item,{span:3,label:f("height"),children:[f(null===v||void 0===v||null===(a=v.data)||void 0===a?void 0:a.height),"  ",f("m")]}),(0,w.jsxs)(b.Z.Item,{span:3,label:f("width"),children:[f(null===v||void 0===v||null===(r=v.data)||void 0===r?void 0:r.width),"  ",f("m")]}),(0,w.jsx)(b.Z.Item,{span:3,label:f("status"),children:null!==v&&void 0!==v&&null!==(s=v.data)&&void 0!==s&&s.online?f("online"):f("offline")}),(0,w.jsx)(b.Z.Item,{span:3,label:f("fuel"),children:f(null===v||void 0===v||null===(c=v.data)||void 0===c?void 0:c.type_of_technique)})]})})}var C=l(10976),I=l(68197),_=l(59624),k=l(74294),S=l(66672),P=["pending","approved","canceled"];function q(e){var n=e.data,l=e.handleClose,i=e.handleChange,o=(0,m.$)().t,a=C.Z.useForm(),r=(0,t.Z)(a,1)[0],s=(0,d.useState)(!1),c=(0,t.Z)(s,2),v=c[0],h=c[1],f=(0,d.useState)(null===n||void 0===n?void 0:n.status),x=(0,t.Z)(f,2),p=x[0],Z=x[1];return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(g.Z,{title:o("status.change"),visible:!!n,onCancel:l,footer:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u.Z,{type:"default",onClick:l,children:o("cancel")}),(0,w.jsx)(u.Z,{type:"primary",onClick:function(){return r.submit()},loading:v,children:o("save")})]}),children:(0,w.jsx)(C.Z,{form:r,layout:"vertical",onFinish:function(e){h(!0),i(null===n||void 0===n?void 0:n.id,e).final((function(){return h(!1)}))},initialValues:{status:null===n||void 0===n?void 0:n.status},children:(0,w.jsx)(I.Z,{gutter:12,children:(0,w.jsxs)(_.Z,{span:24,children:[(0,w.jsx)(C.Z.Item,{label:o("status"),name:"status",rules:[{required:!0,message:o("required")}],children:(0,w.jsx)(k.Z,{onChange:function(e){return Z(e)},children:P.map((function(e,n){return(0,w.jsx)(k.Z.Option,{value:e,children:o(e)},e+n)}))})}),"canceled"===p?(0,w.jsx)(C.Z.Item,{name:"status_note",label:o("note"),rules:[{validator:function(e,n){return n?n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(o("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<2?Promise.reject(new Error(o("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(o("required")))}}],children:(0,w.jsx)(S.Z.TextArea,{maxLength:250,showCount:!0})}):""]})})})})})}var A=l(14349),E=l(23560);function F(){var e=(0,v.I0)(),n=(0,m.$)().t,l=(0,v.v9)((function(e){return e.menu}),v.wU).activeMenu,g=(0,v.v9)((function(e){return e.deliverymanRequest}),v.wU),b=g.deliverymanRequestData,C=g.meta,I=g.loading,_=(0,d.useState)(null),k=(0,t.Z)(_,2),S=k[0],P=k[1],F=(0,d.useState)(null),R=(0,t.Z)(F,2),$=R[0],z=R[1],K=(0,d.useState)(null),M=(0,t.Z)(K,2),U=M[0],D=M[1],L=l.data,N={perPage:null===L||void 0===L?void 0:L.perPage,page:null===L||void 0===L?void 0:L.page,search:null===L||void 0===L?void 0:L.search,columns:null===L||void 0===L?void 0:L.columns};(0,x.Z)((function(){e((0,f.A)(N))}),[null===l||void 0===l?void 0:l.data]),(0,d.useEffect)((function(){null!==l&&void 0!==l&&l.refetch&&(e((0,f.A)(N)),e((0,h.A_)(l)))}),[null===l||void 0===l?void 0:l.refetch]);var O={selectedRowKeys:S,onChange:function(e){P(e)}};var T=[{title:n("id"),dataIndex:"id",key:"id",is_show:!0},{title:n("name"),dataIndex:"name",key:"name",is_show:!0,render:function(e,n){var l,i;return(null===n||void 0===n||null===(l=n.model)||void 0===l?void 0:l.firstname)+" "+(null===n||void 0===n||null===(i=n.model)||void 0===i?void 0:i.lastname)}},{title:n("delivery.man.setting"),dataIndex:"setting",key:"setting",is_show:!0,render:function(e,l){var i,t,d,a;return(0,w.jsx)(o.Z,{children:(0,w.jsxs)("span",{children:[n("brand"),": ",null===l||void 0===l||null===(i=l.data)||void 0===i?void 0:i.brand,(0,w.jsx)("br",{}),n("model"),": ",null===l||void 0===l||null===(t=l.data)||void 0===t?void 0:t.model,(0,w.jsx)("br",{}),n("number"),": ",null===l||void 0===l||null===(d=l.data)||void 0===d?void 0:d.number,(0,w.jsx)("br",{}),n("color"),": ",null===l||void 0===l||null===(a=l.data)||void 0===a?void 0:a.color]})})}},{title:n("image"),dataIndex:"image",key:"image",is_show:!0,render:function(e,n){var l;return(0,w.jsx)(a.Z,{src:(null===n||void 0===n||null===(l=n.data)||void 0===l?void 0:l["images[0]"])||"https://via.placeholder.com/100",alt:"img",width:100,className:"rounded",preview:!0,placeholder:!0})}},{title:n("status"),dataIndex:"status",key:"status",is_show:!0,render:function(e,l){return(0,w.jsxs)("div",{children:["pending"===e?(0,w.jsx)(r.Z,{color:"blue",children:n(e)}):"canceled"===e?(0,w.jsx)(r.Z,{color:"error",children:n(e)}):(0,w.jsx)(r.Z,{color:"cyan",children:n(e)}),l.deleted_at?"":(0,w.jsx)(Z.Z,{onClick:function(){return D(l)}})]})}},{title:n("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,n){return(0,w.jsx)(o.Z,{children:(0,w.jsx)(u.Z,{icon:(0,w.jsx)(j.Z,{}),onClick:function(e){e.stopPropagation(),z(n)}})})}}];return(0,w.jsxs)(s.Z,{title:n("deliveryman.request"),children:[(0,w.jsx)(c.Z,{scroll:{x:!0},rowSelection:O,columns:null===T||void 0===T?void 0:T.filter((function(e){return null===e||void 0===e?void 0:e.is_show})),dataSource:b,pagination:{pageSize:null===C||void 0===C?void 0:C.perPage,total:null===C||void 0===C?void 0:C.total,current:null===L||void 0===L?void 0:L.page,page:(null===L||void 0===L?void 0:L.page)||1,defaultCurrent:null===L||void 0===L?void 0:L.page},onChange:function(n,t,d){var o=n.pageSize,a=n.current,r=d.field,u=d.order,s=(0,p.Z)(u);e((0,h.nc)({activeMenu:l,data:(0,i.Z)((0,i.Z)({},null===l||void 0===l?void 0:l.data),{},{perPage:o,page:a,column:r,sort:s})}))},rowKey:function(e){return null===e||void 0===e?void 0:e.id},loading:I}),$?(0,w.jsx)(y,{data:$,handleClose:function(){return z(null)}}):null,U?(0,w.jsx)(q,{data:U,handleChange:function(i,t){var d={status_note:null===t||void 0===t?void 0:t.status_note,status:null===t||void 0===t?void 0:t.status};return A.Z.changeStatus(i,d).then((function(){D(null),E.Am.success(n("successfully.updated")),e((0,f.A)(N)),e((0,h.A_)(l))}))},handleClose:function(){return D(null)}}):null]})}}}]);