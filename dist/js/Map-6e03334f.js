var p=(t,a,e)=>new Promise((s,r)=>{var l=o=>{try{i(e.next(o))}catch(n){r(n)}},f=o=>{try{i(e.throw(o))}catch(n){r(n)}},i=o=>o.done?s(o.value):Promise.resolve(o.value).then(l,f);i((e=e.apply(t,a)).next())});import{X as m,_ as c}from"./jeecg-online-vendor-f57c6456.js";import{d,f as h,o as u,a6 as _,a7 as g,ao as y}from"./tinymce-vendor-3c2b3d6e.js";import{useECharts as b}from"./useECharts-218e4a8d.js";import{m as S}from"./data-9d02034f.js";import{I as w}from"./echarts-vendor-0b842a89.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./index-37448b2d.js";import"./echarts-676384e9.js";const C=d({props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const t=h(null),{setOptions:a}=b(t);return u(()=>p(this,null,function*(){const e=yield(yield m(()=>import("./china-77152183.js"),[])).default;w("china",e),a({visualMap:[{min:0,max:1e3,left:"left",top:"bottom",text:["高","低"],calculable:!1,orient:"horizontal",inRange:{color:["#e0ffff","#006edd"],symbolSize:[30,100]}}],tooltip:{trigger:"item",backgroundColor:"rgba(0, 0, 0, .6)",textStyle:{color:"#fff",fontSize:12}},series:[{name:"iphone4",type:"map",map:"china",label:{show:!0,color:"rgb(249, 249, 249)",fontSize:10},itemStyle:{areaColor:"#2f82ce",borderColor:"#0DAAC1"},data:S}]})})),{chartRef:t}}});function v(t,a,e,s,r,l){return _(),g("div",{ref:"chartRef",style:y({height:t.height,width:t.width})},null,4)}const I=c(C,[["render",v]]);export{I as default};
