"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8357],{55940:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(1413),a=n(45987),o=(n(47313),n(59491)),l=n(47515),i=n(23560),c=n(24511),u=n(79492),s=n(46417),d=["size","onClick","type"];function f(e){var t=e.size,n=void 0===t?"":t,f=e.onClick,v=e.type,h=void 0===v?"default":v,p=(0,a.Z)(e,d),m=(0,c.$)().t,x=(0,u.Z)().isDemo;return(0,s.jsx)(o.Z,(0,r.Z)({size:n,icon:(0,s.jsx)(l.Z,{}),onClick:function(e){x?i.Am.warning(m("cannot.work.demo")):f(e)},type:h},p))}},53233:function(e,t,n){var r=n(1413),a=n(29439),o=n(47313),l=n(56140),i=n(67251),c=n(45705),u=n(86345),s=n(78267),d=n(37388),f=n(59491),v=n(99587),h=n(24511),p=n(46417),m=l.Z.Text;t.Z=function(e){var t=e.columns,n=void 0===t?[]:t,l=e.setColumns,x=e.style,Z=e.size,g=void 0===Z?"":Z,y=e.iconOnly,b=(0,h.$)().t,C=(0,o.useState)(!1),w=(0,a.Z)(C,2),k=w[0],j=w[1],I=(0,p.jsx)(i.Z,{children:null===n||void 0===n?void 0:n.map((function(e,t){return(0,p.jsx)(i.Z.Item,{children:(0,p.jsxs)(c.Z,{className:"d-flex justify-content-between",children:[(0,p.jsx)(m,{children:e.title}),(0,p.jsx)(u.Z,{defaultChecked:!0,onClick:function(){return function(e){var t=null===n||void 0===n?void 0:n.map((function(t){return t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t}));l(t)}(e)},disabled:1===t})]})},e+t)}))});return(0,p.jsx)(s.Z,{overlay:I,trigger:["click"],onVisibleChange:function(e){j(e)},visible:k,children:(0,p.jsx)(d.Z,{title:b("change.columns"),children:(0,p.jsx)(f.Z,{style:(0,r.Z)({},x),size:g,icon:(0,p.jsx)(v.Z,{}),children:y?null:b("Columns")})})})}},48008:function(e,t,n){n(47313);var r=n(9274),a=n(87569),o=n(59491),l=n(24511),i=n(46417);t.Z=function(e){var t=e.open,n=e.handleCancel,c=e.text,u=e.click,s=e.loading,d=e.subTitle,f=(0,l.$)().t;return(0,i.jsxs)(r.Z,{closable:!1,visible:t,footer:null,centered:!0,children:[(0,i.jsx)(a.ZP,{status:"warning",title:c,subTitle:d}),(0,i.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,i.jsx)(o.Z,{type:"primary",className:"mr-2",onClick:u,loading:s,children:f("yes")}),(0,i.jsx)(o.Z,{onClick:function(){return n()},children:f("no")})]})]})}},13945:function(e,t,n){function r(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{Z:function(){return r}})},68357:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var r=n(4942),a=n(93433),o=n(1413),l=n(29439),i=n(47313),c=n(31741),u=n(55613),s=n(45705),d=n(59491),f=n(77181),v=n(78508),h=n(23560),p=n(69658),m=n(74580),x=n(2717),Z=n(90954),g=n(80314),y=n(13945),b=n(24511),C=n(28305),w=n(36689),k=n(9274),j=n(83371),I=n(68197),V=n(59624),H=n(26824),S=n(51282),z=n(45464),D=n(70816),_=n.n(D),E=n(46417);function M(e){var t,n,r,a,o=e.id,c=e.handleCancel,u=(0,i.useState)({}),s=(0,l.Z)(u,2),f=s[0],v=s[1],h=(0,i.useState)(!1),p=(0,l.Z)(h,2),m=p[0],x=p[1],Z=(0,b.$)().t;return(0,i.useEffect)((function(){!function(e){x(!0),C.Z.getById(e).then((function(e){return v(e.data)})).finally((function(){return x(!1)}))}(o)}),[o]),(0,E.jsx)(k.Z,{visible:!!o,title:Z("product.review"),onCancel:c,footer:(0,E.jsx)(d.Z,{type:"default",onClick:c,children:Z("cancel")}),children:m?(0,E.jsx)(S.Z,{}):(0,E.jsxs)(j.Z,{bordered:!0,children:[(0,E.jsx)(j.Z.Item,{span:3,label:Z("id"),children:f.id}),(0,E.jsxs)(j.Z.Item,{span:3,label:Z("user"),children:[null===(t=f.user)||void 0===t?void 0:t.firstname," ",(null===(n=f.user)||void 0===n?void 0:n.lastname)||""]}),(0,E.jsx)(j.Z.Item,{span:3,label:Z("rating"),children:f.rating}),(0,E.jsx)(j.Z.Item,{span:3,label:Z("image"),children:(0,E.jsx)(I.Z,{gutter:12,children:null===(r=f.galleries)||void 0===r?void 0:r.map((function(e){return(0,E.jsx)(V.Z,{children:(0,E.jsx)(H.Z,{width:145,height:100,src:(0,z.Z)(e.path),placeholder:!0,className:"rounded",style:{objectFit:"contain"},preview:!1})})}))})}),(0,E.jsx)(j.Z.Item,{span:3,label:Z("product.id"),children:null===(a=f.product)||void 0===a?void 0:a.id}),(0,E.jsx)(j.Z.Item,{span:3,label:Z("comment"),children:f.comment}),(0,E.jsx)(j.Z.Item,{span:3,label:Z("created.at"),children:_()(null===f||void 0===f?void 0:f.created_at).format("YYYY-MM-DD HH:mm")})]})})}var N=n(97890),O=n(55940),R=n(53233),L=n(48008);function T(){var e=(0,b.$)().t,t=(0,x.I0)(),n=(0,N.s0)(),k=(0,i.useState)([{title:e("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:e("user"),dataIndex:"user",key:"user",is_show:!0,render:function(r){return(0,E.jsxs)("div",{className:"text-hover",onClick:function(){return function(r){t((0,Z.bL)({url:"/users/user/".concat(r.uuid),id:"user_info",name:e("user.info")})),n("/users/user/".concat(r.uuid),{state:{user_id:r.id}})}(r)},children:[r.firstname," ",r.lastname||""]})}},{title:e("shop"),dataIndex:"product",key:"shop",is_show:!0,render:function(r){var a,o;return(0,E.jsx)("div",{className:"text-hover",onClick:function(){return function(r){t((0,Z.bL)({id:"edit-shop",url:"shop/".concat(r.uuid),name:e("edit.shop")})),n("/shop/".concat(r.uuid))}(r.shop)},children:null===(a=r.shop)||void 0===a||null===(o=a.translation)||void 0===o?void 0:o.title})}},{title:e("product"),dataIndex:"product",key:"product",is_show:!0,render:function(r){var a;return(0,E.jsx)("div",{className:"text-hover",onClick:function(){return function(r){t((0,Z.bL)({id:"product-edit",url:"product/".concat(r.uuid),name:e("edit.product")})),n("/product/".concat(r.uuid))}(r)},children:null===r||void 0===r||null===(a=r.translation)||void 0===a?void 0:a.title})}},{title:e("rating"),dataIndex:"rating",key:"rating",is_show:!0,render:function(e){return(0,E.jsx)(u.Z,{disabled:!0,defaultValue:e})}},{title:e("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:function(e){return _()(e).format("YYYY-MM-DD HH:mm")}},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,t){return(0,E.jsx)(s.Z,{children:(0,E.jsx)(d.Z,{type:"primary",icon:(0,E.jsx)(c.Z,{}),onClick:function(){return B(t.id)}})})}}]),j=(0,l.Z)(k,2),I=j[0],V=j[1],H=(0,i.useContext)(m._).setIsModalVisible,S=(0,i.useState)(null),z=(0,l.Z)(S,2),D=z[0],T=z[1],P=(0,i.useState)(null),F=(0,l.Z)(P,2),A=F[0],B=F[1],K=(0,i.useState)(!1),Y=(0,l.Z)(K,2),$=Y[0],X=Y[1],G=(0,i.useState)(null),U=(0,l.Z)(G,2),W=U[0],q=U[1],J=(0,i.useState)(null),Q=(0,l.Z)(J,2),ee=Q[0],te=Q[1],ne=(0,x.v9)((function(e){return e.menu}),x.wU).activeMenu,re=(0,x.v9)((function(e){return e.productReview}),x.wU),ae=re.reviews,oe=re.meta,le=re.loading,ie=re.params;(0,i.useEffect)((function(){ne.refetch&&(t((0,w.kI)()),t((0,Z.A_)(ne)))}),[ne.refetch]),(0,g.Z)((function(){var e=ne.data,n={sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};t((0,w.kI)(n))}),[ne.data]);var ce={id:D,onChange:function(e){T(e)}};return(0,E.jsxs)(f.Z,{title:e("product.reviews"),extra:(0,E.jsxs)(s.Z,{wrap:!0,children:[(0,E.jsx)(O.Z,{size:"",onClick:function(){null===D||0===D.length?h.Am.warning(e("select.the.product")):(H(!0),q(!1))},children:e("delete.selected")}),(0,E.jsx)(R.Z,{columns:I,setColumns:V})]}),children:[(0,E.jsx)(v.Z,{scroll:{x:!0},rowSelection:ce,columns:null===I||void 0===I?void 0:I.filter((function(e){return e.is_show})),dataSource:ae,pagination:{pageSize:ie.perPage,page:ie.page,total:oe.total,defaultCurrent:ie.page},rowKey:function(e){return e.id},onChange:function(e,n,r){var a=e.pageSize,o=e.current,l=r.field,i=r.order,c=(0,y.Z)(i);t((0,Z.nc)({activeMenu:ne,data:{perPage:a,page:o,column:l,sort:c}}))},loading:le}),(0,E.jsx)(p.Z,{click:function(){X(!0);var n=(0,o.Z)({},Object.assign.apply(Object,[{}].concat((0,a.Z)(D.map((function(e,t){return(0,r.Z)({},"ids[".concat(t,"]"),e)}))))));C.Z.delete(n).then((function(){h.Am.success(e("successfully.deleted")),t((0,w.kI)()),H(!1),q(null)})).finally((function(){return X(!1)}))},text:e(W?"delete":"all.delete"),setText:T,loading:$}),A&&(0,E.jsx)(M,{id:A,handleCancel:function(){return B(null)}}),ee&&(0,E.jsx)(L.Z,{open:ee,handleCancel:function(){return te(null)},click:ee.restore?function(){X(!0),C.Z.restoreAll().then((function(){h.Am.success(e("successfully.restored")),t((0,w.kI)()),te(null)})).finally((function(){return X(!1)}))}:function(){X(!0),C.Z.dropAll().then((function(){h.Am.success(e("successfully.deleted")),t((0,w.kI)()),te(null)})).finally((function(){return X(!1)}))},text:ee.restore?e("restore.modal.text"):e("read.carefully"),subTitle:ee.restore?"":e("confirm.deletion"),loading:$,setText:T})]})}},99587:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(1413),a=n(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},l=n(17469),i=function(e,t){return a.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))};i.displayName="TableOutlined";var c=a.forwardRef(i)},55613:function(e,t,n){n.d(t,{Z:function(){return V}});var r=n(87462),a=n(47313),o=n(1413),l=n(4942),i=n(15671),c=n(43144),u=n(60136),s=n(29388),d=n(53879),f=n(46123),v=n.n(f),h=n(49242);var p=function(e){(0,u.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onHover=function(t){var n=e.props;(0,n.onHover)(t,n.index)},e.onClick=function(t){var n=e.props;(0,n.onClick)(t,n.index)},e.onKeyDown=function(t){var n=e.props,r=n.onClick,a=n.index;13===t.keyCode&&r(t,a)},e}return(0,c.Z)(n,[{key:"getClassName",value:function(){var e=this.props,t=e.prefixCls,n=e.index,r=e.value,a=e.allowHalf,o=e.focused,l=n+1,i=t;return 0===r&&0===n&&o?i+=" ".concat(t,"-focused"):a&&r+.5>=l&&r<l?(i+=" ".concat(t,"-half ").concat(t,"-active"),o&&(i+=" ".concat(t,"-focused"))):(i+=" ".concat(t,l<=r?"-full":"-zero"),l===r&&o&&(i+=" ".concat(t,"-focused"))),i}},{key:"render",value:function(){var e=this.onHover,t=this.onClick,n=this.onKeyDown,r=this.props,o=r.disabled,l=r.prefixCls,i=r.character,c=r.characterRender,u=r.index,s=r.count,d=r.value,f="function"===typeof i?i(this.props):i,v=a.createElement("li",{className:this.getClassName()},a.createElement("div",{onClick:o?null:t,onKeyDown:o?null:n,onMouseMove:o?null:e,role:"radio","aria-checked":d>u?"true":"false","aria-posinset":u+1,"aria-setsize":s,tabIndex:o?-1:0},a.createElement("div",{className:"".concat(l,"-first")},f),a.createElement("div",{className:"".concat(l,"-second")},f)));return c&&(v=c(v,this.props)),v}}]),n}(a.Component);function m(){}var x=function(e){(0,u.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;(0,i.Z)(this,n),(r=t.call(this,e)).stars=void 0,r.rate=void 0,r.onHover=function(e,t){var n=r.props.onHoverChange,a=r.getStarValue(t,e.pageX);a!==r.state.cleanedValue&&r.setState({hoverValue:a,cleanedValue:null}),n(a)},r.onMouseLeave=function(){var e=r.props.onHoverChange;r.setState({hoverValue:void 0,cleanedValue:null}),e(void 0)},r.onClick=function(e,t){var n=r.props.allowClear,a=r.state.value,o=r.getStarValue(t,e.pageX),l=!1;n&&(l=o===a),r.onMouseLeave(),r.changeValue(l?0:o),r.setState({cleanedValue:l?o:null})},r.onFocus=function(){var e=r.props.onFocus;r.setState({focused:!0}),e&&e()},r.onBlur=function(){var e=r.props.onBlur;r.setState({focused:!1}),e&&e()},r.onKeyDown=function(e){var t=e.keyCode,n=r.props,a=n.count,o=n.allowHalf,l=n.onKeyDown,i="rtl"===n.direction,c=r.state.value;t===h.Z.RIGHT&&c<a&&!i?(c+=o?.5:1,r.changeValue(c),e.preventDefault()):t===h.Z.LEFT&&c>0&&!i||t===h.Z.RIGHT&&c>0&&i?(c-=o?.5:1,r.changeValue(c),e.preventDefault()):t===h.Z.LEFT&&c<a&&i&&(c+=o?.5:1,r.changeValue(c),e.preventDefault()),l&&l(e)},r.saveRef=function(e){return function(t){r.stars[e]=t}},r.saveRate=function(e){r.rate=e};var a=e.value;return void 0===a&&(a=e.defaultValue),r.stars={},r.state={value:a,focused:!1,cleanedValue:null},r}return(0,c.Z)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"getStarDOM",value:function(e){return(0,d.Z)(this.stars[e])}},{key:"getStarValue",value:function(e,t){var n=this.props,r=n.allowHalf,a="rtl"===n.direction,o=e+1;if(r){var l=this.getStarDOM(e),i=function(e){var t=function(e){var t,n,r=e.ownerDocument,a=r.body,o=r&&r.documentElement,l=e.getBoundingClientRect();return t=l.left,n=l.top,{left:t-=o.clientLeft||a.clientLeft||0,top:n-=o.clientTop||a.clientTop||0}}(e),n=e.ownerDocument,r=n.defaultView||n.parentWindow;return t.left+=function(e){var t=e.pageXOffset,n="scrollLeft";if("number"!==typeof t){var r=e.document;"number"!==typeof(t=r.documentElement[n])&&(t=r.body[n])}return t}(r),t.left}(l),c=l.clientWidth;(a&&t-i>c/2||!a&&t-i<c/2)&&(o-=.5)}return o}},{key:"focus",value:function(){this.props.disabled||this.rate.focus()}},{key:"blur",value:function(){this.props.disabled||this.rate.blur()}},{key:"changeValue",value:function(e){var t=this.props.onChange;"value"in this.props||this.setState({value:e}),t(e)}},{key:"render",value:function(){for(var e=this.props,t=e.count,n=e.allowHalf,r=e.style,o=e.prefixCls,i=e.disabled,c=e.className,u=e.character,s=e.characterRender,d=e.tabIndex,f=e.direction,h=this.state,m=h.value,x=h.hoverValue,Z=h.focused,g=[],y=i?"".concat(o,"-disabled"):"",b=0;b<t;b+=1)g.push(a.createElement(p,{ref:this.saveRef(b),index:b,count:t,disabled:i,prefixCls:"".concat(o,"-star"),allowHalf:n,value:void 0===x?m:x,onClick:this.onClick,onHover:this.onHover,key:b,character:u,characterRender:s,focused:Z}));var C=v()(o,y,c,(0,l.Z)({},"".concat(o,"-rtl"),"rtl"===f));return a.createElement("ul",{className:C,style:r,onMouseLeave:i?null:this.onMouseLeave,tabIndex:i?-1:d,onFocus:i?null:this.onFocus,onBlur:i?null:this.onBlur,onKeyDown:i?null:this.onKeyDown,ref:this.saveRate,role:"radiogroup"},g)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"value"in e&&void 0!==e.value?(0,o.Z)((0,o.Z)({},t),{},{value:e.value}):t}}]),n}(a.Component);x.defaultProps={defaultValue:0,count:5,allowHalf:!1,allowClear:!0,style:{},prefixCls:"rc-rate",onChange:m,character:"\u2605",onHoverChange:m,tabIndex:0,direction:"ltr"};var Z=x,g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"},y=n(17469),b=function(e,t){return a.createElement(y.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:t,icon:g}))};b.displayName="StarFilled";var C=a.forwardRef(b),w=n(37388),k=n(91964),j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},I=a.forwardRef((function(e,t){var n=e.prefixCls,o=e.tooltips,l=j(e,["prefixCls","tooltips"]),i=a.useContext(k.E_),c=i.getPrefixCls,u=i.direction,s=c("rate",n);return a.createElement(Z,(0,r.Z)({ref:t,characterRender:function(e,t){var n=t.index;return o?a.createElement(w.Z,{title:o[n]},e):e}},l,{prefixCls:s,direction:u}))}));I.displayName="Rate",I.defaultProps={character:a.createElement(C,null)};var V=I}}]);