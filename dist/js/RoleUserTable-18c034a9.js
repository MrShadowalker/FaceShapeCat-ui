var l=(d,b,m)=>new Promise((h,n)=>{var a=i=>{try{f(m.next(i))}catch(c){n(c)}},w=i=>{try{f(m.throw(i))}catch(c){n(c)}},f=i=>i.done?h(i.value):Promise.resolve(i.value).then(a,w);f((m=m.apply(d,b)).next())});import{d as A,f as I,Y as u,a6 as R,ab as y,a9 as t,k as o,E as _,Z as S,u as s}from"./tinymce-vendor-3c2b3d6e.js";import{u as H}from"./index-0f0d0317.js";import{u as Q,a as Y,B as Z}from"./index-563223fc.js";import"./index-64ecc8b2.js";import q from"./UserDrawer-e0d93f1a.js";import G from"./UseSelectModal-05b1bdb0.js";import{u as J,c as X,e as ee,f as te}from"./role.api-90341a61.js";import{u as oe,b as re}from"./role.data-0ec7d709.js";import{g as ie}from"./user.api-367a7bce.js";import{E as ne}from"./index-37448b2d.js";import{Q as ae}from"./index-2ad3f236.js";import se from"./BasicTable-400bb95b.js";import{_ as le}from"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./vxe-table-vendor-26792376.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./user.data-dbf79b1f.js";import"./validator-a0d2ebc7.js";import"./renderUtils-59564de6.js";import"./useAdaptiveWidth-a0286c92.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./injectionKey-69710956.js";const me=A({__name:"RoleUserTable",props:{disableUserEdit:{type:Boolean,default:!1}},emits:["register","hideUserList"],setup(d,{emit:b}){const m=b,h=d,n=I([]),a=I(""),[w,{setDrawerProps:f,closeDrawer:i}]=Q(e=>l(this,null,function*(){a.value=e.id,T({searchInfo:{roleId:e.id}}),p()})),[c,{openDrawer:C}]=Y(),[U,{openModal:v}]=ne(),[x,{reload:p,updateTableDataRecord:D,setProps:T}]=H({title:"用户列表",api:J,columns:oe,formConfig:{labelWidth:60,schemas:re,autoSubmitOnEnter:!0},striped:!0,useSearchForm:!0,showTableSetting:!0,clickToRowSelect:!1,bordered:!0,showIndexColumn:!1,tableSetting:{fullScreen:!0},canResize:!1,rowKey:"id",actionColumn:{width:180,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}}),E={type:"checkbox",columnWidth:50,selectedRowKeys:n,onChange:B};function B(e,r){n.value=e}function K(){C(!0,{isUpdate:!1,selectedroles:[a.value],isRole:!0})}function L(e){return l(this,null,function*(){try{const r=yield ie({userid:e.id});r&&r.length>0&&(e.selectedroles=r)}catch(r){}C(!0,{record:e,isUpdate:!0,isRole:!0})})}function M(e){return l(this,null,function*(){yield X({userId:e.id,roleId:a.value},p)})}function N(){return l(this,null,function*(){yield ee({userIds:n.value.join(","),roleId:a.value},p)})}function O({isUpdate:e,values:r}){e?D(r.id,r):p()}function V(){v(!0)}function F(e){return l(this,null,function*(){yield te({roleId:a.value,userIdList:e},p)})}function P(e){return[{label:"编辑",onClick:L.bind(null,e),ifShow:()=>!h.disableUserEdit},{label:"取消关联",popConfirm:{title:"是否确认取消关联",confirm:M.bind(null,e)}}]}return(e,r)=>{const g=u("a-button"),k=u("Icon"),W=u("a-menu-item"),$=u("a-menu"),j=u("a-dropdown");return R(),y(s(Z),{onRegister:s(w),title:"角色用户",width:"800",destroyOnClose:""},{default:t(()=>[o(s(se),{onRegister:s(x),rowSelection:E},{tableTitle:t(()=>[d.disableUserEdit?S("",!0):(R(),y(g,{key:0,type:"primary",onClick:K},{default:t(()=>[_(" 新增用户")]),_:1})),o(g,{type:"primary",onClick:V},{default:t(()=>[_(" 已有用户")]),_:1}),n.value.length>0?(R(),y(j,{key:1},{overlay:t(()=>[o($,null,{default:t(()=>[o(W,{key:"1",onClick:N},{default:t(()=>[o(k,{icon:"bx:bx-unlink"}),_(" 取消关联 ")]),_:1})]),_:1})]),default:t(()=>[o(g,null,{default:t(()=>[_("批量操作 "),o(k,{icon:"ant-design:down-outlined"})]),_:1})]),_:1})):S("",!0)]),action:t(({record:z})=>[o(s(ae),{actions:P(z)},null,8,["actions"])]),_:1},8,["onRegister"]),o(q,{onRegister:s(c),onSuccess:O},null,8,["onRegister"]),o(G,{onRegister:s(U),onSelect:F},null,8,["onRegister"])]),_:1},8,["onRegister"])}}});const It=le(me,[["__scopeId","data-v-20dcdc2a"]]);export{It as default};