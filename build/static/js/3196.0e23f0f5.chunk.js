"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3196],{53233:function(t,n,e){var o=e(1413),i=e(29439),l=e(47313),a=e(56140),r=e(67251),u=e(45705),c=e(86345),d=e(78267),s=e(37388),v=e(59491),f=e(99587),h=e(24511),p=e(46417),x=a.Z.Text;n.Z=function(t){var n=t.columns,e=void 0===n?[]:n,a=t.setColumns,m=t.style,Z=t.size,g=void 0===Z?"":Z,_=t.iconOnly,k=(0,h.$)().t,w=(0,l.useState)(!1),j=(0,i.Z)(w,2),b=j[0],y=j[1],C=(0,p.jsx)(r.Z,{children:null===e||void 0===e?void 0:e.map((function(t,n){return(0,p.jsx)(r.Z.Item,{children:(0,p.jsxs)(u.Z,{className:"d-flex justify-content-between",children:[(0,p.jsx)(x,{children:t.title}),(0,p.jsx)(c.Z,{defaultChecked:!0,onClick:function(){return function(t){var n=null===e||void 0===e?void 0:e.map((function(n){return n.dataIndex===t.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));a(n)}(t)},disabled:1===n})]})},t+n)}))});return(0,p.jsx)(d.Z,{overlay:C,trigger:["click"],onVisibleChange:function(t){y(t)},visible:b,children:(0,p.jsx)(s.Z,{title:k("change.columns"),children:(0,p.jsx)(v.Z,{style:(0,o.Z)({},m),size:g,icon:(0,p.jsx)(f.Z,{}),children:_?null:k("Columns")})})})}},83196:function(t,n,e){e.r(n);var o=e(29439),i=e(66204),l=e(68197),a=e(59624),r=e(77181),u=e(45705),c=e(74294),d=e(59491),s=e(78508),v=e(47313),f=e(63243),h=e(2717),p=e(26441),x=e(90954),m=e(53233),Z=e(68377),g=e(80314),_=e(24511),k=e(97890),w=e(46417);n.default=function(){var t,n=(0,h.I0)(),e=(0,_.$)().t,j=(0,k.s0)(),b=(0,h.v9)((function(t){return t.menu}),h.wU).activeMenu,y=(0,h.v9)((function(t){return t.stockReport}),h.wU),C=y.loading,z=y.productList,S=(0,v.useState)([]),H=(0,o.Z)(S,2),V=H[0],I=H[1],M=(0,v.useState)(!1),q=(0,o.Z)(M,2),N=q[0],O=q[1],P=(0,v.useState)((null===b||void 0===b||null===(t=b.data)||void 0===t?void 0:t.value)||null),R=(0,o.Z)(P,2),B=R[0],E=R[1],L=(0,v.useState)([{title:"Product title",dataIndex:"product_translation_title",key:"product_translation_title",render:function(t,o){var i;return(0,w.jsx)("a",{onClick:function(){return t=o,n((0,x.bL)({url:"report/products",id:"report.products",name:e("report.products")})),void j("/report/products?product_id=".concat(t.id));var t},children:null===o||void 0===o||null===(i=o.translation)||void 0===i?void 0:i.title})},is_show:!0,sorter:function(t,n){var e,o;return null===t||void 0===t||null===(e=t.translation)||void 0===e?void 0:e.title.localeCompare(null===n||void 0===n||null===(o=n.translation)||void 0===o?void 0:o.title)}},{title:"Bar code",dataIndex:"product_bar_code",key:"product_bar_code",is_show:!0,render:function(t,n){return(0,w.jsx)(w.Fragment,{children:(null===n||void 0===n?void 0:n.bar_code)||"-"})}},{title:"Status",key:"status",dataIndex:"status",render:function(t,n){return(0,w.jsx)(i.Z,{children:n.status},n.id)},is_show:!0},{title:"Stock",key:"stock",dataIndex:"quantity",render:function(t,n){return null===n||void 0===n?void 0:n.stocks_sum_quantity},is_show:!0,sorter:function(t,n){return(null===t||void 0===t?void 0:t.stocks_sum_quantity)-(null===n||void 0===n?void 0:n.stocks_sum_quantity)}}]),A=(0,o.Z)(L,2),F=A[0],K=A[1],T={page:b.page,perPage:b.perPage,actual:B},U=function(t){n((0,Z.wS)(t))};(0,g.Z)((function(){U(T)}),[B]),(0,v.useEffect)((function(){b.refetch&&(U(T),n((0,x.A_)(b)))}),[b.refetch]);var $={selectedRowKeys:V,onChange:function(t){return I(t)}};return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(l.Z,{gutter:24,children:(0,w.jsx)(a.Z,{span:24,children:(0,w.jsxs)(r.Z,{title:e("stock"),children:[(0,w.jsxs)(u.Z,{className:"d-flex justify-content-end",children:[(0,w.jsx)(c.Z,{style:{width:"200px"},onChange:function(t){return E(t)},options:[{value:null,label:"All products"},{value:"in_stock",label:"In stock"},{value:"low_stock",label:"Low stock"},{value:"out_of_stock",label:"Out of stock"}],defaultValue:(null===b||void 0===b?void 0:b.data)||null}),(0,w.jsx)(d.Z,{icon:(0,w.jsx)(f.Z,{}),loading:N,onClick:function(){O(!0),p.Z.getStocks({export:"excel",actual:B}).then((function(t){var n=t.data.link;n&&(window.location.href=n)})).finally((function(){return O(!1)}))},children:e("download")}),(0,w.jsx)(m.Z,{columns:F,setColumns:K})]}),(0,w.jsx)(s.Z,{scroll:{x:!0},rowSelection:$,columns:null===F||void 0===F?void 0:F.filter((function(t){return t.is_show})),dataSource:z.data||[],rowKey:function(t){return t.id},loading:C,pagination:{pageSize:null===z||void 0===z?void 0:z.per_page,page:(null===z||void 0===z?void 0:z.current_page)||1,total:null===z||void 0===z?void 0:z.total,defaultCurrent:1},onChange:function(t){var n=t.pageSize,e=t.current;U({page:e,perPage:n,actual:B})}})]})})})})}},63243:function(t,n,e){e.d(n,{Z:function(){return u}});var o=e(1413),i=e(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z"}},{tag:"path",attrs:{d:"M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"}}]},name:"cloud-download",theme:"outlined"},a=e(17469),r=function(t,n){return i.createElement(a.Z,(0,o.Z)((0,o.Z)({},t),{},{ref:n,icon:l}))};r.displayName="CloudDownloadOutlined";var u=i.forwardRef(r)},99587:function(t,n,e){e.d(n,{Z:function(){return u}});var o=e(1413),i=e(47313),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},a=e(17469),r=function(t,n){return i.createElement(a.Z,(0,o.Z)((0,o.Z)({},t),{},{ref:n,icon:l}))};r.displayName="TableOutlined";var u=i.forwardRef(r)}}]);