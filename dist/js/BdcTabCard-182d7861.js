import{d as x,Y as n,a6 as y,ab as b,a9 as t,ac as o,k as a,a4 as v,a5 as B}from"./tinymce-vendor-3c2b3d6e.js";import{B as k}from"./Bar-622322af.js";import{B as C,G as m}from"./Gauge-5afbf629.js";import c from"./QuickNav-c9d63743.js";import{_ as D}from"./jeecg-online-vendor-f57c6456.js";import"./useECharts-218e4a8d.js";import"./index-37448b2d.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./echarts-676384e9.js";import"./echarts-vendor-0b842a89.js";const w=l=>(v("data-v-87c6229e"),l=l(),B(),l),M={class:"salesCard"},S={class:"extra-wrapper"},I=w(()=>o("div",{class:"extra-item"},[o("a",null,"今日"),o("a",null,"本周"),o("a",null,"本月"),o("a",null,"本年")],-1)),j=x({__name:"BdcTabCard",props:{loading:{type:Boolean}},setup(l){const u=[];for(let e=0;e<7;e++)u.push({name:"白鹭岛 "+(e+1)+" 号店",total:1234.56-e*100});const _=[];for(let e=0;e<12;e+=1)_.push({name:`${e+1}月`,value:Math.floor(Math.random()*1e3)+200});const p=[];for(let e=0;e<2;e++)for(let s=0;s<12;s+=1)p.push({type:e==0?"jeecg":"jeebt",name:`${s+1}月`,value:Math.floor(Math.random()*1e3)+200});return(e,s)=>{const g=n("a-range-picker"),d=n("a-col"),r=n("a-row"),i=n("a-tab-pane"),f=n("a-tabs"),h=n("a-card");return y(),b(h,{loading:l.loading,bordered:!1,"body-style":{padding:"0"}},{default:t(()=>[o("div",M,[a(f,{"default-active-key":"1",size:"large","tab-bar-style":{marginBottom:"24px",paddingLeft:"16px"}},{rightExtra:t(()=>[o("div",S,[I,a(g,{style:{width:"256px"}})])]),default:t(()=>[a(i,{loading:"true",tab:"受理监管",key:"1"},{default:t(()=>[a(r,null,{default:t(()=>[a(d,{xl:16,lg:12,md:12,sm:24,xs:24},{default:t(()=>[a(k,{chartData:_,option:{title:{text:"受理量统计",textStyle:{fontWeight:"lighter"}}},height:"40vh"})]),_:1}),a(d,{xl:8,lg:12,md:12,sm:24,xs:24},{default:t(()=>[a(c,{loading:l.loading,class:"enter-y",bordered:!1,"body-style":{padding:0}},null,8,["loading"])]),_:1})]),_:1})]),_:1}),a(i,{tab:"交互监管",key:"2"},{default:t(()=>[a(r,null,{default:t(()=>[a(d,{xl:16,lg:12,md:12,sm:24,xs:24},{default:t(()=>[a(C,{chartData:p,option:{title:{text:"平台与部门交互量统计",textStyle:{fontWeight:"lighter"}}},height:"40vh"})]),_:1}),a(d,{xl:8,lg:12,md:12,sm:24,xs:24},{default:t(()=>[a(c,{loading:l.loading,class:"enter-y",bordered:!1,"body-style":{padding:0}},null,8,["loading"])]),_:1})]),_:1})]),_:1}),a(i,{tab:"存储监管",key:"3"},{default:t(()=>[a(r,null,{default:t(()=>[a(d,{xl:16,lg:12,md:12,sm:24,xs:24,style:{display:"flex"}},{default:t(()=>[a(m,{chartData:{name:"C盘",value:70},height:"30vh"}),a(m,{chartData:{name:"D盘",value:50},height:"30vh"})]),_:1}),a(d,{xl:8,lg:12,md:12,sm:24,xs:24},{default:t(()=>[a(c,{loading:l.loading,class:"enter-y",bordered:!1,"body-style":{padding:0}},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["loading"])}}});const A=D(j,[["__scopeId","data-v-87c6229e"]]);export{A as default};