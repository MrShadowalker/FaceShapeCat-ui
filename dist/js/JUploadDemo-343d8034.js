import{d as y,f as C,Y as u,a6 as x,a7 as U,k as t,a9 as e,E as m,u as p,F as h}from"./tinymce-vendor-3c2b3d6e.js";import"./index-09260ce4.js";import{_ as B}from"./index-8e09cdad.js";import"./index-64ecc8b2.js";import{E as F}from"./index-37448b2d.js";import{u as k,B as w}from"./useForm-df7d93c5.js";import{U as l}from"./JUpload-70acb676.js";import"./componentMap-e2e33057.js";import"./antd-vue-vendor-05bfa84d.js";import"./jeecg-online-vendor-f57c6456.js";import"./vxe-table-vendor-26792376.js";import"./useFormItem-613b6d5d.js";import"./index-2ad3f236.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./index-76418551.js";const Vo=y({__name:"JUploadDemo",setup(J){const n=C(""),d=[{field:"uploadFile",component:"JUpload",helpMessage:"无限制上传",label:"上传文件"},{field:"uploadFileMax",component:"JUpload",helpMessage:"最多上传3个文件",label:"上传文件（3）",componentProps:{maxCount:3}},{field:"uploadImage",component:"JUpload",label:"上传图片",helpMessage:"无限制上传",componentProps:{fileType:l.image}},{field:"uploadImageMax",component:"JUpload",label:"上传图片（1）",helpMessage:"最多上传1张图片",componentProps:{fileType:l.image,maxCount:1}}],[f,{openModal:c}]=F(),[g,{setProps:b,validate:R,setFieldsValue:T}]=k({labelWidth:120,schemas:d,actionColOptions:{span:24},compact:!0,showResetButton:!1,showSubmitButton:!1,showAdvancedButton:!1,disabled:!1});function _(r){}function s(r){b({disabled:!!r})}function v(){c(!0,{maxCount:9,fileType:l.image})}return(r,o)=>{const i=u("a-button"),M=u("a-button-group");return x(),U(h,null,[t(M,{class:"j-table-operator"},{default:e(()=>[t(i,{type:"primary",onClick:o[0]||(o[0]=a=>s(0))},{default:e(()=>[m("启用")]),_:1}),t(i,{type:"primary",onClick:o[1]||(o[1]=a=>s(1))},{default:e(()=>[m("禁用")]),_:1}),t(i,{type:"primary",onClick:v},{default:e(()=>[m("文件弹窗")]),_:1})]),_:1}),t(p(w),{onRegister:p(g),onSubmit:_},null,8,["onRegister"]),t(p(B),{value:n.value,"onUpdate:value":o[2]||(o[2]=a=>n.value=a),onRegister:p(f)},null,8,["value","onRegister"])],64)}}});export{Vo as default};