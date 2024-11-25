import{d as B,s as R,f as C,n as w,Y as a,a6 as y,ab as k,a9 as r,k as u,E as i,ag as $}from"./tinymce-vendor-3c2b3d6e.js";import{A as T,a8 as V}from"./antd-vue-vendor-05bfa84d.js";import"./index-64ecc8b2.js";import D from"./Modal1-c7af64fa.js";import v from"./Modal2-5444efcd.js";import b from"./Modal3-c0209232.js";import _ from"./Modal4-22d1d4a2.js";import{P}from"./index-31a6ff64.js";import{E as d}from"./index-37448b2d.js";import{_ as W}from"./jeecg-online-vendor-f57c6456.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./vxe-table-vendor-26792376.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-2ad3f236.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./useContentHeight-bfd1eb89.js";import"./useContentViewHeight-6be29838.js";import"./usePageContext-b7687fba.js";import"./injectionKey-69710956.js";const I=B({components:{Alert:T,Modal1:D,Modal2:v,Modal3:b,Modal4:_,PageWrapper:P,ASpace:V},setup(){const o=R(null),[e,{openModal:F}]=d(),[f,{openModal:g}]=d(),[M,{openModal:n}]=d(),[t,{openModal:s}]=d(),m=C(!1),l=C(null);function A(){s(!0,{data:"content",info:"Info"})}function c(){F(!0)}function E(p){switch(p){case 1:o.value=D;break;case 2:o.value=v;break;case 3:o.value=b;break;default:o.value=_;break}w(()=>{l.value={data:Math.random(),info:"Info222"},m.value=!0})}return{register1:e,openModal1:F,register2:f,openModal2:g,register3:M,openModal3:n,register4:t,openModal4:s,modalVisible:m,userData:l,openTargetModal:E,send:A,currentModal:o,openModalLoading:c}}});function L(o,e,F,f,g,M){const n=a("Alert"),t=a("a-button"),s=a("a-space"),m=a("Modal1"),l=a("Modal2"),A=a("Modal3"),c=a("Modal4"),E=a("PageWrapper");return y(),k(E,{title:"modal组件使用示例"},{default:r(()=>[u(n,{message:`使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable
    参数进行控制是否可以拖动/全屏，并演示了在Modal内动态加载内容并自动调整高度`,"show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModalLoading},{default:r(()=>[i(" 打开弹窗,加载动态数据并自动调整高度(默认可以拖动/全屏) ")]),_:1},8,["onClick"]),u(n,{message:"内外同时同时显示隐藏","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModal2},{default:r(()=>[i(" 打开弹窗")]),_:1},8,["onClick"]),u(n,{message:"自适应高度","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.openModal3},{default:r(()=>[i(" 打开弹窗")]),_:1},8,["onClick"]),u(n,{message:"内外数据交互","show-icon":""}),u(t,{type:"primary",class:"my-4",onClick:o.send},{default:r(()=>[i(" 打开弹窗并传递数据")]),_:1},8,["onClick"]),u(n,{message:"使用动态组件的方式在页面内使用多个弹窗","show-icon":""}),u(s,null,{default:r(()=>[u(t,{type:"primary",class:"my-4",onClick:e[0]||(e[0]=p=>o.openTargetModal(1))},{default:r(()=>[i(" 打开弹窗1")]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[1]||(e[1]=p=>o.openTargetModal(2))},{default:r(()=>[i(" 打开弹窗2")]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[2]||(e[2]=p=>o.openTargetModal(3))},{default:r(()=>[i(" 打开弹窗3")]),_:1}),u(t,{type:"primary",class:"my-4",onClick:e[3]||(e[3]=p=>o.openTargetModal(4))},{default:r(()=>[i(" 打开弹窗4")]),_:1})]),_:1}),(y(),k($(o.currentModal),{visible:o.modalVisible,"onUpdate:visible":e[4]||(e[4]=p=>o.modalVisible=p),userData:o.userData},null,40,["visible","userData"])),u(m,{onRegister:o.register1,minHeight:100},null,8,["onRegister"]),u(l,{onRegister:o.register2},null,8,["onRegister"]),u(A,{onRegister:o.register3},null,8,["onRegister"]),u(c,{onRegister:o.register4},null,8,["onRegister"])]),_:1})}const Jo=W(I,[["render",L]]);export{Jo as default};