import{aN as s}from"./jeecg-online-vendor-f57c6456.js";import{urlToBase64 as c,dataURLtoBlob as l}from"./base64Conver-fa2fe1af.js";import"./tinymce-vendor-3c2b3d6e.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";function g(e,t,a,o){c(e).then(d=>{f(d,t,a,o)})}function f(e,t,a,o){const d=l(e);w(d,t,a,o)}function w(e,t,a,o){const d=typeof o!="undefined"?[o,e]:[e],n=new Blob(d,{type:a||"application/octet-stream"});if(typeof window.navigator.msSaveBlob!="undefined")window.navigator.msSaveBlob(n,t);else{const r=window.URL.createObjectURL(n),i=document.createElement("a");i.style.display="none",i.href=r,i.setAttribute("download",t),typeof i.download=="undefined"&&i.setAttribute("target","_blank"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(r)}}function y({url:e,target:t="_blank",fileName:a}){const o=window.navigator.userAgent.toLowerCase().indexOf("chrome")>-1,d=window.navigator.userAgent.toLowerCase().indexOf("safari")>-1;if(/(iP)/g.test(window.navigator.userAgent))return!1;if(o||d){const n=document.createElement("a");if(n.href=e,n.target=t,n.download!==void 0&&(n.download=a||e.substring(e.lastIndexOf("/")+1,e.length)),document.createEvent){const r=document.createEvent("MouseEvents");return r.initEvent("click",!0,!0),n.dispatchEvent(r),!0}}return e.indexOf("?")===-1&&(e+="?download"),s(e,{target:t}),!0}export{f as downloadByBase64,w as downloadByData,g as downloadByOnlineUrl,y as downloadByUrl};