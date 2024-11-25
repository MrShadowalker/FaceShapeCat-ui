import{u as ge,G as ye,w as we,f as L,l as b}from"./tinymce-vendor-3c2b3d6e.js";import{C as ve,e as Te,w as Ce}from"./jeecg-online-vendor-f57c6456.js";import{bt as Le,R as P,j as ke}from"./antd-vue-vendor-05bfa84d.js";import"./index-64ecc8b2.js";import{a as Se}from"./index-563223fc.js";import{useListPage as Me}from"./useListPage-66651993.js";import{l as xe,a as _e,b as Pe,c as Ue,e as Oe,f as $e,g as De,d as Ee}from"./CgformModal-eccfc38e-6e7f6f2a.js";import{C as U}from"./clipboard-30e1f1e1.js";import{r as Ne,E as d}from"./index-37448b2d.js";import{h as je}from"./cgformState-d9f8ec42-a08af090.js";var Ie=Object.defineProperty,Be=Object.defineProperties,Re=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable,$=(n,o,a)=>o in n?Ie(n,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[o]=a,k=(n,o)=>{for(var a in o||(o={}))Ae.call(o,a)&&$(n,a,o[a]);if(O)for(var a of O(o))Ye.call(o,a)&&$(n,a,o[a]);return n},S=(n,o)=>Be(n,Re(o)),y=(n,o,a)=>new Promise((f,p)=>{var m=r=>{try{u(a.next(r))}catch(i){p(i)}},l=r=>{try{u(a.throw(r))}catch(i){p(i)}},u=r=>r.done?f(r.value):Promise.resolve(r.value).then(m,l);u((a=a.apply(n,o)).next())}),E=(n=>(n[n.normal=0]="normal",n[n.copy=1]="copy",n))(E||{});const M="copy-this-text",D="data-clipboard-text";function Je(){return{createCopyModal:Ge}}const{createMessage:T,createConfirm:qe}=ve();function Ge(n){var o,a,f,p,m;const l=ge(n.copyText),u=`INSERT INTO sys_permission(id, parent_id, name, url, component, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_route, is_leaf, keep_alive, hidden, hide_tab, description, status, del_flag, rule_flag, create_by, create_time, update_by, update_time, internal_or_external) 
                       VALUES ('${Ne()}', NULL, '${n.copyTitle}', '${l}', '1', NULL, NULL, 0, NULL, '1', 0.00, 0, NULL, 0, 1, 0, 0, 0, NULL, '1', 0, 0, 'admin', null, NULL, NULL, 0)`;let r=qe(S(k({},n),{iconType:(o=n.iconType)!=null?o:"info",width:(a=n.width)!=null?a:500,title:(f=n.title)!=null?f:"复制",closable:!0,maskClosable:(p=n.maskClosable)!=null?p:!0,cancelText:"复制SQL",okText:(m=n.okText)!=null?m:"复制URL",cancelButtonProps:{class:"copy-this-sql","data-clipboard-text":u},okButtonProps:S(k({},n.okButtonProps),{class:M,[D]:l}),onOk(){return new Promise(i=>{const s=new U("."+M);s.on("success",()=>{s.destroy(),T.success("复制URL成功"),i()}),s.on("error",()=>{T.error("该浏览器不支持自动复制"),s.destroy(),i()})})},onCancel(){return new Promise(i=>{const s=new U(".copy-this-sql");s.on("success",()=>{s.destroy(),T.success("复制插入菜单SQL成功"),i()}),s.on("error",()=>{T.error("该浏览器不支持自动复制"),s.destroy(),i()})})}}));return ye(n.copyText)&&we(n.copyText,i=>{r.update({okButtonProps:S(k({},n.okButtonProps),{class:M,[D]:i})})}),r}function nn(n){const o=n.pageType===E.normal,a=Te(),f=je(),p=Me({designScope:n.designScope,tableProps:{api:xe,columns:n.columns,formConfig:{schemas:n.formSchemas},beforeFetch:e=>{let t=o?0:1,c=o?void 0:a.currentRoute.value.params.code;return Ce(e.tableType_MultiString)&&(e.tableType_MultiString=e.tableType_MultiString.join(",")),Object.assign(e,{copyType:t,physicId:c})}}}),{tableContext:m,createMessage:l,createConfirm:u}=p,[,{reload:r,setLoading:i},{selectedRowKeys:s,selectedRows:h}]=m,[N,x]=d(),[j,I]=d(),[B,R]=d(),[A,Y]=d(),[J,q]=d(),[G,Q]=d(),[F,K]=d(),[V,z]=Se(),[H,W]=d();function X(){x.openModal(!0,{isUpdate:!1})}let g=null;function Z(e){g=e,x.openModal(!0,{isUpdate:!0,record:e})}function ee(){g!=null&&g.id&&(f.addChangedTable(g.id),g=null),r()}function ne(e){return y(this,null,function*(){yield _e(e),r()})}function oe(e){return y(this,null,function*(){yield Pe(e),r()})}function te(){let e=s.value;if(e.length<=0){l.warning("请先选择一条记录！");return}u({title:"删除",content:"<p>移除只会删除表单配置；<br>删除则会删除对应的数据库表以及子表且不能恢复。<br>请确认您的操作…</p>",iconType:"warning",closable:!0,okText:"移除",cancelText:"删除",cancelButtonProps:{danger:!0},onOk:()=>y(this,null,function*(){return _(Ue,e,!0)}),onCancel(t){return t!=null&&t.triggerCancel?Promise.resolve():_(Oe,e,!0)}})}function _(e,t,c=!1){return y(this,null,function*(){try{i(!0);const C=yield e(t);return r(),c&&(s.value=[]),C}finally{i(!1)}return Promise.reject()})}function ae(){w(([e])=>Y.openModal(!0,{row:e}))}function re(){w(([e])=>q.openModal(!0,{row:e}))}function le(){w(([e])=>Q.openModal(!0,{row:e}))}function ie(){w(([e])=>K.openModal(!0,{row:e}))}function se(){I.openModal(!0,{})}function w(e,t=1,c=1){h.value.length<t?l.warning(`请先至少选中 ${t} 条记录`):h.value.length>c?l.warning(`最多只能选中 ${t} 条记录`):e(h.value)}function ce(){if(h.value.length===0)l.warning("请先选中一条记录");else if(h.value.length>1)l.warning("代码生成只能选中一条记录");else{let e=h.value[0];e?e.isDbSynch!="Y"?l.warning("请先同步数据库！"):e.tableType==3?l.warning("请选中该表对应的主表"):R.openModal(!0,{code:e.id}):l.warning("请选中当前页的数据！")}}function ue(e){if(e.isTree=="Y")a.push({path:"/online/cgformTreeList/"+e.id});else switch(e.themeTemplate){case"erp":a.push({path:"/online/cgformErpList/"+e.id});break;case"tab":a.push({path:"/online/cgformTabList/"+e.id});break;case"innerTable":a.push({path:"/online/cgformInnerTableList/"+e.id});break;default:a.push({path:"/online/cgformList/"+e.id});break}}function pe(e){const t=L("normal"),c=L(!1),C=u({iconType:"info",title:"同步数据库",content:()=>b("div",{style:"margin: 20px 0;"},b(Le,{value:t.value,disabled:c.value,"onUpdate:value":v=>t.value=v},()=>[b(P,{value:"normal"},()=>"普通同步（保留表数据）"),b(P,{value:"force"},()=>"强制同步（删除表，重新生成）")])),maskClosable:!0,okText:"开始同步",onOk(){return y(this,null,function*(){c.value=!0,C.update({maskClosable:!1,keyboard:!1,okText:"同步中…",okButtonProps:{loading:c.value},cancelButtonProps:{disabled:c.value}});try{yield $e(e.id,t.value)}catch(v){l.warn(v.message||v)}finally{r()}})}})}const{createCopyModal:de}=Je();function fe(e){let t;e.themeTemplate==="erp"?t=`/online/cgformErpList/${e.id}`:e.themeTemplate==="innerTable"?t=`/online/cgformInnerTableList/${e.id}`:e.themeTemplate==="tab"?t=`/online/cgformTabList/${e.id}`:e.isTree=="Y"?t=`/online/cgformTreeList/${e.id}`:t=`/online/cgformList/${e.id}`,de({title:`菜单链接【${e.tableTxt}】`,content:t,copyText:t,copyTitle:`${e.tableTxt}`})}function me(e){const t=L(e.tableName+"_copy");u({title:"复制表",content:()=>b("div",{style:"margin: 20px 0;"},["请输入新表名：",b(ke,{value:t.value,"onUpdate:value":c=>t.value=c})]),iconType:"info",closable:!0,okText:"复制",onOk(){t.value?t.value===e.tableName?l.warning("新表名和旧表名不能一致"):De(e.id,t.value).then(r):l.warning("请输入新表名")}})}function he(e){return[{label:"编辑",onClick:()=>Z(e)}]}function be(e){return[{label:"同步数据库",onClick:()=>pe(e),ifShow:()=>o&&e.isDbSynch!="Y"},{label:"功能测试",class:["low-app-hide"],onClick:()=>ue(e),ifShow:()=>o?e.isDbSynch=="Y"&&e.tableType!==3:!0},{label:"配置地址",class:["low-app-hide"],onClick:()=>fe(e),ifShow:()=>o?e.isDbSynch=="Y"&&e.tableType!==3:!0},{label:"权限控制",onClick:()=>z.openDrawer(!0,{cgformId:e.id})},{label:"角色授权",onClick:()=>W.openModal(!0,{cgformId:e.id})},{label:"视图管理",class:["low-app-hide"],onClick:()=>a.push(`/online/copyform/${e.id}`),ifShow:()=>o&&e.hascopy==1},{label:"生成视图",class:["low-app-hide"],popConfirm:{title:"确定生成视图吗？",placement:"left",confirm:()=>{i(!0),Ee(e.id).then(()=>{l.success("已成功生成视图")}).finally(()=>{i(!1),r()})}},ifShow:()=>o},{label:"复制表",onClick:()=>me(e),ifShow:()=>o},{label:"移除",popConfirm:{title:"确定移除吗？",placement:"left",confirm:()=>oe(e.id)}},{label:"删除",popConfirm:{title:"确定删除吗？",placement:"left",confirm:()=>ne(e.id)},ifShow:()=>o}]}return{router:a,pageContext:p,onAdd:X,onSuccess:ee,onDeleteBatch:te,onImportDbTable:se,onGenerateCode:ce,onShowCustomButton:ae,onShowEnhanceJs:re,onShowEnhanceSql:le,onShowEnhanceJava:ie,getTableAction:he,getDropDownAction:be,registerCustomButtonModal:A,registerEnhanceJsModal:J,registerEnhanceSqlModal:G,registerEnhanceJavaModal:F,registerAuthManagerDrawer:V,registerAuthSetterModal:H,registerCgformModal:N,registerDbToOnlineModal:j,registerCodeGeneratorModal:B}}export{E as P,nn as a};