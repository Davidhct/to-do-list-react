(this["webpackJsonpto-do-list-react"]=this["webpackJsonpto-do-list-react"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),o=n(4),a=n.n(o),i=(n(13),n(3)),u=n(5),r=n(6),d=n(8),l=n(7),h=(n(14),n(0)),p=function(t){var e=t.userIn,n=t.onChangeInput,c=t.onClickInput;return Object(h.jsxs)("div",{className:"input-div",children:[Object(h.jsx)("input",{type:"text",placeholder:"Enter todos",onChange:n,className:"input",value:e}),Object(h.jsx)("button",{type:"button",onClick:c,className:"input-button",children:"+"})]})},j=(n(16),function(t){return Object(h.jsxs)("div",{className:"item-div",children:[Object(h.jsx)("input",{type:"checkbox",className:"checkbox",id:t.id,checked:t.todo.check,onChange:t.onCheckHandle}),Object(h.jsx)("p",{className:"item",children:t.todo.value})]})}),b=(n(17),function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).onChangeInput=function(e){t.setState({userInput:e.target.value})},t.onClickInput=function(){var e=t.state.todos;""===t.state.userInput.trim()?alert("You did not write anything!"):(e.push({check:!1,value:t.state.userInput}),t.setState({todos:e})),t.setState({userInput:""})},t.onCheckHandle=function(e){var n=t.state.todos.map((function(t,n){return n===Number(e.target.id)?Object(i.a)(Object(i.a)({},t),{},{check:!t.check}):t}));t.setState({todos:n})},t.state={userInput:"",todos:[]},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.state.todos.map((function(e,n){return Object(h.jsx)(j,{id:n,todo:e,onCheckHandle:t.onCheckHandle},n)}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"TodoInput"}),Object(h.jsx)("div",{className:"input-wrapper",children:Object(h.jsx)(p,{userIn:this.state.userInput,onChangeInput:this.onChangeInput,onClickInput:this.onClickInput})}),Object(h.jsx)("div",{children:this.state.todos.length>0?Object(h.jsx)("h1",{children:"TodoList"}):null}),Object(h.jsx)("div",{className:"list-wrapper",children:e})]})}}]),n}(c.Component)),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),o(t),a(t)}))};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.9caff0ba.chunk.js.map