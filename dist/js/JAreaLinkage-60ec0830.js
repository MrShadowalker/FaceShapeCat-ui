import{d as m,f as h,e as d,h as g,Y as p,a6 as A,ab as v,ae as w}from"./tinymce-vendor-3c2b3d6e.js";import{ae as C}from"./antd-vue-vendor-05bfa84d.js";import{r as _,a as i,p as y,b}from"./areaDataUtil-bfcb9e4a.js";import{useRuleFormItem as D}from"./useFormItem-613b6d5d.js";import{p as t}from"./index-37448b2d.js";import{ar as k,_ as $}from"./jeecg-online-vendor-f57c6456.js";import"./data-9be677e2.js";import"./vxe-table-vendor-26792376.js";const O=m({name:"JAreaLinkage",components:{Cascader:C},inheritAttrs:!1,props:{value:t.oneOfType([t.object,t.array,t.string]),showArea:t.bool.def(!0),showAll:t.bool.def(!1)},emits:["options-change","change"],setup(e,{emit:l,refs:u}){const s=h([]),r=k(),[n]=D(e,"value","change",s),o=d(()=>{if(e.showArea&&e.showAll)return _;if(e.showArea&&!e.showAll)return i;if(!e.showArea&&!e.showAll)return y;if(!e.showArea&&e.showAll)return b});g(()=>{e.value&&f()});function f(){let a=e.value?e.value:[];a&&typeof a=="string"&&a!="null"&&a!="undefined"&&(n.value=a.split(","))}function c(a,...B){n.value=a}return{state:n,attrs:r,regionData:i,getOptions:o,handleChange:c}}});function P(e,l,u,s,r,n){const o=p("Cascader");return A(),v(o,w(e.attrs,{value:e.state,options:e.getOptions,onChange:e.handleChange}),null,16,["value","options","onChange"])}const V=$(O,[["render",P]]);export{V as default};
