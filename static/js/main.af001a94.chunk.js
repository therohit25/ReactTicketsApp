(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,a,t){e.exports=t.p+"static/media/ticket.a178debd.jpg"},33:function(e,a,t){e.exports=t(47)},47:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),r=t(29),c=t.n(r),o=t(0),m=t(6),i=function(){var e=Object(o.l)();return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},n.a.createElement(m.b,{className:"navbar-brand",to:"/"},"A2Z_ASSISTS"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mt-2 mt-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{className:"nav-link   ".concat("/"===e.pathname?"text-dark":"text-white"),to:"/","aria-current":"page"},"LoginForm")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{className:"nav-link   ".concat("/Tickets/Ticket"===e.pathname||"/Tickets/TicketForm"===e.pathname?"text-dark":"text-white"),to:"/Tickets/Ticket","aria-current":"page"},"Tickets"))))))},s=t(3),d=t(21),u=Object(d.b)({name:"loginlogout",initialState:{value:null},reducers:{login:function(e,a){e.value=a.payload},logout:function(e){return e.value=null}}}),p=u.actions,b=p.login,E=(p.logout,u.reducer),g=t(12),h=function(){var e=Object(o.n)(),a=Object(g.b)(),t=Object(l.useState)(),r=Object(s.a)(t,2),c=r[0],i=r[1],d=Object(l.useState)(),u=Object(s.a)(d,2),p=u[0],E=u[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container d-flex justify-content-center flex-column align-item-center gap-5 text-uppercase w-50  ",style:{minHeight:"83dvh"}},n.a.createElement("p",{className:"text-center display-5 fw-bold"},"Login Form"),n.a.createElement("form",{className:"w-100",onSubmit:function(t){return function(t){t.preventDefault(),a(b({Name:c,Password:p})),e("/Welcome")}(t)}},n.a.createElement("div",{className:"form-floating mb-3 w-100"},n.a.createElement("input",{type:"text",className:"form-control",name:"formId1",id:"formId1",placeholder:"Name",onChange:function(e){return i(e.target.value)},required:!0}),n.a.createElement("label",{htmlFor:"formId1"},"Name")),n.a.createElement("div",{className:"form-floating mb-3"},n.a.createElement("input",{type:"password",className:"form-control",name:"formId2",id:"formId2",placeholder:"Password",onChange:function(e){return E(e.target.value)},required:!0}),n.a.createElement("label",{htmlFor:"formId2"},"Password")),n.a.createElement("button",{className:"btn btn-info text-uppercase form-control"},"Login")),n.a.createElement("div",{className:"alert alert-primary  text-center",role:"alert"},n.a.createElement(m.b,{to:"/Welcome",className:"alert-link"},n.a.createElement("strong",null," Forgot Password? ")))))},f=t(4),N=t(26),v=t(27),k=function(){var e=Object(l.useState)({LeadSource:"",Name:"",ContactNo:"",Email:"",VehicalRegNo:"",Breakdown:"",Location:"",ServiceFee:"",AssistanceTime:""}),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)({leadsourcehelp:"",namehelp:"",contactnohelp:"",emailhelp:"",vehicalregnohelp:"",breakdownhelp:"",locationhelp:"",assistancetimehelp:""}),o=Object(s.a)(c,2),m=o[0],i=o[1],d=function(e){r(Object(N.a)({},t,Object(f.a)({},e.target.name,e.target.value))),"Email"===e.target.name?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)?i({emailhelp:!1}):i({emailhelp:!0}):"VehicalRegNo"===e.target.name?/^[A-Z0-9]+$/.test(e.target.value)?i({vehicalregnohelp:!1}):i({vehicalregnohelp:!0}):i(Object(N.a)({},m,Object(f.a)({},e.target.name,!1)))},u=function(e){if(e.preventDefault(),function(){for(var e in m)if(!0===m[e])return!1;return!0}()){v.b.success("New Task Added!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"dark"});var a=localStorage.getItem("Tickets"),l=a?JSON.parse(a):[];l.push(t),localStorage.setItem("Tickets",JSON.stringify(l))}r({LeadSource:"",Name:"",ContactNo:"",Email:"",VehicalRegNo:"",Breakdown:"",Location:"",ServiceFee:"",AssistanceTime:""})};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container d-flex justify-content-center my-5"},n.a.createElement("form",{onSubmit:function(e){return u(e)},className:"form-control w-50 px-5 ",style:{background:"linear-gradient( 45deg, hsl(229, 86%, 80%) 51%, hsl(229, 90%, 77%) 51%, hwb(229 56% 2%) 51% )",boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",textAlign:"left"}},n.a.createElement("p",{className:"text-center display-5 fw-bold my-5 text-uppercase"},"Ticket Form"),n.a.createElement("div",{class:"mb-3 "},n.a.createElement("label",{for:"LeadSource",class:"form-label"},"Lead Source:"),n.a.createElement("select",{class:"form-select form-select-lg",name:"LeadSource",id:"LeadSource",onChange:function(e){return d(e)},required:!0},n.a.createElement("option",{selected:!0,disabled:!0},"Select one"),n.a.createElement("option",{value:"Web"},"Web"),n.a.createElement("option",{value:"Chat"},"Chat"),n.a.createElement("option",{value:"Call"},"Call"))),n.a.createElement("div",{className:"mb-3 form-floating"},n.a.createElement("input",{type:"text",name:"Name",id:"Name",className:"form-control",placeholder:"Name","aria-describedby":"namehelp",onChange:function(e){return d(e)},required:!0}),!0===m.namehelp&&n.a.createElement("small",{id:"namehelp",className:"text-muted"},"Valid Name"),n.a.createElement("label",{htmlFor:"Name",className:"form-label"},"Name")),n.a.createElement("div",{className:"mb-3 form-floating"},n.a.createElement("input",{type:"number",name:"ContactNo",id:"ContactNo",className:"form-control",placeholder:"Name","aria-describedby":"contacthelp",onChange:function(e){return d(e)},required:!0}),!0===m.contactnohelp&&n.a.createElement("small",{id:"contactnohelp",className:"text-muted"},"Valid Contact"),n.a.createElement("label",{htmlFor:"ContactNo",className:"form-label"},"Contact No")),n.a.createElement("div",{className:"mb-3 form-floating"},n.a.createElement("input",{type:"email",name:"Email",id:"Email",className:"form-control",placeholder:"Email","aria-describedby":"email",onChange:function(e){return d(e)},required:!0}),!0===m.emailhelp&&n.a.createElement("small",{id:"emailhelp",className:"text-muted text-danger"},"Enter a Valid Email Address"),n.a.createElement("label",{htmlFor:"Email",className:"form-label"},"Email")),n.a.createElement("div",{className:"mb-3 form-floating"},n.a.createElement("input",{type:"text",id:"VehicalRegNo",name:"VehicalRegNo",className:"form-control",placeholder:"VehicalRegNo","aria-describedby":"VehicalRegNolhelp",onChange:function(e){return d(e)},required:!0}),!0===m.vehicalregnohelp&&n.a.createElement("small",{id:"vehicalregnohelp",className:"text-muted"},"Enter a Valid Vehical Registratin No"),n.a.createElement("label",{htmlFor:"VehicalRegNo",className:"form-label"},"Vehical Registration Number")),n.a.createElement("div",{className:"mb-3 form-floating"},n.a.createElement("input",{type:"text",name:"Breakdown",id:"Breakdown",className:"form-control",placeholder:"email","aria-describedby":"Breakdown",onChange:function(e){return d(e)},required:!0}),!0===m.breakdownhelp&&n.a.createElement("small",{id:"breakdownhelp",className:"text-muted"},"Vehical Breakdown"),n.a.createElement("label",{htmlFor:"Breakdown",className:"form-label"},"Breakdown")),n.a.createElement("div",{className:"mb-3 form-floating"},n.a.createElement("input",{type:"text",name:"Location",id:"Location",className:"form-control",placeholder:"Location","aria-describedby":"Locationhelp",onChange:function(e){return d(e)},required:!0}),!0===m.locationhelp&&n.a.createElement("small",{id:"locationhelp",className:"text-muted"},"Valid Vehical Location"),n.a.createElement("label",{htmlFor:"Location",className:"form-label"},"Location")),n.a.createElement("div",{className:"mb-3 form-floating"},n.a.createElement("input",{type:"number",name:"ServiceFee",id:"ServiceFee",className:"form-control",placeholder:"Service Fee","aria-describedby":"servicefeehelp",onChange:function(e){return d(e)}}),n.a.createElement("label",{htmlFor:"ServiceFee",className:"form-label"},"Service Fee")),n.a.createElement("div",{className:"mb-3 form-floating form-floating"},n.a.createElement("input",{type:"datetime-local",name:"AssistanceTime",id:"AssistanceTime",className:"form-control",placeholder:"Location","aria-describedby":"AssistanceTimehelp",onChange:function(e){return d(e)},required:!0}),!0===m.assistancetimehelp&&n.a.createElement("small",{id:"assistancetimehelp",className:"text-muted"},"Valid AssistanceTime"),n.a.createElement("label",{htmlFor:"AssistanceTime",className:"form-label"},"Valid Assistance Time")),n.a.createElement("div",{className:"mb-3"},n.a.createElement("button",{className:"btn btn-primary form-control"},"Submit")))),n.a.createElement(v.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}))},y=t(32),T=t.n(y),x=function(){var e=Object(l.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1];return Object(l.useEffect)(function(){r(JSON.parse(localStorage.getItem("Tickets")))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container ",style:{minHeight:"75dvh"}},n.a.createElement("div",{className:"row justify-content-center"},null!==t?t.map(function(e,a){return n.a.createElement("div",{className:"col-4",key:a},n.a.createElement("div",{class:"card text-center my-5 ",key:a},n.a.createElement("img",{class:"card-img-top",src:T.a,alt:"Ticket"}),n.a.createElement("div",{class:"card-body"},n.a.createElement("h4",{class:"card-title"},"LeadSource :",e.LeadSource," "),n.a.createElement("p",{class:"card-text"},"Name: ",e.Name)),n.a.createElement("ul",{class:"list-group list-group-flush"},n.a.createElement("li",{class:"list-group-item"},"Email: ",e.Email),n.a.createElement("li",{class:"list-group-item"},"VehicalRegNo: ",e.VehicalRegNo),n.a.createElement("li",{class:"list-group-item"},"ContactNo: ",e.ContactNo),n.a.createElement("li",{class:"list-group-item"},"Location: ",e.Location),n.a.createElement("li",{class:"list-group-item"},"AssistanceTime: ",e.AssistanceTime))))}):n.a.createElement("div",{className:"my-5"},n.a.createElement("h1",null,"No Tickets Yet!.."),n.a.createElement("br",null),n.a.createElement(m.b,{to:"/Tickets/TicketForm"},"Add Tickets")))))},w=function(){var e=Object(o.l)();return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{class:"card text-center"},n.a.createElement("div",{class:"card-header"},n.a.createElement("ul",{class:"nav nav-tabs card-header-tabs"},n.a.createElement("li",{class:"nav-item"},n.a.createElement(m.b,{class:"nav-link  ".concat("/Tickets/Ticket"===e.pathname?"active":""),"aria-current":"true",to:"/Tickets/Ticket"},"Ticket")),n.a.createElement("li",{class:"nav-item"},n.a.createElement(m.b,{class:"nav-link  ".concat("/Tickets/Ticket"===e.pathname?"":"active"),to:"/Tickets/TicketForm"},"TicketForm")))),n.a.createElement("div",{class:"card-body"},n.a.createElement("p",{class:"card-text"},"/Tickets/Ticket"===e.pathname?n.a.createElement(x,null):n.a.createElement(k,null)))))},S=function(){var e=Object(l.useState)("Good Morning"),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(g.c)(function(e){return e.LoginLogoutSlice.value});return Object(l.useEffect)(function(){var e=(new Date).getHours();r(e<12?"Good Morning!..":e>=12&&e<=17?"Good Afternoon!..":"Good Night!..")},[]),n.a.createElement("div",null,n.a.createElement("div",{className:"p-5 mb-4 bg-light rounded-3",style:{height:"80dvh"}},n.a.createElement("div",{className:"container-fluid py-5"},n.a.createElement("h1",{className:"display-5 fw-bold"},t),n.a.createElement("p",{className:"col-md-8 fs-4"},"How are you doing ",c&&c.Name+""," Today?"),n.a.createElement(m.b,{to:"/Tickets/TicketForm"},n.a.createElement("button",{className:"btn btn-primary btn-lg",type:"button"},"Create New Ticket")))))},F=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{class:"p-5 mb-4 bg-light rounded-3 ",style:{height:"80dvh"}},n.a.createElement("div",{class:"container-fluid py-5"},n.a.createElement("h1",{class:"display-5 fw-bold text-uppercase"},"404 Not Found",n.a.createElement("span",{role:"img","aria-label":"Emoji"},"\ud83c\udf27\ufe0f")),n.a.createElement("p",{class:"col-md-8 fs-4"},"The requested URL was not found on this server, Please Check you are Visiting the right site, ",n.a.createElement("br",null),"Or Site Maybe Removed by the owner"))))},C=(t(45),function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"text-center p-3 text-white bg-dark fw-bold display-6 position-sticky bottom-0 w-100"},"All \xa9 Reseved To Rohit"))});var O=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(i,null),n.a.createElement(o.c,null,n.a.createElement(o.a,{exact:!0,path:"/",element:n.a.createElement(h,null)}),n.a.createElement(o.a,{exact:!0,path:"/TicketForm",element:n.a.createElement(k,null)}),n.a.createElement(o.a,{exact:!0,path:"/Welcome",element:n.a.createElement(S,null)}),n.a.createElement(o.a,{exact:!0,path:"/Tickets/Ticket",element:n.a.createElement(w,null)}),n.a.createElement(o.a,{exact:!0,path:"/Tickets/TicketForm",element:n.a.createElement(w,null)}),n.a.createElement(o.a,{path:"*",element:n.a.createElement(F,null)})),n.a.createElement(C,null)))},L=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,48)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),r(e),c(e)})},j=Object(d.a)({reducer:{LoginLogoutSlice:E}});c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g.a,{store:j},n.a.createElement(O,null)))),L()}},[[33,3,2]]]);
//# sourceMappingURL=main.af001a94.chunk.js.map