(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),i=n(6),r=n(8),a=n(1),l=n(4),u=n.n(l),b=(n(13),n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var j=function(){var t=Object(a.useState)(s.NONE),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),j=l[0],N=l[1],d=function(t,e){var n=e.sortType,c=e.isReversed,o=Object(r.a)(t);switch(n){case s.ALPABET:o.sort((function(t,e){return t.localeCompare(e)}));break;case s.LENGTH:o.sort((function(t,e){return t.length-e.length}));case s.NONE:}return c&&o.reverse(),o}(h,{sortType:n,isReversed:j});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":n!==s.ALPABET}),onClick:function(){c(s.ALPABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":n!==s.LENGTH}),onClick:function(){c(s.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":!j}),onClick:function(){N(!j)},children:"Reverse"}),(n!==s.NONE||j)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(s.NONE),N(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:d.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.10384ffa.chunk.js.map