var c=(e,t,s)=>new Promise((l,i)=>{var u=a=>{try{r(s.next(a))}catch(o){i(o)}},y=a=>{try{r(s.throw(a))}catch(o){i(o)}},r=a=>a.done?l(a.value):Promise.resolve(a.value).then(u,y);r((s=s.apply(e,t)).next())});import{ap as n,an as T}from"./jeecg-online-vendor-f57c6456.js";import{M as d}from"./antd-vue-vendor-05bfa84d.js";const L=e=>n.get({url:"/sys/tenant/list",params:e}),m=(e,t)=>{let s=t?"/sys/tenant/edit":"/sys/tenant/add";return n.post({url:s,params:e})},P=e=>n.get({url:"/sys/tenant/queryById",params:e}),v=(e,t)=>n.delete({url:"/sys/tenant/delete",data:e},{joinParamsToUrl:!0}).then(()=>{t()}),B=(e,t)=>{d.confirm({title:"确认删除",content:"是否删除选中数据",okText:"确认",cancelText:"取消",onOk:()=>n.delete({url:"/sys/tenant/deleteBatch",data:e},{joinParamsToUrl:!0}).then(()=>{t()})})},h=e=>n.get({url:"/sys/tenant/getCurrentUserTenant",params:e}),f=e=>n.put({url:"/sys/tenant/invitationUserJoin",params:e},{joinParamsToUrl:!0}),j=e=>n.get({url:"/sys/tenant/getTenantUserList",params:e}),I=(e,t)=>{d.confirm({title:"请离",content:"是否请离该用户",okText:"确认",cancelText:"取消",onOk:()=>n.put({url:"/sys/tenant/leaveTenant",data:e},{joinParamsToUrl:!0}).then(()=>{t()})})},q=e=>n.get({url:"/sys/tenant/packList",params:e}),x=e=>n.post({url:"/sys/tenant/addPackPermission",params:e}),D=e=>n.put({url:"/sys/tenant/editPackPermission",params:e}),J=(e,t)=>n.delete({url:"/sys/tenant/deletePackPermissions",data:e},{joinParamsToUrl:!0}).then(()=>{t()}),O=e=>n.get({url:"/sys/tenant/recycleBinPageList",params:e}),C=(e,t)=>n.delete({url:"/sys/tenant/deleteLogicDeleted",params:e},{joinParamsToUrl:!0}).then(()=>{t()}).catch(()=>{t()}),b=(e,t)=>n.put({url:"/sys/tenant/revertTenantLogic",params:e},{joinParamsToUrl:!0}).then(()=>{t()}),M=e=>n.get({url:"/sys/tenant/queryTenantPackUserList",params:e}),w=e=>n.put({url:"/sys/tenant/deleteTenantPackUser",params:e}),H=e=>n.post({url:"/sys/tenant/addTenantPackUser",params:e}),N=e=>n.get({url:"/sys/tenant/getTenantPageListByUserId",params:e});function z(){return c(this,null,function*(){let e=T();if(e){let t=yield P({id:e});if(t)return t.name}return"空"})}const E=(e,t)=>{let s=t?"/sys/user/editTenantUser":"/sys/user/add";return n.post({url:s,params:e},{joinParamsToUrl:!0})};export{P as a,m as b,b as c,C as d,j as e,L as f,z as g,v as h,B as i,f as j,J as k,I as l,x as m,D as n,w as o,q as p,M as q,O as r,E as s,H as t,N as u,h as v};
