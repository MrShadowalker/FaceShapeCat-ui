var g=(v,d,i)=>new Promise((f,p)=>{var o=t=>{try{r(i.next(t))}catch(c){p(c)}},s=t=>{try{r(i.throw(t))}catch(c){p(c)}},r=t=>t.done?f(t.value):Promise.resolve(t.value).then(o,s);r((i=i.apply(v,d)).next())});import{d as A,c as B,f as l,Y as k,a6 as u,a7 as w,k as N,a9 as P,u as n,F as M,ab as D,Z as F,a4 as z,a5 as G,n as E}from"./tinymce-vendor-3c2b3d6e.js";import{C as L,_ as R}from"./jeecg-online-vendor-f57c6456.js";import{_ as V}from"./index-d4a67b72.js";import{l as j,s as q}from"./depart.user.api-f634a469.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./index-37448b2d.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";const W={class:"bg-white m-4 mr-0 overflow-hidden"},Y=A({__name:"DepartTree",emits:["select"],setup(v,{emit:d}){const i=B("prefixCls"),f=d,{createMessage:p}=L();let o=l(!1),s=l([]),r=l([]),t=l([]),c=l(!0),h=l("2"),_=l(!1);function x(){o.value=!0,s.value=[],j().then(e=>{e.success?Array.isArray(e.result)&&(s.value=e.result,h.value=e.message,S()):p.warning(e.message)}).finally(()=>o.value=!1)}x();function S(){let e=[];s.value.forEach((a,y)=>{a.children&&a.children.length>0&&e.push(a.key),y===0&&m(a.id,a)}),e.length>0&&(T(),r.value=e)}function T(){return g(this,null,function*(){yield E(),_.value=!0,yield E(),_.value=!1})}function m(e,a){t.value=[e],a&&f("select",a)}function C(e){e?(o.value=!0,q({keyWord:e,myDeptSearch:"1"}).then(a=>{Array.isArray(a)?s.value=a:(p.warning("未查询到部门信息"),s.value=[])}).finally(()=>o.value=!1)):x()}function b(e,a){e.length>0&&t.value[0]!==e[0]?m(e[0],a.selectedNodes[0]):m(t.value[0])}function K(e){r.value=e,c.value=!1}return(e,a)=>{const y=k("a-empty"),I=k("a-spin");return u(),w("div",W,[N(I,{spinning:n(o)},{default:P(()=>[n(h)==="2"?(u(),w(M,{key:0},[n(_)?F("",!0):(u(),D(n(V),{key:0,title:"部门列表",toolbar:"",search:"",showLine:"",checkStrictly:!0,clickRowToExpand:!1,treeData:n(s),selectedKeys:n(t),expandedKeys:n(r),autoExpandParent:n(c),onSelect:b,onExpand:K,onSearch:C},null,8,["treeData","selectedKeys","expandedKeys","autoExpandParent"]))],64)):(u(),D(y,{key:1,description:"普通员工无此权限"}))]),_:1},8,["spinning"])])}}});const se=R(Y,[["__scopeId","data-v-892b3d18"]]);export{se as default};
