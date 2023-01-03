var V={},Q={},x={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Cache=e.isNonNullObject=e.PROTO_ACTIONS=e.CONSTRUCTOR_ACTIONS=e.preserve=e.ignore=e.error=void 0,e.error="error",e.ignore="ignore",e.preserve="preserve",e.CONSTRUCTOR_ACTIONS=[e.error,e.ignore,e.preserve],e.PROTO_ACTIONS=e.CONSTRUCTOR_ACTIONS;const i=g=>g!==null&&typeof g=="object";e.isNonNullObject=i;class r{constructor(s=1e6/2){this._max=s,this._cache={},this._size=0,this._old={}}get(s){return this.has(s)?this._cache[s]:void 0}set(s,b){return this._size>=this._max&&(this._old=this._cache,this._cache={},this._size=0),this._cache[s]=b,this._size++,b}has(s){return Object.prototype.hasOwnProperty.call(this._cache,s)?!0:Object.prototype.hasOwnProperty.call(this._old,s)?(this._cache[s]=this._old[s],!0):!1}}e.Cache=r})(x);Object.defineProperty(Q,"__esModule",{value:!0});Q.newParse=void 0;const y=x,de="bigint",ie="number",Oe=/(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,we=/(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/,oe={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},ye=e=>{let i,r,g;const s={errorOnBigIntDecimalOrScientific:!1,errorOnDuplicatedKeys:!1,parseBigIntAsString:!1,alwaysParseAsBigInt:!1,protoAction:y.preserve,constructorAction:y.preserve};if(e){if((e.strict===!0||e.errorOnBigIntDecimalOrScientific===!0)&&(s.errorOnBigIntDecimalOrScientific=!0),(e.strict===!0||e.errorOnDuplicatedKeys===!0)&&(s.errorOnDuplicatedKeys=!0),e.parseBigIntAsString===!0&&(s.parseBigIntAsString=!0),e.alwaysParseAsBigInt===!0&&(s.alwaysParseAsBigInt=!0),e.protoAction)if(y.PROTO_ACTIONS.includes(e.protoAction))s.protoAction=e.protoAction;else throw new Error(`Incorrect value for protoAction option, must be ${y.PROTO_ACTIONS.map(c=>`"${c}"`).join(" or ")} but passed ${e.protoAction}`);if(e.constructorAction)if(y.CONSTRUCTOR_ACTIONS.includes(e.constructorAction))s.constructorAction=e.constructorAction;else throw new Error(`Incorrect value for constructorAction option, must be ${y.CONSTRUCTOR_ACTIONS.map(c=>`"${c}"`).join(" or ")} but passed ${e.constructorAction}`)}const b=c=>{throw{name:"SyntaxError",message:c,at:i,text:g}},N=c=>{if(c!==r)return b("Expected '"+c+"' instead of '"+r+"'")},u=c=>(r=g.charAt(++i),c&&N(c),r),l=()=>{for(;r&&r<=" ";)u()},A=c=>{const h=s.protoAction===y.preserve?Object.create(null):{};if(r==="{"){if(u(),l(),r==="}")return u(),h;for(;r;){const f=j(),v=(0,y.isNonNullObject)(c)&&!Array.isArray(c)?c[f]||c[Symbol.for("any")]:void 0;if(l(),N(":"),u(),s.errorOnDuplicatedKeys===!0&&Object.hasOwnProperty.call(h,f)&&b(`Duplicate key "${f}"`),Oe.test(f)===!0?s.protoAction===y.error?b("Object contains forbidden prototype property"):s.protoAction===y.ignore?m():h[f]=m(v):we.test(f)===!0?s.constructorAction===y.error?b("Object contains forbidden constructor property"):s.constructorAction===y.ignore?m():h[f]=m(v):h[f]=m(v),l(),r==="}")return u(),s.protoAction===y.preserve&&Object.setPrototypeOf(h,Object.prototype),h;N(","),u(),l()}}return b("Bad object")},C=c=>{const h=[];if(r==="["){if(u(),l(),r==="]")return u(),h;const f=Array.isArray(c),v=f&&c.length>1;for(;r;){if(h.push(m(v?c[h.length]:f?c[0]:void 0)),l(),r==="]")return u(),h;N(","),u(),l()}}return b("Bad array")},j=()=>{let c="";if(r==='"'){let h=i+1;for(;u();){if(r==='"')return i>h&&(c+=g.substring(h,i)),u(),c;if(r==="\\"){if(i>h&&(c+=g.substring(h,i)),u(),r==="u"){let f=0;for(let v=0;v<4;v+=1){const E=parseInt(u(),16);if(!isFinite(E))break;f=f*16+E}c+=String.fromCharCode(f)}else if(typeof oe[r]=="string")c+=oe[r];else break;h=i+1}}}return b("Bad string")},T=(()=>{const c=new y.Cache;return h=>{let f="",v=!0;for(r==="-"&&(f=r,v=!1,u()),r==="0"&&(f+=r,u(),r>="0"&&r<="9"&&b("Bad number"));r>="0"&&r<="9";)f+=r,u();if(r===".")for(f+=r;u()&&r>="0"&&r<="9";)f+=r;if(r==="e"||r==="E")for(f+=r,u(),(r==="-"||r==="+")&&(f+=r,u());r>="0"&&r<="9";)f+=r,u();const E=h,U=c.get(f);if(!U||!U.has(E)){const _=U||c.set(f,new Map),I=Number(f);if(Number.isNaN(I))_.set(E,NaN);else if(!Number.isFinite(I))_.set(E,v?1/0:-1/0);else{const R=/[.eE]/.test(f);if(Number.isSafeInteger(I)||R)typeof h=="function"&&(h=h(I)),_.set(E,h===ie||!s.alwaysParseAsBigInt&&h!==de||R&&!s.errorOnBigIntDecimalOrScientific?I:R?b("Decimal and scientific notation cannot be bigint"):BigInt(f));else{let F;typeof h=="function"&&(F=BigInt(f),h=h(F)),h===ie?_.set(E,I):_.set(E,s.parseBigIntAsString?f:F||BigInt(f))}}}const J=c.get(f).get(E);return Number.isNaN(J)?b("Bad number"):J}})(),D=()=>{switch(r){case"t":return u("r"),u("u"),u("e"),u(),!0;case"f":return u("a"),u("l"),u("s"),u("e"),u(),!1;case"n":return u("u"),u("l"),u("l"),u(),null}return b(`Unexpected '${r}'`)},m=c=>{switch(l(),r){case"{":return A(c);case"[":return C(c);case'"':return j();case"-":return T(c);default:return r>="0"&&r<="9"?T(c):D()}};return(c,h,f)=>{i=-1,r=" ",g=String(c);const v=m(f);return l(),r&&b("Syntax error"),typeof h=="function"?function E(U,J){const _=U[J];if((0,y.isNonNullObject)(_)){const I=new Set;for(const R in _){const F=Array.isArray(_)?[..._]:{..._};I.forEach(be=>delete F[be]);const ne=E(F,R);I.add(R),ne!==void 0?_[R]=ne:delete _[R]}}return h.call(U,J,_)}({"":v},""):v}};Q.newParse=ye;var X={};Object.defineProperty(X,"__esModule",{value:!0});X.stringify=void 0;const ee=x,Se=e=>(0,ee.isNonNullObject)(e)&&typeof e.toJSON=="function",Y=e=>e instanceof Number?Number(e):e instanceof String?String(e):e,se=(()=>{const e=/[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,i={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},r=new ee.Cache;return g=>(r.has(g)||(e.lastIndex=0,r.set(g,e.test(g)?'"'+g.replace(e,function(s){const b=i[s];return typeof b=="string"?b:"\\u"+("0000"+s.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+g+'"')),r.get(g))})();X.stringify=(()=>{const e=new Set;let i,r,g;const s=new Set,b=(N,u)=>{let l=N[u];switch(Se(l)&&(l=l.toJSON()),typeof g=="function"&&(l=g.call(N,u.toString(),l)),typeof l){case"string":return se(l);case"number":return Number.isFinite(l)?l.toString():"null";case"boolean":case"bigint":return l.toString();case"object":{if(!l)return"null";if(e.has(l))throw new TypeError("cyclic object value");e.add(l);const A=i;if(i+=r,Array.isArray(l)){const T=l.map((m,c)=>b(l,c)||"null"),D=T.length===0?"[]":i?`[
`+i+T.join(`,
`+i)+`
`+A+"]":"["+T.join(",")+"]";return e.delete(l),i=A,D}const C=[];(s.size>0?s:Object.keys(l)).forEach(T=>{const D=b(l,T);D&&C.push(se(T)+(r?": ":":")+D)});const j=C.length===0?"{}":i?`{
`+i+C.join(`,
`+i)+`
`+A+"}":"{"+C.join(",")+"}";return e.delete(l),i=A,j}}};return(N,u,l)=>{N=Y(N),e.clear(),i="";const A=Y(l);return r=typeof A=="number"&&A>0?new Array(A+1).join(" "):typeof A!="string"?"":A.length>10?A.slice(0,10):A,s.clear(),Array.isArray(u)?(g=null,(0,ee.isNonNullObject)(N)&&u.forEach(C=>{const j=Y(C);if(typeof j=="string"||typeof j=="number"){const T=j.toString();s.has(T)||s.add(T)}})):g=u,b({"":N},"")}})();(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.stringify=e.parse=e.JSONB=void 0,process.on("unhandledRejection",(s,b)=>{console.error("Unhandled Rejection at:",b,"reason:",s),process.exit(1)});const i=Q,r=X;Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return r.stringify}});const g=(0,i.newParse)();e.parse=g,e.JSONB=Object.assign(s=>({parse:(0,i.newParse)(s),stringify:r.stringify}),{parse:g,stringify:r.stringify})})(V);function S(e,i){if(!(this instanceof S))throw new SyntaxError("Constructor must be called with the new operator");this.message=e+" (char "+i+")",this.char=i,this.stack=new Error().stack}S.prototype=new Error;S.prototype.constructor=Error;var re={"'":!0,"‘":!0,"’":!0,"`":!0,"´":!0},te={'"':!0,"“":!0,"”":!0};function ue(e){return Ae.test(e)}var Ae=/^[a-zA-Z_]$/;function ve(e){return _e.test(e)}var _e=/^[0-9a-fA-F]$/;function k(e){return Ne.test(e)}var Ne=/^[0-9]$/;function H(e){return e===" "||e==="	"||e===`
`||e==="\r"}function q(e){return e===" "||e>=" "&&e<=" "||e===" "||e===" "||e==="　"}function Te(e){for(var i="",r=0;r<e.length;r++){var g=e[r];i+=q(g)?" ":g}return i}function Ee(e){return re[e]===!0||te[e]===!0}function ce(e){return re[e]===!0}function Ie(e){return te[e]===!0}function fe(e){return re[e]===!0?"'":te[e]===!0?'"':e}function G(e,i){var r=e.lastIndexOf(i);return r!==-1?e.substring(0,r)+e.substring(r+1):e}function M(e,i){var r=e.length;if(!H(e[r-1]))return e+i;for(;H(e[r-1]);)r--;return e.substring(0,r)+i+e.substring(r)}function Ce(e,i,r){return e.substring(0,r)+i+e.substring(r)}var w=0,z=1,B=2,$=3,pe=4,Z=5,L=6,je={"":!0,"{":!0,"}":!0,"[":!0,"]":!0,":":!0,",":!0,"(":!0,")":!0,";":!0,"+":!0},me={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},ae={"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},Re={null:"null",true:"true",false:"false"},le={None:"null",True:"true",False:"false"},P="",a="",O=0,n="",t="",o=L;function ke(e){P=e,a="",O=0,n=P.charAt(0),t="",o=L,p();var i=o;if(W(),he(),t==="")return a;if(i===o&&K()){for(var r="";i===o&&K();)a=M(a,","),r+=a,a="",W(),he();return`[
`.concat(r).concat(a,`
]`)}throw new S("Unexpected characters",O-t.length)}function d(){O++,n=P.charAt(O)}function Pe(){d(),n==="\\"&&d()}function K(){return o===w&&(t==="["||t==="{")||o===B||o===z||o===$}function Be(){return o===B||o===z||o===$}function p(){a+=t,o=L,t="",De(),o===pe&&(t=Te(t),p()),o===Z&&(o=L,t="",p())}function he(){t===","&&(t="",o=L,p())}function De(){if(je[n]){o=w,t=n,d();return}Ue()}function Ue(){if(k(n)||n==="-"){if(o=z,n==="-"){if(t+=n,d(),!k(n))throw new S("Invalid number, digit expected",O)}else n==="0"&&(t+=n,d());for(;k(n);)t+=n,d();if(n==="."){if(t+=n,d(),!k(n))throw new S("Invalid number, digit expected",O);for(;k(n);)t+=n,d()}if(n==="e"||n==="E"){if(t+=n,d(),(n==="+"||n==="-")&&(t+=n,d()),!k(n))throw new S("Invalid number, digit expected",O);for(;k(n);)t+=n,d()}return}Fe()}function Fe(){n==="\\"&&P.charAt(O+1)==='"'?(d(),ge(Pe)):ge(d)}function ge(e){if(Ee(n)){var i=fe(n),r=ce(n)?ce:Ie;for(t+='"',o=B,e();n!==""&&!r(n);)if(n==="\\"){e();var g=me[n];if(g!==void 0)t+="\\"+n,e();else if(n==="u"){t+="\\u",e();for(var s=0;s<4;s++){if(!ve(n))throw new S("Invalid unicode character",O-t.length);t+=n,e()}}else if(n==="'")t+="'",e();else throw new S('Invalid escape character "\\'+n+'"',O)}else ae[n]?(t+=ae[n],e()):n==='"'?(t+='\\"',e()):(t+=n,e());if(fe(n)!==i)throw new S("End of string expected",O-t.length);t+='"',e();return}Me()}function Me(){if(ue(n)){for(o=$;ue(n)||k(n)||n==="$";)t+=n,d();return}$e()}function $e(){if(H(n)||q(n)){for(o=pe;H(n)||q(n);)t+=n,d();return}Le()}function Le(){if(n==="/"&&P[O+1]==="*"){for(o=Z;n!==""&&(n!=="*"||n==="*"&&P[O+1]!=="/");)t+=n,d();n==="*"&&P[O+1]==="/"&&(t+=n,d(),t+=n,d());return}if(n==="/"&&P[O+1]==="/"){for(o=Z;n!==""&&n!==`
`;)t+=n,d();return}ze()}function ze(){for(o=L;n!=="";)t+=n,d();throw new S('Syntax error in part "'+t+'"',O-t.length)}function W(){if(o===w&&t==="{"){if(p(),o===w&&t==="}"){p();return}for(;;){if((o===$||o===z)&&(o=B,t='"'.concat(t,'"')),o!==B)throw new S("Object key expected",O-t.length);if(p(),o===w&&t===":")p();else if(K())a=M(a,":");else throw new S("Colon expected",O-t.length);if(W(),o===w&&t===","){if(p(),o===w&&t==="}"){a=G(a,",");break}if(t===""){a=G(a,",");break}}else if(Be())a=M(a,",");else break}o===w&&t==="}"?p():a=M(a,"}");return}Je()}function Je(){if(o===w&&t==="["){if(p(),o===w&&t==="]"){p();return}for(;;)if(W(),o===w&&t===","){if(p(),o===w&&t==="]"){a=G(a,",");break}if(t===""){a=G(a,",");break}}else if(K())a=M(a,",");else break;o===w&&t==="]"?p():a=M(a,"]");return}We()}function We(){if(o===B){for(p();o===w&&t==="+";)if(t="",p(),o===B){var e=a.lastIndexOf('"');a=a.substring(0,e)+t.substring(1),t="",p()}return}He()}function He(){if(o===z){p();return}Ge()}function Ge(){if(o===$){if(Re[t]){p();return}if(le[t]){t=le[t],p();return}var e=t,i=a.length;if(t="",p(),o===w&&t==="("){t="",p(),W(),o===w&&t===")"&&(t="",p(),o===w&&t===";"&&(t="",p()));return}for(a=Ce(a,'"'.concat(e),i);o===$||o===z;)p();a+='"';return}Ke()}function Ke(){throw t===""?new S("Unexpected end of json string",O-t.length):new S("Value expected",O-t.length)}const Qe={parse:(e,{BIGINT_TO_STING:i=!1,JSON_REPAIR:r=!1}={})=>V.parse(r?ke(e):e,(g,s)=>i&&typeof s=="bigint"?s.toString():s),stringify:(e,i,r)=>V.stringify(e,i,r)};export{Qe as J,ke as j};