import{d as g,Y as t,a6 as n,ab as l,aj as a,a9 as s,k as r,a7 as $,F as v,aa as I,ac as c,ad as _}from"./tinymce-vendor-3c2b3d6e.js";import{N as i,L as j,a6 as p,a7 as m}from"./antd-vue-vendor-05bfa84d.js";import{projectList as k}from"./data-dc8b56b7.js";import{_ as h}from"./jeecg-online-vendor-f57c6456.js";import"./vxe-table-vendor-26792376.js";const w="/assets/demo-f132a062.png",x=g({components:{List:i,ListItem:i.Item,Card:j,[p.name]:p,[m.name]:m},setup(){return{prefixCls:"account-center-project",list:k,demoImg:w}}});const y=["src"];function B(e,N,b,F,P,V){const d=t("Card"),f=t("ListItem"),u=t("a-col"),C=t("a-row"),L=t("List");return n(),l(L,{class:a(e.prefixCls)},{default:s(()=>[r(C,{gutter:16},{default:s(()=>[(n(!0),$(v,null,I(e.list,o=>(n(),l(u,{key:o.title,span:6},{default:s(()=>[r(f,null,{default:s(()=>[r(d,{hoverable:!0,class:a(`${e.prefixCls}__card`)},{default:s(()=>[c("img",{src:e.demoImg},null,8,y),c("div",{class:a(`${e.prefixCls}__card-title`)},_(o.title),3),c("div",{class:a(`${e.prefixCls}__card-content`)},_(o.content),3)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["class"])}const Y=h(x,[["render",B]]);export{Y as default};