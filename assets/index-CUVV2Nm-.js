function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HomePage-DU4K_jj0.js","assets/Hero-DAv-3ch_.js","assets/Teachers-Cz-TxdPk.js","assets/Teachers.styled-BaR2Y7st.js","assets/SignUp.styled-Dw91TqAQ.js","assets/Favorites-E45_1Gce.js","assets/LoginPage-BHBcUQql.js","assets/RegisterPage-B1V4eZLe.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
function qS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function YS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var nv={exports:{}},tu={},rv={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=Symbol.for("react.element"),QS=Symbol.for("react.portal"),XS=Symbol.for("react.fragment"),JS=Symbol.for("react.strict_mode"),ZS=Symbol.for("react.profiler"),e1=Symbol.for("react.provider"),t1=Symbol.for("react.context"),n1=Symbol.for("react.forward_ref"),r1=Symbol.for("react.suspense"),i1=Symbol.for("react.memo"),s1=Symbol.for("react.lazy"),Gp=Symbol.iterator;function o1(t){return t===null||typeof t!="object"?null:(t=Gp&&t[Gp]||t["@@iterator"],typeof t=="function"?t:null)}var iv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sv=Object.assign,ov={};function qi(t,e,n){this.props=t,this.context=e,this.refs=ov,this.updater=n||iv}qi.prototype.isReactComponent={};qi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function av(){}av.prototype=qi.prototype;function bf(t,e,n){this.props=t,this.context=e,this.refs=ov,this.updater=n||iv}var Af=bf.prototype=new av;Af.constructor=bf;sv(Af,qi.prototype);Af.isPureReactComponent=!0;var Kp=Array.isArray,lv=Object.prototype.hasOwnProperty,Df={current:null},uv={key:!0,ref:!0,__self:!0,__source:!0};function cv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)lv.call(e,r)&&!uv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Oo,type:t,key:s,ref:o,props:i,_owner:Df.current}}function a1(t,e){return{$$typeof:Oo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Lf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oo}function l1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qp=/\/+/g;function qu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?l1(""+t.key):e.toString(36)}function Ea(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oo:case QS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+qu(o,0):r,Kp(i)?(n="",t!=null&&(n=t.replace(qp,"$&/")+"/"),Ea(i,e,n,"",function(u){return u})):i!=null&&(Lf(i)&&(i=a1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(qp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Kp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+qu(s,a);o+=Ea(s,e,n,l,i)}else if(l=o1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+qu(s,a++),o+=Ea(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Yo(t,e,n){if(t==null)return t;var r=[],i=0;return Ea(t,r,"","",function(s){return e.call(n,s,i++)}),r}function u1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ge={current:null},Sa={transition:null},c1={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Sa,ReactCurrentOwner:Df};W.Children={map:Yo,forEach:function(t,e,n){Yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yo(t,function(){e++}),e},toArray:function(t){return Yo(t,function(e){return e})||[]},only:function(t){if(!Lf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=qi;W.Fragment=XS;W.Profiler=ZS;W.PureComponent=bf;W.StrictMode=JS;W.Suspense=r1;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c1;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=sv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Df.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)lv.call(e,l)&&!uv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Oo,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:t1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:e1,_context:t},t.Consumer=t};W.createElement=cv;W.createFactory=function(t){var e=cv.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:n1,render:t}};W.isValidElement=Lf;W.lazy=function(t){return{$$typeof:s1,_payload:{_status:-1,_result:t},_init:u1}};W.memo=function(t,e){return{$$typeof:i1,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=Sa.transition;Sa.transition={};try{t()}finally{Sa.transition=e}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(t,e){return Ge.current.useCallback(t,e)};W.useContext=function(t){return Ge.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return Ge.current.useDeferredValue(t)};W.useEffect=function(t,e){return Ge.current.useEffect(t,e)};W.useId=function(){return Ge.current.useId()};W.useImperativeHandle=function(t,e,n){return Ge.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return Ge.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return Ge.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return Ge.current.useMemo(t,e)};W.useReducer=function(t,e,n){return Ge.current.useReducer(t,e,n)};W.useRef=function(t){return Ge.current.useRef(t)};W.useState=function(t){return Ge.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return Ge.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return Ge.current.useTransition()};W.version="18.2.0";rv.exports=W;var T=rv.exports;const D=YS(T),Hc=qS({__proto__:null,default:D},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d1=T,f1=Symbol.for("react.element"),h1=Symbol.for("react.fragment"),p1=Object.prototype.hasOwnProperty,m1=d1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g1={key:!0,ref:!0,__self:!0,__source:!0};function dv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)p1.call(e,r)&&!g1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:f1,type:t,key:s,ref:o,props:i,_owner:m1.current}}tu.Fragment=h1;tu.jsx=dv;tu.jsxs=dv;nv.exports=tu;var M=nv.exports,Gc={},fv={exports:{}},mt={},hv={exports:{}},pv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,b){var A=R.length;R.push(b);e:for(;0<A;){var V=A-1>>>1,$=R[V];if(0<i($,b))R[V]=b,R[A]=$,A=V;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var b=R[0],A=R.pop();if(A!==b){R[0]=A;e:for(var V=0,$=R.length,me=$>>>1;V<me;){var oe=2*(V+1)-1,ve=R[oe],he=oe+1,Be=R[he];if(0>i(ve,A))he<$&&0>i(Be,ve)?(R[V]=Be,R[he]=A,V=he):(R[V]=ve,R[oe]=A,V=oe);else if(he<$&&0>i(Be,A))R[V]=Be,R[he]=A,V=he;else break e}}return b}function i(R,b){var A=R.sortIndex-b.sortIndex;return A!==0?A:R.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,_=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(R){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=R)r(u),b.sortIndex=b.expirationTime,e(l,b);else break;b=n(u)}}function v(R){if(y=!1,p(R),!_)if(n(l)!==null)_=!0,Wt(E);else{var b=n(u);b!==null&&Ne(v,b.startTime-R)}}function E(R,b){_=!1,y&&(y=!1,m(I),I=-1),g=!0;var A=f;try{for(p(b),d=n(l);d!==null&&(!(d.expirationTime>b)||R&&!Q());){var V=d.callback;if(typeof V=="function"){d.callback=null,f=d.priorityLevel;var $=V(d.expirationTime<=b);b=t.unstable_now(),typeof $=="function"?d.callback=$:d===n(l)&&r(l),p(b)}else r(l);d=n(l)}if(d!==null)var me=!0;else{var oe=n(u);oe!==null&&Ne(v,oe.startTime-b),me=!1}return me}finally{d=null,f=A,g=!1}}var C=!1,S=null,I=-1,N=5,x=-1;function Q(){return!(t.unstable_now()-x<N)}function De(){if(S!==null){var R=t.unstable_now();x=R;var b=!0;try{b=S(!0,R)}finally{b?qe():(C=!1,S=null)}}else C=!1}var qe;if(typeof h=="function")qe=function(){h(De)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,Bt=it.port2;it.port1.onmessage=De,qe=function(){Bt.postMessage(null)}}else qe=function(){w(De,0)};function Wt(R){S=R,C||(C=!0,qe())}function Ne(R,b){I=w(function(){R(t.unstable_now())},b)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Wt(E))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var b=3;break;default:b=f}var A=f;f=b;try{return R()}finally{f=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,b){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var A=f;f=R;try{return b()}finally{f=A}},t.unstable_scheduleCallback=function(R,b,A){var V=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?V+A:V):A=V,R){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=A+$,R={id:c++,callback:b,priorityLevel:R,startTime:A,expirationTime:$,sortIndex:-1},A>V?(R.sortIndex=A,e(u,R),n(l)===null&&R===n(u)&&(y?(m(I),I=-1):y=!0,Ne(v,A-V))):(R.sortIndex=$,e(l,R),_||g||(_=!0,Wt(E))),R},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(R){var b=f;return function(){var A=f;f=b;try{return R.apply(this,arguments)}finally{f=A}}}})(pv);hv.exports=pv;var _1=hv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv=T,ft=_1;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gv=new Set,Bs={};function Gr(t,e){Ni(t,e),Ni(t+"Capture",e)}function Ni(t,e){for(Bs[t]=e,t=0;t<e.length;t++)gv.add(e[t])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=Object.prototype.hasOwnProperty,v1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yp={},Qp={};function y1(t){return Kc.call(Qp,t)?!0:Kc.call(Yp,t)?!1:v1.test(t)?Qp[t]=!0:(Yp[t]=!0,!1)}function w1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E1(t,e,n,r){if(e===null||typeof e>"u"||w1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ke(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ae[t]=new Ke(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ae[e]=new Ke(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ae[t]=new Ke(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ae[t]=new Ke(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ae[t]=new Ke(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ae[t]=new Ke(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ae[t]=new Ke(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ae[t]=new Ke(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ae[t]=new Ke(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mf=/[\-:]([a-z])/g;function Ff(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mf,Ff);Ae[e]=new Ke(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mf,Ff);Ae[e]=new Ke(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mf,Ff);Ae[e]=new Ke(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ae[t]=new Ke(t,1,!1,t.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ae[t]=new Ke(t,1,!1,t.toLowerCase(),null,!0,!0)});function Uf(t,e,n,r){var i=Ae.hasOwnProperty(e)?Ae[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(E1(e,n,i,r)&&(n=null),r||i===null?y1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var vn=mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qo=Symbol.for("react.element"),ti=Symbol.for("react.portal"),ni=Symbol.for("react.fragment"),$f=Symbol.for("react.strict_mode"),qc=Symbol.for("react.profiler"),_v=Symbol.for("react.provider"),vv=Symbol.for("react.context"),zf=Symbol.for("react.forward_ref"),Yc=Symbol.for("react.suspense"),Qc=Symbol.for("react.suspense_list"),jf=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),yv=Symbol.for("react.offscreen"),Xp=Symbol.iterator;function os(t){return t===null||typeof t!="object"?null:(t=Xp&&t[Xp]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Object.assign,Yu;function vs(t){if(Yu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yu=e&&e[1]||""}return`
`+Yu+t}var Qu=!1;function Xu(t,e){if(!t||Qu)return"";Qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Qu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vs(t):""}function S1(t){switch(t.tag){case 5:return vs(t.type);case 16:return vs("Lazy");case 13:return vs("Suspense");case 19:return vs("SuspenseList");case 0:case 2:case 15:return t=Xu(t.type,!1),t;case 11:return t=Xu(t.type.render,!1),t;case 1:return t=Xu(t.type,!0),t;default:return""}}function Xc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ni:return"Fragment";case ti:return"Portal";case qc:return"Profiler";case $f:return"StrictMode";case Yc:return"Suspense";case Qc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vv:return(t.displayName||"Context")+".Consumer";case _v:return(t._context.displayName||"Context")+".Provider";case zf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jf:return e=t.displayName||null,e!==null?e:Xc(t.type)||"Memo";case Pn:e=t._payload,t=t._init;try{return Xc(t(e))}catch{}}return null}function C1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xc(e);case 8:return e===$f?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function I1(t){var e=wv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xo(t){t._valueTracker||(t._valueTracker=I1(t))}function Ev(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=wv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function qa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jc(t,e){var n=e.checked;return ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sv(t,e){e=e.checked,e!=null&&Uf(t,"checked",e,!1)}function Zc(t,e){Sv(t,e);var n=Xn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ed(t,e.type,n):e.hasOwnProperty("defaultValue")&&ed(t,e.type,Xn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ed(t,e,n){(e!=="number"||qa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ys=Array.isArray;function _i(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function td(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function em(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(ys(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xn(n)}}function Cv(t,e){var n=Xn(e.value),r=Xn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function tm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Iv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Iv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Jo,Tv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Jo=Jo||document.createElement("div"),Jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Jo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ws(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T1=["Webkit","ms","Moz","O"];Object.keys(ks).forEach(function(t){T1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ks[e]=ks[t]})});function kv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ks.hasOwnProperty(t)&&ks[t]?(""+e).trim():e+"px"}function Pv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=kv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var k1=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rd(t,e){if(e){if(k1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function id(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sd=null;function Bf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var od=null,vi=null,yi=null;function nm(t){if(t=Ao(t)){if(typeof od!="function")throw Error(k(280));var e=t.stateNode;e&&(e=ou(e),od(t.stateNode,t.type,e))}}function Rv(t){vi?yi?yi.push(t):yi=[t]:vi=t}function Nv(){if(vi){var t=vi,e=yi;if(yi=vi=null,nm(t),e)for(t=0;t<e.length;t++)nm(e[t])}}function Ov(t,e){return t(e)}function xv(){}var Ju=!1;function bv(t,e,n){if(Ju)return t(e,n);Ju=!0;try{return Ov(t,e,n)}finally{Ju=!1,(vi!==null||yi!==null)&&(xv(),Nv())}}function Vs(t,e){var n=t.stateNode;if(n===null)return null;var r=ou(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var ad=!1;if(dn)try{var as={};Object.defineProperty(as,"passive",{get:function(){ad=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{ad=!1}function P1(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ps=!1,Ya=null,Qa=!1,ld=null,R1={onError:function(t){Ps=!0,Ya=t}};function N1(t,e,n,r,i,s,o,a,l){Ps=!1,Ya=null,P1.apply(R1,arguments)}function O1(t,e,n,r,i,s,o,a,l){if(N1.apply(this,arguments),Ps){if(Ps){var u=Ya;Ps=!1,Ya=null}else throw Error(k(198));Qa||(Qa=!0,ld=u)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Av(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function rm(t){if(Kr(t)!==t)throw Error(k(188))}function x1(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return rm(i),t;if(s===r)return rm(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function Dv(t){return t=x1(t),t!==null?Lv(t):null}function Lv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Lv(t);if(e!==null)return e;t=t.sibling}return null}var Mv=ft.unstable_scheduleCallback,im=ft.unstable_cancelCallback,b1=ft.unstable_shouldYield,A1=ft.unstable_requestPaint,pe=ft.unstable_now,D1=ft.unstable_getCurrentPriorityLevel,Wf=ft.unstable_ImmediatePriority,Fv=ft.unstable_UserBlockingPriority,Xa=ft.unstable_NormalPriority,L1=ft.unstable_LowPriority,Uv=ft.unstable_IdlePriority,nu=null,qt=null;function M1(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(nu,t,void 0,(t.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:$1,F1=Math.log,U1=Math.LN2;function $1(t){return t>>>=0,t===0?32:31-(F1(t)/U1|0)|0}var Zo=64,ea=4194304;function ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ja(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ws(a):(s&=o,s!==0&&(r=ws(s)))}else o=n&~i,o!==0?r=ws(o):s!==0&&(r=ws(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Dt(e),i=1<<n,r|=t[n],e&=~i;return r}function z1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Dt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=z1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ud(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $v(){var t=Zo;return Zo<<=1,!(Zo&4194240)&&(Zo=64),t}function Zu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Dt(e),t[e]=n}function B1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Vf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function zv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jv,Hf,Bv,Wv,Vv,cd=!1,ta=[],$n=null,zn=null,jn=null,Hs=new Map,Gs=new Map,Nn=[],W1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sm(t,e){switch(t){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":Hs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gs.delete(e.pointerId)}}function ls(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ao(e),e!==null&&Hf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function V1(t,e,n,r,i){switch(e){case"focusin":return $n=ls($n,t,e,n,r,i),!0;case"dragenter":return zn=ls(zn,t,e,n,r,i),!0;case"mouseover":return jn=ls(jn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Hs.set(s,ls(Hs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Gs.set(s,ls(Gs.get(s)||null,t,e,n,r,i)),!0}return!1}function Hv(t){var e=wr(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=Av(n),e!==null){t.blockedOn=e,Vv(t.priority,function(){Bv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ca(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=dd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);sd=r,n.target.dispatchEvent(r),sd=null}else return e=Ao(n),e!==null&&Hf(e),t.blockedOn=n,!1;e.shift()}return!0}function om(t,e,n){Ca(t)&&n.delete(e)}function H1(){cd=!1,$n!==null&&Ca($n)&&($n=null),zn!==null&&Ca(zn)&&(zn=null),jn!==null&&Ca(jn)&&(jn=null),Hs.forEach(om),Gs.forEach(om)}function us(t,e){t.blockedOn===e&&(t.blockedOn=null,cd||(cd=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,H1)))}function Ks(t){function e(i){return us(i,t)}if(0<ta.length){us(ta[0],t);for(var n=1;n<ta.length;n++){var r=ta[n];r.blockedOn===t&&(r.blockedOn=null)}}for($n!==null&&us($n,t),zn!==null&&us(zn,t),jn!==null&&us(jn,t),Hs.forEach(e),Gs.forEach(e),n=0;n<Nn.length;n++)r=Nn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)Hv(n),n.blockedOn===null&&Nn.shift()}var wi=vn.ReactCurrentBatchConfig,Za=!0;function G1(t,e,n,r){var i=Y,s=wi.transition;wi.transition=null;try{Y=1,Gf(t,e,n,r)}finally{Y=i,wi.transition=s}}function K1(t,e,n,r){var i=Y,s=wi.transition;wi.transition=null;try{Y=4,Gf(t,e,n,r)}finally{Y=i,wi.transition=s}}function Gf(t,e,n,r){if(Za){var i=dd(t,e,n,r);if(i===null)uc(t,e,r,el,n),sm(t,r);else if(V1(i,t,e,n,r))r.stopPropagation();else if(sm(t,r),e&4&&-1<W1.indexOf(t)){for(;i!==null;){var s=Ao(i);if(s!==null&&jv(s),s=dd(t,e,n,r),s===null&&uc(t,e,r,el,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else uc(t,e,r,null,n)}}var el=null;function dd(t,e,n,r){if(el=null,t=Bf(r),t=wr(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Av(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return el=t,null}function Gv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D1()){case Wf:return 1;case Fv:return 4;case Xa:case L1:return 16;case Uv:return 536870912;default:return 16}default:return 16}}var Ln=null,Kf=null,Ia=null;function Kv(){if(Ia)return Ia;var t,e=Kf,n=e.length,r,i="value"in Ln?Ln.value:Ln.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ia=i.slice(t,1<r?1-r:void 0)}function Ta(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function na(){return!0}function am(){return!1}function gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?na:am,this.isPropagationStopped=am,this}return ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),e}var Yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qf=gt(Yi),bo=ce({},Yi,{view:0,detail:0}),q1=gt(bo),ec,tc,cs,ru=ce({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==cs&&(cs&&t.type==="mousemove"?(ec=t.screenX-cs.screenX,tc=t.screenY-cs.screenY):tc=ec=0,cs=t),ec)},movementY:function(t){return"movementY"in t?t.movementY:tc}}),lm=gt(ru),Y1=ce({},ru,{dataTransfer:0}),Q1=gt(Y1),X1=ce({},bo,{relatedTarget:0}),nc=gt(X1),J1=ce({},Yi,{animationName:0,elapsedTime:0,pseudoElement:0}),Z1=gt(J1),eC=ce({},Yi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tC=gt(eC),nC=ce({},Yi,{data:0}),um=gt(nC),rC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sC[t])?!!e[t]:!1}function Yf(){return oC}var aC=ce({},bo,{key:function(t){if(t.key){var e=rC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ta(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yf,charCode:function(t){return t.type==="keypress"?Ta(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ta(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lC=gt(aC),uC=ce({},ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cm=gt(uC),cC=ce({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yf}),dC=gt(cC),fC=ce({},Yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),hC=gt(fC),pC=ce({},ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mC=gt(pC),gC=[9,13,27,32],Qf=dn&&"CompositionEvent"in window,Rs=null;dn&&"documentMode"in document&&(Rs=document.documentMode);var _C=dn&&"TextEvent"in window&&!Rs,qv=dn&&(!Qf||Rs&&8<Rs&&11>=Rs),dm=" ",fm=!1;function Yv(t,e){switch(t){case"keyup":return gC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ri=!1;function vC(t,e){switch(t){case"compositionend":return Qv(e);case"keypress":return e.which!==32?null:(fm=!0,dm);case"textInput":return t=e.data,t===dm&&fm?null:t;default:return null}}function yC(t,e){if(ri)return t==="compositionend"||!Qf&&Yv(t,e)?(t=Kv(),Ia=Kf=Ln=null,ri=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qv&&e.locale!=="ko"?null:e.data;default:return null}}var wC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wC[t.type]:e==="textarea"}function Xv(t,e,n,r){Rv(r),e=tl(e,"onChange"),0<e.length&&(n=new qf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ns=null,qs=null;function EC(t){ly(t,0)}function iu(t){var e=oi(t);if(Ev(e))return t}function SC(t,e){if(t==="change")return e}var Jv=!1;if(dn){var rc;if(dn){var ic="oninput"in document;if(!ic){var pm=document.createElement("div");pm.setAttribute("oninput","return;"),ic=typeof pm.oninput=="function"}rc=ic}else rc=!1;Jv=rc&&(!document.documentMode||9<document.documentMode)}function mm(){Ns&&(Ns.detachEvent("onpropertychange",Zv),qs=Ns=null)}function Zv(t){if(t.propertyName==="value"&&iu(qs)){var e=[];Xv(e,qs,t,Bf(t)),bv(EC,e)}}function CC(t,e,n){t==="focusin"?(mm(),Ns=e,qs=n,Ns.attachEvent("onpropertychange",Zv)):t==="focusout"&&mm()}function IC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return iu(qs)}function TC(t,e){if(t==="click")return iu(e)}function kC(t,e){if(t==="input"||t==="change")return iu(e)}function PC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $t=typeof Object.is=="function"?Object.is:PC;function Ys(t,e){if($t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kc.call(e,i)||!$t(t[i],e[i]))return!1}return!0}function gm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _m(t,e){var n=gm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gm(n)}}function ey(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ey(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ty(){for(var t=window,e=qa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qa(t.document)}return e}function Xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function RC(t){var e=ty(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ey(n.ownerDocument.documentElement,n)){if(r!==null&&Xf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=_m(n,s);var o=_m(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var NC=dn&&"documentMode"in document&&11>=document.documentMode,ii=null,fd=null,Os=null,hd=!1;function vm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hd||ii==null||ii!==qa(r)||(r=ii,"selectionStart"in r&&Xf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Os&&Ys(Os,r)||(Os=r,r=tl(fd,"onSelect"),0<r.length&&(e=new qf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ii)))}function ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var si={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},sc={},ny={};dn&&(ny=document.createElement("div").style,"AnimationEvent"in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),"TransitionEvent"in window||delete si.transitionend.transition);function su(t){if(sc[t])return sc[t];if(!si[t])return t;var e=si[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ny)return sc[t]=e[n];return t}var ry=su("animationend"),iy=su("animationiteration"),sy=su("animationstart"),oy=su("transitionend"),ay=new Map,ym="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(t,e){ay.set(t,e),Gr(e,[t])}for(var oc=0;oc<ym.length;oc++){var ac=ym[oc],OC=ac.toLowerCase(),xC=ac[0].toUpperCase()+ac.slice(1);ar(OC,"on"+xC)}ar(ry,"onAnimationEnd");ar(iy,"onAnimationIteration");ar(sy,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(oy,"onTransitionEnd");Ni("onMouseEnter",["mouseout","mouseover"]);Ni("onMouseLeave",["mouseout","mouseover"]);Ni("onPointerEnter",["pointerout","pointerover"]);Ni("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Es="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Es));function wm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,O1(r,e,void 0,t),t.currentTarget=null}function ly(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;wm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;wm(i,a,u),s=l}}}if(Qa)throw t=ld,Qa=!1,ld=null,t}function ee(t,e){var n=e[vd];n===void 0&&(n=e[vd]=new Set);var r=t+"__bubble";n.has(r)||(uy(e,t,2,!1),n.add(r))}function lc(t,e,n){var r=0;e&&(r|=4),uy(n,t,r,e)}var ia="_reactListening"+Math.random().toString(36).slice(2);function Qs(t){if(!t[ia]){t[ia]=!0,gv.forEach(function(n){n!=="selectionchange"&&(bC.has(n)||lc(n,!1,t),lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ia]||(e[ia]=!0,lc("selectionchange",!1,e))}}function uy(t,e,n,r){switch(Gv(e)){case 1:var i=G1;break;case 4:i=K1;break;default:i=Gf}n=i.bind(null,e,n,t),i=void 0,!ad||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function uc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=wr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}bv(function(){var u=s,c=Bf(n),d=[];e:{var f=ay.get(t);if(f!==void 0){var g=qf,_=t;switch(t){case"keypress":if(Ta(n)===0)break e;case"keydown":case"keyup":g=lC;break;case"focusin":_="focus",g=nc;break;case"focusout":_="blur",g=nc;break;case"beforeblur":case"afterblur":g=nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=lm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Q1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=dC;break;case ry:case iy:case sy:g=Z1;break;case oy:g=hC;break;case"scroll":g=q1;break;case"wheel":g=mC;break;case"copy":case"cut":case"paste":g=tC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=cm}var y=(e&4)!==0,w=!y&&t==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var h=u,p;h!==null;){p=h;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,m!==null&&(v=Vs(h,m),v!=null&&y.push(Xs(h,v,p)))),w)break;h=h.return}0<y.length&&(f=new g(f,_,null,n,c),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==sd&&(_=n.relatedTarget||n.fromElement)&&(wr(_)||_[fn]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?wr(_):null,_!==null&&(w=Kr(_),_!==w||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(y=lm,v="onMouseLeave",m="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(y=cm,v="onPointerLeave",m="onPointerEnter",h="pointer"),w=g==null?f:oi(g),p=_==null?f:oi(_),f=new y(v,h+"leave",g,n,c),f.target=w,f.relatedTarget=p,v=null,wr(c)===u&&(y=new y(m,h+"enter",_,n,c),y.target=p,y.relatedTarget=w,v=y),w=v,g&&_)t:{for(y=g,m=_,h=0,p=y;p;p=Jr(p))h++;for(p=0,v=m;v;v=Jr(v))p++;for(;0<h-p;)y=Jr(y),h--;for(;0<p-h;)m=Jr(m),p--;for(;h--;){if(y===m||m!==null&&y===m.alternate)break t;y=Jr(y),m=Jr(m)}y=null}else y=null;g!==null&&Em(d,f,g,y,!1),_!==null&&w!==null&&Em(d,w,_,y,!0)}}e:{if(f=u?oi(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var E=SC;else if(hm(f))if(Jv)E=kC;else{E=IC;var C=CC}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=TC);if(E&&(E=E(t,u))){Xv(d,E,n,c);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&ed(f,"number",f.value)}switch(C=u?oi(u):window,t){case"focusin":(hm(C)||C.contentEditable==="true")&&(ii=C,fd=u,Os=null);break;case"focusout":Os=fd=ii=null;break;case"mousedown":hd=!0;break;case"contextmenu":case"mouseup":case"dragend":hd=!1,vm(d,n,c);break;case"selectionchange":if(NC)break;case"keydown":case"keyup":vm(d,n,c)}var S;if(Qf)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else ri?Yv(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(qv&&n.locale!=="ko"&&(ri||I!=="onCompositionStart"?I==="onCompositionEnd"&&ri&&(S=Kv()):(Ln=c,Kf="value"in Ln?Ln.value:Ln.textContent,ri=!0)),C=tl(u,I),0<C.length&&(I=new um(I,t,null,n,c),d.push({event:I,listeners:C}),S?I.data=S:(S=Qv(n),S!==null&&(I.data=S)))),(S=_C?vC(t,n):yC(t,n))&&(u=tl(u,"onBeforeInput"),0<u.length&&(c=new um("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=S))}ly(d,e)})}function Xs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Vs(t,n),s!=null&&r.unshift(Xs(t,s,i)),s=Vs(t,e),s!=null&&r.push(Xs(t,s,i))),t=t.return}return r}function Jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Em(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Vs(n,s),l!=null&&o.unshift(Xs(n,l,a))):i||(l=Vs(n,s),l!=null&&o.push(Xs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var AC=/\r\n?/g,DC=/\u0000|\uFFFD/g;function Sm(t){return(typeof t=="string"?t:""+t).replace(AC,`
`).replace(DC,"")}function sa(t,e,n){if(e=Sm(e),Sm(t)!==e&&n)throw Error(k(425))}function nl(){}var pd=null,md=null;function gd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _d=typeof setTimeout=="function"?setTimeout:void 0,LC=typeof clearTimeout=="function"?clearTimeout:void 0,Cm=typeof Promise=="function"?Promise:void 0,MC=typeof queueMicrotask=="function"?queueMicrotask:typeof Cm<"u"?function(t){return Cm.resolve(null).then(t).catch(FC)}:_d;function FC(t){setTimeout(function(){throw t})}function cc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ks(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ks(e)}function Bn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Im(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qi=Math.random().toString(36).slice(2),Kt="__reactFiber$"+Qi,Js="__reactProps$"+Qi,fn="__reactContainer$"+Qi,vd="__reactEvents$"+Qi,UC="__reactListeners$"+Qi,$C="__reactHandles$"+Qi;function wr(t){var e=t[Kt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fn]||n[Kt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Im(t);t!==null;){if(n=t[Kt])return n;t=Im(t)}return e}t=n,n=t.parentNode}return null}function Ao(t){return t=t[Kt]||t[fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function oi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function ou(t){return t[Js]||null}var yd=[],ai=-1;function lr(t){return{current:t}}function ie(t){0>ai||(t.current=yd[ai],yd[ai]=null,ai--)}function Z(t,e){ai++,yd[ai]=t.current,t.current=e}var Jn={},ze=lr(Jn),Ze=lr(!1),xr=Jn;function Oi(t,e){var n=t.type.contextTypes;if(!n)return Jn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function et(t){return t=t.childContextTypes,t!=null}function rl(){ie(Ze),ie(ze)}function Tm(t,e,n){if(ze.current!==Jn)throw Error(k(168));Z(ze,e),Z(Ze,n)}function cy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,C1(t)||"Unknown",i));return ce({},n,r)}function il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jn,xr=ze.current,Z(ze,t),Z(Ze,Ze.current),!0}function km(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=cy(t,e,xr),r.__reactInternalMemoizedMergedChildContext=t,ie(Ze),ie(ze),Z(ze,t)):ie(Ze),Z(Ze,n)}var tn=null,au=!1,dc=!1;function dy(t){tn===null?tn=[t]:tn.push(t)}function zC(t){au=!0,dy(t)}function ur(){if(!dc&&tn!==null){dc=!0;var t=0,e=Y;try{var n=tn;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}tn=null,au=!1}catch(i){throw tn!==null&&(tn=tn.slice(t+1)),Mv(Wf,ur),i}finally{Y=e,dc=!1}}return null}var li=[],ui=0,sl=null,ol=0,yt=[],wt=0,br=null,nn=1,rn="";function mr(t,e){li[ui++]=ol,li[ui++]=sl,sl=t,ol=e}function fy(t,e,n){yt[wt++]=nn,yt[wt++]=rn,yt[wt++]=br,br=t;var r=nn;t=rn;var i=32-Dt(r)-1;r&=~(1<<i),n+=1;var s=32-Dt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,nn=1<<32-Dt(e)+i|n<<i|r,rn=s+t}else nn=1<<s|n<<i|r,rn=t}function Jf(t){t.return!==null&&(mr(t,1),fy(t,1,0))}function Zf(t){for(;t===sl;)sl=li[--ui],li[ui]=null,ol=li[--ui],li[ui]=null;for(;t===br;)br=yt[--wt],yt[wt]=null,rn=yt[--wt],yt[wt]=null,nn=yt[--wt],yt[wt]=null}var ct=null,at=null,se=!1,Nt=null;function hy(t,e){var n=Et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Pm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ct=t,at=Bn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ct=t,at=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=br!==null?{id:nn,overflow:rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ct=t,at=null,!0):!1;default:return!1}}function wd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ed(t){if(se){var e=at;if(e){var n=e;if(!Pm(t,e)){if(wd(t))throw Error(k(418));e=Bn(n.nextSibling);var r=ct;e&&Pm(t,e)?hy(r,n):(t.flags=t.flags&-4097|2,se=!1,ct=t)}}else{if(wd(t))throw Error(k(418));t.flags=t.flags&-4097|2,se=!1,ct=t}}}function Rm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ct=t}function oa(t){if(t!==ct)return!1;if(!se)return Rm(t),se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gd(t.type,t.memoizedProps)),e&&(e=at)){if(wd(t))throw py(),Error(k(418));for(;e;)hy(t,e),e=Bn(e.nextSibling)}if(Rm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){at=Bn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}at=null}}else at=ct?Bn(t.stateNode.nextSibling):null;return!0}function py(){for(var t=at;t;)t=Bn(t.nextSibling)}function xi(){at=ct=null,se=!1}function eh(t){Nt===null?Nt=[t]:Nt.push(t)}var jC=vn.ReactCurrentBatchConfig;function Pt(t,e){if(t&&t.defaultProps){e=ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var al=lr(null),ll=null,ci=null,th=null;function nh(){th=ci=ll=null}function rh(t){var e=al.current;ie(al),t._currentValue=e}function Sd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ei(t,e){ll=t,th=ci=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qe=!0),t.firstContext=null)}function Ct(t){var e=t._currentValue;if(th!==t)if(t={context:t,memoizedValue:e,next:null},ci===null){if(ll===null)throw Error(k(308));ci=t,ll.dependencies={lanes:0,firstContext:t}}else ci=ci.next=t;return e}var Er=null;function ih(t){Er===null?Er=[t]:Er.push(t)}function my(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ih(e)):(n.next=i.next,i.next=n),e.interleaved=n,hn(t,r)}function hn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Rn=!1;function sh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,hn(t,n)}return i=r.interleaved,i===null?(e.next=e,ih(r)):(e.next=i.next,i.next=e),r.interleaved=e,hn(t,n)}function ka(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vf(t,n)}}function Nm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ul(t,e,n,r){var i=t.updateQueue;Rn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(f=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(g,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(g,d,f):_,f==null)break e;d=ce({},d,f);break e;case 2:Rn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Dr|=o,t.lanes=o,t.memoizedState=d}}function Om(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var _y=new mv.Component().refs;function Cd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lu={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=He(),i=Hn(t),s=ln(r,i);s.payload=e,n!=null&&(s.callback=n),e=Wn(t,s,i),e!==null&&(Lt(e,t,i,r),ka(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=He(),i=Hn(t),s=ln(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wn(t,s,i),e!==null&&(Lt(e,t,i,r),ka(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=He(),r=Hn(t),i=ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=Wn(t,i,r),e!==null&&(Lt(e,t,r,n),ka(e,t,r))}};function xm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ys(n,r)||!Ys(i,s):!0}function vy(t,e,n){var r=!1,i=Jn,s=e.contextType;return typeof s=="object"&&s!==null?s=Ct(s):(i=et(e)?xr:ze.current,r=e.contextTypes,s=(r=r!=null)?Oi(t,i):Jn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function bm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&lu.enqueueReplaceState(e,e.state,null)}function Id(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=_y,sh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ct(s):(s=et(e)?xr:ze.current,i.context=Oi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&lu.enqueueReplaceState(i,i.state,null),ul(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===_y&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function aa(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Am(t){var e=t._init;return e(t._payload)}function yy(t){function e(m,h){if(t){var p=m.deletions;p===null?(m.deletions=[h],m.flags|=16):p.push(h)}}function n(m,h){if(!t)return null;for(;h!==null;)e(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=Gn(m,h),m.index=0,m.sibling=null,m}function s(m,h,p){return m.index=p,t?(p=m.alternate,p!==null?(p=p.index,p<h?(m.flags|=2,h):p):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,h,p,v){return h===null||h.tag!==6?(h=vc(p,m.mode,v),h.return=m,h):(h=i(h,p),h.return=m,h)}function l(m,h,p,v){var E=p.type;return E===ni?c(m,h,p.props.children,v,p.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Pn&&Am(E)===h.type)?(v=i(h,p.props),v.ref=ds(m,h,p),v.return=m,v):(v=ba(p.type,p.key,p.props,null,m.mode,v),v.ref=ds(m,h,p),v.return=m,v)}function u(m,h,p,v){return h===null||h.tag!==4||h.stateNode.containerInfo!==p.containerInfo||h.stateNode.implementation!==p.implementation?(h=yc(p,m.mode,v),h.return=m,h):(h=i(h,p.children||[]),h.return=m,h)}function c(m,h,p,v,E){return h===null||h.tag!==7?(h=kr(p,m.mode,v,E),h.return=m,h):(h=i(h,p),h.return=m,h)}function d(m,h,p){if(typeof h=="string"&&h!==""||typeof h=="number")return h=vc(""+h,m.mode,p),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Qo:return p=ba(h.type,h.key,h.props,null,m.mode,p),p.ref=ds(m,null,h),p.return=m,p;case ti:return h=yc(h,m.mode,p),h.return=m,h;case Pn:var v=h._init;return d(m,v(h._payload),p)}if(ys(h)||os(h))return h=kr(h,m.mode,p,null),h.return=m,h;aa(m,h)}return null}function f(m,h,p,v){var E=h!==null?h.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(m,h,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qo:return p.key===E?l(m,h,p,v):null;case ti:return p.key===E?u(m,h,p,v):null;case Pn:return E=p._init,f(m,h,E(p._payload),v)}if(ys(p)||os(p))return E!==null?null:c(m,h,p,v,null);aa(m,p)}return null}function g(m,h,p,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(p)||null,a(h,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qo:return m=m.get(v.key===null?p:v.key)||null,l(h,m,v,E);case ti:return m=m.get(v.key===null?p:v.key)||null,u(h,m,v,E);case Pn:var C=v._init;return g(m,h,p,C(v._payload),E)}if(ys(v)||os(v))return m=m.get(p)||null,c(h,m,v,E,null);aa(h,v)}return null}function _(m,h,p,v){for(var E=null,C=null,S=h,I=h=0,N=null;S!==null&&I<p.length;I++){S.index>I?(N=S,S=null):N=S.sibling;var x=f(m,S,p[I],v);if(x===null){S===null&&(S=N);break}t&&S&&x.alternate===null&&e(m,S),h=s(x,h,I),C===null?E=x:C.sibling=x,C=x,S=N}if(I===p.length)return n(m,S),se&&mr(m,I),E;if(S===null){for(;I<p.length;I++)S=d(m,p[I],v),S!==null&&(h=s(S,h,I),C===null?E=S:C.sibling=S,C=S);return se&&mr(m,I),E}for(S=r(m,S);I<p.length;I++)N=g(S,m,I,p[I],v),N!==null&&(t&&N.alternate!==null&&S.delete(N.key===null?I:N.key),h=s(N,h,I),C===null?E=N:C.sibling=N,C=N);return t&&S.forEach(function(Q){return e(m,Q)}),se&&mr(m,I),E}function y(m,h,p,v){var E=os(p);if(typeof E!="function")throw Error(k(150));if(p=E.call(p),p==null)throw Error(k(151));for(var C=E=null,S=h,I=h=0,N=null,x=p.next();S!==null&&!x.done;I++,x=p.next()){S.index>I?(N=S,S=null):N=S.sibling;var Q=f(m,S,x.value,v);if(Q===null){S===null&&(S=N);break}t&&S&&Q.alternate===null&&e(m,S),h=s(Q,h,I),C===null?E=Q:C.sibling=Q,C=Q,S=N}if(x.done)return n(m,S),se&&mr(m,I),E;if(S===null){for(;!x.done;I++,x=p.next())x=d(m,x.value,v),x!==null&&(h=s(x,h,I),C===null?E=x:C.sibling=x,C=x);return se&&mr(m,I),E}for(S=r(m,S);!x.done;I++,x=p.next())x=g(S,m,I,x.value,v),x!==null&&(t&&x.alternate!==null&&S.delete(x.key===null?I:x.key),h=s(x,h,I),C===null?E=x:C.sibling=x,C=x);return t&&S.forEach(function(De){return e(m,De)}),se&&mr(m,I),E}function w(m,h,p,v){if(typeof p=="object"&&p!==null&&p.type===ni&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Qo:e:{for(var E=p.key,C=h;C!==null;){if(C.key===E){if(E=p.type,E===ni){if(C.tag===7){n(m,C.sibling),h=i(C,p.props.children),h.return=m,m=h;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Pn&&Am(E)===C.type){n(m,C.sibling),h=i(C,p.props),h.ref=ds(m,C,p),h.return=m,m=h;break e}n(m,C);break}else e(m,C);C=C.sibling}p.type===ni?(h=kr(p.props.children,m.mode,v,p.key),h.return=m,m=h):(v=ba(p.type,p.key,p.props,null,m.mode,v),v.ref=ds(m,h,p),v.return=m,m=v)}return o(m);case ti:e:{for(C=p.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===p.containerInfo&&h.stateNode.implementation===p.implementation){n(m,h.sibling),h=i(h,p.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else e(m,h);h=h.sibling}h=yc(p,m.mode,v),h.return=m,m=h}return o(m);case Pn:return C=p._init,w(m,h,C(p._payload),v)}if(ys(p))return _(m,h,p,v);if(os(p))return y(m,h,p,v);aa(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,p),h.return=m,m=h):(n(m,h),h=vc(p,m.mode,v),h.return=m,m=h),o(m)):n(m,h)}return w}var bi=yy(!0),wy=yy(!1),Do={},Yt=lr(Do),Zs=lr(Do),eo=lr(Do);function Sr(t){if(t===Do)throw Error(k(174));return t}function oh(t,e){switch(Z(eo,e),Z(Zs,t),Z(Yt,Do),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nd(e,t)}ie(Yt),Z(Yt,e)}function Ai(){ie(Yt),ie(Zs),ie(eo)}function Ey(t){Sr(eo.current);var e=Sr(Yt.current),n=nd(e,t.type);e!==n&&(Z(Zs,t),Z(Yt,n))}function ah(t){Zs.current===t&&(ie(Yt),ie(Zs))}var ae=lr(0);function cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fc=[];function lh(){for(var t=0;t<fc.length;t++)fc[t]._workInProgressVersionPrimary=null;fc.length=0}var Pa=vn.ReactCurrentDispatcher,hc=vn.ReactCurrentBatchConfig,Ar=0,le=null,ye=null,Ce=null,dl=!1,xs=!1,to=0,BC=0;function Le(){throw Error(k(321))}function uh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$t(t[n],e[n]))return!1;return!0}function ch(t,e,n,r,i,s){if(Ar=s,le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pa.current=t===null||t.memoizedState===null?GC:KC,t=n(r,i),xs){s=0;do{if(xs=!1,to=0,25<=s)throw Error(k(301));s+=1,Ce=ye=null,e.updateQueue=null,Pa.current=qC,t=n(r,i)}while(xs)}if(Pa.current=fl,e=ye!==null&&ye.next!==null,Ar=0,Ce=ye=le=null,dl=!1,e)throw Error(k(300));return t}function dh(){var t=to!==0;return to=0,t}function Ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?le.memoizedState=Ce=t:Ce=Ce.next=t,Ce}function It(){if(ye===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=ye.next;var e=Ce===null?le.memoizedState:Ce.next;if(e!==null)Ce=e,ye=t;else{if(t===null)throw Error(k(310));ye=t,t={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Ce===null?le.memoizedState=Ce=t:Ce=Ce.next=t}return Ce}function no(t,e){return typeof e=="function"?e(t):e}function pc(t){var e=It(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ar&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,le.lanes|=c,Dr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,$t(r,e.memoizedState)||(Qe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,le.lanes|=s,Dr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mc(t){var e=It(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$t(s,e.memoizedState)||(Qe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Sy(){}function Cy(t,e){var n=le,r=It(),i=e(),s=!$t(r.memoizedState,i);if(s&&(r.memoizedState=i,Qe=!0),r=r.queue,fh(ky.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,ro(9,Ty.bind(null,n,r,i,e),void 0,null),Re===null)throw Error(k(349));Ar&30||Iy(n,e,i)}return i}function Iy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ty(t,e,n,r){e.value=n,e.getSnapshot=r,Py(e)&&Ry(t)}function ky(t,e,n){return n(function(){Py(e)&&Ry(t)})}function Py(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$t(t,n)}catch{return!0}}function Ry(t){var e=hn(t,1);e!==null&&Lt(e,t,1,-1)}function Dm(t){var e=Ht();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:t},e.queue=t,t=t.dispatch=HC.bind(null,le,t),[e.memoizedState,t]}function ro(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ny(){return It().memoizedState}function Ra(t,e,n,r){var i=Ht();le.flags|=t,i.memoizedState=ro(1|e,n,void 0,r===void 0?null:r)}function uu(t,e,n,r){var i=It();r=r===void 0?null:r;var s=void 0;if(ye!==null){var o=ye.memoizedState;if(s=o.destroy,r!==null&&uh(r,o.deps)){i.memoizedState=ro(e,n,s,r);return}}le.flags|=t,i.memoizedState=ro(1|e,n,s,r)}function Lm(t,e){return Ra(8390656,8,t,e)}function fh(t,e){return uu(2048,8,t,e)}function Oy(t,e){return uu(4,2,t,e)}function xy(t,e){return uu(4,4,t,e)}function by(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ay(t,e,n){return n=n!=null?n.concat([t]):null,uu(4,4,by.bind(null,e,t),n)}function hh(){}function Dy(t,e){var n=It();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&uh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ly(t,e){var n=It();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&uh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function My(t,e,n){return Ar&21?($t(n,e)||(n=$v(),le.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qe=!0),t.memoizedState=n)}function WC(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=hc.transition;hc.transition={};try{t(!1),e()}finally{Y=n,hc.transition=r}}function Fy(){return It().memoizedState}function VC(t,e,n){var r=Hn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Uy(t))$y(e,n);else if(n=my(t,e,n,r),n!==null){var i=He();Lt(n,t,r,i),zy(n,e,r)}}function HC(t,e,n){var r=Hn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uy(t))$y(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,$t(a,o)){var l=e.interleaved;l===null?(i.next=i,ih(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=my(t,e,i,r),n!==null&&(i=He(),Lt(n,t,r,i),zy(n,e,r))}}function Uy(t){var e=t.alternate;return t===le||e!==null&&e===le}function $y(t,e){xs=dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vf(t,n)}}var fl={readContext:Ct,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},GC={readContext:Ct,useCallback:function(t,e){return Ht().memoizedState=[t,e===void 0?null:e],t},useContext:Ct,useEffect:Lm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ra(4194308,4,by.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ra(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ra(4,2,t,e)},useMemo:function(t,e){var n=Ht();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ht();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=VC.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var e=Ht();return t={current:t},e.memoizedState=t},useState:Dm,useDebugValue:hh,useDeferredValue:function(t){return Ht().memoizedState=t},useTransition:function(){var t=Dm(!1),e=t[0];return t=WC.bind(null,t[1]),Ht().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=le,i=Ht();if(se){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Re===null)throw Error(k(349));Ar&30||Iy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Lm(ky.bind(null,r,s,t),[t]),r.flags|=2048,ro(9,Ty.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ht(),e=Re.identifierPrefix;if(se){var n=rn,r=nn;n=(r&~(1<<32-Dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=to++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=BC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},KC={readContext:Ct,useCallback:Dy,useContext:Ct,useEffect:fh,useImperativeHandle:Ay,useInsertionEffect:Oy,useLayoutEffect:xy,useMemo:Ly,useReducer:pc,useRef:Ny,useState:function(){return pc(no)},useDebugValue:hh,useDeferredValue:function(t){var e=It();return My(e,ye.memoizedState,t)},useTransition:function(){var t=pc(no)[0],e=It().memoizedState;return[t,e]},useMutableSource:Sy,useSyncExternalStore:Cy,useId:Fy,unstable_isNewReconciler:!1},qC={readContext:Ct,useCallback:Dy,useContext:Ct,useEffect:fh,useImperativeHandle:Ay,useInsertionEffect:Oy,useLayoutEffect:xy,useMemo:Ly,useReducer:mc,useRef:Ny,useState:function(){return mc(no)},useDebugValue:hh,useDeferredValue:function(t){var e=It();return ye===null?e.memoizedState=t:My(e,ye.memoizedState,t)},useTransition:function(){var t=mc(no)[0],e=It().memoizedState;return[t,e]},useMutableSource:Sy,useSyncExternalStore:Cy,useId:Fy,unstable_isNewReconciler:!1};function Di(t,e){try{var n="",r=e;do n+=S1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function gc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Td(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var YC=typeof WeakMap=="function"?WeakMap:Map;function jy(t,e,n){n=ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){pl||(pl=!0,Ld=r),Td(t,e)},n}function By(t,e,n){n=ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Td(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Td(t,e),typeof r!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Mm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new YC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=uI.bind(null,t,e,n),e.then(t,t))}function Fm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Um(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ln(-1,1),e.tag=2,Wn(n,e,1))),n.lanes|=1),t)}var QC=vn.ReactCurrentOwner,Qe=!1;function We(t,e,n,r){e.child=t===null?wy(e,null,n,r):bi(e,t.child,n,r)}function $m(t,e,n,r,i){n=n.render;var s=e.ref;return Ei(e,i),r=ch(t,e,n,r,s,i),n=dh(),t!==null&&!Qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pn(t,e,i)):(se&&n&&Jf(e),e.flags|=1,We(t,e,r,i),e.child)}function zm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Eh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Wy(t,e,s,r,i)):(t=ba(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ys,n(o,r)&&t.ref===e.ref)return pn(t,e,i)}return e.flags|=1,t=Gn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Wy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ys(s,r)&&t.ref===e.ref)if(Qe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Qe=!0);else return e.lanes=t.lanes,pn(t,e,i)}return kd(t,e,n,r,i)}function Vy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(fi,ot),ot|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(fi,ot),ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(fi,ot),ot|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(fi,ot),ot|=r;return We(t,e,i,n),e.child}function Hy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kd(t,e,n,r,i){var s=et(n)?xr:ze.current;return s=Oi(e,s),Ei(e,i),n=ch(t,e,n,r,s,i),r=dh(),t!==null&&!Qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pn(t,e,i)):(se&&r&&Jf(e),e.flags|=1,We(t,e,n,i),e.child)}function jm(t,e,n,r,i){if(et(n)){var s=!0;il(e)}else s=!1;if(Ei(e,i),e.stateNode===null)Na(t,e),vy(e,n,r),Id(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ct(u):(u=et(n)?xr:ze.current,u=Oi(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&bm(e,o,r,u),Rn=!1;var f=e.memoizedState;o.state=f,ul(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ze.current||Rn?(typeof c=="function"&&(Cd(e,n,c,r),l=e.memoizedState),(a=Rn||xm(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,gy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Pt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ct(l):(l=et(n)?xr:ze.current,l=Oi(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&bm(e,o,r,l),Rn=!1,f=e.memoizedState,o.state=f,ul(e,r,o,i);var _=e.memoizedState;a!==d||f!==_||Ze.current||Rn?(typeof g=="function"&&(Cd(e,n,g,r),_=e.memoizedState),(u=Rn||xm(e,n,u,r,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Pd(t,e,n,r,s,i)}function Pd(t,e,n,r,i,s){Hy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&km(e,n,!1),pn(t,e,s);r=e.stateNode,QC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bi(e,t.child,null,s),e.child=bi(e,null,a,s)):We(t,e,a,s),e.memoizedState=r.state,i&&km(e,n,!0),e.child}function Gy(t){var e=t.stateNode;e.pendingContext?Tm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Tm(t,e.context,!1),oh(t,e.containerInfo)}function Bm(t,e,n,r,i){return xi(),eh(i),e.flags|=256,We(t,e,n,r),e.child}var Rd={dehydrated:null,treeContext:null,retryLane:0};function Nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ky(t,e,n){var r=e.pendingProps,i=ae.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(ae,i&1),t===null)return Ed(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fu(o,r,0,null),t=kr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nd(n),e.memoizedState=Rd,t):ph(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return XC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Gn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Gn(a,s):(s=kr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Rd,r}return s=t.child,t=s.sibling,r=Gn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ph(t,e){return e=fu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function la(t,e,n,r){return r!==null&&eh(r),bi(e,t.child,null,n),t=ph(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function XC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=gc(Error(k(422))),la(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=fu({mode:"visible",children:r.children},i,0,null),s=kr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&bi(e,t.child,null,o),e.child.memoizedState=Nd(o),e.memoizedState=Rd,s);if(!(e.mode&1))return la(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=gc(s,r,void 0),la(t,e,o,r)}if(a=(o&t.childLanes)!==0,Qe||a){if(r=Re,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,hn(t,i),Lt(r,t,i,-1))}return wh(),r=gc(Error(k(421))),la(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=cI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,at=Bn(i.nextSibling),ct=e,se=!0,Nt=null,t!==null&&(yt[wt++]=nn,yt[wt++]=rn,yt[wt++]=br,nn=t.id,rn=t.overflow,br=e),e=ph(e,r.children),e.flags|=4096,e)}function Wm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Sd(t.return,e,n)}function _c(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function qy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(We(t,e,r.children,n),r=ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wm(t,n,e);else if(t.tag===19)Wm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&cl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),_c(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&cl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}_c(e,!0,n,null,s);break;case"together":_c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Na(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Gn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function JC(t,e,n){switch(e.tag){case 3:Gy(e),xi();break;case 5:Ey(e);break;case 1:et(e.type)&&il(e);break;case 4:oh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(al,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(ae,ae.current&1),e.flags|=128,null):n&e.child.childLanes?Ky(t,e,n):(Z(ae,ae.current&1),t=pn(t,e,n),t!==null?t.sibling:null);Z(ae,ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return qy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(ae,ae.current),r)break;return null;case 22:case 23:return e.lanes=0,Vy(t,e,n)}return pn(t,e,n)}var Yy,Od,Qy,Xy;Yy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Od=function(){};Qy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Sr(Yt.current);var s=null;switch(n){case"input":i=Jc(t,i),r=Jc(t,r),s=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),s=[];break;case"textarea":i=td(t,i),r=td(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=nl)}rd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Xy=function(t,e,n,r){n!==r&&(e.flags|=4)};function fs(t,e){if(!se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ZC(t,e,n){var r=e.pendingProps;switch(Zf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return et(e.type)&&rl(),Me(e),null;case 3:return r=e.stateNode,Ai(),ie(Ze),ie(ze),lh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nt!==null&&(Ud(Nt),Nt=null))),Od(t,e),Me(e),null;case 5:ah(e);var i=Sr(eo.current);if(n=e.type,t!==null&&e.stateNode!=null)Qy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Me(e),null}if(t=Sr(Yt.current),oa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Kt]=e,r[Js]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<Es.length;i++)ee(Es[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Jp(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":em(r,s),ee("invalid",r)}rd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&sa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&sa(r.textContent,a,t),i=["children",""+a]):Bs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":Xo(r),Zp(r,s,!0);break;case"textarea":Xo(r),tm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=nl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Iv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Kt]=e,t[Js]=r,Yy(t,e,!1,!1),e.stateNode=t;e:{switch(o=id(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Es.length;i++)ee(Es[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":Jp(t,r),i=Jc(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),ee("invalid",t);break;case"textarea":em(t,r),i=td(t,r),ee("invalid",t);break;default:i=r}rd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Pv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Tv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ws(t,l):typeof l=="number"&&Ws(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&Uf(t,s,l,o))}switch(n){case"input":Xo(t),Zp(t,r,!1);break;case"textarea":Xo(t),tm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?_i(t,!!r.multiple,s,!1):r.defaultValue!=null&&_i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=nl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)Xy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=Sr(eo.current),Sr(Yt.current),oa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Kt]=e,(s=r.nodeValue!==n)&&(t=ct,t!==null))switch(t.tag){case 3:sa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kt]=e,e.stateNode=r}return Me(e),null;case 13:if(ie(ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(se&&at!==null&&e.mode&1&&!(e.flags&128))py(),xi(),e.flags|=98560,s=!1;else if(s=oa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Kt]=e}else xi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),s=!1}else Nt!==null&&(Ud(Nt),Nt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ae.current&1?Ee===0&&(Ee=3):wh())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return Ai(),Od(t,e),t===null&&Qs(e.stateNode.containerInfo),Me(e),null;case 10:return rh(e.type._context),Me(e),null;case 17:return et(e.type)&&rl(),Me(e),null;case 19:if(ie(ae),s=e.memoizedState,s===null)return Me(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)fs(s,!1);else{if(Ee!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cl(t),o!==null){for(e.flags|=128,fs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(ae,ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&pe()>Li&&(e.flags|=128,r=!0,fs(s,!1),e.lanes=4194304)}else{if(!r)if(t=cl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!se)return Me(e),null}else 2*pe()-s.renderingStartTime>Li&&n!==1073741824&&(e.flags|=128,r=!0,fs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pe(),e.sibling=null,n=ae.current,Z(ae,r?n&1|2:n&1),e):(Me(e),null);case 22:case 23:return yh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ot&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function eI(t,e){switch(Zf(e),e.tag){case 1:return et(e.type)&&rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ai(),ie(Ze),ie(ze),lh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ah(e),null;case 13:if(ie(ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ie(ae),null;case 4:return Ai(),null;case 10:return rh(e.type._context),null;case 22:case 23:return yh(),null;case 24:return null;default:return null}}var ua=!1,Fe=!1,tI=typeof WeakSet=="function"?WeakSet:Set,O=null;function di(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(t,e,r)}else n.current=null}function xd(t,e,n){try{n()}catch(r){de(t,e,r)}}var Vm=!1;function nI(t,e){if(pd=Za,t=ty(),Xf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(md={focusedElem:t,selectionRange:n},Za=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,w=_.memoizedState,m=e.stateNode,h=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:Pt(e.type,y),w);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){de(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return _=Vm,Vm=!1,_}function bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xd(e,n,s)}i=i.next}while(i!==r)}}function cu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jy(t){var e=t.alternate;e!==null&&(t.alternate=null,Jy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kt],delete e[Js],delete e[vd],delete e[UC],delete e[$C])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zy(t){return t.tag===5||t.tag===3||t.tag===4}function Hm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nl));else if(r!==4&&(t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}function Dd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Dd(t,e,n),t=t.sibling;t!==null;)Dd(t,e,n),t=t.sibling}var xe=null,Rt=!1;function In(t,e,n){for(n=n.child;n!==null;)e0(t,e,n),n=n.sibling}function e0(t,e,n){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(nu,n)}catch{}switch(n.tag){case 5:Fe||di(n,e);case 6:var r=xe,i=Rt;xe=null,In(t,e,n),xe=r,Rt=i,xe!==null&&(Rt?(t=xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(Rt?(t=xe,n=n.stateNode,t.nodeType===8?cc(t.parentNode,n):t.nodeType===1&&cc(t,n),Ks(t)):cc(xe,n.stateNode));break;case 4:r=xe,i=Rt,xe=n.stateNode.containerInfo,Rt=!0,In(t,e,n),xe=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xd(n,e,o),i=i.next}while(i!==r)}In(t,e,n);break;case 1:if(!Fe&&(di(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){de(n,e,a)}In(t,e,n);break;case 21:In(t,e,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,In(t,e,n),Fe=r):In(t,e,n);break;default:In(t,e,n)}}function Gm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tI),e.forEach(function(r){var i=dI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:xe=a.stateNode,Rt=!1;break e;case 3:xe=a.stateNode.containerInfo,Rt=!0;break e;case 4:xe=a.stateNode.containerInfo,Rt=!0;break e}a=a.return}if(xe===null)throw Error(k(160));e0(s,o,i),xe=null,Rt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){de(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)t0(e,t),e=e.sibling}function t0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kt(e,t),Vt(t),r&4){try{bs(3,t,t.return),cu(3,t)}catch(y){de(t,t.return,y)}try{bs(5,t,t.return)}catch(y){de(t,t.return,y)}}break;case 1:kt(e,t),Vt(t),r&512&&n!==null&&di(n,n.return);break;case 5:if(kt(e,t),Vt(t),r&512&&n!==null&&di(n,n.return),t.flags&32){var i=t.stateNode;try{Ws(i,"")}catch(y){de(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Sv(i,s),id(a,o);var u=id(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Pv(i,d):c==="dangerouslySetInnerHTML"?Tv(i,d):c==="children"?Ws(i,d):Uf(i,c,d,u)}switch(a){case"input":Zc(i,s);break;case"textarea":Cv(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?_i(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?_i(i,!!s.multiple,s.defaultValue,!0):_i(i,!!s.multiple,s.multiple?[]:"",!1))}i[Js]=s}catch(y){de(t,t.return,y)}}break;case 6:if(kt(e,t),Vt(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){de(t,t.return,y)}}break;case 3:if(kt(e,t),Vt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ks(e.containerInfo)}catch(y){de(t,t.return,y)}break;case 4:kt(e,t),Vt(t);break;case 13:kt(e,t),Vt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_h=pe())),r&4&&Gm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Fe=(u=Fe)||c,kt(e,t),Fe=u):kt(e,t),Vt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(O=t,c=t.child;c!==null;){for(d=O=c;O!==null;){switch(f=O,g=f.child,f.tag){case 0:case 11:case 14:case 15:bs(4,f,f.return);break;case 1:di(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){de(r,n,y)}}break;case 5:di(f,f.return);break;case 22:if(f.memoizedState!==null){qm(d);continue}}g!==null?(g.return=f,O=g):qm(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=kv("display",o))}catch(y){de(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){de(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:kt(e,t),Vt(t),r&4&&Gm(t);break;case 21:break;default:kt(e,t),Vt(t)}}function Vt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Zy(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ws(i,""),r.flags&=-33);var s=Hm(t);Dd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Hm(t);Ad(t,a,o);break;default:throw Error(k(161))}}catch(l){de(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rI(t,e,n){O=t,n0(t)}function n0(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ua;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Fe;a=ua;var u=Fe;if(ua=o,(Fe=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?Ym(i):l!==null?(l.return=o,O=l):Ym(i);for(;s!==null;)O=s,n0(s),s=s.sibling;O=i,ua=a,Fe=u}Km(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):Km(t)}}function Km(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Fe||cu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Om(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Om(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ks(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Fe||e.flags&512&&bd(e)}catch(f){de(e,e.return,f)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function qm(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function Ym(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cu(4,e)}catch(l){de(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){de(e,i,l)}}var s=e.return;try{bd(e)}catch(l){de(e,s,l)}break;case 5:var o=e.return;try{bd(e)}catch(l){de(e,o,l)}}}catch(l){de(e,e.return,l)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var iI=Math.ceil,hl=vn.ReactCurrentDispatcher,mh=vn.ReactCurrentOwner,St=vn.ReactCurrentBatchConfig,H=0,Re=null,_e=null,be=0,ot=0,fi=lr(0),Ee=0,io=null,Dr=0,du=0,gh=0,As=null,Ye=null,_h=0,Li=1/0,Zt=null,pl=!1,Ld=null,Vn=null,ca=!1,Mn=null,ml=0,Ds=0,Md=null,Oa=-1,xa=0;function He(){return H&6?pe():Oa!==-1?Oa:Oa=pe()}function Hn(t){return t.mode&1?H&2&&be!==0?be&-be:jC.transition!==null?(xa===0&&(xa=$v()),xa):(t=Y,t!==0||(t=window.event,t=t===void 0?16:Gv(t.type)),t):1}function Lt(t,e,n,r){if(50<Ds)throw Ds=0,Md=null,Error(k(185));xo(t,n,r),(!(H&2)||t!==Re)&&(t===Re&&(!(H&2)&&(du|=n),Ee===4&&On(t,be)),tt(t,r),n===1&&H===0&&!(e.mode&1)&&(Li=pe()+500,au&&ur()))}function tt(t,e){var n=t.callbackNode;j1(t,e);var r=Ja(t,t===Re?be:0);if(r===0)n!==null&&im(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&im(n),e===1)t.tag===0?zC(Qm.bind(null,t)):dy(Qm.bind(null,t)),MC(function(){!(H&6)&&ur()}),n=null;else{switch(zv(r)){case 1:n=Wf;break;case 4:n=Fv;break;case 16:n=Xa;break;case 536870912:n=Uv;break;default:n=Xa}n=c0(n,r0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function r0(t,e){if(Oa=-1,xa=0,H&6)throw Error(k(327));var n=t.callbackNode;if(Si()&&t.callbackNode!==n)return null;var r=Ja(t,t===Re?be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=gl(t,r);else{e=r;var i=H;H|=2;var s=s0();(Re!==t||be!==e)&&(Zt=null,Li=pe()+500,Tr(t,e));do try{aI();break}catch(a){i0(t,a)}while(!0);nh(),hl.current=s,H=i,_e!==null?e=0:(Re=null,be=0,e=Ee)}if(e!==0){if(e===2&&(i=ud(t),i!==0&&(r=i,e=Fd(t,i))),e===1)throw n=io,Tr(t,0),On(t,r),tt(t,pe()),n;if(e===6)On(t,r);else{if(i=t.current.alternate,!(r&30)&&!sI(i)&&(e=gl(t,r),e===2&&(s=ud(t),s!==0&&(r=s,e=Fd(t,s))),e===1))throw n=io,Tr(t,0),On(t,r),tt(t,pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:gr(t,Ye,Zt);break;case 3:if(On(t,r),(r&130023424)===r&&(e=_h+500-pe(),10<e)){if(Ja(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){He(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=_d(gr.bind(null,t,Ye,Zt),e);break}gr(t,Ye,Zt);break;case 4:if(On(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Dt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iI(r/1960))-r,10<r){t.timeoutHandle=_d(gr.bind(null,t,Ye,Zt),r);break}gr(t,Ye,Zt);break;case 5:gr(t,Ye,Zt);break;default:throw Error(k(329))}}}return tt(t,pe()),t.callbackNode===n?r0.bind(null,t):null}function Fd(t,e){var n=As;return t.current.memoizedState.isDehydrated&&(Tr(t,e).flags|=256),t=gl(t,e),t!==2&&(e=Ye,Ye=n,e!==null&&Ud(e)),t}function Ud(t){Ye===null?Ye=t:Ye.push.apply(Ye,t)}function sI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function On(t,e){for(e&=~gh,e&=~du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Dt(e),r=1<<n;t[n]=-1,e&=~r}}function Qm(t){if(H&6)throw Error(k(327));Si();var e=Ja(t,0);if(!(e&1))return tt(t,pe()),null;var n=gl(t,e);if(t.tag!==0&&n===2){var r=ud(t);r!==0&&(e=r,n=Fd(t,r))}if(n===1)throw n=io,Tr(t,0),On(t,e),tt(t,pe()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,Ye,Zt),tt(t,pe()),null}function vh(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(Li=pe()+500,au&&ur())}}function Lr(t){Mn!==null&&Mn.tag===0&&!(H&6)&&Si();var e=H;H|=1;var n=St.transition,r=Y;try{if(St.transition=null,Y=1,t)return t()}finally{Y=r,St.transition=n,H=e,!(H&6)&&ur()}}function yh(){ot=fi.current,ie(fi)}function Tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,LC(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(Zf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&rl();break;case 3:Ai(),ie(Ze),ie(ze),lh();break;case 5:ah(r);break;case 4:Ai();break;case 13:ie(ae);break;case 19:ie(ae);break;case 10:rh(r.type._context);break;case 22:case 23:yh()}n=n.return}if(Re=t,_e=t=Gn(t.current,null),be=ot=e,Ee=0,io=null,gh=du=Dr=0,Ye=As=null,Er!==null){for(e=0;e<Er.length;e++)if(n=Er[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Er=null}return t}function i0(t,e){do{var n=_e;try{if(nh(),Pa.current=fl,dl){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}dl=!1}if(Ar=0,Ce=ye=le=null,xs=!1,to=0,mh.current=null,n===null||n.return===null){Ee=1,io=e,_e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=be,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Fm(o);if(g!==null){g.flags&=-257,Um(g,o,a,s,e),g.mode&1&&Mm(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Mm(s,u,e),wh();break e}l=Error(k(426))}}else if(se&&a.mode&1){var w=Fm(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Um(w,o,a,s,e),eh(Di(l,a));break e}}s=l=Di(l,a),Ee!==4&&(Ee=2),As===null?As=[s]:As.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=jy(s,l,e);Nm(s,m);break e;case 1:a=l;var h=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Vn===null||!Vn.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=By(s,a,e);Nm(s,v);break e}}s=s.return}while(s!==null)}a0(n)}catch(E){e=E,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function s0(){var t=hl.current;return hl.current=fl,t===null?fl:t}function wh(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Re===null||!(Dr&268435455)&&!(du&268435455)||On(Re,be)}function gl(t,e){var n=H;H|=2;var r=s0();(Re!==t||be!==e)&&(Zt=null,Tr(t,e));do try{oI();break}catch(i){i0(t,i)}while(!0);if(nh(),H=n,hl.current=r,_e!==null)throw Error(k(261));return Re=null,be=0,Ee}function oI(){for(;_e!==null;)o0(_e)}function aI(){for(;_e!==null&&!b1();)o0(_e)}function o0(t){var e=u0(t.alternate,t,ot);t.memoizedProps=t.pendingProps,e===null?a0(t):_e=e,mh.current=null}function a0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eI(n,e),n!==null){n.flags&=32767,_e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ee=6,_e=null;return}}else if(n=ZC(n,e,ot),n!==null){_e=n;return}if(e=e.sibling,e!==null){_e=e;return}_e=e=t}while(e!==null);Ee===0&&(Ee=5)}function gr(t,e,n){var r=Y,i=St.transition;try{St.transition=null,Y=1,lI(t,e,n,r)}finally{St.transition=i,Y=r}return null}function lI(t,e,n,r){do Si();while(Mn!==null);if(H&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(B1(t,s),t===Re&&(_e=Re=null,be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ca||(ca=!0,c0(Xa,function(){return Si(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=St.transition,St.transition=null;var o=Y;Y=1;var a=H;H|=4,mh.current=null,nI(t,n),t0(n,t),RC(md),Za=!!pd,md=pd=null,t.current=n,rI(n),A1(),H=a,Y=o,St.transition=s}else t.current=n;if(ca&&(ca=!1,Mn=t,ml=i),s=t.pendingLanes,s===0&&(Vn=null),M1(n.stateNode),tt(t,pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pl)throw pl=!1,t=Ld,Ld=null,t;return ml&1&&t.tag!==0&&Si(),s=t.pendingLanes,s&1?t===Md?Ds++:(Ds=0,Md=t):Ds=0,ur(),null}function Si(){if(Mn!==null){var t=zv(ml),e=St.transition,n=Y;try{if(St.transition=null,Y=16>t?16:t,Mn===null)var r=!1;else{if(t=Mn,Mn=null,ml=0,H&6)throw Error(k(331));var i=H;for(H|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:bs(8,c,s)}var d=c.child;if(d!==null)d.return=c,O=d;else for(;O!==null;){c=O;var f=c.sibling,g=c.return;if(Jy(c),c===u){O=null;break}if(f!==null){f.return=g,O=f;break}O=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bs(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,O=m;break e}O=s.return}}var h=t.current;for(O=h;O!==null;){o=O;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,O=p;else e:for(o=h;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cu(9,a)}}catch(E){de(a,a.return,E)}if(a===o){O=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,O=v;break e}O=a.return}}if(H=i,ur(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(nu,t)}catch{}r=!0}return r}finally{Y=n,St.transition=e}}return!1}function Xm(t,e,n){e=Di(n,e),e=jy(t,e,1),t=Wn(t,e,1),e=He(),t!==null&&(xo(t,1,e),tt(t,e))}function de(t,e,n){if(t.tag===3)Xm(t,t,n);else for(;e!==null;){if(e.tag===3){Xm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vn===null||!Vn.has(r))){t=Di(n,t),t=By(e,t,1),e=Wn(e,t,1),t=He(),e!==null&&(xo(e,1,t),tt(e,t));break}}e=e.return}}function uI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=He(),t.pingedLanes|=t.suspendedLanes&n,Re===t&&(be&n)===n&&(Ee===4||Ee===3&&(be&130023424)===be&&500>pe()-_h?Tr(t,0):gh|=n),tt(t,e)}function l0(t,e){e===0&&(t.mode&1?(e=ea,ea<<=1,!(ea&130023424)&&(ea=4194304)):e=1);var n=He();t=hn(t,e),t!==null&&(xo(t,e,n),tt(t,n))}function cI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),l0(t,n)}function dI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),l0(t,n)}var u0;u0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ze.current)Qe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qe=!1,JC(t,e,n);Qe=!!(t.flags&131072)}else Qe=!1,se&&e.flags&1048576&&fy(e,ol,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Na(t,e),t=e.pendingProps;var i=Oi(e,ze.current);Ei(e,n),i=ch(null,e,r,t,i,n);var s=dh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,et(r)?(s=!0,il(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sh(e),i.updater=lu,e.stateNode=i,i._reactInternals=e,Id(e,r,t,n),e=Pd(null,e,r,!0,s,n)):(e.tag=0,se&&s&&Jf(e),We(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Na(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=hI(r),t=Pt(r,t),i){case 0:e=kd(null,e,r,t,n);break e;case 1:e=jm(null,e,r,t,n);break e;case 11:e=$m(null,e,r,t,n);break e;case 14:e=zm(null,e,r,Pt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),kd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),jm(t,e,r,i,n);case 3:e:{if(Gy(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,gy(t,e),ul(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Di(Error(k(423)),e),e=Bm(t,e,r,n,i);break e}else if(r!==i){i=Di(Error(k(424)),e),e=Bm(t,e,r,n,i);break e}else for(at=Bn(e.stateNode.containerInfo.firstChild),ct=e,se=!0,Nt=null,n=wy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xi(),r===i){e=pn(t,e,n);break e}We(t,e,r,n)}e=e.child}return e;case 5:return Ey(e),t===null&&Ed(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,gd(r,i)?o=null:s!==null&&gd(r,s)&&(e.flags|=32),Hy(t,e),We(t,e,o,n),e.child;case 6:return t===null&&Ed(e),null;case 13:return Ky(t,e,n);case 4:return oh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bi(e,null,r,n):We(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),$m(t,e,r,i,n);case 7:return We(t,e,e.pendingProps,n),e.child;case 8:return We(t,e,e.pendingProps.children,n),e.child;case 12:return We(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(al,r._currentValue),r._currentValue=o,s!==null)if($t(s.value,o)){if(s.children===i.children&&!Ze.current){e=pn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ln(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Sd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Sd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}We(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ei(e,n),i=Ct(i),r=r(i),e.flags|=1,We(t,e,r,n),e.child;case 14:return r=e.type,i=Pt(r,e.pendingProps),i=Pt(r.type,i),zm(t,e,r,i,n);case 15:return Wy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Na(t,e),e.tag=1,et(r)?(t=!0,il(e)):t=!1,Ei(e,n),vy(e,r,i),Id(e,r,i,n),Pd(null,e,r,!0,t,n);case 19:return qy(t,e,n);case 22:return Vy(t,e,n)}throw Error(k(156,e.tag))};function c0(t,e){return Mv(t,e)}function fI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(t,e,n,r){return new fI(t,e,n,r)}function Eh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hI(t){if(typeof t=="function")return Eh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zf)return 11;if(t===jf)return 14}return 2}function Gn(t,e){var n=t.alternate;return n===null?(n=Et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ba(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Eh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ni:return kr(n.children,i,s,e);case $f:o=8,i|=8;break;case qc:return t=Et(12,n,e,i|2),t.elementType=qc,t.lanes=s,t;case Yc:return t=Et(13,n,e,i),t.elementType=Yc,t.lanes=s,t;case Qc:return t=Et(19,n,e,i),t.elementType=Qc,t.lanes=s,t;case yv:return fu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _v:o=10;break e;case vv:o=9;break e;case zf:o=11;break e;case jf:o=14;break e;case Pn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Et(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function kr(t,e,n,r){return t=Et(7,t,r,e),t.lanes=n,t}function fu(t,e,n,r){return t=Et(22,t,r,e),t.elementType=yv,t.lanes=n,t.stateNode={isHidden:!1},t}function vc(t,e,n){return t=Et(6,t,null,e),t.lanes=n,t}function yc(t,e,n){return e=Et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zu(0),this.expirationTimes=Zu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sh(t,e,n,r,i,s,o,a,l){return t=new pI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Et(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sh(s),t}function mI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ti,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function d0(t){if(!t)return Jn;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(et(n))return cy(t,n,e)}return e}function f0(t,e,n,r,i,s,o,a,l){return t=Sh(n,r,!0,t,i,s,o,a,l),t.context=d0(null),n=t.current,r=He(),i=Hn(n),s=ln(r,i),s.callback=e??null,Wn(n,s,i),t.current.lanes=i,xo(t,i,r),tt(t,r),t}function hu(t,e,n,r){var i=e.current,s=He(),o=Hn(i);return n=d0(n),e.context===null?e.context=n:e.pendingContext=n,e=ln(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Wn(i,e,o),t!==null&&(Lt(t,i,o,s),ka(t,i,o)),o}function _l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ch(t,e){Jm(t,e),(t=t.alternate)&&Jm(t,e)}function gI(){return null}var h0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ih(t){this._internalRoot=t}pu.prototype.render=Ih.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));hu(t,e,null,null)};pu.prototype.unmount=Ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Lr(function(){hu(null,t,null,null)}),e[fn]=null}};function pu(t){this._internalRoot=t}pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Wv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nn.length&&e!==0&&e<Nn[n].priority;n++);Nn.splice(n,0,t),n===0&&Hv(t)}};function Th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zm(){}function _I(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=_l(o);s.call(u)}}var o=f0(e,r,t,0,null,!1,!1,"",Zm);return t._reactRootContainer=o,t[fn]=o.current,Qs(t.nodeType===8?t.parentNode:t),Lr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=_l(l);a.call(u)}}var l=Sh(t,0,!1,null,null,!1,!1,"",Zm);return t._reactRootContainer=l,t[fn]=l.current,Qs(t.nodeType===8?t.parentNode:t),Lr(function(){hu(e,l,n,r)}),l}function gu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=_l(o);a.call(l)}}hu(e,o,t,i)}else o=_I(n,e,t,i,r);return _l(o)}jv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ws(e.pendingLanes);n!==0&&(Vf(e,n|1),tt(e,pe()),!(H&6)&&(Li=pe()+500,ur()))}break;case 13:Lr(function(){var r=hn(t,1);if(r!==null){var i=He();Lt(r,t,1,i)}}),Ch(t,1)}};Hf=function(t){if(t.tag===13){var e=hn(t,134217728);if(e!==null){var n=He();Lt(e,t,134217728,n)}Ch(t,134217728)}};Bv=function(t){if(t.tag===13){var e=Hn(t),n=hn(t,e);if(n!==null){var r=He();Lt(n,t,e,r)}Ch(t,e)}};Wv=function(){return Y};Vv=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};od=function(t,e,n){switch(e){case"input":if(Zc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ou(r);if(!i)throw Error(k(90));Ev(r),Zc(r,i)}}}break;case"textarea":Cv(t,n);break;case"select":e=n.value,e!=null&&_i(t,!!n.multiple,e,!1)}};Ov=vh;xv=Lr;var vI={usingClientEntryPoint:!1,Events:[Ao,oi,ou,Rv,Nv,vh]},hs={findFiberByHostInstance:wr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},yI={bundleType:hs.bundleType,version:hs.version,rendererPackageName:hs.rendererPackageName,rendererConfig:hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Dv(t),t===null?null:t.stateNode},findFiberByHostInstance:hs.findFiberByHostInstance||gI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!da.isDisabled&&da.supportsFiber)try{nu=da.inject(yI),qt=da}catch{}}mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vI;mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Th(e))throw Error(k(200));return mI(t,e,null,n)};mt.createRoot=function(t,e){if(!Th(t))throw Error(k(299));var n=!1,r="",i=h0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Sh(t,1,!1,null,null,n,!1,r,i),t[fn]=e.current,Qs(t.nodeType===8?t.parentNode:t),new Ih(e)};mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=Dv(e),t=t===null?null:t.stateNode,t};mt.flushSync=function(t){return Lr(t)};mt.hydrate=function(t,e,n){if(!mu(e))throw Error(k(200));return gu(null,t,e,!0,n)};mt.hydrateRoot=function(t,e,n){if(!Th(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=h0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=f0(e,null,t,1,n??null,i,!1,s,o),t[fn]=e.current,Qs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new pu(e)};mt.render=function(t,e,n){if(!mu(e))throw Error(k(200));return gu(null,t,e,!1,n)};mt.unmountComponentAtNode=function(t){if(!mu(t))throw Error(k(40));return t._reactRootContainer?(Lr(function(){gu(null,null,t,!1,function(){t._reactRootContainer=null,t[fn]=null})}),!0):!1};mt.unstable_batchedUpdates=vh;mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!mu(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return gu(t,e,n,!1,r)};mt.version="18.2.0-next-9e3b772b8-20220608";function p0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p0)}catch(t){console.error(t)}}p0(),fv.exports=mt;var wI=fv.exports,eg=wI;Gc.createRoot=eg.createRoot,Gc.hydrateRoot=eg.hydrateRoot;const EI="modulepreload",SI=function(t){return"/learn-lingo-react/"+t},tg={},Lo=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link");i=Promise.all(n.map(o=>{if(o=SI(o),o in tg)return;tg[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const f=s[d];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":EI,a||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),a)return new Promise((d,f)=>{c.addEventListener("load",d),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},so.apply(this,arguments)}var Fn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Fn||(Fn={}));const ng="popstate";function CI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return $d("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:vl(i)}return TI(e,n,null,t)}function ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function m0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function II(){return Math.random().toString(36).substr(2,8)}function rg(t,e){return{usr:t.state,key:t.key,idx:e}}function $d(t,e,n,r){return n===void 0&&(n=null),so({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Xi(e):e,{state:n,key:e&&e.key||r||II()})}function vl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Xi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function TI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Fn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(so({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Fn.Pop;let w=c(),m=w==null?null:w-u;u=w,l&&l({action:a,location:y.location,delta:m})}function f(w,m){a=Fn.Push;let h=$d(y.location,w,m);n&&n(h,w),u=c()+1;let p=rg(h,u),v=y.createHref(h);try{o.pushState(p,"",v)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(v)}s&&l&&l({action:a,location:y.location,delta:1})}function g(w,m){a=Fn.Replace;let h=$d(y.location,w,m);n&&n(h,w),u=c();let p=rg(h,u),v=y.createHref(h);o.replaceState(p,"",v),s&&l&&l({action:a,location:y.location,delta:0})}function _(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:vl(w);return h=h.replace(/ $/,"%20"),ue(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let y={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ng,d),l=w,()=>{i.removeEventListener(ng,d),l=null}},createHref(w){return e(i,w)},createURL:_,encodeLocation(w){let m=_(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:g,go(w){return o.go(w)}};return y}var ig;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ig||(ig={}));function kI(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Xi(e):e,i=Mi(r.pathname||"/",n);if(i==null)return null;let s=g0(t);PI(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=UI(i);o=MI(s[a],l)}return o}function g0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ue(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Kn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),g0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:DI(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of _0(s.path))i(s,o,l)}),e}function _0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=_0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function PI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:LI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const RI=/^:[\w-]+$/,NI=3,OI=2,xI=1,bI=10,AI=-2,sg=t=>t==="*";function DI(t,e){let n=t.split("/"),r=n.length;return n.some(sg)&&(r+=AI),e&&(r+=OI),n.filter(i=>!sg(i)).reduce((i,s)=>i+(RI.test(s)?NI:s===""?xI:bI),r)}function LI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function MI(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=zd({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Kn([i,c.pathname]),pathnameBase:BI(Kn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Kn([i,c.pathnameBase]))}return s}function zd(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=FI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:g}=c;if(f==="*"){let y=a[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const _=a[d];return g&&!_?u[f]=void 0:u[f]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function FI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),m0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function UI(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return m0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Mi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function $I(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Xi(t):t;return{pathname:n?n.startsWith("/")?n:zI(n,e):e,search:WI(r),hash:VI(i)}}function zI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jI(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function kh(t,e){let n=jI(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ph(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Xi(t):(i=so({},t),ue(!i.pathname||!i.pathname.includes("?"),wc("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),wc("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),wc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=$I(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Kn=t=>t.join("/").replace(/\/\/+/g,"/"),BI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),WI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,VI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function HI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const v0=["post","put","patch","delete"];new Set(v0);const GI=["get",...v0];new Set(GI);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oo(){return oo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oo.apply(this,arguments)}const _u=T.createContext(null),y0=T.createContext(null),yn=T.createContext(null),vu=T.createContext(null),cr=T.createContext({outlet:null,matches:[],isDataRoute:!1}),w0=T.createContext(null);function KI(t,e){let{relative:n}=e===void 0?{}:e;Ji()||ue(!1);let{basename:r,navigator:i}=T.useContext(yn),{hash:s,pathname:o,search:a}=yu(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Kn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ji(){return T.useContext(vu)!=null}function Zi(){return Ji()||ue(!1),T.useContext(vu).location}function E0(t){T.useContext(yn).static||T.useLayoutEffect(t)}function S0(){let{isDataRoute:t}=T.useContext(cr);return t?oT():qI()}function qI(){Ji()||ue(!1);let t=T.useContext(_u),{basename:e,future:n,navigator:r}=T.useContext(yn),{matches:i}=T.useContext(cr),{pathname:s}=Zi(),o=JSON.stringify(kh(i,n.v7_relativeSplatPath)),a=T.useRef(!1);return E0(()=>{a.current=!0}),T.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Ph(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Kn([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}function yu(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=T.useContext(yn),{matches:i}=T.useContext(cr),{pathname:s}=Zi(),o=JSON.stringify(kh(i,r.v7_relativeSplatPath));return T.useMemo(()=>Ph(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function YI(t,e){return QI(t,e)}function QI(t,e,n,r){Ji()||ue(!1);let{navigator:i}=T.useContext(yn),{matches:s}=T.useContext(cr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Zi(),c;if(e){var d;let w=typeof e=="string"?Xi(e):e;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||ue(!1),c=w}else c=u;let f=c.pathname||"/",g=f;if(l!=="/"){let w=l.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let _=kI(t,{pathname:g}),y=tT(_&&_.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Kn([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Kn([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&y?T.createElement(vu.Provider,{value:{location:oo({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Fn.Pop}},y):y}function XI(){let t=sT(),e=HI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,null)}const JI=T.createElement(XI,null);class ZI extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?T.createElement(cr.Provider,{value:this.props.routeContext},T.createElement(w0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eT(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(_u);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(cr.Provider,{value:e},r)}function tT(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||ue(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:g}=n,_=d.route.loader&&f[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||_){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,f)=>{let g,_=!1,y=null,w=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||JI,l&&(u<0&&f===0?(aT("route-fallback",!1),_=!0,w=null):u===f&&(_=!0,w=d.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),h=()=>{let p;return g?p=y:_?p=w:d.route.Component?p=T.createElement(d.route.Component,null):d.route.element?p=d.route.element:p=c,T.createElement(eT,{match:d,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:p})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?T.createElement(ZI,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var C0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(C0||{}),yl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(yl||{});function nT(t){let e=T.useContext(_u);return e||ue(!1),e}function rT(t){let e=T.useContext(y0);return e||ue(!1),e}function iT(t){let e=T.useContext(cr);return e||ue(!1),e}function I0(t){let e=iT(),n=e.matches[e.matches.length-1];return n.route.id||ue(!1),n.route.id}function sT(){var t;let e=T.useContext(w0),n=rT(yl.UseRouteError),r=I0(yl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function oT(){let{router:t}=nT(C0.UseNavigateStable),e=I0(yl.UseNavigateStable),n=T.useRef(!1);return E0(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,oo({fromRouteId:e},s)))},[t,e])}const og={};function aT(t,e,n){!e&&!og[t]&&(og[t]=!0)}function Rh(t){let{to:e,replace:n,state:r,relative:i}=t;Ji()||ue(!1);let{future:s,static:o}=T.useContext(yn),{matches:a}=T.useContext(cr),{pathname:l}=Zi(),u=S0(),c=Ph(e,kh(a,s.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(c);return T.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:i}),[u,d,i,n,r]),null}function jd(t){ue(!1)}function lT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Fn.Pop,navigator:s,static:o=!1,future:a}=t;Ji()&&ue(!1);let l=e.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:l,navigator:s,static:o,future:oo({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Xi(r));let{pathname:c="/",search:d="",hash:f="",state:g=null,key:_="default"}=r,y=T.useMemo(()=>{let w=Mi(c,l);return w==null?null:{location:{pathname:w,search:d,hash:f,state:g,key:_},navigationType:i}},[l,c,d,f,g,_,i]);return y==null?null:T.createElement(yn.Provider,{value:u},T.createElement(vu.Provider,{children:n,value:y}))}function uT(t){let{children:e,location:n}=t;return YI(Bd(e),n)}new Promise(()=>{});function Bd(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,Bd(r.props.children,s));return}r.type!==jd&&ue(!1),!r.props.index||!r.props.children||ue(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Bd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wl(){return wl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wl.apply(this,arguments)}function T0(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function cT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function dT(t,e){return t.button===0&&(!e||e==="_self")&&!cT(t)}const fT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],hT=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],pT="6";try{window.__reactRouterVersion=pT}catch{}const mT=T.createContext({isTransitioning:!1}),gT="startTransition",ag=Hc[gT];function _T(t){let{basename:e,children:n,future:r,window:i}=t,s=T.useRef();s.current==null&&(s.current=CI({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=T.useCallback(d=>{u&&ag?ag(()=>l(d)):l(d)},[l,u]);return T.useLayoutEffect(()=>o.listen(c),[o,c]),T.createElement(lT,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const vT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wT=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,f=T0(e,fT),{basename:g}=T.useContext(yn),_,y=!1;if(typeof u=="string"&&yT.test(u)&&(_=u,vT))try{let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),E=Mi(v.pathname,g);v.origin===p.origin&&E!=null?u=E+v.search+v.hash:y=!0}catch{}let w=KI(u,{relative:i}),m=ST(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function h(p){r&&r(p),p.defaultPrevented||m(p)}return T.createElement("a",wl({},f,{href:_||w,onClick:y||s?r:h,ref:n,target:l}))}),Nh=T.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,d=T0(e,hT),f=yu(l,{relative:d.relative}),g=Zi(),_=T.useContext(y0),{navigator:y,basename:w}=T.useContext(yn),m=_!=null&&CT(f)&&u===!0,h=y.encodeLocation?y.encodeLocation(f).pathname:f.pathname,p=g.pathname,v=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;i||(p=p.toLowerCase(),v=v?v.toLowerCase():null,h=h.toLowerCase()),v&&w&&(v=Mi(v,w)||v);const E=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let C=p===h||!o&&p.startsWith(h)&&p.charAt(E)==="/",S=v!=null&&(v===h||!o&&v.startsWith(h)&&v.charAt(h.length)==="/"),I={isActive:C,isPending:S,isTransitioning:m},N=C?r:void 0,x;typeof s=="function"?x=s(I):x=[s,C?"active":null,S?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let Q=typeof a=="function"?a(I):a;return T.createElement(wT,wl({},d,{"aria-current":N,className:x,ref:n,style:Q,to:l,unstable_viewTransition:u}),typeof c=="function"?c(I):c)});var Wd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Wd||(Wd={}));var lg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(lg||(lg={}));function ET(t){let e=T.useContext(_u);return e||ue(!1),e}function ST(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=S0(),u=Zi(),c=yu(t,{relative:o});return T.useCallback(d=>{if(dT(d,n)){d.preventDefault();let f=r!==void 0?r:vl(u)===vl(c);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function CT(t,e){e===void 0&&(e={});let n=T.useContext(mT);n==null&&ue(!1);let{basename:r}=ET(Wd.useViewTransitionState),i=yu(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Mi(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Mi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return zd(i.pathname,o)!=null||zd(i.pathname,s)!=null}function k0(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=k0(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Un(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=k0(t))&&(r&&(r+=" "),r+=e);return r}const ao=t=>typeof t=="number"&&!isNaN(t),Pr=t=>typeof t=="string",lt=t=>typeof t=="function",Aa=t=>Pr(t)||lt(t)?t:null,Vd=t=>T.isValidElement(t)||Pr(t)||lt(t)||ao(t);function IT(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function wu(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:u,done:c,nodeRef:d,isIn:f,playToast:g}=o;const _=r?`${e}--${l}`:e,y=r?`${n}--${l}`:n,w=T.useRef(0);return T.useLayoutEffect(()=>{const m=d.current,h=_.split(" "),p=v=>{v.target===d.current&&(g(),m.removeEventListener("animationend",p),m.removeEventListener("animationcancel",p),w.current===0&&v.type!=="animationcancel"&&m.classList.remove(...h))};m.classList.add(...h),m.addEventListener("animationend",p),m.addEventListener("animationcancel",p)},[]),T.useEffect(()=>{const m=d.current,h=()=>{m.removeEventListener("animationend",h),i?IT(m,c,s):c()};f||(u?h():(w.current=1,m.className+=` ${y}`,m.addEventListener("animationend",h)))},[f]),D.createElement(D.Fragment,null,a)}}function ug(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Ve=new Map;let lo=[];const Hd=new Set,TT=t=>Hd.forEach(e=>e(t)),P0=()=>Ve.size>0;function R0(t,e){var n;if(e)return!((n=Ve.get(e))==null||!n.isToastActive(t));let r=!1;return Ve.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function N0(t,e){Vd(t)&&(P0()||lo.push({content:t,options:e}),Ve.forEach(n=>{n.buildToast(t,e)}))}function cg(t,e){Ve.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function kT(t){const{subscribe:e,getSnapshot:n,setProps:r}=T.useRef(function(s){const o=s.containerId||1;return{subscribe(a){const l=function(c,d,f){let g=1,_=0,y=[],w=[],m=[],h=d;const p=new Map,v=new Set,E=()=>{m=Array.from(p.values()),v.forEach(I=>I())},C=I=>{w=I==null?[]:w.filter(N=>N!==I),E()},S=I=>{const{toastId:N,onOpen:x,updateId:Q,children:De}=I.props,qe=Q==null;I.staleId&&p.delete(I.staleId),p.set(N,I),w=[...w,I.props.toastId].filter(it=>it!==I.staleId),E(),f(ug(I,qe?"added":"updated")),qe&&lt(x)&&x(T.isValidElement(De)&&De.props)};return{id:c,props:h,observe:I=>(v.add(I),()=>v.delete(I)),toggle:(I,N)=>{p.forEach(x=>{N!=null&&N!==x.props.toastId||lt(x.toggle)&&x.toggle(I)})},removeToast:C,toasts:p,clearQueue:()=>{_-=y.length,y=[]},buildToast:(I,N)=>{if(($=>{let{containerId:me,toastId:oe,updateId:ve}=$;const he=me?me!==c:c!==1,Be=p.has(oe)&&ve==null;return he||Be})(N))return;const{toastId:x,updateId:Q,data:De,staleId:qe,delay:it}=N,Bt=()=>{C(x)},Wt=Q==null;Wt&&_++;const Ne={...h,style:h.toastStyle,key:g++,...Object.fromEntries(Object.entries(N).filter($=>{let[me,oe]=$;return oe!=null})),toastId:x,updateId:Q,data:De,closeToast:Bt,isIn:!1,className:Aa(N.className||h.toastClassName),bodyClassName:Aa(N.bodyClassName||h.bodyClassName),progressClassName:Aa(N.progressClassName||h.progressClassName),autoClose:!N.isLoading&&(R=N.autoClose,b=h.autoClose,R===!1||ao(R)&&R>0?R:b),deleteToast(){const $=p.get(x),{onClose:me,children:oe}=$.props;lt(me)&&me(T.isValidElement(oe)&&oe.props),f(ug($,"removed")),p.delete(x),_--,_<0&&(_=0),y.length>0?S(y.shift()):E()}};var R,b;Ne.closeButton=h.closeButton,N.closeButton===!1||Vd(N.closeButton)?Ne.closeButton=N.closeButton:N.closeButton===!0&&(Ne.closeButton=!Vd(h.closeButton)||h.closeButton);let A=I;T.isValidElement(I)&&!Pr(I.type)?A=T.cloneElement(I,{closeToast:Bt,toastProps:Ne,data:De}):lt(I)&&(A=I({closeToast:Bt,toastProps:Ne,data:De}));const V={content:A,props:Ne,staleId:qe};h.limit&&h.limit>0&&_>h.limit&&Wt?y.push(V):ao(it)?setTimeout(()=>{S(V)},it):S(V)},setProps(I){h=I},setToggle:(I,N)=>{p.get(I).toggle=N},isToastActive:I=>w.some(N=>N===I),getSnapshot:()=>h.newestOnTop?m.reverse():m}}(o,s,TT);Ve.set(o,l);const u=l.observe(a);return lo.forEach(c=>N0(c.content,c.options)),lo=[],()=>{u(),Ve.delete(o)}},setProps(a){var l;(l=Ve.get(o))==null||l.setProps(a)},getSnapshot(){var a;return(a=Ve.get(o))==null?void 0:a.getSnapshot()}}}(t)).current;r(t);const i=T.useSyncExternalStore(e,n,n);return{getToastToRender:function(s){if(!i)return[];const o=new Map;return i.forEach(a=>{const{position:l}=a.props;o.has(l)||o.set(l,[]),o.get(l).push(a)}),Array.from(o,a=>s(a[0],a[1]))},isToastActive:R0,count:i==null?void 0:i.length}}function PT(t){const[e,n]=T.useState(!1),[r,i]=T.useState(!1),s=T.useRef(null),o=T.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:l,closeToast:u,onClick:c,closeOnClick:d}=t;var f,g;function _(){n(!0)}function y(){n(!1)}function w(p){const v=s.current;o.canDrag&&v&&(o.didMove=!0,e&&y(),o.delta=t.draggableDirection==="x"?p.clientX-o.start:p.clientY-o.start,o.start!==p.clientX&&(o.canCloseOnClick=!1),v.style.transform=`translate3d(${t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,v.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function m(){document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",m);const p=s.current;if(o.canDrag&&o.didMove&&p){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),t.closeToast(),void t.collapseAll();p.style.transition="transform 0.2s, opacity 0.2s",p.style.removeProperty("transform"),p.style.removeProperty("opacity")}}(g=Ve.get((f={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||g.setToggle(f.id,f.fn),T.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||y(),window.addEventListener("focus",_),window.addEventListener("blur",y),()=>{window.removeEventListener("focus",_),window.removeEventListener("blur",y)}},[t.pauseOnFocusLoss]);const h={onPointerDown:function(p){if(t.draggable===!0||t.draggable===p.pointerType){o.didMove=!1,document.addEventListener("pointermove",w),document.addEventListener("pointerup",m);const v=s.current;o.canCloseOnClick=!0,o.canDrag=!0,v.style.transition="none",t.draggableDirection==="x"?(o.start=p.clientX,o.removalDistance=v.offsetWidth*(t.draggablePercent/100)):(o.start=p.clientY,o.removalDistance=v.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(p){const{top:v,bottom:E,left:C,right:S}=s.current.getBoundingClientRect();p.nativeEvent.type!=="touchend"&&t.pauseOnHover&&p.clientX>=C&&p.clientX<=S&&p.clientY>=v&&p.clientY<=E?y():_()}};return a&&l&&(h.onMouseEnter=y,t.stacked||(h.onMouseLeave=_)),d&&(h.onClick=p=>{c&&c(p),o.canCloseOnClick&&u()}),{playToast:_,pauseToast:y,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:h}}function RT(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:u,rtl:c,isIn:d,theme:f}=t;const g=s||l&&u===0,_={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};l&&(_.transform=`scaleX(${u})`);const y=Un("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":c}),w=lt(o)?o({rtl:c,type:i,defaultClassName:y}):Un(y,o),m={[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{d&&r()}};return D.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":g},D.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${i}`}),D.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:w,style:_,...m}))}let NT=1;const O0=()=>""+NT++;function OT(t){return t&&(Pr(t.toastId)||ao(t.toastId))?t.toastId:O0()}function Ls(t,e){return N0(t,e),e.toastId}function El(t,e){return{...e,type:e&&e.type||t,toastId:OT(e)}}function fa(t){return(e,n)=>Ls(e,El(t,n))}function ne(t,e){return Ls(t,El("default",e))}ne.loading=(t,e)=>Ls(t,El("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),ne.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=Pr(i)?ne.loading(i,n):ne.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,d,f)=>{if(d==null)return void ne.dismiss(r);const g={type:c,...a,...n,data:f},_=Pr(d)?{render:d}:d;return r?ne.update(r,{...g,..._}):ne(_.render,{...g,..._}),f},u=lt(t)?t():t;return u.then(c=>l("success",o,c)).catch(c=>l("error",s,c)),u},ne.success=fa("success"),ne.info=fa("info"),ne.error=fa("error"),ne.warning=fa("warning"),ne.warn=ne.warning,ne.dark=(t,e)=>Ls(t,El("default",{theme:"dark",...e})),ne.dismiss=function(t){(function(e){var n;if(P0()){if(e==null||Pr(n=e)||ao(n))Ve.forEach(r=>{r.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const r=Ve.get(e.containerId);r?r.removeToast(e.id):Ve.forEach(i=>{i.removeToast(e.id)})}}else lo=lo.filter(r=>e!=null&&r.options.toastId!==e)})(t)},ne.clearWaitingQueue=function(t){t===void 0&&(t={}),Ve.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},ne.isActive=R0,ne.update=function(t,e){e===void 0&&(e={});const n=((r,i)=>{var s;let{containerId:o}=i;return(s=Ve.get(o||1))==null?void 0:s.toasts.get(r)})(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:O0()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,Ls(o,s)}},ne.done=t=>{ne.update(t,{progress:1})},ne.onChange=function(t){return Hd.add(t),()=>{Hd.delete(t)}},ne.play=t=>cg(!0,t),ne.pause=t=>cg(!1,t);const xT=typeof window<"u"?T.useLayoutEffect:T.useEffect,ha=t=>{let{theme:e,type:n,isLoading:r,...i}=t;return D.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},Ec={info:function(t){return D.createElement(ha,{...t},D.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return D.createElement(ha,{...t},D.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return D.createElement(ha,{...t},D.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return D.createElement(ha,{...t},D.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return D.createElement("div",{className:"Toastify__spinner"})}},bT=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=PT(t),{closeButton:o,children:a,autoClose:l,onClick:u,type:c,hideProgressBar:d,closeToast:f,transition:g,position:_,className:y,style:w,bodyClassName:m,bodyStyle:h,progressClassName:p,progressStyle:v,updateId:E,role:C,progress:S,rtl:I,toastId:N,deleteToast:x,isIn:Q,isLoading:De,closeOnClick:qe,theme:it}=t,Bt=Un("Toastify__toast",`Toastify__toast-theme--${it}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":I},{"Toastify__toast--close-on-click":qe}),Wt=lt(y)?y({rtl:I,position:_,type:c,defaultClassName:Bt}):Un(Bt,y),Ne=function(V){let{theme:$,type:me,isLoading:oe,icon:ve}=V,he=null;const Be={theme:$,type:me};return ve===!1||(lt(ve)?he=ve({...Be,isLoading:oe}):T.isValidElement(ve)?he=T.cloneElement(ve,Be):oe?he=Ec.spinner():(hr=>hr in Ec)(me)&&(he=Ec[me](Be))),he}(t),R=!!S||!l,b={closeToast:f,type:c,theme:it};let A=null;return o===!1||(A=lt(o)?o(b):T.isValidElement(o)?T.cloneElement(o,b):function(V){let{closeToast:$,theme:me,ariaLabel:oe="close"}=V;return D.createElement("button",{className:`Toastify__close-button Toastify__close-button--${me}`,type:"button",onClick:ve=>{ve.stopPropagation(),$(ve)},"aria-label":oe},D.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},D.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(b)),D.createElement(g,{isIn:Q,done:x,position:_,preventExitTransition:n,nodeRef:r,playToast:s},D.createElement("div",{id:N,onClick:u,"data-in":Q,className:Wt,...i,style:w,ref:r},D.createElement("div",{...Q&&{role:C},className:lt(m)?m({type:c}):Un("Toastify__toast-body",m),style:h},Ne!=null&&D.createElement("div",{className:Un("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!De})},Ne),D.createElement("div",null,a)),A,D.createElement(RT,{...E&&!R?{key:`pb-${E}`}:{},rtl:I,theme:it,delay:l,isRunning:e,isIn:Q,closeToast:f,hide:d,type:c,style:v,className:p,controlledProgress:R,progress:S||0})))},Eu=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},AT=wu(Eu("bounce",!0));wu(Eu("slide",!0));wu(Eu("zoom"));wu(Eu("flip"));const DT={position:"top-right",transition:AT,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function LT(t){let e={...DT,...t};const n=t.stacked,[r,i]=T.useState(!0),s=T.useRef(null),{getToastToRender:o,isToastActive:a,count:l}=kT(e),{className:u,style:c,rtl:d,containerId:f}=e;function g(y){const w=Un("Toastify__toast-container",`Toastify__toast-container--${y}`,{"Toastify__toast-container--rtl":d});return lt(u)?u({position:y,rtl:d,defaultClassName:w}):Un(w,Aa(u))}function _(){n&&(i(!0),ne.play())}return xT(()=>{if(n){var y;const w=s.current.querySelectorAll('[data-in="true"]'),m=12,h=(y=e.position)==null?void 0:y.includes("top");let p=0,v=0;Array.from(w).reverse().forEach((E,C)=>{const S=E;S.classList.add("Toastify__toast--stacked"),C>0&&(S.dataset.collapsed=`${r}`),S.dataset.pos||(S.dataset.pos=h?"top":"bot");const I=p*(r?.2:1)+(r?0:m*C);S.style.setProperty("--y",`${h?I:-1*I}px`),S.style.setProperty("--g",`${m}`),S.style.setProperty("--s",""+(1-(r?v:0))),p+=S.offsetHeight,v+=.025})}},[r,l,n]),D.createElement("div",{ref:s,className:"Toastify",id:f,onMouseEnter:()=>{n&&(i(!1),ne.pause())},onMouseLeave:_},o((y,w)=>{const m=w.length?{...c}:{...c,pointerEvents:"none"};return D.createElement("div",{className:g(y),style:m,key:`container-${y}`},w.map(h=>{let{content:p,props:v}=h;return D.createElement(bT,{...v,stacked:n,collapseAll:_,isIn:a(v.toastId,v.containerId),style:v.style,key:`toast-${v.key}`},p)}))}))}var Pe=function(){return Pe=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Pe.apply(this,arguments)};function uo(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var te="-ms-",Ms="-moz-",K="-webkit-",x0="comm",Su="rule",Oh="decl",MT="@import",b0="@keyframes",FT="@layer",A0=Math.abs,xh=String.fromCharCode,Gd=Object.assign;function UT(t,e){return Ie(t,0)^45?(((e<<2^Ie(t,0))<<2^Ie(t,1))<<2^Ie(t,2))<<2^Ie(t,3):0}function D0(t){return t.trim()}function en(t,e){return(t=e.exec(t))?t[0]:t}function U(t,e,n){return t.replace(e,n)}function Da(t,e,n){return t.indexOf(e,n)}function Ie(t,e){return t.charCodeAt(e)|0}function Fi(t,e,n){return t.slice(e,n)}function Gt(t){return t.length}function L0(t){return t.length}function Ss(t,e){return e.push(t),t}function $T(t,e){return t.map(e).join("")}function dg(t,e){return t.filter(function(n){return!en(n,e)})}var Cu=1,Ui=1,M0=0,Tt=0,ge=0,es="";function Iu(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Cu,column:Ui,length:o,return:"",siblings:a}}function kn(t,e){return Gd(Iu("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Zr(t){for(;t.root;)t=kn(t.root,{children:[t]});Ss(t,t.siblings)}function zT(){return ge}function jT(){return ge=Tt>0?Ie(es,--Tt):0,Ui--,ge===10&&(Ui=1,Cu--),ge}function Mt(){return ge=Tt<M0?Ie(es,Tt++):0,Ui++,ge===10&&(Ui=1,Cu++),ge}function Rr(){return Ie(es,Tt)}function La(){return Tt}function Tu(t,e){return Fi(es,t,e)}function Kd(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function BT(t){return Cu=Ui=1,M0=Gt(es=t),Tt=0,[]}function WT(t){return es="",t}function Sc(t){return D0(Tu(Tt-1,qd(t===91?t+2:t===40?t+1:t)))}function VT(t){for(;(ge=Rr())&&ge<33;)Mt();return Kd(t)>2||Kd(ge)>3?"":" "}function HT(t,e){for(;--e&&Mt()&&!(ge<48||ge>102||ge>57&&ge<65||ge>70&&ge<97););return Tu(t,La()+(e<6&&Rr()==32&&Mt()==32))}function qd(t){for(;Mt();)switch(ge){case t:return Tt;case 34:case 39:t!==34&&t!==39&&qd(ge);break;case 40:t===41&&qd(t);break;case 92:Mt();break}return Tt}function GT(t,e){for(;Mt()&&t+ge!==57;)if(t+ge===84&&Rr()===47)break;return"/*"+Tu(e,Tt-1)+"*"+xh(t===47?t:Mt())}function KT(t){for(;!Kd(Rr());)Mt();return Tu(t,Tt)}function qT(t){return WT(Ma("",null,null,null,[""],t=BT(t),0,[0],t))}function Ma(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,f=0,g=0,_=0,y=1,w=1,m=1,h=0,p="",v=i,E=s,C=r,S=p;w;)switch(_=h,h=Mt()){case 40:if(_!=108&&Ie(S,d-1)==58){Da(S+=U(Sc(h),"&","&\f"),"&\f",A0(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:S+=Sc(h);break;case 9:case 10:case 13:case 32:S+=VT(_);break;case 92:S+=HT(La()-1,7);continue;case 47:switch(Rr()){case 42:case 47:Ss(YT(GT(Mt(),La()),e,n,l),l);break;default:S+="/"}break;case 123*y:a[u++]=Gt(S)*m;case 125*y:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+c:m==-1&&(S=U(S,/\f/g,"")),g>0&&Gt(S)-d&&Ss(g>32?hg(S+";",r,n,d-1,l):hg(U(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(Ss(C=fg(S,e,n,u,c,i,a,p,v=[],E=[],d,s),s),h===123)if(c===0)Ma(S,e,C,C,v,s,d,a,E);else switch(f===99&&Ie(S,3)===110?100:f){case 100:case 108:case 109:case 115:Ma(t,C,C,r&&Ss(fg(t,C,C,0,0,i,a,p,i,v=[],d,E),E),i,E,d,a,r?v:E);break;default:Ma(S,C,C,C,[""],E,0,a,E)}}u=c=g=0,y=m=1,p=S="",d=o;break;case 58:d=1+Gt(S),g=_;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&jT()==125)continue}switch(S+=xh(h),h*y){case 38:m=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(Gt(S)-1)*m,m=1;break;case 64:Rr()===45&&(S+=Sc(Mt())),f=Rr(),c=d=Gt(p=S+=KT(La())),h++;break;case 45:_===45&&Gt(S)==2&&(y=0)}}return s}function fg(t,e,n,r,i,s,o,a,l,u,c,d){for(var f=i-1,g=i===0?s:[""],_=L0(g),y=0,w=0,m=0;y<r;++y)for(var h=0,p=Fi(t,f+1,f=A0(w=o[y])),v=t;h<_;++h)(v=D0(w>0?g[h]+" "+p:U(p,/&\f/g,g[h])))&&(l[m++]=v);return Iu(t,e,n,i===0?Su:a,l,u,c,d)}function YT(t,e,n,r){return Iu(t,e,n,x0,xh(zT()),Fi(t,2,-2),0,r)}function hg(t,e,n,r,i){return Iu(t,e,n,Oh,Fi(t,0,r),Fi(t,r+1,-1),r,i)}function F0(t,e,n){switch(UT(t,e)){case 5103:return K+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+t+t;case 4789:return Ms+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return K+t+Ms+t+te+t+t;case 5936:switch(Ie(t,e+11)){case 114:return K+t+te+U(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return K+t+te+U(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return K+t+te+U(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return K+t+te+t+t;case 6165:return K+t+te+"flex-"+t+t;case 5187:return K+t+U(t,/(\w+).+(:[^]+)/,K+"box-$1$2"+te+"flex-$1$2")+t;case 5443:return K+t+te+"flex-item-"+U(t,/flex-|-self/g,"")+(en(t,/flex-|baseline/)?"":te+"grid-row-"+U(t,/flex-|-self/g,""))+t;case 4675:return K+t+te+"flex-line-pack"+U(t,/align-content|flex-|-self/g,"")+t;case 5548:return K+t+te+U(t,"shrink","negative")+t;case 5292:return K+t+te+U(t,"basis","preferred-size")+t;case 6060:return K+"box-"+U(t,"-grow","")+K+t+te+U(t,"grow","positive")+t;case 4554:return K+U(t,/([^-])(transform)/g,"$1"+K+"$2")+t;case 6187:return U(U(U(t,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),t,"")+t;case 5495:case 3959:return U(t,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return U(U(t,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+te+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+t+t;case 4200:if(!en(t,/flex-|baseline/))return te+"grid-column-align"+Fi(t,e)+t;break;case 2592:case 3360:return te+U(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,en(r.props,/grid-\w+-end/)})?~Da(t+(n=n[e].value),"span",0)?t:te+U(t,"-start","")+t+te+"grid-row-span:"+(~Da(n,"span",0)?en(n,/\d+/):+en(n,/\d+/)-+en(t,/\d+/))+";":te+U(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return en(r.props,/grid-\w+-start/)})?t:te+U(U(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return U(t,/(.+)-inline(.+)/,K+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Gt(t)-1-e>6)switch(Ie(t,e+1)){case 109:if(Ie(t,e+4)!==45)break;case 102:return U(t,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+Ms+(Ie(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Da(t,"stretch",0)?F0(U(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return U(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return te+i+":"+s+u+(o?te+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(Ie(t,e+6)===121)return U(t,":",":"+K)+t;break;case 6444:switch(Ie(t,Ie(t,14)===45?18:11)){case 120:return U(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+K+(Ie(t,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+te+"$2box$3")+t;case 100:return U(t,":",":"+te)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return U(t,"scroll-","scroll-snap-")+t}return t}function Sl(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function QT(t,e,n,r){switch(t.type){case FT:if(t.children.length)break;case MT:case Oh:return t.return=t.return||t.value;case x0:return"";case b0:return t.return=t.value+"{"+Sl(t.children,r)+"}";case Su:if(!Gt(t.value=t.props.join(",")))return""}return Gt(n=Sl(t.children,r))?t.return=t.value+"{"+n+"}":""}function XT(t){var e=L0(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function JT(t){return function(e){e.root||(e=e.return)&&t(e)}}function ZT(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Oh:t.return=F0(t.value,t.length,n);return;case b0:return Sl([kn(t,{value:U(t.value,"@","@"+K)})],r);case Su:if(t.length)return $T(n=t.props,function(i){switch(en(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Zr(kn(t,{props:[U(i,/:(read-\w+)/,":"+Ms+"$1")]})),Zr(kn(t,{props:[i]})),Gd(t,{props:dg(n,r)});break;case"::placeholder":Zr(kn(t,{props:[U(i,/:(plac\w+)/,":"+K+"input-$1")]})),Zr(kn(t,{props:[U(i,/:(plac\w+)/,":"+Ms+"$1")]})),Zr(kn(t,{props:[U(i,/:(plac\w+)/,te+"input-$1")]})),Zr(kn(t,{props:[i]})),Gd(t,{props:dg(n,r)});break}return""})}}var ek={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},st={},$i=typeof process<"u"&&st!==void 0&&(st.REACT_APP_SC_ATTR||st.SC_ATTR)||"data-styled",U0="active",$0="data-styled-version",ku="6.1.8",bh=`/*!sc*/
`,Ah=typeof window<"u"&&"HTMLElement"in window,tk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&st!==void 0&&st.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&st.REACT_APP_SC_DISABLE_SPEEDY!==""?st.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&st.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&st!==void 0&&st.SC_DISABLE_SPEEDY!==void 0&&st.SC_DISABLE_SPEEDY!==""&&st.SC_DISABLE_SPEEDY!=="false"&&st.SC_DISABLE_SPEEDY),nk={},Pu=Object.freeze([]),zi=Object.freeze({});function z0(t,e,n){return n===void 0&&(n=zi),t.theme!==n.theme&&t.theme||e||n.theme}var j0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),rk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ik=/(^-|-$)/g;function pg(t){return t.replace(rk,"-").replace(ik,"")}var sk=/(a)(d)/gi,pa=52,mg=function(t){return String.fromCharCode(t+(t>25?39:97))};function Yd(t){var e,n="";for(e=Math.abs(t);e>pa;e=e/pa|0)n=mg(e%pa)+n;return(mg(e%pa)+n).replace(sk,"$1-$2")}var Cc,B0=5381,hi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},W0=function(t){return hi(B0,t)};function V0(t){return Yd(W0(t)>>>0)}function ok(t){return t.displayName||t.name||"Component"}function Ic(t){return typeof t=="string"&&!0}var H0=typeof Symbol=="function"&&Symbol.for,G0=H0?Symbol.for("react.memo"):60115,ak=H0?Symbol.for("react.forward_ref"):60112,lk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},uk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},K0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ck=((Cc={})[ak]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Cc[G0]=K0,Cc);function gg(t){return("type"in(e=t)&&e.type.$$typeof)===G0?K0:"$$typeof"in t?ck[t.$$typeof]:lk;var e}var dk=Object.defineProperty,fk=Object.getOwnPropertyNames,_g=Object.getOwnPropertySymbols,hk=Object.getOwnPropertyDescriptor,pk=Object.getPrototypeOf,vg=Object.prototype;function q0(t,e,n){if(typeof e!="string"){if(vg){var r=pk(e);r&&r!==vg&&q0(t,r,n)}var i=fk(e);_g&&(i=i.concat(_g(e)));for(var s=gg(t),o=gg(e),a=0;a<i.length;++a){var l=i[a];if(!(l in uk||n&&n[l]||o&&l in o||s&&l in s)){var u=hk(e,l);try{dk(t,l,u)}catch{}}}}return t}function Mr(t){return typeof t=="function"}function Dh(t){return typeof t=="object"&&"styledComponentId"in t}function Cr(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Qd(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function co(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Xd(t,e,n){if(n===void 0&&(n=!1),!n&&!co(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Xd(t[r],e[r]);else if(co(e))for(var r in e)t[r]=Xd(t[r],e[r]);return t}function Lh(t,e){Object.defineProperty(t,"toString",{value:e})}function Fr(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var mk=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Fr(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(bh);return n},t}(),Fa=new Map,Cl=new Map,Ua=1,ma=function(t){if(Fa.has(t))return Fa.get(t);for(;Cl.has(Ua);)Ua++;var e=Ua++;return Fa.set(t,e),Cl.set(e,t),e},gk=function(t,e){Ua=e+1,Fa.set(t,e),Cl.set(e,t)},_k="style[".concat($i,"][").concat($0,'="').concat(ku,'"]'),vk=new RegExp("^".concat($i,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yk=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},wk=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(bh),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(vk);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(gk(c,u),yk(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function Ek(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Y0=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat($i,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute($i,U0),r.setAttribute($0,ku);var o=Ek();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Sk=function(){function t(e){this.element=Y0(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Fr(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),Ck=function(){function t(e){this.element=Y0(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Ik=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),yg=Ah,Tk={isServer:!Ah,useCSSOMInjection:!tk},Il=function(){function t(e,n,r){e===void 0&&(e=zi),n===void 0&&(n={});var i=this;this.options=Pe(Pe({},Tk),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Ah&&yg&&(yg=!1,function(s){for(var o=document.querySelectorAll(_k),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute($i)!==U0&&(wk(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Lh(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var f=function(m){return Cl.get(m)}(d);if(f===void 0)return"continue";var g=s.names.get(f),_=o.getGroup(d);if(g===void 0||_.length===0)return"continue";var y="".concat($i,".g").concat(d,'[id="').concat(f,'"]'),w="";g!==void 0&&g.forEach(function(m){m.length>0&&(w+="".concat(m,","))}),l+="".concat(_).concat(y,'{content:"').concat(w,'"}').concat(bh)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return ma(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Pe(Pe({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Ik(i):r?new Sk(i):new Ck(i)}(this.options),new mk(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(ma(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(ma(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(ma(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),kk=/&/g,Pk=/^\s*\/\/.*$/gm;function Q0(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Q0(n.children,e)),n})}function Rk(t){var e,n,r,i=t===void 0?zi:t,s=i.options,o=s===void 0?zi:s,a=i.plugins,l=a===void 0?Pu:a,u=function(f,g,_){return _.startsWith(n)&&_.endsWith(n)&&_.replaceAll(n,"").length>0?".".concat(e):f},c=l.slice();c.push(function(f){f.type===Su&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(kk,n).replace(r,u))}),o.prefix&&c.push(ZT),c.push(QT);var d=function(f,g,_,y){g===void 0&&(g=""),_===void 0&&(_=""),y===void 0&&(y="&"),e=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var w=f.replace(Pk,""),m=qT(_||g?"".concat(_," ").concat(g," { ").concat(w," }"):w);o.namespace&&(m=Q0(m,o.namespace));var h=[];return Sl(m,XT(c.concat(JT(function(p){return h.push(p)})))),h};return d.hash=l.length?l.reduce(function(f,g){return g.name||Fr(15),hi(f,g.name)},B0).toString():"",d}var Nk=new Il,Jd=Rk(),X0=D.createContext({shouldForwardProp:void 0,styleSheet:Nk,stylis:Jd});X0.Consumer;D.createContext(void 0);function Zd(){return T.useContext(X0)}var Ok=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Jd);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Lh(this,function(){throw Fr(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Jd),this.name+e.hash},t}(),xk=function(t){return t>="A"&&t<="Z"};function wg(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;xk(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var J0=function(t){return t==null||t===!1||t===""},Z0=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!J0(s)&&(Array.isArray(s)&&s.isCss||Mr(s)?r.push("".concat(wg(i),":"),s,";"):co(s)?r.push.apply(r,uo(uo(["".concat(i," {")],Z0(s),!1),["}"],!1)):r.push("".concat(wg(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in ek||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function qn(t,e,n,r){if(J0(t))return[];if(Dh(t))return[".".concat(t.styledComponentId)];if(Mr(t)){if(!Mr(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return qn(i,e,n,r)}var s;return t instanceof Ok?n?(t.inject(n,r),[t.getName(r)]):[t]:co(t)?Z0(t):Array.isArray(t)?Array.prototype.concat.apply(Pu,t.map(function(o){return qn(o,e,n,r)})):[t.toString()]}function ew(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Mr(n)&&!Dh(n))return!1}return!0}var bk=W0(ku),Ak=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ew(e),this.componentId=n,this.baseHash=hi(bk,n),this.baseStyle=r,Il.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Cr(i,this.staticRulesId);else{var s=Qd(qn(this.rules,e,n,r)),o=Yd(hi(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Cr(i,o),this.staticRulesId=o}else{for(var l=hi(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var f=Qd(qn(d,e,n,r));l=hi(l,f+c),u+=f}}if(u){var g=Yd(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=Cr(i,g)}}return i},t}(),fo=D.createContext(void 0);fo.Consumer;function Dk(t){var e=D.useContext(fo),n=T.useMemo(function(){return function(r,i){if(!r)throw Fr(14);if(Mr(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw Fr(8);return i?Pe(Pe({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?D.createElement(fo.Provider,{value:n},t.children):null}var Tc={};function Lk(t,e,n){var r=Dh(t),i=t,s=!Ic(t),o=e.attrs,a=o===void 0?Pu:o,l=e.componentId,u=l===void 0?function(v,E){var C=typeof v!="string"?"sc":pg(v);Tc[C]=(Tc[C]||0)+1;var S="".concat(C,"-").concat(V0(ku+C+Tc[C]));return E?"".concat(E,"-").concat(S):S}(e.displayName,e.parentComponentId):l,c=e.displayName,d=c===void 0?function(v){return Ic(v)?"styled.".concat(v):"Styled(".concat(ok(v),")")}(t):c,f=e.displayName&&e.componentId?"".concat(pg(e.displayName),"-").concat(e.componentId):e.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,_=e.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(e.shouldForwardProp){var w=e.shouldForwardProp;_=function(v,E){return y(v,E)&&w(v,E)}}else _=y}var m=new Ak(n,f,r?i.componentStyle:void 0);function h(v,E){return function(C,S,I){var N=C.attrs,x=C.componentStyle,Q=C.defaultProps,De=C.foldedComponentIds,qe=C.styledComponentId,it=C.target,Bt=D.useContext(fo),Wt=Zd(),Ne=C.shouldForwardProp||Wt.shouldForwardProp,R=z0(S,Bt,Q)||zi,b=function(ve,he,Be){for(var hr,pr=Pe(Pe({},he),{className:void 0,theme:Be}),Ku=0;Ku<ve.length;Ku+=1){var qo=Mr(hr=ve[Ku])?hr(pr):hr;for(var Cn in qo)pr[Cn]=Cn==="className"?Cr(pr[Cn],qo[Cn]):Cn==="style"?Pe(Pe({},pr[Cn]),qo[Cn]):qo[Cn]}return he.className&&(pr.className=Cr(pr.className,he.className)),pr}(N,S,R),A=b.as||it,V={};for(var $ in b)b[$]===void 0||$[0]==="$"||$==="as"||$==="theme"&&b.theme===R||($==="forwardedAs"?V.as=b.forwardedAs:Ne&&!Ne($,A)||(V[$]=b[$]));var me=function(ve,he){var Be=Zd(),hr=ve.generateAndInjectStyles(he,Be.styleSheet,Be.stylis);return hr}(x,b),oe=Cr(De,qe);return me&&(oe+=" "+me),b.className&&(oe+=" "+b.className),V[Ic(A)&&!j0.has(A)?"class":"className"]=oe,V.ref=I,T.createElement(A,V)}(p,v,E)}h.displayName=d;var p=D.forwardRef(h);return p.attrs=g,p.componentStyle=m,p.displayName=d,p.shouldForwardProp=_,p.foldedComponentIds=r?Cr(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=f,p.target=r?i.target:t,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(E){for(var C=[],S=1;S<arguments.length;S++)C[S-1]=arguments[S];for(var I=0,N=C;I<N.length;I++)Xd(E,N[I],!0);return E}({},i.defaultProps,v):v}}),Lh(p,function(){return".".concat(p.styledComponentId)}),s&&q0(p,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Eg(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Sg=function(t){return Object.assign(t,{isCss:!0})};function tw(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Mr(t)||co(t))return Sg(qn(Eg(Pu,uo([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?qn(r):Sg(qn(Eg(r,e)))}function ef(t,e,n){if(n===void 0&&(n=zi),!e)throw Fr(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,tw.apply(void 0,uo([i],s,!1)))};return r.attrs=function(i){return ef(t,e,Pe(Pe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ef(t,e,Pe(Pe({},n),i))},r}var nw=function(t){return ef(Lk,t)},_t=nw;j0.forEach(function(t){_t[t]=nw(t)});var Mk=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=ew(e),Il.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(Qd(qn(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&Il.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function Fk(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=tw.apply(void 0,uo([t],e,!1)),i="sc-global-".concat(V0(JSON.stringify(r))),s=new Mk(r,i),o=function(l){var u=Zd(),c=D.useContext(fo),d=D.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,c,u.stylis),D.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,d,f){if(s.isStatic)s.renderStyles(l,nk,c,f);else{var g=Pe(Pe({},u),{theme:z0(u,d,o.defaultProps)});s.renderStyles(l,g,c,f)}}return D.memo(o)}var rw={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Cg=D.createContext&&D.createContext(rw),Uk=["attr","size","title"];function $k(t,e){if(t==null)return{};var n=zk(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function zk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Tl(){return Tl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tl.apply(this,arguments)}function Ig(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function kl(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ig(Object(n),!0).forEach(function(r){jk(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ig(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function jk(t,e,n){return e=Bk(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Bk(t){var e=Wk(t,"string");return typeof e=="symbol"?e:String(e)}function Wk(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function iw(t){return t&&t.map((e,n)=>D.createElement(e.tag,kl({key:n},e.attr),iw(e.child)))}function Vk(t){return e=>D.createElement(Hk,Tl({attr:kl({},t.attr)},e),iw(t.child))}function Hk(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=$k(t,Uk),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),D.createElement("svg",Tl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:kl(kl({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&D.createElement("title",null,s),t.children)};return Cg!==void 0?D.createElement(Cg.Consumer,null,n=>e(n)):e(rw)}function Gk(t){return Vk({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16 13v-2H7V8l-5 4 5 4v-3z"},child:[]},{tag:"path",attr:{d:"M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"},child:[]}]})(t)}const Kk=_t.div`
    margin: 0 auto;
    height: 100%;
    max-width: 1440px;
    padding: 20px 128px 96px 128px;
    background: ${t=>t.theme.colors.secondBackground};
`,qk=_t.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
`,Yk=_t.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,Qk=_t.span`
    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: ${t=>t.theme.colors.black};
`,Xk=_t.div`
    display: flex;
    margin-left: auto;
    /* margin-right: auto; */
    gap: 28px;
`,kc=_t(Nh)`
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 16px;
    line-height: 125%;
    color: ${t=>t.theme.colors.black};
    text-decoration: none;

    &:hover {
        cursor: pointer;
        color: ${t=>t.theme.colors.pink};
    }
`,Jk=_t.div`
    display: flex;
    margin-left: auto;
    gap: 16px;
`,Zk=_t(Nh)`
    display: flex;
    gap: 8px;
    align-items: center;
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    color: ${t=>t.theme.colors.black};
    text-decoration: none;

    &:hover {
        cursor: pointer;

        color: ${t=>t.theme.colors.pink};
        border-radius: 5px;
    }
`,eP=_t(Nh)`
    border-radius: 12px;
    padding: 14px 39px;
    background: ${t=>t.theme.colors.black};
    text-decoration: none;
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 125%;
    color: #fff;

    &:hover {
        cursor: pointer;
        background: ${t=>t.theme.colors.pink};
        color: ${t=>t.theme.colors.background};
    }
`,tP=_t.button`
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    background: none;
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    font-size: 16px;
    line-height: 1.25;
    color: ${t=>t.theme.colors.black};
    text-decoration: none;

    &:hover {
        cursor: pointer;
        color: ${t=>t.theme.colors.pink};
    }
`,nP=_t(Gk)`
    stroke: ${t=>t.theme.colors.pink};
    font-size: 1.2rem;
    &:hover {
        cursor: pointer;
    }
`,rP=_t.span`
    font-style: italic;
`,iP="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_27_302)'%3e%3cpath%20d='M14%2028C21.732%2028%2028%2021.732%2028%2014C28%206.26801%2021.732%200%2014%200C6.26801%200%200%206.26801%200%2014C0%2021.732%206.26801%2028%2014%2028Z'%20fill='%23FFDA44'%20/%3e%3cpath%20d='M0%2014C0%206.26806%206.26806%200%2014%200C21.7319%200%2028%206.26806%2028%2014'%20fill='%23338AF3'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_27_302'%3e%3crect%20width='28'%20height='28'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";var sw={exports:{}},ow={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mo=T;function sP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oP=typeof Object.is=="function"?Object.is:sP,aP=Mo.useSyncExternalStore,lP=Mo.useRef,uP=Mo.useEffect,cP=Mo.useMemo,dP=Mo.useDebugValue;ow.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=lP(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=cP(function(){function l(g){if(!u){if(u=!0,c=g,g=r(g),i!==void 0&&o.hasValue){var _=o.value;if(i(_,g))return d=_}return d=g}if(_=d,oP(c,g))return _;var y=r(g);return i!==void 0&&i(_,y)?_:(c=g,d=y)}var u=!1,c,d,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,i]);var a=aP(t,s[0],s[1]);return uP(function(){o.hasValue=!0,o.value=a},[a]),dP(a),a};sw.exports=ow;var fP=sw.exports,ut="default"in Hc?D:Hc,Tg=Symbol.for("react-redux-context"),kg=typeof globalThis<"u"?globalThis:{};function hP(){if(!ut.createContext)return{};const t=kg[Tg]??(kg[Tg]=new Map);let e=t.get(ut.createContext);return e||(e=ut.createContext(null),t.set(ut.createContext,e)),e}var Zn=hP(),pP=()=>{throw new Error("uSES not initialized!")};function Mh(t=Zn){return function(){return ut.useContext(t)}}var aw=Mh(),lw=pP,mP=t=>{lw=t},gP=(t,e)=>t===e;function _P(t=Zn){const e=t===Zn?aw:Mh(t),n=(r,i={})=>{const{equalityFn:s=gP,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:c,identityFunctionCheck:d}=e();ut.useRef(!0);const f=ut.useCallback({[r.name](_){return r(_)}}[r.name],[r,c,o.stabilityCheck]),g=lw(l.addNestedSub,a.getState,u||a.getState,f,s);return ut.useDebugValue(g),g};return Object.assign(n,{withTypes:()=>n}),n}var ho=_P();function vP(t){t()}function yP(){let t=null,e=null;return{clear(){t=null,e=null},notify(){vP(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var Pg={notify(){},get:()=>[]};function wP(t,e){let n,r=Pg,i=0,s=!1;function o(y){c();const w=r.subscribe(y);let m=!1;return()=>{m||(m=!0,w(),d())}}function a(){r.notify()}function l(){_.onStateChange&&_.onStateChange()}function u(){return s}function c(){i++,n||(n=e?e.addNestedSub(l):t.subscribe(l),r=yP())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Pg)}function f(){s||(s=!0,c())}function g(){s&&(s=!1,d())}const _={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:g,getListeners:()=>r};return _}var EP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",SP=EP?ut.useLayoutEffect:ut.useEffect;function CP({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=ut.useMemo(()=>{const u=wP(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=ut.useMemo(()=>t.getState(),[t]);SP(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||Zn;return ut.createElement(l.Provider,{value:o},n)}var IP=CP;function uw(t=Zn){const e=t===Zn?aw:Mh(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var TP=uw();function kP(t=Zn){const e=t===Zn?TP:uw(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var PP=kP();mP(fP.useSyncExternalStoreWithSelector);const RP=t=>t.user,Ru=t=>t.user.isAuthenticated,QM=t=>t.user.favorite,cw="/",Fh="/teachers",dw="/favorites",Pl="/login",tf="/registration";var Rg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw ts(e)},ts=function(t){return new Error("Firebase Database ("+fw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},NP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Uh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new OP;const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class OP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pw=function(t){const e=hw(t);return Uh.encodeByteArray(e,!0)},Rl=function(t){return pw(t).replace(/\./g,"")},Nl=function(t){try{return Uh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(t){return po(void 0,t)}function po(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!bP(n)||(t[n]=po(t[n],e[n]));return t}function bP(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=()=>AP().__FIREBASE_DEFAULTS__,LP=()=>{if(typeof process>"u"||typeof Rg>"u")return;const t=Rg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nl(t[1]);return e&&JSON.parse(e)},$h=()=>{try{return DP()||LP()||MP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mw=t=>{var e,n;return(n=(e=$h())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},FP=t=>{const e=mw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gw=()=>{var t;return(t=$h())===null||t===void 0?void 0:t.config},_w=t=>{var e;return(e=$h())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Rl(JSON.stringify(n)),Rl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function $P(){return typeof self=="object"&&self.self===self}function zP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jP(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yw(){return fw.NODE_ADMIN===!0}function BP(){try{return typeof indexedDB=="object"}catch{return!1}}function WP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VP,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qr.prototype.create)}}class qr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?HP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new wn(i,a,r)}}function HP(t,e){return t.replace(GP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const GP=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){return JSON.parse(t)}function ke(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=mo(Nl(s[0])||""),n=mo(Nl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},KP=function(t){const e=ww(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},qP=function(t){const e=ww(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ji(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function nf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ol(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function xl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ng(s)&&Ng(o)){if(!xl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ng(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Cs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Is(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Ew(t,e){const n=new QP(t,e);return n.subscribe.bind(n)}class QP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");XP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Pc),i.error===void 0&&(i.error=Pc),i.complete===void 0&&(i.complete=Pc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pc(){}function Sw(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,P(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){return t&&t._delegate?t._delegate:t}class er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tR(e))try{this.getOrInitializeService({instanceIdentifier:_r})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=_r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_r){return this.instances.has(e)}getOptions(e=_r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_r){return this.component?this.component.multipleInstances?e:_r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eR(t){return t===_r?void 0:t}function tR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ZP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=[];var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const Cw={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},rR=q.INFO,iR={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},sR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=iR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ou{constructor(e){this.name=e,this._logLevel=rR,this._logHandler=sR,this._userLogHandler=null,Bh.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}function oR(t){Bh.forEach(e=>{e.setLogLevel(t)})}function aR(t,e){for(const n of Bh){let r=null;e&&e.level&&(r=Cw[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:q[s].toLowerCase(),message:a,args:o,type:i.name})}}}const lR=(t,e)=>e.some(n=>t instanceof n);let Og,xg;function uR(){return Og||(Og=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cR(){return xg||(xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Iw=new WeakMap,rf=new WeakMap,Tw=new WeakMap,Rc=new WeakMap,Wh=new WeakMap;function dR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Yn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Iw.set(n,t)}).catch(()=>{}),Wh.set(e,t),e}function fR(t){if(rf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});rf.set(t,e)}let sf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Tw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hR(t){sf=t(sf)}function pR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Nc(this),e,...n);return Tw.set(r,e.sort?e.sort():[e]),Yn(r)}:cR().includes(t)?function(...e){return t.apply(Nc(this),e),Yn(Iw.get(this))}:function(...e){return Yn(t.apply(Nc(this),e))}}function mR(t){return typeof t=="function"?pR(t):(t instanceof IDBTransaction&&fR(t),lR(t,uR())?new Proxy(t,sf):t)}function Yn(t){if(t instanceof IDBRequest)return dR(t);if(Rc.has(t))return Rc.get(t);const e=mR(t);return e!==t&&(Rc.set(t,e),Wh.set(e,t)),e}const Nc=t=>Wh.get(t);function gR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Yn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Yn(o.result),l.oldVersion,l.newVersion,Yn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const _R=["get","getKey","getAll","getAllKeys","count"],vR=["put","add","delete","clear"],Oc=new Map;function bg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oc.get(e))return Oc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=vR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_R.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Oc.set(e,s),s}hR(t=>({...t,get:(e,n,r)=>bg(e,n)||t.get(e,n,r),has:(e,n)=>!!bg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const of="@firebase/app",Ag="0.9.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Ou("@firebase/app"),ER="@firebase/app-compat",SR="@firebase/analytics-compat",CR="@firebase/analytics",IR="@firebase/app-check-compat",TR="@firebase/app-check",kR="@firebase/auth",PR="@firebase/auth-compat",RR="@firebase/database",NR="@firebase/database-compat",OR="@firebase/functions",xR="@firebase/functions-compat",bR="@firebase/installations",AR="@firebase/installations-compat",DR="@firebase/messaging",LR="@firebase/messaging-compat",MR="@firebase/performance",FR="@firebase/performance-compat",UR="@firebase/remote-config",$R="@firebase/remote-config-compat",zR="@firebase/storage",jR="@firebase/storage-compat",BR="@firebase/firestore",WR="@firebase/firestore-compat",VR="firebase",HR="10.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="[DEFAULT]",GR={[of]:"fire-core",[ER]:"fire-core-compat",[CR]:"fire-analytics",[SR]:"fire-analytics-compat",[TR]:"fire-app-check",[IR]:"fire-app-check-compat",[kR]:"fire-auth",[PR]:"fire-auth-compat",[RR]:"fire-rtdb",[NR]:"fire-rtdb-compat",[OR]:"fire-fn",[xR]:"fire-fn-compat",[bR]:"fire-iid",[AR]:"fire-iid-compat",[DR]:"fire-fcm",[LR]:"fire-fcm-compat",[MR]:"fire-perf",[FR]:"fire-perf-compat",[UR]:"fire-rc",[$R]:"fire-rc-compat",[zR]:"fire-gcs",[jR]:"fire-gcs-compat",[BR]:"fire-fst",[WR]:"fire-fst-compat","fire-js":"fire-js",[VR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new Map,go=new Map;function bl(t,e){try{t.container.addComponent(e)}catch(n){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kw(t,e){t.container.addOrOverwriteComponent(e)}function rr(t){const e=t.name;if(go.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;go.set(e,t);for(const n of nr.values())bl(n,t);return!0}function Fo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function KR(t,e,n=tr){Fo(t,e).clearInstance(n)}function qR(){go.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},un=new qr("app","Firebase",YR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QR=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=HR;function Vh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw un.create("bad-app-name",{appName:String(i)});if(n||(n=gw()),!n)throw un.create("no-options");const s=nr.get(i);if(s){if(xl(n,s.options)&&xl(r,s.config))return s;throw un.create("duplicate-app",{appName:i})}const o=new nR(i);for(const l of go.values())o.addComponent(l);const a=new QR(n,r,o);return nr.set(i,a),a}function Hh(t=tr){const e=nr.get(t);if(!e&&t===tr&&gw())return Vh();if(!e)throw un.create("no-app",{appName:t});return e}function XR(){return Array.from(nr.values())}async function Pw(t){const e=t.name;nr.has(e)&&(nr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Ft(t,e,n){var r;let i=(r=GR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(a.join(" "));return}rr(new er(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Rw(t,e){if(t!==null&&typeof t!="function")throw un.create("invalid-log-argument");aR(t,e)}function Nw(t){oR(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR="firebase-heartbeat-database",ZR=1,_o="firebase-heartbeat-store";let xc=null;function Ow(){return xc||(xc=gR(JR,ZR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_o)}catch(n){console.warn(n)}}}}).catch(t=>{throw un.create("idb-open",{originalErrorMessage:t.message})})),xc}async function eN(t){try{const n=(await Ow()).transaction(_o),r=await n.objectStore(_o).get(xw(t));return await n.done,r}catch(e){if(e instanceof wn)Ur.warn(e.message);else{const n=un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ur.warn(n.message)}}}async function Dg(t,e){try{const r=(await Ow()).transaction(_o,"readwrite");await r.objectStore(_o).put(e,xw(t)),await r.done}catch(n){if(n instanceof wn)Ur.warn(n.message);else{const r=un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ur.warn(r.message)}}}function xw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=1024,nN=30*24*60*60*1e3;class rN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lg();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=nN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lg(),{heartbeatsToSend:r,unsentEntries:i}=iN(this._heartbeatsCache.heartbeats),s=Rl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Lg(){return new Date().toISOString().substring(0,10)}function iN(t,e=tN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BP()?WP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Mg(t){return Rl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(t){rr(new er("platform-logger",e=>new yR(e),"PRIVATE")),rr(new er("heartbeat",e=>new rN(e),"PRIVATE")),Ft(of,Ag,t),Ft(of,Ag,"esm2017"),Ft("fire-js","")}oN("");const aN=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:wn,SDK_VERSION:dr,_DEFAULT_ENTRY_NAME:tr,_addComponent:bl,_addOrOverwriteComponent:kw,_apps:nr,_clearComponents:qR,_components:go,_getProvider:Fo,_registerComponent:rr,_removeServiceInstance:KR,deleteApp:Pw,getApp:Hh,getApps:XR,initializeApp:Vh,onLog:Rw,registerVersion:Ft,setLogLevel:Nw},Symbol.toStringTag,{value:"Module"}));function Gh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function bw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lN=bw,Aw=new qr("auth","Firebase",bw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=new Ou("@firebase/auth");function uN(t,...e){Al.logLevel<=q.WARN&&Al.warn(`Auth (${dr}): ${t}`,...e)}function $a(t,...e){Al.logLevel<=q.ERROR&&Al.error(`Auth (${dr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,...e){throw Kh(t,...e)}function Qt(t,...e){return Kh(t,...e)}function cN(t,e,n){const r=Object.assign(Object.assign({},lN()),{[e]:n});return new qr("auth","Firebase",r).create(e,{appName:t.name})}function Kh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Aw.create(t,...e)}function F(t,e,...n){if(!t)throw Kh(e,...n)}function sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $a(e),new Error(e)}function mn(t,e){t||sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dN(){return Fg()==="http:"||Fg()==="https:"}function Fg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dN()||zP()||"connection"in navigator)?navigator.onLine:!0}function hN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.shortDelay=e,this.longDelay=n,mn(n>e,"Short delay should be less than long delay!"),this.isMobile=jh()||vw()}get(){return fN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t,e){mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=new Uo(3e4,6e4);function fr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function En(t,e,n,r,i={}){return Lw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ns(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Dw.fetch()(Mw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Lw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pN),e);try{const i=new _N(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ga(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ga(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ga(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ga(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw cN(t,c,u);jt(t,c)}}catch(i){if(i instanceof wn)throw i;jt(t,"network-request-failed",{message:String(i)})}}async function $o(t,e,n,r,i={}){const s=await En(t,e,n,r,i);return"mfaPendingCredential"in s&&jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Mw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?qh(t.config,i):`${t.config.apiScheme}://${i}`}function gN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _N{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),mN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ga(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qt(t,e,r);return i.customData._tokenResponse=n,i}function Ug(t){return t!==void 0&&t.enterprise!==void 0}class vN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return gN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function yN(t,e){return En(t,"GET","/v2/recaptchaConfig",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wN(t,e){return En(t,"POST","/v1/accounts:delete",e)}async function EN(t,e){return En(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SN(t,e=!1){const n=vt(t),r=await n.getIdToken(e),i=Yh(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fs(bc(i.auth_time)),issuedAtTime:Fs(bc(i.iat)),expirationTime:Fs(bc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bc(t){return Number(t)*1e3}function Yh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $a("JWT malformed, contained fewer than 3 sections"),null;try{const i=Nl(n);return i?JSON.parse(i):($a("Failed to decode base64 JWT payload"),null)}catch(i){return $a("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function CN(t){const e=Yh(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&IN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fs(this.lastLoginAt),this.creationTime=Fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Bi(t,EN(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?RN(s.providerUserInfo):[],a=PN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Fw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function kN(t){const e=vt(t);await Dl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function RN(t){return t.map(e=>{var{providerId:n}=e,r=Gh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NN(t,e){const n=await Lw(t,{},async()=>{const r=ns({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Mw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Dw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ON(t,e){return En(t,"POST","/v2/accounts:revokeToken",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):CN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await NN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new vo;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vo,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Gh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Bi(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SN(this,e)}reload(){return kN(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Dl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Bi(this,wN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:p,emailVerified:v,isAnonymous:E,providerData:C,stsTokenManager:S}=n;F(p&&S,e,"internal-error");const I=vo.fromJSON(this.name,S);F(typeof p=="string",e,"internal-error"),Tn(d,e.name),Tn(f,e.name),F(typeof v=="boolean",e,"internal-error"),F(typeof E=="boolean",e,"internal-error"),Tn(g,e.name),Tn(_,e.name),Tn(y,e.name),Tn(w,e.name),Tn(m,e.name),Tn(h,e.name);const N=new Nr({uid:p,auth:e,email:f,emailVerified:v,displayName:d,isAnonymous:E,photoURL:_,phoneNumber:g,tenantId:y,stsTokenManager:I,createdAt:m,lastLoginAt:h});return C&&Array.isArray(C)&&(N.providerData=C.map(x=>Object.assign({},x))),w&&(N._redirectEventId=w),N}static async _fromIdTokenResponse(e,n,r=!1){const i=new vo;i.updateFromServerResponse(n);const s=new Nr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Dl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=new Map;function on(t){mn(t instanceof Function,"Expected a class definition");let e=$g.get(t);return e?(mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$g.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Uw.type="NONE";const zg=Uw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t,e,n){return`firebase:${t}:${e}:${n}`}class Ci{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=za(this.userKey,i.apiKey,s),this.fullPersistenceKey=za("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ci(on(zg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||on(zg);const o=za(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Nr._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ci(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ci(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($w(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ww(e))return"Blackberry";if(Vw(e))return"Webos";if(Qh(e))return"Safari";if((e.includes("chrome/")||zw(e))&&!e.includes("edge/"))return"Chrome";if(Bw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $w(t=je()){return/firefox\//i.test(t)}function Qh(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zw(t=je()){return/crios\//i.test(t)}function jw(t=je()){return/iemobile/i.test(t)}function Bw(t=je()){return/android/i.test(t)}function Ww(t=je()){return/blackberry/i.test(t)}function Vw(t=je()){return/webos/i.test(t)}function xu(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xN(t=je()){var e;return xu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bN(){return jP()&&document.documentMode===10}function Hw(t=je()){return xu(t)||Bw(t)||Vw(t)||Ww(t)||/windows phone/i.test(t)||jw(t)}function AN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(t,e=[]){let n;switch(t){case"Browser":n=jg(je());break;case"Worker":n=`${jg(je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${dr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(t,e={}){return En(t,"GET","/v2/passwordPolicy",fr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=6;class FN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:MN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bg(this),this.idTokenSubscription=new Bg(this),this.beforeStateQueue=new DN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Aw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=on(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ci.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Dl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?vt(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LN(this),n=new FN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ON(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&on(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Ci.create(this,[on(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yr(t){return vt(t)}class Bg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ew(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $N(t){bu=t}function Kw(t){return bu.loadJS(t)}function zN(){return bu.recaptchaEnterpriseScript}function jN(){return bu.gapiScript}function BN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const WN="recaptcha-enterprise",VN="NO_RECAPTCHA";class HN{constructor(e){this.type=WN,this.auth=Yr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{yN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new vN(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Ug(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(VN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Ug(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=zN();l.length!==0&&(l+=a),Kw(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Wg(t,e,n,r=!1){const i=new HN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function lf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Wg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Wg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(t,e){const n=Fo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(xl(s,e??{}))return i;jt(i,"already-initialized")}return n.initialize({options:e})}function KN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(on);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qN(t,e,n){const r=Yr(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=qw(e),{host:o,port:a}=YN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||QN()}function qw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YN(t){const e=qw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Vg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Vg(o)}}}function Vg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,n){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}async function XN(t,e){return En(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JN(t,e){return $o(t,"POST","/v1/accounts:signInWithPassword",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZN(t,e){return $o(t,"POST","/v1/accounts:signInWithEmailLink",fr(t,e))}async function eO(t,e){return $o(t,"POST","/v1/accounts:signInWithEmailLink",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends Xh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new yo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new yo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lf(e,n,"signInWithPassword",JN);case"emailLink":return ZN(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lf(e,r,"signUpPassword",XN);case"emailLink":return eO(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(t,e){return $o(t,"POST","/v1/accounts:signInWithIdp",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO="http://localhost";class $r extends Xh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Gh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new $r(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ii(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ii(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ii(e,n)}buildRequest(){const e={requestUri:tO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ns(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rO(t){const e=Cs(Is(t)).link,n=e?Cs(Is(e)).deep_link_id:null,r=Cs(Is(t)).deep_link_id;return(r?Cs(Is(r)).link:null)||r||n||e||t}class Jh{constructor(e){var n,r,i,s,o,a;const l=Cs(Is(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=nO((i=l.mode)!==null&&i!==void 0?i:null);F(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=rO(e);try{return new Jh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.providerId=rs.PROVIDER_ID}static credential(e,n){return yo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Jh.parseLink(n);return F(r,"argument-error"),yo._fromEmailAndCode(e,r.code,r.tenantId)}}rs.PROVIDER_ID="password";rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends Yw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends zo{constructor(){super("facebook.com")}static credential(e){return $r._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $r._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends zo{constructor(){super("github.com")}static credential(e){return $r._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends zo{constructor(){super("twitter.com")}static credential(e,n){return $r._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iO(t,e){return $o(t,"POST","/v1/accounts:signUp",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Nr._fromIdTokenResponse(e,r,i),o=Hg(r);return new zr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Hg(r);return new zr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Hg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends wn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ll.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ll(e,n,r,i)}}function Qw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ll._fromErrorAndOperation(t,s,e,r):s})}async function sO(t,e,n=!1){const r=await Bi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oO(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Bi(t,Qw(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=Yh(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),zr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(t,e,n=!1){const r="signIn",i=await Qw(t,r,e),s=await zr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function aO(t,e){return Xw(Yr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(t){const e=Yr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function JM(t,e,n){const r=Yr(t),o=await lf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",iO).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Jw(t),l}),a=await zr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function ZM(t,e,n){return aO(vt(t),rs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lO(t,e){return En(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e2(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=vt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Bi(r,lO(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function uO(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function cO(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}function dO(t){return vt(t).signOut()}const Ml="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ml,"1"),this.storage.removeItem(Ml),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(){const t=je();return Qh(t)||xu(t)}const hO=1e3,pO=10;class eE extends Zw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fO()&&AN(),this.fallbackToPolling=Hw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);bN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,pO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eE.type="LOCAL";const mO=eE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE extends Zw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tE.type="SESSION";const nE=tE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Au(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await gO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Au.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Zh("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return window}function vO(t){Xt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function yO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function EO(){return rE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="firebaseLocalStorageDb",SO=1,Fl="firebaseLocalStorage",sE="fbase_key";class jo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Du(t,e){return t.transaction([Fl],e?"readwrite":"readonly").objectStore(Fl)}function CO(){const t=indexedDB.deleteDatabase(iE);return new jo(t).toPromise()}function uf(){const t=indexedDB.open(iE,SO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fl,{keyPath:sE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fl)?e(r):(r.close(),await CO(),e(await uf()))})})}async function Gg(t,e,n){const r=Du(t,!0).put({[sE]:e,value:n});return new jo(r).toPromise()}async function IO(t,e){const n=Du(t,!1).get(e),r=await new jo(n).toPromise();return r===void 0?null:r.value}function Kg(t,e){const n=Du(t,!0).delete(e);return new jo(n).toPromise()}const TO=800,kO=3;class oE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Au._getInstance(EO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yO(),!this.activeServiceWorker)return;this.sender=new _O(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uf();return await Gg(e,Ml,"1"),await Kg(e,Ml),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>IO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Du(i,!1).getAll();return new jo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oE.type="LOCAL";const PO=oE;new Uo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(t,e){return e?on(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep extends Xh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function NO(t){return Xw(t.auth,new ep(t),t.bypassAuthState)}function OO(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),oO(n,new ep(t),t.bypassAuthState)}async function xO(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),sO(n,new ep(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NO;case"linkViaPopup":case"linkViaRedirect":return xO;case"reauthViaPopup":case"reauthViaRedirect":return OO;default:jt(this.auth,"internal-error")}}resolve(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO=new Uo(2e3,1e4);class pi extends aE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,pi.currentPopupAction&&pi.currentPopupAction.cancel(),pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){mn(this.filter.length===1,"Popup operations only handle one event");const e=Zh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bO.get())};e()}}pi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO="pendingRedirect",ja=new Map;class DO extends aE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ja.get(this.auth._key());if(!e){try{const r=await LO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ja.set(this.auth._key(),e)}return this.bypassAuthState||ja.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LO(t,e){const n=UO(e),r=FO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function MO(t,e){ja.set(t._key(),e)}function FO(t){return on(t._redirectPersistence)}function UO(t){return za(AO,t.config.apiKey,t.name)}async function $O(t,e,n=!1){const r=Yr(t),i=RO(r,e),o=await new DO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO=10*60*1e3;class jO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!lE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zO&&this.cachedEventUids.clear(),this.cachedEventUids.has(qg(e))}saveEventToCache(e){this.cachedEventUids.add(qg(e)),this.lastProcessedEventTime=Date.now()}}function qg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function lE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WO(t,e={}){return En(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HO=/^https?/;async function GO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WO(t);for(const n of e)try{if(KO(n))return}catch{}jt(t,"unauthorized-domain")}function KO(t){const e=af(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!HO.test(n))return!1;if(VO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO=new Uo(3e4,6e4);function Yg(){const t=Xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YO(t){return new Promise((e,n)=>{var r,i,s;function o(){Yg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yg(),n(Qt(t,"network-request-failed"))},timeout:qO.get()})}if(!((i=(r=Xt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Xt().gapi)===null||s===void 0)&&s.load)o();else{const a=BN("iframefcb");return Xt()[a]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},Kw(`${jN()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ba=null,e})}let Ba=null;function QO(t){return Ba=Ba||YO(t),Ba}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO=new Uo(5e3,15e3),JO="__/auth/iframe",ZO="emulator/auth/iframe",ex={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nx(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qh(e,ZO):`https://${t.config.authDomain}/${JO}`,r={apiKey:e.apiKey,appName:t.name,v:dr},i=tx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ns(r).slice(1)}`}async function rx(t){const e=await QO(t),n=Xt().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:nx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ex,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),a=Xt().setTimeout(()=>{s(o)},XO.get());function l(){Xt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sx=500,ox=600,ax="_blank",lx="http://localhost";class Qg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ux(t,e,n,r=sx,i=ox){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ix),{width:r.toString(),height:i.toString(),top:s,left:o}),u=je().toLowerCase();n&&(a=zw(u)?ax:n),$w(u)&&(e=e||lx,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,_])=>`${f}${g}=${_},`,"");if(xN(u)&&a!=="_self")return cx(e||"",a),new Qg(null);const d=window.open(e||"",a,c);F(d,t,"popup-blocked");try{d.focus()}catch{}return new Qg(d)}function cx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx="__/auth/handler",fx="emulator/auth/handler",hx=encodeURIComponent("fac");async function Xg(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:dr,eventId:i};if(e instanceof Yw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof zo){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${hx}=${encodeURIComponent(l)}`:"";return`${px(t)}?${ns(a).slice(1)}${u}`}function px({config:t}){return t.emulator?qh(t,fx):`https://${t.authDomain}/${dx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="webStorageSupport";class mx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nE,this._completeRedirectFn=$O,this._overrideRedirectResult=MO}async _openPopup(e,n,r,i){var s;mn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Xg(e,n,r,af(),i);return ux(e,o,Zh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Xg(e,n,r,af(),i);return vO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(mn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await rx(e),r=new jO(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ac,{type:Ac},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ac];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hw()||Qh()||xu()}}const gx=mx;var Jg="@firebase/auth",Zg="1.6.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yx(t){rr(new er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gw(t)},u=new UN(r,i,s,l);return KN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rr(new er("auth-internal",e=>{const n=Yr(e.getProvider("auth").getImmediate());return(r=>new _x(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(Jg,Zg,vx(t)),Ft(Jg,Zg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=5*60,Ex=_w("authIdTokenMaxAge")||wx;let e_=null;const Sx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ex)return;const i=n==null?void 0:n.token;e_!==i&&(e_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function uE(t=Hh()){const e=Fo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GN(t,{popupRedirectResolver:gx,persistence:[PO,mO,nE]}),r=_w("authTokenSyncURL");if(r&&r.match(/^\/[^\/].*/)){const s=Sx(r);cO(n,s,()=>s(n.currentUser)),uO(n,o=>s(o))}const i=mw("auth");return i&&qN(n,`http://${i}`),n}function Cx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}$N({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Cx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yx("Browser");function Oe(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var Ix=typeof Symbol=="function"&&Symbol.observable||"@@observable",t_=Ix,Dc=()=>Math.random().toString(36).substring(7).split("").join("."),Tx={INIT:`@@redux/INIT${Dc()}`,REPLACE:`@@redux/REPLACE${Dc()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Dc()}`},Ul=Tx;function tp(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function np(t,e,n){if(typeof t!="function")throw new Error(Oe(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Oe(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Oe(1));return n(np)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((w,m)=>{o.set(m,w)}))}function c(){if(l)throw new Error(Oe(3));return i}function d(w){if(typeof w!="function")throw new Error(Oe(4));if(l)throw new Error(Oe(5));let m=!0;u();const h=a++;return o.set(h,w),function(){if(m){if(l)throw new Error(Oe(6));m=!1,u(),o.delete(h),s=null}}}function f(w){if(!tp(w))throw new Error(Oe(7));if(typeof w.type>"u")throw new Error(Oe(8));if(typeof w.type!="string")throw new Error(Oe(17));if(l)throw new Error(Oe(9));try{l=!0,i=r(i,w)}finally{l=!1}return(s=o).forEach(h=>{h()}),w}function g(w){if(typeof w!="function")throw new Error(Oe(10));r=w,f({type:Ul.REPLACE})}function _(){const w=d;return{subscribe(m){if(typeof m!="object"||m===null)throw new Error(Oe(11));function h(){const v=m;v.next&&v.next(c())}return h(),{unsubscribe:w(h)}},[t_](){return this}}}return f({type:Ul.INIT}),{dispatch:f,subscribe:d,getState:c,replaceReducer:g,[t_]:_}}function kx(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Ul.INIT})>"u")throw new Error(Oe(12));if(typeof n(void 0,{type:Ul.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Oe(13))})}function Px(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{kx(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],f=n[d],g=o[d],_=f(g,a);if(typeof _>"u")throw a&&a.type,new Error(Oe(14));u[d]=_,l=l||_!==g}return l=l||r.length!==Object.keys(o).length,l?u:o}}function $l(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function Rx(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(Oe(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=t.map(l=>l(o));return s=$l(...a)(i.dispatch),{...i,dispatch:s}}}function Nx(t){return tp(t)&&"type"in t&&typeof t.type=="string"}var cE=Symbol.for("immer-nothing"),n_=Symbol.for("immer-draftable"),ht=Symbol.for("immer-state");function Ot(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Wi=Object.getPrototypeOf;function ir(t){return!!t&&!!t[ht]}function gn(t){var e;return t?dE(t)||Array.isArray(t)||!!t[n_]||!!((e=t.constructor)!=null&&e[n_])||Mu(t)||Fu(t):!1}var Ox=Object.prototype.constructor.toString();function dE(t){if(!t||typeof t!="object")return!1;const e=Wi(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===Ox}function wo(t,e){Lu(t)===0?Object.entries(t).forEach(([n,r])=>{e(n,r,t)}):t.forEach((n,r)=>e(r,n,t))}function Lu(t){const e=t[ht];return e?e.type_:Array.isArray(t)?1:Mu(t)?2:Fu(t)?3:0}function cf(t,e){return Lu(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function fE(t,e,n){const r=Lu(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function xx(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Mu(t){return t instanceof Map}function Fu(t){return t instanceof Set}function vr(t){return t.copy_||t.base_}function df(t,e){if(Mu(t))return new Map(t);if(Fu(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);if(!e&&dE(t))return Wi(t)?{...t}:Object.assign(Object.create(null),t);const n=Object.getOwnPropertyDescriptors(t);delete n[ht];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[s]})}return Object.create(Wi(t),n)}function rp(t,e=!1){return Uu(t)||ir(t)||!gn(t)||(Lu(t)>1&&(t.set=t.add=t.clear=t.delete=bx),Object.freeze(t),e&&wo(t,(n,r)=>rp(r,!0))),t}function bx(){Ot(2)}function Uu(t){return Object.isFrozen(t)}var Ax={};function jr(t){const e=Ax[t];return e||Ot(0,t),e}var Eo;function hE(){return Eo}function Dx(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function r_(t,e){e&&(jr("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function ff(t){hf(t),t.drafts_.forEach(Lx),t.drafts_=null}function hf(t){t===Eo&&(Eo=t.parent_)}function i_(t){return Eo=Dx(Eo,t)}function Lx(t){const e=t[ht];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function s_(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[ht].modified_&&(ff(e),Ot(4)),gn(t)&&(t=zl(e,t),e.parent_||jl(e,t)),e.patches_&&jr("Patches").generateReplacementPatches_(n[ht].base_,t,e.patches_,e.inversePatches_)):t=zl(e,n,[]),ff(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==cE?t:void 0}function zl(t,e,n){if(Uu(e))return e;const r=e[ht];if(!r)return wo(e,(i,s)=>o_(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return jl(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),wo(s,(a,l)=>o_(t,r,i,a,l,n,o)),jl(t,i,!1),n&&t.patches_&&jr("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function o_(t,e,n,r,i,s,o){if(ir(i)){const a=s&&e&&e.type_!==3&&!cf(e.assigned_,r)?s.concat(r):void 0,l=zl(t,i,a);if(fE(n,r,l),ir(l))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(gn(i)&&!Uu(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;zl(t,i),(!e||!e.scope_.parent_)&&jl(t,i)}}function jl(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&rp(e,n)}function Mx(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:hE(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=ip;n&&(i=[r],s=So);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var ip={get(t,e){if(e===ht)return t;const n=vr(t);if(!cf(n,e))return Fx(t,n,e);const r=n[e];return t.finalized_||!gn(r)?r:r===Lc(t.base_,e)?(Mc(t),t.copy_[e]=mf(r,t)):r},has(t,e){return e in vr(t)},ownKeys(t){return Reflect.ownKeys(vr(t))},set(t,e,n){const r=pE(vr(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=Lc(vr(t),e),s=i==null?void 0:i[ht];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(xx(n,i)&&(n!==void 0||cf(t.base_,e)))return!0;Mc(t),pf(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return Lc(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Mc(t),pf(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=vr(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Ot(11)},getPrototypeOf(t){return Wi(t.base_)},setPrototypeOf(){Ot(12)}},So={};wo(ip,(t,e)=>{So[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});So.deleteProperty=function(t,e){return So.set.call(this,t,e,void 0)};So.set=function(t,e,n){return ip.set.call(this,t[0],e,n,t[0])};function Lc(t,e){const n=t[ht];return(n?vr(n):t)[e]}function Fx(t,e,n){var i;const r=pE(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function pE(t,e){if(!(e in t))return;let n=Wi(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Wi(n)}}function pf(t){t.modified_||(t.modified_=!0,t.parent_&&pf(t.parent_))}function Mc(t){t.copy_||(t.copy_=df(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var Ux=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...u){return o.produce(l,c=>n.call(this,c,...u))}}typeof n!="function"&&Ot(6),r!==void 0&&typeof r!="function"&&Ot(7);let i;if(gn(e)){const s=i_(this),o=mf(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?ff(s):hf(s)}return r_(s,r),s_(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===cE&&(i=void 0),this.autoFreeze_&&rp(i,!0),r){const s=[],o=[];jr("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else Ot(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){gn(t)||Ot(8),ir(t)&&(t=mE(t));const e=i_(this),n=mf(t,void 0);return n[ht].isManual_=!0,hf(e),n}finishDraft(t,e){const n=t&&t[ht];(!n||!n.isManual_)&&Ot(9);const{scope_:r}=n;return r_(r,e),s_(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=jr("Patches").applyPatches_;return ir(t)?r(t,e):this.produce(t,i=>r(i,e))}};function mf(t,e){const n=Mu(t)?jr("MapSet").proxyMap_(t,e):Fu(t)?jr("MapSet").proxySet_(t,e):Mx(t,e);return(e?e.scope_:hE()).drafts_.push(n),n}function mE(t){return ir(t)||Ot(10,t),gE(t)}function gE(t){if(!gn(t)||Uu(t))return t;const e=t[ht];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=df(t,e.scope_.immer_.useStrictShallowCopy_)}else n=df(t,!0);return wo(n,(r,i)=>{fE(n,r,gE(i))}),e&&(e.finalized_=!1),n}var pt=new Ux,_E=pt.produce;pt.produceWithPatches.bind(pt);pt.setAutoFreeze.bind(pt);pt.setUseStrictShallowCopy.bind(pt);pt.applyPatches.bind(pt);pt.createDraft.bind(pt);pt.finishDraft.bind(pt);function $x(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function zx(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function jx(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var a_=t=>Array.isArray(t)?t:[t];function Bx(t){const e=Array.isArray(t[0])?t[0]:t;return jx(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function Wx(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var Vx=class{constructor(t){this.value=t}deref(){return this.value}},Hx=typeof WeakRef<"u"?WeakRef:Vx,Gx=0,l_=1;function _a(){return{s:Gx,v:void 0,o:null,p:null}}function sp(t,e={}){let n=_a();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var d;let a=n;const{length:l}=arguments;for(let f=0,g=l;f<g;f++){const _=arguments[f];if(typeof _=="function"||typeof _=="object"&&_!==null){let y=a.o;y===null&&(a.o=y=new WeakMap);const w=y.get(_);w===void 0?(a=_a(),y.set(_,a)):a=w}else{let y=a.p;y===null&&(a.p=y=new Map);const w=y.get(_);w===void 0?(a=_a(),y.set(_,a)):a=w}}const u=a;let c;if(a.s===l_?c=a.v:(c=t.apply(null,arguments),s++),u.s=l_,r){const f=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;f!=null&&r(f,c)&&(c=f,s!==0&&s--),i=typeof c=="object"&&c!==null||typeof c=="function"?new Hx(c):c}return u.v=c,c}return o.clearCache=()=>{n=_a(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function vE(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),$x(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...n,...l},{memoize:d,memoizeOptions:f=[],argsMemoize:g=sp,argsMemoizeOptions:_=[],devModeChecks:y={}}=c,w=a_(f),m=a_(_),h=Bx(i),p=d(function(){return s++,u.apply(null,arguments)},...w),v=g(function(){o++;const C=Wx(h,arguments);return a=p.apply(null,C),a},...m);return Object.assign(v,{resultFunc:u,memoizedResultFunc:p,dependencies:h,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:d,argsMemoize:g})};return Object.assign(r,{withTypes:()=>r}),r}var Kx=vE(sp),qx=Object.assign((t,e=Kx)=>{zx(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(s=>t[s]);return e(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>qx});function yE(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var Yx=yE(),Qx=yE,Xx=(...t)=>{const e=vE(...t),n=Object.assign((...r)=>{const i=e(...r),s=(o,...a)=>i(ir(o)?mE(o):o,...a);return Object.assign(s,i),s},{withTypes:()=>n});return n};Xx(sp);var Jx=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?$l:$l.apply(null,arguments)};function Vi(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(nt(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>Nx(r)&&r.type===t,n}var wE=class Ts extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Ts.prototype)}static get[Symbol.species](){return Ts}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Ts(...e[0].concat(this)):new Ts(...e.concat(this))}};function u_(t){return gn(t)?_E(t,()=>{}):t}function c_(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(nt(10));const r=n.insert(e,t);return t.set(e,r),r}function Zx(t){return typeof t=="boolean"}var eb=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new wE;return n&&(Zx(n)?o.push(Yx):o.push(Qx(n.extraArgument))),o},tb="RTK_autoBatch",EE=t=>e=>{setTimeout(e,t)},nb=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:EE(10),rb=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?nb:t.type==="callback"?t.queueNotification:EE(t.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),f=r.subscribe(d);return a.add(c),()=>{f(),a.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[tb]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(c)}finally{i=!0}}})},ib=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new wE(t);return r&&i.push(rb(typeof r=="object"?r:void 0)),i},sb=!0;function ob(t){const e=eb(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(tp(n))a=Px(n);else throw new Error(nt(1));let l;typeof r=="function"?l=r(e):l=e();let u=$l;i&&(u=Jx({trace:!sb,...typeof i=="object"&&i}));const c=Rx(...l),d=ib(c);let f=typeof o=="function"?o(d):d();const g=u(...f);return np(a,s,g)}function SE(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(nt(28));if(a in e)throw new Error(nt(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function ab(t){return typeof t=="function"}function lb(t,e){let[n,r,i]=SE(e),s;if(ab(t))s=()=>u_(t());else{const a=u_(t);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[i]),u.reduce((c,d)=>{if(d)if(ir(c)){const g=d(c,l);return g===void 0?c:g}else{if(gn(c))return _E(c,f=>d(f,l));{const f=d(c,l);if(f===void 0){if(c===null)return c;throw new Error(nt(9))}return f}}return c},a)}return o.getInitialState=s,o}var ub="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",cb=(t=21)=>{let e="",n=t;for(;n--;)e+=ub[Math.random()*64|0];return e},db=Symbol.for("rtk-slice-createasyncthunk");function fb(t,e){return`${t}/${e}`}function hb({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[db];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(nt(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(mb()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(p,v){const E=typeof p=="string"?p:p.type;if(!E)throw new Error(nt(12));if(E in u.sliceCaseReducersByType)throw new Error(nt(13));return u.sliceCaseReducersByType[E]=v,c},addMatcher(p,v){return u.sliceMatchers.push({matcher:p,reducer:v}),c},exposeAction(p,v){return u.actionCreators[p]=v,c},exposeCaseReducer(p,v){return u.sliceCaseReducersByName[p]=v,c}};l.forEach(p=>{const v=a[p],E={reducerName:p,type:fb(s,p),createNotation:typeof i.reducers=="function"};_b(v)?yb(E,v,c,e):gb(E,v,c)});function d(){const[p={},v=[],E=void 0]=typeof i.extraReducers=="function"?SE(i.extraReducers):[i.extraReducers],C={...p,...u.sliceCaseReducersByType};return lb(i.initialState,S=>{for(let I in C)S.addCase(I,C[I]);for(let I of u.sliceMatchers)S.addMatcher(I.matcher,I.reducer);for(let I of v)S.addMatcher(I.matcher,I.reducer);E&&S.addDefaultCase(E)})}const f=p=>p,g=new Map;let _;function y(p,v){return _||(_=d()),_(p,v)}function w(){return _||(_=d()),_.getInitialState()}function m(p,v=!1){function E(S){let I=S[p];return typeof I>"u"&&v&&(I=w()),I}function C(S=f){const I=c_(g,v,{insert:()=>new WeakMap});return c_(I,S,{insert:()=>{const N={};for(const[x,Q]of Object.entries(i.selectors??{}))N[x]=pb(Q,S,w,v);return N}})}return{reducerPath:p,getSelectors:C,get selectors(){return C(E)},selectSlice:E}}const h={name:s,reducer:y,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:w,...m(o),injectInto(p,{reducerPath:v,...E}={}){const C=v??o;return p.inject({reducerPath:C,reducer:y},E),{...h,...m(C,!0)}}};return h}}function pb(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var op=hb();function mb(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function gb({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!vb(r))throw new Error(nt(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?Vi(t,o):Vi(t))}function _b(t){return t._reducerDefinitionType==="asyncThunk"}function vb(t){return t._reducerDefinitionType==="reducerWithPrepare"}function yb({type:t,reducerName:e},n,r,i){if(!i)throw new Error(nt(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:c}=n,d=i(t,s,c);r.exposeAction(e,d),o&&r.addCase(d.fulfilled,o),a&&r.addCase(d.pending,a),l&&r.addCase(d.rejected,l),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(e,{fulfilled:o||va,pending:a||va,rejected:l||va,settled:u||va})}function va(){}var wb=(t,e)=>{if(typeof t!="function")throw new Error(nt(32))},ap="listenerMiddleware",Eb=t=>{let{type:e,actionCreator:n,matcher:r,predicate:i,effect:s}=t;if(e)i=Vi(e).match;else if(n)e=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(nt(21));return wb(s),{predicate:i,type:e,effect:s}},Sb=Object.assign(t=>{const{type:e,predicate:n,effect:r}=Eb(t);return{id:cb(),effect:r,type:e,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(nt(22))}}},{withTypes:()=>Sb}),Cb=Object.assign(Vi(`${ap}/add`),{withTypes:()=>Cb});Vi(`${ap}/removeAll`);var Ib=Object.assign(Vi(`${ap}/remove`),{withTypes:()=>Ib});function nt(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const Tb={email:null,token:null,id:null,name:null,isAuthenticated:!1,selectedLevel:null,favorite:[]},CE=op({name:"user",initialState:Tb,reducers:{setUser:(t,{payload:e})=>{t.email=e.email,t.token=e.token,t.id=e.id,t.name=e.name,t.isAuthenticated=!0;const n=localStorage.getItem(e.id);n&&(t.favorite=JSON.parse(n))},removeUser:t=>{t.isAuthenticated&&(t.favorite=[]),t.email=null,t.token=null,t.id=null,t.name=null,t.isAuthenticated=!1,localStorage.removeItem("id")},setToken:(t,{payload:e})=>{t.token=e},setSelectedLevel:(t,{payload:e})=>{t.selectedLevel=e},toggleFavorite:(t,{payload:e})=>{const n=e.id;if(t.isAuthenticated){const r=t.favorite.findIndex(i=>i.id===n);r===-1?t.favorite.push(e):t.favorite.splice(r,1),localStorage.setItem(t.id,JSON.stringify(t.favorite))}}}}),{setUser:t2,removeUser:kb,setToken:n2,setSelectedLevel:r2,toggleFavorite:i2,setUserFavorites:s2}=CE.actions,Pb=CE.reducer,Rb="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.5%202.5H13.5C14.9001%202.5%2015.6002%202.5%2016.135%202.77248C16.6054%203.01217%2016.9878%203.39462%2017.2275%203.86502C17.5%204.3998%2017.5%205.09987%2017.5%206.5V13.5C17.5%2014.9001%2017.5%2015.6002%2017.2275%2016.135C16.9878%2016.6054%2016.6054%2016.9878%2016.135%2017.2275C15.6002%2017.5%2014.9001%2017.5%2013.5%2017.5H12.5'%20stroke='%23E0A39A'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3cpath%20d='M8.33333%205.83331L12.5%209.99998M12.5%209.99998L8.33333%2014.1666M12.5%209.99998L2.5%209.99998'%20stroke='%23E0A39A'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/svg%3e",Nb={isOpenModal:!1,modalData:null},IE=op({name:"modal",initialState:Nb,reducers:{openModal:(t,{payload:e})=>{t.isOpenModal=!0,t.modalData=e},closeModal:t=>{t.isOpenModal=!1,t.modalData=null}}}),{openModal:d_,closeModal:o2}=IE.actions,Ob=IE.reducer,xb=()=>{const t=PP(),e=ho(Ru),n=ho(RP),r=()=>{const o=uE();dO(o).then(()=>{t(kb())}).catch(a=>{console.error("Помилка виходу:",a)})},i=()=>{t(d_(Pl))},s=()=>{t(d_(tf))};return M.jsx(Jk,{children:e?M.jsxs(tP,{onClick:r,children:[M.jsx(nP,{}),"Log Out ",M.jsx(rP,{children:n.name})]}):M.jsxs(M.Fragment,{children:[M.jsxs(Zk,{onClick:i,to:Pl,children:[M.jsx("img",{src:Rb,alt:"Log in"}),"Log in"]}),M.jsx(eP,{onClick:s,to:tf,children:"Registration"})]})})},bb=({children:t})=>{const e=ho(Ru);return M.jsxs(Kk,{children:[M.jsxs(qk,{children:[M.jsxs(Yk,{children:[M.jsx("img",{src:iP,alt:"Ukraine"}),M.jsx(Qk,{children:"LearnLingo"})]}),M.jsxs(Xk,{children:[M.jsx(kc,{className:"header-link",to:cw,children:"Home"}),M.jsx(kc,{className:"header-link",to:Fh,children:"Teachers"}),e&&M.jsx(kc,{className:"header-link",to:dw,style:{display:e?"block":"none"},children:"Favorites"})]}),M.jsx(xb,{})]}),M.jsx("main",{children:t})]})};var Ab="firebase",Db="10.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft(Ab,Db,"app");var f_={};const h_="@firebase/database",p_="1.0.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TE="";function Lb(t){TE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:mo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return zt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Mb(e)}}catch{}return new Fb},Ir=kE("localStorage"),gf=kE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new Ou("@firebase/database"),Ub=function(){let t=1;return function(){return t++}}(),PE=function(t){const e=JP(t),n=new YP;n.update(e);const r=n.digest();return Uh.encodeByteArray(r)},Bo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Bo.apply(null,r):typeof r=="object"?e+=ke(r):e+=r,e+=" "}return e};let Or=null,m_=!0;const $b=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ti.logLevel=q.VERBOSE,Or=Ti.log.bind(Ti),e&&gf.set("logging_enabled",!0)):typeof t=="function"?Or=t:(Or=null,gf.remove("logging_enabled"))},Ue=function(...t){if(m_===!0&&(m_=!1,Or===null&&gf.get("logging_enabled")===!0&&$b(!0)),Or){const e=Bo.apply(null,t);Or(e)}},Wo=function(t){return function(...e){Ue(t,...e)}},_f=function(...t){const e="FIREBASE INTERNAL ERROR: "+Bo(...t);Ti.error(e)},_n=function(...t){const e=`FIREBASE FATAL ERROR: ${Bo(...t)}`;throw Ti.error(e),new Error(e)},dt=function(...t){const e="FIREBASE WARNING: "+Bo(...t);Ti.warn(e)},zb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},RE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},jb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Hi="[MIN_NAME]",Br="[MAX_NAME]",is=function(t,e){if(t===e)return 0;if(t===Hi||e===Br)return-1;if(e===Hi||t===Br)return 1;{const n=g_(t),r=g_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Bb=function(t,e){return t===e?0:t<e?-1:1},ps=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ke(e))},lp=function(t){if(typeof t!="object"||t===null)return ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ke(e[r]),n+=":",n+=lp(t[e[r]]);return n+="}",n},NE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function rt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const OE=function(t){P(!RE(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},Wb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Vb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Hb(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Gb=new RegExp("^-?(0*)\\d{1,10}$"),Kb=-2147483648,qb=2147483647,g_=function(t){if(Gb.test(t)){const e=Number(t);if(e>=Kb&&e<=qb)return e}return null},Vo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Yb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Us=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){dt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ue("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dt(e)}}class ki{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ki.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up="5",xE="v",bE="s",AE="r",DE="f",LE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ME="ls",FE="p",vf="ac",UE="websocket",$E="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ir.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ir.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Jb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function jE(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let r;if(e===UE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===$E)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Jb(t)&&(n.ns=t.namespace);const i=[];return rt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(){this.counters_={}}incrementCounter(e,n=1){zt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return xP(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc={},Uc={};function cp(t){const e=t.toString();return Fc[e]||(Fc[e]=new Zb),Fc[e]}function eA(t,e){const n=t.toString();return Uc[n]||(Uc[n]=e()),Uc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Vo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="start",nA="close",rA="pLPCommand",iA="pRTLPCB",BE="id",WE="pw",VE="ser",sA="cb",oA="seg",aA="ts",lA="d",uA="dframe",HE=1870,GE=30,cA=HE-GE,dA=25e3,fA=3e4;class mi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Wo(e),this.stats_=cp(n),this.urlFn=l=>(this.appCheckToken&&(l[vf]=this.appCheckToken),jE(n,$E,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new tA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(fA)),jb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new dp((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===__)this.id=a,this.password=l;else if(o===nA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[__]="t",r[VE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[sA]=this.scriptTagHolder.uniqueCallbackIdentifier),r[xE]=up,this.transportSessionId&&(r[bE]=this.transportSessionId),this.lastSessionId&&(r[ME]=this.lastSessionId),this.applicationId&&(r[FE]=this.applicationId),this.appCheckToken&&(r[vf]=this.appCheckToken),typeof location<"u"&&location.hostname&&LE.test(location.hostname)&&(r[AE]=DE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){mi.forceAllow_=!0}static forceDisallow(){mi.forceDisallow_=!0}static isAvailable(){return mi.forceAllow_?!0:!mi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Wb()&&!Vb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=pw(n),i=NE(r,cA);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[uA]="t",r[BE]=e,r[WE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class dp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ub(),window[rA+this.uniqueCallbackIdentifier]=e,window[iA+this.uniqueCallbackIdentifier]=n,this.myIFrame=dp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ue("frame writing exception"),a.stack&&Ue(a.stack),Ue(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ue("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[BE]=this.myID,e[WE]=this.myPW,e[VE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+GE+r.length<=HE;){const o=this.pendingSegs.shift();r=r+"&"+oA+i+"="+o.seg+"&"+aA+i+"="+o.ts+"&"+lA+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(dA)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ue("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=16384,pA=45e3;let Bl=null;typeof MozWebSocket<"u"?Bl=MozWebSocket:typeof WebSocket<"u"&&(Bl=WebSocket);class xt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Wo(this.connId),this.stats_=cp(n),this.connURL=xt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[xE]=up,typeof location<"u"&&location.hostname&&LE.test(location.hostname)&&(o[AE]=DE),n&&(o[bE]=n),r&&(o[ME]=r),i&&(o[vf]=i),s&&(o[FE]=s),jE(e,UE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ir.set("previous_websocket_failure",!0);try{let r;yw(),this.mySock=new Bl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){xt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Bl!==null&&!xt.forceDisallow_}static previouslyFailed(){return Ir.isInMemoryStorage||Ir.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ir.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=mo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=NE(n,hA);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xt.responsesRequiredToBeHealthy=2;xt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[mi,xt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=xt&&xt.isAvailable();let r=n&&!xt.previouslyFailed();if(e.webSocketOnly&&(n||dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[xt];else{const i=this.transports_=[];for(const s of Co.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Co.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Co.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=6e4,gA=5e3,_A=10*1024,vA=100*1024,$c="t",v_="d",yA="s",y_="r",wA="e",w_="o",E_="a",S_="n",C_="p",EA="h";class SA{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Wo("c:"+this.id+":"),this.transportManager_=new Co(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Us(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>vA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_A?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($c in e){const n=e[$c];n===E_?this.upgradeIfSecondaryHealthy_():n===y_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===w_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ps("t",e),r=ps("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:C_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:E_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:S_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ps("t",e),r=ps("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ps($c,e);if(v_ in e){const r=e[v_];if(n===EA){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===S_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===yA?this.onConnectionShutdown_(r):n===y_?this.onReset_(r):n===wA?_f("Server Error: "+r):n===w_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_f("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),up!==r&&dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Us(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Us(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:C_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ir.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends qE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!jh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Wl}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=32,T_=768;class X{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function G(){return new X("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function sr(t){return t.pieces_.length-t.pieceNum_}function J(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new X(t.pieces_,e)}function YE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function CA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function QE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function XE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new X(e,0)}function we(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof X)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new X(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function Xe(t,e){const n=j(t),r=j(e);if(n===null)return e;if(n===r)return Xe(J(t),J(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function fp(t,e){if(sr(t)!==sr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function bt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(sr(t)>sr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class IA{constructor(e,n){this.errorPrefix_=n,this.parts_=QE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Nu(this.parts_[r]);JE(this)}}function TA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Nu(e),JE(t)}function kA(t){const e=t.parts_.pop();t.byteLength_-=Nu(e),t.parts_.length>0&&(t.byteLength_-=1)}function JE(t){if(t.byteLength_>T_)throw new Error(t.errorPrefix_+"has a key path longer than "+T_+" bytes ("+t.byteLength_+").");if(t.parts_.length>I_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+I_+") or object contains a cycle "+yr(t))}function yr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp extends qE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new hp}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=1e3,PA=60*5*1e3,k_=30*1e3,RA=1.3,NA=3e4,OA="server_kill",P_=3;class cn extends KE{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=cn.nextPersistentConnectionId_++,this.log_=Wo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ms,this.maxReconnectDelay_=PA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!yw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Wl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ke(s)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new zh,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;cn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&zt(e,"w")){const r=ji(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||qP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=k_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=KP(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):_f("Unrecognized action received from server: "+ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ms,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ms,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>NA&&(this.reconnectDelay_=ms),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*RA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+cn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ue("getToken() completed but was canceled"):(Ue("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new SA(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{dt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(OA)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&dt(d),l())}}}interrupt(e){Ue("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ue("Resuming connection for reason: "+e),delete this.interruptReasons_[e],nf(this.interruptReasons_)&&(this.reconnectDelay_=ms,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>lp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new X(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ue("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=P_&&(this.reconnectDelay_=k_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ue("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=P_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+TE.replace(/\./g,"-")]=1,jh()?e["framework.cordova"]=1:vw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Wl.getInstance().currentlyOnline();return nf(this.interruptReasons_)&&e}}cn.nextPersistentConnectionId_=0;cn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(Hi,e),i=new z(Hi,n);return this.compare(r,i)!==0}minPost(){return z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ya;class ZE extends $u{static get __EMPTY_NODE(){return ya}static set __EMPTY_NODE(e){ya=e}compare(e,n){return is(e.name,n.name)}isDefinedOn(e){throw ts("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(Br,ya)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,ya)}toString(){return".key"}}const Pi=new ZE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Te{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Te.RED,this.left=i??Je.EMPTY_NODE,this.right=s??Je.EMPTY_NODE}copy(e,n,r,i,s){return new Te(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Je.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Te.RED=!0;Te.BLACK=!1;class xA{copy(e,n,r,i,s){return this}insert(e,n,r){return new Te(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Je{constructor(e,n=Je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Te.BLACK,null,null))}remove(e){return new Je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Te.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new wa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new wa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new wa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new wa(this.root_,null,this.comparator_,!0,e)}}Je.EMPTY_NODE=new xA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(t,e){return is(t.name,e.name)}function pp(t,e){return is(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yf;function AA(t){yf=t}const eS=function(t){return typeof t=="number"?"number:"+OE(t):"string:"+t},tS=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zt(e,".sv"),"Priority must be a string or number.")}else P(t===yf||t.isEmpty(),"priority of unexpected type.");P(t===yf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let R_;class Se{constructor(e,n=Se.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),tS(this.priorityNode_)}static set __childrenNodeConstructor(e){R_=e}static get __childrenNodeConstructor(){return R_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Se(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Se.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:j(e)===".priority"?this.priorityNode_:Se.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Se.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=j(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(P(r!==".priority"||sr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Se.__childrenNodeConstructor.EMPTY_NODE.updateChild(J(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+eS(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=OE(this.value_):e+=this.value_,this.lazyHash_=PE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Se.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Se.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Se.VALUE_TYPE_ORDER.indexOf(n),s=Se.VALUE_TYPE_ORDER.indexOf(r);return P(i>=0,"Unknown leaf type: "+n),P(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Se.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nS,rS;function DA(t){nS=t}function LA(t){rS=t}class MA extends $u{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?is(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(Br,new Se("[PRIORITY-POST]",rS))}makePost(e,n){const r=nS(e);return new z(n,new Se("[PRIORITY-POST]",r))}toString(){return".priority"}}const fe=new MA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=Math.log(2);class UA{constructor(e){const n=s=>parseInt(Math.log(s)/FA,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vl=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new Te(f,d.node,Te.BLACK,null,null);{const g=parseInt(c/2,10)+l,_=i(l,g),y=i(g+1,u);return d=t[g],f=n?n(d):d,new Te(f,d.node,Te.BLACK,_,y)}},s=function(l){let u=null,c=null,d=t.length;const f=function(_,y){const w=d-_,m=d;d-=_;const h=i(w+1,m),p=t[w],v=n?n(p):p;g(new Te(v,p.node,y,null,h))},g=function(_){u?(u.left=_,u=_):(c=_,u=_)};for(let _=0;_<l.count;++_){const y=l.nextBitIsOne(),w=Math.pow(2,l.count-(_+1));y?f(w,Te.BLACK):(f(w,Te.BLACK),f(w,Te.RED))}return c},o=new UA(t.length),a=s(o);return new Je(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zc;const ei={};class an{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(ei&&fe,"ChildrenNode.ts has not been loaded"),zc=zc||new an({".priority":ei},{".priority":fe}),zc}get(e){const n=ji(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Je?n:null}hasIndex(e){return zt(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Pi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Vl(r,e.getCompare()):a=ei;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new an(c,u)}addToIndexes(e,n){const r=Ol(this.indexes_,(i,s)=>{const o=ji(this.indexSet_,s);if(P(o,"Missing index implementation for "+s),i===ei)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(z.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Vl(a,o.getCompare())}else return ei;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new z(e.name,a))),l.insert(e,e.node)}});return new an(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ol(this.indexes_,i=>{if(i===ei)return i;{const s=n.get(e.name);return s?i.remove(new z(e.name,s)):i}});return new an(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs;class L{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&tS(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return gs||(gs=new L(new Je(pp),null,an.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||gs}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?gs:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(J(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?gs:this.priorityNode_;return new L(i,o,s)}}updateChild(e,n){const r=j(e);if(r===null)return n;{P(j(e)!==".priority"||sr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(J(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(fe,(o,a)=>{n[o]=a.val(e),r++,s&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+eS(this.getPriority().val())+":"),this.forEachChild(fe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":PE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ho?-1:0}withIndex(e){if(e===Pi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Pi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(fe),i=n.getIterator(fe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Pi?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $A extends L{constructor(){super(new Je(pp),L.EMPTY_NODE,an.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Ho=new $A;Object.defineProperties(z,{MIN:{value:new z(Hi,L.EMPTY_NODE)},MAX:{value:new z(Br,Ho)}});ZE.__EMPTY_NODE=L.EMPTY_NODE;Se.__childrenNodeConstructor=L;AA(Ho);LA(Ho);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=!0;function $e(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Se(n,$e(e))}if(!(t instanceof Array)&&zA){const n=[];let r=!1;if(rt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=$e(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new z(o,l)))}}),n.length===0)return L.EMPTY_NODE;const s=Vl(n,bA,o=>o.name,pp);if(r){const o=Vl(n,fe.getCompare());return new L(s,$e(e),new an({".priority":o},{".priority":fe}))}else return new L(s,$e(e),an.Default)}else{let n=L.EMPTY_NODE;return rt(t,(r,i)=>{if(zt(t,r)&&r.substring(0,1)!=="."){const s=$e(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority($e(e))}}DA($e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA extends $u{constructor(e){super(),this.indexPath_=e,P(!B(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?is(e.name,n.name):s}makePost(e,n){const r=$e(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Ho);return new z(Br,e)}toString(){return QE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA extends $u{compare(e,n){const r=e.node.compareTo(n.node);return r===0?is(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=$e(e);return new z(n,r)}toString(){return".value"}}const WA=new BA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(t){return{type:"value",snapshotNode:t}}function Gi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Io(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function To(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function VA(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Io(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Gi(n,r)):o.trackChildChange(To(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,s)=>{n.hasChild(i)||r.trackChildChange(Io(i,s))}),n.isLeafNode()||n.forEachChild(fe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(To(i,s,o))}else r.trackChildChange(Gi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.indexedFilter_=new mp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ko.getStartPost_(e),this.endPost_=ko.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new z(n,r))||(r=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const s=this;return n.forEachChild(fe,(o,a)=>{s.matches(new z(o,a))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ko(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new z(n,r))||(r=L.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new z(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(To(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Io(n,d));const y=a.updateImmediateChild(n,L.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Gi(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Io(u.name,u.node)),s.trackChildChange(Gi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Hi}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Br}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new gp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function GA(t){return t.loadsAllData()?new mp(t.getIndex()):t.hasLimit()?new HA(t):new ko(t)}function N_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===fe?n="$priority":t.index_===WA?n="$value":t.index_===Pi?n="$key":(P(t.index_ instanceof jA,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ke(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ke(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ke(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ke(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function O_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends KE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Wo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Hl.getListenId_(e,r),a={};this.listens_[o]=a;const l=N_(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),ji(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Hl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=N_(e._queryParams),r=e._path.toString(),i=new zh;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ns(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=mo(a.responseText)}catch{dt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&dt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(){return{value:null,children:new Map}}function sS(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=j(e);t.children.has(r)||t.children.set(r,Gl());const i=t.children.get(r);e=J(e),sS(i,e,n)}}function wf(t,e,n){t.value!==null?n(e,t.value):qA(t,(r,i)=>{const s=new X(e.toString()+"/"+r);wf(i,s,n)})}function qA(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&rt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=10*1e3,QA=30*1e3,XA=5*60*1e3;class JA{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new YA(e);const r=x_+(QA-x_)*Math.random();Us(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;rt(e,(i,s)=>{s>0&&zt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Us(this.reportStats_.bind(this),Math.floor(Math.random()*2*XA))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(At||(At={}));function oS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _p(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=At.ACK_USER_WRITE,this.source=oS()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new X(e));return new Kl(G(),n,this.revert)}}else return P(j(this.path)===e,"operationForChild called for unrelated child."),new Kl(J(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n){this.source=e,this.path=n,this.type=At.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new Po(this.source,G()):new Po(this.source,J(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=At.OVERWRITE}operationForChild(e){return B(this.path)?new Wr(this.source,G(),this.snap.getImmediateChild(e)):new Wr(this.source,J(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=At.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new X(e));return n.isEmpty()?null:n.value?new Wr(this.source,G(),n.value):new Ro(this.source,G(),n)}else return P(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ro(this.source,J(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function eD(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(VA(o.childName,o.snapshotNode))}),_s(t,i,"child_removed",e,r,n),_s(t,i,"child_added",e,r,n),_s(t,i,"child_moved",s,r,n),_s(t,i,"child_changed",e,r,n),_s(t,i,"value",e,r,n),i}function _s(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>nD(t,a,l)),o.forEach(a=>{const l=tD(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function tD(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function nD(t,e,n){if(e.childName==null||n.childName==null)throw ts("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(t,e){return{eventCache:t,serverCache:e}}function $s(t,e,n,r){return zu(new Vr(e,n,r),t.serverCache)}function aS(t,e,n,r){return zu(t.eventCache,new Vr(e,n,r))}function Ef(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Hr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jc;const rD=()=>(jc||(jc=new Je(Bb)),jc);class re{constructor(e,n=rD()){this.value=e,this.children=n}static fromObject(e){let n=new re(null);return rt(e,(r,i)=>{n=n.set(new X(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:G(),value:this.value};if(B(e))return null;{const r=j(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(J(e),n);return s!=null?{path:we(new X(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=j(e),r=this.children.get(n);return r!==null?r.subtree(J(e)):new re(null)}}set(e,n){if(B(e))return new re(n,this.children);{const r=j(e),s=(this.children.get(r)||new re(null)).set(J(e),n),o=this.children.insert(r,s);return new re(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=j(e),r=this.children.get(n);if(r){const i=r.remove(J(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new re(null):new re(this.value,s)}else return this}}get(e){if(B(e))return this.value;{const n=j(e),r=this.children.get(n);return r?r.get(J(e)):null}}setTree(e,n){if(B(e))return n;{const r=j(e),s=(this.children.get(r)||new re(null)).setTree(J(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new re(this.value,o)}}fold(e){return this.fold_(G(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(we(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,G(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(B(e))return null;{const s=j(e),o=this.children.get(s);return o?o.findOnPath_(J(e),we(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,G(),n)}foreachOnPath_(e,n,r){if(B(e))return this;{this.value&&r(n,this.value);const i=j(e),s=this.children.get(i);return s?s.foreachOnPath_(J(e),we(n,i),r):new re(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(we(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.writeTree_=e}static empty(){return new Ut(new re(null))}}function zs(t,e,n){if(B(e))return new Ut(new re(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Xe(i,e);return s=s.updateChild(o,n),new Ut(t.writeTree_.set(i,s))}else{const i=new re(n),s=t.writeTree_.setTree(e,i);return new Ut(s)}}}function b_(t,e,n){let r=t;return rt(n,(i,s)=>{r=zs(r,we(e,i),s)}),r}function A_(t,e){if(B(e))return Ut.empty();{const n=t.writeTree_.setTree(e,new re(null));return new Ut(n)}}function Sf(t,e){return Qr(t,e)!=null}function Qr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Xe(n.path,e)):null}function D_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(r,i)=>{e.push(new z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new z(r,i.value))}),e}function Qn(t,e){if(B(e))return t;{const n=Qr(t,e);return n!=null?new Ut(new re(n)):new Ut(t.writeTree_.subtree(e))}}function Cf(t){return t.writeTree_.isEmpty()}function Ki(t,e){return lS(G(),t.writeTree_,e)}function lS(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(P(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=lS(we(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(we(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(t,e){return fS(e,t)}function iD(t,e,n,r,i){P(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=zs(t.visibleWrites,e,n)),t.lastWriteId=r}function sD(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function oD(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&aD(a,r.path)?i=!1:bt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return lD(t),!0;if(r.snap)t.visibleWrites=A_(t.visibleWrites,r.path);else{const a=r.children;rt(a,l=>{t.visibleWrites=A_(t.visibleWrites,we(r.path,l))})}return!0}else return!1}function aD(t,e){if(t.snap)return bt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&bt(we(t.path,n),e))return!0;return!1}function lD(t){t.visibleWrites=uS(t.allWrites,uD,G()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function uD(t){return t.visible}function uS(t,e,n){let r=Ut.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)bt(n,o)?(a=Xe(n,o),r=zs(r,a,s.snap)):bt(o,n)&&(a=Xe(o,n),r=zs(r,G(),s.snap.getChild(a)));else if(s.children){if(bt(n,o))a=Xe(n,o),r=b_(r,a,s.children);else if(bt(o,n))if(a=Xe(o,n),B(a))r=b_(r,G(),s.children);else{const l=ji(s.children,j(a));if(l){const u=l.getChild(J(a));r=zs(r,G(),u)}}}else throw ts("WriteRecord should have .snap or .children")}}return r}function cS(t,e,n,r,i){if(!r&&!i){const s=Qr(t.visibleWrites,e);if(s!=null)return s;{const o=Qn(t.visibleWrites,e);if(Cf(o))return n;if(n==null&&!Sf(o,G()))return null;{const a=n||L.EMPTY_NODE;return Ki(o,a)}}}else{const s=Qn(t.visibleWrites,e);if(!i&&Cf(s))return n;if(!i&&n==null&&!Sf(s,G()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(bt(u.path,e)||bt(e,u.path))},a=uS(t.allWrites,o,e),l=n||L.EMPTY_NODE;return Ki(a,l)}}}function cD(t,e,n){let r=L.EMPTY_NODE;const i=Qr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Qn(t.visibleWrites,e);return n.forEachChild(fe,(o,a)=>{const l=Ki(Qn(s,new X(o)),a);r=r.updateImmediateChild(o,l)}),D_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Qn(t.visibleWrites,e);return D_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function dD(t,e,n,r,i){P(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=we(e,n);if(Sf(t.visibleWrites,s))return null;{const o=Qn(t.visibleWrites,s);return Cf(o)?i.getChild(n):Ki(o,i.getChild(n))}}function fD(t,e,n,r){const i=we(e,n),s=Qr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Qn(t.visibleWrites,i);return Ki(o,r.getNode().getImmediateChild(n))}else return null}function hD(t,e){return Qr(t.visibleWrites,e)}function pD(t,e,n,r,i,s,o){let a;const l=Qn(t.visibleWrites,e),u=Qr(l,G());if(u!=null)a=u;else if(n!=null)a=Ki(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=f.getNext();return c}else return[]}function mD(){return{visibleWrites:Ut.empty(),allWrites:[],lastWriteId:-1}}function ql(t,e,n,r){return cS(t.writeTree,t.treePath,e,n,r)}function wp(t,e){return cD(t.writeTree,t.treePath,e)}function L_(t,e,n,r){return dD(t.writeTree,t.treePath,e,n,r)}function Yl(t,e){return hD(t.writeTree,we(t.treePath,e))}function gD(t,e,n,r,i,s){return pD(t.writeTree,t.treePath,e,n,r,i,s)}function Ep(t,e,n){return fD(t.writeTree,t.treePath,e,n)}function dS(t,e){return fS(we(t.treePath,e),t.writeTree)}function fS(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,To(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Io(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Gi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,To(r,e.snapshotNode,i.oldSnap));else throw ts("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const hS=new vD;class Sp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Vr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ep(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Hr(this.viewCache_),s=gD(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(t){return{filter:t}}function wD(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ED(t,e,n,r,i){const s=new _D;let o,a;if(n.type===At.OVERWRITE){const u=n;u.source.fromUser?o=If(t,e,u.path,u.snap,r,i,s):(P(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!B(u.path),o=Ql(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===At.MERGE){const u=n;u.source.fromUser?o=CD(t,e,u.path,u.children,r,i,s):(P(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Tf(t,e,u.path,u.children,r,i,a,s))}else if(n.type===At.ACK_USER_WRITE){const u=n;u.revert?o=kD(t,e,u.path,r,i,s):o=ID(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===At.LISTEN_COMPLETE)o=TD(t,e,n.path,r,s);else throw ts("Unknown operation type: "+n.type);const l=s.getChanges();return SD(e,o,l),{viewCache:o,changes:l}}function SD(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ef(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(iS(Ef(e)))}}function pS(t,e,n,r,i,s){const o=e.eventCache;if(Yl(r,n)!=null)return e;{let a,l;if(B(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Hr(e),c=u instanceof L?u:L.EMPTY_NODE,d=wp(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=ql(r,Hr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=j(n);if(u===".priority"){P(sr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=L_(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=J(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=L_(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=Ep(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return $s(e,a,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function Ql(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(B(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),g,null)}else{const g=j(n);if(!l.isCompleteForPath(n)&&sr(n)>1)return e;const _=J(n),w=l.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),g,w,_,hS,null)}const d=aS(e,u,l.isFullyInitialized()||B(n),c.filtersNodes()),f=new Sp(i,d,s);return pS(t,d,n,i,f,a)}function If(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Sp(i,e,s);if(B(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=$s(e,u,!0,t.filter.filtersNodes());else{const d=j(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=$s(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=J(n),g=a.getNode().getImmediateChild(d);let _;if(B(f))_=r;else{const y=c.getCompleteChild(d);y!=null?YE(f)===".priority"&&y.getChild(XE(f)).isEmpty()?_=y:_=y.updateChild(f,r):_=L.EMPTY_NODE}if(g.equals(_))l=e;else{const y=t.filter.updateChild(a.getNode(),d,_,f,c,o);l=$s(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function M_(t,e){return t.eventCache.isCompleteForChild(e)}function CD(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=we(n,l);M_(e,j(c))&&(a=If(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=we(n,l);M_(e,j(c))||(a=If(t,a,c,u,i,s,o))}),a}function F_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Tf(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;B(n)?u=r:u=new re(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),_=F_(t,g,f);l=Ql(t,l,new X(d),_,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const g=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!g){const _=e.serverCache.getNode().getImmediateChild(d),y=F_(t,_,f);l=Ql(t,l,new X(d),y,i,s,o,a)}}),l}function ID(t,e,n,r,i,s,o){if(Yl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(B(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ql(t,e,n,l.getNode().getChild(n),i,s,a,o);if(B(n)){let u=new re(null);return l.getNode().forEachChild(Pi,(c,d)=>{u=u.set(new X(c),d)}),Tf(t,e,n,u,i,s,a,o)}else return e}else{let u=new re(null);return r.foreach((c,d)=>{const f=we(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),Tf(t,e,n,u,i,s,a,o)}}function TD(t,e,n,r,i){const s=e.serverCache,o=aS(e,s.getNode(),s.isFullyInitialized()||B(n),s.isFiltered());return pS(t,o,n,r,hS,i)}function kD(t,e,n,r,i,s){let o;if(Yl(r,n)!=null)return e;{const a=new Sp(r,e,i),l=e.eventCache.getNode();let u;if(B(n)||j(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=ql(r,Hr(e));else{const d=e.serverCache.getNode();P(d instanceof L,"serverChildren would be complete if leaf node"),c=wp(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=j(n);let d=Ep(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,J(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,L.EMPTY_NODE,J(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ql(r,Hr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Yl(r,G())!=null,$s(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new mp(r.getIndex()),s=GA(r);this.processor_=yD(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(L.EMPTY_NODE,a.getNode(),null),c=new Vr(l,o.isFullyInitialized(),i.filtersNodes()),d=new Vr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=zu(d,c),this.eventGenerator_=new ZA(this.query_)}get query(){return this.query_}}function RD(t){return t.viewCache_.serverCache.getNode()}function ND(t,e){const n=Hr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function U_(t){return t.eventRegistrations_.length===0}function OD(t,e){t.eventRegistrations_.push(e)}function $_(t,e,n){const r=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function z_(t,e,n,r){e.type===At.MERGE&&e.source.queryId!==null&&(P(Hr(t.viewCache_),"We should always have a full cache before handling merges"),P(Ef(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=ED(t.processor_,i,e,n,r);return wD(t.processor_,s.viewCache),P(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,mS(t,s.changes,s.viewCache.eventCache.getNode(),null)}function xD(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(s,o)=>{r.push(Gi(s,o))}),n.isFullyInitialized()&&r.push(iS(n.getNode())),mS(t,r,n.getNode(),e)}function mS(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return eD(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xl;class bD{constructor(){this.views=new Map}}function AD(t){P(!Xl,"__referenceConstructor has already been defined"),Xl=t}function DD(){return P(Xl,"Reference.ts has not been loaded"),Xl}function LD(t){return t.views.size===0}function Cp(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return P(s!=null,"SyncTree gave us an op for an invalid query."),z_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(z_(o,e,n,r));return s}}function MD(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=ql(n,i?r:null),l=!1;a?l=!0:r instanceof L?(a=wp(n,r),l=!1):(a=L.EMPTY_NODE,l=!1);const u=zu(new Vr(a,l,!1),new Vr(r,i,!1));return new PD(e,u)}return o}function FD(t,e,n,r,i,s){const o=MD(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),OD(o,n),xD(o,n)}function UD(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=or(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat($_(u,n,r)),U_(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat($_(l,n,r)),U_(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!or(t)&&s.push(new(DD())(e._repo,e._path)),{removed:s,events:o}}function gS(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ri(t,e){let n=null;for(const r of t.views.values())n=n||ND(r,e);return n}function _S(t,e){if(e._queryParams.loadsAllData())return ju(t);{const r=e._queryIdentifier;return t.views.get(r)}}function vS(t,e){return _S(t,e)!=null}function or(t){return ju(t)!=null}function ju(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jl;function $D(t){P(!Jl,"__referenceConstructor has already been defined"),Jl=t}function zD(){return P(Jl,"Reference.ts has not been loaded"),Jl}let jD=1;class j_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=mD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function BD(t,e,n,r,i){return iD(t.pendingWriteTree_,e,n,r,i),i?Go(t,new Wr(oS(),e,n)):[]}function gi(t,e,n=!1){const r=sD(t.pendingWriteTree_,e);if(oD(t.pendingWriteTree_,e)){let s=new re(null);return r.snap!=null?s=s.set(G(),!0):rt(r.children,o=>{s=s.set(new X(o),!0)}),Go(t,new Kl(r.path,s,n))}else return[]}function Bu(t,e,n){return Go(t,new Wr(_p(),e,n))}function WD(t,e,n){const r=re.fromObject(n);return Go(t,new Ro(_p(),e,r))}function VD(t,e){return Go(t,new Po(_p(),e))}function HD(t,e,n){const r=Ip(t,n);if(r){const i=Tp(r),s=i.path,o=i.queryId,a=Xe(s,e),l=new Po(vp(o),a);return kp(t,s,l)}else return[]}function kf(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||vS(o,e))){const l=UD(o,e,n,r);LD(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,g)=>or(g));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=qD(f);for(let _=0;_<g.length;++_){const y=g[_],w=y.query,m=SS(t,y);t.listenProvider_.startListening(js(w),Zl(t,w),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(js(e),null):u.forEach(f=>{const g=t.queryToTagMap.get(Wu(f));t.listenProvider_.stopListening(js(f),g)}))}YD(t,u)}return a}function GD(t,e,n,r){const i=Ip(t,r);if(i!=null){const s=Tp(i),o=s.path,a=s.queryId,l=Xe(o,e),u=new Wr(vp(a),l,n);return kp(t,o,u)}else return[]}function KD(t,e,n,r){const i=Ip(t,r);if(i){const s=Tp(i),o=s.path,a=s.queryId,l=Xe(o,e),u=re.fromObject(n),c=new Ro(vp(a),l,u);return kp(t,o,c)}else return[]}function B_(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const _=Xe(f,i);s=s||Ri(g,_),o=o||or(g)});let a=t.syncPointTree_.get(i);a?(o=o||or(a),s=s||Ri(a,G())):(a=new bD,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=L.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const y=Ri(_,G());y&&(s=s.updateImmediateChild(g,y))}));const u=vS(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Wu(e);P(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=QD();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const c=yp(t.pendingWriteTree_,i);let d=FD(a,e,n,c,s,l);if(!u&&!o&&!r){const f=_S(a,e);d=d.concat(XD(t,e,f))}return d}function yS(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Xe(o,e),u=Ri(a,l);if(u)return u});return cS(i,e,s,n,!0)}function Go(t,e){return wS(e,t.syncPointTree_,null,yp(t.pendingWriteTree_,G()))}function wS(t,e,n,r){if(B(t.path))return ES(t,e,n,r);{const i=e.get(G());n==null&&i!=null&&(n=Ri(i,G()));let s=[];const o=j(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=dS(r,o);s=s.concat(wS(a,l,u,c))}return i&&(s=s.concat(Cp(i,t,r,n))),s}}function ES(t,e,n,r){const i=e.get(G());n==null&&i!=null&&(n=Ri(i,G()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=dS(r,o),c=t.operationForChild(o);c&&(s=s.concat(ES(c,a,l,u)))}),i&&(s=s.concat(Cp(i,t,r,n))),s}function SS(t,e){const n=e.query,r=Zl(t,n);return{hashFn:()=>(RD(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?HD(t,n._path,r):VD(t,n._path);{const s=Hb(i,n);return kf(t,n,null,s)}}}}function Zl(t,e){const n=Wu(e);return t.queryToTagMap.get(n)}function Wu(t){return t._path.toString()+"$"+t._queryIdentifier}function Ip(t,e){return t.tagToQueryMap.get(e)}function Tp(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new X(t.substr(0,e))}}function kp(t,e,n){const r=t.syncPointTree_.get(e);P(r,"Missing sync point for query tag that we're tracking");const i=yp(t.pendingWriteTree_,e);return Cp(r,n,i,null)}function qD(t){return t.fold((e,n,r)=>{if(n&&or(n))return[ju(n)];{let i=[];return n&&(i=gS(n)),rt(r,(s,o)=>{i=i.concat(o)}),i}})}function js(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(zD())(t._repo,t._path):t}function YD(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Wu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function QD(){return jD++}function XD(t,e,n){const r=e._path,i=Zl(t,e),s=SS(t,n),o=t.listenProvider_.startListening(js(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)P(!or(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!B(u)&&c&&or(c))return[ju(c).query];{let f=[];return c&&(f=f.concat(gS(c).map(g=>g.query))),rt(d,(g,_)=>{f=f.concat(_)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(js(c),Zl(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Pp(n)}node(){return this.node_}}class Rp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=we(this.path_,e);return new Rp(this.syncTree_,n)}node(){return yS(this.syncTree_,this.path_)}}const JD=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},W_=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ZD(t[".sv"],e,n);if(typeof t[".sv"]=="object")return eL(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ZD=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},eL=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&P(!1,"Unexpected increment value: "+r);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},tL=function(t,e,n,r){return Np(e,new Rp(n,t),r)},nL=function(t,e,n){return Np(t,new Pp(e),n)};function Np(t,e,n){const r=t.getPriority().val(),i=W_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=W_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Se(a,$e(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Se(i))),o.forEachChild(fe,(a,l)=>{const u=Np(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function xp(t,e){let n=e instanceof X?e:new X(e),r=t,i=j(n);for(;i!==null;){const s=ji(r.node.children,i)||{children:{},childCount:0};r=new Op(i,r,s),n=J(n),i=j(n)}return r}function ss(t){return t.node.value}function CS(t,e){t.node.value=e,Pf(t)}function IS(t){return t.node.childCount>0}function rL(t){return ss(t)===void 0&&!IS(t)}function Vu(t,e){rt(t.node.children,(n,r)=>{e(new Op(n,t,r))})}function TS(t,e,n,r){n&&!r&&e(t),Vu(t,i=>{TS(i,e,!0,r)}),n&&r&&e(t)}function iL(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ko(t){return new X(t.parent===null?t.name:Ko(t.parent)+"/"+t.name)}function Pf(t){t.parent!==null&&sL(t.parent,t.name,t)}function sL(t,e,n){const r=rL(n),i=zt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Pf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Pf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oL=/[\[\].#$\/\u0000-\u001F\u007F]/,aL=/[\[\].#$\u0000-\u001F\u007F]/,Bc=10*1024*1024,kS=function(t){return typeof t=="string"&&t.length!==0&&!oL.test(t)},PS=function(t){return typeof t=="string"&&t.length!==0&&!aL.test(t)},lL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),PS(t)},RS=function(t,e,n){const r=n instanceof X?new IA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+yr(r));if(typeof e=="function")throw new Error(t+"contains a function "+yr(r)+" with contents = "+e.toString());if(RE(e))throw new Error(t+"contains "+e.toString()+" "+yr(r));if(typeof e=="string"&&e.length>Bc/3&&Nu(e)>Bc)throw new Error(t+"contains a string greater than "+Bc+" utf8 bytes "+yr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(rt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!kS(o)))throw new Error(t+" contains an invalid key ("+o+") "+yr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);TA(r,o),RS(t,a,r),kA(r)}),i&&s)throw new Error(t+' contains ".value" child '+yr(r)+" in addition to actual children.")}},NS=function(t,e,n,r){if(!(r&&n===void 0)&&!PS(n))throw new Error(Sw(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},uL=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),NS(t,e,n,r)},cL=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!kS(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!lL(n))throw new Error(Sw(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function OS(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!fp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function xS(t,e,n){OS(t,n),bS(t,r=>fp(r,e))}function Xr(t,e,n){OS(t,n),bS(t,r=>bt(r,e)||bt(e,r))}function bS(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(fL(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function fL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Or&&Ue("event: "+n.toString()),Vo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL="repo_interrupt",pL=25;class mL{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Gl(),this.transactionQueueTree_=new Op,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function gL(t,e,n){if(t.stats_=cp(t.repoInfo_),t.forceRestClient_||Yb())t.server_=new Hl(t.repoInfo_,(r,i,s,o)=>{V_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>H_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new cn(t.repoInfo_,e,(r,i,s,o)=>{V_(t,r,i,s,o)},r=>{H_(t,r)},r=>{vL(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=eA(t.repoInfo_,()=>new JA(t.stats_,t.server_)),t.infoData_=new KA,t.infoSyncTree_=new j_({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Bu(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),bp(t,"connected",!1),t.serverSyncTree_=new j_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Xr(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function _L(t){const n=t.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function AS(t){return JD({timestamp:_L(t)})}function V_(t,e,n,r,i){t.dataUpdateCount++;const s=new X(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Ol(n,u=>$e(u));o=KD(t.serverSyncTree_,s,l,i)}else{const l=$e(n);o=GD(t.serverSyncTree_,s,l,i)}else if(r){const l=Ol(n,u=>$e(u));o=WD(t.serverSyncTree_,s,l)}else{const l=$e(n);o=Bu(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Dp(t,s)),Xr(t.eventQueue_,a,o)}function H_(t,e){bp(t,"connected",e),e===!1&&wL(t)}function vL(t,e){rt(e,(n,r)=>{bp(t,n,r)})}function bp(t,e,n){const r=new X("/.info/"+e),i=$e(n);t.infoData_.updateSnapshot(r,i);const s=Bu(t.infoSyncTree_,r,i);Xr(t.eventQueue_,r,s)}function yL(t){return t.nextWriteId_++}function wL(t){DS(t,"onDisconnectEvents");const e=AS(t),n=Gl();wf(t.onDisconnect_,G(),(i,s)=>{const o=tL(i,s,t.serverSyncTree_,e);sS(n,i,o)});let r=[];wf(n,G(),(i,s)=>{r=r.concat(Bu(t.serverSyncTree_,i,s));const o=TL(t,i);Dp(t,o)}),t.onDisconnect_=Gl(),Xr(t.eventQueue_,G(),r)}function EL(t,e,n){let r;j(e._path)===".info"?r=B_(t.infoSyncTree_,e,n):r=B_(t.serverSyncTree_,e,n),xS(t.eventQueue_,e._path,r)}function G_(t,e,n){let r;j(e._path)===".info"?r=kf(t.infoSyncTree_,e,n):r=kf(t.serverSyncTree_,e,n),xS(t.eventQueue_,e._path,r)}function SL(t){t.persistentConnection_&&t.persistentConnection_.interrupt(hL)}function DS(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ue(n,...e)}function LS(t,e,n){return yS(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function Ap(t,e=t.transactionQueueTree_){if(e||Hu(t,e),ss(e)){const n=FS(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&CL(t,Ko(e),n)}else IS(e)&&Vu(e,n=>{Ap(t,n)})}function CL(t,e,n){const r=n.map(u=>u.currentWriteId),i=LS(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];P(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Xe(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{DS(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(gi(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Hu(t,xp(t.transactionQueueTree_,e)),Ap(t,t.transactionQueueTree_),Xr(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)Vo(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{dt("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Dp(t,e)}},o)}function Dp(t,e){const n=MS(t,e),r=Ko(n),i=FS(t,n);return IL(t,i,r),r}function IL(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Xe(n,l.path);let c=!1,d;if(P(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(gi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=pL)c=!0,d="maxretry",i=i.concat(gi(t.serverSyncTree_,l.currentWriteId,!0));else{const f=LS(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){RS("transaction failed: Data returned ",g,l.path);let _=$e(g);typeof g=="object"&&g!=null&&zt(g,".priority")||(_=_.updatePriority(f.getPriority()));const w=l.currentWriteId,m=AS(t),h=nL(_,f,m);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=h,l.currentWriteId=yL(t),o.splice(o.indexOf(w),1),i=i.concat(BD(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(gi(t.serverSyncTree_,w,!0))}else c=!0,d="nodata",i=i.concat(gi(t.serverSyncTree_,l.currentWriteId,!0))}Xr(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Hu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Vo(r[a]);Ap(t,t.transactionQueueTree_)}function MS(t,e){let n,r=t.transactionQueueTree_;for(n=j(e);n!==null&&ss(r)===void 0;)r=xp(r,n),e=J(e),n=j(e);return r}function FS(t,e){const n=[];return US(t,e,n),n.sort((r,i)=>r.order-i.order),n}function US(t,e,n){const r=ss(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Vu(e,i=>{US(t,i,n)})}function Hu(t,e){const n=ss(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,CS(e,n.length>0?n:void 0)}Vu(e,r=>{Hu(t,r)})}function TL(t,e){const n=Ko(MS(t,e)),r=xp(t.transactionQueueTree_,e);return iL(r,i=>{Wc(t,i)}),Wc(t,r),TS(r,i=>{Wc(t,i)}),n}function Wc(t,e){const n=ss(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(gi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?CS(e,void 0):n.length=s+1,Xr(t.eventQueue_,Ko(e),i);for(let o=0;o<r.length;o++)Vo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kL(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function PL(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):dt(`Invalid query segment '${n}' in query '${t}'`)}return e}const K_=function(t,e){const n=RL(t),r=n.namespace;n.domain==="firebase.com"&&_n(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&_n("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||zb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new zE(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new X(n.pathString)}},RL=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=kL(t.substring(c,d)));const f=PL(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ke(this.snapshot.exportVal())}}class zS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return B(this._path)?null:YE(this._path)}get ref(){return new Sn(this._repo,this._path)}get _queryIdentifier(){const e=O_(this._queryParams),n=lp(e);return n==="{}"?"default":n}get _queryObject(){return O_(this._queryParams)}isEqual(e){if(e=vt(e),!(e instanceof Lp))return!1;const n=this._repo===e._repo,r=fp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+CA(this._path)}}class Sn extends Lp{constructor(e,n){super(e,n,new gp,!1)}get parent(){const e=XE(this._path);return e===null?null:new Sn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class No{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new X(e),r=eu(this.ref,e);return new No(this._node.getChild(n),r,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new No(i,eu(this.ref,r),fe)))}hasChild(e){const n=new X(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function a2(t,e){return t=vt(t),t._checkNotDeleted("ref"),e!==void 0?eu(t._root,e):t._root}function eu(t,e){return t=vt(t),j(t._path)===null?uL("child","path",e,!1):NS("child","path",e,!1),new Sn(t._repo,we(t._path,e))}class Mp{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new $S("value",this,new No(e.snapshotNode,new Sn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zS(this,e,n):null}matches(e){return e instanceof Mp?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Fp{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zS(this,e,n):null}createEvent(e,n){P(e.childName!=null,"Child events should have a childName.");const r=eu(new Sn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new $S(e.type,this,new No(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Fp?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function OL(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{G_(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new NL(n,s||void 0),a=e==="value"?new Mp(o):new Fp(e,o);return EL(t._repo,t,a),()=>G_(t._repo,t,a)}function l2(t,e,n,r){return OL(t,"value",e,n,r)}AD(Sn);$D(Sn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xL="FIREBASE_DATABASE_EMULATOR_HOST",Rf={};let bL=!1;function AL(t,e,n,r){t.repoInfo_=new zE(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function DL(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||_n("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ue("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=K_(s,i),a=o.repoInfo,l,u;typeof process<"u"&&f_&&(u=f_[xL]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=K_(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new ki(ki.OWNER):new Xb(t.name,t.options,e);cL("Invalid Firebase Database URL",o),B(o.path)||_n("Database URL must point to the root of a Firebase Database (not including a child path).");const d=ML(a,t,c,new Qb(t.name,n));return new FL(d,t)}function LL(t,e){const n=Rf[e];(!n||n[t.key]!==t)&&_n(`Database ${e}(${t.repoInfo_}) has already been deleted.`),SL(t),delete n[t.key]}function ML(t,e,n,r){let i=Rf[e.name];i||(i={},Rf[e.name]=i);let s=i[t.toURLString()];return s&&_n("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new mL(t,bL,n,r),i[t.toURLString()]=s,s}class FL{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(gL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Sn(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(LL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_n("Cannot call "+e+" on a deleted database.")}}function UL(t=Hh(),e){const n=Fo(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=FP("database");r&&$L(n,...r)}return n}function $L(t,e,n,r={}){t=vt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&_n("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&_n('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ki(ki.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:UP(r.mockUserToken,t.app.options.projectId);s=new ki(o)}AL(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zL(t){Lb(dr),rr(new er("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return DL(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ft(h_,p_,t),Ft(h_,p_,"esm2017")}cn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};cn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};zL();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(e,n){this._delegate=e,this.firebase=n,bl(e,new er("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Pw(this._delegate)))}_getService(e,n=tr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=tr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){bl(this._delegate,e)}_addOrOverwriteComponent(e){kw(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BL={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},q_=new qr("app-compat","Firebase",BL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WL(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Ft,setLogLevel:Nw,onLog:Rw,apps:null,SDK_VERSION:dr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:aN}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||tr,!zt(e,u))throw q_.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const d=Vh(u,c);if(zt(e,d.name))return e[d.name];const f=new t(d,n);return e[d.name]=f,f}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,d=c.replace("-compat","");if(rr(u)&&u.type==="PUBLIC"){const f=(g=i())=>{if(typeof g[d]!="function")throw q_.create("invalid-app-argument",{appName:c});return g[d]()};u.serviceProps!==void 0&&po(f,u.serviceProps),n[d]=f,t.prototype[d]=function(...g){return this._getService.bind(this,c).apply(this,u.multipleInstances?g:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(){const t=WL(jL);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:jS,extendNamespace:e,createSubscribe:Ew,ErrorFactory:qr,deepExtend:po});function e(n){po(t,n)}return t}const VL=jS();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=new Ou("@firebase/app-compat"),HL="@firebase/app-compat",GL="0.2.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KL(t){Ft(HL,GL,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if($P()&&self.firebase!==void 0){Y_.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Y_.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const BS=VL;KL();var qL="firebase",YL="10.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */BS.registerVersion(qL,YL,"app-compat");const QL='"AIzaSyDQmMxyxhP8-5TZYF3SBc1TT9HzBQfJlOw"',XL='"learn-lingo-8ba07.firebaseapp.com"',JL='"learn-lingo-8ba07"',ZL='"learn-lingo-8ba07.appspot.com"',eM='"956499335478"',tM='"1:956499335478:web:d7626abe5c27a52f2cbb97"';BS.initializeApp({apiKey:QL,authDomain:XL,projectId:JL,storageBucket:ZL,messagingSenderId:eM,appId:tM});const u2=uE(),c2=UL(),Q_=({children:t,navigateTo:e=Fh})=>ho(Ru)?M.jsx(Rh,{to:e,replace:!0}):t,nM=({children:t,navigateTo:e=Pl})=>ho(Ru)?t:M.jsx(Rh,{to:e,replace:!0}),rM=T.lazy(()=>Lo(()=>import("./HomePage-DU4K_jj0.js"),__vite__mapDeps([0,1]))),iM=T.lazy(()=>Lo(()=>import("./Teachers-Cz-TxdPk.js"),__vite__mapDeps([2,3,4]))),sM=T.lazy(()=>Lo(()=>import("./Favorites-E45_1Gce.js"),__vite__mapDeps([5,3,4]))),oM=T.lazy(()=>Lo(()=>import("./LoginPage-BHBcUQql.js"),__vite__mapDeps([6,4,1]))),aM=T.lazy(()=>Lo(()=>import("./RegisterPage-B1V4eZLe.js"),__vite__mapDeps([7,4,1]))),lM=[{path:cw,element:M.jsx(rM,{})},{path:Fh,element:M.jsx(iM,{})},{path:dw,element:M.jsx(nM,{children:M.jsx(sM,{})})},{path:Pl,element:M.jsx(Q_,{children:M.jsx(oM,{})})},{path:tf,element:M.jsx(Q_,{children:M.jsx(aM,{})})}],uM=()=>M.jsxs(M.Fragment,{children:[M.jsx(bb,{children:M.jsx(T.Suspense,{fallback:M.jsx("p",{children:"Loading.."}),children:M.jsxs(uT,{children:[lM.map(({path:t,element:e})=>M.jsx(jd,{path:t,element:e},t)),M.jsx(jd,{path:"*",element:M.jsx(Rh,{to:"/"})})]})})}),M.jsx(LT,{})]}),cM=Fk`

:root {
  --font-family: "Roboto", sans-serif;
  --font-weight-medium: 500;
  --font-weight-regular: 400;
  --font-weight-bold: 700;
  --primary-transition: 0.3s ease-in-out;
}

html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  /* font-family: "Roboto", sans-serif; */
  color: ${t=>t.theme.colors.black};
  background: ${t=>t.theme.colors.secondBackground};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
.list {
  margin: 0;
  padding: 0;
  list-style: none;
}



h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  font-family: inherit;
  color: currentColor;
  text-decoration: none;
}

button {
  display: block;
  padding: 0;

  font-family: inherit;
  cursor: pointer;
  border: none;
  outline: none;
}

textarea {
  resize: none;
}`;var Up={},$p={};$p.__esModule=!0;$p.default=hM;function Wa(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Wa=function(n){return typeof n}:Wa=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Wa(t)}function Vc(){}var dM={getItem:Vc,setItem:Vc,removeItem:Vc};function fM(t){if((typeof self>"u"?"undefined":Wa(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function hM(t){var e="".concat(t,"Storage");return fM(e)?self[e]:dM}Up.__esModule=!0;Up.default=gM;var pM=mM($p);function mM(t){return t&&t.__esModule?t:{default:t}}function gM(t){var e=(0,pM.default)(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}var WS=void 0,_M=vM(Up);function vM(t){return t&&t.__esModule?t:{default:t}}var yM=(0,_M.default)("local");WS=yM;var zp="persist:",jp="persist/FLUSH",Gu="persist/REHYDRATE",Bp="persist/PAUSE",Wp="persist/PERSIST",Vp="persist/PURGE",Hp="persist/REGISTER",wM=-1;function Va(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Va=function(n){return typeof n}:Va=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Va(t)}function X_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function EM(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?X_(n,!0).forEach(function(r){SM(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X_(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function SM(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function CM(t,e,n,r){r.debug;var i=EM({},n);return t&&Va(t)==="object"&&Object.keys(t).forEach(function(s){s!=="_persist"&&e[s]===n[s]&&(i[s]=t[s])}),i}function IM(t){var e=t.blacklist||null,n=t.whitelist||null,r=t.transforms||[],i=t.throttle||0,s="".concat(t.keyPrefix!==void 0?t.keyPrefix:zp).concat(t.key),o=t.storage,a;t.serialize===!1?a=function(E){return E}:typeof t.serialize=="function"?a=t.serialize:a=TM;var l=t.writeFailHandler||null,u={},c={},d=[],f=null,g=null,_=function(E){Object.keys(E).forEach(function(C){m(C)&&u[C]!==E[C]&&d.indexOf(C)===-1&&d.push(C)}),Object.keys(u).forEach(function(C){E[C]===void 0&&m(C)&&d.indexOf(C)===-1&&u[C]!==void 0&&d.push(C)}),f===null&&(f=setInterval(y,i)),u=E};function y(){if(d.length===0){f&&clearInterval(f),f=null;return}var v=d.shift(),E=r.reduce(function(C,S){return S.in(C,v,u)},u[v]);if(E!==void 0)try{c[v]=a(E)}catch(C){console.error("redux-persist/createPersistoid: error serializing state",C)}else delete c[v];d.length===0&&w()}function w(){Object.keys(c).forEach(function(v){u[v]===void 0&&delete c[v]}),g=o.setItem(s,a(c)).catch(h)}function m(v){return!(n&&n.indexOf(v)===-1&&v!=="_persist"||e&&e.indexOf(v)!==-1)}function h(v){l&&l(v)}var p=function(){for(;d.length!==0;)y();return g||Promise.resolve()};return{update:_,flush:p}}function TM(t){return JSON.stringify(t)}function kM(t){var e=t.transforms||[],n="".concat(t.keyPrefix!==void 0?t.keyPrefix:zp).concat(t.key),r=t.storage;t.debug;var i;return t.deserialize===!1?i=function(o){return o}:typeof t.deserialize=="function"?i=t.deserialize:i=PM,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(l){o[l]=e.reduceRight(function(u,c){return c.out(u,l,a)},i(a[l]))}),o}catch(l){throw l}else return})}function PM(t){return JSON.parse(t)}function RM(t){var e=t.storage,n="".concat(t.keyPrefix!==void 0?t.keyPrefix:zp).concat(t.key);return e.removeItem(n,NM)}function NM(t){}function J_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Jt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?J_(n,!0).forEach(function(r){OM(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J_(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function OM(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xM(t,e){if(t==null)return{};var n=bM(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function bM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var AM=5e3;function DM(t,e){var n=t.version!==void 0?t.version:wM;t.debug;var r=t.stateReconciler===void 0?CM:t.stateReconciler,i=t.getStoredState||kM,s=t.timeout!==void 0?t.timeout:AM,o=null,a=!1,l=!0,u=function(d){return d._persist.rehydrated&&o&&!l&&o.update(d),d};return function(c,d){var f=c||{},g=f._persist,_=xM(f,["_persist"]),y=_;if(d.type===Wp){var w=!1,m=function(I,N){w||(d.rehydrate(t.key,I,N),w=!0)};if(s&&setTimeout(function(){!w&&m(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(t.key,'"')))},s),l=!1,o||(o=IM(t)),g)return Jt({},e(y,d),{_persist:g});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(t.key),i(t).then(function(S){var I=t.migrate||function(N,x){return Promise.resolve(N)};I(S,n).then(function(N){m(N)},function(N){m(void 0,N)})},function(S){m(void 0,S)}),Jt({},e(y,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===Vp)return a=!0,d.result(RM(t)),Jt({},e(y,d),{_persist:g});if(d.type===jp)return d.result(o&&o.flush()),Jt({},e(y,d),{_persist:g});if(d.type===Bp)l=!0;else if(d.type===Gu){if(a)return Jt({},y,{_persist:Jt({},g,{rehydrated:!0})});if(d.key===t.key){var h=e(y,d),p=d.payload,v=r!==!1&&p!==void 0?r(p,c,h,t):h,E=Jt({},v,{_persist:Jt({},g,{rehydrated:!0})});return u(E)}}}if(!g)return e(c,d);var C=e(y,d);return C===y?c:u(Jt({},C,{_persist:g}))}}function Z_(t){return FM(t)||MM(t)||LM()}function LM(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function MM(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function FM(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function ev(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Nf(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ev(n,!0).forEach(function(r){UM(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ev(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function UM(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var VS={registry:[],bootstrapped:!1},$M=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:VS,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Hp:return Nf({},e,{registry:[].concat(Z_(e.registry),[n.key])});case Gu:var r=e.registry.indexOf(n.key),i=Z_(e.registry);return i.splice(r,1),Nf({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function zM(t,e,n){var r=n||!1,i=np($M,VS,e&&e.enhancer?e.enhancer:void 0),s=function(u){i.dispatch({type:Hp,key:u})},o=function(u,c,d){var f={type:Gu,payload:c,err:d,key:u};t.dispatch(f),i.dispatch(f),r&&a.getState().bootstrapped&&(r(),r=!1)},a=Nf({},i,{purge:function(){var u=[];return t.dispatch({type:Vp,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return t.dispatch({type:jp,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){t.dispatch({type:Bp})},persist:function(){t.dispatch({type:Wp,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}const HS=op({name:"filters",initialState:{filterLanguage:"",filterLevel:"",filterPrice:""},reducers:{setFilterLanguage(t,{payload:e}){t.filterLanguage=e},setFilterLevel(t,{payload:e}){t.filterLevel=e},setFilterPrice(t,{payload:e}){t.filterPrice=e}}}),{setFilterLanguage:d2,setFilterLevel:f2,setFilterPrice:h2}=HS.actions,jM=HS.reducer,BM={key:"user",storage:WS,whitelist:["token","favorite"]},GS=ob({reducer:{user:DM(BM,Pb),modal:Ob,filters:jM},middleware:t=>t({serializableCheck:{ignoredActions:[jp,Gu,Bp,Wp,Vp,Hp]}})}),WM=zM(GS);function Ha(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ha=function(n){return typeof n}:Ha=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ha(t)}function VM(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function tv(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function HM(t,e,n){return e&&tv(t.prototype,e),n&&tv(t,n),t}function GM(t,e){return e&&(Ha(e)==="object"||typeof e=="function")?e:Ga(t)}function Of(t){return Of=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Of(t)}function Ga(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function KM(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&xf(t,e)}function xf(t,e){return xf=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},xf(t,e)}function Ka(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var KS=function(t){KM(e,t);function e(){var n,r;VM(this,e);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=GM(this,(n=Of(e)).call.apply(n,[this].concat(s))),Ka(Ga(r),"state",{bootstrapped:!1}),Ka(Ga(r),"_unsubscribe",void 0),Ka(Ga(r),"handlePersistorState",function(){var a=r.props.persistor,l=a.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return HM(e,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),e}(T.PureComponent);Ka(KS,"defaultProps",{children:null,loading:null});const qM={colors:{background:"#fff",secondBackground:"#f8f8f8",heroBackground:"#F2C0BD",darkPink:"#B03F3E",pink:"#E0A39A",black:"#121417",lightPink:"#DCAEA0",green:"#38CD3E",grey:"#8a8a89",yellow:"#ffc531",secondBlack:"rgba(18, 20, 23, 0.7)",modalBlack:"rgba(18, 20, 23, 0.8)",borderBlack:"rgba(18, 20, 23, 0.1)",spanGrey:"rgba(18, 20, 23, 0.2)"},spacing:t=>`${t*4}px`},YM=Gc.createRoot(document.getElementById("root"));YM.render(M.jsx(D.StrictMode,{children:M.jsx(_T,{basename:"/learn-lingo-react",children:M.jsx(IP,{store:GS,children:M.jsx(KS,{persistor:WM,children:M.jsxs(Dk,{theme:qM,children:[M.jsx(uM,{}),M.jsx(cM,{})]})})})})}));export{ne as B,Vk as G,Nh as N,Hc as R,wI as a,PP as b,ho as c,f2 as d,h2 as e,QM as f,a2 as g,c2 as h,r2 as i,M as j,d_ as k,Ru as l,S0 as m,ZM as n,l2 as o,u2 as p,n2 as q,T as r,d2 as s,i2 as t,_t as u,t2 as v,JM as w,e2 as x,o2 as y};
