(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,a,t){e.exports=t(44)},33:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(10),c=t.n(l),i=(t(33),t(13)),m=t(7),o=t(52),d=t(49),s=t(21),u=t(22),g=t(26),E=t(23),f=t(27),j=t(3),v=t(53),h=t(50),p=t(51),b=t(11),N=t(9),O=t(45),y=t(46),U=t(47),w=t(48),C=function(e){var a={id:null,firstname:"",lastname:"",age:"",gender:"",dateofjoining:""},t=Object(n.useState)(a),l=Object(m.a)(t,2),c=l[0],i=l[1],o=function(e){var a=e.target,t=a.name,n=a.value;i(Object(N.a)({},c,Object(b.a)({},t,n)))};return r.a.createElement(O.a,{onSubmit:function(t){t.preventDefault(),c.firstname&&c.lastname&&(e.addUser(c),i(a))}},r.a.createElement(y.a,null,r.a.createElement(U.a,{for:"firstname"},"First Name"),r.a.createElement(w.a,{type:"text",required:!0,name:"firstname",placeholder:"Enter First Name",value:c.firstname,onChange:o})),r.a.createElement(y.a,null,r.a.createElement(U.a,{for:"lastname"},"Last Name"),r.a.createElement(w.a,{type:"text",required:!0,name:"lastname",placeholder:"Enter Last Name",value:c.lastname,onChange:o})),r.a.createElement(y.a,null,r.a.createElement(U.a,{for:"age"},"Age"),r.a.createElement(w.a,{type:"number",required:!0,name:"age",placeholder:"Enter Age",value:c.age,onChange:o})),r.a.createElement(y.a,null,r.a.createElement(U.a,{for:"gender"},"Gender"),r.a.createElement(w.a,{type:"text",required:!0,name:"gender",placeholder:"Male || Female",value:c.gender,onChange:o})),r.a.createElement(y.a,null,r.a.createElement(U.a,{for:"dateofjoining"},"Date of joining"),r.a.createElement(w.a,{type:"date",required:!0,name:"dateofjoining",value:c.dateofnpjoining,onChange:o})),r.a.createElement(d.a,{color:"success"},"Add User"))},S=function(e){var a=Object(n.useState)(e.currentUser),t=Object(m.a)(a,2),l=t[0],c=t[1],i=function(e){var a=e.target,t=a.name,n=a.value;c(Object(N.a)({},l,Object(b.a)({},t,n)))};return Object(n.useEffect)(function(){c(e.currentUser)},[e]),r.a.createElement(O.a,{onSubmit:function(a){a.preventDefault(),e.updateUser(l.id,l)}},r.a.createElement(y.a,null,r.a.createElement(U.a,{for:"firstname"},"First Name"),r.a.createElement(w.a,{type:"text",name:"firstname",value:l.firstname,onChange:i})),r.a.createElement(y.a,null,r.a.createElement(U.a,{for:"lastname"},"Last Name"),r.a.createElement(w.a,{type:"text",name:"lastname",value:l.lastname,onChange:i})),r.a.createElement(y.a,null,r.a.createElement(U.a,{for:"age"},"Age"),r.a.createElement(w.a,{type:"number",required:!0,name:"age",value:l.age,onChange:i})),r.a.createElement(y.a,null,r.a.createElement(U.a,{for:"gender"},"Gender"),r.a.createElement(w.a,{type:"text",required:!0,name:"gender",value:l.gender,onChange:i})),r.a.createElement(y.a,null,r.a.createElement(U.a,{for:"dateofjoining"},"Date of joining"),r.a.createElement(w.a,{required:!0,name:"dateofjoining",value:l.dateofjoining,onChange:i})),r.a.createElement(d.a,{color:"primary"},"Update "),r.a.createElement(d.a,{onClick:function(){return e.setEditing(!1)},color:"danger",style:{margin:10}},"Cancel"))},x=function(){var e=Object(n.useState)([{id:1,firstname:"Ram",lastname:"Yaragarla",age:"23",gender:"male",dateofjoining:"04-12-2018"},{id:2,firstname:"Sandy",lastname:"SK",age:"23",gender:"male",dateofjoining:"04-12-2018"},{id:3,firstname:"Naga",lastname:"naidu",age:"43",gender:"male",dateofjoining:"04-12-2018"}]),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),o=Object(m.a)(c,2),d=o[0],s=o[1],u=Object(n.useState)({id:null,firstname:"",lastname:"",age:"",gender:"",dateofjoining:""}),g=Object(m.a)(u,2),E=g[0],f=g[1];return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"flex-large"},d?r.a.createElement("div",null,r.a.createElement("h4",{className:"edituser"},"Edit User"),r.a.createElement(S,{editing:d,setEditing:s,currentUser:E,updateUser:function(e,a){s(!1),l(t.map(function(t){return t.id===e?a:t}))}}),r.a.createElement(A,{users:t,editRow:function(e){s(!0),f({id:e.id,firstname:e.firstname,lastname:e.lastname,age:e.age,gender:e.gender,dateofjoining:e.dateofjoining})}})):r.a.createElement("div",null,r.a.createElement("h4",{className:"adduser"},"Add User"),r.a.createElement(C,{addUser:function(e){e.id=t.length+1,l([].concat(Object(i.a)(t),[e]))}})))),r.a.createElement("div",{className:"col-md-9"})))},A=(r.a.Component,function(e){return r.a.createElement(o.a,{bordered:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Action"),r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Age"),r.a.createElement("th",null,"Gender"),r.a.createElement("th",null,"Date of Joining"))),r.a.createElement("tbody",null,e.users.length>0?e.users.map(function(a){return r.a.createElement("tr",{key:a.id},r.a.createElement("td",null,r.a.createElement(d.a,{color:"danger",onClick:function(){return e.deleteUser(a.id)}},"Delete"),r.a.createElement(d.a,{color:"primary",onClick:function(){e.editRow(a)},style:{margin:10}},"Edit")),r.a.createElement("td",null,a.firstname),r.a.createElement("td",null,a.lastname),r.a.createElement("td",null,a.age),r.a.createElement("td",null,a.gender),r.a.createElement("td",null,a.dateofjoining))}):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:6},"No users"))))}),k=function(){var e=Object(n.useState)([{id:1,firstname:"Ram",lastname:"Yaragarla",age:"23",gender:"male",dateofjoining:"04-12-2018"},{id:2,firstname:"Sandy",lastname:"SK",age:"23",gender:"male",dateofjoining:"04-12-2018"},{id:3,firstname:"Naga",lastname:"naidu",age:"43",gender:"male",dateofjoining:"04-12-2018"}]),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),o=Object(m.a)(c,2),d=o[0],s=o[1],u=Object(n.useState)({id:null,firstname:"",lastname:"",age:"",gender:"",dateofjoining:""}),g=Object(m.a)(u,2),E=g[0],f=g[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h4",{className:"h4"},"React CRUD Application "),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"flex-large"},d?r.a.createElement("div",null,r.a.createElement("h4",{className:"edituser"},"Edit User"),r.a.createElement(S,{editing:d,setEditing:s,currentUser:E,updateUser:function(e,a){s(!1),l(t.map(function(t){return t.id===e?a:t}))}})):r.a.createElement("div",null,r.a.createElement("h4",{className:"adduser"},"Add User"),r.a.createElement(C,{addUser:function(e){e.id=t.length+1,l([].concat(Object(i.a)(t),[e]))}})))),r.a.createElement("div",{className:"col-md-9"},r.a.createElement(A,{users:t,editRow:function(e){s(!0),f({id:e.id,firstname:e.firstname,lastname:e.lastname,age:e.age,gender:e.gender,dateofjoining:e.dateofjoining})},deleteUser:function(e){s(!1),l(t.filter(function(a){return a.id!==e}))}}))))};t(43),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.467800f8.chunk.js.map