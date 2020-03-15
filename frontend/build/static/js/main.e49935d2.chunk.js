(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{125:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),l=a(26),i=a(13),s=a(8),u=(a(98),a(30)),m=a(167),p=a(170),b=a(172),d=a(175),f=a(174),h=a(173),g=a(176),E=a(126),v=Object(m.a)({card:{maxWidth:345},media:{height:140}});function y(e){var t=v(),a=e.image,n=e.content,c=e.data,o=e.sideContent1,l=e.sideContent,i=e.property,s=e.mediaHeight,u=e.buttonLabel1,m=e.buttonLabel2,y=e.onClick,w=e.button,x=e.handleClick;return r.a.createElement(p.a,{className:t.card,onClick:function(){return y?y(c):null}},r.a.createElement(b.a,null,r.a.createElement(h.a,{className:s?t.media:null,image:a,title:c[i]}),r.a.createElement(f.a,null,r.a.createElement(E.a,{gutterBottom:!0,variant:"h6",component:"h2"},c[i]),r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p"},n)),l&&r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p"},o),r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p"},l))),r.a.createElement(d.a,null,w&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{size:"small",color:"primary",onClick:function(){return x(c,"1")}},u),r.a.createElement(g.a,{size:"small",color:"primary",onClick:function(){return x(c,"0")}},m))))}var w=a(40),x=a.n(w),k=function(){return localStorage.getItem("privateUserToken")},j={headers:{"Content-Type":"application/json","x-auth-token":k()}},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return x.a.get("".concat("http://localhost:5000/api","/").concat(e),{headers:{"Content-Type":"application/json","x-auth-token":k()},params:t})},O=function(e,t){return x.a.post("".concat("http://localhost:5000/api","/").concat(e),t,j)},S=a(75),T=a.n(S),L=a(178),N=a(177),F=Object(u.g)((function(e){e.user;var t=e.history,a=function(e){return t.push("/".concat(e.title.toLowerCase().replace(/\s+/g,"-").replace(/^-+/,"").replace(/-+$/," ").replace(/\?+/g," ").replace(/!+$/," ")),e)};return r.a.createElement(N.a,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{gutterBottom:!0,variant:"h2"},"Your Society management system"),r.a.createElement("br",null),r.a.createElement(L.a,{container:!0,spacing:6},[{title:"Application request",description:"Submit application to make any request or to access any service of the society."},{title:"Complaints",description:"To file any complaint related to society."},{title:"Meeting",description:"Schedule and attend society meetings with track of all meetings."},{title:"Maintenance information",description:"Know all the maintenance related information here."},{title:"Neighbourhood services",description:"Get information about all the neighbourhood services."}].map((function(e){return r.a.createElement(L.a,{item:!0,lg:4},r.a.createElement(y,{image:T.a,data:e,property:"title",content:e.description,mediaHeight:!0,onClick:a,buttonLabel1:"Go"}))}))))})),M=a(6),I=a.n(M),W=a(12),A=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){function e(){return(e=Object(W.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(t);case 3:a=e.sent,n=a.data,o(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s.b.error("Something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}("users")}),[]),r.a.createElement(N.a,null,r.a.createElement(L.a,{container:!0,spacing:2},r.a.createElement(L.a,{container:!0,spacing:2},c.map((function(e){return r.a.createElement(L.a,{item:!0,lg:6},r.a.createElement(y,{data:e,property:"memberType",content:e.fullName}))})))))},R=a(47),z=a(179),B=a(187),P=a(186),D=a(189),U=a(183),G=a(77),J=a.n(G),q=a(180),H=Object(m.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function Y(e){var t=H(),a=e.fields,n=e.heading,c=e.button,o=e.signup,l=e.dropDown,s=e.postSubmitLogic,u=e.noIcon,m=r.a.useState({}),p=Object(i.a)(m,2),b=p[0],d=p[1],f=function(e){var t=e.currentTarget,a=Object(R.a)({},b);a[t.name]=t.value,d(a)};return r.a.createElement(N.a,{component:"main",maxWidth:"xs"},r.a.createElement(z.a,null),r.a.createElement("div",{className:t.paper},!u&&r.a.createElement(q.a,null,r.a.createElement(J.a,{style:{fontSize:"50px",color:"bf2604"}})),r.a.createElement(E.a,{component:"h1",variant:"h5"},n),r.a.createElement("form",{className:t.form,noValidate:!0,onSubmit:function(e){e.preventDefault();var t=Object(R.a)({},b);s(t)}},r.a.createElement(L.a,{container:!0,spacing:2},a.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{item:!0,xs:12,sm:12,lg:12},r.a.createElement(B.a,{autoComplete:e.name,type:e.type,name:e.name,multiline:e.multiline,rows:e.rows,variant:"outlined",value:b[e.name],onChange:f,placeholder:e.placeholder?e.placeholder:"",required:!0,fullWidth:!0,id:e.name,label:e.label,autoFocus:!0})))})),l&&r.a.createElement(L.a,{item:!0,xs:12,sm:12,lg:12},r.a.createElement(D.a,{htmlFor:l.name},l.label),r.a.createElement(P.a,{name:l.name,value:b[l.name],onChange:f,required:!0,fullWidth:!0,id:l.name,variant:"outlined",autoFocus:!0,placeholder:l.label},l.options.map((function(e){return r.a.createElement("option",{value:e},e)}))))),r.a.createElement(g.a,{type:c.type,fullWidth:!0,variant:"contained",style:{color:"white",backgroundColor:c.color},className:t.submit},c.label),o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{container:!0,justify:"flex-end"},r.a.createElement(L.a,{item:!0},r.a.createElement(U.a,{href:"#",variant:"body2"},"Already have an account? Sign in")))))))}var $=function(e){var t=e.user,a=Object(n.useState)([]),c=Object(i.a)(a,2),o=c[0],l=c[1],u=Object(n.useState)(!1),m=Object(i.a)(u,2),p=m[0],b=m[1],d=function(){var e=Object(W.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("application",t);case 3:s.b.success("Application successfully submitted"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message),s.b.error("Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(W.a)(I.a.mark((function e(t){var a,n,r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("my"!==t){e.next=9;break}return e.next=3,C("application/currentUser");case 3:a=e.sent,n=a.data,l(n),b(!1),e.next=16;break;case 9:if("review"!==t){e.next=16;break}return e.next=12,C("application");case 12:r=e.sent,c=r.data,l(c),b(!0);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(W.a)(I.a.mark((function e(t,a){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={applicationId:t._id,action:a},e.prev=1,e.next=4,C("application/handle",n);case 4:s.b.success("Application reviewed"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),s.b.error("Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement(N.a,null,r.a.createElement(L.a,{container:!0,spacing:2},r.a.createElement(L.a,{item:!0,xs:6,sm:6,lg:3},r.a.createElement(g.a,{fullWidth:!0,variant:"contained",style:{color:"bf2604",backgroundColor:"bf2604"},onClick:function(){return f("my")}},"My applications")),t.isCommitteeMember&&r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{item:!0,xs:6,sm:6,lg:3},r.a.createElement(g.a,{fullWidth:!0,variant:"contained",style:{color:"bf2604",backgroundColor:"bf2604"},onClick:function(){return f("review")}},"Review applications"))),r.a.createElement(L.a,{item:!0,xs:12,sm:12,lg:12},r.a.createElement(Y,{postSubmitLogic:d,heading:"Application",fields:[{name:"subject",label:"Subject",type:"text"},{name:"content",label:"Content",type:"text",multiline:!0,rows:"10"}],button:{type:"submit",label:"Submit",color:"#bf2604"}}))),r.a.createElement(L.a,{container:!0,spacing:2},o.map((function(e){return r.a.createElement(L.a,{item:!0,lg:6},p?r.a.createElement(y,{button:!0,data:e,property:"subject",content:e.content,sideContent:e.status,buttonLabel1:"Approve",buttonLabel2:"Reject",handleClick:h}):r.a.createElement(y,{data:e,property:"subject",content:e.content,sideContent:e.status,handleClick:h}))}))))},_=function(e){var t=e.user,a=Object(n.useState)([]),c=Object(i.a)(a,2),o=c[0],l=c[1],u=Object(n.useState)(!1),m=Object(i.a)(u,2),p=m[0],b=m[1],d=function(){var e=Object(W.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("complaint",t);case 3:s.b.success("Complaint successfully submitted"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message),s.b.error("Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(W.a)(I.a.mark((function e(t){var a,n,r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("my"!==t){e.next=9;break}return e.next=3,C("complaint/currentUser");case 3:a=e.sent,n=a.data,l(n),b(!1),e.next=16;break;case 9:if("review"!==t){e.next=16;break}return e.next=12,C("complaint");case 12:r=e.sent,c=r.data,l(c),b(!0);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(W.a)(I.a.mark((function e(t,a){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={complaintId:t._id,action:a},e.prev=1,e.next=4,C("complaint/handle",n);case 4:s.b.success("Complaint reviewed"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),s.b.error("Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement(N.a,null,r.a.createElement(L.a,{container:!0,spacing:2},r.a.createElement(L.a,{item:!0,xs:6,sm:6,lg:3},r.a.createElement(g.a,{fullWidth:!0,variant:"contained",style:{color:"bf2604",backgroundColor:"bf2604"},onClick:function(){return f("my")}},"My complaints")),t.isCommitteeMember&&r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{item:!0,xs:6,sm:6,lg:3},r.a.createElement(g.a,{fullWidth:!0,variant:"contained",style:{color:"bf2604",backgroundColor:"bf2604"},onClick:function(){return f("review")}},"Review complaints"))),r.a.createElement(L.a,{item:!0,xs:12,sm:12,lg:12},r.a.createElement(Y,{postSubmitLogic:d,heading:"File a Complaint",fields:[{name:"subject",label:"Subject",type:"text"},{name:"complaint",label:"Complaint",type:"text",multiline:!0,rows:"5"}],button:{type:"submit",label:"Submit",color:"#bf2604"}}))),r.a.createElement(L.a,{container:!0,spacing:2},o.map((function(e){return r.a.createElement(L.a,{item:!0,lg:6},p?r.a.createElement(y,{button:!0,data:e,property:"subject",content:e.complaint,sideContent1:e.response,sideContent:e.status,buttonLabel1:"Resolved",buttonLabel2:"In progress",handleClick:h}):r.a.createElement(y,{data:e,property:"subject",content:e.complaint,sideContent1:e.response,sideContent:e.status,handleClick:h}))}))))},K=function(e){var t=e.user,a=Object(n.useState)([]),c=Object(i.a)(a,2),o=c[0],l=c[1];Object(n.useEffect)((function(){function e(){return(e=Object(W.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(t);case 3:a=e.sent,n=a.data,l(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s.b.error("Something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}("meeting")}),[]);var u=function(){var e=Object(W.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("meeting",t);case 3:s.b.success("Meeting is successfully scheduled"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message),s.b.error("Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(N.a,null,r.a.createElement(L.a,{container:!0,spacing:2},r.a.createElement(L.a,{item:!0,xs:12,sm:12,lg:12},r.a.createElement(Y,{postSubmitLogic:u,heading:"Schedule a meeting",fields:[{name:"agenda",label:"Agenda",type:"text"},{name:"dateOfMeeting",label:"Date of meeting",type:"date"},{name:"time",label:"time",type:"time"},{name:"venue",label:"venue",type:"text"},{name:"participatingMembers",label:"Meeting for ",type:"text",placeholder:"Type everyone or committee"}],button:{type:"submit",label:"Schedule meeting",color:"#bf2604"}}))),r.a.createElement(L.a,{container:!0,spacing:2},o.map((function(e){return r.a.createElement(L.a,{item:!0,lg:6},t.isCommitteeMember?r.a.createElement(y,{button:!0,data:e,property:"agenda",content:e.venue,sideContent1:e.dateOfMeeting,sideContent:e.time,buttonLabel1:"Add minutes",buttonLabel2:"Add conclusion"}):r.a.createElement(y,{data:e,property:"agenda",content:e.venue,sideContent1:e.dateOfMeeting,sideContent:e.time}))}))))},V=function(e){var t=e.user,a=Object(n.useState)([]),c=Object(i.a)(a,2),o=c[0],l=c[1],u=function(){var e=Object(W.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("maintenance",t);case 3:s.b.success("Service successfully added"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message),s.b.error("Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){function e(){return(e=Object(W.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(t);case 3:a=e.sent,n=a.data,l(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s.b.error("Something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}("maintenance")}),[]),r.a.createElement(N.a,null,r.a.createElement(L.a,{container:!0,spacing:2},t.isCommitteeMember&&r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{item:!0,xs:12,sm:12,lg:12},r.a.createElement(Y,{postSubmitLogic:u,heading:"Add a service",fields:[{name:"maintenanceType",label:"Maintenance Type ",type:"text",placeholder:"Water supply, security, electricity etc"},{name:"status",label:"Status",type:"text",placeholder:"Active or Inactive"},{name:"costPerMonth",label:"Cost per month",type:"text"}],button:{type:"submit",label:"Submit",color:"#bf2604"}})))),o.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{container:!0,spacing:2},o.map((function(e){return r.a.createElement(L.a,{item:!0,lg:6},r.a.createElement(y,{data:e,property:"maintenanceType",content:e.costPerMonth,sideContent:e.status}))})))))},Q=function(e){e.user;var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],o=a[1],l=function(){var e=Object(W.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("neighbourhood",t);case 3:s.b.success("Service successfully added"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message),s.b.error("Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){function e(){return(e=Object(W.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(t);case 3:a=e.sent,n=a.data,o(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s.b.error("Something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}("neighbourhood")}),[]),r.a.createElement(N.a,null,r.a.createElement(L.a,{container:!0,spacing:2},r.a.createElement(L.a,{item:!0,xs:12,sm:12,lg:12},r.a.createElement(Y,{postSubmitLogic:l,heading:"Add a service",fields:[{name:"serviceType",label:"Type of service ",type:"text",placeholder:"Grocery, gardener, electrician etc"},{name:"serviceName",label:"Name of service",type:"text",placeholder:"Shop or contact person name"},{name:"contact",label:"Contact of service",type:"text",placeholder:"Contact number"}],button:{type:"submit",label:"Submit",color:"#bf2604"}}))),c.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{container:!0,spacing:2},c.map((function(e){return r.a.createElement(L.a,{item:!0,lg:6},r.a.createElement(y,{data:e,property:"serviceType",content:e.serviceName,sideContent:e.contact}))})))))},X=function(e){var t=e.match.params.serviceTitle,a=e.user;return"application-request"===t?r.a.createElement($,{user:a}):"complaints"===t?r.a.createElement(_,{user:a}):"meeting"===t?r.a.createElement(K,{user:a}):"maintenance-information"===t?r.a.createElement(V,{user:a}):"neighbourhood-services"===t?r.a.createElement(Q,{user:a}):void 0},Z=a(78),ee=a.n(Z),te=Object(m.a)((function(e){return{btn:{border:"2 px solid ".concat("#bf2604"),backgroundColor:"#bf2604",color:"white","&:hover":{backgroundColor:"#bf2604"}}}})),ae=Object(u.g)((function(e){var t=te();return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(L.a,{container:!0,spacing:4},r.a.createElement(L.a,{item:!0,xs:!0},r.a.createElement("img",{src:ee.a})),r.a.createElement(L.a,{item:!0,xs:!0},r.a.createElement(E.a,{variant:"h3",style:{fontWeight:"700"}},r.a.createElement("br",null),"A place for all your society related matters"),r.a.createElement(E.a,{variant:"h6"},r.a.createElement("br",null),"Join now to stay connected with your society and it's important matters. ",r.a.createElement("br",null),"Get better at maintaining managerial tasks ",r.a.createElement("br",null)," with our easy to use society ecosystem features."),r.a.createElement("br",null),r.a.createElement(g.a,{type:"submit",variant:"contained",onClick:function(){return e.history.push("/auth/signup")},className:t.btn},"Get started"))),r.a.createElement("footer",null,r.a.createElement("small",{style:{fontFamily:"Roboto"}},"Copyright \xa9  ",(new Date).getFullYear()," ",r.a.createElement(U.a,{color:"inherit",href:"/"},"Society+ | ")," ",r.a.createElement(U.a,{color:"inherit",href:"/"},"Terms  "),"| ",r.a.createElement(U.a,{color:"inherit",href:"/"}," Privacy"))))})),ne=a(31),re=a(17),ce=a(184),oe=a(185),le=a(85),ie=a(188),se=a(83),ue=a(79),me=a.n(ue),pe=a(80),be=a.n(pe),de=a(81),fe=a.n(de),he=Object(m.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(ne.a)({display:"none",color:"white",fontWeight:"700"},e.breakpoints.up("sm"),{display:"block"}),search:Object(ne.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(re.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(re.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(ne.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(ne.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(ne.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));var ge=Object(u.g)((function(e){var t=e.user,a=he(),n=r.a.useState(null),c=Object(i.a)(n,2),o=c[0],l=c[1],s=r.a.useState(null),u=Object(i.a)(s,2),m=u[0],p=u[1],b=Boolean(o),d=(Boolean(m),function(){l(null),p(null)}),f=function(t){return"login"===t?e.history.push("/auth/login"):"signup"===t?e.history.push("/auth/signup"):void 0},h="primary-search-account-menu",g=r.a.createElement(se.a,{anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},id:h,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:b,onClose:d},r.a.createElement(ie.a,{onClick:d},"Profile"),r.a.createElement(ie.a,{onClick:function(){return e.history.push("/user/logout")}},"Logout"));return r.a.createElement("div",{className:a.grow},r.a.createElement(ce.a,{position:"static",style:{backgroundColor:"#bf2604"}},r.a.createElement(oe.a,null,r.a.createElement(q.a,{edge:"start",className:a.menuButton,"aria-label":"open drawer"},r.a.createElement(me.a,null)),r.a.createElement(E.a,{className:a.title,variant:"h5",noWrap:!0},r.a.createElement(q.a,{onClick:function(){return e.history.push("/")},style:{color:"white"}}," Society+ ")),r.a.createElement("div",{className:a.search},r.a.createElement("div",{className:a.searchIcon},r.a.createElement(be.a,null)),r.a.createElement(le.a,{placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:a.grow}),r.a.createElement("div",{className:a.sectionDesktop},t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{style:{fontSize:"20px"},color:"inherit",onClick:function(){return e.history.push("/members/committee-members")}},"Committee Members")),!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{style:{fontSize:"20px"},color:"inherit",onClick:function(){return f("login")}},"Login"),r.a.createElement(q.a,{style:{fontSize:"20px"},color:"inherit",onClick:function(){return f("signup")}},"Signup")),r.a.createElement(q.a,{edge:"end","aria-label":"account of current user","aria-controls":h,"aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},color:"inherit"},r.a.createElement(fe.a,null))),r.a.createElement("div",{className:a.sectionMobile}))),t?g:null)})),Ee=a(82),ve=a.n(Ee),ye="http://localhost:5000/api",we=(localStorage.getItem("privateUserToken"),function(e){return x.a.post("".concat(ye,"/users/auth/signup"),e)}),xe="privateUserToken",ke=function(){try{return ve()(localStorage.getItem("privateUserToken"))}catch(e){return null}},je=function(){localStorage.removeItem("privateUserToken")},Ce=function(e){return x.a.post("".concat(ye,"/users/auth/login"),e)},Oe=function(){Object(u.f)();var e=function(){var e=Object(W.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ce(t);case 3:a=e.sent,n=a.data,localStorage.setItem(xe,n),window.location="/",e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message),s.b.error("Something went wrong");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{postSubmitLogic:e,heading:"Login",fields:[{name:"email",label:"Email",type:"email"},{name:"password",label:"Password",type:"password"}],button:{type:"submit",label:"Login",color:"#bf2604"}}))},Se=function(){var e=Object(u.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{postSubmitLogic:function(t){e.push("/auth/signup/join",t)},heading:"Join now to stay connected with your society in a better way",fields:[{name:"email",label:"Email",type:"email"},{name:"password",label:"Password",type:"password"}],button:{type:"submit",label:"Continue",color:"#bf2604"}}))},Te=function(e){var t=Object(u.f)().location.state,a=function(){var e=Object(W.a)(I.a.mark((function e(a){var n,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(R.a)({},a,{},t),e.prev=1,e.next=4,we(n);case 4:r=e.sent,localStorage.setItem(xe,r.headers["x-auth-token"]),window.location="/",e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message),s.b.error("Something went wrong");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{postSubmitLogic:a,heading:"Join now to stay connected with your society in a better way",fields:[{name:"fullName",label:"Full Name",type:"text"},{name:"society",label:"Society",type:"text"},{name:"houseNo",label:"House No",type:"number"},{name:"ownershipType",label:"Ownership Type",type:"text",placeholder:"Type owned or rented"},{name:"memberType",label:"Your management role",type:"text",placeholder:"Type President, Secretary, Treasurer, or None"}],button:{type:"submit",label:"Join",color:"#bf2604"}}))},Le=function(e){var t=e.location.pathname;return"/auth/signup/join"===t?r.a.createElement(Te,null):"/auth/signup"===t?r.a.createElement(Se,null):void 0},Ne=function(){return Object(n.useEffect)((function(){je(),window.location="/"}),[]),null};var Fe=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){c(ke())}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ge,{user:a}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(s.a,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/auth/signup/join",component:Le}),r.a.createElement(u.a,{path:"/auth/signup",component:Le}),r.a.createElement(u.a,{path:"/auth/login",component:Oe}),r.a.createElement(u.a,{path:"/user/logout",component:Ne}),r.a.createElement(u.a,{path:"/members/committee-members",component:A}),r.a.createElement(u.a,{path:"/:serviceTitle",render:function(e){return r.a.createElement(X,Object.assign({},e,{user:a}))}}),r.a.createElement(u.a,{exact:!0,path:"/",render:function(e){return a?r.a.createElement(F,Object.assign({},e,{user:a})):r.a.createElement(ae,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,null,r.a.createElement(Fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,t,a){e.exports=a.p+"static/media/service.01529538.svg"},78:function(e,t,a){e.exports=a.p+"static/media/welcome-1.a0513168.svg"},93:function(e,t,a){e.exports=a(125)}},[[93,1,2]]]);
//# sourceMappingURL=main.e49935d2.chunk.js.map