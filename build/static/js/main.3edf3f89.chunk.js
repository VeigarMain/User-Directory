(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(45)},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),l=n.n(c),o=(n(22),n(23),n(24),n(12)),s=n(13),u=n(16),i=n(15);n(25);var m=function(e){return r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"form-control",value:e.search,onChange:e.handleChange,placeholder:"search"}))};n(26);var h,d=function(e){var t=e.results.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row"},r.a.createElement("img",{src:e.image,alt:"person"})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.dob))});return r.a.createElement("table",{className:"table  table-bordered table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Picture"),r.a.createElement("th",{scope:"col",onClick:function(){return e.sortBy("name")}},"Name \u21c5"),r.a.createElement("th",{scope:"col"},"Phone"),r.a.createElement("th",{scope:"col",onClick:function(){return e.sortBy("email")}},"Email Address \u21c5"),r.a.createElement("th",{scope:"col",onClick:function(){return e.sortBy("age")}},"Birthday \u21c5"))),r.a.createElement("tbody",null,t))},p=(n(27),function(e){return r.a.createElement("div",{className:"header sticky-top bg-dark text-white"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("button",{onClick:function(){return e.toTop()},type:"button",class:" butt btn btn-outline-light"},"Back to Top"))}),f=n(14),E=n.n(f),b=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={search:"",results:[],acsend:!1},e.handleChange=function(t){var n=t.target.value,a=h.filter(function(e){return Object.values(e).some(function(e){return"string"===typeof e&&e.includes(n)})});e.setState({search:n,results:a})},e.sortBy=function(t){if(!0===e.state.ascend){var n=e.state.results.sort(function(e,n){return e[t]<n[t]?1:-1});e.setState({results:n,ascend:!1})}else{var a=e.state.results.sort(function(e,n){return e[t]>n[t]?1:-1});e.setState({results:a,ascend:!0})}},e.toTop=function(){document.documentElement.scrollTop=0},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://randomuser.me/api/?results=150").then(function(t){h=t.data.results.map(function(e){var t=e.dob.date,n=new Date(t),a=n.getMonth()+1+"."+n.getDate()+"."+n.getFullYear();return{image:e.picture.large,name:"".concat(e.name.first," ").concat(e.name.last),phone:e.phone,email:e.email,dob:a,age:e.dob.age}}),e.setState({results:h})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,{toTop:this.toTop}),r.a.createElement(m,{search:this.state.search,handleChange:this.handleChange}),r.a.createElement(d,{results:this.state.results,sortBy:this.sortBy}))}}]),n}(a.Component);var g=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(b,null))};l.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3edf3f89.chunk.js.map