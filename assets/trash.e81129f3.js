import{d as x,r as o,o as T,a as S,b as _,s as v,E as u,e as t,f as a,ad as z,w as s,O as B,I as N,D as b,af as H,ah as M,a8 as A,J as w,ax as L,Q as P,y as f,V as i,H as V,a9 as I,B as C,aa as U,ae as $}from"./vendor.6d03c7d3.js";import{i as h,b as j}from"./index.f3cf2764.js";const q={class:"list-page"},O={class:"header"},R={class:"title n-ellipsis"},G=f("\u56DE\u6536\u7AD9"),J={key:0,class:"loading"},K=f("\u52A0\u8F7D\u4E2D "),Q={key:0,class:"outer-wrapper static show"},W={class:"toolbar-wrapper"},X=f(" \u8FD8\u539F\u6240\u9009 "),Y=f(" \u5220\u9664\u6240\u9009 "),ae=x({setup(Z){const d=o(),n=o([]),F=o([{title:"\u5220\u9664\u65F6\u95F4",key:"modified_time",sorter:"default",render:e=>i(V,{time:new Date(String(e.created_time)||""),format:"MM-dd HH:MM"}),className:"modified_time",width:200},{title:"\u5927\u5C0F",key:"size",sorter:"default",render:e=>Number(e.size)>0?j(Number(e.size)):"",className:"size",width:160}]),k=o([{type:"selection"},{title:"\u540D\u79F0",key:"name",sorter:"default",render:e=>i("div",{class:"file-info"},[i("img",{src:e.thumbnail_link||e.icon_link}),i(I,{class:"title"},{default:()=>String(e.name)}),i("span",{class:"action"},"1")])},{title:"\u64CD\u4F5C",key:"action",width:90,align:"right",render:e=>i($,{},{default:()=>[i(C,{type:"primary",onClick:()=>{y(String(e.id))}},{default:()=>"\u8FD8\u539F"}),i(U,{placement:"right",onPositiveClick:()=>{g(String(e.id))}},{trigger:()=>i(C,{type:"primary"},{default:()=>"\u5220\u9664"}),default:()=>"\u786E\u5B9A\u5220\u9664\u6587\u4EF6\u5417\uFF1F"})]})}]),c=o(!1),p=o(),m=()=>{c.value=!0,h.get("https://api-drive.mypikpak.com/drive/v1/files",{params:{parent_id:"*",thumbnail_size:"SIZE_LARGE",with_audit:!0,page_token:p.value||void 0,filters:{phase:{eq:"PHASE_TYPE_COMPLETE"},trashed:{eq:!0}}}}).then(e=>{const{data:l}=e;p.value||(d.value=[]),d.value=d.value.concat(l.files),p.value=l.next_page_token}).finally(()=>{c.value=!1})},g=e=>{h.post("https://api-drive.mypikpak.com/drive/v1/files:batchDelete",{ids:typeof e=="string"?[e]:e}).then(()=>{window.$message.success("\u5220\u9664\u6210\u529F"),m()})},y=e=>{h.post("https://api-drive.mypikpak.com/drive/v1/files:batchUntrash",{ids:typeof e=="string"?[e]:e}).then(()=>{m()})},D=e=>{e.target.offsetHeight-e.target.scrollTop<30&&p.value&&!c.value&&m()};return T(()=>{document.body.clientWidth>968&&k.value.splice(2,0,...F.value),m()}),(e,l)=>{const E=S("router-link");return _(),v("div",q,[u("div",O,[u("div",R,[t(a(z),{separator:">"},{default:s(()=>[t(a(H),null,{default:s(()=>[t(E,{to:""},{default:s(()=>[G]),_:1})]),_:1})]),_:1})])]),t(a(B),{style:{"max-height":"calc(100vh - 190px)"},onScroll:D},{default:s(()=>[t(a(M),{"checked-row-keys":n.value,"onUpdate:checked-row-keys":l[0]||(l[0]=r=>n.value=r),"row-key":r=>r.id,data:d.value,size:"small",columns:k.value,bordered:!1},null,8,["checked-row-keys","row-key","data","columns"]),c.value?(_(),v("div",J,[t(a(A),{size:"small"}),K])):b("",!0)]),_:1}),n.value.length?(_(),v("div",Q,[u("div",W,[u("div",{class:"toolbar-item",onClick:l[1]||(l[1]=r=>y(n.value))},[t(a(N),null,{trigger:s(()=>[t(a(w),null,{default:s(()=>[t(a(L))]),_:1})]),default:s(()=>[X]),_:1})]),u("div",{class:"toolbar-item",onClick:l[2]||(l[2]=r=>g(n.value))},[t(a(N),null,{trigger:s(()=>[t(a(w),null,{default:s(()=>[t(a(P))]),_:1})]),default:s(()=>[Y]),_:1})])])])):b("",!0)])}}});export{ae as default};
