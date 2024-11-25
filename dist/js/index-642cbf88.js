var w=Object.defineProperty,A=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var B=(e,t,a)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))E.call(t,a)&&B(e,a,t[a]);if(D)for(var a of D(t))I.call(t,a)&&B(e,a,t[a]);return e},y=(e,t)=>A(e,C(t));import{d as V,r as L,h as O,e as f,H as S,ac as s,Y as r,a6 as g,ab as x,a9 as u,k as l,E as d,ad as c,a7 as F,F as N,aa as P}from"./tinymce-vendor-3c2b3d6e.js";import{j as h,Z as W}from"./antd-vue-vendor-05bfa84d.js";import{P as $}from"./index-31a6ff64.js";import{a9 as M}from"./index-37448b2d.js";import{b3 as R,_ as U}from"./jeecg-online-vendor-f57c6456.js";import"./useContentHeight-bfd1eb89.js";import"./useWindowSizeFn-e63bb4b0.js";import"./vxe-table-vendor-26792376.js";import"./useContentViewHeight-6be29838.js";import"./usePageContext-b7687fba.js";import"./injectionKey-69710956.js";const j=V({components:{PageWrapper:$,[h.name]:h,InputTextArea:h.TextArea,Tag:W},setup(){const e=L({server:"ws://localhost:3300/test",sendValue:"",recordList:[]}),{status:t,data:a,send:v,close:b,open:T}=M(e.server,{autoReconnect:!1,heartbeat:!0});O(()=>{if(a.value)try{const o=JSON.parse(a.value);e.recordList.push(o)}catch(o){e.recordList.push({res:a.value,id:Math.ceil(Math.random()*1e3),time:new Date().getTime()})}});const n=f(()=>t.value==="OPEN"),p=f(()=>n.value?"success":"red"),i=f(()=>[...e.recordList].reverse());function m(){v(e.sendValue),e.sendValue=""}function _(){n.value?b():T()}return y(k({status:t,formatToDateTime:R},S(e)),{handlerSend:m,getList:i,toggle:_,getIsOpen:n,getTagColor:p})}}),H={class:"flex"},J={class:"w-1/3 bg-white p-4"},Y={class:"flex items-center"},Z=s("span",{class:"text-lg font-medium mr-4"}," 连接状态: ",-1),q=s("hr",{class:"my-4"},null,-1),z={class:"flex"},G=s("p",{class:"text-lg font-medium mt-4"},"设置",-1),K=s("hr",{class:"my-4"},null,-1),Q={class:"w-2/3 bg-white ml-4 p-4"},X=s("span",{class:"text-lg font-medium mr-4"}," 消息记录: ",-1),ee=s("hr",{class:"my-4"},null,-1),te={class:"max-h-80 overflow-auto"},se={class:"flex items-center"},ae=s("span",{class:"mr-2 text-primary font-medium"},"收到消息:",-1);function oe(e,t,a,v,b,T){const n=r("Tag"),p=r("a-input"),i=r("a-button"),m=r("InputTextArea"),_=r("PageWrapper");return g(),x(_,{title:"WebSocket 示例"},{default:u(()=>[s("div",H,[s("div",J,[s("div",Y,[Z,l(n,{color:e.getTagColor},{default:u(()=>[d(c(e.status),1)]),_:1},8,["color"])]),q,s("div",z,[l(p,{value:e.server,"onUpdate:value":t[0]||(t[0]=o=>e.server=o),disabled:""},{addonBefore:u(()=>[d(" 服务地址 ")]),_:1},8,["value"]),l(i,{type:e.getIsOpen?"danger":"primary",onClick:e.toggle},{default:u(()=>[d(c(e.getIsOpen?"关闭连接":"开启连接"),1)]),_:1},8,["type","onClick"])]),G,K,l(m,{placeholder:"需要发送到服务器的内容",disabled:!e.getIsOpen,value:e.sendValue,"onUpdate:value":t[1]||(t[1]=o=>e.sendValue=o),allowClear:""},null,8,["disabled","value"]),l(i,{type:"primary",block:"",class:"mt-4",disabled:!e.getIsOpen,onClick:e.handlerSend},{default:u(()=>[d(" 发送 ")]),_:1},8,["disabled","onClick"])]),s("div",Q,[X,ee,s("div",te,[s("ul",null,[(g(!0),F(N,null,P(e.getList,o=>(g(),F("li",{class:"mt-2",key:o.time},[s("div",se,[ae,s("span",null,c(e.formatToDateTime(o.time)),1)]),s("div",null,c(o.res),1)]))),128))])])])])]),_:1})}const he=U(j,[["render",oe]]);export{he as default};