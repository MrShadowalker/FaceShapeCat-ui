import{u as n}from"./tinymce-vendor-3c2b3d6e.js";import{C as u,ap as s}from"./jeecg-online-vendor-f57c6456.js";const{createConfirm:p}=u();var y=(e=>(e.queryDepartTreeSync="/sys/sysDepart/queryDepartTreeSync",e.save="/sys/sysDepart/add",e.edit="/sys/sysDepart/edit",e.delete="/sys/sysDepart/delete",e.deleteBatch="/sys/sysDepart/deleteBatch",e.exportXlsUrl="/sys/sysDepart/exportXls",e.importExcelUrl="/sys/sysDepart/importExcel",e.roleQueryTreeList="/sys/role/queryTreeList",e.queryDepartPermission="/sys/permission/queryDepartPermission",e.saveDepartPermission="/sys/permission/saveDepartPermission",e.dataRule="/sys/sysDepartPermission/datarule",e.getCurrentUserDeparts="/sys/user/getCurrentUserDeparts",e.selectDepart="/sys/selectDepart",e.getUpdateDepartInfo="/sys/user/getUpdateDepartInfo",e.doUpdateDepartInfo="/sys/user/doUpdateDepartInfo",e.changeDepartChargePerson="/sys/user/changeDepartChargePerson",e.evDisburseAdd="/youran-boot/evDisburse/add",e.evAdjustAdd="/youran-boot/evAdjust/add",e))(y||{});const l=e=>s.get({url:"/sys/sysDepart/queryDepartTreeSync",params:e}),c=(e,r)=>r?s.put({url:"/sys/sysDepart/edit",params:e}):s.post({url:"/sys/sysDepart/add",params:e}),i=(e,r=!1)=>new Promise((t,a)=>{const o=()=>{t(s.delete({url:"/sys/sysDepart/deleteBatch",params:e},{joinParamsToUrl:!0}))};r?p({iconType:"warning",title:"删除",content:"确定要删除吗？",onOk:()=>o(),onCancel:()=>a()}):o()}),m=e=>s.get({url:"/sys/role/queryTreeList",params:e}),g=e=>s.get({url:"/sys/permission/queryDepartPermission",params:e}),P=e=>s.post({url:"/sys/permission/saveDepartPermission",params:e}),f=(e,r,t)=>{let a=`/sys/sysDepartPermission/datarule/${n(e)}/${n(r)}`;return s.get({url:a,params:t})},U=e=>s.post({url:"/sys/sysDepartPermission/datarule",params:e}),v=e=>s.get({url:"/sys/user/getCurrentUserDeparts",params:e}),h=e=>s.put({url:"/sys/selectDepart",params:e});const q=e=>s.post({url:"/youran-boot/evDisburse/add",params:e}),T=e=>s.post({url:"/youran-boot/evAdjust/add",params:e});export{y as A,f as a,c as b,m as c,i as d,g as e,P as f,T as g,q as h,v as i,h as j,l as q,U as s};
