"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1749],{73431:function(e,n,t){var a=t(47313),l=t(39180),o=t(2717),r=t(28830),i=t(60535),c=t(46417);n.Z=function(){var e=(0,o.I0)(),n=(0,o.v9)((function(e){return e.formLang}),o.wU),t=n.languages,u=n.defaultLang;(0,a.useEffect)((function(){i.Z.getAllActive().then((function(n){var t=n.data;e((0,r.dc)(t)),e((0,r.mh)(t.find((function(e){return 1===e.default})).locale))}))}),[]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(l.ZP.Group,{value:u,onChange:function(n){var t=n.target.value;e((0,r.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((function(e){return(0,c.jsx)(l.ZP.Button,{value:e.locale,children:e.title},e.id)}))})})}},75336:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(93433),l=t(4942);function o(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title",o=e.map((function(e){return(0,l.Z)({},e.locale,""===n["".concat(t,"[").concat(e.locale,"]")]?void 0:n["".concat(t,"[").concat(e.locale,"]")])}));return Object.assign.apply(Object,[{}].concat((0,a.Z)(o)))}},81749:function(e,n,t){t.r(n);var a=t(1413),l=t(93433),o=t(29439),r=t(47313),i=t(97890),c=t(23560),u=t(66672),s=t(10976),d=t(77181),f=t(68197),p=t(59624),v=t(59491),m=t(72652),h=t(2717),g=t(90954),y=t(57302),Z=t(24511),x=t(73431),b=t(75336),j=t(88357),C=t(20503),k=t(8550),w=t(46417),E=u.Z.TextArea;n.default=function(){var e,n=(0,Z.$)().t,t=(0,h.v9)((function(e){return e.menu}),h.wU).activeMenu,O=(0,h.I0)(),P=s.Z.useForm(),I=(0,o.Z)(P,1)[0],N=(0,i.s0)(),F=(0,r.useState)(!1),S=(0,o.Z)(F,2),K=S[0],q=S[1],M=(0,r.useState)(!1),B=(0,o.Z)(M,2),L=B[0],U=B[1],D=(0,h.v9)((function(e){return e.formLang}),h.wU),_=D.languages,A=D.defaultLang,R=(0,i.UO)().id,T=(0,r.useState)(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.img),V=(0,o.Z)(T,2),z=V[0],G=V[1],Q=(0,r.useState)(null!==t&&void 0!==t&&t.data?[null===t||void 0===t?void 0:t.data["features[0].img"],null===t||void 0===t?void 0:t.data["features[1].img"],null===t||void 0===t?void 0:t.data["features[2].img"]]:["","",""]),W=(0,o.Z)(Q,2),$=W[0],H=W[1];function J(e){if(!e)return{};var n={},t={};return _.forEach((function(a){n["title[".concat(a.locale,"]")]=e.title.hasOwnProperty(a.locale)?e.title[a.locale]:void 0,t["description[".concat(a.locale,"]")]=e.description.hasOwnProperty(a.locale)?e.description[a.locale]:void 0})),(0,a.Z)((0,a.Z)({},n),t)}(0,r.useEffect)((function(){return function(){var e=I.getFieldsValue(!0);O((0,g.nc)({activeMenu:t,data:e}))}}),[]);return(0,r.useEffect)((function(){var e;t.refetch&&(e=R,q(!0),j.Z.getById(e).then((function(e){var n,t,l,o,r,i=e.data,c=(0,a.Z)((0,a.Z)({},J(null===i||void 0===i?void 0:i.data)),{},{features:null===i||void 0===i||null===(n=i.data)||void 0===n||null===(t=n.features)||void 0===t?void 0:t.map((function(e){return(0,a.Z)({},J(e))}))});I.setFieldsValue(c),G((0,k.Z)(null===i||void 0===i||null===(l=i.data)||void 0===l?void 0:l.img)),H(null===i||void 0===i||null===(o=i.data)||void 0===o||null===(r=o.features)||void 0===r?void 0:r.map((function(e){return(0,k.Z)(e.img)})))})).finally((function(){O((0,g.A_)(t)),q(!1)})))}),[t.refetch]),(0,w.jsx)(d.Z,{title:n("edit.landing.page"),className:"h-100",extra:(0,w.jsx)(x.Z,{}),children:K?(0,w.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,w.jsx)(m.Z,{size:"large",className:"py-5"})}):(0,w.jsxs)(s.Z,{name:"landing-page-edit",layout:"vertical",onFinish:function(e){U(!0);var l="settings/landing-page",o={title:(0,b.Z)(_,e,"title"),description:(0,b.Z)(_,e,"description"),img:null===z||void 0===z?void 0:z.name,features:e.features.map((function(e,n){var t;return{img:null===(t=$[n])||void 0===t?void 0:t.name,title:(0,b.Z)(_,e,"title"),description:(0,b.Z)(_,e,"description")}}))};j.Z.update(R,{data:o,type:"welcome"}).then((function(){c.Am.success(n("successfully.created")),(0,h.dC)((function(){O((0,g.ph)((0,a.Z)((0,a.Z)({},t),{},{nextUrl:l}))),O((0,y.P)({}))})),N("/".concat(l))})).finally((function(){return U(!1)}))},form:I,initialValues:(0,a.Z)({features:["","",""]},t.data),className:"d-flex flex-column h-100",children:[(0,w.jsxs)(f.Z,{gutter:12,children:[(0,w.jsxs)(p.Z,{span:12,children:[_.map((function(e){return(0,w.jsx)(s.Z.Item,{label:"".concat(n("title")," (").concat(e.locale,")"),name:"title[".concat(e.locale,"]"),rules:[{required:e.locale===A,message:n("required")}],hidden:e.locale!==A,children:(0,w.jsx)(u.Z,{})},"title"+e.locale)})),_.map((function(e){return(0,w.jsx)(s.Z.Item,{label:"".concat(n("description")," (").concat(e.locale,")"),name:"description[".concat(e.locale,"]"),rules:[{required:e.locale===A,message:n("required")}],hidden:e.locale!==A,children:(0,w.jsx)(E,{rows:3})},"description"+e.locale)}))]}),(0,w.jsx)(p.Z,{span:12,children:(0,w.jsx)(s.Z.Item,{label:n("background.image"),children:(0,w.jsx)(C.Z,{type:"languages",image:z,setImage:G,form:I,name:"img"})})})]}),(0,w.jsx)(d.Z,{title:n("features"),children:(0,w.jsx)(s.Z.List,{name:"features",children:function(e){return(0,w.jsx)("div",{children:e.map((function(e,t){return(0,w.jsxs)(f.Z,{gutter:12,align:"middle",style:{borderBottom:"1px solid var(--grey)",marginBottom:24,borderWidth:2===t?0:1},children:[(0,w.jsxs)(p.Z,{span:20,children:[_.map((function(e){return(0,w.jsx)(s.Z.Item,{label:"".concat(n("title")," (").concat(e.locale,")"),name:[t,"title[".concat(e.locale,"]")],rules:[{required:e.locale===A,message:n("required")}],hidden:e.locale!==A,children:(0,w.jsx)(u.Z,{})},"title"+e.locale)})),_.map((function(e){return(0,w.jsx)(s.Z.Item,{label:"".concat(n("description")," (").concat(e.locale,")"),name:[t,"description[".concat(e.locale,"]")],rules:[{required:e.locale===A,message:n("required")}],hidden:e.locale!==A,children:(0,w.jsx)(E,{rows:3})},"description"+e.locale)}))]}),(0,w.jsx)(p.Z,{span:4,children:(0,w.jsx)(s.Z.Item,{label:n("media"),children:(0,w.jsx)(C.Z,{type:"languages",isVideo:!0,image:$[t],setImage:function(e){return function(e,n){var t=(0,l.Z)($);t[n]=e,H(t)}(e,t)},form:I,name:"features[".concat(t,"].img")})})})]},e.key)}))})}})}),(0,w.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,w.jsx)("div",{className:"pb-5",children:(0,w.jsx)(v.Z,{type:"primary",htmlType:"submit",loading:L,children:n("submit")})})})]})})}},39180:function(e,n,t){t.d(n,{ZP:function(){return F}});var a=t(4942),l=t(87462),o=t(47313),r=t(56482),i=t(46123),c=t.n(i),u=t(16945),s=t(4431),d=t(91964),f=o.createContext(null),p=f.Provider,v=f,m=o.createContext(null),h=m.Provider,g=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t},y=function(e,n){var t,i=o.useContext(v),f=o.useContext(m),p=o.useContext(d.E_),h=p.getPrefixCls,y=p.direction,Z=o.useRef(),x=(0,u.sQ)(n,Z),b=(0,o.useContext)(s.aM).isFormItemInput,j=e.prefixCls,C=e.className,k=e.children,w=e.style,E=g(e,["prefixCls","className","children","style"]),O=h("radio",j),P="button"===((null===i||void 0===i?void 0:i.optionType)||f)?"".concat(O,"-button"):O,I=(0,l.Z)({},E);i&&(I.name=i.name,I.onChange=function(n){var t,a;null===(t=e.onChange)||void 0===t||t.call(e,n),null===(a=null===i||void 0===i?void 0:i.onChange)||void 0===a||a.call(i,n)},I.checked=e.value===i.value,I.disabled=e.disabled||i.disabled);var N=c()("".concat(P,"-wrapper"),(t={},(0,a.Z)(t,"".concat(P,"-wrapper-checked"),I.checked),(0,a.Z)(t,"".concat(P,"-wrapper-disabled"),I.disabled),(0,a.Z)(t,"".concat(P,"-wrapper-rtl"),"rtl"===y),(0,a.Z)(t,"".concat(P,"-wrapper-in-form-item"),b),t),C);return o.createElement("label",{className:N,style:w,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(r.Z,(0,l.Z)({},I,{type:"radio",prefixCls:P,ref:x})),void 0!==k?o.createElement("span",null,k):null)},Z=o.forwardRef(y);Z.displayName="Radio";var x=Z,b=t(29439),j=t(10288),C=t(21631),k=t(81176),w=o.forwardRef((function(e,n){var t=o.useContext(d.E_),r=t.getPrefixCls,i=t.direction,u=o.useContext(C.Z),s=(0,j.Z)(e.defaultValue,{value:e.value}),f=(0,b.Z)(s,2),v=f[0],m=f[1];return o.createElement(p,{value:{onChange:function(n){var t=v,a=n.target.value;"value"in e||m(a);var l=e.onChange;l&&a!==t&&l(n)},value:v,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var t,s=e.prefixCls,d=e.className,f=void 0===d?"":d,p=e.options,m=e.buttonStyle,h=void 0===m?"outline":m,g=e.disabled,y=e.children,Z=e.size,b=e.style,j=e.id,C=e.onMouseEnter,w=e.onMouseLeave,E=r("radio",s),O="".concat(E,"-group"),P=y;p&&p.length>0&&(P=p.map((function(e){return"string"===typeof e||"number"===typeof e?o.createElement(x,{key:e.toString(),prefixCls:E,disabled:g,value:e,checked:v===e},e):o.createElement(x,{key:"radio-group-value-options-".concat(e.value),prefixCls:E,disabled:e.disabled||g,value:e.value,checked:v===e.value,style:e.style},e.label)})));var I=Z||u,N=c()(O,"".concat(O,"-").concat(h),(t={},(0,a.Z)(t,"".concat(O,"-").concat(I),I),(0,a.Z)(t,"".concat(O,"-rtl"),"rtl"===i),t),f);return o.createElement("div",(0,l.Z)({},(0,k.Z)(e),{className:N,style:b,onMouseEnter:C,onMouseLeave:w,id:j,ref:n}),P)}())})),E=o.memo(w),O=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t},P=function(e,n){var t=o.useContext(d.E_).getPrefixCls,a=e.prefixCls,r=O(e,["prefixCls"]),i=t("radio",a);return o.createElement(h,{value:"button"},o.createElement(x,(0,l.Z)({prefixCls:i},r,{type:"radio",ref:n})))},I=o.forwardRef(P),N=x;N.Button=I,N.Group=E;var F=N},56482:function(e,n,t){var a=t(87462),l=t(4942),o=t(45987),r=t(1413),i=t(15671),c=t(43144),u=t(60136),s=t(29388),d=t(47313),f=t(46123),p=t.n(f),v=function(e){(0,u.Z)(t,e);var n=(0,s.Z)(t);function t(e){var a;(0,i.Z)(this,t),(a=n.call(this,e)).handleChange=function(e){var n=a.props,t=n.disabled,l=n.onChange;t||("checked"in a.props||a.setState({checked:e.target.checked}),l&&l({target:(0,r.Z)((0,r.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var l="checked"in e?e.checked:e.defaultChecked;return a.state={checked:l},a}return(0,c.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,r=n.className,i=n.style,c=n.name,u=n.id,s=n.type,f=n.disabled,v=n.readOnly,m=n.tabIndex,h=n.onClick,g=n.onFocus,y=n.onBlur,Z=n.onKeyDown,x=n.onKeyPress,b=n.onKeyUp,j=n.autoFocus,C=n.value,k=n.required,w=(0,o.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),E=Object.keys(w).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=w[n]),e}),{}),O=this.state.checked,P=p()(t,r,(e={},(0,l.Z)(e,"".concat(t,"-checked"),O),(0,l.Z)(e,"".concat(t,"-disabled"),f),e));return d.createElement("span",{className:P,style:i},d.createElement("input",(0,a.Z)({name:c,id:u,type:s,required:k,readOnly:v,disabled:f,tabIndex:m,className:"".concat(t,"-input"),checked:!!O,onClick:h,onFocus:g,onBlur:y,onKeyUp:b,onKeyDown:Z,onKeyPress:x,onChange:this.handleChange,autoFocus:j,ref:this.saveInput,value:C},E)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,r.Z)((0,r.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},n.Z=v}}]);