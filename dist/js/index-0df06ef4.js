import{d as W,Y as c,a6 as v,ab as S,a9 as e,k as o,E as a}from"./tinymce-vendor-3c2b3d6e.js";import{ac as T}from"./index-37448b2d.js";import{C as b,_ as I}from"./jeecg-online-vendor-f57c6456.js";import{P as y}from"./index-31a6ff64.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./useContentHeight-bfd1eb89.js";import"./useWindowSizeFn-e63bb4b0.js";import"./useContentViewHeight-6be29838.js";import"./usePageContext-b7687fba.js";import"./injectionKey-69710956.js";const N=W({components:{CollapseContainer:T,PageWrapper:y},setup(){const{createMessage:s,createConfirm:n,createSuccessModal:d,createInfoModal:u,createErrorModal:m,createWarningModal:f,notification:r}=b(),{info:l,success:i,warning:t,error:g}=s;function p(){s.loading("Loading...")}function C(h){n({iconType:h,title:"Tip",content:"content message..."})}function M(){d({title:"Tip",content:"content message..."})}function k(){m({title:"Tip",content:"content message..."})}function w(){f({title:"Tip",content:"content message..."})}function E(){u({title:"Tip",content:"content message..."})}function $(){r.success({message:"Tip",description:"content message..."})}return{infoMsg:l,successMsg:i,warningMsg:t,errorMsg:g,handleLoading:p,handleConfirm:C,handleSuccessModal:M,handleErrorModal:k,handleWarningModal:w,handleInfoModal:E,handleNotify:$}}});function _(s,n,d,u,m,f){const r=c("a-button"),l=c("CollapseContainer"),i=c("PageWrapper");return v(),S(i,{title:"消息示例"},{default:e(()=>[o(l,{class:"w-full h-32 bg-white rounded-md",title:"Message"},{default:e(()=>[o(r,{onClick:n[0]||(n[0]=t=>s.infoMsg("Info message")),class:"mr-2"},{default:e(()=>[a(" Info ")]),_:1}),o(r,{onClick:n[1]||(n[1]=t=>s.successMsg("Success message")),class:"mr-2",color:"success"},{default:e(()=>[a(" Success ")]),_:1}),o(r,{onClick:n[2]||(n[2]=t=>s.warningMsg("Warning message")),class:"mr-2",color:"warning"},{default:e(()=>[a(" Warning ")]),_:1}),o(r,{onClick:n[3]||(n[3]=t=>s.errorMsg("Error message")),class:"mr-2",color:"error"},{default:e(()=>[a(" Error ")]),_:1}),o(r,{onClick:s.handleLoading,class:"mr-2",type:"primary"},{default:e(()=>[a(" Loading ")]),_:1},8,["onClick"])]),_:1}),o(l,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Comfirm"},{default:e(()=>[o(r,{onClick:n[4]||(n[4]=t=>s.handleConfirm("info")),class:"mr-2"},{default:e(()=>[a(" Info ")]),_:1}),o(r,{onClick:n[5]||(n[5]=t=>s.handleConfirm("warning")),color:"warning",class:"mr-2"},{default:e(()=>[a(" Warning ")]),_:1}),o(r,{onClick:n[6]||(n[6]=t=>s.handleConfirm("success")),color:"success",class:"mr-2"},{default:e(()=>[a(" Success ")]),_:1}),o(r,{onClick:n[7]||(n[7]=t=>s.handleConfirm("error")),color:"error",class:"mr-2"},{default:e(()=>[a(" Error ")]),_:1})]),_:1}),o(l,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Modal"},{default:e(()=>[o(r,{onClick:s.handleInfoModal,class:"mr-2"},{default:e(()=>[a(" Info ")]),_:1},8,["onClick"]),o(r,{onClick:s.handleSuccessModal,color:"success",class:"mr-2"},{default:e(()=>[a(" Success ")]),_:1},8,["onClick"]),o(r,{onClick:s.handleErrorModal,color:"error",class:"mr-2"},{default:e(()=>[a(" Error ")]),_:1},8,["onClick"]),o(r,{onClick:s.handleWarningModal,color:"warning",class:"mr-2"},{default:e(()=>[a(" Warning ")]),_:1},8,["onClick"])]),_:1}),o(l,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Notification 用法与上面一致"},{default:e(()=>[o(r,{onClick:s.handleNotify,color:"success",class:"mr-2"},{default:e(()=>[a(" Success ")]),_:1},8,["onClick"])]),_:1})]),_:1})}const G=I(N,[["render",_]]);export{G as default};