import{d,Y as p,a6 as u,ab as _,a9 as a,k as e,E as s,u as t,ad as r,ac as f,ae as I}from"./tinymce-vendor-3c2b3d6e.js";import{N as n,L}from"./antd-vue-vendor-05bfa84d.js";import{d as y}from"./data-bc8b4dcb.js";import{l as h}from"./index-37448b2d.js";import"./jeecg-online-vendor-f57c6456.js";import"./vxe-table-vendor-26792376.js";const k=["innerHTML"],T=d({__name:"DynamicInfo",setup(x){const i=n.Item,l=n.Item.Meta;return(c,C)=>{const m=p("a-button");return u(),_(t(L),I({title:"最新动态"},c.$attrs),{extra:a(()=>[e(m,{type:"link",size:"small"},{default:a(()=>[s("更多")]),_:1})]),default:a(()=>[e(t(n),{"item-layout":"horizontal","data-source":t(y)},{renderItem:a(({item:o})=>[e(t(i),null,{default:a(()=>[e(t(l),null,{description:a(()=>[s(r(o.date),1)]),title:a(()=>[s(r(o.name)+" ",1),f("span",{innerHTML:o.desc},null,8,k)]),avatar:a(()=>[e(t(h),{icon:o.avatar,size:30},null,8,["icon"])]),_:2},1024)]),_:2},1024)]),_:1},8,["data-source"])]),_:1},16)}}});export{T as default};