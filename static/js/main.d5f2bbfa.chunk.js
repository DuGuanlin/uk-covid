(this["webpackJsonpuk-covid"]=this["webpackJsonpuk-covid"]||[]).push([[0],{183:function(e,t,a){e.exports=a(371)},188:function(e,t,a){},193:function(e,t){},195:function(e,t){},228:function(e,t){},229:function(e,t){},371:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),l=a(75),r=a.n(l),c=(a(188),a(25)),i=a(177),s=a(39),u=a(381),m=a(382),d=a(60),p=a(36),f=a(380),g=function(e){var t=e.fileName,a=e.regionCases,l=e.setTooltipContent,r=Object(n.useState)([]),i=Object(c.a)(r,2),f=i[0],g=i[1];Object(n.useEffect)((function(){fetch("/maps/"+t+".json").then((function(e){200===e.status?e.json().then((function(e){g(Object(d.feature)(e,e.objects.x).features)})):console.log("There was a problem: ".concat(e.status))}))}),[t]);var E=function(e){console.log(f[e].properties.lad19nm)},h=Object(s.a)().fitSize([800,800],{type:"FeatureCollection",features:f}),b=Object(m.a)().domain([50,100,200,500,1e3,5e3]).range(u.a[7]);return o.a.createElement("div",{style:{width:"100%"}},o.a.createElement(p.ComposableMap,{width:800,height:800,projection:h},o.a.createElement(p.Geographies,{geography:f},(function(e){return e.geographies.map((function(e,t){return o.a.createElement(p.Geography,{key:e.rsmKey,geography:e,onMouseEnter:function(){var t=e.properties.lad19nm in a?a[e.properties.lad19nm]:"0";l("".concat(e.properties.lad19nm,": ").concat(t," Cases"))},onMouseLeave:function(){l("")},fill:e.properties.lad19nm in a?b(a[e.properties.lad19nm]):b(0),onClick:function(){return E(t)},style:{default:{outline:"none",stroke:"#000000",strokeWidth:"0.5"},hover:{outline:"none",stroke:"#000000",strokeWidth:"2"},pressed:{outline:"none"}}})}))}))))},E=o.a.memo((function(e){var t=e.setTooltipContent,a=e.areaCases,l=e.Regional,r=e.toggleDisplayRegional,E=e.secondaryTable,h=e.setSecondaryTable,b=Object(n.useState)([]),y=Object(c.a)(b,2),C=y[0],k=y[1];Object(n.useEffect)((function(){fetch("/maps/phe_regions.json").then((function(e){200===e.status?e.json().then((function(e){k(Object(d.feature)(e,e.objects.eer).features)})):console.log("There was a problem: ".concat(e.status))}))}),[]);var j=function(e){var t=C[e].properties.EER13NM,n=t.replace(/ /g,"_");r({display:!0,fileName:n,regionCases:a[t].regional}),h({display:!0,areaName:t})},v=Object(s.a)().fitSize([20,20],{type:"FeatureCollection",features:C}),O=Object(m.a)().domain([1e3,1500,2e3,2500,5e3,15e3]).range(u.a[7]),w=function(){return o.a.createElement("div",{style:{width:"100%"}},o.a.createElement(p.ComposableMap,{width:20,height:20,projection:v},o.a.createElement(p.Geographies,{geography:C},(function(e){return e.geographies.map((function(e,n){return o.a.createElement(p.Geography,{key:e.rsmKey,geography:e,onMouseEnter:function(){t("".concat(e.properties.EER13NM,": ").concat(a[e.properties.EER13NM].total," Cases"))},onMouseLeave:function(){t("")},fill:e.properties.EER13NM in a?O(a[e.properties.EER13NM].total):O(0),onClick:function(){return j(n)},legend:!0,style:{default:{outline:"none",stroke:"#000000",strokeWidth:"0.01"},hover:{outline:"none",stroke:"#000000",strokeWidth:"0.05"},pressed:{outline:"none"}}})}))}))))},N=function(){return o.a.createElement("div",null,o.a.createElement(f.a,{color:"primary",onClick:function(){r({display:!1}),h(Object(i.a)({},E,{display:!1}))}},"BACK"),o.a.createElement(g,{fileName:l.fileName,regionCases:l.regionCases,setTooltipContent:t}))};return o.a.createElement("div",null,l.display?o.a.createElement(N,null):o.a.createElement(w,null))})),h=a(172),b=a(374),y=a(375),C=a(376),k=a(379),j=a(377),v=o.a.memo((function(e){var t=e.areaCases,a=e.toggleDisplayRegional,l=e.secondaryTable,r=e.setSecondaryTable;Object(n.useEffect)((function(){}),[]);return o.a.createElement(b.a,null,o.a.createElement(y.a,null,o.a.createElement(k.a,{color:"info"},"Click on a row to view the numbers for each UTLA in the Region!")),o.a.createElement(y.a,null,o.a.createElement(C.a,null,o.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Region"),o.a.createElement("th",null,"Number of Cases"))),o.a.createElement("tbody",null,Object.keys(t).map((function(e){return o.a.createElement("tr",{onClick:function(){return function(e){if(l.areaName===e){if(l.display)a({display:!1});else{var n=e.replace(/ /g,"_");a({display:!0,fileName:n,regionCases:t[e].regional})}r({display:!l.display,areaName:e})}else{r({display:!0,areaName:e});var o=e.replace(/ /g,"_");a({display:!0,fileName:o,regionCases:t[e].regional})}}(e)}},o.a.createElement("td",null,e),o.a.createElement("td",null,t[e].total))}))))),o.a.createElement(C.a,null,l.display?o.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,l.areaName),o.a.createElement("th",null,"Number of Cases"))),o.a.createElement("tbody",null,0===t.length?null:Object.keys(t[l.areaName].regional).map((function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,e),o.a.createElement("td",null,t[l.areaName].regional[e]))})))):null)))})),O=a(174),w=function(e){var t=e.borderColor,a=e.backgroundColor,n=e.date,l=e.data,r=e.label;return o.a.createElement("div",{style:{borderColor:t,backgroundColor:a,height:200,width:700}},o.a.createElement(O.a,{data:{labels:n,datasets:[{label:r,fill:!1,borderColor:t,data:l}]},options:{maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{drawOnChartArea:!1},ticks:{autoSkip:!0,maxTicksLimit:7}}],yAxes:[{gridLines:{drawOnChartArea:!1},ticks:{autoSkip:!0,maxTicksLimit:7,callback:function(e){return"".concat(e/1e3,"k")}}}]}}}))},N=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),i=Object(c.a)(r,2),s=i[0],u=i[1],m=Object(n.useState)([]),d=Object(c.a)(m,2),p=d[0],g=d[1],k=Object(n.useState)({display:!1,fileName:"",regionCases:""}),j=Object(c.a)(k,2),O=j[0],N=j[1],T=Object(n.useState)({display:!1,areaName:""}),S=Object(c.a)(T,2),R=S[0],D=S[1];return Object(n.useEffect)((function(){fetch("/covid_data/uk_totals.json").then((function(e){200===e.status?e.json().then((function(e){l(e)})):console.log("There was a problem: ".concat(e.status))})),fetch("/covid_data/uk_by_region.json").then((function(e){200===e.status?e.json().then((function(e){g(e)})):console.log("There was a problem: ".concat(e.status))}))}),[]),o.a.createElement(b.a,{"data-tip":""},o.a.createElement(y.a,null,o.a.createElement(C.a,null,o.a.createElement("h1",null,"England Covid-19 Tracker"))),o.a.createElement(y.a,null,o.a.createElement(C.a,null,o.a.createElement(E,{setTooltipContent:u,areaCases:p,Regional:O,toggleDisplayRegional:N,secondaryTable:R,setSecondaryTable:D}),o.a.createElement(h.a,null,s)),o.a.createElement(C.a,null,o.a.createElement(v,{areaCases:p,toggleDisplayRegional:N,secondaryTable:R,setSecondaryTable:D}))),o.a.createElement(y.a,null,null===a?null:o.a.createElement(w,{borderColor:"#ff073a",backgroundColor:"rgba(255,7,58,0.12549)",date:a.Date,data:a.ConfirmedCases,label:"Confirmed Cases"})," "),o.a.createElement(y.a,null,null===a?null:o.a.createElement(w,{borderColor:"#3a07ff",backgroundColor:"rgba(58,7,255,0.12549)",date:a.Date,data:a.Tests,label:"Tests"})," "),o.a.createElement(y.a,null,null===a?null:o.a.createElement(w,{borderColor:"grey",backgroundColor:"#DCDCDC",date:a.Date,data:a.Deaths,label:"Deaths"})," "),o.a.createElement(y.a,null,o.a.createElement(f.a,{style:{backgroundColor:"White",color:"black"},onClick:function(){return window.open("https://www.github.com/tkhokhar25/uk-covid")}},o.a.createElement("img",{src:"/logo32.png",alt:"yolo"}),"Check out on Github")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(369);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[183,1,2]]]);
//# sourceMappingURL=main.d5f2bbfa.chunk.js.map