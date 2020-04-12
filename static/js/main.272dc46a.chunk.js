(this.webpackJsonp000_portfolio=this.webpackJsonp000_portfolio||[]).push([[0],{37:function(e,t,a){e.exports=a(63)},63:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(31),c=a.n(l),r=function(){return i.a.createElement("div",{id:"side-bar"},i.a.createElement("div",{id:"side-bar-content"},i.a.createElement("a",{className:"quick-link",href:"https://github.com/AnnMLin",target:"_blank"},i.a.createElement("img",{className:"quick-link-icon",src:"./icons/github-5.png",alt:"link to Github"})),i.a.createElement("a",{className:"quick-link",href:"https://www.linkedin.com/in/ann-m-lin",target:"_blank"},i.a.createElement("img",{className:"quick-link-icon",src:"./icons/linkedin-4.png",alt:"link to Linkedin"})),i.a.createElement("a",{className:"quick-link",href:"",target:"_blank"},i.a.createElement("img",{className:"quick-link-icon",src:"./icons/download-2.png",alt:"link to Resume"})),i.a.createElement("a",{className:"quick-link",href:"mailto:hello@annmlin.com"},i.a.createElement("img",{className:"quick-link-icon",src:"./icons/email-1.png",alt:"link to Email"}))))},s=a(9),m=a(6),o=a(18),u=a.n(o),d=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],c=function(e,t){a&&a===e.target.title?l(""):l(e.target.title),setTimeout((function(){u()("html, body").animate({scrollTop:u()("#".concat(t)).offset().top},1200)}),1100)};return i.a.createElement("div",{id:"home-page"},i.a.createElement("div",null,i.a.createElement(b,{name:"PROJECTS",handleClick:c,isOpen:"PROJECTS"===a},i.a.createElement(F,null)),i.a.createElement(b,{name:"ABOUT",handleClick:c,isOpen:"ABOUT"===a},i.a.createElement(p,null)),i.a.createElement(b,{name:"CONTACT",handleClick:c,isOpen:"CONTACT"===a},i.a.createElement(g,null))))},F=(a(10),function(){return i.a.createElement("div",{className:"content-container"},i.a.createElement("div",{className:"projects-container"},[{title:"myPortfolio",image:"./images/circle-place-holder.png",desc:"Personal portfolio site. Built with React frontend.",tech:["HTML","CSS","Javascript","jQuery","NodeJS","React","react-spring","Photoshop"],gitHubLink:"https://github.com/AnnMLin/portfolio",link:""},{title:"Build-A-Mate",image:"./images/circle-place-holder.png",desc:"An online dating application that is here not only to revolutionize online dating but also make it fun. Using machine learning libraries and our interactive drag and drop interface, we help a user find their perfect match by letting them build their ideal face.",tech:["HTML","CSS","Javascript","NodeJS","React","Redux","Express","Sequelize","React DnD","Face-api.js","MaterialUI","Photoshop"],gitHubLink:"https://github.com/fsa-capstone-team/build-a-mate"},{title:"Present and Absent of the Body",image:"./images/circle-place-holder.png",desc:"A water-bottle sized installation with bio-mimic components that imitates a user's head movement. With researches in human body neck movement, I designed a robotic neck using the technology of 3d print, laser cut, CNC, IMU sensors and stepper motors. The robot is capable to sense a user's head movements, synchronously follow, capture visions and project back to user's eye goggles.",tech:["Processing","National Instrument","Rhinoceros","AutoCAD","Arduino","IMU 6DOF","Laser Cut","CNC","3d Print"],youtube:"https://www.youtube.com/watch?v=pl25EXSgB4E"}].map((function(e){return i.a.createElement("div",{key:e.title},i.a.createElement(k,e))})),i.a.createElement("div",{className:"auto-fill"}),i.a.createElement("div",{className:"auto-fill"}),i.a.createElement("div",{className:"auto-fill"}),i.a.createElement("div",{className:"auto-fill"})))}),p=function(){return i.a.createElement("div",{className:"content-container"},i.a.createElement("div",{className:"about-item"},i.a.createElement("div",{className:"headshot-item"},i.a.createElement("img",{className:"headshot",src:"/images/placeholder.jpg",alt:""})),i.a.createElement("div",{className:"info-field"},i.a.createElement("p",null,"Hi! I'm Ann"),i.a.createElement("p",null,"Full-stack software engineer with backgrounds in architectural design, parametric design, and dance."),i.a.createElement("p",null,"New York City via Munich, London, Taiwan, and Oklahoma."),i.a.createElement("p",null,"I work at the intersection of science, technology, and design. Experimental personality with lots of interests. Always looking for inspirations."),i.a.createElement("p",null,"Outside of coding, I make line drawings, teach adult dance classes, perform, and was named finalists in multiple dance competitions in the US and internationally. I've built a single family housing prototype with my team in Colombia, South America, was part of an exhibition at the Swiss Pavilion at Venice Biennale 2014, and performed at Pole Theatre Iceland."))))},g=function(){return i.a.createElement("div",{className:"content-container"},i.a.createElement("div",{className:"contact-item"},i.a.createElement("div",{className:"text"},"Leave me a message!"),i.a.createElement("div",{className:"space"}),i.a.createElement(w,null),i.a.createElement("div",{className:"space"}),i.a.createElement("div",{className:"text"},"Or contact me at hello@annmlin.com")))},E=a(34);var h=a(19),f=a(35),v=a.n(f),b=Object(n.memo)((function(e){var t=e.children,a=e.name,l=e.isOpen,c=e.handleClick,r=function(){var e=Object(n.useRef)(),t=Object(n.useState)({left:0,top:0,width:0,height:0}),a=Object(m.a)(t,2),i=a[0],l=a[1],c=Object(n.useState)((function(){return new E.a((function(e){var t=Object(m.a)(e,1)[0];return l(t.contentRect)}))})),r=Object(m.a)(c,1)[0];return Object(n.useEffect)((function(){return e.current&&r.observe(e.current),function(){return r.disconnect()}}),[]),[{ref:e},i]}(),s=Object(m.a)(r,2),o=s[0],u=s[1].height,d=Object(h.b)({from:{height:l?0:u,opacity:l?0:.99},to:{height:l?u:0,opacity:l?.99:0},config:{mass:1,tension:280,friction:120,duration:1e3}}),F=d.height,p=d.opacity;return i.a.createElement("div",{id:"".concat(a),className:"big-letters"},i.a.createElement("div",{className:v()("big-letters-link",{isOpen:l})},i.a.createElement("div",{className:"big-letters-container"},i.a.createElement("span",{className:"big-letters-inner-text",onClick:function(e){return c(e,a)},title:a},a))),i.a.createElement(h.a.div,{className:"animated-div",style:{opacity:p,height:F}},i.a.createElement("div",o,t)))})),k=function(e){var t=e.title,a=e.image,n=e.desc,l=e.tech,c=void 0===l?[]:l,r=e.gitHubLink,s=e.link,m=e.youtube;return i.a.createElement("div",{className:"project-card"},i.a.createElement("div",{className:"cover-photo-item"},i.a.createElement("img",{className:"cover-photo",src:a,alt:t})),i.a.createElement("div",{className:"text-field"},i.a.createElement("div",{className:"desc"},n),i.a.createElement("div",{className:"tech"},c.map((function(e){return i.a.createElement("div",{key:e,className:"tech-item"},i.a.createElement("div",{className:"tech-keyword"},e))}))),i.a.createElement("div",{className:"link"},r?i.a.createElement("div",{className:"link-item"},i.a.createElement("a",{target:"_blank",href:r},i.a.createElement("img",{className:"link-icon",src:"./icons/github-5.png",alt:"link to Github"}))):null,m?i.a.createElement("div",{className:"link-item"},i.a.createElement("a",{target:"_blank",href:m},i.a.createElement("img",{className:"link-icon",src:"./icons/youtube-icon.png",alt:"link to Youtube"}))):null,s?i.a.createElement("div",{className:"link-item"},i.a.createElement("a",{target:"_blank",href:s},i.a.createElement("img",{className:"link-icon",src:"./icons/web-5.png",alt:"link to Website"}))):null)))},N=a(8),C=a(14),D=a(36),y=a.n(D),w=function(){var e=Object(n.useState)({name:"",email:"",msg:"",warning:""}),t=Object(m.a)(e,2),a=t[0],l=t[1],c=function(e){l(Object(C.a)({},a,Object(N.a)({},e.target.name,e.target.value)))},r=function(e){e.preventDefault(),a.name&&a.msg&&a.email?s(a.email)?(console.log("Submit!"),o()):l(Object(C.a)({},a,{warning:"Please enter a valid email *"})):l(Object(C.a)({},a,{warning:"All fields required *"}))},s=function(e){return/(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(String(e).toLowerCase())},o=function(){var e=new FormData;e.append("entry.1705909865",a.msg),e.append("emailAddress",a.email),e.append("entry.406913298",a.name),y.a.post("https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLScDu8IFy-KyNcvrNyMgWDgFZnMCpEzV2AjGdexEISqvCcSCsg/formResponse",e).then((function(){console.log("SUCCESS!"),l({name:"",email:"",msg:""})})).catch((function(e){console.log(e)}))};return i.a.createElement("form",{className:"form-item",onSubmit:r},i.a.createElement("div",{id:"info-container"},i.a.createElement("div",{id:"name"},i.a.createElement("div",null,"Name:"),i.a.createElement("input",{type:"text",name:"name",value:a.name,onChange:c})),i.a.createElement("div",{id:"email"},i.a.createElement("div",null,"Email:"),i.a.createElement("input",{type:"text",name:"email",value:a.email,onChange:c}))),i.a.createElement("div",{id:"msg"},i.a.createElement("div",null,"Message:"),i.a.createElement("textarea",{type:"text",name:"msg",value:a.msg,onChange:c})),i.a.createElement("div",{className:"btn-container"},i.a.createElement("div",{className:"btn-item"},i.a.createElement("div",{className:"btn",type:"clear",onClick:function(){l({name:"",email:"",msg:"",warning:""})}},"Clear")),i.a.createElement("div",{className:"btn-item"},i.a.createElement("div",{className:"btn",type:"submit",onClick:r},"Submit")),a.warning?i.a.createElement("div",{className:"warning"},a.warning):null))},O=function(){return i.a.createElement("div",{id:"app-container"},i.a.createElement(r,null),i.a.createElement(d,null))};c.a.render(i.a.createElement(s.a,null,i.a.createElement(O,null)),document.getElementById("app"))}},[[37,1,2]]]);
//# sourceMappingURL=main.272dc46a.chunk.js.map