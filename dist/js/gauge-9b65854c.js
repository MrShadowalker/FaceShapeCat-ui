import{d as l,f as t,r as c,o as u,a6 as d,a7 as m,ac as p}from"./tinymce-vendor-3c2b3d6e.js";import{C as f}from"./jeecg-online-vendor-f57c6456.js";import{useECharts as h}from"./useECharts-218e4a8d.js";import"./echarts-676384e9.js";import{an as g}from"./echarts-vendor-0b842a89.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./index-37448b2d.js";const A=l({__name:"gauge",props:{data:{}},setup(o){const a=o,v=t([]),s=t(null),{setOptions:r,echarts:i}=h(s),w=t(!1),{createMessage:_}=f(),e=c({series:[{type:"gauge",progress:{show:!0,width:18},axisLine:{lineStyle:{width:18}},axisTick:{show:!0},splitLine:{length:15,lineStyle:{width:2,color:"#999"}},axisLabel:{distance:25,color:"#999",fontSize:15},anchor:{show:!0,showAbove:!0,size:25,itemStyle:{borderWidth:10}},title:{},detail:{valueAnimation:!0,fontSize:50,formatter:"{value}%",offsetCenter:[0,"80%"]},data:[{value:70,name:"本地磁盘"}]}]});function n(){e.series[0].data[0].name=a.data.name,e.series[0].data[0].value=a.data.restPPT,r(e)}return u(()=>{i.use(g),n()}),(x,y)=>(d(),m("div",null,[p("div",{ref_key:"chartRef",ref:s,style:{width:"100%",height:"400px"}},null,512)]))}});export{A as default};