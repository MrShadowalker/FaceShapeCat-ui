import{d as m,Y as l,a6 as d,ab as C,a9 as t,k as a,E as c}from"./tinymce-vendor-3c2b3d6e.js";import{useContextMenu as f}from"./useContextMenu-3e9e42e0.js";import{ac as _}from"./index-37448b2d.js";import{C as b,_ as x}from"./jeecg-online-vendor-f57c6456.js";import{P as h}from"./index-31a6ff64.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./useContentHeight-bfd1eb89.js";import"./useWindowSizeFn-e63bb4b0.js";import"./useContentViewHeight-6be29838.js";import"./usePageContext-b7687fba.js";import"./injectionKey-69710956.js";const w=m({components:{CollapseContainer:_,PageWrapper:h},setup(){const[e]=f(),{createMessage:n}=b();function r(o){e({event:o,items:[{label:"New",icon:"bi:plus",handler:()=>{n.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{n.success("click open")}}]})}function s(o){e({event:o,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{n.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}return{handleContext:r,handleMultipleContext:s}}});function k(e,n,r,s,o,N){const i=l("a-button"),p=l("CollapseContainer"),u=l("PageWrapper");return d(),C(u,{title:"右键菜单示例"},{default:t(()=>[a(p,{title:"Simple"},{default:t(()=>[a(i,{type:"primary",onContextmenu:e.handleContext},{default:t(()=>[c(" Right Click on me ")]),_:1},8,["onContextmenu"])]),_:1}),a(p,{title:"Multiple",class:"mt-4"},{default:t(()=>[a(i,{type:"primary",onContextmenu:e.handleMultipleContext},{default:t(()=>[c(" Right Click on me ")]),_:1},8,["onContextmenu"])]),_:1})]),_:1})}const A=x(w,[["render",k]]);export{A as default};