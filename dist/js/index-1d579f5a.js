import{d as f,n as h,Y as o,a6 as b,a7 as T,k as r,a9 as p,E as g}from"./tinymce-vendor-3c2b3d6e.js";import{u as C}from"./index-0f0d0317.js";import{c as _}from"./system-89b6d38a.js";import{a as w}from"./index-563223fc.js";import{M as S,c as D,s as k}from"./MenuDrawer-a90bdaa9.js";import B from"./BasicTable-400bb95b.js";import{Q as F}from"./index-2ad3f236.js";import{_ as M}from"./jeecg-online-vendor-f57c6456.js";import"./index-37448b2d.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./index-64ecc8b2.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./injectionKey-69710956.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";const E=f({name:"MenuManagement",components:{BasicTable:B,MenuDrawer:S,TableAction:F},setup(){const[e,{openDrawer:i}]=w(),[c,{reload:l,expandAll:u}]=C({title:"菜单列表",api:_,columns:D,formConfig:{labelWidth:120,schemas:k},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function d(){i(!0,{isUpdate:!1})}function n(t){i(!0,{record:t,isUpdate:!0})}function a(t){}function m(){l()}function s(){h(u)}return{registerTable:c,registerDrawer:e,handleCreate:d,handleEdit:n,handleDelete:a,handleSuccess:m,onFetchSuccess:s}}});function R(e,i,c,l,u,d){const n=o("a-button"),a=o("TableAction"),m=o("BasicTable"),s=o("MenuDrawer");return b(),T("div",null,[r(m,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{tableTitle:p(()=>[r(n,{type:"primary",onClick:e.handleCreate},{default:p(()=>[g(" 新增菜单 ")]),_:1},8,["onClick"])]),action:p(({record:t})=>[r(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])]),_:1},8,["onRegister","onFetchSuccess"]),r(s,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}const Ne=M(E,[["render",R]]);export{Ne as default};