(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{113:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),c=n(8),o=n(24),s=n(56),i=n(5),l="[ui] Open Modal",u="[ui] Close Modal",j="[event] Set Active",d="[event] Logout event",b="[event] Add new",m="[event] Clear active event",f="[event] Event updated",p="[event] Event deleted",O="[event] Events loaded",v="[auth] Finish checking login state",h="[auth] Login",x="[auth] Logout",g={modalOpen:!1},y=n(45),N={events:[],activeEvent:null},w={checking:!0},k=Object(o.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!0});case u:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:t.payload});case b:return Object(i.a)(Object(i.a)({},e),{},{events:[].concat(Object(y.a)(e.events),[t.payload])});case m:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:null});case f:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case p:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case O:return Object(i.a)(Object(i.a)({},e),{},{events:Object(y.a)(t.payload)});case d:return Object(i.a)({},N);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(i.a)(Object(i.a)(Object(i.a)({},e),t.payload),{},{checking:!1});case v:return Object(i.a)(Object(i.a)({},e),{},{checking:!1});case x:return{checking:!1};default:return e}}}),E="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,S=Object(o.d)(k,E(Object(o.a)(s.a))),C=n(30),D=n(6),T=n(0),P=n(10),I=n(15),A=n.n(I),_=n(11),L=n.n(_),R=n(18),G="https://calendar-app-mern-react.herokuapp.com/api",M=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(G,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},F=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(G,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},V=n(14),H=n.n(V),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{end:H()(e.end).toDate(),start:H()(e.start).toDate()})}))},U=function(e){return{type:b,payload:e}},B=function(){return{type:m}},X=function(e){return{type:f,payload:e}},q=function(){return{type:p}},z=function(e){return{type:O,payload:e}},K=function(){return{type:v}},Q=function(e){return{type:h,payload:e}},W=function(){return function(e){localStorage.clear(),e({type:d}),e(Y())}},Y=function(){return{type:x}},Z=n(22),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(T.useState)(e),n=Object(P.a)(t,2),a=n[0],r=n[1],c=function(){r(e)},o=function(e){var t=e.target;r(Object(i.a)(Object(i.a)({},a),{},Object(Z.a)({},t.name,t.value)))};return[a,o,c]},ee=(n(80),n(2)),te=function(){var e=Object(c.b)(),t=$({lEmail:"carlos@test.com",lPassword:"123456"}),n=Object(P.a)(t,2),a=n[0],r=n[1],o=$({rName:"Carlos",rEmail:"carlos@test.com",rPassword1:"123456",rPassword2:"123456"}),s=Object(P.a)(o,2),i=s[0],l=s[1],u=a.lEmail,j=a.lPassword,d=i.rName,b=i.rEmail,m=i.rPassword1,f=i.rPassword2;return Object(ee.jsx)("div",{className:"container login-container",children:Object(ee.jsxs)("div",{className:"row",children:[Object(ee.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(ee.jsx)("h3",{children:"Ingreso"}),Object(ee.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=u,a=j,function(){var e=Object(R.a)(L.a.mark((function e(t){var r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Q({uid:c.uid,name:c.name}))):A.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:u,onChange:r})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:j,onChange:r})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(ee.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(ee.jsx)("h3",{children:"Registro"}),Object(ee.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),m!==f)return A.a.fire("Error","Las constrase\xf1as deben ser iguales","error");var n,a,r;e((n=b,a=m,r=d,function(){var e=Object(R.a)(L.a.mark((function e(t){var c,o;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Q({uid:o.uid,name:o.name}))):A.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:d,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:b,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:m,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:f,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},ne=n(44),ae=function(){return{type:l}},re=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.auth})).name;return Object(ee.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(ee.jsx)("span",{className:"navbar-brand",children:t}),Object(ee.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){e(W())},children:[Object(ee.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(ee.jsx)("span",{children:" Salir"})]})]})},ce={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},oe=function(e){var t=e.event,n=t.title,a=t.user;return Object(ee.jsxs)("div",{children:[Object(ee.jsxs)("strong",{children:[" ",n," "]}),Object(ee.jsxs)("span",{children:["- ",a.name," "]})]})},se=n(41),ie=n.n(se),le=n(42),ue=n.n(le),je={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};ie.a.setAppElement("#root");var de=H()().minutes(0).seconds(0).add(1,"hours"),be=de.clone().add(1,"hours"),me={title:"",notes:"",start:de.toDate(),end:be.toDate()},fe=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.ui})).modalOpen,n=Object(c.c)((function(e){return e.calendar})).activeEvent,a=Object(T.useState)(de.toDate()),r=Object(P.a)(a,2),o=r[0],s=r[1],l=Object(T.useState)(be.toDate()),j=Object(P.a)(l,2),d=j[0],b=j[1],m=Object(T.useState)(!0),f=Object(P.a)(m,2),p=f[0],O=f[1],v=Object(T.useState)(me),h=Object(P.a)(v,2),x=h[0],g=h[1],y=x.title,N=x.notes,w=x.start,k=x.end;Object(T.useEffect)((function(){g(n||me)}),[n]);var E=function(e){var t=e.target;g(Object(i.a)(Object(i.a)({},x),{},Object(Z.a)({},t.name,t.value)))},S=function(){e({type:u}),e(B()),g(me)};return Object(ee.jsxs)(ie.a,{isOpen:t,onRequestClose:S,style:je,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(ee.jsxs)("h1",{children:[" ",n?"Editar evento":"Nuevo evento"," "]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault();var a,r=H()(w),c=H()(k);return r.isSameOrAfter(c)?A.a.fire("Error","La fecha fin debe ser mayor a la fecha de inicio","error"):y.trim().length<2?O(!1):(e(n?(a=x,function(){var e=Object(R.a)(L.a.mark((function e(t){var n,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?t(X(a)):A.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(R.a)(L.a.mark((function t(n,a){var r,c,o,s,i;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,F("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.evento.id,e.user={_id:c,name:o},n(U(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(x)),O(!0),void S())},children:[Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora inicio"}),Object(ee.jsx)(ue.a,{onChange:function(e){s(e),g(Object(i.a)(Object(i.a)({},x),{},{start:e}))},value:o,className:"form-control"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora fin"}),Object(ee.jsx)(ue.a,{onChange:function(e){b(e),g(Object(i.a)(Object(i.a)({},x),{},{end:e}))},value:d,minDate:o,className:"form-control"})]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Titulo y notas"}),Object(ee.jsx)("input",{type:"text",className:"form-control ".concat(!p&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:y,onChange:E}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:N,onChange:E}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(ee.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(ee.jsx)("i",{className:"far fa-save"}),Object(ee.jsx)("span",{children:" Guardar"})]})]})]})},pe=function(){var e=Object(c.b)();return Object(ee.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(ae())},children:Object(ee.jsx)("i",{className:"fas fa-plus"})})},Oe=function(){var e=Object(c.b)();return Object(ee.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(R.a)(L.a.mark((function e(t,n){var a,r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,F("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(q()):A.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(ee.jsx)("i",{className:"fas fa-trash"}),Object(ee.jsx)("span",{children:" Borrar evento "})]})};n(111),n(112);H.a.locale("es");var ve=Object(ne.b)(H.a),he=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.calendar})),n=t.events,a=t.activeEvent,r=Object(c.c)((function(e){return e.auth})).uid,o=Object(T.useState)(localStorage.getItem("lastView")||"month"),s=Object(P.a)(o,2),i=s[0],l=s[1];Object(T.useEffect)((function(){e(function(){var e=Object(R.a)(L.a.mark((function e(t){var n,a,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=J(a.eventos),t(z(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(ee.jsxs)("div",{className:"calendar-screen",children:[Object(ee.jsx)(re,{}),Object(ee.jsx)(ne.a,{localizer:ve,events:n,startAccessor:"start",endAccessor:"end",messages:ce,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:r===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(ae())},onSelectEvent:function(t){e({type:j,payload:t})},onView:function(e){l(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(B())},selectable:!0,view:i,components:{event:oe}}),Object(ee.jsx)(pe,{}),a&&Object(ee.jsx)(Oe,{}),Object(ee.jsx)(fe,{})]})},xe=function(e){var t=e.children;return e.isAuthenticated?Object(ee.jsx)(D.a,{to:"/"}):t},ge=function(e){var t=e.children;return e.isAuthenticated?t:Object(ee.jsx)(D.a,{replace:!0,to:"/login"})},ye=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.auth})),n=t.checking,a=t.uid;return Object(T.useEffect)((function(){e(function(){var e=Object(R.a)(L.a.mark((function e(t){var n,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Q({uid:a.uid,name:a.name}))):t(K());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(ee.jsx)("h5",{children:"Espere..."}):Object(ee.jsx)(C.a,{children:Object(ee.jsxs)(D.d,{children:[Object(ee.jsx)(D.b,{path:"login",element:Object(ee.jsx)(xe,{isAuthenticated:!!a,children:Object(ee.jsx)(te,{})})}),Object(ee.jsx)(D.b,{path:"/",element:Object(ee.jsx)(ge,{isAuthenticated:!!a,children:Object(ee.jsx)(he,{})})}),Object(ee.jsx)(D.b,{path:"/*",element:Object(ee.jsx)(D.a,{replace:!0,to:"/"})})]})})},Ne=function(){return Object(ee.jsx)(c.a,{store:S,children:Object(ee.jsx)(ye,{})})};n(113);r.a.render(Object(ee.jsx)(Ne,{}),document.getElementById("root"))},80:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.bef7dcf1.chunk.js.map