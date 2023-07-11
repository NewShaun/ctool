import{u as w,i as E}from"./action-2ea1a1de.js";import{d as S,y as C,z as D,D as N,r as o,A as R,c as U,w as i,f as d,v as u,B as z,k as K,j as r,C as O,E as b,T as p}from"./tool-febbd1cf.js";import{j as _}from"./jsrsasign-18d6e120.js";import"./modulepreload-polyfill-3cfb730f.js";const $=S({__name:"Decrypt",async setup(B){let l,s;const g=[{value:"RSA",label:"PKCS1"},{value:"RSAOAEP",label:"PKCS1_OAEP"}],e=w(([l,s]=C(()=>E({input:O("base64"),algName:"RSA",key:"",output:b("text")})),l=await l,s(),l)),c=D(()=>{if(e.current.input.text.isEmpty()||e.current.key.trim()==="")return p.empty();if(e.current.input.text.isError())return e.current.input.text;try{return p.fromString(_.KJUR.crypto.Cipher.decrypt(e.current.input.text.toHexString(),_.KEYUTIL.getKey(e.current.key.trim()),e.current.algName))}catch(a){return p.fromError($error(a))}});return N(()=>c.value,a=>{a.isEmpty()||e.save()},{immediate:!0,deep:!0}),(a,t)=>{const h=o("Textarea"),x=o("TextInput"),y=o("TextOutput"),f=o("Select"),v=o("Display"),V=o("Align"),T=o("HeightResize"),A=R("row");return d(),U(T,{ignore:"",reduce:5},{default:i(({small:m,large:k})=>[u(V,{direction:"vertical"},{default:i(()=>[z((d(),K("div",null,[u(h,{height:m,modelValue:r(e).current.key,"onUpdate:modelValue":t[0]||(t[0]=n=>r(e).current.key=n),placeholder:a.$t("rsa_private")},null,8,["height","modelValue","placeholder"]),u(x,{modelValue:r(e).current.input,"onUpdate:modelValue":t[1]||(t[1]=n=>r(e).current.input=n),placeholder:a.$t("rsa_decrypt_input"),allow:["base64","hex"],height:m},null,8,["modelValue","placeholder","height"])])),[[A,"1-1"]]),u(v,{position:"top-right",toggle:""},{extra:i(()=>[u(f,{size:"small",modelValue:r(e).current.algName,"onUpdate:modelValue":t[3]||(t[3]=n=>r(e).current.algName=n),options:g},null,8,["modelValue"])]),default:i(()=>[u(y,{modelValue:r(e).current.output,"onUpdate:modelValue":t[2]||(t[2]=n=>r(e).current.output=n),content:c.value,height:k},null,8,["modelValue","content","height"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{$ as default};