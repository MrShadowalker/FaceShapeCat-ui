import{d as p,Y as r,a6 as u,ab as c,a9 as e,k as n,E as l}from"./tinymce-vendor-3c2b3d6e.js";import{B as d}from"./index-64ecc8b2.js";import{C as m}from"./index-37448b2d.js";import{_}from"./jeecg-online-vendor-f57c6456.js";import"./BasicModal-9d388b71.js";import"./antd-vue-vendor-05bfa84d.js";import"./useWindowSizeFn-e63bb4b0.js";import"./vxe-table-vendor-26792376.js";const f=p({components:{BasicModal:d},setup(){const[o,{closeModal:t,setModalProps:a}]=m();return{register:o,closeModal:t,setModalProps:()=>{a({title:"Modal New Title"})}}}});function M(o,t,a,C,E,k){const s=r("a-button"),i=r("BasicModal");return u(),c(i,{onRegister:o.register,title:"Modal Title",helpMessage:["提示1","提示2"],okButtonProps:{disabled:!0}},{default:e(()=>[n(s,{type:"primary",onClick:o.closeModal,class:"mr-2"},{default:e(()=>[l(" 从内部关闭弹窗 ")]),_:1},8,["onClick"]),n(s,{type:"primary",onClick:o.setModalProps},{default:e(()=>[l(" 从内部修改title ")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}const D=_(f,[["render",M]]);export{D as default};