_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"/jna":function(e,t,n){e.exports={section:"Introduction_section__ZLLt8"}},"0ddc":function(e,t,n){e.exports={projCard:"ProjectCard_projCard__3pAp5",projImg:"ProjectCard_projImg__Metdn",iconTitle:"ProjectCard_iconTitle__2F1or",iconImg:"ProjectCard_iconImg__119av",title:"ProjectCard_title__2OeTb",desc:"ProjectCard_desc__2kkMQ",links:"ProjectCard_links__1Sw8S"}},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var r=n("q1tI"),o=n.n(r),i=n("8Kt/"),a=n.n(i),c=n("vRNQ"),l=n.n(c),u=n("0ddc"),s=n.n(u),f=n("8jAD"),p=n("IAIB"),h=n.n(p),d=n("WJqM"),m=n.n(d),v=n("eyyw"),g=n.n(v),b=o.a.createElement;function y(e){var t=e.links,n=t.github,r=t.website;return b("div",{className:g.a.container},n?b("a",{target:"_blank",rel:"noopener noreferrer",href:n},b(f.InlineIcon,{icon:h.a})," GitHub"):null,r?b("a",{target:"_blank",rel:"noopener noreferrer",href:r},b(f.InlineIcon,{icon:m.a})," Website"):null)}var w=o.a.createElement;function _(e){var t=e.project,n=t.projImg,r=t.iconImg,o=t.projName,i=t.projDesc,a=t.github,c=t.website;return w("article",{className:s.a.projCard},w("img",{src:n,className:s.a.projImg,alt:"".concat(o," screenshot")}),r?w("img",{src:r,className:s.a.iconImg,alt:"".concat(o," Icon")}):null,w("div",{className:s.a.iconTitle},w("h4",{className:s.a.title},o)),w("p",{className:s.a.desc},i),w("footer",{className:s.a.links},w(y,{links:{github:a,website:c}})))}var j=n("Z4fe"),x=n.n(j),M=o.a.createElement;function k(){return M("section",{id:"projects",className:x.a.projSection},M("h2",null,"Projects"),M("div",{className:x.a.projectContainer},I.map((function(e){return M(_,{key:e.projName,project:e})}))))}var I=[{projImg:"/images/FightCovid19.png",projName:"Data Visualization",projDesc:"A data visualization project made using D3.js for UW CSE442. Please be patient, there's a lot of data to load.",github:"https://github.com/cse442-20f/FP-Fight-Covid19/",website:"https://cse442-20f.github.io/FP-Fight-Covid19/"},{projImg:"/images/TicTacToeNextJS.png",projName:"Tic Tac Toe - V2",projDesc:"A NextJS (React), realtime, multiplayer version of tic tac toe. One user must be in incognito or private mode; or on a different browser or device",github:"https://github.com/VictorShan/tic-tac-toe",website:"https://tic-tac-toe-nextjs.web.app/"},{projImg:"/images/TicTacToeWinCentered.png",projName:"Tic Tac Toe",projDesc:"Realtime, multiplayer tic tac toe. One user must be in incognito or private mode; or on a different browser or device",github:"https://github.com/VictorShan/tic-tac-toe/tree/master",website:"https://tic-tac-toe-82af8.web.app/"},{projImg:"/images/UWCampusMap.png",projName:"UW Campus Map",projDesc:"Map from one campus building to another using Dijkstra's algorithm. It uses a REST API to find the route.",website:"https://uw-campus-map.herokuapp.com/"}],S=n("/jna"),C=n.n(S),A=o.a.createElement;function O(){return A("section",{id:"home",className:C.a.section},A("h1",null,"Welcome to my Website!"))}var P=o.a.createElement;function E(){return P("div",{className:l.a.container},P(a.a,null,P("title",null,"Victor Shan - Home"),P("meta",{name:"Description",content:N}),P("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})),P("main",null,P(O,null),P(k,null)))}var N="Victor Shan's Homepage with all his projects ( tic tac toe ), education and experience"},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),c=n("FYa8"),l=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,l=p.length;c<l;c++){var u=p[c];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?i=!1:n.add(u);else{var s=o.props[u],f=r[u]||new Set;f.has(s)?i=!1:(f.add(s),r[u]=f)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function d(e){var t=e.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}d.rewind=function(){};var m=d;t.default=m},"8jAD":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.InlineIcon=t.Icon=void 0;var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r};function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=0,l=/(-?[0-9.]*[0-9]+[0-9.]*)/g,u=/^-?[0-9.]*[0-9]+[0-9.]*$/g,s=["width","height","inline","hFlip","vFlip","flip","rotate","align","color","box"],f={left:0,top:0,width:16,height:16,rotate:0,hFlip:!1,vFlip:!1};var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._item=t}var t,n,r;return t=e,r=[{key:"splitAttributes",value:function(e){var t={icon:Object.create(null),node:Object.create(null)};return Object.keys(e).forEach((function(n){t[-1===s.indexOf(n)?"node":"icon"][n]=e[n]})),t}},{key:"calculateDimension",value:function(e,t,n){if(1===t)return e;if(n=void 0===n?100:n,"number"===typeof e)return Math.ceil(e*t*n)/n;var r=e.split(l);if(null===r||!r.length)return null;for(var o,i=[],a=r.shift(),c=u.test(a);;){if(c?(o=parseFloat(a),isNaN(o)?i.push(a):i.push(Math.ceil(o*t*n)/n)):i.push(a),void 0===(a=r.shift()))return i.join("");c=!c}}},{key:"replaceIDs",value:function(e){var t,n,r=/\sid="(\S+)"/g,o=[];function i(e,t,n){for(var r=0;-1!==(r=n.indexOf(e,r));)n=n.slice(0,r)+t+n.slice(r+e.length),r+=t.length;return n}for(;t=r.exec(e);)o.push(t[1]);return o.length?(n="IconifyId-"+Date.now().toString(16)+"-"+(16777216*Math.random()|0).toString(16)+"-",o.forEach((function(t){var r=n+c;c++,e=i('="'+t+'"','="'+r+'"',e),e=i('="#'+t+'"','="#'+r+'"',e),e=i("(#"+t+")","(#"+r+")",e)})),e):e}}],(n=[{key:"getAttributes",value:function(t){var n=this._item;"object"!==i(t)&&(t=Object.create(null));var r={horizontal:"center",vertical:"middle",slice:!1},o={rotate:n.rotate,hFlip:n.hFlip,vFlip:n.vFlip},a=Object.create(null),c=Object.create(null),l=!0===t.inline||"true"===t.inline||"1"===t.inline,u={left:n.left,top:l?n.inlineTop:n.top,width:n.width,height:l?n.inlineHeight:n.height};if(["hFlip","vFlip"].forEach((function(e){void 0===t[e]||!0!==t[e]&&"true"!==t[e]&&"1"!==t[e]||(o[e]=!o[e])})),void 0!==t.flip&&t.flip.toLowerCase().split(/[\s,]+/).forEach((function(e){switch(e){case"horizontal":o.hFlip=!o.hFlip;break;case"vertical":o.vFlip=!o.vFlip}})),void 0!==t.rotate){var s=t.rotate;if("number"===typeof s)o.rotate+=s;else if("string"===typeof s){var f=s.replace(/^-?[0-9.]*/,"");if(""===f)s=parseInt(s),isNaN(s)||(o.rotate+=s);else if(f!==s){var p=!1;switch(f){case"%":p=25;break;case"deg":p=90}p&&(s=parseInt(s.slice(0,s.length-f.length)),isNaN(s)||(o.rotate+=Math.round(s/p)))}}}var h,d=[];switch(o.hFlip?o.vFlip?o.rotate+=2:(d.push("translate("+(u.width+u.left)+" "+(0-u.top)+")"),d.push("scale(-1 1)"),u.top=u.left=0):o.vFlip&&(d.push("translate("+(0-u.left)+" "+(u.height+u.top)+")"),d.push("scale(1 -1)"),u.top=u.left=0),o.rotate%4){case 1:h=u.height/2+u.top,d.unshift("rotate(90 "+h+" "+h+")"),0===u.left&&0===u.top||(h=u.left,u.left=u.top,u.top=h),u.width!==u.height&&(h=u.width,u.width=u.height,u.height=h);break;case 2:d.unshift("rotate(180 "+(u.width/2+u.left)+" "+(u.height/2+u.top)+")");break;case 3:h=u.width/2+u.left,d.unshift("rotate(-90 "+h+" "+h+")"),0===u.left&&0===u.top||(h=u.left,u.left=u.top,u.top=h),u.width!==u.height&&(h=u.width,u.width=u.height,u.height=h)}var m,v,g=t.width?t.width:null,b=t.height?t.height:null;null===g&&null===b&&(b="1em"),null!==g&&null!==b?(m=g,v=b):null!==g?(m=g,v=e.calculateDimension(m,u.height/u.width)):(v=b,m=e.calculateDimension(v,u.width/u.height)),!1!==m&&(c.width="auto"===m?u.width:m),!1!==v&&(c.height="auto"===v?u.height:v),l&&0!==n.verticalAlign&&(a["vertical-align"]=n.verticalAlign+"em"),void 0!==t.align&&t.align.toLowerCase().split(/[\s,]+/).forEach((function(e){switch(e){case"left":case"right":case"center":r.horizontal=e;break;case"top":case"bottom":case"middle":r.vertical=e;break;case"crop":r.slice=!0;break;case"meet":r.slice=!1}})),c.preserveAspectRatio=function(e){var t;switch(e.horizontal){case"left":t="xMin";break;case"right":t="xMax";break;default:t="xMid"}switch(e.vertical){case"top":t+="YMin";break;case"bottom":t+="YMax";break;default:t+="YMid"}return t+(e.slice?" slice":" meet")}(r),c.viewBox=u.left+" "+u.top+" "+u.width+" "+u.height;var y=e.replaceIDs(n.body);return void 0!==t.color&&(y=y.replace(/currentColor/g,t.color)),d.length&&(y='<g transform="'+d.join(" ")+'">'+y+"</g>"),!0!==t.box&&"true"!==t.box&&"1"!==t.box||(y+='<rect x="'+u.left+'" y="'+u.top+'" width="'+u.width+'" height="'+u.height+'" fill="rgba(0, 0, 0, 0)" />'),{attributes:c,body:y,style:a}}},{key:"getSVG",value:function(t,n){var r=e.splitAttributes(t),o=this.getAttributes(r.icon),i='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"';return n&&Object.keys(r.node).forEach((function(e){i+=" "+e+'="'+r.node[e]+'"'})),Object.keys(o.attributes).forEach((function(e){i+=" "+e+'="'+o.attributes[e]+'"'})),i+=' style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);',Object.keys(o.style).forEach((function(e){i+=" "+e+": "+o.style[e]+";"})),t&&void 0!==t.style&&(i+=t.style),i+='">',i+=o.body+"</svg>"}}])&&a(t.prototype,n),r&&a(t,r),e}();function h(e,t){if("object"!==i(e.icon))return null;var n=p.splitAttributes(e),r=n.icon,a=n.node;delete a.icon,void 0===r.inline&&(r.inline=t);var c=new p(function(e){var t,n=Object.create(null);for(t in f)n[t]=f[t];for(t in e)n[t]=e[t];return void 0===n.inlineTop&&(n.inlineTop=n.top),void 0===n.inlineHeight&&(n.inlineHeight=n.height),void 0===n.verticalAlign&&(n.verticalAlign=n.height%7===0&&n.height%8!==0?-.143:-.125),n}(e.icon)).getAttributes(r),l={transform:"rotate(360deg)"};if(void 0!==c.style["vertical-align"]&&(l.verticalAlign=c.style["vertical-align"]),void 0!==e.style)for(var u in e.style)l[u]=e.style[u];var s,h={xmlns:"http://www.w3.org/2000/svg",focusable:!1,style:l};for(s in a)h[s]=a[s];for(s in c.attributes)h[s]=c.attributes[s];return h.dangerouslySetInnerHTML={__html:c.body},o.default.createElement("svg",h,null)}var d=function(e){return h(e,!1)};t.Icon=d;t.InlineIcon=function(e){return h(e,!0)};var m=d;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},IAIB:function(e,t){t.__esModule=!0,t.default={body:'<path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403z" fill="#161614"/>',width:256,height:250}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WJqM:function(e,t){t.__esModule=!0,t.default={body:'<g fill="currentColor"><path fill-rule="evenodd" d="M1.018 7.5h2.49c.037-1.07.189-2.087.437-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5zM3.05 3.049c.362.184.763.349 1.198.49c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm-.5 1.077c-.67.204-1.335.82-1.887 1.855c-.143.268-.276.56-.395.872c.705.157 1.473.257 2.282.287V1.077zm0 4.014c-.91-.03-1.783-.145-2.591-.332a12.344 12.344 0 0 0-.4 2.741H7.5V5.091zm1 2.409V5.091c.91-.03 1.783-.145 2.591-.332c.223.827.364 1.754.4 2.741H8.5zm-1 1H4.51c.035.987.176 1.914.399 2.741A13.596 13.596 0 0 1 7.5 10.91V8.5zm1 2.409V8.5h2.99a12.343 12.343 0 0 1-.399 2.741A13.596 13.596 0 0 0 8.5 10.91zm-1 1c-.81.03-1.577.13-2.282.287c.12.312.252.604.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91zm-2.173 2.563a6.695 6.695 0 0 1-.597-.933a8.857 8.857 0 0 1-.481-1.078a8.356 8.356 0 0 0-1.198.49a7.01 7.01 0 0 0 2.276 1.52zM2.38 12.175c.47-.258.995-.482 1.565-.667A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.964 6.964 0 0 0 1.362 3.675zm8.293 2.297a7.01 7.01 0 0 0 2.275-1.521a8.353 8.353 0 0 0-1.197-.49a8.859 8.859 0 0 1-.481 1.078a6.688 6.688 0 0 1-.597.933zm.11-2.276A12.63 12.63 0 0 0 8.5 11.91v3.014c.67-.204 1.335-.82 1.887-1.855c.143-.268.276-.56.395-.872zm1.272-.688c.57.185 1.095.409 1.565.667A6.964 6.964 0 0 0 14.982 8.5h-2.49a13.355 13.355 0 0 1-.437 3.008zm.437-4.008h2.49a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667c.248.92.4 1.938.437 3.008zm-.74-3.96a8.854 8.854 0 0 0-.482-1.079a6.692 6.692 0 0 0-.597-.933c.857.355 1.63.875 2.275 1.521a8.368 8.368 0 0 1-1.197.49zm-.97.264c-.705.157-1.473.257-2.282.287V1.077c.67.204 1.335.82 1.887 1.855c.143.268.276.56.395.872z"/></g>',width:16,height:16}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),c=n("a1gu"),l=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),f=function(e){a(n,e);var t=u(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=f},Z4fe:function(e,t,n){e.exports={projSection:"ProjectSection_projSection__CI4-4",projectContainer:"ProjectSection_projectContainer__DU3OY"}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},eyyw:function(e,t,n){e.exports={container:"ProjectLinks_container__3xGWp"}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vRNQ:function(e,t,n){e.exports={container:"Home_container__1EcsU"}}},[["/EDR",0,1]]]);