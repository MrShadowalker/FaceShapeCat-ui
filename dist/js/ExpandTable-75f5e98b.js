import{d as l,Y as i,a6 as c,ab as d,a9 as r,k as m,ac as f,ad as F}from"./tinymce-vendor-3c2b3d6e.js";import{u as B}from"./index-0f0d0317.js";import{P as C}from"./index-31a6ff64.js";import{getBasicColumns as E}from"./tableData-f398b18f.js";import{d as b}from"./table-bc67762d.js";import _ from"./BasicTable-400bb95b.js";import{Q as g}from"./index-2ad3f236.js";import{_ as T}from"./jeecg-online-vendor-f57c6456.js";import"./index-37448b2d.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./useContentHeight-bfd1eb89.js";import"./useWindowSizeFn-e63bb4b0.js";import"./useContentViewHeight-6be29838.js";import"./usePageContext-b7687fba.js";import"./injectionKey-69710956.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./index-64ecc8b2.js";import"./BasicModal-9d388b71.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";const w=l({components:{BasicTable:_,TableAction:g,PageWrapper:C},setup(){const[o]=B({api:b,title:"可展开表格演示",titleHelpMessage:["已启用expandRowByClick","已启用stopButtonPropagation"],columns:E(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function e(n){}function p(n){}return{registerTable:o,handleDelete:e,handleOpen:p}}});function A(o,e,p,n,D,R){const a=i("TableAction"),u=i("BasicTable"),s=i("PageWrapper");return c(),d(s,{title:"可展开表格",content:"不可与scroll共用。TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick"},{default:r(()=>[m(u,{onRegister:o.registerTable},{expandedRowRender:r(({record:t})=>[f("span",null,"No: "+F(t.no),1)]),action:r(({record:t})=>[m(a,{stopButtonPropagation:"",actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,t)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:o.handleOpen.bind(null,t)}}]},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"])]),_:1})}const Vo=T(w,[["render",A]]);export{Vo as default};