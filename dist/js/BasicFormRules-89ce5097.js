import{d as p,a6 as e,ab as s,u as o}from"./tinymce-vendor-3c2b3d6e.js";import"./index-09260ce4.js";import{u as n,B as a}from"./useForm-df7d93c5.js";import"./index-37448b2d.js";import"./antd-vue-vendor-05bfa84d.js";import"./jeecg-online-vendor-f57c6456.js";import"./vxe-table-vendor-26792376.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-2ad3f236.js";import"./index-64ecc8b2.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";const ct=p({__name:"BasicFormRules",setup(l){const r=[{field:"visitor",label:"来访人员",component:"Input",required:!0,rulesMessageJoinLabel:!1},{field:"accessed",label:"来访日期",component:"DatePicker",required:({values:t})=>!t.accessed},{field:"phone",label:"来访人手机号",component:"Input",rules:[{required:!1,message:"请输入正确的手机号",pattern:/^1[3456789]\d{9}$/}]}],[i]=n({schemas:r,showResetButton:!1,labelWidth:"150px",submitButtonOptions:{text:"提交",preIcon:""},actionColOptions:{span:17}});function m(t){}return(t,u)=>(e(),s(o(a),{onRegister:o(i),style:{"margin-top":"20px"},onSubmit:m},null,8,["onRegister"]))}});export{ct as default};
