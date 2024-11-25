var v=Object.defineProperty;var m=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var u=(t,o,e)=>o in t?v(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,f=(t,o)=>{for(var e in o||(o={}))F.call(o,e)&&u(t,e,o[e]);if(m)for(var e of m(o))I.call(o,e)&&u(t,e,o[e]);return t};var p=(t,o,e)=>new Promise((l,s)=>{var d=a=>{try{r(e.next(a))}catch(n){s(n)}},i=a=>{try{r(e.throw(a))}catch(n){s(n)}},r=a=>a.done?l(a.value):Promise.resolve(a.value).then(d,i);r((e=e.apply(t,o)).next())});import{l as P,d as S,f as k,e as w,u as g,Y as b,a6 as y,ab as D,ae as N,a9 as T,k as x}from"./tinymce-vendor-3c2b3d6e.js";import{B as R}from"./index-64ecc8b2.js";import"./index-09260ce4.js";import{Z as $}from"./antd-vue-vendor-05bfa84d.js";import{a as C}from"./system-89b6d38a.js";import{B as q,u as L}from"./useForm-df7d93c5.js";import{C as O}from"./index-37448b2d.js";import{_ as V}from"./jeecg-online-vendor-f57c6456.js";const X=[{title:"部门名称",dataIndex:"deptName",width:160,align:"left"},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:80,customRender:({record:t})=>{const e=~~t.status===0,l=e?"green":"red",s=e?"启用":"停用";return P($,{color:l},()=>s)}},{title:"创建时间",dataIndex:"createTime",width:180},{title:"备注",dataIndex:"remark"}],ee=[{field:"deptName",label:"部门名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]},colProps:{span:8}}],j=[{field:"deptName",label:"部门名称",component:"Input",required:!0},{field:"parentDept",label:"上级部门",component:"TreeSelect",componentProps:{replaceFields:{title:"deptName",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"orderNo",label:"排序",component:"InputNumber",required:!0},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]},required:!0},{label:"备注",field:"remark",component:"InputTextArea"}],A=S({name:"DeptModal",components:{BasicModal:R,BasicForm:q},emits:["success","register"],setup(t,{emit:o}){const e=k(!0),[l,{resetFields:s,setFieldsValue:d,updateSchema:i,validate:r}]=L({labelWidth:100,schemas:j,showActionButtonGroup:!1}),[a,{setModalProps:n,closeModal:h}]=O(c=>p(this,null,function*(){s(),n({confirmLoading:!1}),e.value=!!(c!=null&&c.isUpdate),g(e)&&d(f({},c.record));const M=yield C();i({field:"parentDept",componentProps:{treeData:M}})})),_=w(()=>g(e)?"编辑部门":"新增部门");function B(){return p(this,null,function*(){try{const c=yield r();n({confirmLoading:!0}),h(),o("success")}finally{n({confirmLoading:!1})}})}return{registerModal:a,registerForm:l,getTitle:_,handleSubmit:B}}});function G(t,o,e,l,s,d){const i=b("BasicForm"),r=b("BasicModal");return y(),D(r,N(t.$attrs,{onRegister:t.registerModal,title:t.getTitle,onOk:t.handleSubmit}),{default:T(()=>[x(i,{onRegister:t.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}const U=V(A,[["render",G]]),te=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{U as D,te as a,X as c,ee as s};
