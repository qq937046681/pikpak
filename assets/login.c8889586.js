var b=Object.defineProperty;var v=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var C=(o,e,s)=>e in o?b(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s,E=(o,e)=>{for(var s in e||(e={}))I.call(e,s)&&C(o,s,e[s]);if(v)for(var s of v(e))P.call(e,s)&&C(o,s,e[s]);return o};import{d as j,r as B,m as y,l as M,u as N,p as S,a as K,b as U,s as H,E as A,e as u,f as a,ap as O,w as t,ae as _,an as r,S as m,aR as L,aU as X,R as Z,I as k,J as w,aV as V,aW as z,y as g}from"./vendor.6d03c7d3.js";import{_ as Y}from"./phone-pc2.dbf6d71e.js";import{i as x}from"./index.f3cf2764.js";const W={class:"login-page"},T=A("div",{class:"down"},[A("img",{src:Y})],-1),G={class:"login"},J=A("div",{class:"logo-box"},[A("img",{src:"data:image/png;base64,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",class:"logo-box__icon",alt:""}),A("div",{class:"logo-box__text"},"PikPak")],-1),q={class:"login-box"},$=g("\u8BB0\u4F4F\u767B\u9646"),ee=g("\u767B\u9646"),ue=A("a",{target:"_blank",href:"https://i.mypikpak.com/v1/file/center/account/v1/password/?type=forget_password&locale=zh-cn",class:"forget-password"},"\u5FD8\u8BB0\u5BC6\u7801",-1),ae=g("\u6CE8\u518C"),te={class:"login-other"},se=g(" \u624B\u673A\u767B\u9646 "),Ae=g(" APP\u5185\u8C37\u6B4C\u767B\u5F55\u7684\u8D26\u53F7\u8BF7\u5148\u901A\u8FC7\u5FD8\u8BB0\u5BC6\u7801\u8BBE\u7F6E\u5BC6\u7801\u540E\u767B\u5F55 "),ie=j({setup(o){const e=B({username:"",password:""}),s=y(),c=B(!1),D=M(),h=N(),p=()=>{if(!e.value.password||!e.value.username)return!1;c.value=!0,x.post("https://user.mypikpak.com/v1/auth/signin",E({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},e.value)).then(l=>{l.data&&l.data.access_token&&(window.localStorage.setItem("pikpakLogin",JSON.stringify(l.data)),d.value?window.localStorage.setItem("pikpakLoginData",JSON.stringify(e.value)):window.localStorage.removeItem("pikpakLoginData"),h.success("\u767B\u5F55\u6210\u529F"),D.push((s.query.redirect||"/")+""))}).catch(()=>{c.value=!1})},d=B(!1),Q=S(),F=()=>{d.value&&Q.warning({title:"\u8B66\u544A",content:"\u8BB0\u4F4F\u767B\u9646\u662F\u6307\u6D4F\u89C8\u5668\u672C\u5730\u660E\u6587\u4FDD\u5B58\u7528\u6237\u540D\u5BC6\u7801\u7528\u4E8E\u4E0B\u6B21\u81EA\u52A8\u767B\u9646\uFF0C\u8BF7\u52FF\u5728\u975E\u4FE1\u4EFB\u8BBE\u5907\u9009\u62E9",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{},onNegativeClick:()=>{d.value=!1}})},R=()=>{x.get("https://api-drive.mypikpak.com/package/v1/apk/url/225815").then(l=>{window.open(l.data.apk_url)})};return(l,n)=>{const f=K("router-link");return U(),H("div",W,[T,A("div",G,[J,A("div",q,[u(a(O),{"label-align":"left","label-placement":"left","label-width":"0",class:"login-form"},{default:t(()=>[u(a(r),{label:""},{default:t(()=>[u(a(m),{value:e.value.username,"onUpdate:value":n[0]||(n[0]=i=>e.value.username=i),placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},null,8,["value"])]),_:1}),u(a(r),{label:""},{default:t(()=>[u(a(m),{value:e.value.password,"onUpdate:value":n[1]||(n[1]=i=>e.value.password=i),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",onKeyup:L(p,["enter"]),type:"password","show-password-on":"mousedown"},null,8,["value","onKeyup"])]),_:1}),u(a(r),{label:""},{default:t(()=>[u(a(X),{checked:d.value,"onUpdate:checked":[n[2]||(n[2]=i=>d.value=i),F]},{default:t(()=>[$]),_:1},8,["checked"])]),_:1}),u(a(r),null,{default:t(()=>[u(a(Z),{type:"primary",class:"block",loading:c.value,onClick:p},{default:t(()=>[ee]),_:1},8,["loading"])]),_:1}),u(a(r),{label:""},{default:t(()=>[ue,u(f,{to:"/register",class:"register"},{default:t(()=>[ae]),_:1}),A("a",{href:"javascript:;",onClick:R},"\u53BB\u4E0B\u8F7D\u6CE8\u518C\u5F975\u5929VIP")]),_:1})]),_:1}),A("div",te,[u(a(_),{inline:""},{default:t(()=>[u(a(k),null,{trigger:t(()=>[u(f,{to:"sms"},{default:t(()=>[u(a(w),{color:"#306eff",size:32},{default:t(()=>[u(a(V))]),_:1})]),_:1})]),default:t(()=>[se]),_:1}),u(a(k),null,{trigger:t(()=>[u(a(w),{color:"#306eff",size:32},{default:t(()=>[u(a(z))]),_:1})]),default:t(()=>[Ae]),_:1})]),_:1})])])])])}}});export{ie as default};
