"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9994],{30153:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(4942),a=t(47313),o=t(10976),l=t(24511),i=t(68144),c=t(76733),u=t.n(c),s=t(97421),d=t(36104),f=t(23560),p=t(46417);function v(e){var n=e.form,t=e.lang,c=e.languages,v=(0,l.$)().t;function m(e){e.plugins.get("FileRepository").createUploadAdapter=function(e){return function(e){return{upload:function(){return new Promise((function(n,t){var r=new FormData;e.file.then((function(e){e.size/1024/1024<2||(f.Am.error(v("min.2.mb")),t()),r.append("image",e),r.append("type","blogs"),d.Z.upload(r).then((function(e){var t=e.data;n({default:"".concat(s.bV+t.title)})})).catch((function(e){t(e)}))}))}))}}}(e)}}return(0,p.jsx)(a.Fragment,{children:c.map((function(e){return(0,p.jsx)(o.Z.Item,{label:v("description"),name:"description[".concat(e.locale,"]"),valuePropName:"data",getValueFromEvent:function(e,n){return n.getData()},rules:[{required:e.locale===t,message:v("required")}],hidden:e.locale!==t,children:(0,p.jsx)(i.CKEditor,{editor:u(),config:{extraPlugins:[m]},onBlur:function(t,a){var o=a.getData();n.setFieldsValue((0,r.Z)({},"description[".concat(e.value,"]"),o))}})},"desc"+e.locale)}))})}},73431:function(e,n,t){var r=t(47313),a=t(39180),o=t(2717),l=t(28830),i=t(60535),c=t(46417);n.Z=function(){var e=(0,o.I0)(),n=(0,o.v9)((function(e){return e.formLang}),o.wU),t=n.languages,u=n.defaultLang;(0,r.useEffect)((function(){i.Z.getAllActive().then((function(n){var t=n.data;e((0,l.dc)(t)),e((0,l.mh)(t.find((function(e){return 1===e.default})).locale))}))}),[]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.ZP.Group,{value:u,onChange:function(n){var t=n.target.value;e((0,l.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((function(e){return(0,c.jsx)(a.ZP.Button,{value:e.locale,children:e.title},e.id)}))})})}},89281:function(e,n,t){t.d(n,{h:function(){return p}});var r=t(1413),a=t(29439),o=t(45987),l=t(47313),i=t(12279),c=t.n(i),u=t(74294),s=t(72652),d=t(46417),f=["fetchOptions","debounceTimeout","onClear"],p=function(e){var n=e.fetchOptions,t=e.debounceTimeout,i=void 0===t?400:t,p=e.onClear,v=(0,o.Z)(e,f),m=(0,l.useState)(!1),h=(0,a.Z)(m,2),y=h[0],b=h[1],g=(0,l.useState)([]),Z=(0,a.Z)(g,2),x=Z[0],C=Z[1],j=(0,l.useMemo)((function(){return c()((function(e){C([]),b(!0),n(e).then((function(e){C(e),b(!1)}))}),i)}),[n,i]);return(0,d.jsx)(u.Z,(0,r.Z)((0,r.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:j,onClear:function(){j(""),p&&p()},notFoundContent:y?(0,d.jsx)(s.Z,{size:"small"}):"no results"},v),{},{options:x,onFocus:function(){j("")}}))}},75336:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(93433),a=t(4942);function o(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title",o=e.map((function(e){return(0,a.Z)({},e.locale,""===n["".concat(t,"[").concat(e.locale,"]")]?void 0:n["".concat(t,"[").concat(e.locale,"]")])}));return Object.assign.apply(Object,[{}].concat((0,r.Z)(o)))}},16747:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(1413),a=t(15861),o=t(29439),l=t(87757),i=t.n(l),c=t(47313),u=t(10976),s=t(68197),d=t(59624),f=t(66672),p=t(86345),v=t(59491),m=t(2717),h=t(30153),y=t(89281),b=t(24511),g=t(30763),Z=t(46417);function x(e){var n=e.form,t=e.handleSubmit,l=(0,b.$)().t,x=(0,m.v9)((function(e){return e.formLang}),m.wU),C=x.defaultLang,j=x.languages,k=(0,m.v9)((function(e){return e.menu}),m.wU).activeMenu,w=(0,c.useState)(!1),P=(0,o.Z)(w,2),E=P[0],O=P[1];function F(){return(F=(0,a.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:n,type:"career",active:1},e.abrupt("return",g.Z.getAll(t).then((function(e){return e.data.map((function(e){return{label:e.translation?e.translation.title:"no name",value:e.id}}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,Z.jsxs)(u.Z,{name:"basic",layout:"vertical",onFinish:function(e){O(!0),t(e).finally((function(){return O(!1)}))},initialValues:(0,r.Z)({parent_id:{title:"---",value:0,key:0},active:!0},k.data),form:n,children:[(0,Z.jsxs)(s.Z,{gutter:12,children:[(0,Z.jsx)(d.Z,{span:12,children:j.map((function(e,n){return(0,Z.jsx)(u.Z.Item,{label:l("name"),name:"title[".concat(e.locale,"]"),rules:[{validator:function(n,t){return t||(null===e||void 0===e?void 0:e.locale)!==C?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(l("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(l("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(l("required")))}}],hidden:e.locale!==C,children:(0,Z.jsx)(f.Z,{placeholder:l("name")})},(null===e||void 0===e?void 0:e.title)+n)}))}),(0,Z.jsx)(d.Z,{span:12}),(0,Z.jsx)(d.Z,{span:24,children:(0,Z.jsx)(h.Z,{form:n,lang:C,languages:j})}),(0,Z.jsx)(d.Z,{span:12,children:(0,Z.jsx)(u.Z.Item,{label:l("category"),name:"category_id",rules:[{required:!0,message:l("required")}],children:(0,Z.jsx)(y.h,{fetchOptions:function(e){return F.apply(this,arguments)}})})}),(0,Z.jsx)(d.Z,{span:12,children:j.map((function(e,n){return(0,Z.jsx)(u.Z.Item,{label:l("location"),name:"address[".concat(e.locale,"]"),rules:[{validator:function(n,t){return t||(null===e||void 0===e?void 0:e.locale)!==C?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(l("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(l("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(l("required")))}}],hidden:e.locale!==C,children:(0,Z.jsx)(f.Z,{})},e.locale+n)}))}),(0,Z.jsx)(d.Z,{span:12,children:(0,Z.jsx)(u.Z.Item,{label:l("active"),name:"active",valuePropName:"checked",children:(0,Z.jsx)(p.Z,{})})}),(0,Z.jsx)(d.Z,{span:12}),(0,Z.jsx)(d.Z,{span:24,className:"mb-5"})]}),(0,Z.jsx)(v.Z,{type:"primary",htmlType:"submit",loading:E,children:l("submit")})]})}},39180:function(e,n,t){t.d(n,{ZP:function(){return N}});var r=t(4942),a=t(87462),o=t(47313),l=t(56482),i=t(46123),c=t.n(i),u=t(16945),s=t(4431),d=t(91964),f=o.createContext(null),p=f.Provider,v=f,m=o.createContext(null),h=m.Provider,y=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},b=function(e,n){var t,i=o.useContext(v),f=o.useContext(m),p=o.useContext(d.E_),h=p.getPrefixCls,b=p.direction,g=o.useRef(),Z=(0,u.sQ)(n,g),x=(0,o.useContext)(s.aM).isFormItemInput,C=e.prefixCls,j=e.className,k=e.children,w=e.style,P=y(e,["prefixCls","className","children","style"]),E=h("radio",C),O="button"===((null===i||void 0===i?void 0:i.optionType)||f)?"".concat(E,"-button"):E,F=(0,a.Z)({},P);i&&(F.name=i.name,F.onChange=function(n){var t,r;null===(t=e.onChange)||void 0===t||t.call(e,n),null===(r=null===i||void 0===i?void 0:i.onChange)||void 0===r||r.call(i,n)},F.checked=e.value===i.value,F.disabled=e.disabled||i.disabled);var I=c()("".concat(O,"-wrapper"),(t={},(0,r.Z)(t,"".concat(O,"-wrapper-checked"),F.checked),(0,r.Z)(t,"".concat(O,"-wrapper-disabled"),F.disabled),(0,r.Z)(t,"".concat(O,"-wrapper-rtl"),"rtl"===b),(0,r.Z)(t,"".concat(O,"-wrapper-in-form-item"),x),t),j);return o.createElement("label",{className:I,style:w,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(l.Z,(0,a.Z)({},F,{type:"radio",prefixCls:O,ref:Z})),void 0!==k?o.createElement("span",null,k):null)},g=o.forwardRef(b);g.displayName="Radio";var Z=g,x=t(29439),C=t(10288),j=t(21631),k=t(81176),w=o.forwardRef((function(e,n){var t=o.useContext(d.E_),l=t.getPrefixCls,i=t.direction,u=o.useContext(j.Z),s=(0,C.Z)(e.defaultValue,{value:e.value}),f=(0,x.Z)(s,2),v=f[0],m=f[1];return o.createElement(p,{value:{onChange:function(n){var t=v,r=n.target.value;"value"in e||m(r);var a=e.onChange;a&&r!==t&&a(n)},value:v,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var t,s=e.prefixCls,d=e.className,f=void 0===d?"":d,p=e.options,m=e.buttonStyle,h=void 0===m?"outline":m,y=e.disabled,b=e.children,g=e.size,x=e.style,C=e.id,j=e.onMouseEnter,w=e.onMouseLeave,P=l("radio",s),E="".concat(P,"-group"),O=b;p&&p.length>0&&(O=p.map((function(e){return"string"===typeof e||"number"===typeof e?o.createElement(Z,{key:e.toString(),prefixCls:P,disabled:y,value:e,checked:v===e},e):o.createElement(Z,{key:"radio-group-value-options-".concat(e.value),prefixCls:P,disabled:e.disabled||y,value:e.value,checked:v===e.value,style:e.style},e.label)})));var F=g||u,I=c()(E,"".concat(E,"-").concat(h),(t={},(0,r.Z)(t,"".concat(E,"-").concat(F),F),(0,r.Z)(t,"".concat(E,"-rtl"),"rtl"===i),t),f);return o.createElement("div",(0,a.Z)({},(0,k.Z)(e),{className:I,style:x,onMouseEnter:j,onMouseLeave:w,id:C,ref:n}),O)}())})),P=o.memo(w),E=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},O=function(e,n){var t=o.useContext(d.E_).getPrefixCls,r=e.prefixCls,l=E(e,["prefixCls"]),i=t("radio",r);return o.createElement(h,{value:"button"},o.createElement(Z,(0,a.Z)({prefixCls:i},l,{type:"radio",ref:n})))},F=o.forwardRef(O),I=Z;I.Button=F,I.Group=P;var N=I},56482:function(e,n,t){var r=t(87462),a=t(4942),o=t(45987),l=t(1413),i=t(15671),c=t(43144),u=t(60136),s=t(29388),d=t(47313),f=t(46123),p=t.n(f),v=function(e){(0,u.Z)(t,e);var n=(0,s.Z)(t);function t(e){var r;(0,i.Z)(this,t),(r=n.call(this,e)).handleChange=function(e){var n=r.props,t=n.disabled,a=n.onChange;t||("checked"in r.props||r.setState({checked:e.target.checked}),a&&a({target:(0,l.Z)((0,l.Z)({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var a="checked"in e?e.checked:e.defaultChecked;return r.state={checked:a},r}return(0,c.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,l=n.className,i=n.style,c=n.name,u=n.id,s=n.type,f=n.disabled,v=n.readOnly,m=n.tabIndex,h=n.onClick,y=n.onFocus,b=n.onBlur,g=n.onKeyDown,Z=n.onKeyPress,x=n.onKeyUp,C=n.autoFocus,j=n.value,k=n.required,w=(0,o.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),P=Object.keys(w).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=w[n]),e}),{}),E=this.state.checked,O=p()(t,l,(e={},(0,a.Z)(e,"".concat(t,"-checked"),E),(0,a.Z)(e,"".concat(t,"-disabled"),f),e));return d.createElement("span",{className:O,style:i},d.createElement("input",(0,r.Z)({name:c,id:u,type:s,required:k,readOnly:v,disabled:f,tabIndex:m,className:"".concat(t,"-input"),checked:!!E,onClick:h,onFocus:y,onBlur:b,onKeyUp:x,onKeyDown:g,onKeyPress:Z,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:j},P)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,l.Z)((0,l.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},n.Z=v}}]);