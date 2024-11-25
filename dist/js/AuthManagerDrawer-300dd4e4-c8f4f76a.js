import{d as C,f as m,e as b,Y as e,a6 as h,ab as D,a9 as a,k as r,a7 as F,F as I,Z as v}from"./tinymce-vendor-3c2b3d6e.js";import{B as w,u as A}from"./index-563223fc.js";import B from"./AuthFieldConfig-6b21915c-56be0e66.js";import k from"./AuthButtonConfig-244ec09f-01577c85.js";import K from"./AuthDataConfig-83891eea-a0428c0e.js";import{bs as R}from"./jeecg-online-vendor-f57c6456.js";import"./index-0f0d0317.js";import"./auth.api-d3a6c4b3-afe9bb9e.js";import"./auth.data-8be5c9e3-b21bdf87.js";import"./antd-vue-vendor-05bfa84d.js";import"./index-64ecc8b2.js";import"./index-09260ce4.js";import"./index-37448b2d.js";import"./vxe-table-vendor-26792376.js";import"./BasicTable-400bb95b.js";import"./injectionKey-69710956.js";import"./index-2ad3f236.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./useForm-df7d93c5.js";import"./formUtils-09c7de86.js";const T=C({name:"AuthManagerDrawer",components:{BasicDrawer:w,AuthFieldConfig:B,AuthButtonConfig:k,AuthDataConfig:K},props:{tableType:{type:Number,default:1}},emits:["register"],setup(t){const o=m(""),p=m(""),f=m([]),d=m("field"),c=b(()=>t.tableType==1||t.tableType==2),[n,{closeDrawer:i}]=A(l=>{o.value=l.cgformId,p.value=o.value+"?"+new Date().getTime(),d.value="field"});function s(){i()}return{activeKey:d,cgformId:o,headId:p,authFields:f,hasDataAuth:c,onClose:s,registerDrawer:n}}});function _(t,o,p,f,d,c){const n=e("AuthFieldConfig"),i=e("a-tab-pane"),s=e("AuthButtonConfig"),l=e("AuthDataConfig"),g=e("a-tabs"),y=e("BasicDrawer");return h(),D(y,{onRegister:t.registerDrawer,title:"权限管理",width:800,onClose:t.onClose},{default:a(()=>[r(g,{activeKey:t.activeKey,"onUpdate:activeKey":o[1]||(o[1]=u=>t.activeKey=u)},{default:a(()=>[r(i,{tab:"字段权限",key:"field",forceRender:""},{default:a(()=>[r(n,{headId:t.headId,authFields:t.authFields,"onUpdate:authFields":o[0]||(o[0]=u=>t.authFields=u)},null,8,["headId","authFields"])]),_:1}),t.hasDataAuth?(h(),F(I,{key:0},[r(i,{tab:"按钮权限",key:"button",forceRender:""},{default:a(()=>[r(s,{headId:t.headId},null,8,["headId"])]),_:1}),r(i,{tab:"数据权限",key:"data",forceRender:""},{default:a(()=>[r(l,{cgformId:t.cgformId,authFields:t.authFields},null,8,["cgformId","authFields"])]),_:1})],64)):v("",!0)]),_:1},8,["activeKey"])]),_:1},8,["onRegister","onClose"])}const Zt=R(T,[["render",_]]);export{Zt as default};
