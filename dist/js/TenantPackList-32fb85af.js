var H=Object.defineProperty,J=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var P=(i,o,e)=>o in i?H(i,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[o]=e,A=(i,o)=>{for(var e in o||(o={}))X.call(o,e)&&P(i,e,o[e]);if(M)for(var e of M(o))tt.call(o,e)&&P(i,e,o[e]);return i},v=(i,o)=>J(i,W(o));var s=(i,o,e)=>new Promise((p,d)=>{var g=r=>{try{f(e.next(r))}catch(m){d(m)}},a=r=>{try{f(e.throw(r))}catch(m){d(m)}},f=r=>r.done?p(r.value):Promise.resolve(r.value).then(g,a);f((e=e.apply(i,o)).next())});import{d as F,f as T,r as et,Y as ot,a6 as C,a7 as nt,k as c,a9 as u,u as n,ab as R,E as I,Z as S,ae as it,F as rt}from"./tinymce-vendor-3c2b3d6e.js";import{B as at}from"./index-64ecc8b2.js";import{p as st,d as pt}from"./tenant.data-94edcbd7.js";import{p as mt,k as B}from"./tenant.api-77d3d470.js";import{useListPage as lt}from"./useListPage-66651993.js";import"./index-0f0d0317.js";import ct from"./TenantPackMenuModal-c3aa7ab5.js";import{M as ut}from"./antd-vue-vendor-05bfa84d.js";import dt from"./TenantPackUserModal-7d588c47.js";import{C as ft}from"./jeecg-online-vendor-f57c6456.js";import{E as O,C as kt}from"./index-37448b2d.js";import gt from"./BasicTable-400bb95b.js";import{Q as ht}from"./index-2ad3f236.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./vxe-table-vendor-26792376.js";import"./renderUtils-59564de6.js";import"./index-13e7f179.js";import"./validator-a0d2ebc7.js";import"./user.api-367a7bce.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./injectionKey-69710956.js";import"./TenantUserSelectModal-d5b093ba.js";const wt=F({name:"tenant-pack-modal"}),Fe=F(v(A({},wt),{emits:["register","success"],setup(i,{emit:o}){const[e,{openModal:p}]=O(),[d,{openModal:g}]=O(),a=T(0),{prefixCls:f,tableContext:r}=lt({designScope:"tenant-template",tableProps:{api:mt,columns:st,immediate:!1,formConfig:{schemas:pt,labelCol:{xxl:8},actionColOptions:{xs:24,sm:8,md:8,lg:8,xl:8,xxl:8}},beforeFetch:t=>Object.assign(t,{tenantId:n(a),packType:"custom"})}}),[m,{reload:U},{rowSelection:D,selectedRowKeys:h,selectedRows:E}]=r,Ct=o,w=T(!1),[N,{setModalProps:bt,closeModal:V}]=kt(t=>s(this,null,function*(){a.value=t.tenantId,w.value=t.showPackAddAndEdit,l()})),j="租户产品包列表";function K(t){return s(this,null,function*(){V()})}function L(t){return[{label:"用户",onClick:q.bind(null,t)},{label:"编辑",onClick:$.bind(null,t),ifShow:()=>w.value}]}function l(){(h.value=[])&&U()}function $(t){return s(this,null,function*(){p(!0,{isUpdate:!0,record:t,tenantId:n(a),packType:"custom",showFooter:!0})})}const b=et(["superAdmin","accountAdmin","appAdmin"]),{createMessage:y}=ft();function Q(t){return s(this,null,function*(){if(b.indexOf(t.packCode)!=-1){y.warning("默认系统产品包不允许删除");return}yield B({ids:t.id},l)})}function Y(){return s(this,null,function*(){let t=E.value;if(t&&t.length>0){for(let k=0;k<t.length;k++)if(b.indexOf(t[k].packCode)!=-1){y.warning("默认系统产品包不允许删除");return}}ut.confirm({title:"删除租户产品包",content:"是否删除租户产品包",okText:"确认",cancelText:"取消",onOk:()=>s(this,null,function*(){yield B({ids:h.value.join(",")},l)})})})}function Z(){p(!0,{isUpdate:!1,tenantId:n(a),packType:"custom",showFooter:!0})}function q(t){g(!0,{record:t})}function z(t){return[{label:"详情",onClick:G.bind(null,t)},{label:"删除",popConfirm:{title:"是否确认删除租户产品包",confirm:Q.bind(null,t)}}]}function G(t){p(!0,{isUpdate:!0,record:t,tenantId:n(a),packType:"custom",showFooter:!1})}return(t,k)=>{const x=ot("a-button");return C(),nt(rt,null,[c(n(at),it(t.$attrs,{onRegister:n(N),title:j,onOk:K,width:"800px",showCancelBtn:!1,showOkBtn:!1}),{default:u(()=>[c(n(gt),{onRegister:n(m),rowSelection:n(D)},{tableTitle:u(()=>[w.value?(C(),R(x,{key:0,preIcon:"ant-design:plus-outlined",type:"primary",onClick:Z,style:{"margin-right":"5px"}},{default:u(()=>[I("新增 ")]),_:1})):S("",!0),n(h).length>0?(C(),R(x,{key:1,preIcon:"ant-design:delete-outlined",type:"primary",onClick:Y,style:{"margin-right":"5px"}},{default:u(()=>[I("批量删除 ")]),_:1})):S("",!0)]),action:u(({record:_})=>[c(n(ht),{actions:L(_),dropDownActions:z(_)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","rowSelection"])]),_:1},16,["onRegister"]),c(ct,{onRegister:n(e),onSuccess:l},null,8,["onRegister"]),c(dt,{onRegister:n(d),onSuccess:l},null,8,["onRegister"])],64)}}}));export{Fe as default};
