window.protonRuntime=window.protonRuntime||{},window.protonRuntime["rectangle-component"]=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e){t.exports=window.React},function(t,e){t.exports=window.ReactNative},function(t,e,r){"use strict";r.r(e),r.d(e,"RectangleComponent",(function(){return y}));var n=r(0),o=r.n(n),i=r(1);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=b(t);if(e){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}function l(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(l,t);var e,r,n,u=a(l);function l(){var t;c(this,l);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return d(s(t=u.call.apply(u,[this].concat(r))),"componentToHex",(function(t){var e=t.toString(16);return 1==e.length?"0"+e:e})),d(s(t),"rgbToHex",(function(e,r,n){return"#"+t.componentToHex(parseInt(e))+t.componentToHex(parseInt(r))+t.componentToHex(parseInt(n))})),d(s(t),"parseColor",(function(e){var r,n;if(null==e)return t.props.defaultColor;-1!=e.indexOf("#")?r=e:r=3==(n=-1!=e.indexOf("(")?e.split("(")[1].split(")")[0].split(","):e.split(",")).length?t.rgbToHex(n[0],n[1],n[2]):"#000000";return r})),t}return e=l,(r=[{key:"render",value:function(){var t={rectangle:{width:this.props._width,height:this.props._height,backgroundColor:""==this.props.background.trim()?this.props.defaultColor:this.parseColor(this.props.background),borderRadius:this.props.borderRadius,borderWidth:this.props.border.enabled?this.props.border.borderWidth:0,borderColor:this.parseColor(this.props.border.borderColor)}};return o.a.createElement(i.View,{style:t.rectangle,key:"rectView.".concat(this.props._width+this.props._height+this.props.borderRadius)})}}])&&p(e.prototype,r),n&&p(e,n),l}(n.Component)}]);