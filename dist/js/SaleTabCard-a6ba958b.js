import{d as u,Y as l,a6 as h,ab as x,a9 as a,ac as r,k as t,a4 as g,a5 as b}from"./tinymce-vendor-3c2b3d6e.js";import{B as c}from"./Bar-622322af.js";import{R as p}from"./RankList-248147e0.js";import{_ as v}from"./jeecg-online-vendor-f57c6456.js";import"./useECharts-218e4a8d.js";import"./index-37448b2d.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./echarts-676384e9.js";import"./echarts-vendor-0b842a89.js";const y=o=>(g("data-v-910ba504"),o=o(),b(),o),k={class:"salesCard"},S=y(()=>r("div",{class:"extra-wrapper"},[r("div",{class:"extra-item"},[r("a",null,"本月")])],-1)),B=u({__name:"SaleTabCard",props:{loading:{type:Boolean}},setup(o){const n=[];for(let e=0;e<7;e++)n.push({name:"白鹭岛 "+(e+1)+" 号店",total:1234.56-e*100});const d=[];for(let e=0;e<12;e+=1)d.push({name:`${e+1}月`,value:Math.floor(Math.random()*1e3)+200});return(e,C)=>{const s=l("a-col"),_=l("a-row"),i=l("a-tab-pane"),m=l("a-tabs"),f=l("a-card");return h(),x(f,{loading:o.loading,bordered:!1,"body-style":{padding:"0"}},{default:a(()=>[r("div",k,[t(m,{"default-active-key":"1",size:"large","tab-bar-style":{marginBottom:"24px",paddingLeft:"16px"}},{rightExtra:a(()=>[S]),default:a(()=>[t(i,{loading:"true",tab:"销售额",key:"1"},{default:a(()=>[t(_,null,{default:a(()=>[t(s,{xl:16,lg:12,md:12,sm:24,xs:24},{default:a(()=>[t(c,{chartData:d,option:{title:{text:"销售额排行",textStyle:{fontWeight:"lighter"}}},height:"40vh"})]),_:1}),t(s,{xl:8,lg:12,md:12,sm:24,xs:24},{default:a(()=>[t(p,{title:"门店销售排行榜",list:n})]),_:1})]),_:1})]),_:1}),t(i,{tab:"销售趋势",key:"2"},{default:a(()=>[t(_,null,{default:a(()=>[t(s,{xl:16,lg:12,md:12,sm:24,xs:24},{default:a(()=>[t(c,{chartData:d.reverse(),option:{title:{text:"销售额排行",textStyle:{fontWeight:"lighter"}}},height:"40vh"},null,8,["chartData"])]),_:1}),t(s,{xl:8,lg:12,md:12,sm:24,xs:24},{default:a(()=>[t(p,{title:"门店销售排行榜",list:n})]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["loading"])}}});const z=v(B,[["__scopeId","data-v-910ba504"]]);export{z as default};
