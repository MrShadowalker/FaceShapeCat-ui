import{d as l,ac as c,Y as t,a6 as h,ab as f,a9 as a,k as s,E as w}from"./tinymce-vendor-3c2b3d6e.js";import{I as C,c as j}from"./index-76418551.js";import{P as I}from"./index-31a6ff64.js";import{_ as P}from"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./index-37448b2d.js";import"./vxe-table-vendor-26792376.js";import"./useContentHeight-bfd1eb89.js";import"./useWindowSizeFn-e63bb4b0.js";import"./useContentViewHeight-6be29838.js";import"./usePageContext-b7687fba.js";import"./injectionKey-69710956.js";const r=[{src:"https://jeecgos.oss-cn-beijing.aliyuncs.com/upload/test/login_1658829954004.png",width:300},{src:"https://jeecgos.oss-cn-beijing.aliyuncs.com/upload/test/home_index_1658830084684.png",width:300},{src:"https://jeecgos.oss-cn-beijing.aliyuncs.com/upload/test/design_1658830200539.png",width:300},{src:"https://static.jeecg.com/upload/test/13_1592320121058.png",width:300},{src:"https://static.jeecg.com/upload/test/16_1592320251436.png",width:300}],b=l({components:{PageWrapper:I,ImagePreview:C},setup(){function e(){const n=({index:o,url:p,dom:m})=>{};let i=r.map(o=>o.src);j({imageList:i,defaultWidth:700,rememberState:!0,onImgLoad:n})}return{imgList:r,openImg:e}}}),v=c("h1",null,"有预览图",-1),x=c("h1",null,"无预览图",-1);function B(e,n,i,o,p,m){const u=t("ImagePreview"),d=t("a-divider"),g=t("a-button"),_=t("PageWrapper");return h(),f(_,{title:"图片预览示例"},{default:a(()=>[v,s(u,{imageList:e.imgList},null,8,["imageList"]),s(d),x,s(g,{onClick:e.openImg,type:"primary"},{default:a(()=>[w("点击预览")]),_:1},8,["onClick"])]),_:1})}const Y=P(b,[["render",B]]);export{Y as default};
