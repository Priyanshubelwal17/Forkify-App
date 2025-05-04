var e,t,r,n,o,a,s,c,u,l,f,p,h,d,v,g=globalThis;function y(e){return e&&e.__esModule?e.default:e}var m={},b={},_=function(e){return e&&e.Math===Math&&e};b=_("object"==typeof globalThis&&globalThis)||_("object"==typeof window&&window)||_("object"==typeof self&&self)||_("object"==typeof g&&g)||_("object"==typeof b&&b)||function(){return this}()||Function("return this")();var w={},E={};w=!(E=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var $={},S={};S=!E(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var P=Function.prototype.call;$=S?P.bind(P):function(){return P.apply(P,arguments)};var j={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor;r=O&&!j.call({1:2},1)?function(e){var t=O(this,e);return!!t&&t.enumerable}:j;var L={};L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var k={},M={},x={},T=Function.prototype,I=T.call,N=S&&T.bind.bind(I,I),F={},D=(x=S?N:function(e){return function(){return I.apply(e,arguments)}})({}.toString),q=x("".slice);F=function(e){return q(D(e),8,-1)};var C=Object,H=x("".split);M=E(function(){return!C("z").propertyIsEnumerable(0)})?function(e){return"String"===F(e)?H(e,""):C(e)}:C;var R={},A={};A=function(e){return null==e};var U=TypeError;R=function(e){if(A(e))throw new U("Can't call method on "+e);return e},k=function(e){return M(R(e))};var G={},z={},B={},W={},Y="object"==typeof document&&document.all;W=void 0===Y&&void 0!==Y?function(e){return"function"==typeof e||e===Y}:function(e){return"function"==typeof e},B=function(e){return"object"==typeof e?null!==e:W(e)};var Q={},K={};K=function(e,t){var r;return arguments.length<2?(r=b[e],W(r)?r:void 0):b[e]&&b[e][t]};var V={};V=x({}.isPrototypeOf);var J={},X={},Z={},ee={},et=b.navigator,er=et&&et.userAgent;ee=er?String(er):"";var en=b.process,ei=b.Deno,eo=en&&en.versions||ei&&ei.version,ea=eo&&eo.v8;ea&&(o=(n=ea.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&ee&&(!(n=ee.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=ee.match(/Chrome\/(\d+)/))&&(o=+n[1]),Z=o;var es=b.String;J=(X=!!Object.getOwnPropertySymbols&&!E(function(){var e=Symbol("symbol detection");return!es(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Z&&Z<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ec=Object;Q=J?function(e){return"symbol"==typeof e}:function(e){var t=K("Symbol");return W(t)&&V(t.prototype,ec(e))};var eu={},el={},ef={},ep=String;ef=function(e){try{return ep(e)}catch(e){return"Object"}};var eh=TypeError;el=function(e){if(W(e))return e;throw new eh(ef(e)+" is not a function")},eu=function(e,t){var r=e[t];return A(r)?void 0:el(r)};var ed={},ev=TypeError;ed=function(e,t){var r,n;if("string"===t&&W(r=e.toString)&&!B(n=$(r,e))||W(r=e.valueOf)&&!B(n=$(r,e))||"string"!==t&&W(r=e.toString)&&!B(n=$(r,e)))return n;throw new ev("Can't convert object to primitive value")};var eg={},ey={},em={},eb={};eb=!1;var e_={},ew=Object.defineProperty;e_=function(e,t){try{ew(b,e,{value:t,configurable:!0,writable:!0})}catch(r){b[e]=t}return t};var eE="__core-js_shared__",e$=em=b[eE]||e_(eE,{});(e$.versions||(e$.versions=[])).push({version:"3.42.0",mode:eb?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.42.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ey=function(e,t){return em[e]||(em[e]=t||{})};var eS={},eP={},ej=Object;eP=function(e){return ej(R(e))};var eO=x({}.hasOwnProperty);eS=Object.hasOwn||function(e,t){return eO(eP(e),t)};var eL={},ek=0,eM=Math.random(),ex=x(1..toString);eL=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ex(++ek+eM,36)};var eT=b.Symbol,eI=ey("wks"),eN=J?eT.for||eT:eT&&eT.withoutSetter||eL,eF=TypeError,eD=function(e){return eS(eI,e)||(eI[e]=X&&eS(eT,e)?eT[e]:eN("Symbol."+e)),eI[e]}("toPrimitive");z=function(e,t){if(!B(e)||Q(e))return e;var r,n=eu(e,eD);if(n){if(void 0===t&&(t="default"),r=$(n,e,t),!B(r)||Q(r))return r;throw new eF("Can't convert object to primitive value")}return void 0===t&&(t="number"),ed(e,t)},G=function(e){var t=z(e,"string");return Q(t)?t:t+""};var eq={},eC={},eH=b.document,eR=B(eH)&&B(eH.createElement);eC=function(e){return eR?eH.createElement(e):{}},eq=!w&&!E(function(){return 7!==Object.defineProperty(eC("div"),"a",{get:function(){return 7}}).a});var eA=Object.getOwnPropertyDescriptor;t=w?eA:function(e,t){if(e=k(e),t=G(t),eq)try{return eA(e,t)}catch(e){}if(eS(e,t))return L(!$(r,e,t),e[t])};var eU={},eG={};eG=w&&E(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var ez={},eB=String,eW=TypeError;ez=function(e){if(B(e))return e;throw new eW(eB(e)+" is not an object")};var eY=TypeError,eQ=Object.defineProperty,eK=Object.getOwnPropertyDescriptor,eV="enumerable",eJ="configurable",eX="writable";a=w?eG?function(e,t,r){if(ez(e),t=G(t),ez(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eX in r&&!r[eX]){var n=eK(e,t);n&&n[eX]&&(e[t]=r.value,r={configurable:eJ in r?r[eJ]:n[eJ],enumerable:eV in r?r[eV]:n[eV],writable:!1})}return eQ(e,t,r)}:eQ:function(e,t,r){if(ez(e),t=G(t),ez(r),eq)try{return eQ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eY("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eU=w?function(e,t,r){return a(e,t,L(1,r))}:function(e,t,r){return e[t]=r,e};var eZ={},e0={},e1={},e2=Function.prototype,e9=w&&Object.getOwnPropertyDescriptor,e4=eS(e2,"name"),e7=e4&&(!w||w&&e9(e2,"name").configurable),e3={},e6=x(Function.toString);W(em.inspectSource)||(em.inspectSource=function(e){return e6(e)}),e3=em.inspectSource;var e8={},e5={},te=b.WeakMap;e5=W(te)&&/native code/.test(String(te));var tt={},tr=ey("keys");tt=function(e){return tr[e]||(tr[e]=eL(e))};var tn={};tn={};var ti="Object already initialized",to=b.TypeError,ta=b.WeakMap;if(e5||em.state){var ts=em.state||(em.state=new ta);ts.get=ts.get,ts.has=ts.has,ts.set=ts.set,s=function(e,t){if(ts.has(e))throw new to(ti);return t.facade=e,ts.set(e,t),t},c=function(e){return ts.get(e)||{}},u=function(e){return ts.has(e)}}else{var tc=tt("state");tn[tc]=!0,s=function(e,t){if(eS(e,tc))throw new to(ti);return t.facade=e,eU(e,tc,t),t},c=function(e){return eS(e,tc)?e[tc]:{}},u=function(e){return eS(e,tc)}}var tu=(e8={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!B(t)||(r=c(t)).type!==e)throw new to("Incompatible receiver, "+e+" required");return r}}}).enforce,tl=e8.get,tf=String,tp=Object.defineProperty,th=x("".slice),td=x("".replace),tv=x([].join),tg=w&&!E(function(){return 8!==tp(function(){},"length",{value:8}).length}),ty=String(String).split("String"),tm=e0=function(e,t,r){"Symbol("===th(tf(t),0,7)&&(t="["+td(tf(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eS(e,"name")||e7&&e.name!==t)&&(w?tp(e,"name",{value:t,configurable:!0}):e.name=t),tg&&r&&eS(r,"arity")&&e.length!==r.arity&&tp(e,"length",{value:r.arity});try{r&&eS(r,"constructor")&&r.constructor?w&&tp(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tu(e);return eS(n,"source")||(n.source=tv(ty,"string"==typeof t?t:"")),e};Function.prototype.toString=tm(function(){return W(this)&&tl(this).source||e3(this)},"toString"),eZ=function(e,t,r,n){n||(n={});var o=n.enumerable,s=void 0!==n.name?n.name:t;if(W(r)&&e0(r,s,n),n.global)o?e[t]=r:e_(t,r);else{try{n.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tb={},t_={},tw={},tE={},t$={},tS={},tP={},tj=Math.ceil,tO=Math.floor;tP=Math.trunc||function(e){var t=+e;return(t>0?tO:tj)(t)},tS=function(e){var t=+e;return t!=t||0===t?0:tP(t)};var tL=Math.max,tk=Math.min;t$=function(e,t){var r=tS(e);return r<0?tL(r+t,0):tk(r,t)};var tM={},tx={},tT=Math.min;tx=function(e){var t=tS(e);return t>0?tT(t,0x1fffffffffffff):0},tM=function(e){return tx(e.length)};var tI=function(e){return function(t,r,n){var o,a=k(t),s=tM(a);if(0===s)return!e&&-1;var c=t$(n,s);if(e&&r!=r){for(;s>c;)if((o=a[c++])!=o)return!0}else for(;s>c;c++)if((e||c in a)&&a[c]===r)return e||c||0;return!e&&-1}},tN={includes:tI(!0),indexOf:tI(!1)}.indexOf,tF=x([].push);tw=function(e,t){var r,n=k(e),o=0,a=[];for(r in n)!eS(tn,r)&&eS(n,r)&&tF(a,r);for(;t.length>o;)eS(n,r=t[o++])&&(~tN(a,r)||tF(a,r));return a};var tD={},tq=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tw(e,tq)},f=Object.getOwnPropertySymbols;var tC=x([].concat);t_=K("Reflect","ownKeys")||function(e){var t=l(ez(e));return f?tC(t,f(e)):t},tb=function(e,r,n){for(var o=t_(r),s=0;s<o.length;s++){var c=o[s];eS(e,c)||n&&eS(n,c)||a(e,c,t(r,c))}};var tH={},tR=/#|\.prototype\./,tA=function(e,t){var r=tG[tU(e)];return r===tB||r!==tz&&(W(t)?E(t):!!t)},tU=tA.normalize=function(e){return String(e).replace(tR,".").toLowerCase()},tG=tA.data={},tz=tA.NATIVE="N",tB=tA.POLYFILL="P";tH=tA,m=function(e,r){var n,o,a,s,c,u=e.target,l=e.global,f=e.stat;if(n=l?b:f?b[u]||e_(u,{}):b[u]&&b[u].prototype)for(o in r){if(s=r[o],a=e.dontCallGetSet?(c=t(n,o))&&c.value:n[o],!tH(l?o:u+(f?".":"#")+o,e.forced)&&void 0!==a){if(typeof s==typeof a)continue;tb(s,a)}(e.sham||a&&a.sham)&&eU(s,"sham",!0),eZ(n,o,s,e)}};var tW={},tY={},tQ=Function.prototype,tK=tQ.apply,tV=tQ.call;tY="object"==typeof Reflect&&Reflect.apply||(S?tV.bind(tK):function(){return tV.apply(tK,arguments)});var tJ={},tX={},tZ=(tX=function(e){if("Function"===F(e))return x(e)})(tX.bind);tJ=function(e,t){return el(e),void 0===t?e:S?tZ(e,t):function(){return e.apply(t,arguments)}};var t0={};t0=K("document","documentElement");var t1={};t1=x([].slice);var t2={},t9=TypeError;t2=function(e,t){if(e<t)throw new t9("Not enough arguments");return e};var t4={};t4=/(?:ipad|iphone|ipod).*applewebkit/i.test(ee);var t7={},t3={},t6=function(e){return ee.slice(0,e.length)===e};t7="NODE"===(t3=t6("Bun/")?"BUN":t6("Cloudflare-Workers")?"CLOUDFLARE":t6("Deno/")?"DENO":t6("Node.js/")?"NODE":b.Bun&&"string"==typeof Bun.version?"BUN":b.Deno&&"object"==typeof Deno.version?"DENO":"process"===F(b.process)?"NODE":b.window&&b.document?"BROWSER":"REST");var t8=b.setImmediate,t5=b.clearImmediate,re=b.process,rt=b.Dispatch,rr=b.Function,rn=b.MessageChannel,ri=b.String,ro=0,ra={},rs="onreadystatechange";E(function(){p=b.location});var rc=function(e){if(eS(ra,e)){var t=ra[e];delete ra[e],t()}},ru=function(e){return function(){rc(e)}},rl=function(e){rc(e.data)},rf=function(e){b.postMessage(ri(e),p.protocol+"//"+p.host)};t8&&t5||(t8=function(e){t2(arguments.length,1);var t=W(e)?e:rr(e),r=t1(arguments,1);return ra[++ro]=function(){tY(t,void 0,r)},h(ro),ro},t5=function(e){delete ra[e]},t7?h=function(e){re.nextTick(ru(e))}:rt&&rt.now?h=function(e){rt.now(ru(e))}:rn&&!t4?(v=(d=new rn).port2,d.port1.onmessage=rl,h=tJ(v.postMessage,v)):b.addEventListener&&W(b.postMessage)&&!b.importScripts&&p&&"file:"!==p.protocol&&!E(rf)?(h=rf,b.addEventListener("message",rl,!1)):h=rs in eC("script")?function(e){t0.appendChild(eC("script"))[rs]=function(){t0.removeChild(this),rc(e)}}:function(e){setTimeout(ru(e),0)});var rp=(tW={set:t8,clear:t5}).clear;m({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==rp},{clearImmediate:rp});var rh=tW.set,rd={},rv=b.Function,rg=/MSIE .\./.test(ee)||"BUN"===t3&&((e=b.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));rd=function(e,t){var r=t?2:1;return rg?function(n,o){var a=t2(arguments.length,1)>r,s=W(n)?n:rv(n),c=a?t1(arguments,r):[],u=a?function(){tY(s,this,c)}:s;return t?e(u,o):e(u)}:e};var ry=b.setImmediate?rd(rh,!1):rh;m({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==ry},{setImmediate:ry});var rm=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function f(e,r,n,a){var s,c,u,l,f=Object.create((r&&r.prototype instanceof y?r:y).prototype);return o(f,"_invoke",{value:(s=e,c=n,u=new L(a||[]),l=h,function(e,r){if(l===d)throw Error("Generator is already running");if(l===v){if("throw"===e)throw r;return{value:t,done:!0}}for(u.method=e,u.arg=r;;){var n=u.delegate;if(n){var o=function e(r,n){var o=n.method,a=r.iterator[o];if(a===t)return(n.delegate=null,"throw"===o&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?g:("return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),g);var s=p(a,r.iterator,n.arg);if("throw"===s.type)return n.method="throw",n.arg=s.arg,n.delegate=null,g;var c=s.arg;return c?c.done?(n[r.resultName]=c.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(n,u);if(o){if(o===g)continue;return o}}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if(l===h)throw l=v,u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);l=d;var a=p(s,c,u);if("normal"===a.type){if(l=u.done?v:"suspendedYield",a.arg===g)continue;return{value:a.arg,done:u.done}}"throw"===a.type&&(l=v,u.method="throw",u.arg=a.arg)}})}),f}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=f;var h="suspendedStart",d="executing",v="completed",g={};function y(){}function m(){}function b(){}var _={};l(_,s,function(){return this});var w=Object.getPrototypeOf,E=w&&w(w(k([])));E&&E!==r&&n.call(E,s)&&(_=E);var $=b.prototype=y.prototype=Object.create(_);function S(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function P(e,t){var r;o(this,"_invoke",{value:function(o,a){function s(){return new t(function(r,s){!function r(o,a,s,c){var u=p(e[o],e,a);if("throw"===u.type)c(u.arg);else{var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,s,c)},function(e){r("throw",e,s,c)}):t.resolve(f).then(function(e){l.value=e,s(l)},function(e){return r("throw",e,s,c)})}}(o,a,r,s)})}return r=r?r.then(s,s):s()}})}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function k(e){if(null!=e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return m.prototype=b,o($,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:m,configurable:!0}),m.displayName=l(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,u,"GeneratorFunction")),e.prototype=Object.create($),e},e.awrap=function(e){return{__await:e}},S(P.prototype),l(P.prototype,c,function(){return this}),e.AsyncIterator=P,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var s=new P(f(t,r,n,o),a);return e.isGeneratorFunction(r)?s:s.next().then(function(e){return e.done?e.value:s.next()})},S($),l($,u,"Generator"),l($,s,function(){return this}),l($,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=k,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],c=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var u=n.call(s,"catchLoc"),l=n.call(s,"finallyLoc");if(u&&l){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);else if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else if(l){if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return(s.type=e,s.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:k(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rm}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rm:Function("r","regeneratorRuntime = r")(rm)}const rb="https://forkify-api.herokuapp.com/api/v2/recipes",r_=async function(e){try{let t=fetch(e),r=await Promise.race([t,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),n=await r.json();if(!r.ok)throw Error(`${n.message} (${r.status})`);return n}catch(e){throw e}},rw={recipe:{},search:{query:"",page:1,results:[],resultsPerPage:10}},rE=async function(e){try{let{recipe:t}=(await r_(`${rb}/${e}`)).data;rw.recipe={id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.sourceUrl,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients}}catch(e){throw console.error(`${e} \u{274C}\u{274C}`),e}},r$=async function(e){try{rw.search.query=e;let t=await r_(`${rb}?search=${e}`);rw.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,sourceUrl:e.sourceUrl,image:e.image_url}))}catch(e){throw console.error(e),e}};r$("pizza");const rS=function(e=rw.search.page){rw.search.page=e;let t=(e-1)*rw.search.resultsPerPage,r=e*rw.search.resultsPerPage;return rw.search.results.slice(t,r)},rP=function(e){rw.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rw.recipe.servings}),rw.recipe.servings=e};var rj={};rj=import.meta.resolve("eyyUD");var rO={};function rL(e,t,r,n,o){var a,s,c,u;let l=[2,3,5];if(!0===o)for(i=3;i*i<=e;i+=2)e%i==0&&l.push(i);let f=0,p=e,h=t;for(;f<=l.length;)p%l[f]==0&&h%l[f]==0?(l[f],p/=l[f],h/=l[f]):f++;return a=h,s=p,c=r,u=n,1===a&&1===s?(c=`${u}${(parseInt(c)+1).toString()}`,`${c}`):0===s?`${u}${c}`:"0"==c?`${u}${s}/${a}`:`${u}${c} ${s}/${a}`}rO=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Float Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),o=n.split("."),a=o[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?o[1].slice(0,o[1].length-1):o[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let s=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!s||!(r.length>2)){var c,u,l;return c=r,u=a,l=t,rL(parseInt(c,10),Math.pow(10,c.length),u,l,!1)}if(patternSequence=s[0].split("").reverse().join(""),(endPattern=s[1].split("").reverse().join("")).length>1){let e=endPattern.split(""),t=1;for(i=0;i<e.length;i++)t/=e[0]/e[i];1===t&&(endPattern=e[0])}return endPattern.length>1&&endPattern.length%2==0&&(endPattern=parseInt(endPattern.slice(0,endPattern.length/2),10)-parseInt(endPattern.slice(endPattern.length/2,endPattern.length),10)==0?endPattern.slice(0,endPattern.length/2):endPattern),function(e,t,r,n,o){let a=e.length-r.length>=1?e.length-r.length:1,s=Math.pow(10,a),c=parseFloat(`0.${e}`),u=Math.pow(10,t.length);return rL(Math.round((c*u-c)*Math.pow(10,a)),(u-1)*s,n,o,!0)}(r,endPattern,patternSequence,a,t)};class rk{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}renderSpinner=function(){let e=`
        <div class="spinner">
          <svg>
            <use href="${y(rj)}#icon-loader"></use>
          </svg>
        </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)};renderError(e=this._errorMessage){let t=`
           <div class="error">
             <div>
               <svg>
                 <use href="${y(rj)}#icon-alert-triangle"></use>
               </svg>
             </div>
                <p>${e}</p>
           </div>
           `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
           <div class="message">
             <div>
               <svg>
                 <use href="${y(rj)}#icon-smile"></use>
               </svg>
             </div>
                <p>${e}</p>
           </div>
           `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}class rM extends rk{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}_generateMarkup(){return`
    <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.titlethis}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${y(rj)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${y(rj)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${y(rj)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${y(rj)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
           
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${y(rj)}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
            </div>

         

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `}_generateMarkupIngredient(e){return`
                <li class="recipe__ingredient">
                  <svg class="recipe__icon">
                    <use href="${y(rj)}#icon-check"></use>
                  </svg>
                      <div class="recipe__quantity">${e.quantity?y(rO)(e.quantity):""}</div>
                  <div class="recipe__description">
                    <span class="recipe__unit">${e.unit}</span>
                    ${e.description}
                  </div>
                </li>`}}var rx=new rM;class rT{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rI=new rT;class rN extends rk{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){return`
 <li class="preview">
         <a class="preview__link" href="#${e.id}">
           <figure class="preview__fig">
             <img src="${e.image}" alt="Test" />
           </figure>
           <div class="preview__data">
             <h4 class="preview__title">${e.title}</h4>
             <p class="preview__publisher">${e.publisher}</p>
             
           </div>
         </a>
       </li>
 `}}var rF=new rN;class rD extends rk{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;console.log(r);let n=+r.dataset.goto;console.log(n),e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(console.log(t),1===e&&t>1)?`
      <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
      <span>Page${e+1}</span>
          <svg class="search__icon">
            <use href="${y(rj)}#icon-arrow-right"></use>
          </svg>
      </button>
      `:e===t&&t>1?`
       <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
               <use href="${y(rj)}#icon-arrow-left"></use>
          </svg>
          <span>Page${e-1}</span>
        </button>`:e<t?`
      <button  data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
               <use href="${y(rj)}#icon-arrow-left"></use>
          </svg>
          <span>Page${e-1}</span>
      </button>

            <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
      <span>Page${e+1}</span>
          <svg class="search__icon">
            <use href="${y(rj)}#icon-arrow-right"></use>
          </svg>
      </button>
      `:"only 1 page"}}var rq=new rD;const rC=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rx.renderSpinner(),await rE(e),rx.render(rw.recipe)}catch(e){rx.renderError()}},rH=async function(){try{rF.renderSpinner();let e=rI.getQuery();if(!e)return;await r$(e),rF.render(rS(1)),rq.render(rw.search)}catch(e){console.error(e)}};rx.addHandlerRender(rC),rx.addHandlerUpdateServings(function(e){rP(e),rx.render(rw.recipe)}),rI.addHandlerSearch(rH),rq.addHandlerClick(function(e){rF.render(rS(e)),rq.render(rw.search)});
//# sourceMappingURL=Forkify-App.7702bd29.js.map
