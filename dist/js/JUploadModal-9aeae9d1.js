var g=(t,c,s)=>new Promise((p,u)=>{var n=e=>{try{r(s.next(e))}catch(i){u(i)}},o=e=>{try{r(s.throw(e))}catch(i){u(i)}},r=e=>e.done?p(e.value):Promise.resolve(e.value).then(n,o);r((s=s.apply(t,c)).next())});import{d as v,f as k,r as M,e as _,a6 as w,ab as B,a9 as C,k as R,ae as h,u as f,n as x}from"./tinymce-vendor-3c2b3d6e.js";import{B as O}from"./index-64ecc8b2.js";import{C as U}from"./jeecg-online-vendor-f57c6456.js";import{U as l,_ as b}from"./JUpload-037dc399.js";import{p as m,C as V}from"./index-37448b2d.js";import"./BasicModal-9d388b71.js";import"./antd-vue-vendor-05bfa84d.js";import"./useWindowSizeFn-e63bb4b0.js";import"./vxe-table-vendor-26792376.js";import"./index-76418551.js";import"./UploadItemActions-dbfa39da.js";const F=v({__name:"JUploadModal",props:{value:m.oneOfType([m.string,m.array]),width:m.number.def(520)},emits:["change","update:value","register"],setup(t,{emit:c}){const{createMessage:s}=U(),p=c,u=t,n=k(),o=M({props:{}}),r=_(()=>{var a;return((a=o.props)==null?void 0:a.fileType)===l.image?"图片上传":"文件上传"}),[e,{closeModal:i}]=V(a=>g(this,null,function*(){var d;o.props=f(a)||{},[l.image,"img","picture"].includes((d=o.props)==null?void 0:d.fileType)?o.props.fileType=l.image:o.props.fileType=l.file,x(()=>n.value.addActionsListener())}));function y(){i()}function T(a){p("change",a),p("update:value",a)}return(a,d)=>(w(),B(f(O),h({onRegister:f(e),title:r.value,width:t.width,onOk:y},a.$attrs),{default:C(()=>[R(b,h({ref_key:"uploadRef",ref:n,value:t.value},o.props,{onChange:T}),null,16,["value"])]),_:1},16,["onRegister","title","width"]))}});export{F as default};
