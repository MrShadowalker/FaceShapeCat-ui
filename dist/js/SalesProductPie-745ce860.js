import{d as r,f as l,w as s,a6 as u,ab as m,a9 as d,ac as c,ao as f,u as p}from"./tinymce-vendor-3c2b3d6e.js";import{L as h}from"./antd-vue-vendor-05bfa84d.js";import{useECharts as g}from"./useECharts-218e4a8d.js";import"./index-37448b2d.js";import"./jeecg-online-vendor-f57c6456.js";import"./vxe-table-vendor-26792376.js";import"./echarts-676384e9.js";import"./echarts-vendor-0b842a89.js";const k=r({__name:"SalesProductPie",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const a=e,t=l(null),{setOptions:o}=g(t);return s(()=>a.loading,()=>{a.loading||o({tooltip:{trigger:"item"},series:[{name:"访问来源",type:"pie",radius:"80%",center:["50%","50%"],color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],data:[{value:500,name:"电子产品"},{value:310,name:"服装"},{value:274,name:"化妆品"},{value:400,name:"家居"}].sort(function(i,n){return i.value-n.value}),roseType:"radius",animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*400}}]})},{immediate:!0}),(i,n)=>(u(),m(p(h),{title:"成交占比",loading:e.loading},{default:d(()=>[c("div",{ref_key:"chartRef",ref:t,style:f({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{k as default};