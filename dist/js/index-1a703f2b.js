import{d as _,f as p,u as g,a4 as E,a5 as v,ac as s,Y as r,a6 as D,ab as B,a9 as t,k as o,E as f}from"./tinymce-vendor-3c2b3d6e.js";import{Q as q}from"./index-35591d01.js";import{ac as b,ag as A}from"./index-37448b2d.js";import{P as w}from"./index-31a6ff64.js";import{_ as h}from"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./vxe-table-vendor-26792376.js";import"./useContentHeight-bfd1eb89.js";import"./useWindowSizeFn-e63bb4b0.js";import"./useContentViewHeight-6be29838.js";import"./usePageContext-b7687fba.js";import"./injectionKey-69710956.js";const y="https://www.vvbin.cn",k=_({components:{CollapseContainer:b,QrCode:q,PageWrapper:w},setup(){const e=p(null),n=p(null);function d(){const u=g(e);u&&u.download("文件名")}function i(){const u=g(n);u&&u.download("Qrcode")}function c({ctx:u}){u instanceof CanvasRenderingContext2D&&(u.fillStyle="black",u.font='16px "微软雅黑"',u.textBaseline="bottom",u.textAlign="center",u.fillText("你帅你先扫",100,195,200))}return{onQrcodeDone:c,qrCodeUrl:y,LogoImg:A,download:d,downloadDiy:i,qrRef:e,qrDiyRef:n}}});const C=e=>(E("data-v-539d04c0"),e=e(),v(),e),U={class:"flex flex-wrap"},I=C(()=>s("div",{class:"msg"}," (在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题) ",-1)),Q=C(()=>s("div",{class:"msg"}," 要进行扩展绘制则不能将tag设为img ",-1));function R(e,n,d,i,c,u){const l=r("QrCode"),a=r("CollapseContainer"),m=r("a-button"),F=r("PageWrapper");return D(),B(F,{title:"二维码组件使用示例"},{default:t(()=>[s("div",U,[o(a,{title:"基础示例",canExpan:!0,class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl},null,8,["value"])]),_:1}),o(a,{title:"渲染成img标签示例",class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])]),_:1}),o(a,{title:"配置样式示例",class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,options:{color:{dark:"#55D187"}}},null,8,["value"])]),_:1}),o(a,{title:"本地logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])]),_:1}),o(a,{title:"在线logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,logo:"http://jeecg.com/images/logo.png",options:{color:{dark:"#55D187"}}},null,8,["value"])]),_:1}),o(a,{title:"logo配置示例",class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,logo:{src:"http://jeecg.com/images/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])]),_:1}),o(a,{title:"下载示例",class:"text-center qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),o(m,{class:"mb-2",type:"primary",onClick:e.download},{default:t(()=>[f(" 下载 ")]),_:1},8,["onClick"]),I]),_:1}),o(a,{title:"配置大小示例",class:"text-center qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,width:300},null,8,["value"])]),_:1}),o(a,{title:"扩展绘制示例",class:"text-center qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,width:200,options:{margin:5},ref:"qrDiyRef",logo:e.LogoImg,onDone:e.onQrcodeDone},null,8,["value","logo","onDone"]),o(m,{class:"mb-2",type:"primary",onClick:e.downloadDiy},{default:t(()=>[f(" 下载 ")]),_:1},8,["onClick"]),Q]),_:1})])]),_:1})}const J=h(k,[["render",R],["__scopeId","data-v-539d04c0"]]);export{J as default};