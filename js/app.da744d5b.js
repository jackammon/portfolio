(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],v=0,u=[];v<r.length;v++)o=r[v],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0206":function(t,e,a){"use strict";var s=a("ef99"),n=a.n(s);n.a},"0c47":function(t,e,a){t.exports=a.p+"img/as1.dce18f64.png"},"141c":function(t,e,a){"use strict";var s=a("c0bf"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("v-app-bar",{attrs:{absolute:"",flat:"",color:"white"}},[a("v-tabs",{attrs:{"background-color":"transparent",color:"black"}},[a("v-tab",{staticClass:"jck-size",attrs:{to:"/"}},[t._v("JCK")]),a("v-spacer",{staticStyle:{width:"60%"}}),a("v-tab",{staticClass:"btn-size",attrs:{to:"about"}},[t._v("About")]),a("v-tab",{staticClass:"btn-size",attrs:{to:"projects"}},[t._v("Experience")]),a("v-tab",{staticClass:"btn-size",attrs:{to:"/contact"}},[t._v("Contact")]),a("v-tab",{staticClass:"btn-size",attrs:{to:"resume"}},[t._v("Resume")])],1)],1),a("v-main",[a("v-container",{staticClass:"fill-height",staticStyle:{"padding-top":"56px","max-width":"100%"},attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center"},[a("router-view")],1)],1)],1)],1),a("v-btn",{staticClass:"fab",attrs:{fixed:"",dark:"",fab:"",bottom:"",right:"",color:"black",href:"https://github.com/jackammon",target:"__blank",elevation:"1"}},[a("v-icon",[t._v("mdi-github")])],1)],1)},i=[],o={mounted:function(){console.log("Hi there 👋"),console.log("I built this website using Vue.JS"),console.log("If you'd like to get in contact with me my information is found under the contact page"),console.log("Have a blessed day!")}},r=o,c=(a("5c0b"),a("2877")),l=a("6544"),d=a.n(l),v=a("7496"),u=a("40dc"),p=a("8336"),m=a("62ad"),g=a("a523"),f=a("132d"),w=a("f6c4"),h=a("0fd9"),b=a("2fa4"),_=a("71a3"),C=a("fe57"),y=Object(c["a"])(r,n,i,!1,null,null,null),x=y.exports;d()(y,{VApp:v["a"],VAppBar:u["a"],VBtn:p["a"],VCol:m["a"],VContainer:g["a"],VIcon:f["a"],VMain:w["a"],VRow:h["a"],VSpacer:b["a"],VTab:_["a"],VTabs:C["a"]});var S=a("8c4f"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Landing")],1)},j=[],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"3"}}),a("v-col",{attrs:{cols:"5"}},[a("div",{staticClass:"effect"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-word"},[t._v("Hello")]),a("div",{staticClass:"title-word"},[t._v("I'm")]),a("div",{staticClass:"title-word"},[t._v("Jack")])])])]),a("v-col",{attrs:{cols:"3"}})],1)],1)},F=[],O={name:"Title"},A=O,E=(a("0206"),Object(c["a"])(A,V,F,!1,null,"12b193cb",null)),I=E.exports;d()(E,{VCol:m["a"],VContainer:g["a"],VRow:h["a"]});var L={name:"Home",components:{Landing:I}},D=L,J=Object(c["a"])(D,k,j,!1,null,null,null),M=J.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"resume",staticStyle:{"padding-top":"20px"}},[a("v-container",{staticClass:"p-fix"},[a("v-row",{staticClass:"name"},[t._v(" Jack Ammon ")]),a("v-row",{staticClass:"sub-header"},[t._v(" Full Stack Software Engineer ")]),a("v-row",{staticClass:"text"},[t._v(" Innovative and strategic thinker, with a Computer Science foundation and experience bringing software products to launch. Blending technical insight with a keen eye for business and design, I excel in bringing clarity, direction, and alignment, passionately driving teams towards unified objectives. ")]),a("v-row",{staticStyle:{"padding-top":"16px"}},[a("v-col",{attrs:{cols:"5"}},[a("v-row",{staticClass:"section-header"},[t._v("Contact")]),a("v-row",[a("a",{staticClass:"text"},[t._v("509.808.1219")])]),a("v-row",[a("a",{staticClass:"text",attrs:{href:"mailto:jcarunner@gmail.com"}},[t._v(" jcarunner@gmail.com ")])]),a("v-row",[a("a",{staticClass:"text",attrs:{href:"https://github.com/jackammon"}},[t._v(" github.com/jackammon ")])]),a("v-row",[a("a",{staticClass:"text",attrs:{href:"http://www.linkedin.com/in/jackammon"}},[t._v(" linkedin.com/in/jackammon ")])]),a("v-row",{staticClass:"section-header",staticStyle:{"padding-top":"16px"}},[t._v(" Skills ")]),a("v-row",{staticClass:"titles"},[t._v(" Hard ")]),a("v-row",{staticClass:"text"},[t._v(" - Frontend: TypeScript, Vue.JS, Angular ")]),a("v-row",{staticClass:"text"},[t._v(" - Backend: NET, Node.js, Laravel ")]),a("v-row",{staticClass:"text"},[t._v(" - Git, Docker, Unix ")]),a("v-row",{staticClass:"text"},[t._v(" - OO programming ")]),a("v-row",{staticClass:"titles",staticStyle:{"padding-top":"8px"}},[t._v(" Soft ")]),a("v-row",{staticClass:"text"},[t._v(" - Writing and Speaking ")]),a("v-row",{staticClass:"text"},[t._v(" - Team-Building ")]),a("v-row",{staticClass:"text"},[t._v(" - Coordinating and delegating tasks ")]),a("v-row",{staticClass:"text"},[t._v(" - Decision making ")]),a("v-row",{staticClass:"section-header",staticStyle:{"padding-top":"16px"}},[t._v(" Education ")]),a("v-row",{staticClass:"titles"},[t._v(" B.S. Computer Science ")]),a("v-row",{staticClass:"text2"},[t._v(" @ George Fox University, 2021 ")]),a("v-row",{staticClass:"p-title",staticStyle:{"padding-top":"16px"}},[t._v(" Relevant Courses ")]),a("v-row",{staticClass:"i-text"},[t._v(" - Data Structures ")]),a("v-row",{staticClass:"i-text"},[t._v(" - Object Oriented Design & Analysis ")]),a("v-row",{staticClass:"i-text"},[t._v(" - Design & Analysis of Algorithms ")]),a("v-row",{staticClass:"i-text"},[t._v(" - Web Based Programming ")]),a("v-row",{staticClass:"i-text"},[t._v(" - Client-Server Systems ")]),a("v-row",{staticClass:"i-text"},[t._v(" - Database Systems ")]),a("v-row",{staticClass:"i-text"},[t._v(" - Human Computer Interactions ")]),a("v-row",{staticClass:"i-text"},[t._v(" - Operating Systems ")]),a("v-row",{staticClass:"i-text"},[t._v(" - Computer Security & Digital Forensics ")])],1),a("v-col",[a("v-row",{staticClass:"section-header"},[t._v(" Experience ")]),a("v-row",{staticClass:"titles"},[t._v(" Software Engineering Manager ")]),a("v-row",{staticClass:"text3"},[t._v(" June 2022 - March 2024 @ Buildable")]),a("v-row",[a("b",[t._v("30% - Management")]),a("ul",[a("li",[t._v("Led a team of 5 direct report engineers working on multiple projects.")]),a("li",[t._v("Made resource allocation decisions for weekly company production.")]),a("li",[t._v("Translated designs into actionable user stories and with LOE engineering estimations.")]),a("li",[t._v("1-1's with team members, focusing on their goals and career development.")])])]),a("v-row",{staticStyle:{"margin-bottom":"8px"}},[a("b",[t._v("70% - Engineering")]),a("ul",[a("li",[t._v("Wrote performant front-end components in Vue and Angular.")]),a("li",[t._v("Wrote performant .NET and Laravel backends.")]),a("li",[t._v("Setup and maintained production AWS & Azure environments for both internal and client facing projects.")]),a("li",[t._v("Setup GitLab CI/CD pipelines.")]),a("li",[t._v("Led daily standups as the scrum master for my projects.")])])]),a("v-row",{staticClass:"titles"},[t._v(" Software Engineer ")]),a("v-row",{staticClass:"text3"},[t._v(" July 2021 - June 2022 @ Buildable")]),a("v-row",{staticStyle:{"margin-bottom":"8px"}},[a("ul",[a("li",[t._v("Successfully developed and launched a custom ERP system with 4 apps and a central server.")]),a("li",[t._v("Rebuilt client trust and relationship, identifying true remaining project scope and seeing a 6-year-old project to completion and successful launch."),a("br")]),a("li",[t._v("Wrote performant front-end components in Vue and Angular.")]),a("li",[t._v("Wrote performant Laravel and NodeJS backends.")]),a("li",[t._v("Setup and maintained production AWS environments for both internal and client facing projects.")]),a("li",[t._v("Integrated with MariaDB and Postgres databases with SQL and Sequelize.")]),a("li",[t._v("Integrated 3rd party APIs including: Stripe, QBO, Twilio, Zoho, Azure AD SSO.")])])]),a("v-row",{staticClass:"titles"},[t._v(" Freelance Software Developer ")]),a("v-row",{staticClass:"text3"},[t._v("May 2019 - December 2020 @ Kingdom Web Development LLC")]),a("v-row",{staticStyle:{"margin-bottom":"16px"}},[a("ul",[a("li",[t._v("Wrote performant front-end components in Vue.")]),a("li",[t._v("Wrote performant NodeJS backends.")]),a("li",[t._v("Integrated Stripe into ecommerce sites.")]),a("li",[t._v("Worked directly with clients and designers on implementing and iterating on features.")])])]),a("v-row",{staticClass:"titles"},[t._v(" Technical Manager ")]),a("v-row",{staticClass:"text3"},[t._v("Fall 2019 - Spring 2021 @ Servant Engineering & Senior Design Projects for George Fox University")]),a("v-row",{staticStyle:{"margin-top":"0px !important"}},[a("ul",[a("li",[t._v("Led a team of four building a full-stack web app from scratch")]),a("li",[t._v("Built the frontend in Vue.JS and the backend with C# and Docker.")]),a("li",[t._v("Communicated project requirements and design ideas with the client.")]),a("li",[t._v("Worked directly with a creative agency in an iterative development process.")]),a("li",[t._v("Integrated Stripe.JS to handle donations.")]),a("li",[t._v("Led a team of six to design and build a comprehensive scheduling system.")]),a("li",[t._v("Ensured different phases of design and development progressed and integrated smoothly together.")]),a("li",[t._v("Led weekly sprint meetings.")]),a("li",[t._v("Gave presentations to my advisors and clients.")])])])],1)],1)],1)],1)},T=[],W=(a("b259"),{}),B=Object(c["a"])(W,P,T,!1,null,"fdbad1a8",null),R=B.exports;d()(B,{VCol:m["a"],VContainer:g["a"],VRow:h["a"]});var z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"projects"},[s("v-row",{staticStyle:{"padding-top":"16px"}},[s("v-col",[s("div",{staticClass:"title"},[t._v(" UP Movement ")])])],1),s("v-row",{staticClass:"text-center"},[s("v-col",[s("img",{attrs:{src:a("73fc"),alt:"UP Movement Website"}})])],1),s("v-row",[s("v-col",[s("v-row",{staticClass:"text",staticStyle:{"margin-top":"16px","margin-bottom":"16px"}},[t._v(" Starting in the Fall of 2019 I led a team for my servant engineering project in conjunction with Pivot Group to design and build a website for the UP Movement non-profit, which seeks to end human trafficking. We built the website and admin panel in Vue.JS and the backend with C# and ASP .NET. I communicated project requirements and design ideas with our client, worked directly with a design team in an iterative development process, and integrated Stripe.JS to handle donations. After our academic year ended I was hired to finish the website. In Fall of 2020 I passed the project onto another consultant to focus on school. ")])],1)],1),s("v-row",[s("v-col",[s("v-row",{staticClass:"sub-title"},[t._v(" \n        Technology\n    ")]),s("v-row",[s("img",{staticClass:"logos",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"}}),s("img",{staticClass:"logos",attrs:{src:"https://static.gunnarpeipman.com/wp-content/uploads/2020/09/aspnet-featured.png"}}),s("img",{staticClass:"logos",attrs:{src:"https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png"}})])],1)],1),s("v-row",{staticStyle:{"margin-top":"36px"}},[s("v-col",[s("div",{staticClass:"title"},[t._v(" Access Solutions ")])])],1),s("v-row",{staticClass:"text-center"},[s("v-col",[s("v-carousel",{attrs:{"hide-delimiter-background":"","hide-delimiters":"","show-arrows-on-hover":"",height:"auto"}},t._l(t.items,(function(t,e){return s("v-carousel-item",{key:e,staticStyle:{width:"100%"},attrs:{eager:"",src:t.src,"reverse-transition":"fade-transition",transition:"fade-transition",position:""}})})),1)],1)],1),s("v-row",[s("v-col",[s("v-row",{staticClass:"text",staticStyle:{"margin-top":"16px","margin-bottom":"16px"}},[t._v(" Starting in the Fall of 2020 I led a team of six for my senior design project to develop a comprehensive scheduling system for Access Solutions. I was responsible for ensuring different phases of design and development progressed and integrated smoothly together. I gained experience giving presentations to my advisors and our client, while also leading weekly design meetings with my team and delegated tasks based on each member's strengths. We built the website in Vue.JS and Django. These are some of the mockups we designed in AdobeXD.\n    ")])],1)],1),s("v-row",[s("v-col",[s("v-row",{staticClass:"sub-title"},[t._v(" \n        Technology\n    ")]),s("v-row",{staticStyle:{"padding-bottom":"16px"}},[s("img",{staticClass:"logos",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"}}),s("img",{staticClass:"logos",attrs:{src:"https://static.djangoproject.com/img/logos/django-logo-positive.png"}}),s("img",{staticClass:"logos",attrs:{src:"https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png"}}),s("img",{staticClass:"logos",attrs:{src:"https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png"}})])],1)],1)],1)},$=[],U={data:function(){return{items:[{src:a("0c47")},{src:a("f317")},{src:a("de08")}]}}},G=U,H=(a("141c"),a("5e66")),N=a("3e35"),Q=Object(c["a"])(G,z,$,!1,null,"d68cc4ac",null),q=Q.exports;d()(Q,{VCarousel:H["a"],VCarouselItem:N["a"],VCol:m["a"],VContainer:g["a"],VRow:h["a"]});var K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"3"}}),a("v-col",{attrs:{cols:"5"}},[a("div",{staticClass:"effect"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-word"},[t._v("You can reach me at ")]),a("div",{staticClass:"title-word"},[t._v("jcarunner@gmail.com")]),a("div",{staticClass:"title-word"},[t._v("509.808.1219")])])])]),a("v-col",{attrs:{cols:"3"}})],1)],1)},X=[],Y=(a("5d70"),{}),Z=Object(c["a"])(Y,K,X,!1,null,"1425e52c",null),tt=Z.exports;d()(Z,{VCol:m["a"],VContainer:g["a"],VRow:h["a"]});var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("coming soon")])},at=[],st={},nt=st,it=Object(c["a"])(nt,et,at,!1,null,null,null),ot=it.exports;s["a"].use(S["a"]);var rt=new S["a"]({routes:[{path:"/",name:"home",component:M},{path:"/resume",name:"resume",component:R},{path:"/projects",name:"projects",component:q},{path:"/contact",name:"contact",component:tt},{path:"/about",name:"about",component:ot}]}),ct=a("2f62");s["a"].use(ct["a"]);var lt=new ct["a"].Store({state:{},mutations:{},actions:{}}),dt=a("f309");s["a"].use(dt["a"]);var vt=new dt["a"]({theme:{dark:!1,default:"light",disable:!1,themes:{light:{primary:"#FFFFF2",secondary:"#04395E",accent:"#FFE099",error:"#DE6449",info:"#2196F3",success:"#70A288",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}}),ut=a("0284"),pt=a.n(ut);s["a"].use(pt.a,{id:"UA-189403119-1",router:rt}),s["a"].config.productionTip=!1,new s["a"]({router:rt,store:lt,vuetify:vt,render:function(t){return t(x)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("e332"),n=a.n(s);n.a},"5d70":function(t,e,a){"use strict";var s=a("6280"),n=a.n(s);n.a},"5f70":function(t,e,a){},6280:function(t,e,a){},"73fc":function(t,e,a){t.exports=a.p+"img/upmovement.db463eeb.gif"},b259:function(t,e,a){"use strict";var s=a("5f70"),n=a.n(s);n.a},c0bf:function(t,e,a){},de08:function(t,e,a){t.exports=a.p+"img/as3.f3250950.png"},e332:function(t,e,a){},ef99:function(t,e,a){},f317:function(t,e,a){t.exports=a.p+"img/as2.f9012c3b.png"}});
//# sourceMappingURL=app.da744d5b.js.map