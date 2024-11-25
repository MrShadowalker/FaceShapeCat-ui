var N=Object.defineProperty,U=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var y=(e,t,o)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,b=(e,t)=>{for(var o in t||(t={}))A.call(t,o)&&y(e,o,t[o]);if(h)for(var o of h(t))K.call(t,o)&&y(e,o,t[o]);return e},C=(e,t)=>U(e,V(t));var s=(e,t,o)=>new Promise((k,c)=>{var a=r=>{try{l(o.next(r))}catch(p){c(p)}},g=r=>{try{l(o.throw(r))}catch(p){c(p)}},l=r=>r.done?k(r.value):Promise.resolve(r.value).then(a,g);l((o=o.apply(e,t)).next())});import{d as T,Y as L,a6 as w,a7 as O,k as u,a9 as d,E as M,u as n,ab as D,Z as Q}from"./tinymce-vendor-3c2b3d6e.js";import"./index-0f0d0317.js";import"./index-64ecc8b2.js";import{p as Y,k as x}from"./tenant.api-77d3d470.js";import{p as Z,d as $}from"./tenant.data-94edcbd7.js";import q from"./TenantPackMenuModal-c3aa7ab5.js";import{u as z,C as G}from"./jeecg-online-vendor-f57c6456.js";import{useListPage as H}from"./useListPage-66651993.js";import{M as J}from"./antd-vue-vendor-05bfa84d.js";import{E as S}from"./index-37448b2d.js";import{Q as W}from"./index-2ad3f236.js";import X from"./BasicTable-400bb95b.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./vxe-table-vendor-26792376.js";import"./renderUtils-59564de6.js";import"./index-13e7f179.js";import"./validator-a0d2ebc7.js";import"./user.api-367a7bce.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./injectionKey-69710956.js";const tt=T({name:"tenant-default-pack"}),go=T(C(b({},tt),{setup(e){const{createMessage:t}=G(),[o,{openModal:k}]=S(),[c,{openModal:a}]=S(),g=z(),{prefixCls:l,tableContext:r}=H({designScope:"tenant-template",tableProps:{api:Y,columns:Z,formConfig:{schemas:$},beforeFetch:i=>Object.assign(i,{packType:"default"})}}),[p,{reload:P},{rowSelection:R,selectedRowKeys:m,selectedRows:ot}]=r;function v(i){return[{label:"编辑",onClick:F.bind(null,i)},{label:"删除",popConfirm:{title:"是否确认删除租户产品包",confirm:E.bind(null,i.id)}}]}function B(){a(!0,{isUpdate:!1,packType:"default",showFooter:!0})}function E(i){return s(this,null,function*(){yield x({ids:i},f)})}function F(i){a(!0,{isUpdate:!0,record:i,packType:"default",showFooter:!0})}function et(){return s(this,null,function*(){if(n(m).length>1){t.warn("请选择一个");return}a(!0,{tenantId:n(m.value.join(","))})})}function f(){(m.value=[])&&P()}function j(){return s(this,null,function*(){J.confirm({title:"删除租户产品包",content:"是否删除租户产品包",okText:"确认",cancelText:"取消",onOk:()=>s(this,null,function*(){yield x({ids:m.value.join(",")},f)})})})}return(i,rt)=>{const _=L("a-button");return w(),O("div",null,[u(n(X),{onRegister:n(p),rowSelection:n(R)},{tableTitle:d(()=>[u(_,{preIcon:"ant-design:user-add-outlined",type:"primary",onClick:B},{default:d(()=>[M("新增")]),_:1}),n(m).length>0?(w(),D(_,{key:0,preIcon:"ant-design:delete-outlined",type:"primary",onClick:j,style:{"margin-right":"5px"}},{default:d(()=>[M("批量删除 ")]),_:1})):Q("",!0)]),action:d(({record:I})=>[u(n(W),{actions:v(I)},null,8,["actions"])]),_:1},8,["onRegister","rowSelection"]),u(q,{onRegister:n(c),onSuccess:f},null,8,["onRegister"])])}}}));export{go as default};
