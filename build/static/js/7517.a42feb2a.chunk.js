"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7517],{55940:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(1413),a=n(45987),o=(n(47313),n(59491)),l=n(47515),i=n(23560),c=n(24511),u=n(79492),s=n(46417),d=["size","onClick","type"];function f(e){var t=e.size,n=void 0===t?"":t,f=e.onClick,v=e.type,h=void 0===v?"default":v,p=(0,a.Z)(e,d),m=(0,c.$)().t,x=(0,u.Z)().isDemo;return(0,s.jsx)(o.Z,(0,r.Z)({size:n,icon:(0,s.jsx)(l.Z,{}),onClick:function(e){x?i.Am.warning(m("cannot.work.demo")):f(e)},type:h},p))}},53233:function(e,t,n){var r=n(1413),a=n(29439),o=n(47313),l=n(56140),i=n(67251),c=n(45705),u=n(86345),s=n(78267),d=n(37388),f=n(59491),v=n(99587),h=n(24511),p=n(46417),m=l.Z.Text;t.Z=function(e){var t=e.columns,n=void 0===t?[]:t,l=e.setColumns,x=e.style,Z=e.size,g=void 0===Z?"":Z,y=e.iconOnly,C=(0,h.$)().t,b=(0,o.useState)(!1),w=(0,a.Z)(b,2),j=w[0],k=w[1],V=(0,p.jsx)(i.Z,{children:null===n||void 0===n?void 0:n.map((function(e,t){return(0,p.jsx)(i.Z.Item,{children:(0,p.jsxs)(c.Z,{className:"d-flex justify-content-between",children:[(0,p.jsx)(m,{children:e.title}),(0,p.jsx)(u.Z,{defaultChecked:!0,onClick:function(){return function(e){var t=null===n||void 0===n?void 0:n.map((function(t){return t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t}));l(t)}(e)},disabled:1===t})]})},e+t)}))});return(0,p.jsx)(s.Z,{overlay:V,trigger:["click"],onVisibleChange:function(e){k(e)},visible:j,children:(0,p.jsx)(d.Z,{title:C("change.columns"),children:(0,p.jsx)(f.Z,{style:(0,r.Z)({},x),size:g,icon:(0,p.jsx)(v.Z,{}),children:y?null:C("Columns")})})})}},48008:function(e,t,n){n(47313);var r=n(9274),a=n(87569),o=n(59491),l=n(24511),i=n(46417);t.Z=function(e){var t=e.open,n=e.handleCancel,c=e.text,u=e.click,s=e.loading,d=e.subTitle,f=(0,l.$)().t;return(0,i.jsxs)(r.Z,{closable:!1,visible:t,footer:null,centered:!0,children:[(0,i.jsx)(a.ZP,{status:"warning",title:c,subTitle:d}),(0,i.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,i.jsx)(o.Z,{type:"primary",className:"mr-2",onClick:u,loading:s,children:f("yes")}),(0,i.jsx)(o.Z,{onClick:function(){return n()},children:f("no")})]})]})}},13945:function(e,t,n){function r(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{Z:function(){return r}})},37517:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var r=n(4942),a=n(93433),o=n(1413),l=n(29439),i=n(47313),c=n(31741),u=n(47515),s=n(55613),d=n(45705),f=n(59491),v=n(77181),h=n(78508),p=n(23560),m=n(69658),x=n(74580),Z=n(2717),g=n(90954),y=n(80314),C=n(13945),b=n(24511),w=n(94765),j=n(36689),k=n(9274),V=n(83371),H=n(68197),S=n(59624),I=n(26824),z=n(51282),D=n(45464),O=n(70816),_=n.n(O),E=n(46417);function M(e){var t,n,r,a,o=e.id,c=e.handleCancel,u=(0,i.useState)({}),s=(0,l.Z)(u,2),d=s[0],v=s[1],h=(0,i.useState)(!1),p=(0,l.Z)(h,2),m=p[0],x=p[1],Z=(0,b.$)().t;return(0,i.useEffect)((function(){!function(e){x(!0),w.Z.getById(e).then((function(e){return v(e.data)})).finally((function(){return x(!1)}))}(o)}),[o]),(0,E.jsx)(k.Z,{visible:!!o,title:Z("product.review"),onCancel:c,footer:(0,E.jsx)(f.Z,{type:"default",onClick:c,children:Z("cancel")}),children:m?(0,E.jsx)(z.Z,{}):(0,E.jsxs)(V.Z,{bordered:!0,children:[(0,E.jsx)(V.Z.Item,{span:3,label:Z("id"),children:d.id}),(0,E.jsxs)(V.Z.Item,{span:3,label:Z("user"),children:[null===(t=d.user)||void 0===t?void 0:t.firstname," ",(null===(n=d.user)||void 0===n?void 0:n.lastname)||""]}),(0,E.jsx)(V.Z.Item,{span:3,label:Z("rating"),children:d.rating}),(0,E.jsx)(V.Z.Item,{span:3,label:Z("image"),children:(0,E.jsx)(H.Z,{gutter:12,children:null===(r=d.galleries)||void 0===r?void 0:r.map((function(e){return(0,E.jsx)(S.Z,{children:(0,E.jsx)(I.Z,{width:145,height:100,src:(0,D.Z)(e.path),placeholder:!0,className:"rounded",style:{objectFit:"contain"},preview:!1})})}))})}),(0,E.jsx)(V.Z.Item,{span:3,label:Z("product.id"),children:null===(a=d.product)||void 0===a?void 0:a.id}),(0,E.jsx)(V.Z.Item,{span:3,label:Z("comment"),children:d.comment}),(0,E.jsx)(V.Z.Item,{span:3,label:Z("created.at"),children:_()(null===d||void 0===d?void 0:d.created_at).format("YYYY-MM-DD HH:mm")})]})})}var N=n(97890),R=n(55940),L=n(53233),T=n(48008);function P(){var e=(0,b.$)().t,t=(0,Z.I0)(),n=(0,N.s0)(),k=(0,i.useState)([{title:e("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:e("user"),dataIndex:"user",key:"user",is_show:!0,render:function(r){return(0,E.jsxs)("div",{className:"text-hover",onClick:function(){return function(r){t((0,g.bL)({url:"/users/user/".concat(r.uuid),id:"user_info",name:e("user.info")})),n("/users/user/".concat(r.uuid),{state:{user_id:r.id}})}(r)},children:[r.firstname," ",r.lastname||""]})}},{title:e("shop"),dataIndex:"product",key:"shop",is_show:!0,render:function(r){var a,o;return(0,E.jsx)("div",{className:"text-hover",onClick:function(){return function(r){t((0,g.bL)({id:"edit-shop",url:"shop/".concat(r.uuid),name:e("edit.shop")})),n("/shop/".concat(r.uuid))}(r.shop)},children:null===(a=r.shop)||void 0===a||null===(o=a.translation)||void 0===o?void 0:o.title})}},{title:e("product"),dataIndex:"product",key:"product",is_show:!0,render:function(r){var a;return(0,E.jsx)("div",{className:"text-hover",onClick:function(){return function(r){t((0,g.bL)({id:"product-edit",url:"product/".concat(r.uuid),name:e("edit.product")})),n("/product/".concat(r.uuid))}(r)},children:null===r||void 0===r||null===(a=r.translation)||void 0===a?void 0:a.title})}},{title:e("rating"),dataIndex:"rating",key:"rating",is_show:!0,render:function(e){return(0,E.jsx)(s.Z,{disabled:!0,defaultValue:e})}},{title:e("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:function(e){return _()(e).format("YYYY-MM-DD HH:mm")}},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,t){return(0,E.jsxs)(d.Z,{children:[(0,E.jsx)(f.Z,{type:"primary",icon:(0,E.jsx)(c.Z,{}),onClick:function(){return K(t.id)}}),(0,E.jsx)(R.Z,{icon:(0,E.jsx)(u.Z,{}),onClick:function(){P([t.id]),I(!0),J(!0)}})]})}}]),V=(0,l.Z)(k,2),H=V[0],S=V[1],I=(0,i.useContext)(x._).setIsModalVisible,z=(0,i.useState)(null),D=(0,l.Z)(z,2),O=D[0],P=D[1],F=(0,i.useState)(null),A=(0,l.Z)(F,2),B=A[0],K=A[1],Y=(0,i.useState)(!1),$=(0,l.Z)(Y,2),X=$[0],G=$[1],U=(0,i.useState)(null),W=(0,l.Z)(U,2),q=W[0],J=W[1],Q=(0,i.useState)(null),ee=(0,l.Z)(Q,2),te=ee[0],ne=ee[1],re=(0,Z.v9)((function(e){return e.menu}),Z.wU).activeMenu,ae=(0,Z.v9)((function(e){return e.productReview}),Z.wU),oe=ae.reviews,le=ae.meta,ie=ae.loading,ce=ae.params;(0,i.useEffect)((function(){re.refetch&&(t((0,j.O)()),t((0,g.A_)(re)))}),[re.refetch]),(0,y.Z)((function(){var e=re.data,n={sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};t((0,j.O)(n))}),[re.data]);var ue={id:O,onChange:function(e){P(e)}};return(0,E.jsxs)(v.Z,{title:e("product.reviews"),extra:(0,E.jsxs)(d.Z,{wrap:!0,children:[(0,E.jsx)(R.Z,{size:"",onClick:function(){null===O||0===O.length?p.Am.warning(e("select.the.product")):(I(!0),J(!1))},children:e("delete.selected")}),(0,E.jsx)(L.Z,{columns:H,setColumns:S})]}),children:[(0,E.jsx)(h.Z,{scroll:{x:!0},rowSelection:ue,columns:null===H||void 0===H?void 0:H.filter((function(e){return e.is_show})),dataSource:oe,pagination:{pageSize:ce.perPage,page:ce.page,total:le.total,defaultCurrent:ce.page},rowKey:function(e){return e.id},onChange:function(e,n,r){var a=e.pageSize,o=e.current,l=r.field,i=r.order,c=(0,C.Z)(i);t((0,g.nc)({activeMenu:re,data:{perPage:a,page:o,column:l,sort:c}}))},loading:ie}),(0,E.jsx)(m.Z,{click:function(){G(!0);var n=(0,o.Z)({},Object.assign.apply(Object,[{}].concat((0,a.Z)(O.map((function(e,t){return(0,r.Z)({},"ids[".concat(t,"]"),e)}))))));w.Z.delete(n).then((function(){p.Am.success(e("successfully.deleted")),t((0,j.O)()),I(!1),J(null)})).finally((function(){P(null),G(!1)}))},text:e(q?"delete":"all.delete"),setText:P,loading:X}),B&&(0,E.jsx)(M,{id:B,handleCancel:function(){return K(null)}}),te&&(0,E.jsx)(T.Z,{open:te,handleCancel:function(){return ne(null)},click:te.restore?function(){G(!0),w.Z.restoreAll().then((function(){p.Am.success(e("successfully.restored")),t((0,j.O)()),ne(null)})).finally((function(){return G(!1)}))}:function(){G(!0),w.Z.dropAll().then((function(){p.Am.success(e("successfully.deleted")),t((0,j.O)()),ne(null)})).finally((function(){return G(!1)}))},text:te.restore?e("restore.modal.text"):e("read.carefully"),subTitle:te.restore?"":e("confirm.deletion"),loading:X,setText:P})]})}},99587:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(1413),a=n(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},l=n(17469),i=function(e,t){return a.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))};i.displayName="TableOutlined";var c=a.forwardRef(i)},55613:function(e,t,n){n.d(t,{Z:function(){return H}});var r=n(87462),a=n(47313),o=n(1413),l=n(4942),i=n(15671),c=n(43144),u=n(60136),s=n(29388),d=n(53879),f=n(46123),v=n.n(f),h=n(49242);var p=function(e){(0,u.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onHover=function(t){var n=e.props;(0,n.onHover)(t,n.index)},e.onClick=function(t){var n=e.props;(0,n.onClick)(t,n.index)},e.onKeyDown=function(t){var n=e.props,r=n.onClick,a=n.index;13===t.keyCode&&r(t,a)},e}return(0,c.Z)(n,[{key:"getClassName",value:function(){var e=this.props,t=e.prefixCls,n=e.index,r=e.value,a=e.allowHalf,o=e.focused,l=n+1,i=t;return 0===r&&0===n&&o?i+=" ".concat(t,"-focused"):a&&r+.5>=l&&r<l?(i+=" ".concat(t,"-half ").concat(t,"-active"),o&&(i+=" ".concat(t,"-focused"))):(i+=" ".concat(t,l<=r?"-full":"-zero"),l===r&&o&&(i+=" ".concat(t,"-focused"))),i}},{key:"render",value:function(){var e=this.onHover,t=this.onClick,n=this.onKeyDown,r=this.props,o=r.disabled,l=r.prefixCls,i=r.character,c=r.characterRender,u=r.index,s=r.count,d=r.value,f="function"===typeof i?i(this.props):i,v=a.createElement("li",{className:this.getClassName()},a.createElement("div",{onClick:o?null:t,onKeyDown:o?null:n,onMouseMove:o?null:e,role:"radio","aria-checked":d>u?"true":"false","aria-posinset":u+1,"aria-setsize":s,tabIndex:o?-1:0},a.createElement("div",{className:"".concat(l,"-first")},f),a.createElement("div",{className:"".concat(l,"-second")},f)));return c&&(v=c(v,this.props)),v}}]),n}(a.Component);function m(){}var x=function(e){(0,u.Z)(n,e);var t=(0,s.Z)(n);function n(e){var r;(0,i.Z)(this,n),(r=t.call(this,e)).stars=void 0,r.rate=void 0,r.onHover=function(e,t){var n=r.props.onHoverChange,a=r.getStarValue(t,e.pageX);a!==r.state.cleanedValue&&r.setState({hoverValue:a,cleanedValue:null}),n(a)},r.onMouseLeave=function(){var e=r.props.onHoverChange;r.setState({hoverValue:void 0,cleanedValue:null}),e(void 0)},r.onClick=function(e,t){var n=r.props.allowClear,a=r.state.value,o=r.getStarValue(t,e.pageX),l=!1;n&&(l=o===a),r.onMouseLeave(),r.changeValue(l?0:o),r.setState({cleanedValue:l?o:null})},r.onFocus=function(){var e=r.props.onFocus;r.setState({focused:!0}),e&&e()},r.onBlur=function(){var e=r.props.onBlur;r.setState({focused:!1}),e&&e()},r.onKeyDown=function(e){var t=e.keyCode,n=r.props,a=n.count,o=n.allowHalf,l=n.onKeyDown,i="rtl"===n.direction,c=r.state.value;t===h.Z.RIGHT&&c<a&&!i?(c+=o?.5:1,r.changeValue(c),e.preventDefault()):t===h.Z.LEFT&&c>0&&!i||t===h.Z.RIGHT&&c>0&&i?(c-=o?.5:1,r.changeValue(c),e.preventDefault()):t===h.Z.LEFT&&c<a&&i&&(c+=o?.5:1,r.changeValue(c),e.preventDefault()),l&&l(e)},r.saveRef=function(e){return function(t){r.stars[e]=t}},r.saveRate=function(e){r.rate=e};var a=e.value;return void 0===a&&(a=e.defaultValue),r.stars={},r.state={value:a,focused:!1,cleanedValue:null},r}return(0,c.Z)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"getStarDOM",value:function(e){return(0,d.Z)(this.stars[e])}},{key:"getStarValue",value:function(e,t){var n=this.props,r=n.allowHalf,a="rtl"===n.direction,o=e+1;if(r){var l=this.getStarDOM(e),i=function(e){var t=function(e){var t,n,r=e.ownerDocument,a=r.body,o=r&&r.documentElement,l=e.getBoundingClientRect();return t=l.left,n=l.top,{left:t-=o.clientLeft||a.clientLeft||0,top:n-=o.clientTop||a.clientTop||0}}(e),n=e.ownerDocument,r=n.defaultView||n.parentWindow;return t.left+=function(e){var t=e.pageXOffset,n="scrollLeft";if("number"!==typeof t){var r=e.document;"number"!==typeof(t=r.documentElement[n])&&(t=r.body[n])}return t}(r),t.left}(l),c=l.clientWidth;(a&&t-i>c/2||!a&&t-i<c/2)&&(o-=.5)}return o}},{key:"focus",value:function(){this.props.disabled||this.rate.focus()}},{key:"blur",value:function(){this.props.disabled||this.rate.blur()}},{key:"changeValue",value:function(e){var t=this.props.onChange;"value"in this.props||this.setState({value:e}),t(e)}},{key:"render",value:function(){for(var e=this.props,t=e.count,n=e.allowHalf,r=e.style,o=e.prefixCls,i=e.disabled,c=e.className,u=e.character,s=e.characterRender,d=e.tabIndex,f=e.direction,h=this.state,m=h.value,x=h.hoverValue,Z=h.focused,g=[],y=i?"".concat(o,"-disabled"):"",C=0;C<t;C+=1)g.push(a.createElement(p,{ref:this.saveRef(C),index:C,count:t,disabled:i,prefixCls:"".concat(o,"-star"),allowHalf:n,value:void 0===x?m:x,onClick:this.onClick,onHover:this.onHover,key:C,character:u,characterRender:s,focused:Z}));var b=v()(o,y,c,(0,l.Z)({},"".concat(o,"-rtl"),"rtl"===f));return a.createElement("ul",{className:b,style:r,onMouseLeave:i?null:this.onMouseLeave,tabIndex:i?-1:d,onFocus:i?null:this.onFocus,onBlur:i?null:this.onBlur,onKeyDown:i?null:this.onKeyDown,ref:this.saveRate,role:"radiogroup"},g)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"value"in e&&void 0!==e.value?(0,o.Z)((0,o.Z)({},t),{},{value:e.value}):t}}]),n}(a.Component);x.defaultProps={defaultValue:0,count:5,allowHalf:!1,allowClear:!0,style:{},prefixCls:"rc-rate",onChange:m,character:"\u2605",onHoverChange:m,tabIndex:0,direction:"ltr"};var Z=x,g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"},y=n(17469),C=function(e,t){return a.createElement(y.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:t,icon:g}))};C.displayName="StarFilled";var b=a.forwardRef(C),w=n(37388),j=n(91964),k=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},V=a.forwardRef((function(e,t){var n=e.prefixCls,o=e.tooltips,l=k(e,["prefixCls","tooltips"]),i=a.useContext(j.E_),c=i.getPrefixCls,u=i.direction,s=c("rate",n);return a.createElement(Z,(0,r.Z)({ref:t,characterRender:function(e,t){var n=t.index;return o?a.createElement(w.Z,{title:o[n]},e):e}},l,{prefixCls:s,direction:u}))}));V.displayName="Rate",V.defaultProps={character:a.createElement(b,null)};var H=V}}]);