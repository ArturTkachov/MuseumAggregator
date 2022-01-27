(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var i,c=n(0),a=n.n(c),o=n(7),r=n.n(o),s=n(6),l=n(2),u=(n(18),n(19),n(8)),d=n(9),j=n(4),h=n(11),b=n(10),O=(n(20),n(1)),m=function(e){var t="search-bar ".concat(e.size);return Object(O.jsxs)("form",{className:t,onSubmit:e.handleSubmit,children:[Object(O.jsx)("input",{type:"text",value:e.value,onChange:e.handleChange}),Object(O.jsx)("button",{})]})},p=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).state={value:""},i.handleChange=i.handleChange.bind(Object(j.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(j.a)(i)),i}return Object(d.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({value:""})}},{key:"render",value:function(){return Object(O.jsx)(m,{size:"normal",value:this.state.value,handleChange:this.handleChange,handleSubmit:this.handleSubmit})}}]),n}(a.a.PureComponent),f=(n(22),a.a.memo((function(e){var t=e.hoverIconColor,n=e.hoverBackgroundColor,i=t?"icon-".concat(t):"",c=n?"bg-".concat(n):"",a="icon-button ".concat(e.size," ").concat(i," ").concat(c);return Object(O.jsx)("button",{className:a,onClick:e.handleClick,children:Object(O.jsx)("img",{src:e.src,alt:"icon-button"})})})));!function(e){e.White="white",e.Yellow="yellow",e.Red="red",e.DarkRed="dark-red"}(i||(i={}));var x=n.p+"static/media/menuRed.c66de543.svg",v=(n(23),document.getElementById("menu-root")),g=function(e){var t=e.isOpen,n=Object(c.useRef)(null),i=n.current;Object(c.useEffect)((function(){var n=function(n){t&&!i.contains(n.target)&&e.handleOutsideClick()};return window.addEventListener("click",n),function(){return window.removeEventListener("click",n)}}));var a=Object(c.useRef)(!0);return Object(c.useEffect)((function(){a.current?a.current=!1:t?(i.style.opacity="1",i.style.transform="translate(0, 0)"):(i.style.opacity="0.7",i.style.transform="translate(100%, 0)")})),r.a.createPortal(Object(O.jsx)("div",{id:"menu",ref:n,children:e.children}),v)},C=n.p+"static/media/xWhite.a7b0b718.svg",k=function(e){return Object(O.jsx)(f,{size:"normal",src:C,hoverIconColor:i.Yellow,handleClick:e.handleClick})},y=function(e){var t=e.text;return Object(O.jsx)("li",{className:"menu-item",children:Object(O.jsx)(s.b,{to:"".concat(t.toLowerCase()),children:t})})},w=a.a.memo((function(){var e=["Home","Collections","Random","Favourites","Attribution"].map((function(e){return Object(O.jsx)(y,{text:e},e)}));return Object(O.jsx)("nav",{children:Object(O.jsx)("ul",{children:e})})})),S=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).state={isOpen:!1},i.handleOutsideClick=i.handleOutsideClick.bind(Object(j.a)(i)),i.handleClick=i.handleClick.bind(Object(j.a)(i)),i}return Object(d.a)(n,[{key:"handleOutsideClick",value:function(){this.setState({isOpen:!1})}},{key:"handleClick",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this.state.isOpen;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{size:"normal",src:x,hoverIconColor:i.White,hoverBackgroundColor:i.Red,handleClick:this.handleClick}),Object(O.jsxs)(g,{isOpen:e,handleOutsideClick:this.handleOutsideClick,children:[Object(O.jsx)(k,{handleClick:this.handleClick}),Object(O.jsx)(w,{})]})]})}}]),n}(a.a.PureComponent);var R,F=function(){return Object(O.jsxs)("div",{id:"wrapper",children:[Object(O.jsxs)("header",{children:[Object(O.jsx)("span",{id:"name",children:"Nomen"}),Object(O.jsxs)("div",{id:"right-panel",children:[Object(O.jsx)(p,{}),Object(O.jsx)(S,{})]})]}),Object(O.jsx)(l.a,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),a(e),o(e)}))},z=(n(24),function(e){var t={home:{heading:"Explore the world of art",description:"Nomen is a website wich helps you learn a bit more about diverse cultures of humanity by providing a simple way of browsing pieces of art from all around the world."},collections:{heading:"Collections",description:"Collections are randomly generated compilations of varied pieces of art from one of the following categories."},random:{heading:"Random",description:"A random piece of art."},favourites:{heading:"Favourites",description:"Pieces of art you found most interesting or exciting"},attribution:{heading:"Attribution",description:""}},n=t[e.pageType].heading,i=t[e.pageType].description;return Object(O.jsxs)("section",{id:"page-description",children:[Object(O.jsx)("h1",{children:n}),Object(O.jsx)("p",{className:"border-top border-bottom",children:i})]})});!function(e){e.Home="home",e.Collections="collections",e.Random="random",e.Favourites="favourites",e.Attribution="attribution"}(R||(R={}));n(25);var E=function(e){var t="red-button ".concat(e.size);return Object(O.jsx)("button",{className:t,onClick:e.handleClick,children:e.text})},A=function(){var e=Object(l.g)();return Object(O.jsx)(E,{text:"Try now!",size:"big",handleClick:function(){return e("collections")}})},I=n.p+"static/media/ManWithLaptop.6a91ad9f.svg",L=(n(26),function(){return Object(O.jsxs)("main",{children:[Object(O.jsx)(z,{pageType:R.Home}),Object(O.jsxs)("div",{id:"content",children:[Object(O.jsx)(A,{}),Object(O.jsx)("img",{src:I,alt:"Man sitting with a laptop"})]})]})});r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(s.a,{children:Object(O.jsx)(l.d,{children:Object(O.jsxs)(l.b,{path:"MuseumAggregator",element:Object(O.jsx)(F,{}),children:[Object(O.jsx)(l.b,{index:!0,element:Object(O.jsx)(L,{})}),Object(O.jsx)(l.b,{path:"home",element:Object(O.jsx)(L,{})}),Object(O.jsx)(l.b,{path:"collections",element:Object(O.jsx)("p",{children:"Collections"})}),Object(O.jsx)(l.b,{path:"random",element:Object(O.jsx)("p",{children:"Random"})}),Object(O.jsx)(l.b,{path:"favourites",element:Object(O.jsx)("p",{children:"Favourites"})}),Object(O.jsx)(l.b,{path:"attribution",element:Object(O.jsx)("p",{children:"Attribution"})}),Object(O.jsx)(l.b,{path:"*",element:Object(O.jsx)("p",{children:"Not found"})})]})})})}),document.getElementById("app-root")),N()}},[[27,1,2]]]);
//# sourceMappingURL=main.8613482c.chunk.js.map