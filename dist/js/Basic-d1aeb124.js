import{d as f,f as i,Y as c,a6 as B,a7 as b,k as e,a9 as r,E as m,ad as l}from"./tinymce-vendor-3c2b3d6e.js";import"./index-0f0d0317.js";import{getBasicColumns as E,getBasicData as k}from"./tableData-f398b18f.js";import v from"./BasicTable-400bb95b.js";import{_ as A}from"./jeecg-online-vendor-f57c6456.js";import"./index-2ad3f236.js";import"./antd-vue-vendor-05bfa84d.js";import"./index-64ecc8b2.js";import"./BasicModal-9d388b71.js";import"./index-37448b2d.js";import"./vxe-table-vendor-26792376.js";import"./useWindowSizeFn-e63bb4b0.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./injectionKey-69710956.js";const h=f({components:{BasicTable:v},setup(){const o=i(!1),a=i(!1),p=i(!0),n=i(!0),u=i(!1);function d(){o.value=!o.value}function t(){p.value=!p.value}function s(){a.value=!0,setTimeout(()=>{a.value=!1,u.value={pageSize:20}},3e3)}function g(){n.value=!n.value}function C(F){}return{columns:E(),data:k(),canResize:o,loading:a,striped:p,border:n,toggleStriped:t,toggleCanResize:d,toggleLoading:s,toggleBorder:g,pagination:u,handleColumnChange:C}}}),y={class:"p-4"};function z(o,a,p,n,u,d){const t=c("a-button"),s=c("BasicTable");return B(),b("div",y,[e(s,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:o.columns,dataSource:o.data,canResize:o.canResize,loading:o.loading,striped:o.striped,bordered:o.border,showTableSetting:"",pagination:o.pagination,onColumnsChange:o.handleColumnChange},{toolbar:r(()=>[e(t,{type:"primary",onClick:o.toggleCanResize},{default:r(()=>[m(l(o.canResize?"取消自适应":"自适应高度"),1)]),_:1},8,["onClick"]),e(t,{type:"primary",onClick:o.toggleBorder},{default:r(()=>[m(l(o.border?"隐藏边框":"显示边框"),1)]),_:1},8,["onClick"]),e(t,{type:"primary",onClick:o.toggleLoading},{default:r(()=>[m(" 开启loading ")]),_:1},8,["onClick"]),e(t,{type:"primary",onClick:o.toggleStriped},{default:r(()=>[m(l(o.striped?"隐藏斑马纹":"显示斑马纹"),1)]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination","onColumnsChange"])])}const $o=A(h,[["render",z]]);export{$o as default};