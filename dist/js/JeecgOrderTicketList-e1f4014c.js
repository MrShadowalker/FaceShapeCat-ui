var c=(h,m,a)=>new Promise((d,p)=>{var u=e=>{try{s(a.next(e))}catch(i){p(i)}},w=e=>{try{s(a.throw(e))}catch(i){p(i)}},s=e=>e.done?d(e.value):Promise.resolve(e.value).then(u,w);s((a=a.apply(h,m)).next())});import{d as N,c as V,e as D,w as O,Y as l,a6 as C,a7 as P,k as o,a9 as r,E as g,u as n,ab as U,Z as $}from"./tinymce-vendor-3c2b3d6e.js";import"./index-0f0d0317.js";import j from"./JeecgOrderTicketModal-83509309.js";import{useListPage as A}from"./useListPage-66651993.js";import"./index-64ecc8b2.js";import{t as H,f as J,g as Q,h as Y}from"./erplist.api-d873d2e5.js";import{C as Z,am as y}from"./jeecg-online-vendor-f57c6456.js";import{E as q}from"./index-37448b2d.js";import{Q as G}from"./index-2ad3f236.js";import W from"./BasicTable-400bb95b.js";import"./antd-vue-vendor-05bfa84d.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./vxe-table-vendor-26792376.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./injectionKey-69710956.js";import"./renderUtils-59564de6.js";const me=N({__name:"JeecgOrderTicketList",setup(h){const m=V("orderId",D(()=>"")),a=Z(),[d,{openModal:p}]=q(),u={},{prefixCls:w,tableContext:s}=A({tableProps:{api:T,tableSetting:{cacheKey:"ticket"},columns:H,canResize:!1,useSearchForm:!1,actionColumn:{width:180},pagination:{current:1,pageSize:5,pageSizeOptions:["5","10","20"]}}}),[e,{reload:i,setSelectedRowKeys:S},{rowSelection:I,selectedRowKeys:f}]=s;O(m,()=>{u.orderId=n(m),i(),S([])});function T(t){return c(this,null,function*(){let{orderId:_}=t;return _==null||y(_)?[]:yield J(t)})}function R(){if(y(n(m))){a.createMessage.warning("请选择一个订单信息");return}p(!0,{isUpdate:!1,showFooter:!0})}function v(t){return c(this,null,function*(){p(!0,{record:t,isUpdate:!0,showFooter:!0})})}function x(t){return c(this,null,function*(){yield Q({id:t.id},i)})}function E(){return c(this,null,function*(){yield Y({ids:f.value},()=>{f.value=[],i()})})}function M(){i()}function B(t){return[{label:"编辑",onClick:v.bind(null,t)},{label:"删除",popConfirm:{title:"是否确认删除",confirm:x.bind(null,t)}}]}return(t,_)=>{const k=l("a-button"),b=l("Icon"),K=l("a-menu-item"),L=l("a-menu"),z=l("a-dropdown");return C(),P("div",null,[o(n(W),{onRegister:n(e),rowSelection:n(I),searchInfo:u},{tableTitle:r(()=>[o(k,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:R},{default:r(()=>[g(" 新增")]),_:1}),n(f).length>0?(C(),U(z,{key:0},{overlay:r(()=>[o(L,null,{default:r(()=>[o(K,{key:"1",onClick:E},{default:r(()=>[o(b,{icon:"ant-design:delete-outlined"}),g(" 删除 ")]),_:1})]),_:1})]),default:r(()=>[o(k,null,{default:r(()=>[g("批量操作 "),o(b,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):$("",!0)]),action:r(({record:F})=>[o(n(G),{actions:B(F)},null,8,["actions"])]),_:1},8,["onRegister","rowSelection"]),o(j,{onRegister:n(d),onSuccess:M},null,8,["onRegister"])])}}});export{me as default};
