var Q=Object.defineProperty;var T=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var $=(e,a,l)=>a in e?Q(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l,z=(e,a)=>{for(var l in a||(a={}))W.call(a,l)&&$(e,l,a[l]);if(T)for(var l of T(a))X.call(a,l)&&$(e,l,a[l]);return e};var k=(e,a,l)=>new Promise((s,g)=>{var w=u=>{try{i(l.next(u))}catch(n){g(n)}},r=u=>{try{i(l.throw(u))}catch(n){g(n)}},i=u=>u.done?s(u.value):Promise.resolve(u.value).then(w,r);i((l=l.apply(e,a)).next())});import{p,b as _}from"./index-37448b2d.js";import{d as x,f as h,e as ee,w as D,u as S,Y as O,a6 as v,ab as C,ae as L,a9 as y,k as te,a7 as N,F as U,aa as Y,E as j,ad as B,Z as ae}from"./tinymce-vendor-3c2b3d6e.js";import{ar as ne,ap as P,aw as E,_ as le}from"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";const oe=x({name:"JSearchSelect",inheritAttrs:!1,props:{value:p.oneOfType([p.string,p.number]),dict:p.string,dictOptions:{type:Array,default:()=>[]},async:p.bool.def(!1),placeholder:p.string,popContainer:p.string,pageSize:p.number.def(10),getPopupContainer:{type:Function,default:e=>e==null?void 0:e.parentNode},adjustY:p.bool.def(!0),immediateChange:p.bool.def(!1),params:{type:Object,default:()=>{}}},emits:["change","update:value"],setup(e,{emit:a,refs:l}){const s=h([]),g=h(!1),w=ne({excludeDefaultKeys:!1}),r=h([]),i=h([]),u=h(0),n=h(!0),b=ee(()=>e.dict?e.dict.split(",").length>=2:!1);D(()=>e.dict,()=>{e.dict&&(b.value?K():R())},{immediate:!0}),D(()=>e.value,t=>{t||t===0?J():(r.value=[],i.value=[])},{immediate:!0}),D(()=>e.dictOptions,t=>{t&&t.length>=0&&(s.value=[...t])},{immediate:!0});function V(t){return k(this,null,function*(){if(!b.value)return;u.value+=1;const o=S(u);s.value=[],g.value=!0;let c=F(t);P.get({url:`/sys/dict/loadDict/${e.dict}`,params:{keyword:c,pageSize:e.pageSize}}).then(d=>{if(g.value=!1,d&&d.length>0){if(o!=S(u))return;s.value=d}})})}function J(){if(n.value===!1){n.value=!0;return}let{async:t,value:o,dict:c}=e;t?(!i||!i.key||i.key!==o)&&P.get({url:`/sys/dict/loadDictItem/${c}`,params:{key:o}}).then(d=>{if(d&&d.length>0){let f={key:o,label:d};i.value=z({},f),e.immediateChange==!0&&a("change",o)}}):(r.value=o.toString(),e.immediateChange==!0&&a("change",o.toString()))}function K(){return k(this,null,function*(){let{dict:t,async:o,dictOptions:c,pageSize:d}=e;if(o){if(t){g.value=!0;let f=F("");P.get({url:`/sys/dict/loadDict/${t}`,params:{pageSize:d,keyword:f}}).then(m=>{g.value=!1,m&&m.length>0&&(s.value=m)})}}else if(c&&c.length>0)s.value=c;else{let f="";if(t){let m=t.split(",");if(m[0].indexOf("where")>0){let I=m[0].split("where");f=I[0].trim()+","+m[1]+","+m[2]+","+encodeURIComponent(I[1])}else f=t;const M=yield E(f);s.value=M}}})}function R(){return k(this,null,function*(){s.value=yield E(e.dict)})}function q(t){r.value=t,A()}function H(t){t?(i.value=t,r.value=t.key):(i.value=null,r.value=null,s.value=null,V("")),A()}function A(){n.value=!1,a("change",S(r)),a("update:value",S(r))}function Z(t,o){let c="",d="";try{c=o.value,d=o.children()[0].children}catch(m){}let f=t.toLowerCase();return c.toLowerCase().indexOf(f)>=0||d.toLowerCase().indexOf(f)>=0}function G(t){return e.popContainer?document.querySelector(e.popContainer):typeof e.getPopupContainer=="function"?e.getPopupContainer(t):t==null?void 0:t.parentNode}function F(t){if(e.params&&e.params.column&&e.params.order){let o=t||"";return o=o+"[orderby:"+e.params.column+","+e.params.order+"]",encodeURI(o)}else return t}return{attrs:w,options:s,loading:g,isDictTable:b,selectedValue:r,selectedAsyncValue:i,loadData:_(V,800),getParentContainer:G,filterOption:Z,handleChange:q,handleAsyncChange:H}}});function ie(e,a,l,s,g,w){const r=O("a-spin"),i=O("a-select-option"),u=O("a-select");return e.async?(v(),C(u,L({key:0},e.attrs,{value:e.selectedAsyncValue,"onUpdate:value":a[0]||(a[0]=n=>e.selectedAsyncValue=n),showSearch:"",labelInValue:"",allowClear:"",getPopupContainer:e.getParentContainer,placeholder:e.placeholder,filterOption:e.isDictTable?!1:e.filterOption,notFoundContent:e.loading?void 0:null,onSearch:e.loadData,onChange:e.handleAsyncChange}),{notFoundContent:y(()=>[te(r,{size:"small"})]),default:y(()=>[(v(!0),N(U,null,Y(e.options,n=>(v(),C(i,{key:n.value,value:n.value},{default:y(()=>[j(B(n.text),1)]),_:2},1032,["value"]))),128))]),_:1},16,["value","getPopupContainer","placeholder","filterOption","notFoundContent","onSearch","onChange"])):(v(),C(u,L({key:1,value:e.selectedValue,"onUpdate:value":a[1]||(a[1]=n=>e.selectedValue=n)},e.attrs,{showSearch:"",getPopupContainer:e.getParentContainer,placeholder:e.placeholder,filterOption:e.filterOption,notFoundContent:e.loading?void 0:null,dropdownAlign:{overflow:{adjustY:e.adjustY}},onChange:e.handleChange}),{notFoundContent:y(()=>[e.loading?(v(),C(r,{key:0,size:"small"})):ae("",!0)]),default:y(()=>[(v(!0),N(U,null,Y(e.options,n=>(v(),C(i,{key:n.value,value:n.value},{default:y(()=>[j(B(n.text),1)]),_:2},1032,["value"]))),128))]),_:1},16,["value","getPopupContainer","placeholder","filterOption","notFoundContent","dropdownAlign","onChange"]))}const pe=le(oe,[["render",ie]]);export{pe as default};
