import{p as i}from"./index-37448b2d.js";import{a6 as r,a7 as s,ac as l,ad as p}from"./tinymce-vendor-3c2b3d6e.js";import{bs as c}from"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";const d={name:"LinkTableListPiece",props:{text:i.string.def(""),id:i.string.def("")},emits:["tab"],setup(n,{emit:a}){function t(e){e==null||e.stopPropagation(),e==null||e.preventDefault(),a("tab",n.id)}return{handleClick:t}}};function m(n,a,t,e,f,u){return r(),s("div",{class:"link-table-piece",onClick:a[0]||(a[0]=(...o)=>e.handleClick&&e.handleClick(...o))},[l("span",null,p(t.text),1)])}const h=c(d,[["render",m],["__scopeId","data-v-ade036b6"]]);export{h as default};