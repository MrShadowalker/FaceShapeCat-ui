var Se=Object.defineProperty,Ae=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var se=(t,n,o)=>n in t?Se(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,ae=(t,n)=>{for(var o in n||(n={}))xe.call(n,o)&&se(t,o,n[o]);if(oe)for(var o of oe(n))Ce.call(n,o)&&se(t,o,n[o]);return t},re=(t,n)=>Ae(t,ve(n));var L=(t,n,o)=>new Promise((A,a)=>{var m=s=>{try{i(o.next(s))}catch(r){a(r)}},y=s=>{try{i(o.throw(s))}catch(r){a(r)}},i=s=>s.done?A(s.value):Promise.resolve(s.value).then(m,y);i((o=o.apply(t,n)).next())});import{d as z,e as X,Y as R,a6 as g,ab as S,a9 as u,k as p,E as h,ad as E,Z as j,f as B,a7 as q,ae as ie,af as le,F as ce,l as Q,o as Ie,u as c,ac as pe,a4 as ot,a5 as st}from"./tinymce-vendor-3c2b3d6e.js";import"./index-0f0d0317.js";import{M as K,bo as Le}from"./antd-vue-vendor-05bfa84d.js";import{br as ue,ap as de,C as ye,_ as fe,u as Ue,an as Me}from"./jeecg-online-vendor-f57c6456.js";import Re from"./UserQuitAgentModal-dc006773.js";import Ee from"./UserQuitModal-6a86a171.js";import{a as Be}from"./index-563223fc.js";import{useListPage as De}from"./useListPage-66651993.js";import"./index-64ecc8b2.js";import{f as $e,u as Fe}from"./user.api-367a7bce.js";import{u as Ne,a as Qe}from"./user.data-dbf79b1f.js";import{U as je}from"./JSelectUser-6efbe652.js";import{c as ze}from"./UserSetting.api-24e5eb9b.js";import{g as Oe}from"./tenant.api-77d3d470.js";import Pe from"./TenantUserDrawer-8d3b717c.js";import{E as J,aL as He}from"./index-37448b2d.js";import{Q as Ke}from"./index-2ad3f236.js";import Je from"./BasicTable-400bb95b.js";import"./vxe-table-vendor-26792376.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./injectionKey-69710956.js";import"./validator-a0d2ebc7.js";import"./renderUtils-59564de6.js";import"./tenant.data-94edcbd7.js";const ge={getEnabledType:"/sys/thirdApp/getEnabledType",wechatEnterprise:{user:"/sys/thirdApp/sync/wechatEnterprise/user",depart:"/sys/thirdApp/sync/wechatEnterprise/depart"},dingtalk:{user:"/sys/thirdApp/sync/dingtalk/user",depart:"/sys/thirdApp/sync/dingtalk/depart"}};let V=null;const Ve=()=>L(void 0,null,function*(){if(V!=null)return ue(V);{let{success:t,result:n}=yield de.get({url:ge.getEnabledType},{isTransformResponse:!1});if(t)return V=ue(n),n}return{}}),me=z({__name:"JThirdAppDropdown",props:{type:String,name:String,syncToApp:Boolean,syncToLocal:Boolean},emits:["to-app","to-local"],setup(t,{emit:n}){const o=t,A=n,a=X(()=>o.type==="wechatEnterprise"?!1:o.syncToLocal);function m(y){A(y.key,{type:o.type})}return(y,i)=>{const s=R("a-button"),r=R("a-menu-item"),v=R("a-menu"),D=R("a-dropdown");return t.syncToApp&&t.syncToLocal?(g(),S(D,{key:0},{overlay:u(()=>[p(v,{onClick:m},{default:u(()=>[t.syncToApp?(g(),S(r,{key:"to-app"},{default:u(()=>[h("同步到"+E(t.name),1)]),_:1})):j("",!0),a.value?(g(),S(r,{key:"to-local"},{default:u(()=>[h("同步到本地")]),_:1})):j("",!0)]),_:1})]),default:u(()=>[p(s,{type:"primary",preIcon:"ant-design:sync-outlined"},{default:u(()=>[h("同步"+E(t.name),1)]),_:1})]),_:1})):t.syncToApp?(g(),S(s,{key:1,type:"primary",preIcon:"ant-design:sync-outlined",onClick:i[0]||(i[0]=x=>m({key:"to-app"}))},{default:u(()=>[h("同步"+E(t.name),1)]),_:1})):(g(),S(s,{key:2,type:"primary",preIcon:"ant-design:sync-outlined",onClick:i[1]||(i[1]=x=>m({key:"to-local"}))},{default:u(()=>[h("同步"+E(t.name)+"到本地",1)]),_:1}))}}}),Xe=z({__name:"JThirdAppButton",props:{bizType:{type:String,required:!0},syncToApp:Boolean,syncToLocal:Boolean,selectedRowKeys:Array},emits:["sync-ok","sync-error","sync-finally"],setup(t,{emit:n}){const{createMessage:o,createWarningModal:A}=ye(),a=t,m=n,y=B({}),i=X(()=>({syncToApp:a.syncToApp,syncToLocal:a.syncToLocal})),s=X(()=>({"to-app":r,"to-local":v}));function r(f){x(f.type,"/toApp")}function v(f){x(f.type,"/toLocal")}function D(){return L(this,null,function*(){y.value=yield Ve()})}function x(f,T){let _=ge[f];if(!(_&&_[a.bizType]))return;let G=_[a.bizType]+T,b=a.selectedRowKeys,P="确定要开始同步全部数据吗？可能花费较长时间！";return Array.isArray(b)&&b.length>0?P=`确定要开始同步这 ${b.length} 项吗？`:b=[],new Promise(($,W)=>{const F=K.confirm({icon:p(Le),title:"同步",content:P,onOk:()=>{F.update({keyboard:!1,okText:"同步中…",cancelButtonProps:{disabled:!0}});let H={ids:b.join(",")};return de.get({url:G,params:H},{isTransformResponse:!1}).then(d=>{let k={};d.result&&(k={width:600,title:d.message,content:()=>{let U,N=["成功信息如下：",O(Q,d.result.successInfo.map((M,C)=>`${C+1}. ${M}`).join(`
`))];return d.success?U=[...N,Q("br"),"无失败信息！"]:U=["失败信息如下：",O(Q,d.result.failInfo.map((M,C)=>`${C+1}. ${M}`).join(`
`)),Q("br"),...N],U}}),d.success?(k!=null?K.success(k):o.warning(d.message),m("sync-ok")):(k!=null?K.warning(k):o.warning(d.message),m("sync-error"))}).catch(()=>F.destroy()).finally(()=>{$(),m("sync-finally",{type:f,direction:T,isToApp:T==="/toApp",isToLocal:T==="/toLocal"})})},onCancel(){$()}})})}function O(f,T){return f("div",{id:"box",style:{minHeight:"100px",border:"1px solid #d9d9d9",fontSize:"14px",maxHeight:"250px",whiteSpace:"pre",overflow:"auto",padding:"10px"}},T)}return D(),(f,T)=>t.syncToApp||t.syncToLocal?(g(),q(ce,{key:0},[y.value.wechatEnterprise?(g(),S(me,ie({key:0,type:"wechatEnterprise",name:"企微"},i.value,le(s.value)),null,16)):j("",!0),y.value.dingtalk?(g(),S(me,ie({key:1,type:"dingtalk",name:"钉钉"},i.value,le(s.value)),null,16)):j("",!0)],64)):(g(),q(ce,{key:1},[h("未设置任何同步方向")],64))}});const qe=fe(Xe,[["__scopeId","data-v-d8023e59"]]);const Ge={style:{"margin-left":"10px","margin-top":"5px"}},We={class:"tenant-name"},Ye=z({name:"tenant-system-user"}),Ze=z(re(ae({},Ye),{setup(t){const{createMessage:n,createConfirm:o}=ye(),[A,{openDrawer:a}]=Be(),[m,{openModal:y}]=J(),[i,{openModal:s}]=J(),r=Ue(),v=r.getUserInfo.username,{prefixCls:D,tableContext:x,onExportXls:O,onImportXls:f}=De({designScope:"user-list",tableProps:{title:"租户用户列表",api:$e,columns:Ne,size:"small",formConfig:{schemas:Qe},actionColumn:{width:120},beforeFetch:e=>(e.userTenantStatus="1,3,4",Object.assign({column:"createTime",order:"desc"},e))}}),[T,{reload:_,updateTableDataRecord:G},{rowSelection:b,selectedRows:P,selectedRowKeys:$}]=x;function W(){a(!0,{isUpdate:!1,showFooter:!0,tenantSaas:!0})}function F(e){return L(this,null,function*(){a(!0,{record:e,isUpdate:!0,showFooter:!0,tenantSaas:!0})})}function H(e){return L(this,null,function*(){a(!0,{record:e,isUpdate:!0,showFooter:!1,tenantSaas:!0})})}function d(){_()}function k({isToLocal:e}){e&&_()}function U(e){return[{label:"编辑",onClick:F.bind(null,e)}]}function N(e){return[{label:"详情",onClick:H.bind(null,e)},{label:"离职",onClick:M.bind(null,e.username,e.id),ifShow:()=>e.status==="1"&&e.username!==e.createBy},{label:"交接",onClick:he.bind(null,e),ifShow:()=>e.username===e.createBy},{label:"同意",onClick:C.bind(null,e.id,"1"),ifShow:()=>(e.status==="3"||e.status==="4")&&e.createBy===v},{label:"拒绝",popConfirm:{title:"是否确认拒绝",confirm:C.bind(null,e.id,"4")},ifShow:()=>e.status==="3"&&e.createBy===v}]}function M(e,l){y(!0,{userName:e,userId:l})}function C(e,l){Fe({userId:e,status:l}).then(w=>{w.success&&d()}).catch(w=>{n.warning(w.message)})}const Y=B(""),Z=B([]),[Te,{openModal:_e}]=J(),ee=B("");function he(e){Y.value=Me(),Z.value=[e.id],ee.value=e.createBy,_e(!0)}function we(e,l){if(l&&l.length>0){let w=l[0];ze({userId:w,tenantId:c(Y)}).then(I=>{var ne;I.success?(n.success("交接成功"),((ne=r.userInfo)==null?void 0:ne.username)==ee.value?r.logout(!0):_()):n.warning(I.message)})}}const te=B("");be();function be(){return L(this,null,function*(){te.value=yield Oe()})}function ke(e){let l=r.getUserInfo.username;l&&e===l?(r.setTenant(null),window.location.reload()):_()}return Ie(()=>{He("租户用户")}),(e,l)=>{const w=R("a-button");return g(),q("div",null,[p(c(Je),{onRegister:c(T),rowSelection:c(b)},{tableTitle:u(()=>[p(w,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:W},{default:u(()=>[h(" 新增")]),_:1}),p(qe,{"biz-type":"user","selected-row-keys":c($),syncToApp:"",syncToLocal:"",onSyncFinally:k},null,8,["selected-row-keys"]),p(w,{type:"primary",onClick:l[0]||(l[0]=I=>c(s)(!0,{})),preIcon:"ant-design:user-delete-outlined"},{default:u(()=>[h("离职信息")]),_:1}),pe("div",Ge,[h(" 当前登录租户: "),pe("span",We,E(te.value),1)])]),action:u(({record:I})=>[p(c(Ke),{actions:U(I),dropDownActions:N(I)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister","rowSelection"]),p(Pe,{onRegister:c(A),onSuccess:d},null,8,["onRegister"]),p(Re,{onRegister:c(m),onSuccess:ke},null,8,["onRegister"]),p(Ee,{onRegister:c(i),onSuccess:c(_)},null,8,["onRegister","onSuccess"]),p(je,{onRegister:c(Te),excludeUserIdList:Z.value,maxSelectCount:1,onGetSelectResult:we},null,8,["onRegister","excludeUserIdList"])])}}}));const wn=fe(Ze,[["__scopeId","data-v-67a61139"]]);export{wn as default};