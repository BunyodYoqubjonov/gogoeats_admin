"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6341],{53233:function(e,n,t){var i=t(1413),a=t(29439),r=t(47313),l=t(56140),o=t(67251),d=t(45705),s=t(86345),c=t(78267),u=t(37388),f=t(59491),h=t(99587),v=t(24511),x=t(46417),Z=l.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,l=e.setColumns,m=e.style,p=e.size,j=void 0===p?"":p,g=e.iconOnly,b=(0,v.$)().t,_=(0,r.useState)(!1),w=(0,a.Z)(_,2),y=w[0],C=w[1],z=(0,x.jsx)(o.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,x.jsx)(o.Z.Item,{children:(0,x.jsxs)(d.Z,{className:"d-flex justify-content-between",children:[(0,x.jsx)(Z,{children:e.title}),(0,x.jsx)(s.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));l(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,x.jsx)(c.Z,{overlay:z,trigger:["click"],onVisibleChange:function(e){C(e)},visible:y,children:(0,x.jsx)(u.Z,{title:b("change.columns"),children:(0,x.jsx)(f.Z,{style:(0,i.Z)({},m),size:j,icon:(0,x.jsx)(h.Z,{}),children:g?null:b("Columns")})})})}},41481:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(1413),a=t(29439),r=t(45987),l=t(47313),o=t(66672),d=t(16031),s=t(40765),c=t(46417),u=["handleChange","defaultValue","resetSearch"];function f(e){var n=e.handleChange,t=e.defaultValue,f=e.resetSearch,h=(0,r.Z)(e,u),v=(0,l.useState)(t),x=(0,a.Z)(v,2),Z=x[0],m=x[1],p=(0,l.useMemo)((function(){return(0,d.debounce)((function(e){n(e)}),800)}),[n]);return(0,l.useEffect)((function(){m(t)}),[f,t]),(0,c.jsx)(o.Z,(0,i.Z)({value:Z,onChange:function(e){m(e.target.value),p(e.target.value)},prefix:(0,c.jsx)(s.Z,{})},h))}},84017:function(e,n,t){function i(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$";if(!e)return"0";var t=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return n+" "+t}t.d(n,{Z:function(){return i}})},86067:function(e,n,t){var i=t(29439),a=t(9274),r=t(59491),l=t(72652),o=t(83371),d=t(26824),s=t(84017),c=(t(70816),t(47313)),u=t(24511),f=t(98967),h=t(46417);n.Z=function(e){var n,t,v=e.id,x=e.onClose,Z=(0,u.$)().t,m=(0,c.useState)(!1),p=(0,i.Z)(m,2),j=p[0],g=p[1],b=(0,c.useState)(null),_=(0,i.Z)(b,2),w=_[0],y=_[1],C=(0,c.useCallback)((function(){g(!0),v&&f.Z.getById(v).then((function(e){y(e.data)})).finally((function(){g(!1)}))}),[v]);return(0,c.useEffect)((function(){C()}),[v,C]),(0,h.jsx)(a.Z,{visible:!!v,title:Z("ad.detail"),onCancel:x,footer:[(0,h.jsx)(r.Z,{onClick:x,children:Z("close")})],children:j?(0,h.jsx)("div",{className:"flex justify-content-center my-6",children:(0,h.jsx)(l.Z,{})}):(0,h.jsxs)(o.Z,{bordered:!0,children:[(0,h.jsx)(o.Z.Item,{span:3,label:Z("title"),children:null===w||void 0===w||null===(n=w.translation)||void 0===n?void 0:n.title}),(0,h.jsx)(o.Z.Item,{span:3,label:Z("price"),children:(0,s.Z)(null===w||void 0===w?void 0:w.price)}),(0,h.jsxs)(o.Z.Item,{span:3,label:Z("time"),children:[null===w||void 0===w?void 0:w.time," ",null===w||void 0===w?void 0:w.time_type]}),(0,h.jsx)(o.Z.Item,{span:3,label:Z("banner"),children:(0,h.jsx)(d.Z,{width:300,src:null===w||void 0===w||null===(t=w.banner)||void 0===t?void 0:t.img})})]})})}},16341:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var i=t(29439),a=t(47313),r=t(45705),l=t(59491),o=t(66204),d=t(77181),s=t(78508),c=t(50249),u=t(2717),f=t(24511),h=t(41481),v=t(53233),x=t(90954),Z=t(80314),m=t(84017),p=t(98967),j=t(23560),g=t(20637),b=t(32785),_=t(86067),w=t(70816),y=t.n(w),C=t(46417);function z(){var e=(0,f.$)().t,n=(0,u.I0)(),t=(0,a.useState)(null),w=(0,i.Z)(t,2),z=w[0],I=w[1],k=(0,u.v9)((function(e){return e.menu}),u.wU).activeMenu,S=(0,u.v9)((function(e){return e.advert}),u.wU),V=S.shopAdList,H=S.loading,M=S.meta,N=(0,a.useState)(""),E=(0,i.Z)(N,2),A=E[0],$=E[1],J=(0,a.useState)(!1),X=(0,i.Z)(J,2),Y=X[0],B=X[1],F=(0,a.useState)([{title:e("id"),dataIndex:"id",is_show:!0,sorter:function(e,n){return e.id-n.id}},{title:e("ad.package"),dataIndex:"ads_package",is_show:!0,render:function(e){var n;return(0,C.jsxs)(r.Z,{children:[(0,C.jsx)("span",{children:null===e||void 0===e||null===(n=e.translation)||void 0===n?void 0:n.title}),(0,C.jsx)(l.Z,{icon:(0,C.jsx)(b.Z,{}),onClick:function(){return I(e.id)}})]})}},{title:e("price"),dataIndex:"price",is_show:!0,render:function(e,n){var t;return(0,m.Z)(null===n||void 0===n||null===(t=n.ads_package)||void 0===t?void 0:t.price)}},{title:e("position.page"),dataIndex:"position_page",is_show:!0},{title:e("expire_at"),dataIndex:"expire_at",is_show:!0,render:function(e){return y()(e).format("YYYY-MM-DD hh:mm")}},{title:e("status"),dataIndex:"status",is_show:!0,render:function(n){return(0,C.jsx)("div",{children:"new"===n?(0,C.jsx)(o.Z,{color:"blue",children:e(n)}):"canceled"===n?(0,C.jsx)(o.Z,{color:"error",children:e(n)}):(0,C.jsx)(o.Z,{color:"cyan",children:e(n)})})}},{title:e("transaction"),dataIndex:"transaction",is_show:!0,render:function(n){return(0,C.jsx)("div",{children:"paid"===(null===n||void 0===n?void 0:n.status)?(0,C.jsx)(o.Z,{color:"cyan",children:e(null===n||void 0===n?void 0:n.status)}):"canceled"===(null===n||void 0===n?void 0:n.status)||"rejected"===(null===n||void 0===n?void 0:n.status)?(0,C.jsx)(o.Z,{color:"error",children:e(null===n||void 0===n?void 0:n.status)}):(0,C.jsx)(o.Z,{color:"orange",children:e("not.paid")})})}},{title:e("options"),dataIndex:"options",is_show:!0,render:function(t,i){var a;return(0,C.jsx)(r.Z,{children:(0,C.jsx)(l.Z,{onClick:function(){return function(t){B(!0),g.Z.getAll().then((function(i){var a=i.data.find((function(e){return"wallet"===e.tag}));if(!a)return j.Am.error(e("request.admin.to.enable.payment.from.wallet")),void B(!1);p.Z.purchase(t,{payment_sys_id:null===a||void 0===a?void 0:a.id}).then((function(){j.Am.success(e("purchased.succesfully"))})).finally((function(){B(!1),n((0,c.JX)(R))}))})).catch((function(){B(!1)}))}(i.id)},disabled:i.deleted_at||"paid"===(null===(a=i.transaction)||void 0===a?void 0:a.status),loading:Y,children:e("purchase")})})}}]),D=(0,i.Z)(F,2),O=D[0],P=D[1],R={perPage:10,page:1,sort:"desc",column:"created_at"};(0,a.useEffect)((function(){k.refetch&&(n((0,c.JX)(R)),n((0,x.A_)(k)))}),[k.refetch]),(0,Z.Z)((function(){var e=k.data,t={deleted_at:"deleted_at"===(null===e||void 0===e?void 0:e.role)?null===e||void 0===e?void 0:e.role:null,search:A};n((0,c.JX)(t))}),[k.data,A]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(d.Z,{className:"p-o",children:(0,C.jsxs)("div",{className:"flex justify-content-between",children:[(0,C.jsx)(h.Z,{style:{maxWidth:"200px"},handleChange:function(e){return $(e)},placeholder:e("search")}),(0,C.jsx)("div",{className:"flex gap-3",children:(0,C.jsx)(v.Z,{columns:O,setColumns:P})})]})}),(0,C.jsx)(d.Z,{children:(0,C.jsx)(s.Z,{scroll:{x:!0},dataSource:V,columns:null===O||void 0===O?void 0:O.filter((function(e){return e.is_show})),rowKey:function(e){return e.id},loading:H||Y,pagination:{pageSize:M.per_page,page:M.current_page,total:M.total},onChange:function(e){var t=e.pageSize,i=e.current;n((0,c.JX)({perPage:t,page:i}))}})}),(0,C.jsx)(_.Z,{id:z,onClose:function(){return I(null)}})]})}},32785:function(e,n,t){t.d(n,{Z:function(){return d}});var i=t(1413),a=t(47313),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"}}]},name:"eye",theme:"filled"},l=t(17469),o=function(e,n){return a.createElement(l.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:r}))};o.displayName="EyeFilled";var d=a.forwardRef(o)},99587:function(e,n,t){t.d(n,{Z:function(){return d}});var i=t(1413),a=t(47313),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},l=t(17469),o=function(e,n){return a.createElement(l.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:r}))};o.displayName="TableOutlined";var d=a.forwardRef(o)}}]);