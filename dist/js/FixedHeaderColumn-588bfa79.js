import{d as s,Y as p,a6 as d,a7 as c,k as n,a9 as u}from"./tinymce-vendor-3c2b3d6e.js";import"./index-0f0d0317.js";import{d as f}from"./table-bc67762d.js";import{useListPage as b}from"./useListPage-66651993.js";import h from"./BasicTable-400bb95b.js";import{Q as _}from"./index-2ad3f236.js";import{_ as x}from"./jeecg-online-vendor-f57c6456.js";import"./index-37448b2d.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./index-64ecc8b2.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./injectionKey-69710956.js";const T=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}],w=s({components:{BasicTable:h,TableAction:_},setup(){const{tableContext:t}=b({tableProps:{title:"固定头和列示例",api:f,columns:T,canResize:!1,scroll:{y:200},actionColumn:{width:160,title:"Action",dataIndex:"action"},useSearchForm:!1}}),[o]=t;function i(r){}function e(r){}return{registerTable:o,handleDelete:i,handleOpen:e}}}),C={class:"p-4"};function F(t,o,i,e,r,I){const a=p("TableAction"),l=p("BasicTable");return d(),c("div",C,[n(l,{onRegister:t.registerTable},{action:u(({record:m})=>[n(a,{actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,m)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:t.handleOpen.bind(null,m)}}]},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"])])}const $t=x(w,[["render",F]]);export{$t as default};