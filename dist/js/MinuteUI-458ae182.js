import{d as y,ac as t,Y as l,a6 as d,a7 as v,aj as b,k as u,a9 as n,ae as s,E as r,F as _,aa as A,ab as R,ad as E}from"./tinymce-vendor-3c2b3d6e.js";import{ac as F}from"./antd-vue-vendor-05bfa84d.js";import{u as C,a as L,b as k}from"./useTabMixin-15a02af3.js";import{_ as c}from"./jeecg-online-vendor-f57c6456.js";import"./index-37448b2d.js";import"./vxe-table-vendor-26792376.js";const T=y({name:"MinuteUI",components:{InputNumber:F},props:C({defaultValue:"*"}),emits:L(),setup(e,o){return k(e,o,{defaultValue:"*",minValue:0,maxValue:59,valueRange:{start:0,end:59},valueLoop:{start:0,interval:1}})}}),U={class:"item"},B={class:"item"},V=t("span",null," 从 ",-1),N=t("span",null," 分 至 ",-1),h=t("span",null," 分 ",-1),I={class:"item"},$=t("span",null," 从 ",-1),S=t("span",null," 分开始，间隔 ",-1),M=t("span",null," 分 ",-1),P={class:"item"},j={class:"list"};function w(e,o,z,D,Y,q){const p=l("a-radio"),i=l("InputNumber"),m=l("a-checkbox"),f=l("a-checkbox-group"),g=l("a-radio-group");return d(),v("div",{class:b(`${e.prefixCls}-config-list`)},[u(g,{value:e.type,"onUpdate:value":o[5]||(o[5]=a=>e.type=a)},{default:n(()=>[t("div",U,[u(p,s({value:e.TypeEnum.every},e.beforeRadioAttrs),{default:n(()=>[r("每分")]),_:1},16,["value"])]),t("div",B,[u(p,s({value:e.TypeEnum.range},e.beforeRadioAttrs),{default:n(()=>[r("区间")]),_:1},16,["value"]),V,u(i,s({value:e.valueRange.start,"onUpdate:value":o[0]||(o[0]=a=>e.valueRange.start=a)},e.typeRangeAttrs),null,16,["value"]),N,u(i,s({value:e.valueRange.end,"onUpdate:value":o[1]||(o[1]=a=>e.valueRange.end=a)},e.typeRangeAttrs),null,16,["value"]),h]),t("div",I,[u(p,s({value:e.TypeEnum.loop},e.beforeRadioAttrs),{default:n(()=>[r("循环")]),_:1},16,["value"]),$,u(i,s({value:e.valueLoop.start,"onUpdate:value":o[2]||(o[2]=a=>e.valueLoop.start=a)},e.typeLoopAttrs),null,16,["value"]),S,u(i,s({value:e.valueLoop.interval,"onUpdate:value":o[3]||(o[3]=a=>e.valueLoop.interval=a)},e.typeLoopAttrs),null,16,["value"]),M]),t("div",P,[u(p,s({value:e.TypeEnum.specify},e.beforeRadioAttrs),{default:n(()=>[r("指定")]),_:1},16,["value"]),t("div",j,[u(f,{value:e.valueList,"onUpdate:value":o[4]||(o[4]=a=>e.valueList=a)},{default:n(()=>[(d(!0),v(_,null,A(e.specifyRange,a=>(d(),R(m,s({key:a,value:a},e.typeSpecifyAttrs),{default:n(()=>[r(E(a),1)]),_:2},1040,["value"]))),128))]),_:1},8,["value"])])])]),_:1},8,["value"])],2)}const W=c(T,[["render",w]]);export{W as default};