/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-borderradius-boxshadow-boxsizing-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,s,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),g.push((r?"":"no-")+a.join("-"))}}function s(e){var n=w.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?w.className.baseVal=n:w.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?f(r,t||n):r);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(){var e=n.body;return e||(e=a(b?"svg":"body"),e.fake=!0),e}function c(e,t,o,r){var s,i,l,f,u="modernizr",d=a("div"),c=p();if(parseInt(o,10))for(;o--;)l=a("div"),l.id=r?r[o]:u+(o+1),d.appendChild(l);return s=a("style"),s.type="text/css",s.id="s"+u,(c.fake?c:d).appendChild(s),c.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",f=w.style.overflow,w.style.overflow="hidden",w.appendChild(c)),i=t(d,e),c.fake?(c.parentNode.removeChild(c),w.style.overflow=f,w.offsetHeight):d.parentNode.removeChild(d),!!i}function m(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(d(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];r--;)s.push("("+d(n[r])+":"+o+")");return s=s.join(" or "),c("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,r,s){function f(){d&&(delete P.style,delete P.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var u=m(e,r);if(!o(u,"undefined"))return u}for(var d,p,c,h,v,y=["modernizr","tspan","samp"];!P.style&&y.length;)d=!0,P.modElem=a(y.shift()),P.style=P.modElem.style;for(c=e.length,p=0;c>p;p++)if(h=e[p],v=P.style[h],i(h,"-")&&(h=l(h)),P.style[h]!==t){if(s||o(r,"undefined"))return f(),"pfx"==n?h:!0;try{P.style[h]=r}catch(g){}if(P.style[h]!=v)return f(),"pfx"==n?h:!0}return f(),!1}function v(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+_.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?h(a,n,r,s):(a=(e+" "+z.join(i+" ")+i).split(" "),u(a,n,t))}function y(e,n,o){return v(e,t,t,n,o)}var g=[],C=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var w=n.documentElement,b="svg"===w.nodeName.toLowerCase(),S="Moz O ms Webkit",_=x._config.usePrefixes?S.split(" "):[];x._cssomPrefixes=_;var z=x._config.usePrefixes?S.toLowerCase().split(" "):[];x._domPrefixes=z;var E={elem:a("modernizr")};Modernizr._q.push(function(){delete E.elem});var P={style:E.elem.style};Modernizr._q.unshift(function(){delete P.style}),x.testAllProps=v,x.testAllProps=y,Modernizr.addTest("boxshadow",y("boxShadow","1px 1px",!0)),Modernizr.addTest("borderradius",y("borderRadius","0px",!0)),Modernizr.addTest("boxsizing",y("boxSizing","border-box",!0)&&(n.documentMode===t||n.documentMode>7)),r(),s(g),delete x.addTest,delete x.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);
