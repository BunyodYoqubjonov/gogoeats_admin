"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3668],{73431:function(e,n,t){var r=t(47313),a=t(39180),o=t(2717),l=t(28830),i=t(60535),c=t(46417);n.Z=function(){var e=(0,o.I0)(),n=(0,o.v9)((function(e){return e.formLang}),o.wU),t=n.languages,u=n.defaultLang;(0,r.useEffect)((function(){i.Z.getAllActive().then((function(n){var t=n.data;e((0,l.dc)(t)),e((0,l.mh)(t.find((function(e){return 1===e.default})).locale))}))}),[]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.ZP.Group,{value:u,onChange:function(n){var t=n.target.value;e((0,l.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((function(e){return(0,c.jsx)(a.ZP.Button,{value:e.locale,children:e.title},e.id)}))})})}},10582:function(e,n,t){t.d(n,{Z:function(){return b}});var r=t(1413),a=t(29439),o=t(47313),l=t(10976),i=t(68197),c=t(59624),u=t(66672),s=t(74294),d=t(86345),p=t(59491),v=t(52421),f=t(5764),m=t(2717),h=t(24511),y=t(46417);function b(e){var n,t,b=e.form,g=e.handleSubmit,Z=e.error,x=(0,h.$)().t,C=(0,m.v9)((function(e){return e.menu}),m.wU).activeMenu,k=(0,m.v9)((function(e){return e.formLang}),m.wU),j=k.defaultLang,w=k.languages,P=(0,o.useState)(null!==(n=C.data)&&void 0!==n&&n.image?[null===(t=C.data)||void 0===t?void 0:t.image]:[]),E=(0,a.Z)(P,2),O=E[0],I=E[1],N=(0,o.useState)(!1),S=(0,a.Z)(N,2),K=S[0],F=S[1];return(0,y.jsxs)(l.Z,{name:"basic",layout:"vertical",onFinish:function(e){F(!0),g(e,O).finally((function(){return F(!1)}))},initialValues:(0,r.Z)({parent_id:{title:"---",value:0,key:0},active:!0},C.data),form:b,children:[(0,y.jsxs)(i.Z,{gutter:12,children:[(0,y.jsx)(c.Z,{span:12,children:w.map((function(e,n){return(0,y.jsx)(l.Z.Item,{label:x("name"),name:"title[".concat(e.locale,"]"),help:Z&&Z["title.".concat(j)]?Z["title.".concat(j)][0]:null,validateStatus:Z?"error":"success",rules:[{validator:function(n,t){return t||(null===e||void 0===e?void 0:e.locale)!==j?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(x("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(x("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(x("required")))}}],hidden:e.locale!==j,children:(0,y.jsx)(u.Z,{placeholder:x("name")})},e.title+n)}))}),(0,y.jsx)(c.Z,{span:12,children:w.map((function(e,n){return(0,y.jsx)(l.Z.Item,{label:x("description"),name:"description[".concat(e.locale,"]"),rules:[{validator:function(n,t){return t||(null===e||void 0===e?void 0:e.locale)!==j?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(x("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<5?Promise.reject(new Error(x("must.be.at.least.5"))):Promise.resolve():Promise.reject(new Error(x("required")))}}],hidden:e.locale!==j,children:(0,y.jsx)(v.Z,{rows:4})},e.locale+n)}))}),(0,y.jsx)(c.Z,{span:12,children:(0,y.jsx)(l.Z.Item,{label:x("keywords"),name:"keywords",rules:[{required:!0,message:x("required")}],children:(0,y.jsx)(s.Z,{mode:"tags",style:{width:"100%"}})})}),(0,y.jsx)(c.Z,{span:4,children:(0,y.jsx)(l.Z.Item,{label:x("image"),name:"images",rules:[{validator:function(){return 0===(null===O||void 0===O?void 0:O.length)?Promise.reject(new Error(x("required"))):Promise.resolve()}}],children:(0,y.jsx)(f.Z,{type:"categories",imageList:O,setImageList:I,form:b,multiple:!1})})}),(0,y.jsx)(c.Z,{span:2,children:(0,y.jsx)(l.Z.Item,{label:x("active"),name:"active",valuePropName:"checked",children:(0,y.jsx)(d.Z,{})})})]}),(0,y.jsx)(p.Z,{type:"primary",htmlType:"submit",loading:K,children:x("submit")})]})}},39180:function(e,n,t){t.d(n,{ZP:function(){return S}});var r=t(4942),a=t(87462),o=t(47313),l=t(56482),i=t(46123),c=t.n(i),u=t(16945),s=t(4431),d=t(91964),p=o.createContext(null),v=p.Provider,f=p,m=o.createContext(null),h=m.Provider,y=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},b=function(e,n){var t,i=o.useContext(f),p=o.useContext(m),v=o.useContext(d.E_),h=v.getPrefixCls,b=v.direction,g=o.useRef(),Z=(0,u.sQ)(n,g),x=(0,o.useContext)(s.aM).isFormItemInput,C=e.prefixCls,k=e.className,j=e.children,w=e.style,P=y(e,["prefixCls","className","children","style"]),E=h("radio",C),O="button"===((null===i||void 0===i?void 0:i.optionType)||p)?"".concat(E,"-button"):E,I=(0,a.Z)({},P);i&&(I.name=i.name,I.onChange=function(n){var t,r;null===(t=e.onChange)||void 0===t||t.call(e,n),null===(r=null===i||void 0===i?void 0:i.onChange)||void 0===r||r.call(i,n)},I.checked=e.value===i.value,I.disabled=e.disabled||i.disabled);var N=c()("".concat(O,"-wrapper"),(t={},(0,r.Z)(t,"".concat(O,"-wrapper-checked"),I.checked),(0,r.Z)(t,"".concat(O,"-wrapper-disabled"),I.disabled),(0,r.Z)(t,"".concat(O,"-wrapper-rtl"),"rtl"===b),(0,r.Z)(t,"".concat(O,"-wrapper-in-form-item"),x),t),k);return o.createElement("label",{className:N,style:w,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(l.Z,(0,a.Z)({},I,{type:"radio",prefixCls:O,ref:Z})),void 0!==j?o.createElement("span",null,j):null)},g=o.forwardRef(b);g.displayName="Radio";var Z=g,x=t(29439),C=t(10288),k=t(21631),j=t(81176),w=o.forwardRef((function(e,n){var t=o.useContext(d.E_),l=t.getPrefixCls,i=t.direction,u=o.useContext(k.Z),s=(0,C.Z)(e.defaultValue,{value:e.value}),p=(0,x.Z)(s,2),f=p[0],m=p[1];return o.createElement(v,{value:{onChange:function(n){var t=f,r=n.target.value;"value"in e||m(r);var a=e.onChange;a&&r!==t&&a(n)},value:f,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var t,s=e.prefixCls,d=e.className,p=void 0===d?"":d,v=e.options,m=e.buttonStyle,h=void 0===m?"outline":m,y=e.disabled,b=e.children,g=e.size,x=e.style,C=e.id,k=e.onMouseEnter,w=e.onMouseLeave,P=l("radio",s),E="".concat(P,"-group"),O=b;v&&v.length>0&&(O=v.map((function(e){return"string"===typeof e||"number"===typeof e?o.createElement(Z,{key:e.toString(),prefixCls:P,disabled:y,value:e,checked:f===e},e):o.createElement(Z,{key:"radio-group-value-options-".concat(e.value),prefixCls:P,disabled:e.disabled||y,value:e.value,checked:f===e.value,style:e.style},e.label)})));var I=g||u,N=c()(E,"".concat(E,"-").concat(h),(t={},(0,r.Z)(t,"".concat(E,"-").concat(I),I),(0,r.Z)(t,"".concat(E,"-rtl"),"rtl"===i),t),p);return o.createElement("div",(0,a.Z)({},(0,j.Z)(e),{className:N,style:x,onMouseEnter:k,onMouseLeave:w,id:C,ref:n}),O)}())})),P=o.memo(w),E=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},O=function(e,n){var t=o.useContext(d.E_).getPrefixCls,r=e.prefixCls,l=E(e,["prefixCls"]),i=t("radio",r);return o.createElement(h,{value:"button"},o.createElement(Z,(0,a.Z)({prefixCls:i},l,{type:"radio",ref:n})))},I=o.forwardRef(O),N=Z;N.Button=I,N.Group=P;var S=N},56482:function(e,n,t){var r=t(87462),a=t(4942),o=t(45987),l=t(1413),i=t(15671),c=t(43144),u=t(60136),s=t(29388),d=t(47313),p=t(46123),v=t.n(p),f=function(e){(0,u.Z)(t,e);var n=(0,s.Z)(t);function t(e){var r;(0,i.Z)(this,t),(r=n.call(this,e)).handleChange=function(e){var n=r.props,t=n.disabled,a=n.onChange;t||("checked"in r.props||r.setState({checked:e.target.checked}),a&&a({target:(0,l.Z)((0,l.Z)({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var a="checked"in e?e.checked:e.defaultChecked;return r.state={checked:a},r}return(0,c.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,l=n.className,i=n.style,c=n.name,u=n.id,s=n.type,p=n.disabled,f=n.readOnly,m=n.tabIndex,h=n.onClick,y=n.onFocus,b=n.onBlur,g=n.onKeyDown,Z=n.onKeyPress,x=n.onKeyUp,C=n.autoFocus,k=n.value,j=n.required,w=(0,o.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),P=Object.keys(w).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=w[n]),e}),{}),E=this.state.checked,O=v()(t,l,(e={},(0,a.Z)(e,"".concat(t,"-checked"),E),(0,a.Z)(e,"".concat(t,"-disabled"),p),e));return d.createElement("span",{className:O,style:i},d.createElement("input",(0,r.Z)({name:c,id:u,type:s,required:j,readOnly:f,disabled:p,tabIndex:m,className:"".concat(t,"-input"),checked:!!E,onClick:h,onFocus:y,onBlur:b,onKeyUp:x,onKeyDown:g,onKeyPress:Z,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:k},P)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,l.Z)((0,l.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);f.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},n.Z=f}}]);