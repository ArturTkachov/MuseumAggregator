(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(7),s=n.n(a),u=(n(18),n(2)),l=(n(19),n(8)),r=n(9),j=n(4),b=n(11),o=n(10),d=(n(20),n(1)),h=i.a.memo((function(e){var t="icon-button ".concat(e.className);return e.submit?Object(d.jsx)("button",{className:t,type:"submit"}):Object(d.jsx)("button",{className:t,onClick:e.handleClick})})),O=(n(22),function(e){return Object(d.jsxs)("form",{className:"search-bar",onSubmit:e.handleSubmit,children:[Object(d.jsx)(p,{value:e.value,inputClass:e.inputClass,handleInput:e.handleInput}),Object(d.jsx)(h,{submit:!0,className:e.buttonClass})]})}),p=function(e){var t="input-bar ".concat(e.inputClass||"");return Object(d.jsx)("input",{className:t,type:"text",value:e.value,onChange:e.handleInput})},m=(n(23),function(e){Object(b.a)(n,e);var t=Object(o.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).state={input:""},c.handleInput=c.handleInput.bind(Object(j.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(j.a)(c)),c}return Object(r.a)(n,[{key:"handleInput",value:function(e){this.setState({input:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({input:""})}},{key:"render",value:function(){return Object(d.jsx)(O,{value:this.state.input,inputClass:"main-sb-input",buttonClass:"main-sb-button",handleInput:this.handleInput,handleSubmit:this.handleSubmit})}}]),n}(i.a.PureComponent)),f=(n(24),document.getElementById("menu-root")),x=function(e){var t=e.isOpen,n=Object(c.useRef)(null);Object(c.useEffect)((function(){var c=function(c){t&&!n.current.contains(c.target)&&e.handleOutsideClick()};return window.addEventListener("click",c),function(){return window.removeEventListener("click",c)}}));var i=Object(c.useRef)(!0);return Object(c.useEffect)((function(){if(i.current)i.current=!1;else{var e=n.current;t?(e.style.opacity="1",e.style.transform="translate(0, 0)"):(e.style.opacity="0.7",e.style.transform="translate(100%, 0)")}}),[t]),s.a.createPortal(Object(d.jsx)("div",{id:"menu",ref:n,children:e.children}),f)},v=(n(25),function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(h,{submit:!1,className:"menu-close-button",handleClick:e.handleClick})})}),C=function(e){var t=e.text,n=Object(u.g)();return Object(d.jsx)("li",{className:"menu-item",onClick:function(){n("".concat(t.toLowerCase()))},children:t})},k=function(){var e=["Home","Collections","Random","Favourites","Attribution"].map((function(e){return Object(d.jsx)(C,{text:e},e)}));return Object(d.jsx)("nav",{children:Object(d.jsx)("ul",{children:e})})},g=(n(26),function(e){Object(b.a)(n,e);var t=Object(o.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).state={isOpen:!1},c.handleOutsideClick=c.handleOutsideClick.bind(Object(j.a)(c)),c.handleClick=c.handleClick.bind(Object(j.a)(c)),c}return Object(r.a)(n,[{key:"handleOutsideClick",value:function(){this.setState({isOpen:!1})}},{key:"handleClick",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this.state.isOpen;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{submit:!1,handleClick:this.handleClick,className:"menu-button"}),Object(d.jsxs)(x,{isOpen:e,handleOutsideClick:this.handleOutsideClick,children:[Object(d.jsx)(v,{handleClick:this.handleClick}),Object(d.jsx)(k,{})]})]})}}]),n}(i.a.PureComponent));var y=function(){return Object(d.jsxs)("div",{id:"wrapper",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)("span",{id:"name",children:"Nomen"}),Object(d.jsxs)("div",{id:"right-panel",children:[Object(d.jsx)(m,{}),Object(d.jsx)(g,{})]})]}),Object(d.jsx)(u.a,{})]})},S=n(6),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(S.a,{children:Object(d.jsx)(u.d,{children:Object(d.jsxs)(u.b,{path:"MuseumAggregator",element:Object(d.jsx)(y,{}),children:[Object(d.jsx)(u.b,{index:!0,element:Object(d.jsx)("p",{children:"Home"})}),Object(d.jsx)(u.b,{path:"home",element:Object(d.jsx)("p",{children:"Home"})}),Object(d.jsx)(u.b,{path:"collections",element:Object(d.jsx)("p",{children:"Collections"})}),Object(d.jsx)(u.b,{path:"random",element:Object(d.jsx)("p",{children:"Random"})}),Object(d.jsx)(u.b,{path:"favourites",element:Object(d.jsx)("p",{children:"Favourites"})}),Object(d.jsx)(u.b,{path:"attribution",element:Object(d.jsx)("p",{children:"Attribution"})}),Object(d.jsx)(u.b,{path:"*",element:Object(d.jsx)("p",{children:"Not found"})})]})})})}),document.getElementById("app-root")),I()}},[[27,1,2]]]);
//# sourceMappingURL=main.6b514420.chunk.js.map