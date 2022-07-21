"use strict";(self["webpackChunkc_tool"]=self["webpackChunkc_tool"]||[]).push([[8813],{2398:function(t,e,r){r.d(e,{Z:function(){return h}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Input",{staticClass:"auto-height-textarea",style:t.style,attrs:{type:"textarea",placeholder:t.placeholder},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})},a=[],n=(r(9653),r(92222),r(69600),r(96486)),o=r.n(n),s={name:"autoHeightTextarea",props:{value:{type:[String,Number],default:""},placeholder:{type:String,default:""},height:{type:[String,Number],default:""}},data:function(){return{textarea:""}},computed:{style:function(){var t=[];return this.height&&t.push("height:".concat(this.height).concat(o().isNumber(this.height)?"px":"")),t.join(";")}},watch:{textarea:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){t!==this.textarea&&(this.textarea=t)}},created:function(){this.textarea=this.value}},u=s,c=r(1001),l=(0,c.Z)(u,i,a,!1,null,null,null),h=l.exports},46976:function(t,e,r){r.d(e,{Z:function(){return p}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:"height:"+t.height},[t._t("default")],2)},a=[],n=r(62032),o=(r(9653),r(92222),r(57327),r(41539),r(26699),r(32023),r(34809));function s(t){var e=document.querySelector(t);if(null===e)return 0;var r=window.getComputedStyle(e),i=parseFloat(r["marginTop"])+parseFloat(r["marginBottom"]);return Math.ceil(e.offsetHeight+i)}var u={name:"heightResize",props:{append:{type:Array,default:function(){return[]}},reduce:{type:Number,default:0},remove:{type:Array,default:function(){return[]}},ignore:{type:Boolean,default:!1}},data:function(){return{height:"auto"}},methods:{reportWindowSize:function(){var t=this;setTimeout((function(){return t.resize()}),2)},resize:function(){var t,e=this,r=window.innerHeight,i=[".tool-select-block",".tool-category-menu-block",".ctool-bottom"],a=i.filter((function(t){return!e.remove.includes(t)})).concat(this.append),o=(0,n.Z)(a);try{for(o.s();!(t=o.n()).done;){var u=t.value;r-=s(u)}}catch(c){o.e(c)}finally{o.f()}this.reduce>0&&(r-=this.reduce),r>100&&(r-=5),this.ignore||(this.height=r+"px"),this.$emit("resize",r)}},destroyed:function(){window.removeEventListener(o.KU,this.reportWindowSize)},mounted:function(){window.addEventListener(o.KU,this.reportWindowSize),this.resize()}},c=u,l=r(1001),h=(0,l.Z)(c,i,a,!1,null,null,null),p=h.exports},38813:function(t,e,r){r.r(e),r.d(e,{default:function(){return p}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("heightResize",{attrs:{append:[".page-option-block"],ignore:""},on:{resize:t.resize}},[r("Row",{attrs:{gutter:10}},[r("Col",{attrs:{span:"12"}},[r("input-block",{attrs:{top:"5px",type:"default",text:t.$t("sign_sign_data")},on:{"on-default-right-bottom-click":function(){return t.copy("signData")}}},[r("autoHeightTextarea",{attrs:{height:t.height1},model:{value:t.current.signData,callback:function(e){t.$set(t.current,"signData",e)},expression:"current.signData"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("input-block",{attrs:{top:"5px",type:"default",text:t.$t("sign_verify_code")},on:{"on-default-right-bottom-click":function(){return t.copy("verifyCode")}}},[r("autoHeightTextarea",{attrs:{height:t.height1},model:{value:t.current.verifyCode,callback:function(e){t.$set(t.current,"verifyCode",e)},expression:"current.verifyCode"}})],1)],1)],1),r("option-block",{staticClass:"page-option-block",attrs:{center:""}},[r("FormItem",[r("Select",{staticStyle:{width:"200px"},model:{value:t.current.algorithm,callback:function(e){t.$set(t.current,"algorithm",e)},expression:"current.algorithm"}},t._l(t.algorithm,(function(e){return r("Option",{key:e,attrs:{value:e}},[t._v(t._s(e))])})),1)],1),r("FormItem",[r("ButtonGroup",[r("Button",{attrs:{type:"primary"},on:{click:function(e){return t.sign()}}},[t._v(t._s(t.$t("sign_sign")))]),r("Button",{attrs:{type:"primary"},on:{click:function(e){return t.verify()}}},[t._v(t._s(t.$t("sign_verify")))])],1)],1),r("FormItem",[r("Button",{attrs:{type:"default"},on:{click:function(e){return t.openGenerateKeypairBlock()}}},[t._v(t._s(t.$t("sign_generate_keypair")))])],1)],1),r("Row",{attrs:{gutter:10}},[r("Col",{attrs:{span:"12"}},[r("input-block",{attrs:{top:"5px",type:"default",text:t.$t("sign_public_key")},on:{"on-default-right-bottom-click":function(){return t.copy("publicKey")}}},[r("autoHeightTextarea",{attrs:{height:t.height2},model:{value:t.current.publicKey,callback:function(e){t.$set(t.current,"publicKey",e)},expression:"current.publicKey"}})],1)],1),r("Col",{attrs:{span:"12"}},[r("input-block",{attrs:{top:"5px",type:"default",text:t.$t("sign_private_key")},on:{"on-default-right-bottom-click":function(){return t.copy("privateKey")}}},[r("autoHeightTextarea",{attrs:{height:t.height2},model:{value:t.current.privateKey,callback:function(e){t.$set(t.current,"privateKey",e)},expression:"current.privateKey"}})],1)],1)],1)],1),r("Modal",{attrs:{title:t.$t("sign_generate_keypair")},model:{value:t.generateKeypairData.show,callback:function(e){t.$set(t.generateKeypairData,"show",e)},expression:"generateKeypairData.show"}},[r("Form",{attrs:{"label-width":80}},[r("FormItem",{attrs:{label:t.$t("sign_keypair_type")}},[r("Select",{model:{value:t.generateKeypairData.type,callback:function(e){t.$set(t.generateKeypairData,"type",e)},expression:"generateKeypairData.type"}},[r("Option",{attrs:{value:"PKCS8PRV"}},[t._v("PKCS#8")]),r("Option",{attrs:{value:"PKCS1PRV"}},[t._v("PKCS#1")])],1)],1),r("FormItem",{attrs:{label:t.$t("sign_keypair_length")}},[r("Select",{model:{value:t.generateKeypairData.length,callback:function(e){t.$set(t.generateKeypairData,"length",e)},expression:"generateKeypairData.length"}},[r("Option",{attrs:{value:512}},[t._v("512 bit")]),r("Option",{attrs:{value:1024}},[t._v("1024 bit")]),r("Option",{attrs:{value:2048}},[t._v("2048 bit")]),r("Option",{attrs:{value:4096}},[t._v("4096 bit")])],1)],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("Button",{attrs:{type:"text"},on:{click:function(e){t.generateKeypairData.show=!1}}},[t._v(t._s(t.$t("sign_generate_cancel")))]),t.generateKeypairData.loading?r("Button",{attrs:{type:"primary",disabled:""}},[t._v(t._s(t.$t("sign_generate_in")))]):r("Button",{attrs:{type:"primary"},on:{click:function(e){return t.generateKeypair()}}},[t._v(t._s(t.$t("sign_generate")))])],1)],1)],1)},a=[],n=(r(21703),r(41539),r(39714),r(31166)),o=r(2398),s=r(46976),u={components:{autoHeightTextarea:o.Z,heightResize:s.Z},created:function(){this.$initToolData()},methods:{sign:function(){try{if(!this.current.signData||!this.current.privateKey)throw new Error(this.$t("sign_error_sign_content_empty").toString());var t=n.KEYUTIL.getKey(this.current.privateKey),e=new n.KJUR.crypto.Signature({alg:this.current.algorithm});e.init(t),e.updateString(this.current.signData);var r=e.sign();this.current.verifyCode=n.hex2b64(r),this.$clipboardCopy(this.current.verifyCode),this.$saveToolData(this.current)}catch(i){this.$Message.error(this.$t("sign_error",[i.message]).toString())}},verify:function(){try{if(!this.current.verifyCode||!this.current.publicKey)throw new Error(this.$t("sign_error_verify_content_empty").toString());var t=n.KEYUTIL.getKey(this.current.publicKey),e=new n.KJUR.crypto.Signature({alg:this.current.algorithm});e.init(t),e.updateString(this.current.signData);var r=n.b64tohex(this.current.verifyCode),i=e.verify(r);if(!i)throw new Error(this.$t("sign_verify_fail").toString());this.$saveToolData(this.current),this.$Message.info(this.$t("sign_verify_ok").toString())}catch(a){this.$Message.error(this.$t("sign_error",[a.message]).toString())}},generateKeypair:function(){var t=this;this.generateKeypairData.loading=!0,setTimeout((function(){try{var e=n.KEYUTIL.generateKeypair("RSA",t.generateKeypairData.length);t.current.privateKey=n.KEYUTIL.getPEM(e.prvKeyObj,t.generateKeypairData.type),t.current.publicKey=n.KEYUTIL.getPEM(e.pubKeyObj),t.generateKeypairData.show=!1}catch(r){t.$Message.error(t.$t("sign_error",[r.message]).toString())}t.generateKeypairData.loading=!1}),500)},openGenerateKeypairBlock:function(){this.generateKeypairData.show=!0,this.generateKeypairData.loading=!1,this.generateKeypairData.type="PKCS8PRV",this.generateKeypairData.length=2048},resize:function(t){this.height1=Math.min(160,Math.ceil(t/2)),this.height2=t-this.height1},copy:function(t){t in this.current&&this.current[t]&&this.$copy(this.current[t],!0)}},data:function(){return{current:{signData:"",privateKey:"",publicKey:"",verifyCode:"",algorithm:"MD5withRSA"},algorithm:["MD5withRSA","SHA1withRSA","SHA256withRSA","SHA512withRSA"],generateKeypairData:{show:!1,loading:!1,length:2048,type:"PKCS8PRV"},height1:100,height2:100}}},c=u,l=r(1001),h=(0,l.Z)(c,i,a,!1,null,null,null),p=h.exports}}]);