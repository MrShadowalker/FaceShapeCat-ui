var u=(e,n,t)=>new Promise((r,s)=>{var c=o=>{try{i(t.next(o))}catch(f){s(f)}},a=o=>{try{i(t.throw(o))}catch(f){s(f)}},i=o=>o.done?r(o.value):Promise.resolve(o.value).then(c,a);i((t=t.apply(e,n)).next())});import{d as I,P as l,b7 as k,u as L}from"./jeecg-online-vendor-f57c6456.js";const m=I({id:"app-lock",state:()=>({lockInfo:l.getLocal(k)}),getters:{getLockInfo(){return this.lockInfo}},actions:{setLockInfo(e){this.lockInfo=Object.assign({},this.lockInfo,e),l.setLocal(k,this.lockInfo,!0)},resetLockInfo(){l.removeLocal(k,!0),this.lockInfo=null},unLock(e){return u(this,null,function*(){var r;const n=L();return((r=this.lockInfo)==null?void 0:r.pwd)===e?(this.resetLockInfo(),!0):yield(()=>u(this,null,function*(){var s;try{const c=(s=n.getUserInfo)==null?void 0:s.username,a=yield n.login({username:c,password:e,goHome:!1,mode:"none"});return a&&this.resetLockInfo(),a}catch(c){return!1}}))()})}}});export{m as u};
