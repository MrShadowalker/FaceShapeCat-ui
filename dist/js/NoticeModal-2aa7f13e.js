var _=Object.defineProperty;var f=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var h=(e,t,n)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||(t={}))D.call(t,n)&&h(e,n,t[n]);if(f)for(var n of f(t))T.call(t,n)&&h(e,n,t[n]);return e};var g=(e,t,n)=>new Promise((l,m)=>{var p=s=>{try{c(n.next(s))}catch(r){m(r)}},y=s=>{try{c(n.throw(s))}catch(r){m(r)}},c=s=>s.done?l(s.value):Promise.resolve(s.value).then(p,y);c((n=n.apply(e,t)).next())});import{d as x,f as R,e as v,u as d,a6 as S,ab as P,a9 as B,k as L,ae as M}from"./tinymce-vendor-3c2b3d6e.js";import{B as U}from"./index-64ecc8b2.js";import"./index-09260ce4.js";import{render as a}from"./renderUtils-59564de6.js";import{ap as i}from"./jeecg-online-vendor-f57c6456.js";import{u as k,B as F}from"./useForm-df7d93c5.js";import{C as N}from"./index-37448b2d.js";const $=[{title:"标题",width:150,dataIndex:"titile"},{title:"消息类型",dataIndex:"msgCategory",width:100,customRender:({text:e})=>a.renderDict(e,"msg_category")},{title:"发布人",width:100,dataIndex:"sender"},{title:"优先级",dataIndex:"priority",width:70,customRender:({text:e})=>{const t=e=="L"?"blue":e=="M"?"yellow":"red";return a.renderTag(a.renderDict(e,"priority"),t)}},{title:"通告对象",dataIndex:"msgType",width:100,customRender:({text:e})=>a.renderDict(e,"msg_type")},{title:"发布状态",dataIndex:"sendStatus",width:70,customRender:({text:e})=>{const t=e=="0"?"red":e=="1"?"green":"gray";return a.renderTag(a.renderDict(e,"send_status"),t)}},{title:"发布时间",width:100,dataIndex:"sendTime"},{title:"撤销时间",width:100,dataIndex:"cancelTime"}],Q=[{field:"titile",label:"标题",component:"JInput",colProps:{span:8}}],q=[{field:"id",label:"id",component:"Input",show:!1},{field:"msgCategory",label:"消息类型",required:!0,component:"JDictSelectTag",defaultValue:"1",componentProps:{type:"radio",dictCode:"msg_category",placeholder:"请选择类型"}},{field:"titile",label:"标题",component:"Input",required:!0,componentProps:{placeholder:"请输入标题"}},{field:"msgAbstract",label:"摘要",component:"InputTextArea",required:!0},{field:"msgType",label:"接收用户",defaultValue:"ALL",component:"JDictSelectTag",required:!0,componentProps:{type:"radio",dictCode:"msg_type",placeholder:"请选择发布范围"}},{field:"userIds",label:"指定用户",component:"JSelectUser",required:!0,componentProps:{rowKey:"id",labelKey:"username"},ifShow:({values:e})=>e.msgType=="USER"},{field:"priority",label:"优先级",defaultValue:"H",component:"JDictSelectTag",componentProps:{dictCode:"priority",type:"radio",placeholder:"请选择优先级"}},{field:"msgContent",label:"内容",component:"Input",render:a.renderTinymce}];const W="/sys/annountCement/exportXls",Y="/sys/annountCement/importExcel",Z=e=>i.get({url:"/sys/annountCement/list",params:e}),E=(e,t)=>{let n=t?"/sys/annountCement/edit":"/sys/annountCement/add";return i.post({url:n,params:e})},A=(e,t)=>i.delete({url:"/sys/annountCement/delete",data:e},{joinParamsToUrl:!0}).then(()=>{t()}),ee=e=>i.delete({url:"/sys/annountCement/deleteBatch",data:e},{joinParamsToUrl:!0}),te=e=>i.get({url:"/sys/annountCement/doReleaseData",params:e}),ne=e=>i.get({url:"/sys/annountCement/doReovkeData",params:e}),J=x({__name:"NoticeModal",emits:["register","success"],setup(e,{emit:t}){const n=t,l=R(!0),[m,{resetFields:p,setFieldsValue:y,validate:c}]=k({schemas:q,showActionButtonGroup:!1}),[s,{setModalProps:r,closeModal:I}]=N(o=>g(this,null,function*(){yield p(),r({confirmLoading:!1}),l.value=!!(o!=null&&o.isUpdate),d(l)&&(o.record.userIds&&(o.record.userIds=o.record.userIds.substring(0,o.record.userIds.length-1)),yield y(C({},o.record)))})),b=v(()=>d(l)?"编辑":"新增");function w(o){return g(this,null,function*(){try{let u=yield c();r({confirmLoading:!0}),u.msgType==="ALL"?u.userIds="":u.userIds+=",",yield E(u,l.value),I(),n("success")}finally{r({confirmLoading:!1})}})}return(o,u)=>(S(),P(d(U),M(o.$attrs,{onRegister:d(s),title:b.value,onOk:w,width:"900px",destroyOnClose:""}),{default:B(()=>[L(d(F),{onRegister:d(m)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}}),oe=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));export{oe as N,J as _,W as a,Y as b,$ as c,A as d,ee as e,te as f,Z as g,ne as h,Q as s};
