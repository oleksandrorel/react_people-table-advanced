(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{20:function(e,a,t){},24:function(e,a,t){e.exports=t(44)},44:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(21),c=t.n(l),o=t(6),s=t(1),m=function(){return n.a.createElement("div",null,n.a.createElement("h2",{className:"pageTitle"},"Home page"))},p=t(13),u=t(22),i=t.n(u),_=t(7),E=t.n(_),d=function(e){var a=e.person,t=Object(s.h)().search;return a?n.a.createElement(o.b,{to:"/people/".concat(a.slug).concat(t),className:E()("row__male",{row__female:"f"===a.sex})},a.name):n.a.createElement(n.a.Fragment,null)},b=function(e){var a=e.person,t=e.people,r=(Object(s.i)()||"").params,l=Object(s.h)(),c=new URLSearchParams(l.search).get("sortBy")||"",o=function(e){return t.find((function(a){return a.name===e}))};if(!a)return n.a.createElement(n.a.Fragment,null);var m=a.sex,p=a.born,u=a.died,i=a.motherName,_=a.fatherName;return n.a.createElement("tr",{className:E()("row__Person",{row__selected:a.slug===r.personId})},n.a.createElement("td",{className:E()("row__Person","row__cell",{sorted__cell:"name"===c})},n.a.createElement(d,{person:a})),n.a.createElement("td",{className:E()("row__Person","row__cell",{sorted__cell:"sex"===c})},m),n.a.createElement("td",{className:E()("row__Person","row__cell",{sorted__cell:"born"===c})},p),n.a.createElement("td",{className:E()("row__Person","row__cell",{sorted__cell:"died"===c})},u),n.a.createElement("td",{className:"row__Person row__cell"},o(i)?n.a.createElement(d,{person:o(i)}):i),n.a.createElement("td",{className:"row__Person row__cell"},o(_)?n.a.createElement(d,{person:o(_)}):_))},h=function(e){var a=e.header,t=Object(s.g)(),r=Object(s.h)(),l=new URLSearchParams(r.search),c=l.get("sortBy")||"",o=l.get("sortOrder")||"";return n.a.createElement("th",{className:"peopleTable__rowsHeader peopleTable__cell",onClick:function(){"ASC"===o?l.set("sortOrder","DESC"):l.set("sortOrder","ASC"),l.set("sortBy",a.toLowerCase()),t.push("?".concat(l.toString()))}},a,c!==a.toLowerCase()?n.a.createElement("span",null,n.a.createElement("img",{src:"images/sort_both.png",alt:"not sorted"})):"ASC"===o?n.a.createElement("span",null,n.a.createElement("img",{src:"images/sort_desc.png",alt:"sorted DESC"})):n.a.createElement("span",null,n.a.createElement("img",{src:"images/sort_asc.png",alt:"sorted ASC"})))},f=["Name","Sex","Born","Died"],g=function(e){var a=e.people;return n.a.createElement("div",{className:"peopleTable"},n.a.createElement("table",{className:"peopleTable__Body"},n.a.createElement("thead",null,n.a.createElement("tr",{className:"peopleTable__rowsHeader"},f.map((function(e){return n.a.createElement(h,{key:e,header:e})})),n.a.createElement("th",{className:"peopleTable__rowsHeader peopleTable__cell"},"Mother"),n.a.createElement("th",{className:"peopleTable__rowsHeader peopleTable__cell"},"Father"))),n.a.createElement("tbody",null,a.map((function(e){return n.a.createElement(b,{person:e,key:e.slug,people:a})})))))},N=function(){var e=Object(r.useState)([]),a=Object(p.a)(e,2),t=a[0],l=a[1],c=Object(s.h)(),o=new URLSearchParams(c.search),m=o.get("query")||"",u=Object(r.useState)(m),_=Object(p.a)(u,2),E=_[0],d=_[1],b=Object(s.g)(),h=o.get("sortBy")||"",f=o.get("sortOrder")||"";Object(r.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then(l)}),[]);var N=Object(r.useCallback)(i()((function(e){e?o.set("query",e):o.delete("query"),b.push({search:o.toString()})}),500),[]);return console.log("8"),n.a.createElement("div",null,n.a.createElement("h2",{className:"pageTitle"},"People page"),n.a.createElement("div",{className:"people__filter"},n.a.createElement("div",null,n.a.createElement("p",{className:"peopleTable__Header"},"People table"),n.a.createElement("span",{className:"formtext_left"}," Find person by name: "),n.a.createElement("input",{value:E,onChange:function(e){d(e.target.value),N(e.target.value)}}))),n.a.createElement(g,{people:function(){var e=m?t.filter((function(e){return(e.name+e.motherName+e.fatherName).toLowerCase().includes(m)})):t;if(h)switch(h){case"name":case"sex":return e.sort((function(e,a){return"ASC"===f?e[h].localeCompare(a[h]):a[h].localeCompare(e[h])}));case"born":case"died":return e.sort((function(e,a){return"ASC"===f?e[h]-a[h]:a[h]-e[h]}))}return e}()}))},w=(t(20),t(43),function(){return n.a.createElement("nav",{className:"navbar"},n.a.createElement(o.c,{to:"/",exact:!0,className:"navbar-item is-tab",activeClassName:"is-active"},"Home page"),n.a.createElement(o.c,{to:"/people",className:"navbar-item is-tab",activeClassName:"is-active"},"People page"))}),v=function(){return n.a.createElement("div",{className:"notFoundPage"},n.a.createElement("h2",{className:"pageTitle"},"Not found page"))},C=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(w,null),n.a.createElement("h1",{className:"app__Header"},"React people table"),n.a.createElement(s.d,null,n.a.createElement(s.b,{path:"/",exact:!0,component:m}),n.a.createElement(s.b,{path:"/people/:personId?",component:N}),n.a.createElement(s.a,{path:"/home",to:"/"}),n.a.createElement(s.b,{component:v})))};c.a.render(n.a.createElement(o.a,null,n.a.createElement(C,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.065782a9.chunk.js.map