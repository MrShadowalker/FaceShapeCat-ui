var s=Object.defineProperty;var l=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var m=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))b.call(r,t)&&m(e,t,r[t]);if(l)for(var t of l(r))d.call(r,t)&&m(e,t,r[t]);return e};var f=(e,r,t)=>new Promise((u,a)=>{var _=o=>{try{n(t.next(o))}catch(i){a(i)}},p=o=>{try{n(t.throw(o))}catch(i){a(i)}},n=o=>o.done?u(o.value):Promise.resolve(o.value).then(_,p);n((t=t.apply(e,r)).next())});import{X as y}from"./jeecg-online-vendor-f57c6456.js";import{n as S,u as O}from"./tinymce-vendor-3c2b3d6e.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";function P(e,r){function t(){S(()=>f(this,null,function*(){if(!e)return;(yield y(()=>import("./index-37448b2d.js").then(a=>a.be),["js/index-37448b2d.js","js/tinymce-vendor-3c2b3d6e.js","js/antd-vue-vendor-05bfa84d.js","js/jeecg-online-vendor-f57c6456.js","js/vxe-table-vendor-26792376.js","assets/jeecg-online-vendor-13f1d32d.css","assets/index-c9eb9973.css"])).default.create(O(e),c({animation:500,delay:400,delayOnTouchOnly:!0},r))}))}return{initSortable:t}}export{P as useSortable};