import{d as s,l as u,Y as r,a6 as l,ab as c,a9 as p,k as e}from"./tinymce-vendor-3c2b3d6e.js";import"./index-09260ce4.js";import{ac as d}from"./index-37448b2d.js";import{C as f,_}from"./jeecg-online-vendor-f57c6456.js";import{M as C}from"./index-2d7d6454.js";import{P as h}from"./index-31a6ff64.js";import{B as b}from"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./antd-vue-vendor-05bfa84d.js";import"./useFormItem-613b6d5d.js";import"./index-2ad3f236.js";import"./index-64ecc8b2.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./vxe-table-vendor-26792376.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./useContentHeight-bfd1eb89.js";import"./useContentViewHeight-6be29838.js";import"./usePageContext-b7687fba.js";import"./injectionKey-69710956.js";import"./formUtils-09c7de86.js";const g=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:o,field:t})=>u(C,{value:o[t],onChange:i=>{o[t]=i}})}],k=s({components:{BasicForm:b,CollapseContainer:d,PageWrapper:h},setup(){const{createMessage:o}=f();return{schemas:g,handleSubmit:t=>{o.success("click search,values:"+JSON.stringify(t))}}}});function B(o,t,i,w,F,M){const m=r("BasicForm"),a=r("CollapseContainer"),n=r("PageWrapper");return l(),c(n,{title:"MarkDown组件嵌入Form示例"},{default:p(()=>[e(a,{title:"MarkDown表单"},{default:p(()=>[e(m,{labelWidth:100,schemas:o.schemas,actionColOptions:{span:24},onSubmit:o.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}const vo=_(k,[["render",B]]);export{vo as default};
