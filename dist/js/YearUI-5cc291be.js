import{d as m,ac as s,Y as i,a6 as f,a7 as E,aj as g,k as t,a9 as r,ae as u,E as d}from"./tinymce-vendor-3c2b3d6e.js";import{ac as A}from"./antd-vue-vendor-05bfa84d.js";import{u as b,a as y,b as C}from"./useTabMixin-15a02af3.js";import{_ as F}from"./jeecg-online-vendor-f57c6456.js";import"./index-37448b2d.js";import"./vxe-table-vendor-26792376.js";const R=m({name:"YearUI",components:{InputNumber:A},props:b({defaultValue:"*"}),emits:y(),setup(e,a){const n=new Date().getFullYear();return C(e,a,{defaultValue:"*",minValue:0,valueRange:{start:n,end:n+100},valueLoop:{start:n,interval:1}})}}),_={class:"item"},w={class:"item"},L=s("span",null," 从 ",-1),T=s("span",null," 年 至 ",-1),U=s("span",null," 年 ",-1),N={class:"item"},V=s("span",null," 从 ",-1),B=s("span",null," 年开始，间隔 ",-1),I=s("span",null," 年 ",-1);function Y(e,a,n,$,k,c){const p=i("a-radio"),l=i("InputNumber"),v=i("a-radio-group");return f(),E("div",{class:g(`${e.prefixCls}-config-list`)},[t(v,{value:e.type,"onUpdate:value":a[4]||(a[4]=o=>e.type=o)},{default:r(()=>[s("div",_,[t(p,u({value:e.TypeEnum.every},e.beforeRadioAttrs),{default:r(()=>[d("每年")]),_:1},16,["value"])]),s("div",w,[t(p,u({value:e.TypeEnum.range},e.beforeRadioAttrs),{default:r(()=>[d("区间")]),_:1},16,["value"]),L,t(l,u({class:"w80",value:e.valueRange.start,"onUpdate:value":a[0]||(a[0]=o=>e.valueRange.start=o)},e.typeRangeAttrs),null,16,["value"]),T,t(l,u({class:"w80",value:e.valueRange.end,"onUpdate:value":a[1]||(a[1]=o=>e.valueRange.end=o)},e.typeRangeAttrs),null,16,["value"]),U]),s("div",N,[t(p,u({value:e.TypeEnum.loop},e.beforeRadioAttrs),{default:r(()=>[d("循环")]),_:1},16,["value"]),V,t(l,u({class:"w80",value:e.valueLoop.start,"onUpdate:value":a[2]||(a[2]=o=>e.valueLoop.start=o)},e.typeLoopAttrs),null,16,["value"]),B,t(l,u({class:"w80",value:e.valueLoop.interval,"onUpdate:value":a[3]||(a[3]=o=>e.valueLoop.interval=o)},e.typeLoopAttrs),null,16,["value"]),I])]),_:1},8,["value"])],2)}const q=F(R,[["render",Y]]);export{q as default};
