(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e471409"],{"014b":function(t,e,r){"use strict";var n=r("e53d"),a=r("07e3"),o=r("8e60"),i=r("63b6"),u=r("9138"),c=r("ebfd").KEY,s=r("294c"),f=r("dbdb"),l=r("45f2"),p=r("62a0"),h=r("5168"),b=r("ccb9"),d=r("6718"),y=r("47ee"),v=r("9003"),m=r("e4ae"),g=r("f772"),w=r("241e"),S=r("36c3"),O=r("1bc3"),x=r("aebd"),C=r("a159"),k=r("0395"),j=r("bf0b"),A=r("9aa9"),E=r("d9f6"),N=r("c3a1"),I=j.f,T=E.f,_=k.f,P=n.Symbol,z=n.JSON,F=z&&z.stringify,L="prototype",$=h("_hidden"),M=h("toPrimitive"),U={}.propertyIsEnumerable,R=f("symbol-registry"),W=f("symbols"),K=f("op-symbols"),V=Object[L],D="function"==typeof P&&!!A.f,H=n.QObject,J=!H||!H[L]||!H[L].findChild,G=o&&s((function(){return 7!=C(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=I(V,e);n&&delete V[e],T(t,e,r),n&&t!==V&&T(V,e,n)}:T,Y=function(t){var e=W[t]=C(P[L]);return e._k=t,e},B=D&&"symbol"==typeof P.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof P},X=function(t,e,r){return t===V&&X(K,e,r),m(t),e=O(e,!0),m(r),a(W,e)?(r.enumerable?(a(t,$)&&t[$][e]&&(t[$][e]=!1),r=C(r,{enumerable:x(0,!1)})):(a(t,$)||T(t,$,x(1,{})),t[$][e]=!0),G(t,e,r)):T(t,e,r)},q=function(t,e){m(t);var r,n=y(e=S(e)),a=0,o=n.length;while(o>a)X(t,r=n[a++],e[r]);return t},Q=function(t,e){return void 0===e?C(t):q(C(t),e)},Z=function(t){var e=U.call(this,t=O(t,!0));return!(this===V&&a(W,t)&&!a(K,t))&&(!(e||!a(this,t)||!a(W,t)||a(this,$)&&this[$][t])||e)},tt=function(t,e){if(t=S(t),e=O(e,!0),t!==V||!a(W,e)||a(K,e)){var r=I(t,e);return!r||!a(W,e)||a(t,$)&&t[$][e]||(r.enumerable=!0),r}},et=function(t){var e,r=_(S(t)),n=[],o=0;while(r.length>o)a(W,e=r[o++])||e==$||e==c||n.push(e);return n},rt=function(t){var e,r=t===V,n=_(r?K:S(t)),o=[],i=0;while(n.length>i)!a(W,e=n[i++])||r&&!a(V,e)||o.push(W[e]);return o};D||(P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(r){this===V&&e.call(K,r),a(this,$)&&a(this[$],t)&&(this[$][t]=!1),G(this,t,x(1,r))};return o&&J&&G(V,t,{configurable:!0,set:e}),Y(t)},u(P[L],"toString",(function(){return this._k})),j.f=tt,E.f=X,r("6abf").f=k.f=et,r("355d").f=Z,A.f=rt,o&&!r("b8e3")&&u(V,"propertyIsEnumerable",Z,!0),b.f=function(t){return Y(h(t))}),i(i.G+i.W+i.F*!D,{Symbol:P});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),at=0;nt.length>at;)h(nt[at++]);for(var ot=N(h.store),it=0;ot.length>it;)d(ot[it++]);i(i.S+i.F*!D,"Symbol",{for:function(t){return a(R,t+="")?R[t]:R[t]=P(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var e in R)if(R[e]===t)return e},useSetter:function(){J=!0},useSimple:function(){J=!1}}),i(i.S+i.F*!D,"Object",{create:Q,defineProperty:X,defineProperties:q,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:rt});var ut=s((function(){A.f(1)}));i(i.S+i.F*ut,"Object",{getOwnPropertySymbols:function(t){return A.f(w(t))}}),z&&i(i.S+i.F*(!D||s((function(){var t=P();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))}))),"JSON",{stringify:function(t){var e,r,n=[t],a=1;while(arguments.length>a)n.push(arguments[a++]);if(r=e=n[1],(g(e)||void 0!==t)&&!B(t))return v(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!B(e))return e}),n[1]=e,F.apply(z,n)}}),P[L][M]||r("35e8")(P[L],M,P[L].valueOf),l(P,"Symbol"),l(Math,"Math",!0),l(n.JSON,"JSON",!0)},"0395":function(t,e,r){var n=r("36c3"),a=r("6abf").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return a(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?u(t):a(n(t))}},"0d4f":function(t,e,r){},"1af6":function(t,e,r){var n=r("63b6");n(n.S,"Array",{isArray:r("9003")})},"1e71":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Input",{staticClass:"auto-height-textarea",style:t.style,attrs:{type:"textarea",placeholder:t.placeholder},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})},a=[],o=(r("c5f6"),r("2ef0")),i=r.n(o),u={name:"autoHeightTextarea",props:{value:{type:[String,Number],default:""},placeholder:{type:String,default:""},height:{type:[String,Number],default:""}},data:function(){return{textarea:""}},computed:{style:function(){var t=[];return this.height&&t.push("height:".concat(this.height).concat(i.a.isNumber(this.height)?"px":"")),t.join(";")}},watch:{textarea:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){t!==this.textarea&&(this.textarea=t)}},created:function(){this.textarea=this.value}},c=u,s=(r("c703"),r("2877")),f=Object(s["a"])(c,n,a,!1,null,null,null);e["a"]=f.exports},"20fd":function(t,e,r){"use strict";var n=r("d9f6"),a=r("aebd");t.exports=function(t,e,r){e in t?n.f(t,e,a(0,r)):t[e]=r}},"355d":function(t,e){e.f={}.propertyIsEnumerable},"47ee":function(t,e,r){var n=r("c3a1"),a=r("9aa9"),o=r("355d");t.exports=function(t){var e=n(t),r=a.f;if(r){var i,u=r(t),c=o.f,s=0;while(u.length>s)c.call(t,i=u[s++])&&e.push(i)}return e}},"549b":function(t,e,r){"use strict";var n=r("d864"),a=r("63b6"),o=r("241e"),i=r("b0dc"),u=r("3702"),c=r("b447"),s=r("20fd"),f=r("7cd6");a(a.S+a.F*!r("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,r,a,l,p=o(t),h="function"==typeof this?this:Array,b=arguments.length,d=b>1?arguments[1]:void 0,y=void 0!==d,v=0,m=f(p);if(y&&(d=n(d,b>2?arguments[2]:void 0,2)),void 0==m||h==Array&&u(m))for(e=c(p.length),r=new h(e);e>v;v++)s(r,v,y?d(p[v],v):p[v]);else for(l=m.call(p),r=new h;!(a=l.next()).done;v++)s(r,v,y?i(l,d,[a.value,v],!0):a.value);return r.length=v,r}})},"54a1":function(t,e,r){r("6c1c"),r("1654"),t.exports=r("95d5")},6718:function(t,e,r){var n=r("e53d"),a=r("584a"),o=r("b8e3"),i=r("ccb9"),u=r("d9f6").f;t.exports=function(t){var e=a.Symbol||(a.Symbol=o?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:i.f(t)})}},"67bb":function(t,e,r){t.exports=r("f921")},"69d3":function(t,e,r){r("6718")("asyncIterator")},"6abf":function(t,e,r){var n=r("e6f3"),a=r("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},"738d":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:"height:"+t.height},[t._t("default")],2)},a=[],o=(r("ac6a"),r("ac4d"),r("8a81"),r("5df3"),r("1c4c"),r("7f7f"),r("6b54"),r("6762"),r("2fdb"),r("c5f6"),r("a296"));function i(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=u(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}function u(t,e){if(t){if("string"===typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t){var e=document.querySelector(t);if(null===e)return 0;var r=window.getComputedStyle(e),n=parseFloat(r["marginTop"])+parseFloat(r["marginBottom"]);return Math.ceil(e.offsetHeight+n)}var f={name:"heightResize",props:{append:{type:Array,default:function(){return[]}},reduce:{type:Number,default:0},remove:{type:Array,default:function(){return[]}},ignore:{type:Boolean,default:!1}},data:function(){return{height:"auto"}},methods:{reportWindowSize:function(){this.resize()},resize:function(){var t,e=this,r=window.innerHeight,n=[".tool-select-block",".tool-category-menu-block",".ctool-bottom"],a=n.filter((function(t){return!e.remove.includes(t)})).concat(this.append),o=i(a);try{for(o.s();!(t=o.n()).done;){var u=t.value;r-=s(u)}}catch(c){o.e(c)}finally{o.f()}this.reduce>0&&(r-=this.reduce),r>100&&(r-=5),this.ignore||(this.height=r+"px"),this.$emit("resize",r)}},destroyed:function(){window.removeEventListener("resize",this.reportWindowSize),window.removeEventListener(o["a"],this.reportWindowSize)},mounted:function(){window.addEventListener("resize",this.reportWindowSize),window.addEventListener(o["a"],this.reportWindowSize),this.resize()}},l=f,p=r("2877"),h=Object(p["a"])(l,n,a,!1,null,null,null);e["a"]=h.exports},"75fc":function(t,e,r){"use strict";r.d(e,"a",(function(){return y}));var n=r("a745"),a=r.n(n);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t){if(a()(t))return o(t)}var u=r("67bb"),c=r.n(u),s=r("c8bb"),f=r.n(s),l=r("774e"),p=r.n(l);function h(t){if("undefined"!==typeof c.a&&f()(Object(t)))return p()(t)}function b(t,e){if(t){if("string"===typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?p()(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(t){return i(t)||h(t)||b(t)||d()}},"765d":function(t,e,r){r("6718")("observable")},"774e":function(t,e,r){t.exports=r("d2d5")},9003:function(t,e,r){var n=r("6b4c");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"95d5":function(t,e,r){var n=r("40c3"),a=r("5168")("iterator"),o=r("481b");t.exports=r("584a").isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||o.hasOwnProperty(n(e))}},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a745:function(t,e,r){t.exports=r("f410")},aa77:function(t,e,r){var n=r("5ca1"),a=r("be13"),o=r("79e5"),i=r("fdef"),u="["+i+"]",c="​",s=RegExp("^"+u+u+"*"),f=RegExp(u+u+"*$"),l=function(t,e,r){var a={},u=o((function(){return!!i[t]()||c[t]()!=c})),s=a[t]=u?e(p):i[t];r&&(a[r]=s),n(n.P+n.F*u,"String",a)},p=l.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(s,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},bf0b:function(t,e,r){var n=r("355d"),a=r("aebd"),o=r("36c3"),i=r("1bc3"),u=r("07e3"),c=r("794b"),s=Object.getOwnPropertyDescriptor;e.f=r("8e60")?s:function(t,e){if(t=o(t),e=i(e,!0),c)try{return s(t,e)}catch(r){}if(u(t,e))return a(!n.f.call(t,e),t[e])}},c5f6:function(t,e,r){"use strict";var n=r("7726"),a=r("69a8"),o=r("2d95"),i=r("5dbc"),u=r("6a99"),c=r("79e5"),s=r("9093").f,f=r("11e9").f,l=r("86cc").f,p=r("aa77").trim,h="Number",b=n[h],d=b,y=b.prototype,v=o(r("2aeb")(y))==h,m="trim"in String.prototype,g=function(t){var e=u(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():p(e,3);var r,n,a,o=e.charCodeAt(0);if(43===o||45===o){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+e}for(var i,c=e.slice(2),s=0,f=c.length;s<f;s++)if(i=c.charCodeAt(s),i<48||i>a)return NaN;return parseInt(c,n)}}return+e};if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof b&&(v?c((function(){y.valueOf.call(r)})):o(r)!=h)?i(new d(g(e)),r,b):g(e)};for(var w,S=r("9e1e")?s(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;S.length>O;O++)a(d,w=S[O])&&!a(b,w)&&l(b,w,f(d,w));b.prototype=y,y.constructor=b,r("2aba")(n,h,b)}},c703:function(t,e,r){"use strict";r("0d4f")},c8bb:function(t,e,r){t.exports=r("54a1")},ccb9:function(t,e,r){e.f=r("5168")},d2d5:function(t,e,r){r("1654"),r("549b"),t.exports=r("584a").Array.from},ebfd:function(t,e,r){var n=r("62a0")("meta"),a=r("f772"),o=r("07e3"),i=r("d9f6").f,u=0,c=Object.isExtensible||function(){return!0},s=!r("294c")((function(){return c(Object.preventExtensions({}))})),f=function(t){i(t,n,{value:{i:"O"+ ++u,w:{}}})},l=function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,n)){if(!c(t))return"F";if(!e)return"E";f(t)}return t[n].i},p=function(t,e){if(!o(t,n)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[n].w},h=function(t){return s&&b.NEED&&c(t)&&!o(t,n)&&f(t),t},b=t.exports={KEY:n,NEED:!1,fastKey:l,getWeak:p,onFreeze:h}},f410:function(t,e,r){r("1af6"),t.exports=r("584a").Array.isArray},f50d:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("heightResize",{attrs:{ignore:""},on:{resize:t.resize}},[r("Row",{attrs:{gutter:10}},[r("Col",{attrs:{span:"6"}},[r("input-block",{attrs:{top:"4px",text:t.$t("variableConversion_input")}},[r("autoHeightTextarea",{attrs:{height:t.height1,placeholder:t.$t("variableConversion_input_placeholder")},model:{value:t.current.input,callback:function(e){t.$set(t.current,"input",e)},expression:"current.input"}})],1)],1),t._l(t.resultColumns,(function(e,n){return r("Col",{key:n,style:"margin-top: "+(n>2?"10px":"0"),attrs:{span:"6"}},[r("input-block",{attrs:{top:"4px",type:"default",text:e.title},on:{"on-default-right-bottom-click":function(){return t.copy(e.key)}}},[r("autoHeightTextarea",{attrs:{height:n>2?t.height2:t.height1,value:t.output[e.key],placeholder:e.title}})],1)],1)}))],2)],1)},a=[],o=(r("7f7f"),r("ac4d"),r("8a81"),r("5df3"),r("1c4c"),r("6b54"),r("ac6a"),r("456d"),r("bd86")),i=r("75fc"),u=(r("28a5"),r("d225")),c=r("b0b4");r("a481");function s(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=f(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}function f(t,e){if(t){if("string"===typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var p="spaceCaseToPascalCaseSpace",h="pascalCaseSpaceToKebabCase",b="kebabCaseToUpperSnakeCase",d="upperSnakeCaseToPascalCase",y="pascalCaseToCamelCase",v="camelCaseToLowerSnakeCase",m="lowerSnakeCaseToSpaceCase",g=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!1===e?t.toUpperCase()===t:t.substr(0,1).toUpperCase()===t.substr(0,1)&&(1===t.length||t.substr(1,1).toLowerCase()===t.substr(1,1))},w=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!1===e?t.toLowerCase()===t:t.substr(0,1).toLowerCase()===t.substr(0,1)},S=function(t){return t.replace(t[0],t[0].toUpperCase())},O=function(t){return t.replace(t[0],t[0].toLowerCase())},x=function(t){return t=t.trim(),w(t)&&-1!==t.indexOf("_")?m:w(t)&&-1!==t.indexOf("-")?b:w(t)&&-1!==t.indexOf(" ")?p:g(t,!0)&&-1!==t.indexOf(" ")?h:g(t)&&-1!==t.indexOf("_")?d:g(t,!0)&&-1===t.indexOf("_")&&-1===t.indexOf(" ")&&-1===t.indexOf("0")?y:v},C=function(){function t(e){Object(u["a"])(this,t),this.setStr(e)}return Object(c["a"])(t,[{key:"setStr",value:function(t){return this.str=t.trim(),this}},{key:"spaceCaseToPascalCaseSpace",value:function(){return this.str.split(" ").map((function(t){return S(t)})).join(" ").trim()}},{key:"pascalCaseSpaceToKebabCase",value:function(){return this.str.replace(/ /g,"-").toLowerCase().trim()}},{key:"kebabCaseToUpperSnakeCase",value:function(){return this.str.toUpperCase().replace(/-/g,"_").trim()}},{key:"upperSnakeCaseToPascalCase",value:function(){return this.str.split("_").map((function(t){return S(t.toLowerCase())})).join("").trim()}},{key:"pascalCaseToCamelCase",value:function(){return O(this.str).trim()}},{key:"camelCaseToLowerSnakeCase",value:function(){for(var t="",e=0;e<this.str.length;e++){var r=this.str.substr(e,1);g(this.str.substr(e,1))&&(t+="_"),t+=r.toLowerCase()}return t.trim()}},{key:"lowerSnakeCaseToSpaceCase",value:function(){return this.str.replace(/_/g," ").trim()}},{key:"get",value:function(){var t,e=[p,h,b,d,y,v,m],r=e.indexOf(x(this.str));t=0===r?e:[].concat(Object(i["a"])(e.slice(r)),Object(i["a"])(e.slice(0,r)));for(var n={},a=this.str,o=0;o<t.length;o++)a=this.setStr(a)[t[o]](a),n[t[o]]=a;return n}}]),t}(),k=[{key:p,name:"Var Name"},{key:h,name:"var-name"},{key:b,name:"VAR_NAME"},{key:d,name:"VarName"},{key:y,name:"varName"},{key:v,name:"var_name"},{key:m,name:"var name"}],j={resultKey:k,convent:function(t){var e,r,n=(e={},Object(o["a"])(e,p,[]),Object(o["a"])(e,h,[]),Object(o["a"])(e,b,[]),Object(o["a"])(e,d,[]),Object(o["a"])(e,y,[]),Object(o["a"])(e,v,[]),Object(o["a"])(e,m,[]),e),a=t.split("\n").map((function(t){return t.trim()})).filter((function(t){return!!t})),i=s(a);try{for(i.s();!(r=i.n()).done;)for(var u=r.value,c=new C(u),f=c.get(),l=0,g=Object.keys(f);l<g.length;l++){var w=g[l];n[w].push(f[w])}}catch(k){i.e(k)}finally{i.f()}for(var S=0,O=Object.keys(n);S<O.length;S++){var x=O[S];n[x]=n[x].join("\n")}return n}},A=r("738d"),E=r("1e71"),N={components:{heightResize:A["a"],autoHeightTextarea:E["a"]},computed:{resultColumns:function(){return j.resultKey.map((function(t){return{title:t.name,key:t.key}}))},output:function(){var t=j.convent(this.current.input);return this.$saveToolData(this.current),t}},created:function(){this.$initToolData("input")},methods:{copy:function(t){this.$clipboardCopy(this.output[t],!0)},resize:function(t){this.height1=Math.ceil(t/2),this.height2=t-this.height1-10}},data:function(){return{current:{input:""},height1:100,height2:100}}},I=N,T=r("2877"),_=Object(T["a"])(I,n,a,!1,null,null,null);e["default"]=_.exports},f921:function(t,e,r){r("014b"),r("c207"),r("69d3"),r("765d"),t.exports=r("584a").Symbol},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);