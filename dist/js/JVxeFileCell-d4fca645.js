import{d as D,ac as r,Y as a,a6 as t,a7 as c,F as w,aa as v,ab as i,a9 as n,k as o,ad as g,E as d,Z as p,q as A,ae as E,A as b}from"./tinymce-vendor-3c2b3d6e.js";import"./index-8e09cdad.js";import{aN as V}from"./index-37448b2d.js";import{c as B,u as N,e as M}from"./useFileCell-730c97e7.js";import{U}from"./JUpload-70acb676.js";import{_ as J}from"./jeecg-online-vendor-f57c6456.js";import"./index-64ecc8b2.js";import"./BasicModal-9d388b71.js";import"./antd-vue-vendor-05bfa84d.js";import"./useWindowSizeFn-e63bb4b0.js";import"./vxe-table-vendor-26792376.js";import"./index-76418551.js";const $=D({name:"JVxeFileCell",components:B,props:V(),setup(e){return N(e,U.file)},enhanced:M}),L=r("span",{style:{"margin-left":"5px"}},"上传中…",-1),P={style:{"margin-left":"5px"}},R={style:{"margin-left":"5px"}};function I(e,O,T,S,q,H){const _=a("LoadingOutlined"),u=a("a-tooltip"),l=a("Icon"),m=a("a-menu-item"),f=a("a-menu"),C=a("Dropdown"),h=a("a-button"),k=a("a-upload"),F=a("JUploadModal");return t(),c("div",null,[e.hasFile?(t(!0),c(w,{key:0},v([e.innerFile||{}],(s,y)=>(t(),c("div",{key:y,style:{position:"relative"}},[s.status==="uploading"?(t(),i(u,{key:0,title:`上传中(${Math.floor(s.percent)}%)`},{default:n(()=>[o(_),L]),_:2},1032,["title"])):s.status==="done"?(t(),i(u,{key:1,title:s.name},{default:n(()=>[o(l,{icon:"ant-design:paper-clip"}),r("span",P,g(e.ellipsisFileName),1)]),_:2},1032,["title"])):(t(),i(u,{key:2,title:s.message||"上传失败"},{default:n(()=>[o(l,{icon:"ant-design:exclamation-circle",style:{color:"red"}}),r("span",R,g(e.ellipsisFileName),1)]),_:2},1032,["title"])),o(C,{trigger:["click"],placement:"bottomRight",style:{"margin-left":"10px"},disabled:e.cellProps.disabled},{overlay:n(()=>[o(f,null,{default:n(()=>[e.originColumn.allowDownload!==!1?(t(),i(m,{key:0,onClick:e.handleClickDownloadFile},{default:n(()=>[r("span",null,[o(l,{icon:"ant-design:download"}),d(" 下载")])]),_:1},8,["onClick"])):p("",!0),e.originColumn.allowRemove!==!1?(t(),i(m,{key:1,onClick:e.handleClickDeleteFile},{default:n(()=>[r("span",null,[o(l,{icon:"ant-design:delete"}),d(" 删除")])]),_:1},8,["onClick"])):p("",!0),o(m,{onClick:e.handleMoreOperation},{default:n(()=>[r("span",null,[o(l,{icon:"ant-design:bars"}),d(" 更多")])]),_:1},8,["onClick"])]),_:1})]),default:n(()=>[o(u,{title:"操作"},{default:n(()=>[s.status!=="uploading"?(t(),i(l,{key:0,icon:"ant-design:setting",style:{cursor:"pointer"}})):p("",!0)]),_:2},1024)]),_:2},1032,["disabled"])]))),128)):p("",!0),A(o(k,E({name:"file",data:{isup:1},multiple:!1,action:e.uploadAction,headers:e.uploadHeaders,showUploadList:!1},e.cellProps,{onChange:e.handleChangeUpload}),{default:n(()=>[o(h,{preIcon:"ant-design:upload"},{default:n(()=>[d(g(e.originColumn.btnText||"点击上传"),1)]),_:1})]),_:1},16,["action","headers","onChange"]),[[b,!e.hasFile]]),o(F,{value:e.modalValue,onRegister:e.registerModel,onChange:e.onModalChange},null,8,["value","onRegister","onChange"])])}const ne=J($,[["render",I]]);export{ne as default};
