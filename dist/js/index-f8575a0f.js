var b=Object.defineProperty,x=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var s=(e,t,o)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,l=(e,t)=>{for(var o in t||(t={}))R.call(t,o)&&s(e,o,t[o]);if(n)for(var o of n(t))S.call(t,o)&&s(e,o,t[o]);return e},d=(e,t)=>x(e,C(t));import{d as u,f as D,Y as M,a6 as k,a7 as y,k as a,a9 as c,E as T,u as i}from"./tinymce-vendor-3c2b3d6e.js";import"./index-0f0d0317.js";import{D as L,g as P}from"./DataLogCompareModal-f53fa188.js";import{C as v}from"./jeecg-online-vendor-f57c6456.js";import"./index-64ecc8b2.js";import{useListPage as B}from"./useListPage-66651993.js";import{E}from"./index-37448b2d.js";import V from"./BasicTable-400bb95b.js";import"./index-2ad3f236.js";import"./antd-vue-vendor-05bfa84d.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./vxe-table-vendor-26792376.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./props-ea47501e.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./injectionKey-69710956.js";const K=[{title:"表名",dataIndex:"dataTable",width:150,align:"left"},{title:"数据ID",dataIndex:"dataId",width:350},{title:"版本号",dataIndex:"dataVersion",width:100},{title:"数据内容",dataIndex:"dataContent"},{title:"创建人",dataIndex:"createBy",sorter:!0,width:200}],N=[{field:"dataTable",label:"表名",component:"Input",colProps:{span:8}},{field:"dataId",label:"数据ID",component:"Input",colProps:{span:8}}],j=u({name:"monitor-datalog"}),Ot=u(d(l({},j),{setup(e){const[t,{openModal:o}]=E(),{createMessage:p}=v(),F=D([]),{prefixCls:U,tableContext:f}=B({designScope:"datalog-template",tableProps:{title:"数据日志列表",api:P,columns:K,formConfig:{labelWidth:120,schemas:N},actionColumn:!1}}),[g,{reload:I},{rowSelection:_,selectedRowKeys:W,selectedRows:m}]=f;function h(){let r=m.value;if(!r||r.length!=2)return p.warning("请选择两条数据!"),!1;if(r[0].dataId!=r[1].dataId)return p.warning("请选择相同的数据库表和数据ID进行比较!"),!1;o(!0,{selectedRows:m,isUpdate:!0})}return(r,Y)=>{const w=M("a-button");return k(),y("div",null,[a(i(V),{onRegister:i(g),rowSelection:i(_)},{tableTitle:c(()=>[a(w,{preIcon:"ant-design:plus-outlined",type:"primary",onClick:h,style:{"margin-right":"5px"}},{default:c(()=>[T("数据比较")]),_:1})]),_:1},8,["onRegister","rowSelection"]),a(L,{onRegister:i(t),onSuccess:i(I)},null,8,["onRegister","onSuccess"])])}}}));export{Ot as default};
