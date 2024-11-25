var k=Object.defineProperty,v=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var h=(t,o,e)=>o in t?k(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,u=(t,o)=>{for(var e in o||(o={}))S.call(o,e)&&h(t,e,o[e]);if(g)for(var e of g(o))A.call(o,e)&&h(t,e,o[e]);return t},b=(t,o)=>v(t,B(o));var f=(t,o,e)=>new Promise((n,s)=>{var d=a=>{try{r(e.next(a))}catch(c){s(c)}},i=a=>{try{r(e.throw(a))}catch(c){s(c)}},r=a=>a.done?n(a.value):Promise.resolve(a.value).then(d,i);r((e=e.apply(t,o)).next())});import{d as y,f as w,e as x,u as p,Y as I,a6 as C,ab as q,ae as T,a9 as $,k as L}from"./tinymce-vendor-3c2b3d6e.js";import{B as O}from"./index-64ecc8b2.js";import"./index-09260ce4.js";import{i as R,g as N,a as U}from"./system-89b6d38a.js";import{B as V,u as j}from"./useForm-df7d93c5.js";import{C as D}from"./index-37448b2d.js";import{_ as z}from"./jeecg-online-vendor-f57c6456.js";const oe=[{title:"用户名",dataIndex:"account",width:120},{title:"昵称",dataIndex:"nickname",width:120},{title:"邮箱",dataIndex:"email",width:120},{title:"创建时间",dataIndex:"createTime",width:180},{title:"角色",dataIndex:"role",width:200},{title:"备注",dataIndex:"remark"}],ae=[{field:"account",label:"用户名",component:"Input",colProps:{span:8}},{field:"nickname",label:"昵称",component:"Input",colProps:{span:8}}],E=[{field:"account",label:"用户名",component:"Input",helpMessage:["本字段演示异步验证","不能输入带有admin的用户名"],rules:[{required:!0,message:"请输入用户名"},{validator(t,o){return new Promise((e,n)=>{R(o).then(()=>e()).catch(s=>{n(s.message||"验证失败")})})}}]},{field:"pwd",label:"密码",component:"InputPassword",required:!0,ifShow:!1},{label:"角色",field:"role",component:"ApiSelect",componentProps:{api:N,labelField:"roleName",valueField:"roleValue"},required:!0},{field:"dept",label:"所属部门",component:"TreeSelect",componentProps:{fieldNames:{label:"deptName",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"nickname",label:"昵称",component:"Input",required:!0},{label:"邮箱",field:"email",component:"Input",required:!0},{label:"备注",field:"remark",component:"InputTextArea"}],G=y({name:"AccountModal",components:{BasicModal:O,BasicForm:V},emits:["success","register"],setup(t,{emit:o}){const e=w(!0),n=w(""),[s,{setFieldsValue:d,updateSchema:i,resetFields:r,validate:a}]=j({labelWidth:100,baseColProps:{span:24},schemas:E,showActionButtonGroup:!1,actionColOptions:{span:23}}),[c,{setModalProps:m,closeModal:_}]=D(l=>f(this,null,function*(){r(),m({confirmLoading:!1}),e.value=!!(l!=null&&l.isUpdate),p(e)&&(n.value=l.record.id,d(u({},l.record)));const P=yield U();i([{field:"pwd",show:!p(e)},{field:"dept",componentProps:{treeData:P}}])})),M=x(()=>p(e)?"编辑账号":"新增账号");function F(){return f(this,null,function*(){try{const l=yield a();m({confirmLoading:!0}),_(),o("success",{isUpdate:p(e),values:b(u({},l),{id:n.value})})}finally{m({confirmLoading:!1})}})}return{registerModal:c,registerForm:s,getTitle:M,handleSubmit:F}}});function W(t,o,e,n,s,d){const i=I("BasicForm"),r=I("BasicModal");return C(),q(r,T(t.$attrs,{onRegister:t.registerModal,title:t.getTitle,onOk:t.handleSubmit}),{default:$(()=>[L(i,{onRegister:t.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}const Y=z(G,[["render",W]]),ne=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));export{Y as A,ne as a,oe as c,ae as s};
