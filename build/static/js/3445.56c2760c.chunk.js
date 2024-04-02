"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3445],{63445:function(e,s,a){a.r(s),a.d(s,{default:function(){return k}});var r=a(1413),i=a(29439),l=a(47313),n=a(10976),t=a(77181),d=a(68197),u=a(59624),c=a(74294),m=a(66672),Z=a(86345),h=a(45705),j=a(59491),o=a(24511),x=a(33234),p=a(26747),_=a(2717),f=a(23560),b=a(90954),q=a(97890),y=a(51282),w=a(46417),g=[{title:"firebase",value:"firebase"},{title:"twilio",value:"twilio"}];function k(){var e=n.Z.useForm(),s=(0,i.Z)(e,1)[0],a=(0,o.$)().t,k=(0,l.useState)(!1),v=(0,i.Z)(k,2),I=v[0],N=v[1],F=(0,l.useState)(!1),C=(0,i.Z)(F,2),U=C[0],S=C[1],A=(0,_.I0)(),B=(0,q.s0)(),P=(0,_.v9)((function(e){return e.menu}),_.wU).activeMenu,z=(0,q.UO)().type,E=(0,l.useState)(null),G=(0,i.Z)(E,2),L=G[0],M=G[1],O=(0,_.v9)((function(e){return e.sms}),_.wU).smsGatewaysList;(0,l.useEffect)((function(){P.refetch&&function(e){S(!0),x.Z.getById(e).then((function(e){var a=e.data;s.setFieldsValue((0,r.Z)({default:Boolean(a.default)},a.payload)),M(a.type)})).finally((function(){S(!1),A((0,b.A_)(P))}))}(z)}),[P.refetch]);return(0,w.jsx)(t.Z,{title:a("edit.sms.payload"),className:"h-100",children:U?(0,w.jsx)(y.Z,{}):(0,w.jsx)(n.Z,{form:s,layout:"vertical",onFinish:function(e){N(!0);var s={type:L,default:Number(e.default),payload:(0,r.Z)({type:void 0,default:void 0},e)},i="settings/sms-payload";x.Z.update(z,s).then((function(){f.Am.success(a("successfully.updated")),(0,_.dC)((function(){A((0,p.z)()),A((0,b.ph)((0,r.Z)((0,r.Z)({},P),{},{nextUrl:i})))})),B("/".concat(i))})).finally((function(){return N(!1)}))},children:(0,w.jsxs)(t.Z,{title:a("add.sms.payload"),children:[(0,w.jsxs)(d.Z,{gutter:12,children:[(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:a("select.type"),rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(c.Z,{disabled:!0,className:"w-100",onChange:function(e){return M(e)},value:L,options:g.filter((function(e){return!O.some((function(s){return s.type===e.value}))}))})})}),"firebase"===z&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:a("android_api_key"),name:"android_api_key",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:a("api_key"),name:"api_key",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:a("app_id"),name:"app_id",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:a("auth_domain"),name:"auth_domain",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:a("ios_api_key"),name:"ios_api_key",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:a("measurement_id"),name:"measurement_id",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:a("message_sender_id"),name:"message_sender_id",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:a("project_id"),name:"project_id",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:a("server_key"),name:"server_key",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:a("storage_bucket"),name:"storage_bucket",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:a("vapid_key"),name:"vapid_key",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:a("default"),name:"default",valuePropName:"checked",children:(0,w.jsx)(Z.Z,{})})})]}),"twilio"===z&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:a("twilio_auth_token"),name:"twilio_auth_token",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(m.Z,{min:0,className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:a("twilio_account_id"),name:"twilio_account_id",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:a("twilio_number"),name:"twilio_number",rules:[{required:!0,message:a("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:a("default"),name:"default",valuePropName:"checked",children:(0,w.jsx)(Z.Z,{})})})]})]}),(0,w.jsx)(h.Z,{children:(0,w.jsx)(j.Z,{type:"primary",htmlType:"submit",loading:I,children:a("submit")})})]})})})}}}]);