var X=Object.defineProperty,z=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var R=(e,t,o)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,S=(e,t)=>{for(var o in t||(t={}))Q.call(t,o)&&R(e,o,t[o]);if(x)for(var o of x(t))Y.call(t,o)&&R(e,o,t[o]);return e},D=(e,t)=>z(e,H(t));var b=(e,t,o)=>new Promise((_,u)=>{var f=a=>{try{m(o.next(a))}catch(c){u(c)}},g=a=>{try{m(o.throw(a))}catch(c){u(c)}},m=a=>a.done?_(a.value):Promise.resolve(a.value).then(f,g);m((o=o.apply(e,t)).next())});import{d as v,Y as s,a6 as I,a7 as Z,k as i,a9 as r,E as h,u as l,ab as $,Z as q,aj as G,ac as A}from"./tinymce-vendor-3c2b3d6e.js";import"./index-0f0d0317.js";import{useListPage as J}from"./useListPage-66651993.js";import{_ as O,g as W,c as oo,s as to,e as eo,i as no,d as io,b as ro,h as lo}from"./FillRuleModal-7d51c63b.js";import"./index-64ecc8b2.js";import{E as ao}from"./index-37448b2d.js";import{Q as po}from"./index-2ad3f236.js";import so from"./BasicTable-400bb95b.js";import"./antd-vue-vendor-05bfa84d.js";import"./jeecg-online-vendor-f57c6456.js";import"./vxe-table-vendor-26792376.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./injectionKey-69710956.js";import"./user.api-367a7bce.js";const mo=A("span",null,"删除",-1),co=A("span",null,"批量操作",-1),uo=v({name:"system-fillrule"}),kt=v(D(S({},uo),{setup(e){const[t,{openModal:o}]=ao(),{prefixCls:_,tableContext:u,createMessage:f,createSuccessModal:g,onExportXls:m,onImportXls:a}=J({designScope:"fill-rule",tableProps:{title:"填值规则管理页面",api:W,columns:oo,showIndexColumn:!0,formConfig:{schemas:to}},exportConfig:{url:eo,name:"填值规则列表"},importConfig:{url:no,success:()=>d()}}),[c,{reload:d},{rowSelection:E,selectedRowKeys:C}]=u;function M(){o(!0,{isUpdate:!1})}function T(n){o(!0,{record:n,isUpdate:!0})}function B(n){return b(this,null,function*(){yield io({id:n.id},d)})}function F(){return b(this,null,function*(){yield ro({ids:C.value},()=>{C.value=[],d()})})}function N(n){let w={ruleCode:n.ruleCode};lo(w).then(p=>{p.success?g({title:"填值规则功能测试",content:"生成结果："+p.result}):f.warn(p.message)})}function U(n){return[{label:"编辑",onClick:T.bind(null,n)}]}function V(n){return[{label:"功能测试",onClick:N.bind(null,n)},{label:"删除",color:"error",popConfirm:{title:"确认要删除吗？",confirm:B.bind(null,n)}}]}return(n,w)=>{const p=s("a-button"),j=s("j-upload-button"),k=s("Icon"),K=s("a-menu-item"),L=s("a-menu"),P=s("a-dropdown");return I(),Z("div",{class:G(l(_))},[i(l(so),{onRegister:l(c),rowSelection:l(E)},{tableTitle:r(()=>[i(p,{preIcon:"ant-design:plus-outlined",type:"primary",onClick:M},{default:r(()=>[h("新增")]),_:1}),i(p,{type:"primary",preIcon:"ant-design:export-outlined",onClick:l(m)},{default:r(()=>[h(" 导出")]),_:1},8,["onClick"]),i(j,{type:"primary",preIcon:"ant-design:import-outlined",onClick:l(a)},{default:r(()=>[h("导入")]),_:1},8,["onClick"]),l(C).length>0?(I(),$(P,{key:0},{overlay:r(()=>[i(L,null,{default:r(()=>[i(K,{key:"1",onClick:F},{default:r(()=>[i(k,{icon:"ant-design:delete-outlined"}),mo]),_:1})]),_:1})]),default:r(()=>[i(p,null,{default:r(()=>[co,i(k,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):q("",!0)]),action:r(({record:y})=>[i(l(po),{actions:U(y),dropDownActions:V(y)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","rowSelection"]),i(O,{onRegister:l(t),onSuccess:l(d)},null,8,["onRegister","onSuccess"])],2)}}}));export{kt as default};