(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(7),s=n.n(a),u=(n(18),n(19),n(8)),l=n(9),r=n(4),j=n(11),b=n(10),o=(n(20),n(1)),d=i.a.memo((function(e){var t="icon-button ".concat(e.className);return e.submit?Object(o.jsx)("button",{className:t,type:"submit"}):Object(o.jsx)("button",{className:t,onClick:e.handleClick})})),h=(n(22),function(e){return Object(o.jsxs)("form",{className:"search-bar",onSubmit:e.handleSubmit,children:[Object(o.jsx)(O,{value:e.value,inputClass:e.inputClass,handleInput:e.handleInput}),Object(o.jsx)(d,{submit:!0,className:e.buttonClass})]})}),O=function(e){var t="input-bar ".concat(e.inputClass||"");return Object(o.jsx)("input",{className:t,type:"text",value:e.value,onChange:e.handleInput})},p=(n(23),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).state={input:""},c.handleInput=c.handleInput.bind(Object(r.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(r.a)(c)),c}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState({input:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({input:""})}},{key:"render",value:function(){return Object(o.jsx)(h,{value:this.state.input,inputClass:"main-sb-input",buttonClass:"main-sb-button",handleInput:this.handleInput,handleSubmit:this.handleSubmit})}}]),n}(i.a.PureComponent)),m=(n(24),document.getElementById("menu-root")),f=function(e){var t=e.isOpen,n=Object(c.useRef)(null);Object(c.useEffect)((function(){var c=function(c){t&&!n.current.contains(c.target)&&e.handleOutsideClick()};return window.addEventListener("click",c),function(){return window.removeEventListener("click",c)}}));var i=Object(c.useRef)(!0);return Object(c.useEffect)((function(){if(i.current)i.current=!1;else{var e=n.current;t?(e.style.opacity="1",e.style.transform="translate(0, 0)"):(e.style.opacity="0.7",e.style.transform="translate(100%, 0)")}}),[t]),s.a.createPortal(Object(o.jsx)("div",{id:"menu",ref:n,children:e.children}),m)},x=n(2),v=(n(25),function(e){return Object(o.jsx)("div",{children:Object(o.jsx)(d,{submit:!1,className:"menu-close-button",handleClick:e.handleClick})})}),C=function(e){var t=e.text,n=Object(x.g)();return Object(o.jsx)("li",{className:"menu-item",onClick:function(){n("".concat(t.toLowerCase()))},children:t})},k=function(){var e=["Home","Collections","Random","Favourites","Attribution"].map((function(e){return Object(o.jsx)(C,{text:e},e)}));return Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{children:e})})},y=(n(26),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).state={isOpen:!1},c.handleOutsideClick=c.handleOutsideClick.bind(Object(r.a)(c)),c.handleClick=c.handleClick.bind(Object(r.a)(c)),c}return Object(l.a)(n,[{key:"handleOutsideClick",value:function(){this.setState({isOpen:!1})}},{key:"handleClick",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this.state.isOpen;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{submit:!1,handleClick:this.handleClick,className:"menu-button"}),Object(o.jsxs)(f,{isOpen:e,handleOutsideClick:this.handleOutsideClick,children:[Object(o.jsx)(v,{handleClick:this.handleClick}),Object(o.jsx)(k,{})]})]})}}]),n}(i.a.PureComponent));var g=function(){return Object(o.jsxs)("div",{id:"wrapper",children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("span",{id:"name",children:"Nomen"}),Object(o.jsxs)("div",{id:"right-panel",children:[Object(o.jsx)(p,{}),Object(o.jsx)(y,{})]})]}),Object(o.jsx)(x.a,{})]})},S=n(6),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(S.a,{children:Object(o.jsxs)(x.d,{children:[Object(o.jsxs)(x.b,{path:"MuseumAgregator",element:Object(o.jsx)(g,{}),children:[Object(o.jsx)(x.b,{index:!0,element:Object(o.jsx)("p",{children:"Home"})}),Object(o.jsx)(x.b,{path:"home",element:Object(o.jsx)("p",{children:"Home"})}),Object(o.jsx)(x.b,{path:"collections",element:Object(o.jsx)("p",{children:"Collections"})}),Object(o.jsx)(x.b,{path:"random",element:Object(o.jsx)("p",{children:"Random"})}),Object(o.jsx)(x.b,{path:"favourites",element:Object(o.jsx)("p",{children:"Favourites"})}),Object(o.jsx)(x.b,{path:"attribution",element:Object(o.jsx)("p",{children:"Attribution"})})]}),Object(o.jsx)(x.b,{path:"*",element:Object(o.jsx)("p",{children:"Not found"})})]})})}),document.getElementById("app-root")),I()}},[[27,1,2]]]);
//# sourceMappingURL=main.db1fc412.chunk.js.map