import{d as s,Y as p,a6 as d,a7 as c,k as a,a9 as f}from"./tinymce-vendor-3c2b3d6e.js";import"./index-0f0d0317.js";import{d as h}from"./table-bc67762d.js";import{useListPage as b}from"./useListPage-66651993.js";import F from"./BasicTable-400bb95b.js";import{Q as w}from"./index-2ad3f236.js";import{_ as C}from"./jeecg-online-vendor-f57c6456.js";import"./index-37448b2d.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./index-64ecc8b2.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./injectionKey-69710956.js";const _=[{title:"编号",dataIndex:"no",width:100},{title:"姓名",dataIndex:"name",auth:"demo:field:show"},{title:"状态",dataIndex:"status"},{title:"地址",dataIndex:"address",auth:"super",ifShow:t=>!0},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}],A=s({components:{BasicTable:F,TableAction:w},setup(){const{tableContext:t}=b({tableProps:{title:"权限列",api:h,columns:_,bordered:!0,useSearchForm:!1,actionColumn:{width:250,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}}),[e]=t;function n(i){}function r(i){}function m(i){}return{registerTable:e,handleEdit:n,handleDelete:r,handleOpen:m}}}),T={class:"p-4"};function I(t,e,n,r,m,i){const l=p("TableAction"),u=p("BasicTable");return d(),c("div",T,[a(u,{onRegister:t.registerTable},{action:f(({record:o})=>[a(l,{actions:[{label:"编辑",onClick:t.handleEdit.bind(null,o),auth:"demo:btn:show"},{label:"删除",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,o),auth:"super"}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:t.handleOpen.bind(null,o)},ifShow:g=>o.status!=="enable"},{label:"禁用",popConfirm:{title:"是否禁用？",confirm:t.handleOpen.bind(null,o)},ifShow:()=>o.status==="enable"},{label:"同时控制",popConfirm:{title:"是否动态显示？",confirm:t.handleOpen.bind(null,o)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"])])}const Et=C(A,[["render",I]]);export{Et as default};
