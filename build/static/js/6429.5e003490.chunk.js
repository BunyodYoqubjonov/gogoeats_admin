"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6429],{30153:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(4942),a=t(47313),o=t(10976),l=t(24511),i=t(68144),c=t(76733),u=t.n(c),s=t(97421),d=t(36104),f=t(23560),p=t(46417);function v(e){var n=e.form,t=e.lang,c=e.languages,v=(0,l.$)().t;function m(e){e.plugins.get("FileRepository").createUploadAdapter=function(e){return function(e){return{upload:function(){return new Promise((function(n,t){var r=new FormData;e.file.then((function(e){e.size/1024/1024<2||(f.Am.error(v("min.2.mb")),t()),r.append("image",e),r.append("type","blogs"),d.Z.upload(r).then((function(e){var t=e.data;n({default:"".concat(s.bV+t.title)})})).catch((function(e){t(e)}))}))}))}}}(e)}}return(0,p.jsx)(a.Fragment,{children:c.map((function(e){return(0,p.jsx)(o.Z.Item,{label:v("description"),name:"description[".concat(e.locale,"]"),valuePropName:"data",getValueFromEvent:function(e,n){return n.getData()},rules:[{required:e.locale===t,message:v("required")}],hidden:e.locale!==t,children:(0,p.jsx)(i.CKEditor,{editor:u(),config:{extraPlugins:[m]},onBlur:function(t,a){var o=a.getData();n.setFieldsValue((0,r.Z)({},"description[".concat(e.value,"]"),o))}})},"desc"+e.locale)}))})}},73431:function(e,n,t){var r=t(47313),a=t(39180),o=t(2717),l=t(28830),i=t(60535),c=t(46417);n.Z=function(){var e=(0,o.I0)(),n=(0,o.v9)((function(e){return e.formLang}),o.wU),t=n.languages,u=n.defaultLang;(0,r.useEffect)((function(){i.Z.getAllActive().then((function(n){var t=n.data;e((0,l.dc)(t)),e((0,l.mh)(t.find((function(e){return 1===e.default})).locale))}))}),[]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.ZP.Group,{value:u,onChange:function(n){var t=n.target.value;e((0,l.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((function(e){return(0,c.jsx)(a.ZP.Button,{value:e.locale,children:e.title},e.id)}))})})}},6604:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(1413),a=t(29439),o=t(47313),l=t(10976),i=t(68197),c=t(59624),u=t(66672),s=t(45705),d=t(59491),f=t(30153),p=t(24511),v=t(2717),m=t(46417);function h(e){var n=e.form,t=e.handleSubmit,h=(0,p.$)().t,y=(0,v.v9)((function(e){return e.menu}),v.wU).activeMenu,g=(0,v.v9)((function(e){return e.formLang}),v.wU),b=g.languages,x=g.defaultLang,Z=(0,o.useState)(!1),C=(0,a.Z)(Z,2),k=C[0],j=C[1];return(0,m.jsxs)(l.Z,{name:"notification-form",layout:"vertical",onFinish:function(e){j(!0),t(e).finally((function(){return j(!1)}))},form:n,initialValues:(0,r.Z)({active:!0},y.data),children:[(0,m.jsxs)(i.Z,{gutter:12,children:[(0,m.jsx)(c.Z,{span:12,children:b.map((function(e){return(0,m.jsx)(l.Z.Item,{label:h("title"),name:"title[".concat(e.locale,"]"),rules:[{validator:function(n,t){return t||(null===e||void 0===e?void 0:e.locale)!==x?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(h("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(h("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(h("required")))}}],hidden:e.locale!==x,children:(0,m.jsx)(u.Z,{})},"title"+e.locale)}))}),(0,m.jsx)(c.Z,{span:24,children:b.map((function(e){return(0,m.jsx)(l.Z.Item,{label:h("short.description"),name:"short_desc[".concat(e.locale,"]"),rules:[{validator:function(n,t){return t||(null===e||void 0===e?void 0:e.locale)!==x?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(h("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<5?Promise.reject(new Error(h("must.be.at.least.5"))):Promise.resolve():Promise.reject(new Error(h("required")))}}],hidden:e.locale!==x,children:(0,m.jsx)(u.Z,{})},"short_desc"+e.locale)}))}),(0,m.jsx)(c.Z,{span:24,children:(0,m.jsx)(f.Z,{form:n,languages:b,lang:x})})]}),(0,m.jsx)(s.Z,{children:(0,m.jsx)(d.Z,{type:"primary",htmlType:"submit",loading:k,children:h("save")})})]})}},39180:function(e,n,t){t.d(n,{ZP:function(){return I}});var r=t(4942),a=t(87462),o=t(47313),l=t(56482),i=t(46123),c=t.n(i),u=t(16945),s=t(4431),d=t(91964),f=o.createContext(null),p=f.Provider,v=f,m=o.createContext(null),h=m.Provider,y=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},g=function(e,n){var t,i=o.useContext(v),f=o.useContext(m),p=o.useContext(d.E_),h=p.getPrefixCls,g=p.direction,b=o.useRef(),x=(0,u.sQ)(n,b),Z=(0,o.useContext)(s.aM).isFormItemInput,C=e.prefixCls,k=e.className,j=e.children,P=e.style,E=y(e,["prefixCls","className","children","style"]),w=h("radio",C),O="button"===((null===i||void 0===i?void 0:i.optionType)||f)?"".concat(w,"-button"):w,F=(0,a.Z)({},E);i&&(F.name=i.name,F.onChange=function(n){var t,r;null===(t=e.onChange)||void 0===t||t.call(e,n),null===(r=null===i||void 0===i?void 0:i.onChange)||void 0===r||r.call(i,n)},F.checked=e.value===i.value,F.disabled=e.disabled||i.disabled);var N=c()("".concat(O,"-wrapper"),(t={},(0,r.Z)(t,"".concat(O,"-wrapper-checked"),F.checked),(0,r.Z)(t,"".concat(O,"-wrapper-disabled"),F.disabled),(0,r.Z)(t,"".concat(O,"-wrapper-rtl"),"rtl"===g),(0,r.Z)(t,"".concat(O,"-wrapper-in-form-item"),Z),t),k);return o.createElement("label",{className:N,style:P,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(l.Z,(0,a.Z)({},F,{type:"radio",prefixCls:O,ref:x})),void 0!==j?o.createElement("span",null,j):null)},b=o.forwardRef(g);b.displayName="Radio";var x=b,Z=t(29439),C=t(10288),k=t(21631),j=t(81176),P=o.forwardRef((function(e,n){var t=o.useContext(d.E_),l=t.getPrefixCls,i=t.direction,u=o.useContext(k.Z),s=(0,C.Z)(e.defaultValue,{value:e.value}),f=(0,Z.Z)(s,2),v=f[0],m=f[1];return o.createElement(p,{value:{onChange:function(n){var t=v,r=n.target.value;"value"in e||m(r);var a=e.onChange;a&&r!==t&&a(n)},value:v,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var t,s=e.prefixCls,d=e.className,f=void 0===d?"":d,p=e.options,m=e.buttonStyle,h=void 0===m?"outline":m,y=e.disabled,g=e.children,b=e.size,Z=e.style,C=e.id,k=e.onMouseEnter,P=e.onMouseLeave,E=l("radio",s),w="".concat(E,"-group"),O=g;p&&p.length>0&&(O=p.map((function(e){return"string"===typeof e||"number"===typeof e?o.createElement(x,{key:e.toString(),prefixCls:E,disabled:y,value:e,checked:v===e},e):o.createElement(x,{key:"radio-group-value-options-".concat(e.value),prefixCls:E,disabled:e.disabled||y,value:e.value,checked:v===e.value,style:e.style},e.label)})));var F=b||u,N=c()(w,"".concat(w,"-").concat(h),(t={},(0,r.Z)(t,"".concat(w,"-").concat(F),F),(0,r.Z)(t,"".concat(w,"-rtl"),"rtl"===i),t),f);return o.createElement("div",(0,a.Z)({},(0,j.Z)(e),{className:N,style:Z,onMouseEnter:k,onMouseLeave:P,id:C,ref:n}),O)}())})),E=o.memo(P),w=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},O=function(e,n){var t=o.useContext(d.E_).getPrefixCls,r=e.prefixCls,l=w(e,["prefixCls"]),i=t("radio",r);return o.createElement(h,{value:"button"},o.createElement(x,(0,a.Z)({prefixCls:i},l,{type:"radio",ref:n})))},F=o.forwardRef(O),N=x;N.Button=F,N.Group=E;var I=N},56482:function(e,n,t){var r=t(87462),a=t(4942),o=t(45987),l=t(1413),i=t(15671),c=t(43144),u=t(60136),s=t(29388),d=t(47313),f=t(46123),p=t.n(f),v=function(e){(0,u.Z)(t,e);var n=(0,s.Z)(t);function t(e){var r;(0,i.Z)(this,t),(r=n.call(this,e)).handleChange=function(e){var n=r.props,t=n.disabled,a=n.onChange;t||("checked"in r.props||r.setState({checked:e.target.checked}),a&&a({target:(0,l.Z)((0,l.Z)({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var a="checked"in e?e.checked:e.defaultChecked;return r.state={checked:a},r}return(0,c.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,l=n.className,i=n.style,c=n.name,u=n.id,s=n.type,f=n.disabled,v=n.readOnly,m=n.tabIndex,h=n.onClick,y=n.onFocus,g=n.onBlur,b=n.onKeyDown,x=n.onKeyPress,Z=n.onKeyUp,C=n.autoFocus,k=n.value,j=n.required,P=(0,o.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),E=Object.keys(P).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=P[n]),e}),{}),w=this.state.checked,O=p()(t,l,(e={},(0,a.Z)(e,"".concat(t,"-checked"),w),(0,a.Z)(e,"".concat(t,"-disabled"),f),e));return d.createElement("span",{className:O,style:i},d.createElement("input",(0,r.Z)({name:c,id:u,type:s,required:j,readOnly:v,disabled:f,tabIndex:m,className:"".concat(t,"-input"),checked:!!w,onClick:h,onFocus:y,onBlur:g,onKeyUp:Z,onKeyDown:b,onKeyPress:x,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:k},E)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,l.Z)((0,l.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},n.Z=v}}]);