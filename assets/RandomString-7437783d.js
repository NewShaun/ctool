import{u as R,i as H}from"./action-2a948760.js";import{b as T,S as D}from"./index-47eb2ebe.js";import{a4 as F,b0 as G,k as Q,Q as k,as as W,aY as O,W as Y,a2 as o,b1 as d,x as a,I as x,aG as s,ay as U,U as j,bu as b}from"./history-d5509b50.js";import"./___vite-browser-external_commonjs-proxy-d2112d3c.js";import"./_commonjsHelpers-87174ba5.js";import"./index-da14ef80.js";const le=F({__name:"RandomString",async setup(J){let f,B;const r="small",_="0123456789",V="abcdefghijklmnopqrstuvwxyz",h="ABCDEFGHIJKLMNOPQRSTUVWXYZ",I="`~!@#$%^&*()-_=+[{]}|;:',<.>/?",t=R(([f,B]=G(()=>H({amount:10,length:32,delimiter:",\\n",serialize:!1,serialize_config:T("json"),is_add_quote:!1,base:`${_}${V}${h}`,result:[]})),f=await f,B(),f));let u=Q({base:t.current.base,show:!1});const C=()=>{let l=`${t.current.base}`,e=[];for(let i=0,c=t.current.amount;i<c;i++){let v=l.split(""),$="";for(let m=0,w=t.current.length;m<w&&!(v.length<1);m++){let S=Math.floor(Math.random()*v.length);$+=v[S]}e.push($)}t.current.result=e},q=k(()=>D.formObject(t.current.serialize&&t.current.result.length>0?{lists:t.current.result}:{})),E=k(()=>t.current.result.map(l=>t.current.is_add_quote?`"${l}"`:l).join(t.current.delimiter.replace(/\\n/g,`
`)));W(()=>{t.current.result.length<1&&C()}),O(()=>({amount:t.current.amount,length:t.current.length,base:t.current.base}),()=>{C()}),O(()=>t.current,l=>{l.result.length<1||t.save()},{deep:!0,immediate:!0});const g=l=>{if(l==="reset"){u.value.base=`${_}${V}${h}`;return}let e=`${u.value.base}`.split("");const i=({digital:`${_}`,lowercase:`${V}`,uppercase:`${h}`,symbol:`${I}`}[l]||"").split("");i.length>0&&(console.log(b.intersection(e,i)),b.intersection(e,i).length>0?e=e.filter(c=>!i.includes(c)):e=[...e,...i]),u.value.base=[...new Set(e)].join("")},z=k(()=>{let l=`${u.value.base}`.split("");return{digital:b.intersection(l,_.split("")).length>0,lowercase:b.intersection(l,V.split("")).length>0,uppercase:b.intersection(l,h.split("")).length>0,symbol:b.intersection(l,I.split("")).length>0}});return(l,e)=>{const i=s("Editor"),c=s("SerializeOutput"),v=s("HeightResize"),$=s("Icon"),m=s("Button"),w=s("Input"),S=s("InputNumber"),p=s("Bool"),y=s("Align"),M=s("Card"),A=s("Textarea"),N=s("Modal");return U(),Y(x,null,[o(y,{direction:"vertical"},{default:d(()=>[o(v,{reduce:5,append:[".ctool-page-option"]},{default:d(({height:n})=>[a(t).current.serialize?(U(),j(c,{key:1,modelValue:a(t).current.serialize_config,"onUpdate:modelValue":e[0]||(e[0]=L=>a(t).current.serialize_config=L),allow:["json","xml","yaml","toml","properties","php_array"],height:n,content:q.value},null,8,["modelValue","height","content"])):(U(),j(i,{key:0,disableLineNumbers:"","model-value":E.value,height:`${n}px`,placeholder:l.$t("main_ui_output")},null,8,["model-value","height","placeholder"]))]),_:1},8,["append"]),o(M,{class:"ctool-page-option"},{default:d(()=>[o(y,{horizontal:"center"},{default:d(()=>[o(w,{size:r,modelValue:a(t).current.base,"onUpdate:modelValue":e[2]||(e[2]=n=>a(t).current.base=n),width:200},{append:d(()=>[o(m,{onClick:e[1]||(e[1]=n=>{u.value.base=a(t).current.base,u.value.show=!0})},{default:d(()=>[o($,{hover:"",name:"setting",tooltip:l.$t("main_ui_setting"),size:12},null,8,["tooltip"])]),_:1})]),_:1},8,["modelValue"]),o(S,{size:r,modelValue:a(t).current.length,"onUpdate:modelValue":e[3]||(e[3]=n=>a(t).current.length=n),width:100,label:l.$t("randomString_length")},null,8,["modelValue","label"]),o(S,{size:r,modelValue:a(t).current.amount,"onUpdate:modelValue":e[4]||(e[4]=n=>a(t).current.amount=n),width:100,label:l.$t("randomString_amount")},null,8,["modelValue","label"]),o(p,{size:r,border:"",modelValue:a(t).current.is_add_quote,"onUpdate:modelValue":e[5]||(e[5]=n=>a(t).current.is_add_quote=n),label:l.$t("randomString_add_quote"),disabled:a(t).current.serialize},null,8,["modelValue","label","disabled"]),o(w,{size:r,modelValue:a(t).current.delimiter,"onUpdate:modelValue":e[6]||(e[6]=n=>a(t).current.delimiter=n),width:120,label:l.$t("randomString_delimiter"),disabled:a(t).current.serialize},null,8,["modelValue","label","disabled"]),o(p,{size:r,border:"",modelValue:a(t).current.serialize,"onUpdate:modelValue":e[7]||(e[7]=n=>a(t).current.serialize=n),label:l.$t("uuid_serialize")},null,8,["modelValue","label"]),o(m,{onClick:C,size:r},{default:d(()=>[o($,{name:"refresh",size:12})]),_:1})]),_:1})]),_:1})]),_:1}),o(N,{title:`${l.$t("main_ui_setting")} ${l.$t("randomString_chars")}`,modelValue:u.value.show,"onUpdate:modelValue":e[14]||(e[14]=n=>u.value.show=n),"footer-type":"long",onOk:e[15]||(e[15]=n=>{a(t).current.base=u.value.base,u.value.show=!1})},{default:d(()=>[o(y,{direction:"vertical"},{default:d(()=>[o(A,{modelValue:u.value.base,"onUpdate:modelValue":e[8]||(e[8]=n=>u.value.base=n),height:300},null,8,["modelValue"]),o(y,{horizontal:"center"},{default:d(()=>[o(p,{size:r,border:"",label:l.$t("randomString_digital"),"model-value":z.value.digital,onChange:e[9]||(e[9]=n=>g("digital"))},null,8,["label","model-value"]),o(p,{size:r,border:"",label:l.$t("randomString_lowercase"),"model-value":z.value.lowercase,onChange:e[10]||(e[10]=n=>g("lowercase"))},null,8,["label","model-value"]),o(p,{size:r,border:"",label:l.$t("randomString_uppercase"),"model-value":z.value.uppercase,onChange:e[11]||(e[11]=n=>g("uppercase"))},null,8,["label","model-value"]),o(p,{size:r,border:"",label:l.$t("randomString_symbol"),"model-value":z.value.symbol,onChange:e[12]||(e[12]=n=>g("symbol"))},null,8,["label","model-value"]),o(m,{size:r,text:l.$t("main_ui_reset"),onClick:e[13]||(e[13]=n=>g("reset"))},null,8,["text"])]),_:1})]),_:1})]),_:1},8,["title","modelValue"])],64)}}});export{le as default};