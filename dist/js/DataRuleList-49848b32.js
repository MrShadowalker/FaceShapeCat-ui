var c=(f,i,r)=>new Promise((l,a)=>{var d=t=>{try{m(r.next(t))}catch(s){a(s)}},u=t=>{try{m(r.throw(t))}catch(s){a(s)}},m=t=>t.done?l(t.value):Promise.resolve(t.value).then(d,u);m((r=r.apply(f,i)).next())});import{d as R,f as w,Y as I,a6 as v,a7 as S,k as p,a9 as n,u as e,E as D,ae as T,F as k}from"./tinymce-vendor-3c2b3d6e.js";import{u as E,B as y}from"./index-563223fc.js";import{u as B}from"./index-0f0d0317.js";import"./index-64ecc8b2.js";import F from"./DataRuleModal-760648ab.js";import{d as P,a as A,b as M,c as z}from"./menu.data-75a1cb95.js";import{useDrawerAdaptiveWidth as L}from"./useAdaptiveWidth-a0286c92.js";import{E as N}from"./index-37448b2d.js";import U from"./BasicTable-400bb95b.js";import{Q as V}from"./index-2ad3f236.js";import"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./renderUtils-59564de6.js";import"./injectionKey-69710956.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";const Jt=R({__name:"DataRuleList",setup(f){const i=w(""),{adaptiveWidth:r}=L(),[l,{openModal:a}]=N(),[d]=E(o=>c(this,null,function*(){i.value=o.id,s({searchInfo:{permissionId:e(i)}}),t()})),u={xs:24,sm:24,md:24,lg:12,xl:8,xxl:8},[m,{reload:t,setProps:s}]=B({api:P,columns:A,size:"small",formConfig:{baseColProps:u,labelAlign:"right",labelCol:{offset:1,xs:24,sm:24,md:24,lg:8,xl:8,xxl:8},wrapperCol:{},schemas:M,autoSubmitOnEnter:!0},striped:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,showTableSetting:!1,canResize:!1,immediate:!1,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function g(){a(!0,{isUpdate:!1})}function h(o){a(!0,{record:o,isUpdate:!0})}function b(o){return c(this,null,function*(){yield z({id:o.id},t)})}function C(o){return[{label:"编辑",onClick:h.bind(null,o)},{label:"删除",popConfirm:{title:"是否确认删除",confirm:b.bind(null,o)}}]}return(o,W)=>{const _=I("a-button");return v(),S(k,null,[p(e(y),T(o.$attrs,{onRegister:e(d),title:"数据权限规则",width:e(r)}),{default:n(()=>[p(e(U),{onRegister:e(m)},{tableTitle:n(()=>[p(_,{type:"primary",onClick:g},{default:n(()=>[D(" 新增")]),_:1})]),action:n(({record:x})=>[p(e(V),{actions:C(x)},null,8,["actions"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister","width"]),p(F,{onRegister:e(l),onSuccess:e(t),permissionId:i.value},null,8,["onRegister","onSuccess","permissionId"])],64)}}});export{Jt as default};
