var E=Object.defineProperty;var S=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var _=(t,e,o)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,f=(t,e)=>{for(var o in e||(e={}))g.call(e,o)&&_(t,o,e[o]);if(S)for(var o of S(e))k.call(e,o)&&_(t,o,e[o]);return t};import{d as x,f as R,r as V,H as b,a4 as z,a5 as G,Y as p,a6 as m,ab as u,a9 as v,ac as h,k as i,q as a,A as s,Z as F}from"./tinymce-vendor-3c2b3d6e.js";import w from"./Step1-e7f2e86a.js";import y from"./Step2-5501ca8f.js";import D from"./Step3-a2fa9493.js";import{P as I}from"./index-31a6ff64.js";import{a0 as n}from"./antd-vue-vendor-05bfa84d.js";import{_ as $}from"./jeecg-online-vendor-f57c6456.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-37448b2d.js";import"./vxe-table-vendor-26792376.js";import"./index-2ad3f236.js";import"./index-64ecc8b2.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./data-7fc795c8.js";import"./useContentHeight-bfd1eb89.js";import"./useContentViewHeight-6be29838.js";import"./usePageContext-b7687fba.js";import"./injectionKey-69710956.js";const W=x({name:"FormStepPage",components:{Step1:w,Step2:y,Step3:D,PageWrapper:I,[n.name]:n,[n.Step.name]:n.Step},setup(){const t=R(0),e=V({initSetp2:!1,initSetp3:!1});function o(r){t.value++,e.initSetp2=!0}function c(){t.value--}function l(r){t.value++,e.initSetp3=!0}function d(){t.value=0,e.initSetp2=!1,e.initSetp3=!1}return f({current:t,handleStep1Next:o,handleStep2Next:l,handleRedo:d,handleStepPrev:c},b(e))}});const q={class:"step-form-form"},H={class:"mt-5"};function Y(t,e,o,c,l,d){const r=p("a-step"),B=p("a-steps"),C=p("Step1"),N=p("Step2"),P=p("Step3"),A=p("PageWrapper");return m(),u(A,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:v(()=>[h("div",q,[i(B,{current:t.current},{default:v(()=>[i(r,{title:"填写转账信息"}),i(r,{title:"确认转账信息"}),i(r,{title:"完成"})]),_:1},8,["current"])]),h("div",H,[a(i(C,{onNext:t.handleStep1Next},null,8,["onNext"]),[[s,t.current===0]]),t.initSetp2?a((m(),u(N,{key:0,onPrev:t.handleStepPrev,onNext:t.handleStep2Next},null,8,["onPrev","onNext"])),[[s,t.current===1]]):F("",!0),t.initSetp3?a((m(),u(P,{key:1,onRedo:t.handleRedo},null,8,["onRedo"])),[[s,t.current===2]]):F("",!0)])]),_:1})}const Xt=$(W,[["render",Y],["__scopeId","data-v-74ebc618"]]);export{Xt as default};
