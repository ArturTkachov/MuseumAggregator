(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[4],{66:function(t,e,c){"use strict";c(67);var r=c(1);e.a=function(t){return Object(r.jsxs)("section",{className:"preview-info",children:[Object(r.jsx)("h2",{children:t.artworkName}),t.artworkType&&Object(r.jsx)("span",{children:t.artworkType}),Object(r.jsxs)("span",{children:["Artist: ",t.artistName?t.artistName:"Unknown artist"]}),t.artworkOrigin&&Object(r.jsxs)("span",{children:["Place of origin: ",t.artworkOrigin]}),Object(r.jsx)("span",{children:t.artworkDate})]})}},67:function(t,e,c){},68:function(t,e,c){},69:function(t,e,c){},70:function(t,e,c){},71:function(t,e,c){},72:function(t,e,c){"use strict";var r=c(18),n=c(66),i=(c(68),c(1)),a=function(){return Object(i.jsxs)("li",{className:"loading-artwork-preview",children:[Object(i.jsx)("div",{className:"loading-preview-image"}),Object(i.jsxs)("ul",{className:"loading-preview-info",children:[Object(i.jsx)("li",{}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{}),Object(i.jsx)("li",{})]})]})},s=(c(69),function(t){var e=Object(r.c)(t.id),c=e.data;return e.isLoading||!c?Object(i.jsx)(a,{}):Object(i.jsxs)("li",{className:"artwork-preview",onClick:t.handleClick,children:[Object(i.jsx)("img",{src:c.primaryImageSmall,alt:"artwork"}),Object(i.jsx)(n.a,{artworkName:c.title,artworkType:c.objectName,artistName:c.artistDisplayName,artworkDate:c.objectDate,artworkOrigin:c.country})]})}),o=c(3),j=function(t){var e={met:s}[t.source],c=Object(o.h)();return Object(i.jsx)(e,{id:t.id,handleClick:function(){return c("../".concat(t.source,"/").concat(t.id))}})};c(70),e.a=function(t){return Object(i.jsx)("ul",{id:"previews-list",children:t.specifiedIDs.map((function(t){return Object(i.jsx)(j,{id:t.id,source:t.source},"".concat(t.id).concat(t.source))}))})}},73:function(t,e,c){"use strict";c(0),c(71);var r=c(1),n=function(t){return Object(r.jsx)("button",{className:"wide-icon-button bg-".concat(t.backgroundColor," bg-hover-").concat(t.hoverBackgroundColor),onClick:t.handleClick,children:Object(r.jsx)("img",{src:t.src,alt:"icon-button"})})},i=c.p+"static/media/chevronDownWhite.46f89c78.svg",a=c(16);e.a=function(t){return Object(r.jsx)(n,{src:i,backgroundColor:a.a.Yellow,hoverBackgroundColor:a.a.Red,handleClick:t.handleClick})}},78:function(t,e,c){},84:function(t,e,c){"use strict";c.r(e);var r=c(8),n=c(0),i=c(32),a=c(72),s=c(33),o=c(31),j=c(73),u=(c(78),c(1));e.default=function(){var t=Object(n.useState)(5),e=Object(r.a)(t,2),c=e[0],l=e[1],b=Object(o.c)((function(t){return t.favourites})),d=Object(n.useMemo)((function(){return b.slice(0,c)}),[b,c]);return Object(u.jsxs)("div",{id:"favourites",children:[Object(u.jsx)(i.a,{pageType:s.a.Favourites}),Object(u.jsx)(a.a,{specifiedIDs:d}),Object(u.jsx)(j.a,{handleClick:function(){return l(c+5)}})]})}}}]);
//# sourceMappingURL=4.a8f45968.chunk.js.map