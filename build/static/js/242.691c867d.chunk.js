"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[242],{73431:function(e,n,t){var a=t(47313),r=t(39180),o=t(2717),l=t(28830),c=t(60535),i=t(46417);n.Z=function(){var e=(0,o.I0)(),n=(0,o.v9)((function(e){return e.formLang}),o.wU),t=n.languages,u=n.defaultLang;(0,a.useEffect)((function(){c.Z.getAllActive().then((function(n){var t=n.data;e((0,l.dc)(t)),e((0,l.mh)(t.find((function(e){return 1===e.default})).locale))}))}),[]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.ZP.Group,{value:u,onChange:function(n){var t=n.target.value;e((0,l.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((function(e){return(0,i.jsx)(r.ZP.Button,{value:e.locale,children:e.title},e.id)}))})})}},75336:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(93433),r=t(4942);function o(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title",o=e.map((function(e){return(0,r.Z)({},e.locale,""===n["".concat(t,"[").concat(e.locale,"]")]?void 0:n["".concat(t,"[").concat(e.locale,"]")])}));return Object.assign.apply(Object,[{}].concat((0,a.Z)(o)))}},40242:function(e,n,t){t.r(n);var a=t(1413),r=t(93433),o=t(4942),l=t(29439),c=t(47313),i=t(97890),u=t(23560),s=t(10976),d=t(77181),f=t(72652),p=t(2717),v=t(90954),m=t(24511),h=t(73431),y=t(75336),g=t(61197),b=t(60692),Z=t(51698),x=t(46417);n.default=function(){var e=(0,m.$)().t,n=(0,p.v9)((function(e){return e.menu}),p.wU).activeMenu,t=(0,p.I0)(),C=s.Z.useForm(),k=(0,l.Z)(C,1)[0],j=(0,i.s0)(),O=(0,i.UO)().id,w=(0,c.useState)(!1),E=(0,l.Z)(w,2),P=E[0],N=E[1],I=(0,p.v9)((function(e){return e.formLang}),p.wU).languages;(0,c.useEffect)((function(){return function(){var e=k.getFieldsValue(!0);t((0,v.nc)({activeMenu:n,data:e}))}}),[]);var S=function(e){N(!0),g.Z.getById(e).then((function(e){var l,c=e.data,i=(0,a.Z)({images:(l=[c.img],l.map((function(e){return{uid:e,name:e,url:e}})))},function(e){if(!e)return{};var n=e.translations,t=I.map((function(e){var t;return(0,o.Z)({},"title[".concat(e.locale,"]"),null===(t=n.find((function(n){return n.locale===e.locale})))||void 0===t?void 0:t.title)}));return Object.assign.apply(Object,[{}].concat((0,r.Z)(t)))}(c));k.setFieldsValue(i),t((0,v.nc)({activeMenu:n,data:i}))})).finally((function(){t((0,v.A_)(n)),N(!1)}))};return(0,c.useEffect)((function(){n.refetch&&S(O)}),[n.refetch]),(0,x.jsx)(d.Z,{title:e("shop.banner"),className:"h-100",extra:(0,x.jsx)(h.Z,{}),children:P?(0,x.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,x.jsx)(f.Z,{size:"large",className:"py-5"})}):(0,x.jsx)(Z.Z,{form:k,handleSubmit:function(r,o){var l={images:o.map((function(e){return e.name})),title:(0,y.Z)(I,r,"title")},c="shop-tag";return g.Z.create(l).then((function(){u.Am.success(e("successfully.cloned")),(0,p.dC)((function(){t((0,v.ph)((0,a.Z)((0,a.Z)({},n),{},{nextUrl:c}))),t((0,b.S)({}))})),j("/".concat(c))}))}})})}},51698:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(1413),r=t(29439),o=t(47313),l=t(10976),c=t(68197),i=t(59624),u=t(66672),s=t(59491),d=t(5764),f=t(24511),p=t(2717),v=t(46417);function m(e){var n,t,m=e.form,h=e.handleSubmit,y=(0,f.$)().t,g=(0,p.v9)((function(e){return e.menu}),p.wU).activeMenu,b=(0,p.v9)((function(e){return e.formLang}),p.wU),Z=b.languages,x=b.defaultLang,C=(0,o.useState)(!1),k=(0,r.Z)(C,2),j=k[0],O=k[1],w=(0,o.useState)(null!==(n=g.data)&&void 0!==n&&n.images?null===(t=g.data)||void 0===t?void 0:t.images:[]),E=(0,r.Z)(w,2),P=E[0],N=E[1];return(0,v.jsxs)(l.Z,{name:"shop-tag-form",layout:"vertical",onFinish:function(e){O(!0),h(e,P).finally((function(){return O(!1)}))},form:m,initialValues:(0,a.Z)({clickable:!0},g.data),className:"d-flex flex-column h-100",children:[(0,v.jsxs)(c.Z,{gutter:12,children:[(0,v.jsx)(i.Z,{span:12,children:Z.map((function(e){return(0,v.jsx)(l.Z.Item,{label:y("title"),name:"title[".concat(e.locale,"]"),rules:[{required:e.locale===x,message:y("required")}],hidden:e.locale!==x,children:(0,v.jsx)(u.Z,{})},"title"+e.locale)}))}),(0,v.jsx)(i.Z,{span:12,children:(0,v.jsx)(l.Z.Item,{rules:[{required:!0,message:y("required")}],label:y("image"),name:"images",children:(0,v.jsx)(d.Z,{type:"products",imageList:P,setImageList:N,form:m,length:"1",multiple:!1})})})]}),(0,v.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,v.jsx)("div",{className:"pb-5",children:(0,v.jsx)(s.Z,{type:"primary",htmlType:"submit",loading:j,disabled:j,children:y("submit")})})})]})}},39180:function(e,n,t){t.d(n,{ZP:function(){return S}});var a=t(4942),r=t(87462),o=t(47313),l=t(56482),c=t(46123),i=t.n(c),u=t(16945),s=t(4431),d=t(91964),f=o.createContext(null),p=f.Provider,v=f,m=o.createContext(null),h=m.Provider,y=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},g=function(e,n){var t,c=o.useContext(v),f=o.useContext(m),p=o.useContext(d.E_),h=p.getPrefixCls,g=p.direction,b=o.useRef(),Z=(0,u.sQ)(n,b),x=(0,o.useContext)(s.aM).isFormItemInput,C=e.prefixCls,k=e.className,j=e.children,O=e.style,w=y(e,["prefixCls","className","children","style"]),E=h("radio",C),P="button"===((null===c||void 0===c?void 0:c.optionType)||f)?"".concat(E,"-button"):E,N=(0,r.Z)({},w);c&&(N.name=c.name,N.onChange=function(n){var t,a;null===(t=e.onChange)||void 0===t||t.call(e,n),null===(a=null===c||void 0===c?void 0:c.onChange)||void 0===a||a.call(c,n)},N.checked=e.value===c.value,N.disabled=e.disabled||c.disabled);var I=i()("".concat(P,"-wrapper"),(t={},(0,a.Z)(t,"".concat(P,"-wrapper-checked"),N.checked),(0,a.Z)(t,"".concat(P,"-wrapper-disabled"),N.disabled),(0,a.Z)(t,"".concat(P,"-wrapper-rtl"),"rtl"===g),(0,a.Z)(t,"".concat(P,"-wrapper-in-form-item"),x),t),k);return o.createElement("label",{className:I,style:O,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(l.Z,(0,r.Z)({},N,{type:"radio",prefixCls:P,ref:Z})),void 0!==j?o.createElement("span",null,j):null)},b=o.forwardRef(g);b.displayName="Radio";var Z=b,x=t(29439),C=t(10288),k=t(21631),j=t(81176),O=o.forwardRef((function(e,n){var t=o.useContext(d.E_),l=t.getPrefixCls,c=t.direction,u=o.useContext(k.Z),s=(0,C.Z)(e.defaultValue,{value:e.value}),f=(0,x.Z)(s,2),v=f[0],m=f[1];return o.createElement(p,{value:{onChange:function(n){var t=v,a=n.target.value;"value"in e||m(a);var r=e.onChange;r&&a!==t&&r(n)},value:v,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var t,s=e.prefixCls,d=e.className,f=void 0===d?"":d,p=e.options,m=e.buttonStyle,h=void 0===m?"outline":m,y=e.disabled,g=e.children,b=e.size,x=e.style,C=e.id,k=e.onMouseEnter,O=e.onMouseLeave,w=l("radio",s),E="".concat(w,"-group"),P=g;p&&p.length>0&&(P=p.map((function(e){return"string"===typeof e||"number"===typeof e?o.createElement(Z,{key:e.toString(),prefixCls:w,disabled:y,value:e,checked:v===e},e):o.createElement(Z,{key:"radio-group-value-options-".concat(e.value),prefixCls:w,disabled:e.disabled||y,value:e.value,checked:v===e.value,style:e.style},e.label)})));var N=b||u,I=i()(E,"".concat(E,"-").concat(h),(t={},(0,a.Z)(t,"".concat(E,"-").concat(N),N),(0,a.Z)(t,"".concat(E,"-rtl"),"rtl"===c),t),f);return o.createElement("div",(0,r.Z)({},(0,j.Z)(e),{className:I,style:x,onMouseEnter:k,onMouseLeave:O,id:C,ref:n}),P)}())})),w=o.memo(O),E=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},P=function(e,n){var t=o.useContext(d.E_).getPrefixCls,a=e.prefixCls,l=E(e,["prefixCls"]),c=t("radio",a);return o.createElement(h,{value:"button"},o.createElement(Z,(0,r.Z)({prefixCls:c},l,{type:"radio",ref:n})))},N=o.forwardRef(P),I=Z;I.Button=N,I.Group=w;var S=I},56482:function(e,n,t){var a=t(87462),r=t(4942),o=t(45987),l=t(1413),c=t(15671),i=t(43144),u=t(60136),s=t(29388),d=t(47313),f=t(46123),p=t.n(f),v=function(e){(0,u.Z)(t,e);var n=(0,s.Z)(t);function t(e){var a;(0,c.Z)(this,t),(a=n.call(this,e)).handleChange=function(e){var n=a.props,t=n.disabled,r=n.onChange;t||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:(0,l.Z)((0,l.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return(0,i.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,l=n.className,c=n.style,i=n.name,u=n.id,s=n.type,f=n.disabled,v=n.readOnly,m=n.tabIndex,h=n.onClick,y=n.onFocus,g=n.onBlur,b=n.onKeyDown,Z=n.onKeyPress,x=n.onKeyUp,C=n.autoFocus,k=n.value,j=n.required,O=(0,o.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),w=Object.keys(O).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=O[n]),e}),{}),E=this.state.checked,P=p()(t,l,(e={},(0,r.Z)(e,"".concat(t,"-checked"),E),(0,r.Z)(e,"".concat(t,"-disabled"),f),e));return d.createElement("span",{className:P,style:c},d.createElement("input",(0,a.Z)({name:i,id:u,type:s,required:j,readOnly:v,disabled:f,tabIndex:m,className:"".concat(t,"-input"),checked:!!E,onClick:h,onFocus:y,onBlur:g,onKeyUp:x,onKeyDown:b,onKeyPress:Z,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:k},w)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,l.Z)((0,l.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},n.Z=v}}]);