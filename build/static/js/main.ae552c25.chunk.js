(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var c=s(1),n=s.n(c),a=s(4),i=s.n(a),l=s(3),o=s(5),r=s(6),u=s(7),d=s(10),j=s(8),m=(s(15),s(9)),h=s(0),b=function(t){Object(d.a)(s,t);var e=Object(j.a)(s);function s(t){var c;return Object(r.a)(this,s),(c=e.call(this,t)).state={newItem:"",list:[]},c}return Object(u.a)(s,[{key:"updateInput",value:function(t,e){this.setState(Object(o.a)({},t,e))}},{key:"addItem",value:function(){if(""==this.state.newItem)alert("Input can't be empty");else{var t={id:1+Math.random(),value:this.state.newItem.slice()},e=Object(l.a)(this.state.list);e.push(t),this.setState({list:e,newItem:""})}}},{key:"deleteItem",value:function(t){var e=Object(l.a)(this.state.list).filter((function(e){return e.id!==t}));this.setState({list:e})}},{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{class:"row mx-auto",children:Object(h.jsx)("div",{class:"col-8 mx-auto",children:Object(h.jsx)("h1",{className:"mt-5",children:"What's the Plan for Today?"})})}),Object(h.jsx)("div",{class:"row mx-auto mt-3",children:Object(h.jsx)("div",{class:"col-12 col-sm-8 col-lg-5 mx-auto",children:Object(h.jsxs)("form",{className:"d-flex justify-content-center",children:[Object(h.jsx)("input",{class:"int p-3 w-100",type:"text",value:this.state.newItem,onChange:function(e){return t.updateInput("newItem",e.target.value)},placeholder:"Add a todo"}),Object(h.jsx)("button",{type:"button",class:"btn px-3",onClick:function(){return t.addItem()},children:"Add"})]})})}),Object(h.jsx)("div",{className:"row mx-auto mt-3",children:Object(h.jsx)("div",{className:"col-12 col-sm-8 col-lg-5 mx-auto",children:Object(h.jsx)("ul",{class:"list-group",children:this.state.list.map((function(e){return Object(h.jsxs)("li",{class:"list-group-item mt-3 mb-2",children:[e.value,Object(h.jsx)(m.a,{className:"todo-item",onClick:function(){return t.deleteItem(e.id)}})]},e.id)}))})})})]})}}]),s}(n.a.Component);var x=function(){return Object(h.jsx)("div",{className:"container todo-app pb-5 mb-5",children:Object(h.jsx)(b,{})})};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ae552c25.chunk.js.map