(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(41),i=r.n(o),c=(r(87),r(89),r(153)),l=r(70),u=r(11),s=r(151),f=r(152),h=r(73),m=r.n(h),p=r(74);function d(){d=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(j){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new I(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return O()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(j){return{type:"throw",arg:j}}}e.wrap=l;var s={};function f(){}function h(){}function m(){}var p={};c(p,a,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(k([])));y&&y!==t&&r.call(y,a)&&(p=y);var g=m.prototype=f.prototype=Object.create(p);function E(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var n;this._invoke=function(a,o){function i(){return new t(function(n,i){!function n(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){s.value=e,i(s)},function(e){return n("throw",e,i,c)})}c(l.arg)}(a,o,n,i)})}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function k(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=m,c(g,"constructor",m),c(m,"constructor",h),h.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(b.prototype),c(b.prototype,o,function(){return this}),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=k,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}var v=function(e){var t=Object(n.useState)(""),r=Object(u.a)(t,2),o=r[0],i=r[1],h=Object(n.useState)(""),v=Object(u.a)(h,2),y=v[0],g=v[1],E=Object(n.useState)(),b=Object(u.a)(E,2),w=b[0],x=b[1],L=p.externals.mainUrl,I=function(){var e=Object(l.a)(d().mark(function e(t){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:m.a.post(L+"?income="+t).then(function(e){var t=e.data;g(t)}).catch(function(e){x(e.response.data),setTimeout(function(){x(null)},3e3)});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),k=function(){I(o)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{container:!0,spacing:2},a.a.createElement(c.a,{item:!0,xs:1,md:1}),a.a.createElement(c.a,{item:!0,xs:5,md:3},a.a.createElement("div",{className:"roman"},a.a.createElement("div",{className:"mdl"},a.a.createElement(s.a,{id:"romanString",required:!0,onChange:function(e){g("");var t=function(e){return null!=e&&"undefined"!=typeof e&&(e=e.replace("IIII","IV").replace("VV","X").replace("XXXX","XL").replace("LL","C").replace("IVI","V").replace("IIV","IV").replace("IIX","IX")),e}(e.target.value.toUpperCase());i(t)},value:o,onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),k())},label:"Enter a roman number",variant:"outlined",inputProps:{style:{fontSize:40}}})))),a.a.createElement(c.a,{item:!0,xs:1,md:1},a.a.createElement("div",{className:"wrap"},a.a.createElement("div",{className:"mdl"},a.a.createElement(f.a,{variant:"contained",onClick:k},"Convert")))),a.a.createElement(c.a,{item:!0,xs:5,md:3},a.a.createElement("div",{className:"arabian"},a.a.createElement("div",{className:"mdl"},a.a.createElement(s.a,{id:"filled-basic",label:"Integer Result",variant:"filled",value:y,inputProps:{style:{fontSize:40}}})))),a.a.createElement(c.a,{item:!0,xs:1,md:3}),a.a.createElement(c.a,{item:!0,xs:9,md:9},a.a.createElement("div",{className:"err"},w))))};var y=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(c.a,{container:!0,spacing:2},a.a.createElement(c.a,{item:!0,xs:3,ms:3}),a.a.createElement(c.a,{item:!0,xs:7,ms:7},a.a.createElement("h1",null,"Roman to Integer Converter"),a.a.createElement("span",null,"There are six instances where we required subtraction:",a.a.createElement("ul",null,a.a.createElement("li",{key:"l1"},"I can be placed before V (5) and X to make 4 and 9."),a.a.createElement("li",{key:"l2"},"X can be placed before L (50) and C to make 40 and 90."),a.a.createElement("li",{key:"l3"},"C can be placed before D (500) and M to make 400 and 900.")))),a.a.createElement(c.a,{item:!0,xs:2,ms:2})),a.a.createElement("header",{className:"App-header"},a.a.createElement(v,null),a.a.createElement(c.a,{container:!0,spacing:2},a.a.createElement(c.a,{item:!0,xs:2,ms:2}),a.a.createElement(c.a,{item:!0,xs:2,ms:2},a.a.createElement("ul",null,a.a.createElement("li",{key:"lnk1"},a.a.createElement("a",{href:"https://github.com/alexbbell/Roman2Integer"},"https://github.com/alexbbell/Roman2Integer")),a.a.createElement("li",{key:"lnk2"},a.a.createElement("a",{href:"https://github.com/alexbbell/Roman2IntegerWeb"},"https://github.com/alexbbell/Roman2IntegerWeb")))))))},g=function(e){e&&e instanceof Function&&r.e(1).then(r.bind(null,150)).then(function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(y,null))),g()},47:function(e,t,r){e.exports=r(115)},74:function(e){e.exports={externals:{mainUrl:"https://beliaeff.ru/Roman"}}},87:function(e,t,r){},89:function(e,t,r){}},[[47,3,2]]]);
//# sourceMappingURL=main.83adbef6.chunk.js.map