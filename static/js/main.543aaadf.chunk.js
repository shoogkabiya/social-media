(this.webpackJsonpcarsales=this.webpackJsonpcarsales||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(18),o=a.n(s),r=(a(26),a.p,a(27),a(10)),l=a(4),i=a(3),u=(a(28),a(2)),j=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),o=Object(i.a)(s,2),j=o[0],b=o[1],O=Object(n.useState)(!1),d=Object(i.a)(O,2),p=d[0],g=d[1],m=Object(n.useState)(""),h=Object(i.a)(m,2),x=h[0],f=h[1],v=Object(n.useState)(""),S=Object(i.a)(v,2),N=S[0],y=S[1],C=Object(n.useState)(!1),w=Object(i.a)(C,2),F=w[0],P=w[1],k=Object(n.useState)(!1),E=Object(i.a)(k,2),z=E[0],_=E[1],$=Object(l.f)();return Object(u.jsx)("div",{className:"form-signin-input",children:Object(u.jsxs)("form",{onSubmit:function(e){!function(e){var t;e.preventDefault(),F&&z&&j?(console.log("ValidEmail,ValidPassword"),t="http://localhost:4000/user/signin",$.push("/UploadForm")):F&&z&&p&&(t="http://localhost:4000/consumer/signin",$.push("/Cars")),fetch(t,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:x,password:N})}).then((function(e){return console.log("response:",e),e.json()})).then((function(e){if(console.log(e),!e.access_token)return e;localStorage.setItem("access_token",e.access_token)})).catch((function(e){console.log(e)}))}(e)},children:[Object(u.jsx)("input",{name:"email",placeholder:"Email",value:x,className:"input-form",onChange:function(e){f(e.target.value),/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(e.target.value)?(console.log("Email:","Emailtrue"),P(!0)):P(!1)},type:"email"}),!F&&Object(u.jsx)("p",{className:"error",children:"Your username is invalid"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{name:"password",placeholder:"password",value:N,className:"input-form",onChange:function(e){y(e.target.value),/[\w@-]{8,20}$/.test(e.target.value)?(console.log("password:","passwordtrue"),_(!0)):_(!1)},type:"password"}),!z&&Object(u.jsx)("p",{className:"error",children:"our password is invalid"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"Signin",type:"submit",children:"Sign in"}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{id:"checkBox",children:[Object(u.jsxs)("div",{className:"user-radio",children:[Object(u.jsx)("label",{htmlFor:"role-box",children:" are you User?"}),Object(u.jsx)("input",{type:"radio",name:"role",id:"user",onClick:function(){return function(){var e=document.getElementById("user");console.log("checkedUser:",e),e&&b(!0)}()},onChange:function(){return c(!a)}})]}),Object(u.jsxs)("div",{className:"consumer-radio",children:[Object(u.jsx)("label",{htmlFor:"role-box",children:" are you Consumer?"}),Object(u.jsx)("input",{type:"radio",name:"role",id:"consumer",onClick:function(){return function(){var e=document.getElementById("consumer");console.log("checkedConsumer:",e),e&&g(!0)}()},onChange:function(){return c(!a)}})]})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("p",{className:"createaccount",children:["Don't have an account? ",Object(u.jsx)(r.b,{to:"/Signup",children:"Sign up"})]})]})})},b=function(){var e=Object(l.f)(),t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)(""),r=Object(i.a)(o,2),j=r[0],b=r[1],O=Object(n.useState)(""),d=Object(i.a)(O,2),p=d[0],g=d[1],m=Object(n.useState)(""),h=Object(i.a)(m,2),x=h[0],f=h[1],v=Object(n.useState)(""),S=Object(i.a)(v,2),N=S[0],y=S[1],C=Object(n.useState)(""),w=Object(i.a)(C,2),F=w[0],P=w[1],k=Object(n.useState)(!1),E=Object(i.a)(k,2),z=E[0],_=E[1],$=Object(n.useState)(!1),D=Object(i.a)($,2),L=D[0],T=D[1],U=Object(n.useState)(!1),A=Object(i.a)(U,2),B=A[0],I=A[1],V=Object(n.useState)(!1),J=Object(i.a)(V,2),R=J[0],q=J[1],G=Object(n.useState)(!1),H=Object(i.a)(G,2),M=H[0],Y=H[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{className:"Signup-input-form",onSubmit:function(t){!function(t){t.preventDefault(),z&&L&&B&&R&&M&&(console.log("Correct data"),e.push("/"))}(t)},children:[Object(u.jsx)("input",{name:"firstName",placeholder:"First Name",value:j,className:"input-form",onChange:function(e){b(e.target.value),/^[a-z\d]{5,12}$/i.test(e.target.value)?(console.log("FirstName:","FirstNametrue"),_(!0)):_(!1)},type:"text"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{name:"lastName",placeholder:"Last Name",value:p,className:"input-form",onChange:function(e){g(e.target.value),/^[a-z\d]{5,12}$/i.test(e.target.value)?(console.log("LastName:","LastNametrue"),T(!0)):T(!1)},type:"text"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{name:"email",placeholder:"Email",value:x,className:"input-form",onChange:function(e){f(e.target.value),/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(e.target.value)?(console.log("Email:","Emailtrue"),I(!0)):I(!1)},type:"email"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{name:"Password",placeholder:"Password",value:N,className:"input-form",onChange:function(e){y(e.target.value),/[\w@-]{8,20}$/i.test(e.target.value)?(console.log("password:","passwordtrue"),q(!0)):q(!1)},type:"password"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{name:"confirmPassword",placeholder:"Confirm Password",value:F,className:"input-form",onChange:function(e){return function(e){P(e.target.value),N!==e.target.value?(s("Confirm Password should be match with password"),Y(!1),console.log("password doesn't match ")):(console.log("password match "),Y(!0))}(e)},type:"password"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),M?"equal":Object(u.jsxs)("p",{className:"error",children:[c," "]}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"Signup",type:"submit",children:"Sign up"})]})})};a(35);var O=function(e){return console.log("text:",e.text),Object(u.jsx)("div",{children:"cars"})},d=a(0),p=a(20);function g(e){return Object(u.jsx)(d.b.Provider,{value:{className:e.className},children:Object(u.jsx)(p.a,{})})}var m=a(16),h=a.n(m),x=a(21),f=function(){var e=Object(x.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://loacalhost:4000","/user/addCars"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:t})});case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,console.log("datacars:",n),n&&console.log("datacars:",n.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),o=Object(i.a)(s,2),r=o[0],j=o[1],b=Object(n.useState)(null),O=Object(i.a)(b,2),d=O[0],p=O[1],m=Object(n.useState)(""),h=Object(i.a)(m,2),x=h[0],v=h[1],S=Object(n.useState)(""),N=Object(i.a)(S,2),y=N[0],C=N[1],w=Object(n.useState)(""),F=Object(i.a)(w,2),P=F[0],k=F[1],E=Object(n.useState)(""),z=Object(i.a)(E,2),_=z[0],$=z[1],D=Object(n.useState)(""),L=Object(i.a)(D,2),T=L[0],U=L[1],A=Object(n.useState)(""),B=Object(i.a)(A,2),I=B[0],V=B[1],J=Object(n.useState)(""),R=Object(i.a)(J,2),q=R[0],G=R[1],H=Object(n.useState)(""),M=Object(i.a)(H,2),Y=M[0],K=M[1],Q=Object(n.useState)(""),W=Object(i.a)(Q,2),X=W[0],Z=W[1],ee=Object(n.useState)(""),te=Object(i.a)(ee,2),ae=te[0],ne=te[1],ce=Object(n.useState)(!1),se=Object(i.a)(ce,2),oe=se[0],re=se[1],le=Object(n.useState)(!1),ie=Object(i.a)(le,2),ue=ie[0],je=ie[1],be=Object(n.useState)(!1),Oe=Object(i.a)(be,2),de=Oe[0],pe=Oe[1],ge=Object(n.useState)(!1),me=Object(i.a)(ge,2),he=me[0],xe=me[1],fe=Object(n.useState)(!1),ve=Object(i.a)(fe,2),Se=ve[0],Ne=ve[1],ye=Object(n.useState)(!1),Ce=Object(i.a)(ye,2),we=Ce[0],Fe=Ce[1],Pe=Object(n.useState)(!1),ke=Object(i.a)(Pe,2),Ee=ke[0],ze=ke[1],_e=Object(n.useState)(!1),$e=Object(i.a)(_e,2),De=$e[0],Le=$e[1],Te=Object(n.useState)(!1),Ue=Object(i.a)(Te,2),Ae=Ue[0],Be=Ue[1],Ie=Object(n.useState)(!1),Ve=Object(i.a)(Ie,2),Je=Ve[0],Re=Ve[1],qe=["image/png","image/jpeg","image/webp"],Ge=Object(l.f)();Object(n.useEffect)((function(){if(a){var e=new FileReader;console.log("reader:",e),e.onloadend=function(){p(e.result)},e.readAsDataURL(a),console.log("file:",a.name)}else p(null)}),[a]);return console.log("preview:",d),Object(u.jsxs)("form",{onSubmit:function(e){!function(e){e.preventDefault(),d&&oe&&ue&&de&&he&&Se&&we&&Ee&&De&&Ae&&Je&&(console.log("Correct data"),f({images:d,version:x,year:y,engine:P,current_mileage:_,hand:T,gearbox:I,color:q,original_ownership:Y,next_test:X,annual_licensing_fee:ae}),Ge.push("/Cars"))}(e)},children:[d?Object(u.jsx)("img",{src:d,width:"150",height:"100"}):"no picture uppload",Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&qe.includes(t.type)?(c(t),j(""),console.log("typeof:",typeof t)):(c(null),j("Please select an image file(png or jpeg)"))},multiple:!0,style:{display:"none"},accept:"image/*"}),Object(u.jsx)(g,{className:"Add-icon"})]}),Object(u.jsxs)("div",{className:"error",children:[r&&Object(u.jsx)("div",{className:"errormessage",children:r}),a&&Object(u.jsx)("div",{style:{display:"none"},children:a.name}),Object(u.jsxs)("div",{className:"UploadForm",children:[Object(u.jsx)("p",{className:"Vehicledetails",children:"Vehicle details"}),Object(u.jsx)("input",{type:"text",placeholder:"Version",value:x,onChange:function(e){v(e.target.value),/[a-\u05ea_]/gi.test(e.target.value)?(console.log("version:","version"),re(!0)):re(!1)},className:"input-form"}),Object(u.jsx)("input",{type:"text",placeholder:"year",value:y,onChange:function(e){C(e.target.value),/^\d{4}$/i.test(e.target.value)?(console.log("year:","year"),je(!0)):je(!1)},className:"input-form"}),Object(u.jsx)("input",{type:"text",placeholder:"Engine",value:P,onChange:function(e){k(e.target.value),/[a-\u05ea_\d]/gi.test(e.target.value)?(console.log("engine:","engine"),pe(!0)):pe(!1)},className:"input-form"}),Object(u.jsx)("input",{type:"text",placeholder:"Current mileage",value:_,onChange:function(e){$(e.target.value),/[,\d]/gi.test(e.target.value)?(console.log("currentmileage:","currentmileage"),xe(!0)):xe(!1)},className:"input-form"}),Object(u.jsx)("input",{type:"text",placeholder:"Hand",value:T,onChange:function(e){U(e.target.value),/^\d$/gi.test(e.target.value)?(console.log("hand:","hand"),Ne(!0)):Ne(!1)},className:"input-form"}),Object(u.jsx)("input",{type:"text",placeholder:"Gearbox",value:I,onChange:function(e){V(e.target.value),/[\u05d0-\u05ea]/gi.test(e.target.value)?(console.log("gearbox:","gearbox"),Fe(!0)):Fe(!1)},className:"input-form"}),Object(u.jsx)("input",{type:"text",placeholder:"Color",value:q,onChange:function(e){G(e.target.value),/[\u05d0-\u05ea]/gi.test(e.target.value)?(console.log("color:","color"),ze(!0)):ze(!1)},className:"input-form"}),Object(u.jsx)("input",{type:"text",value:Y,placeholder:"Original ownership",onChange:function(e){K(e.target.value),/[\u05d0-\u05ea]/gi.test(e.target.value)?(console.log("originalownership:","originalownership"),Le(!0)):Le(!1)},className:"input-form"}),Object(u.jsx)("input",{type:"text",placeholder:"Next Test",value:X,onChange:function(e){Z(e.target.value),/[\u05d0-\u05ea\d]/gi.test(e.target.value)?(console.log("nexttest:","nexttest"),Be(!0)):Be(!1)},className:"input-form"}),Object(u.jsx)("input",{type:"text",placeholder:" Annual licensing fee",value:ae,onChange:function(e){ne(e.target.value),/[,\d]/gi.test(e.target.value)?(console.log("annuallicensingfee:","annuallicensingfee"),Re(!0)):Re(!1)},className:"input-form"}),Object(u.jsx)("button",{className:"AddCar",type:"submit",children:"Add"})]})]})]})},S=(a(37),function(){return Object(u.jsx)("div",{className:"head-container"})}),N=function(){return Object(u.jsx)("div",{className:"Page",children:Object(u.jsxs)(r.a,{children:[Object(u.jsx)(S,{}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",children:Object(u.jsx)(j,{})}),Object(u.jsx)(l.a,{path:"/Signup",children:Object(u.jsx)(b,{})}),Object(u.jsx)(l.a,{path:"/UploadForm",children:Object(u.jsx)(v,{})}),Object(u.jsx)(l.a,{path:"/Cars",children:Object(u.jsx)(O,{})})]})]})})};var y=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(N,{})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),s(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),C()}},[[38,1,2]]]);
//# sourceMappingURL=main.543aaadf.chunk.js.map