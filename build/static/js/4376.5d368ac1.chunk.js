"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[4376],{73431:function(e,n,t){var r=t(47313),a=t(39180),o=t(2717),l=t(28830),i=t(60535),u=t(46417);n.Z=function(){var e=(0,o.I0)(),n=(0,o.v9)((function(e){return e.formLang}),o.wU),t=n.languages,c=n.defaultLang;(0,r.useEffect)((function(){i.Z.getAllActive().then((function(n){var t=n.data;e((0,l.dc)(t)),e((0,l.mh)(t.find((function(e){return 1===e.default})).locale))}))}),[]);return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(a.ZP.Group,{value:c,onChange:function(n){var t=n.target.value;e((0,l.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((function(e){return(0,u.jsx)(a.ZP.Button,{value:e.locale,children:e.title},e.id)}))})})}},13622:function(e,n,t){t.d(n,{R:function(){return v}});var r=t(1413),a=t(29439),o=t(45987),l=t(47313),i=t(12279),u=t.n(i),c=t(74294),s=t(72652),d=t(46417),p=["fetchOptions","debounceTimeout","refetch"],v=function(e){var n=e.fetchOptions,t=e.debounceTimeout,i=void 0===t?400:t,v=(e.refetch,(0,o.Z)(e,p)),f=(0,l.useState)(!1),m=(0,a.Z)(f,2),h=m[0],y=m[1],b=(0,l.useState)([]),Z=(0,a.Z)(b,2),g=Z[0],x=Z[1],C=(0,l.useMemo)((function(){return u()((function(e){x([]),y(!0),n(e).then((function(e){x(e),y(!1)}))}),i)}),[n,i]);return(0,d.jsx)(c.Z,(0,r.Z)((0,r.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,onClear:function(){return C("")},filterOption:!1,onSearch:C,notFoundContent:h?(0,d.jsx)(s.Z,{size:"small"}):"no results"},v),{},{options:g,onFocus:function(){C("")}}))}},71740:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(1413),a=t(15861),o=t(29439),l=t(87757),i=t.n(l),u=t(47313),c=t(10976),s=t(68197),d=t(59624),p=t(66672),v=t(74294),f=t(16124),m=t(86345),h=t(59491),y=t(52421),b=t(13622),Z=t(5764),g=t(2717),x=t(24511),C=t(30763),j=t(97890),k=t(46417);function w(e){var n,t,l,w,P,E=e.form,O=e.handleSubmit,I=e.error,S=(0,x.$)().t,N=(0,g.v9)((function(e){return e.menu}),g.wU).activeMenu,F=(0,g.v9)((function(e){return e.formLang}),g.wU),K=F.defaultLang,q=F.languages,M=(0,j.TH)(),L=(0,u.useState)(null!==(n=N.data)&&void 0!==n&&n.image?null===(t=N.data)||void 0===t?void 0:t.image:[]),D=(0,o.Z)(L,2),R=D[0],T=D[1],U=(0,u.useState)(!1),B=(0,o.Z)(U,2),_=B[0],A=B[1];function V(){return(V=(0,a.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={perPage:100,type:"shop",search:n},e.abrupt("return",C.Z.getAll(t).then((function(e){var n;return null!==M&&void 0!==M&&null!==(n=M.state)&&void 0!==n&&n.uuid?e.data.filter((function(e){var n;return e.uuid!==(null===M||void 0===M||null===(n=M.state)||void 0===n?void 0:n.uuid)})).map((function(e){var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id,key:e.id}})):e.data.map((function(e){var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id,key:e.id}}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log("this",null===M||void 0===M?void 0:M.state,"clone"!==(null===M||void 0===M||null===(l=M.state)||void 0===l?void 0:l.type)),(0,k.jsxs)(c.Z,{name:"shop-category-form",layout:"vertical",onFinish:function(e){A(!0),O(e,R).finally((function(){return A(!1)}))},initialValues:(0,r.Z)({active:!0},N.data),form:E,children:[(0,k.jsxs)(s.Z,{gutter:12,children:[(0,k.jsx)(d.Z,{span:12,children:q.map((function(e,n){return(0,k.jsx)(c.Z.Item,{label:S("name"),name:"title[".concat(e.locale,"]"),help:I&&I["title.".concat(K)]?I["title.".concat(K)][0]:null,validateStatus:I?"error":"success",rules:[{validator:function(n,t){return t||(null===e||void 0===e?void 0:e.locale)!==K?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(S("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(S("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(S("required")))}}],hidden:e.locale!==K,children:(0,k.jsx)(p.Z,{placeholder:S("name")})},e.title+n)}))}),(0,k.jsx)(d.Z,{span:12,children:q.map((function(e,n){return(0,k.jsx)(c.Z.Item,{label:S("description"),name:"description[".concat(e.locale,"]"),rules:[{validator:function(n,t){return t||(null===e||void 0===e?void 0:e.locale)!==K?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(S("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<5?Promise.reject(new Error(S("must.be.at.least.5"))):Promise.resolve():Promise.reject(new Error(S("required")))}}],hidden:e.locale!==K,children:(0,k.jsx)(y.Z,{rows:4})},e.locale+n)}))}),(0,k.jsx)(d.Z,{span:12,children:(0,k.jsx)(c.Z.Item,{label:S("keywords"),name:"keywords",rules:[{required:!0,message:S("required")}],children:(0,k.jsx)(v.Z,{mode:"tags",style:{width:"100%"}})})}),!(null!==M&&void 0!==M&&null!==(w=M.state)&&void 0!==w&&w.isParent)&&"clone"!==(null===M||void 0===M||null===(P=M.state)||void 0===P?void 0:P.type)&&(0,k.jsx)(d.Z,{span:12,children:(0,k.jsx)(c.Z.Item,{label:S("parent.category"),name:"parent_id",children:(0,k.jsx)(b.R,{allowClear:!0,fetchOptions:function(e){return V.apply(this,arguments)}})})}),(0,k.jsx)(d.Z,{span:12,children:(0,k.jsx)(c.Z.Item,{label:S("position"),name:"input",rules:[{required:!0,message:S("required")},{type:"number",min:0,max:32767,message:S("must.be.between.0.and.32767")}],children:(0,k.jsx)(f.Z,{className:"w-100"})})}),(0,k.jsx)(d.Z,{span:4,children:(0,k.jsx)(c.Z.Item,{label:S("image"),name:"images",rules:[{required:!R.length,message:S("required")}],children:(0,k.jsx)(Z.Z,{type:"categories",imageList:R,setImageList:T,form:E,multiple:!1})})}),(0,k.jsx)(d.Z,{span:2,children:(0,k.jsx)(c.Z.Item,{label:S("active"),name:"active",valuePropName:"checked",children:(0,k.jsx)(m.Z,{})})})]}),(0,k.jsx)(h.Z,{type:"primary",htmlType:"submit",loading:_,children:S("submit")})]})}},39180:function(e,n,t){t.d(n,{ZP:function(){return N}});var r=t(4942),a=t(87462),o=t(47313),l=t(56482),i=t(46123),u=t.n(i),c=t(16945),s=t(4431),d=t(91964),p=o.createContext(null),v=p.Provider,f=p,m=o.createContext(null),h=m.Provider,y=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},b=function(e,n){var t,i=o.useContext(f),p=o.useContext(m),v=o.useContext(d.E_),h=v.getPrefixCls,b=v.direction,Z=o.useRef(),g=(0,c.sQ)(n,Z),x=(0,o.useContext)(s.aM).isFormItemInput,C=e.prefixCls,j=e.className,k=e.children,w=e.style,P=y(e,["prefixCls","className","children","style"]),E=h("radio",C),O="button"===((null===i||void 0===i?void 0:i.optionType)||p)?"".concat(E,"-button"):E,I=(0,a.Z)({},P);i&&(I.name=i.name,I.onChange=function(n){var t,r;null===(t=e.onChange)||void 0===t||t.call(e,n),null===(r=null===i||void 0===i?void 0:i.onChange)||void 0===r||r.call(i,n)},I.checked=e.value===i.value,I.disabled=e.disabled||i.disabled);var S=u()("".concat(O,"-wrapper"),(t={},(0,r.Z)(t,"".concat(O,"-wrapper-checked"),I.checked),(0,r.Z)(t,"".concat(O,"-wrapper-disabled"),I.disabled),(0,r.Z)(t,"".concat(O,"-wrapper-rtl"),"rtl"===b),(0,r.Z)(t,"".concat(O,"-wrapper-in-form-item"),x),t),j);return o.createElement("label",{className:S,style:w,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(l.Z,(0,a.Z)({},I,{type:"radio",prefixCls:O,ref:g})),void 0!==k?o.createElement("span",null,k):null)},Z=o.forwardRef(b);Z.displayName="Radio";var g=Z,x=t(29439),C=t(10288),j=t(21631),k=t(81176),w=o.forwardRef((function(e,n){var t=o.useContext(d.E_),l=t.getPrefixCls,i=t.direction,c=o.useContext(j.Z),s=(0,C.Z)(e.defaultValue,{value:e.value}),p=(0,x.Z)(s,2),f=p[0],m=p[1];return o.createElement(v,{value:{onChange:function(n){var t=f,r=n.target.value;"value"in e||m(r);var a=e.onChange;a&&r!==t&&a(n)},value:f,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var t,s=e.prefixCls,d=e.className,p=void 0===d?"":d,v=e.options,m=e.buttonStyle,h=void 0===m?"outline":m,y=e.disabled,b=e.children,Z=e.size,x=e.style,C=e.id,j=e.onMouseEnter,w=e.onMouseLeave,P=l("radio",s),E="".concat(P,"-group"),O=b;v&&v.length>0&&(O=v.map((function(e){return"string"===typeof e||"number"===typeof e?o.createElement(g,{key:e.toString(),prefixCls:P,disabled:y,value:e,checked:f===e},e):o.createElement(g,{key:"radio-group-value-options-".concat(e.value),prefixCls:P,disabled:e.disabled||y,value:e.value,checked:f===e.value,style:e.style},e.label)})));var I=Z||c,S=u()(E,"".concat(E,"-").concat(h),(t={},(0,r.Z)(t,"".concat(E,"-").concat(I),I),(0,r.Z)(t,"".concat(E,"-rtl"),"rtl"===i),t),p);return o.createElement("div",(0,a.Z)({},(0,k.Z)(e),{className:S,style:x,onMouseEnter:j,onMouseLeave:w,id:C,ref:n}),O)}())})),P=o.memo(w),E=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},O=function(e,n){var t=o.useContext(d.E_).getPrefixCls,r=e.prefixCls,l=E(e,["prefixCls"]),i=t("radio",r);return o.createElement(h,{value:"button"},o.createElement(g,(0,a.Z)({prefixCls:i},l,{type:"radio",ref:n})))},I=o.forwardRef(O),S=g;S.Button=I,S.Group=P;var N=S},56482:function(e,n,t){var r=t(87462),a=t(4942),o=t(45987),l=t(1413),i=t(15671),u=t(43144),c=t(60136),s=t(29388),d=t(47313),p=t(46123),v=t.n(p),f=function(e){(0,c.Z)(t,e);var n=(0,s.Z)(t);function t(e){var r;(0,i.Z)(this,t),(r=n.call(this,e)).handleChange=function(e){var n=r.props,t=n.disabled,a=n.onChange;t||("checked"in r.props||r.setState({checked:e.target.checked}),a&&a({target:(0,l.Z)((0,l.Z)({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var a="checked"in e?e.checked:e.defaultChecked;return r.state={checked:a},r}return(0,u.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,l=n.className,i=n.style,u=n.name,c=n.id,s=n.type,p=n.disabled,f=n.readOnly,m=n.tabIndex,h=n.onClick,y=n.onFocus,b=n.onBlur,Z=n.onKeyDown,g=n.onKeyPress,x=n.onKeyUp,C=n.autoFocus,j=n.value,k=n.required,w=(0,o.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),P=Object.keys(w).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=w[n]),e}),{}),E=this.state.checked,O=v()(t,l,(e={},(0,a.Z)(e,"".concat(t,"-checked"),E),(0,a.Z)(e,"".concat(t,"-disabled"),p),e));return d.createElement("span",{className:O,style:i},d.createElement("input",(0,r.Z)({name:u,id:c,type:s,required:k,readOnly:f,disabled:p,tabIndex:m,className:"".concat(t,"-input"),checked:!!E,onClick:h,onFocus:y,onBlur:b,onKeyUp:x,onKeyDown:Z,onKeyPress:g,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:j},P)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,l.Z)((0,l.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);f.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},n.Z=f}}]);