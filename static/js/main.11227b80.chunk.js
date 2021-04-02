(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{20:function(e,a,t){},24:function(e,a,t){e.exports=t(44)},44:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(21),c=t.n(l),o=t(6),s=t(1),m=function(){return n.a.createElement("div",null,n.a.createElement("h2",{className:"pageTitle"},"Home page"))},p=t(13),u=t(22),i=t.n(u),_=t(7),d=t.n(_),E=function(e){var a=e.person,t=Object(s.h)().search;return a?n.a.createElement(o.b,{to:"/people/".concat(a.slug).concat(t),className:d()("row__male",{row__female:"f"===a.sex})},a.name):null},b=function(e){var a=e.person,t=e.people,r=(Object(s.i)()||"").params,l=Object(s.h)(),c=new URLSearchParams(l.search).get("sortBy")||"",o=function(e){return t.find((function(a){return a.name===e}))};if(!a)return null;var m=a.sex,p=a.born,u=a.died,i=a.motherName,_=a.fatherName;return n.a.createElement("tr",{className:d()("row__Person",{row__selected:a.slug===r.personId})},n.a.createElement("td",{className:d()("row__Person","row__cell",{sorted__cell:"name"===c})},n.a.createElement(E,{person:a})),n.a.createElement("td",{className:d()("row__Person","row__cell",{sorted__cell:"sex"===c})},m),n.a.createElement("td",{className:d()("row__Person","row__cell",{sorted__cell:"born"===c})},p),n.a.createElement("td",{className:d()("row__Person","row__cell",{sorted__cell:"died"===c})},u),n.a.createElement("td",{className:"row__Person row__cell"},o(i)?n.a.createElement(E,{person:o(i)}):i),n.a.createElement("td",{className:"row__Person row__cell"},o(_)?n.a.createElement(E,{person:o(_)}):_))},h=["Name","Sex","Born","Died"],f=function(e){var a=e.header,t=Object(s.g)(),r=Object(s.h)(),l=new URLSearchParams(r.search),c=l.get("sortBy")||"",o=l.get("sortOrder")||"";return h.includes(a)?n.a.createElement("th",{className:"peopleTable__rowsHeader peopleTable__cell",onClick:function(){var e;(e=a.toLowerCase())!==c||"DESC"===o?l.set("sortOrder","ASC"):l.set("sortOrder","DESC"),l.set("sortBy",e),t.push("?".concat(l.toString()))}},a,c!==a.toLowerCase()?n.a.createElement("span",null,n.a.createElement("img",{src:"images/sort_both.png",alt:"not sorted"})):"ASC"===o?n.a.createElement("span",null,n.a.createElement("img",{src:"images/sort_desc.png",alt:"sorted DESC"})):n.a.createElement("span",null,n.a.createElement("img",{src:"images/sort_asc.png",alt:"sorted ASC"}))):n.a.createElement("th",{className:"peopleTable__rowsHeader peopleTable__cell"},a)},g=["Name","Sex","Born","Died","Mother","Father"],N=function(e){var a=e.people;return n.a.createElement("div",{className:"peopleTable"},n.a.createElement("table",{className:"peopleTable__Body"},n.a.createElement("thead",null,n.a.createElement("tr",{className:"peopleTable__rowsHeader"},g.map((function(e){return n.a.createElement(f,{key:e,header:e})})))),n.a.createElement("tbody",null,a.map((function(e){return n.a.createElement(b,{person:e,key:e.slug,people:a})})))))},v=function(){var e=Object(r.useState)([]),a=Object(p.a)(e,2),t=a[0],l=a[1],c=Object(s.h)(),o=Object(s.g)(),m=new URLSearchParams(c.search),u=m.get("query")||"",_=Object(r.useState)(u),d=Object(p.a)(_,2),E=d[0],b=d[1],h=m.get("sortBy")||"",f=m.get("sortOrder")||"";Object(r.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then(l)}),[]);var g=Object(r.useCallback)(i()((function(e){e?m.set("query",e):m.delete("query"),o.push({search:m.toString()})}),500),[]);return n.a.createElement("div",null,n.a.createElement("h2",{className:"pageTitle"},"People page"),n.a.createElement("div",{className:"people__filter"},n.a.createElement("div",null,n.a.createElement("p",{className:"peopleTable__Header"},"People table"),n.a.createElement("span",{className:"formtext_left"}," Find person by name: "),n.a.createElement("input",{value:E,onChange:function(e){b(e.target.value),g(e.target.value)}}))),n.a.createElement(N,{people:function(){var e=u?t.filter((function(e){return(e.name+e.motherName+e.fatherName).toLowerCase().includes(u.toLowerCase())})):t;if(h)switch(h){case"name":case"sex":return"ASC"===f?e.sort((function(e,a){return e[h].localeCompare(a[h])})):e.reverse();case"born":case"died":return"ASC"===f?e.sort((function(e,a){return e[h]-a[h]})):e.reverse()}return e}()}))},w=(t(20),t(43),function(){return n.a.createElement("nav",{className:"navbar"},n.a.createElement(o.c,{to:"/",exact:!0,className:"navbar-item is-tab",activeClassName:"is-active"},"Home page"),n.a.createElement(o.c,{to:"/people",className:"navbar-item is-tab",activeClassName:"is-active"},"People page"))}),C=function(){return n.a.createElement("div",{className:"notFoundPage"},n.a.createElement("h2",{className:"pageTitle"},"Not found page"))},O=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(w,null),n.a.createElement("h1",{className:"app__Header"},"React people table"),n.a.createElement(s.d,null,n.a.createElement(s.b,{path:"/",exact:!0,component:m}),n.a.createElement(s.b,{path:"/people/:personId?",component:v}),n.a.createElement(s.a,{path:"/home",to:"/"}),n.a.createElement(s.b,{component:C})))};c.a.render(n.a.createElement(o.a,null,n.a.createElement(O,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.11227b80.chunk.js.map