"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[2267],{12267:function(e,t,n){n.r(t);var l=n(4942),a=n(93433),i=n(1413),s=n(29439),u=n(47313),d=n(31741),r=n(47548),o=n(12019),c=n(47515),f=n(55768),h=n(73591),Z=n(45705),x=n(59491),p=n(37388),v=n(77181),m=n(78508),j=n(97890),g=n(26672),b=n(2717),_=n(90954),y=n(24511),k=n(13945),C=n(80314),w=n(91405),S=n(10310),T=n(85746),I=n(41481),A=n(53233),P=n(55940),M=n(23560),N=n(74580),z=n(69658),K=n(45321),L=n(48008),O=n(49986),U=n(79492),V=n(46417),R=h.Z.TabPane,D=["published","deleted_at"];t.default=function(){var e,t,n,E,Y,$,q,B=(0,y.$)().t,F=(0,b.I0)(),G=(0,j.s0)(),H=(0,u.useState)(null),J=(0,s.Z)(H,2),Q=J[0],W=J[1],X=(0,u.useState)(null),ee=(0,s.Z)(X,2),te=ee[0],ne=ee[1],le=(0,u.useContext)(N._).setIsModalVisible,ae=(0,u.useState)(!1),ie=(0,s.Z)(ae,2),se=ie[0],ue=ie[1],de=(0,b.v9)((function(e){return e.menu}),b.wU).activeMenu,re=(0,b.v9)((function(e){return e.client}),b.wU),oe=re.clients,ce=re.loading,fe=re.meta,he=re.params,Ze=(0,U.Z)().isDemo,xe=(0,u.useState)(null),pe=(0,s.Z)(xe,2),ve=pe[0],me=pe[1],je=(0,u.useState)(null),ge=(0,s.Z)(je,2),be=ge[0],_e=ge[1],ye=(0,u.useState)(null),ke=(0,s.Z)(ye,2),Ce=ke[0],we=ke[1],Se=(0,u.useState)("published"),Te=(0,s.Z)(Se,2),Ie=Te[0],Ae=Te[1],Pe=(null===(e=de.data)||void 0===e?void 0:e.role)||Ie,Me=de.data,Ne={sort:null===Me||void 0===Me?void 0:Me.sort,column:null===Me||void 0===Me?void 0:Me.column,perPage:null===Me||void 0===Me?void 0:Me.perPage,page:null===Me||void 0===Me?void 0:Me.page,search:null===Me||void 0===Me?void 0:Me.search,status:"deleted_at"===Pe?null:Pe||"published",deleted_at:"deleted_at"===Pe?Pe:null},ze=(0,u.useState)([{title:B("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:B("firstname"),dataIndex:"firstname",key:"firstname",is_show:!0},{title:B("lastname"),dataIndex:"lastname",key:"lastname",is_show:!0},{title:B("email"),dataIndex:"email",key:"email",is_show:!0,render:function(e){return(0,V.jsx)("div",{children:Ze?"":e})}},{title:B("role"),dataIndex:"role",key:"role",is_show:!0},{title:B("options"),dataIndex:"options",key:"options",is_show:!0,render:function(e,t){return(0,V.jsxs)(Z.Z,{children:[(0,V.jsx)(x.Z,{disabled:t.deleted_at,icon:(0,V.jsx)(d.Z,{}),onClick:function(){return function(e){F((0,_.bL)({url:"users/user/".concat(e.uuid),id:"user_info",name:B("user.info")})),G("/users/user/".concat(e.uuid),{state:{user_id:e.id}})}(t)}}),(0,V.jsx)(x.Z,{icon:(0,V.jsx)(r.Z,{}),onClick:function(){return me(t.uuid)},disabled:t.deleted_at}),(0,V.jsx)(x.Z,{type:"primary",icon:(0,V.jsx)(o.Z,{}),onClick:function(){return function(e){F((0,_.bL)({url:"user/".concat(e.uuid),id:"user_edit",name:"User edit"})),G("/user/".concat(e.uuid),{state:"user"})}(t)},disabled:t.deleted_at}),(0,V.jsx)(p.Z,{title:B("change.user.role"),children:(0,V.jsx)(x.Z,{disabled:t.deleted_at,onClick:function(){return _e(t)},icon:(0,V.jsx)(g.VRY,{})})}),(0,V.jsx)(P.Z,{disabled:t.deleted_at,icon:(0,V.jsx)(c.Z,{}),onClick:function(){W([t.id]),le(!0),ne(!0)}})]})}}]),Ke=(0,s.Z)(ze,2),Le=Ke[0],Oe=Ke[1];(0,u.useEffect)((function(){de.refetch&&(F((0,T.Tu)(Ne)),F((0,_.A_)(de)))}),[de.refetch]),(0,C.Z)((function(){F((0,T.Tu)(Ne))}),[de.data]);var Ue=function(e){var t=de.data;F((0,_.nc)({activeMenu:de,data:(0,i.Z)((0,i.Z)({},t),e)}))},Ve={selectedRowKeys:Q,onChange:function(e){W(e)}};return(0,V.jsxs)(v.Z,{title:B("clients"),extra:(0,V.jsxs)(Z.Z,{wrap:!0,children:["deleted_at"!==(null===(t=de.data)||void 0===t?void 0:t.role)?(0,V.jsxs)(Z.Z,{children:[(0,V.jsx)(x.Z,{type:"primary",icon:(0,V.jsx)(f.Z,{}),onClick:function(){F((0,_.bL)({id:"user-add",url:"user/add",name:B("add.client")})),G("/user/add")},children:B("add.client")}),(0,V.jsx)(P.Z,{size:"",onClick:function(){null===Q||0===Q.length?M.Am.warning(B("select.the.product")):(le(!0),ne(!1))},children:B("delete.selected")}),(0,V.jsx)(P.Z,{onClick:function(){return we({delete:!0})},children:B("delete.all")})]}):(0,V.jsx)(P.Z,{icon:(0,V.jsx)(g.uOc,{className:"mr-2"}),onClick:function(){return we({restore:!0})},children:B("restore.all")}),(0,V.jsx)(A.Z,{columns:Le,setColumns:Oe})]}),children:[(0,V.jsx)("div",{className:"d-flex justify-content-between",children:(0,V.jsx)(I.Z,{placeholder:B("search"),className:"w-25",handleChange:function(e){return Ue({search:e})},defaultValue:null===(n=de.data)||void 0===n?void 0:n.search,resetSearch:!(null!==(E=de.data)&&void 0!==E&&E.search)})}),(0,V.jsx)(h.Z,{className:"mt-3",scroll:{x:!0},activeKey:Pe,onChange:function(e){Ue({role:e,page:1}),Ae(e)},type:"card",children:D.map((function(e){return(0,V.jsx)(R,{tab:B(e)},e)}))}),(0,V.jsx)(m.Z,{scroll:{x:!0},rowSelection:Ve,columns:null===Le||void 0===Le?void 0:Le.filter((function(e){return e.is_show})),dataSource:oe,loading:ce,pagination:{pageSize:he.perPage,page:(null===(Y=de.data)||void 0===Y?void 0:Y.page)||1,total:fe.total,defaultCurrent:null===($=de.data)||void 0===$?void 0:$.page,current:null===(q=de.data)||void 0===q?void 0:q.page},rowKey:function(e){return e.id},onChange:function(e,t,n){var l=e.pageSize,a=e.current,s=n.field,u=n.order,d=(0,k.Z)(u);F((0,_.nc)({activeMenu:de,data:(0,i.Z)((0,i.Z)({},de.data),{},{perPage:l,page:a,column:s,sort:d})}))}}),(0,V.jsx)(z.Z,{click:function(){ue(!0);var e=(0,i.Z)({},Object.assign.apply(Object,[{}].concat((0,a.Z)(Q.map((function(e,t){return(0,l.Z)({},"ids[".concat(t,"]"),e)}))))));K.Z.delete(e).then((function(){M.Am.success(B("successfully.deleted")),F((0,T.Tu)(Ne)),le(!1),ne([])})).finally((function(){W(null),ue(!1)}))},text:B(te?"delete":"all.delete"),loading:se,setText:W}),ve&&(0,V.jsx)(w.Z,{uuid:ve,handleCancel:function(){return me(null)}}),be&&(0,V.jsx)(S.Z,{data:be,handleCancel:function(){return _e(null)}}),Ce&&(0,V.jsx)(L.Z,{open:Ce,handleCancel:function(){return we(null)},click:Ce.restore?function(){ue(!0),O.Z.restoreAll().then((function(){M.Am.success(B("successfully.restored")),F((0,T.Tu)(Ne)),we(null)})).finally((function(){return ue(!1)}))}:function(){ue(!0),O.Z.dropAll().then((function(){M.Am.success(B("successfully.deleted")),F((0,T.Tu)()),we(null)})).finally((function(){return ue(!1)}))},text:Ce.restore?B("restore.modal.text"):B("read.carefully"),subTitle:Ce.restore?"":B("confirm.deletion"),loading:se,setText:ne})]})}}}]);