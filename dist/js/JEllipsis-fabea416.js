import{d as p,e as r,Y as c,a6 as i,ab as u,a9 as o,ac as m,ad as n,E as d}from"./tinymce-vendor-3c2b3d6e.js";import{p as t}from"./index-37448b2d.js";import"./antd-vue-vendor-05bfa84d.js";import"./jeecg-online-vendor-f57c6456.js";import"./vxe-table-vendor-26792376.js";const T=p({__name:"JEllipsis",props:{value:t.oneOfType([t.string,t.number,t.array]),length:t.number.def(25)},setup(a){const e=a,s=r(()=>e.value&&e.value.length>e.length?e.value.slice(0,e.length)+"...":e.value);return(f,v)=>{const l=c("a-tooltip");return i(),u(l,{placement:"topLeft"},{title:o(()=>[m("span",null,n(a.value),1)]),default:o(()=>[d(" "+n(s.value),1)]),_:1})}}});export{T as default};