!function(t){function e(e){for(var n,r,o=e[0],u=e[1],l=0,c=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(a&&a(e);c.length;)c.shift()()}function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0},i={0:0};n.e=function(t){var e=[];o[t]?e.push(o[t]):0!==o[t]&&{2:1,3:1,4:1}[t]&&e.push(o[t]=new Promise((function(e,r){for(var i=({2:"route-best-practice",3:"route-demo",4:"route-home"}[t]||t)+".chunk."+{2:"5aa6e",3:"4a7d9",4:"b6575"}[t]+".css",u=n.p+i,l=document.getElementsByTagName("link"),c=0;c<l.length;c++){var a=(s=l[c]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(a===i||a===u))return e()}var _=document.getElementsByTagName("style");for(c=0;c<_.length;c++){var s;if((a=(s=_[c]).getAttribute("data-href"))===i||a===u)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css";f.onerror=f.onload=function(n){if(f.onerror=f.onload=null,"load"===n.type)e();else{var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||u,c=new Error("Loading CSS chunk "+t+" failed.\n("+l+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=l,delete o[t],f.parentNode.removeChild(f),r(c)}},f.href=u,document.head.appendChild(f)})).then((function(){o[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=u);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=function(t){return n.p+""+({2:"route-best-practice",3:"route-demo",4:"route-home"}[t]||t)+".chunk."+{2:"33417",3:"741a2",4:"159a8"}[t]+".js"}(t);var a=new Error;l=function(e){c.onerror=c.onload=null,clearTimeout(_);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,n[1](a)}i[t]=void 0}};var _=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(e)},n.m=t,n.c=r,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/light-dark-theme-demo/",n.oe=function(t){throw console.error(t),t};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var a=l;n(n.s="mdyV")}({"3Dwp":function(t,e,n){"use strict";e.a=n.p+"0035c307a36c17babb8d25cd02fb6488.png"},"3br2":function(t,e,n){"use strict";var r=n("ensb");e.a=Object(r.a)((function(t){n.e(4).then(function(){var e=n("+1Jk");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)}))},"6yhf":function(t,e,n){"use strict";var r=n("ensb");e.a=Object(r.a)((function(t){n.e(2).then(function(){var e=n("Lagm");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)}))},"A2v+":function(t,e,n){"use strict";var r=n("ensb");e.a=Object(r.a)((function(t){n.e(3).then(function(){var e=n("+p3a");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)}))},ETxl:function(){},QfWi:function(t,e,n){"use strict";n.r(e);var r=n("ugae");e.default=r.a},"QyV/":function(t,e,n){"use strict";(function(t){var r=n("ox/y"),o=n("ySiU"),i=n("UQal"),u=n("3Dwp"),l=n("yhhP");e.a=function(e){var n=e.toggleTheme,c=e.isDarkMode;return t("header",{class:o.a.header},t("a",{href:"https://github.com/jetfontanilla/light-dark-theme-demo"},t("img",{src:c()?l.a:u.a,width:"32",height:"32",alt:"View on Github"})),t("h1",null,"Light / Dark theme demo"),t("nav",null,t(r.Link,{activeClassName:o.a.active,href:"/"},"Basics"),t(r.Link,{activeClassName:o.a.active,href:"/demo"},"Demo"),t(r.Link,{activeClassName:o.a.active,href:"/best-practice"},"Best Practices")),t("span",{class:o.a.toggleLabel},t("span",{style:{fontSize:"0.8em"}},"Current Theme"),t("br",null),t("strong",null,c()?"DARK":"LIGHT")),t(i.a,{toggleTheme:n,isDarkMode:c}))}}).call(this,n("hosL").h)},UQal:function(t,e,n){"use strict";var r=n("hosL"),o="switch__1NrFb",i="slider__3kBcH";e.a=function(t){var e=t.toggleTheme,n=t.isDarkMode;return Object(r.h)("label",{className:o},Object(r.h)("input",{type:"checkbox",onClick:e,checked:n()}),Object(r.h)("span",{className:i}))}},Y3FI:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var c=i[1].split("&"),a=0;a<c.length;a++){var _=c[a].split("=");u[decodeURIComponent(_[0])]=decodeURIComponent(_.slice(1).join("="))}t=l(t.replace(o,"")),e=l(e||"");for(var s=Math.max(t.length,e.length),f=0;f<s;f++)if(e[f]&&":"===e[f].charAt(0)){var p=e[f].replace(/(^:|[+*?]+$)/g,""),h=(e[f].match(/[+*?]+$/)||m)[0]||"",d=~h.indexOf("+"),v=~h.indexOf("*"),y=t[f]||"";if(!y&&!v&&(h.indexOf("?")<0||d)){r=!1;break}if(u[p]=decodeURIComponent(y),d||v){u[p]=t.slice(f).map(decodeURIComponent).join("/");break}}else if(e[f]!==t[f]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(c).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function c(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function a(){var t;return""+((t=y&&y.location?y.location:y&&y.getCurrentLocation?y.getCurrentLocation():"undefined"!=typeof location?location:k).pathname||"")+(t.search||"")}function _(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=g.length;e--;)if(g[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),y&&y[e]?y[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),s(t)}function s(t){for(var e=!1,n=0;n<g.length;n++)!0===g[n].routeTo(t)&&(e=!0);for(var r=b.length;r--;)b[r](t);return e}function f(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return _(e)}}function p(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return f(t.currentTarget||t.target||this),h(t)}function h(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function d(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(f(e))return h(t)}}while(e=e.parentNode)}}n.r(e),n.d(e,"subscribers",(function(){return b})),n.d(e,"getCurrentUrl",(function(){return a})),n.d(e,"route",(function(){return _})),n.d(e,"Router",(function(){return x})),n.d(e,"Route",(function(){return O})),n.d(e,"Link",(function(){return w})),n.d(e,"exec",(function(){return o}));var v=n("hosL"),m={},y=null,g=[],b=[],k={},C=!1,x=function(t){function e(e){t.call(this,e),e.history&&(y=e.history),this.state={url:e.url||a()},C||("function"==typeof addEventListener&&(y||addEventListener("popstate",(function(){s(a())})),addEventListener("click",d)),C=!0)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(v.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){g.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;y&&(this.unlisten=y.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),g.splice(g.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(i).map((function(t){var i=o(e,t.props.path,t.props);if(i){if(!1!==n){var u={url:e,matches:i};return r(u,i),delete u.ref,delete u.key,Object(v.cloneElement)(t,u)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(Object(v.toChildArray)(n),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},e}(v.Component),w=function(t){return Object(v.createElement)("a",r({onClick:p},t))},O=function(t){return Object(v.createElement)(t.component,t)};x.subscribers=b,x.getCurrentUrl=a,x.route=_,x.Router=x,x.Route=O,x.Link=w,x.exec=o,e.default=x},ensb:function(t,e,n){"use strict";function r(t,e){if("string"==typeof t.type)return null;var n=t.__;if(n){var o=n.__k;if(o){Array.isArray(o)||(o=[o]);var i=o.indexOf(t);-1===i&&(i=o.length);for(var u=i;u--;){var l=o[u],c=l&&l.__e||r(l,!0);if(c)return c}}return e?void 0:r(n)}}function o(t){function e(){var e=this;i.Component.call(this),n||(this.componentWillMount=function(){t((function(t){n=t&&t.default||t,e.setState({})}))},this.shouldComponentUpdate=function(){return null!=n}),this.render=function(t){if(n)return Object(i.h)(n,t);var o=r(e.__v),l=o&&o.nextSibling||(e.__P||e._parentDom).firstChild;return l&&Object(i.h)(l.localName,{dangerouslySetInnerHTML:u})}}var n;return e.preload=t,(e.prototype=new i.Component).constructor=e,e}n.d(e,"a",(function(){return o}));var i=n("hosL"),u={}},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var r,o,i,l={};for(i in e)"key"==i?r=e[i]:"ref"==i?o=e[i]:l[i]=e[i];if(arguments.length>2&&(l.children=arguments.length>3?U.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===l[i]&&(l[i]=t.defaultProps[i]);return u(t,l,r,o,null)}function u(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++D:o};return null!=T.vnode&&T.vnode(i),i}function l(){return{current:null}}function c(t){return t.children}function a(t,e){this.props=t,this.context=e}function _(t,e){if(null==e)return t.__?_(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?_(t):null}function s(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return s(t)}}function f(t){(!t.__d&&(t.__d=!0)&&N.push(t)&&!p.__r++||R!==T.debounceRendering)&&((R=T.debounceRendering)||H)(p)}function p(){for(var t;p.__r=N.length;)t=N.sort((function(t,e){return t.__v.__b-e.__v.__b})),N=[],t.some((function(t){var e,n,o,i,u,l;t.__d&&(u=(i=(e=t).__v).__e,(l=e.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,C(l,i,o,e.__n,void 0!==l.ownerSVGElement,null!=i.__h?[u]:null,n,null==u?_(i):u,i.__h),x(n,i),i.__e!=u&&s(i)))}))}function h(t,e,n,r,o,i,l,a,s,f){var p,h,v,y,g,b,k,x=r&&r.__k||F,w=x.length;for(n.__k=[],p=0;p<e.length;p++)if(null!=(y=n.__k[p]=null==(y=e[p])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?u(null,y,null,null,y):Array.isArray(y)?u(c,{children:y},null,null,null):y.__b>0?u(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(v=x[p])||v&&y.key==v.key&&y.type===v.type)x[p]=void 0;else for(h=0;h<w;h++){if((v=x[h])&&y.key==v.key&&y.type===v.type){x[h]=void 0;break}v=null}C(t,y,v=v||W,o,i,l,a,s,f),g=y.__e,(h=y.ref)&&v.ref!=h&&(k||(k=[]),v.ref&&k.push(v.ref,null,y),k.push(h,y.__c||g,y)),null!=g?(null==b&&(b=g),"function"==typeof y.type&&null!=y.__k&&y.__k===v.__k?y.__d=s=d(y,s,t):s=m(t,y,v,x,g,s),f||"option"!==n.type?"function"==typeof n.type&&(n.__d=s):t.value=""):s&&v.__e==s&&s.parentNode!=t&&(s=_(v))}for(n.__e=b,p=w;p--;)null!=x[p]&&("function"==typeof n.type&&null!=x[p].__e&&x[p].__e==n.__d&&(n.__d=_(r,p+1)),L(x[p],x[p]));if(k)for(p=0;p<k.length;p++)O(k[p],k[++p],k[++p])}function d(t,e,n){var r,o;for(r=0;r<t.__k.length;r++)(o=t.__k[r])&&(o.__=t,e="function"==typeof o.type?d(o,e,n):m(n,o,o,t.__k,o.__e,e));return e}function v(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){v(t,e)})):e.push(t)),e}function m(t,e,n,r,o,i){var u,l,c;if(void 0!==e.__d)u=e.__d,e.__d=void 0;else if(null==n||o!=i||null==o.parentNode)t:if(null==i||i.parentNode!==t)t.appendChild(o),u=null;else{for(l=i,c=0;(l=l.nextSibling)&&c<r.length;c+=2)if(l==o)break t;t.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function y(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||B.test(e)?n:n+"px"}function g(t,e,n,r,o){var i;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||y(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||y(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?k:b,i):t.removeEventListener(e,i?k:b,i);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?t.setAttribute(e,n):t.removeAttribute(e))}}function b(t){this.l[t.type+!1](T.event?T.event(t):t)}function k(t){this.l[t.type+!0](T.event?T.event(t):t)}function C(t,e,n,o,i,u,l,_,s){var f,p,d,v,m,y,g,b,k,C,x,O=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(s=n.__h,_=e.__e=n.__e,e.__h=null,u=[_]),(f=T.__b)&&f(e);try{t:if("function"==typeof O){if(b=e.props,k=(f=O.contextType)&&o[f.__c],C=f?k?k.props.value:f.__:o,n.__c?g=(p=e.__c=n.__c).__=p.__E:("prototype"in O&&O.prototype.render?e.__c=p=new O(b,C):(e.__c=p=new a(b,C),p.constructor=O,p.render=P),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=C,p.__n=o,d=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=O.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,O.getDerivedStateFromProps(b,p.__s))),v=p.props,m=p.state,d)null==O.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==O.getDerivedStateFromProps&&b!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,C),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,C)||e.__v===n.__v){p.props=b,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),p.__h.length&&l.push(p);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,C),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,m,y)}))}p.context=C,p.props=b,p.state=p.__s,(f=T.__r)&&f(e),p.__d=!1,p.__v=e,p.__P=t,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),d||null==p.getSnapshotBeforeUpdate||(y=p.getSnapshotBeforeUpdate(v,m)),x=null!=f&&f.type===c&&null==f.key?f.props.children:f,h(t,Array.isArray(x)?x:[x],e,n,o,i,u,l,_,s),p.base=e.__e,e.__h=null,p.__h.length&&l.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==u&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=w(n.__e,e,n,o,i,u,l,s);(f=T.diffed)&&f(e)}catch(t){e.__v=null,(s||null!=u)&&(e.__e=_,e.__h=!!s,u[u.indexOf(_)]=null),T.__e(t,e,n)}}function x(t,e){T.__c&&T.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){T.__e(t,e.__v)}}))}function w(t,e,n,r,i,u,l,c){var a,s,f,p=n.props,d=e.props,v=e.type,m=0;if("svg"===v&&(i=!0),null!=u)for(;m<u.length;m++)if((a=u[m])&&(a===t||(v?a.localName==v:3==a.nodeType))){t=a,u[m]=null;break}if(null==t){if(null===v)return document.createTextNode(d);t=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,d.is&&d),u=null,c=!1}if(null===v)p===d||c&&t.data===d||(t.data=d);else{if(u=u&&U.call(t.childNodes),s=(p=n.props||W).dangerouslySetInnerHTML,f=d.dangerouslySetInnerHTML,!c){if(null!=u)for(p={},m=0;m<t.attributes.length;m++)p[t.attributes[m].name]=t.attributes[m].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===t.innerHTML)||(t.innerHTML=f&&f.__html||""))}if(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||g(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||g(t,i,e[i],n[i],r)}(t,d,p,i,c),f)e.__k=[];else if(m=e.props.children,h(t,Array.isArray(m)?m:[m],e,n,r,i&&"foreignObject"!==v,u,l,u?u[0]:n.__k&&_(n,0),c),null!=u)for(m=u.length;m--;)null!=u[m]&&o(u[m]);c||("value"in d&&void 0!==(m=d.value)&&(m!==t.value||"progress"===v&&!m)&&g(t,"value",m,p.value,!1),"checked"in d&&void 0!==(m=d.checked)&&m!==t.checked&&g(t,"checked",m,p.checked,!1))}return t}function O(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){T.__e(t,n)}}function L(t,e,n){var r,i;if(T.unmount&&T.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||O(r,null,e)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){T.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&L(r[i],e,"function"!=typeof t.type);n||null==t.__e||o(t.__e),t.__e=t.__d=void 0}function P(t,e,n){return this.constructor(t,n)}function A(t,e,n){var r,o,u;T.__&&T.__(t,e),o=(r="function"==typeof n)?null:n&&n.__k||e.__k,u=[],C(e,t=(!r&&n||e).__k=i(c,null,[t]),o||W,W,void 0!==e.ownerSVGElement,!r&&n?[n]:o?null:e.firstChild?U.call(e.childNodes):null,u,!r&&n?n:o?o.__e:e.firstChild,r),x(u,t)}function S(t,e){A(t,e,S)}function E(t,e,n){var o,i,l,c=r({},t.props);for(l in e)"key"==l?o=e[l]:"ref"==l?i=e[l]:c[l]=e[l];return arguments.length>2&&(c.children=arguments.length>3?U.call(arguments,2):n),u(t.type,c,o||t.key,i||t.ref,null)}function j(t,e){var n={__c:e="__cC"+I++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,r;return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some(f)},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(e),n.d(e,"render",(function(){return A})),n.d(e,"hydrate",(function(){return S})),n.d(e,"createElement",(function(){return i})),n.d(e,"h",(function(){return i})),n.d(e,"Fragment",(function(){return c})),n.d(e,"createRef",(function(){return l})),n.d(e,"isValidElement",(function(){return M})),n.d(e,"Component",(function(){return a})),n.d(e,"cloneElement",(function(){return E})),n.d(e,"createContext",(function(){return j})),n.d(e,"toChildArray",(function(){return v})),n.d(e,"options",(function(){return T}));var U,T,D,M,N,H,R,I,W={},F=[],B=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;U=F.slice,T={__e:function(t,e){for(var n,r,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(t)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(t),o=n.__d),o)return n.__E=n}catch(e){t=e}throw t}},D=0,M=function(t){return null!=t&&void 0===t.constructor},a.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},n),this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),f(this))},a.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),f(this))},a.prototype.render=c,N=[],H="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,I=0},jacP:function(t,e,n){"use strict";function r(t,e){p.options.__h&&p.options.__h(s,t,h||e),h=0;var n=s.__H||(s.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function o(t){return h=1,function(t,e,n){var o=r(_++,2);return o.t=t,o.__c||(o.__=[n?n(e):a(void 0,e),function(t){var e=o.t(o.__[0],t);o.__[0]!==e&&(o.__=[e,o.__[1]],o.__c.setState({}))}],o.__c=s),o.__}(a,t)}function i(){d.forEach((function(t){if(t.__P)try{t.__H.__h.forEach(u),t.__H.__h.forEach(l),t.__H.__h=[]}catch(e){t.__H.__h=[],p.options.__e(e,t.__v)}})),d=[]}function u(t){var e=s;"function"==typeof t.__c&&t.__c(),s=e}function l(t){var e=s;t.__c=t.__(),s=e}function c(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function a(t,e){return"function"==typeof e?e(t):e}n.d(e,"a",(function(){return w}));var _,s,f,p=n("hosL"),h=0,d=[],v=p.options.__b,m=p.options.__r,y=p.options.diffed,g=p.options.__c,b=p.options.unmount;p.options.__b=function(t){s=null,v&&v(t)},p.options.__r=function(t){m&&m(t),_=0;var e=(s=t.__c).__H;e&&(e.__h.forEach(u),e.__h.forEach(l),e.__h=[])},p.options.diffed=function(t){y&&y(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==d.push(e)&&f===p.options.requestAnimationFrame||((f=p.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),k&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);k&&(e=requestAnimationFrame(n))})(i)),s=void 0},p.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(u),t.__h=t.__h.filter((function(t){return!t.__||l(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],p.options.__e(n,t.__v)}})),g&&g(t,e)},p.options.unmount=function(t){b&&b(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(u)}catch(t){p.options.__e(t,e.__v)}};var k="function"==typeof requestAnimationFrame,C="light",x="dark",w=function(){var t,e,n,i=o(C),u=i[0],l=i[1],a=o(!1),f=a[0],h=a[1],d=function(t){window.localStorage.setItem("theme",t),l(t)};return t=function(){var t=window.localStorage.getItem("theme"),e=t||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?x:C);l(e),h(!0)},e=[],n=r(_++,3),!p.options.__s&&c(n.__H,e)&&(n.__=t,n.__H=e,s.__H.__h.push(n)),[function(){d(u===C?x:C)},f,function(){return u===x}]}},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL"),o=r.h,i=r.render,u=r.hydrate,l=function(t){return t&&t.default?t.default:t},c=function(t){return"/"===t[t.length-1]?t:t+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw.js"),"function"==typeof l(n("QfWi"))){var a=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=l(n("QfWi")),e={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(e=JSON.parse(decodeURI(r.innerHTML)).preRenderData||e);var _={preRenderData:e},s=e.url?c(e.url):"",f=u&&s===c(location.pathname);a=(f?u:i)(o(t,{CLI_DATA:_}),document.body,a)}()}},"ox/y":function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("hosL"),u=n("Y3FI"),l=e.Match=function(t){function e(){for(var e,n,o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return e=n=r(this,t.call.apply(t,[this].concat(i))),n.update=function(t){n.nextUrl=t,n.setState({})},r(n,e)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){u.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){u.subscribers.splice(u.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,u.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,u.exec)(n,t.path,{})})},e}(i.Component),c=function(t){var e=t.activeClassName,n=t.path,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,i.h)(l,{path:n||r.href},(function(t){return(0,i.h)(u.Link,o({},r,{class:[r.class||r.className,t.matches&&e].filter(Boolean).join(" ")}))}))};e.Link=c,e.default=l,l.Link=c},ugae:function(t,e,n){"use strict";(function(t){var r=n("Y3FI"),o=n("QyV/"),i=n("3br2"),u=n("A2v+"),l=n("6yhf"),c=n("jacP");n("ETxl");e.a=function(){var e=Object(c.a)(),n=e[0],a=e[2];return e[1]?t("div",{id:"app",class:a()?"dark":"light"},t(o.a,{toggleTheme:n,isDarkMode:a}),t(r.Router,null,t(i.a,{path:"/"}),t(u.a,{path:"/demo"}),t(l.a,{path:"/best-practice"}))):t("div",null)}}).call(this,n("hosL").h)},ySiU:function(t,e){"use strict";e.a={header:"header__3ax1h",active:"active__2XB2z",toggleLabel:"toggleLabel__yrYDr"}},yhhP:function(t,e,n){"use strict";e.a=n.p+"266ca63177bca6f330a74e83fdc63178.png"}});
//# sourceMappingURL=bundle.39558.js.map