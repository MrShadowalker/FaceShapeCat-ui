var y=(e,a,t)=>new Promise((o,u)=>{var l=n=>{try{i(t.next(n))}catch(r){u(r)}},s=n=>{try{i(t.throw(n))}catch(r){u(r)}},i=n=>n.done?o(n.value):Promise.resolve(n.value).then(l,s);i((t=t.apply(e,a)).next())});import{aM as v}from"./jeecg-online-vendor-f57c6456.js";import"./tinymce-vendor-3c2b3d6e.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";const c=Symbol();function w(e,a,t,o,u){return y(this,null,function*(){if(!(e&&typeof e=="function"))throw`validate 参数需要的是一个方法，而传入的却是${typeof e}`;let l={},s=yield new Promise((n,r)=>{e().then(()=>{for(let f in a)a[f]instanceof Array&&v(o,f)==="string"&&(a[f]=a[f].join(","));n(a)}).catch(()=>{r({error:c})})});Object.assign(l,{formValue:s});let i=yield T(t,u);return l=Object.assign(l,{tablesValue:i}),l})}function T(e,a=!0){if(!(e instanceof Array))throw`'validateTables'函数的'cases'参数需要的是一个数组，而传入的却是${typeof e}`;return new Promise((t,o)=>{let u=[],l=0;(!e||e.length===0)&&t(u),function s(){let i=e[l];i.value.validateTable().then(n=>{if(!n)u[l]={tableData:i.value.getTableData()},++l===e.length?t(u):s();else{let r,f=p(i.value,"ATabPane");if(f&&(r=f.$.vnode.key,a)){let b=p(f,"Tabs");b&&b.setActiveKey&&b.setActiveKey(r)}o({error:c,index:l,paneKey:r,errMap:n})}})}()})}function p(e,a){let t=e.$parent;if(t&&t.$options){if(t.$options.name===a)return t;{let o=p(t,a);if(o)return o}}return null}export{c as VALIDATE_FAILED,p as getVmParentByName,w as validateFormModelAndTables,T as validateTables};