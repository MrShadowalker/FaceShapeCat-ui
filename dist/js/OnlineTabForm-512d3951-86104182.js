import{C as ht,ap as ee,bx as gt,ao as yt,bv as vt,bs as Ft}from"./jeecg-online-vendor-f57c6456.js";import{f,r as kt,u as he,n as ge,I as V,e as St,w as Tt,Y as y,a6 as F,a7 as _,k,Z as U,a9 as j,ab as J,F as wt,aa as Ct,ao as Pt,Q as Ot}from"./tinymce-vendor-3c2b3d6e.js";import"./index-09260ce4.js";import{$ as xt,N as Rt,j as Dt,a as Vt,B as jt,Z as q,D as Mt,R as E,W as At,u as Bt,U as ye}from"./useExtendComponent-325fe3f1-007b9393.js";import{br as $t,bs as _t,ar as Et,p as It,o as ve}from"./antd-vue-vendor-05bfa84d.js";import{ae as Kt,E as Nt}from"./index-37448b2d.js";import"./index-64ecc8b2.js";import{I as Ut,g as Jt}from"./useCustomHook-acb00837-32b1f38e.js";import"./componentMap-e2e33057.js";import"./constant-754f1a9d-eadfd1e1.js";import"./index-8e09cdad.js";import"./user.api-367a7bce.js";import"./customExpression-b2f1ff9b.js";import"./index-0f0d0317.js";import"./useListPage-66651993.js";import"./index-76418551.js";import"./LinkTableListPiece-8499a318-01ebb291.js";import"./OnlineSelectCascade-4265c95d-4cbe6ffe.js";import"./JModalTip-33c7dc44-1741a3e9.js";import{B as qt,u as Wt}from"./useForm-df7d93c5.js";import"./vxe-table-vendor-26792376.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useFormItem-613b6d5d.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JPopup-8248ac78.js";import"./JEllipsis-242e7bd0.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JTreeSelect-73cfd2cd.js";import"./JSearchSelect-4158b9a9.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JImageUpload-1b0b2e46.js";import"./JUpload-70acb676.js";import"./BasicTable-400bb95b.js";import"./injectionKey-69710956.js";import"./index-2ad3f236.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";var Ht=Object.defineProperty,Fe=Object.getOwnPropertySymbols,Lt=Object.prototype.hasOwnProperty,Qt=Object.prototype.propertyIsEnumerable,ke=(u,d,i)=>d in u?Ht(u,d,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[d]=i,W=(u,d)=>{for(var i in d||(d={}))Lt.call(d,i)&&ke(u,i,d[i]);if(Fe)for(var i of Fe(d))Qt.call(d,i)&&ke(u,i,d[i]);return u},w=(u,d,i)=>new Promise((a,x)=>{var S=m=>{try{v(i.next(m))}catch(c){x(c)}},C=m=>{try{v(i.throw(m))}catch(c){x(c)}},v=m=>m.done?a(m.value):Promise.resolve(m.value).then(S,C);v((i=i.apply(u,d)).next())});const te={optPre:"/online/cgform/api/form/",urlButtonAction:"/online/cgform/api/doButton"},Zt={name:"OnlineTabForm",components:{BasicForm:qt,Loading:Kt,OnlineSubForm:xt,PrinterOutlined:$t,DiffOutlined:_t,FormOutlined:Et,OnlinePopModal:Rt},props:{id:{type:String,default:""},formTemplate:{type:Number,default:1},disabled:{type:Boolean,default:!1},isTree:{type:Boolean,default:!1},pidField:{type:String,default:""},submitTip:{type:Boolean,default:!0},modalClass:{type:String,default:""},themeTemplate:{type:String,default:""},tabIndex:{type:String,default:""}},emits:["success","rendered"],setup(u,{emit:d}){const{createMessage:i}=ht(),a=f(null),x=f(!0),S=f(!1),C=f(1),v=f(""),m=f(!1),c=f(!1),R=kt({reportPrintShow:0,reportPrintUrl:"",joinQuery:0,modelFullscreen:0,modalMinWidth:"",commentStatus:0}),{onlineFormContext:p,resetContext:H}=Dt(),{formSchemas:M,defaultValueFields:D,changeDataIfArray2String:I,tableName:P,dbData:r,checkOnlyFieldValue:L,hasSubTable:h,subTabInfo:A,refMap:Q,subDataSource:K,baseColProps:Se,createFormSchemas:Te,fieldDisplayStatus:B}=Vt(u,a);let{EnhanceJS:s,initCgEnhanceJs:we}=jt(p,!1);const{executeJsEnhanced:Ce}=Ut({},p),[Pe,{setProps:Oe,validate:oe,resetFields:le,setFieldsValue:T,updateSchema:Z,getFieldsValue:z,scrollToField:xe}]=Wt({schemas:M,showActionButtonGroup:!1,baseColProps:Se}),ne=f(!1);function Re(){let e=u.disabled;ne.value=e,Oe({disabled:e})}function De(e,t,o){return w(this,null,function*(){yield Ve(),v.value="",yield le(),r.value="";let l=he(e);c.value=l,l?yield re(t):ie(),ge(()=>{!l&&o&&T(o),je(),Y("js","loaded"),Re()})})}function Ve(){return w(this,null,function*(){if(u.isTree===!0){let e=u.pidField,t=M.value;t&&t.length>0&&t.filter(o=>o.field===e).length>0&&(yield Z({field:e,componentProps:{reload:new Date().getTime()}}))}})}function je(){if(he(c)===!1){let e=V(D[P.value]);q(e,t=>{T(t)})}}function ae(e,t){let o=V(D[e.key]);q(o,l=>{const{row:n,target:b}=t;let O=[{rowKey:n.id,values:W({},l)}];b.setValues(O)})}function re(e){return w(this,null,function*(){let t=yield Ae(e.id);r.value=Object.assign({},e,t);let o=Me.value,l=It(t,...o);u.disabled&&Object.keys(l).map(n=>{!l[n]&&l[n]!==0&&l[n]!=="0"&&delete l[n]}),yield T(l),ie(t)})}function ie(e){e||(e={});let t=Object.keys(K.value);if(t&&t.length>0){let o={};for(let l of t)o[l]=e[l]||[];K.value=o}}let Me=St(()=>{let e=M.value,t=[];for(let o of e)t.push(o.field);return t});function Ae(e){let t=`${te.optPre}${u.id}/${e}`;return new Promise((o,l)=>{ee.get({url:t},{isTransformResponse:!1}).then(n=>{n.success?o(n.result):(l(),i.warning(n.message))}).catch(()=>{l()})})}function Be(e){return w(this,null,function*(){C.value=e.head.tableType,P.value=e.head.tableName,x.value=e.head.tableType==1,Ee(e.head.extConfigJson),Te(e.schema.properties,e.schema.required,L),s=we(e.enhanceJs),d("rendered",R);let t=yield Mt(a);t.$formValueChange=(o,l,n)=>{et(o,l),n&&T(n),$e(o,l,n)},s&&s.setup&&pe(s.setup)})}function $e(e,t,o){p.changEvent(e,t,o)}function _e(e){p.addObject2Context("changEvent",e)}function Ee(e){let t={reportPrintShow:0,reportPrintUrl:"",joinQuery:0,modelFullscreen:0,modalMinWidth:"",commentStatus:0};e&&(t=JSON.parse(e)),Object.keys(t).map(o=>{R[o]=t[o]})}function Ie(){x.value===!0?qe():Ke()}function Ke(){Ne().then(e=>{ue(e)})}function Ne(){let e={};return new Promise((t,o)=>{oe().then(l=>t(l),({errorFields:l})=>{l&&l.length>0&&xe(l[0][0]),o(E)})}).then(t=>(Object.assign(e,I(t)),Je())).then(t=>(Object.assign(e,t),Promise.resolve(e))).catch(t=>((t===E||(t==null?void 0:t.code)===E)&&(i.warning("校验未通过"),t.key&&Ue(t.key)),Promise.reject(null)))}function Ue(e){let t=A.value;for(let o=0;o<t.length;o++)if(e==t[o].key){let l=o+"";if($.value===l)break;if($.value=l,t[o].relationType===0){let n=g(e);gt(300,()=>n==null?void 0:n.validateTable())}break}}function Je(){return new Promise((e,t)=>w(this,null,function*(){let o={};try{let l=A.value;for(let n=0;n<l.length;n++){let b=l[n].key,O=g(b);if(l[n].relationType==1)try{let N=yield O.getAll();o[b]=[],o[b].push(N)}catch(N){throw{code:E,key:b}}else{if(yield O.fullValidateTable())throw{code:E,key:b};o[b]=O.getTableData()}}}catch(l){t(l)}e(o)}))}function qe(){return w(this,null,function*(){try{let e=yield oe();e=Object.assign({},r.value,e),e=I(e),S.value=!0,ue(e)}finally{S.value=!1}})}function ue(e){lt(be,e).then(()=>{We(e)}).catch(t=>{i.warning(t)})}function We(e){Object.keys(e).map(n=>{Array.isArray(e[n])&&e[n].length==0&&(e[n]="")});let t=v.value,o=`${te.optPre}${u.id}?tabletype=${C.value}`;t&&(o=`${t}?tabletype=${C.value}`),m.value===!0&&(e[At]=1);let l=c.value===!0?"put":"post";ee.request({url:o,method:l,params:e},{isTransformResponse:!1}).then(n=>{n.success?(n.result&&(e[Bt]=n.result),d("success",e),u.submitTip===!0&&i.success(n.message)):i.warning(n.message)}).finally(()=>{S.value=!1})}function He(e,t,o){t&&o?o.vxeProps?o.setValues([{rowKey:t,values:e}]):o.setValues(e):T(e)}function Le(e,t){let o={};o[e]=t,T(o)}const $=f("0"),se=f(300),de=f(340);function Qe(e){if(c.value===!0){let t=r.value;return Ze(t,e)}return""}Tt(()=>u.tabIndex,e=>{$.value=e},{immediate:!0});function Ze(e,t){if(e){let o=e[t];return!o&&o!==0&&(o=e[t.toLowerCase()],!o&&o!==0&&(o=e[t.toUpperCase()])),o}return""}function ze(e,t){if(s&&s[t+"_onlChange"]){let o=s[t+"_onlChange"](),l=Object.keys(e)[0];if(o[l]){let n=g(t).getFormEvent(),b=W({column:{key:l},value:e[l]},n);o[l].call(p,p,b)}}}function Ye(e,t){if(s&&s[t+"_onlChange"]){let o=s[t+"_onlChange"](p);if(e.column==="all"){let l=Object.keys(o);if(l.length>0)for(let n of l)o[n].call(p,p,e)}else{let l=e.column.key||e.col.key;o[l]&&e.row&&e.row.id&&o[l].call(p,p,e)}}}function Ge(e,t){t.isModalData||ae(e,t)}function Xe(e){return"online_"+e+":"}function et(e,t){return w(this,null,function*(){if(!s||!s.onlChange||!e)return!1;let o=s.onlChange();if(o[e]){let l={row:yield z(),column:{key:e},value:t};o[e].call(p,p,l)}})}function pe(e){let t=e.toLocaleString().match(Jt);if(t.length>1){let o=t[1];Ce(o)}}function Y(e,t){if(e=="js"){let o=t+"_hook";s&&s[t]?s[t].call(p,p):s&&s[o]&&pe(s[o])}else if(e=="action"){let o=r.value,l={formId:u.id,buttonCode:t,dataId:o.id,uiFormData:Object.assign({},o)};ee.post({url:`${te.urlButtonAction}`,params:l},{isTransformResponse:!1}).then(n=>{n.success?i.success("处理完成!"):i.warning("处理失败!")})}}function me(e){let t=g(e),o=[...t.getNewDataWithId(),...K.value[e]];if(!o||o.length==0)return!1;let l=[];for(let n of o)l.push(n.id);t.removeRowsById(l)}function ce(e,t){if(!t)return!1;let o=g(e);typeof t=="object"?o.addRows(t,!0):this.$message.error("添加子表数据,参数不识别!")}function tt(e,t){me(e),ce(e,t)}function ot(e,t){!t&&t.length<=0&&(t=[]),t.map(o=>{o.hasOwnProperty("label")||(o.label=o.text)}),Z({field:e,componentProps:{options:t}})}function lt(e,t){return s&&s.beforeSubmit?s.beforeSubmit(e,t):Promise.resolve()}function nt(e,t){let o=V(B);e&&e.length>0?Object.keys(o).map(l=>{!l.endsWith("_load")&&e.indexOf(l)<0&&(B[l]=!1)}):t&&t.length>0&&Object.keys(o).map(l=>{t.indexOf(l)>=0&&(B[l]=!1)})}function at(e,t){return w(this,null,function*(){v.value=t,yield le(),r.value="",c.value=!0,yield re(e),yield ge(()=>{Y("js","loaded")})})}function g(e){let t=Q[e].value;if(t instanceof Array&&(t=t[0]),!t){i.warning("子表ref找不到:"+e);return}return t}function rt(){let e=R.reportPrintUrl,t=r.value.id,o=yt();vt(e,t,o)}const[it,{openModal:fe}]=Nt(),G=f(""),X=f(!0);function ut(e){G.value=e.id,X.value=!1,fe(!0,{isUpdate:!1,tableType:"3"})}function st(e){let t=g(e.key).getSelectedData();if(t.length!=1){i.warning("请选择一条数据");return}G.value=e.id,X.value=!1,fe(!0,{isUpdate:!0,record:t[0]})}function dt(e){const t=e[ye];let o=ve(e,[ye]);if(o.id){let l=ve(W({},o),"id"),n=[{rowKey:o.id,values:l}];g(t).setValues(n)}else g(t).addRows(o,{isOnlineJS:!1,setActive:!1,emitChange:!0,isModalData:!0})}function pt(){let e=A.value;if(e&&e.length>0){for(let t of e)if(t.relationType!=1){let o=g(t.key);o&&o.clearSelection()}}}function mt(){let e=z(),t=V(D[P.value]);q(t,o=>{T(o)},e)}function ct(e,t){let o=A.value;if(o&&o.length>0){let l=o.filter(n=>n.key===e);if(l.length==0)return;if(l[0].relationType==1)g(e).executeFillRule();else{let n=V(D[e]),b=V(t.row);q(n,O=>{const{row:N,target:ft}=t;let bt=[{rowKey:N.id,values:W({},O)}];ft.setValues(bt)},b)}}}let be={tableName:P,loading:S,subActiveKey:$,onlineFormRef:a,getFieldsValue:z,setFieldsValue:T,submitFlowFlag:m,subFormHeight:se,subTableHeight:de,refMap:Q,triggleChangeValues:He,triggleChangeValue:Le,sh:B,clearSubRows:me,addSubRows:ce,clearThenAddRows:tt,changeOptions:ot,isUpdate:c,getSubTableInstance:g,updateSchema:Z,executeMainFillRule:mt,executeSubFillRule:ct,changEvent:()=>{},onlineFormValueChange:_e};return H(be),{tableName:P,onlineFormRef:a,registerForm:Pe,loading:S,subActiveKey:$,hasSubTable:h,subTabInfo:A,refMap:Q,subFormHeight:se,getSubTableForeignKeyValue:Qe,isUpdate:c,handleSubFormChange:ze,subTableHeight:de,onlineFormDisabled:ne,subDataSource:K,getSubTableAuthPre:Xe,handleAdded:Ge,handleSubTableDefaultValue:ae,handleValueChange:Ye,openSubFormModalForAdd:ut,openSubFormModalForEdit:st,show:De,createRootProperties:Be,handleSubmit:Ie,sh:B,handleCgButtonClick:Y,handleCustomFormSh:nt,handleCustomFormEdit:at,dbData:r,onOpenReportPrint:rt,onlineExtConfigJson:R,registerPopModal:it,popTableName:G,getPopFormData:dt,popModalRequest:X,onCloseModal:pt}}},zt=["id"],Yt={key:0,style:{"text-align":"right",position:"absolute",top:"6px",right:"20px","z-index":"999"}},Gt={key:1};function Xt(u,d,i,a,x,S){const C=y("PrinterOutlined"),v=y("BasicForm"),m=y("a-tab-pane"),c=y("online-sub-form"),R=y("diff-outlined"),p=y("a-button"),H=y("form-outlined"),M=y("JVxeTable"),D=y("a-tabs"),I=y("Loading"),P=y("online-pop-modal");return F(),_("div",{id:a.tableName+"_form"},[a.dbData.id&&a.onlineExtConfigJson.reportPrintShow?(F(),_("div",Yt,[k(C,{title:"打印",onClick:a.onOpenReportPrint,style:{"font-size":"16px"}},null,8,["onClick"])])):U("",!0),k(D,{class:"tabTheme",activeKey:a.subActiveKey,"onUpdate:activeKey":d[0]||(d[0]=r=>a.subActiveKey=r)},{default:j(()=>[(F(),J(m,{tab:"主表",key:"-1"},{default:j(()=>[k(v,{ref:"onlineFormRef",onRegister:a.registerForm},null,8,["onRegister"])]),_:1})),a.hasSubTable?(F(!0),_(wt,{key:0},Ct(a.subTabInfo,(r,L)=>(F(),J(m,{tab:r.describe,key:L+"",forceRender:!0},{default:j(()=>[r.relationType==1?(F(),_("div",{key:0,style:Pt({"overflow-y":"auto","overflow-x":"hidden","max-height":a.subFormHeight+"px"})},[k(c,{ref_for:!0,ref:a.refMap[r.key],table:r.key,disabled:a.onlineFormDisabled,"form-template":i.formTemplate,"main-id":a.getSubTableForeignKeyValue(r.foreignKey),properties:r.properties,"required-fields":r.requiredFields,"is-update":a.isUpdate,onFormChange:h=>a.handleSubFormChange(h,r.key)},null,8,["table","disabled","form-template","main-id","properties","required-fields","is-update","onFormChange"])],4)):(F(),_("div",Gt,[k(M,{ref_for:!0,ref:a.refMap[r.key],toolbar:"","keep-source":"","row-number":"","row-selection":"",height:a.subTableHeight,disabled:a.onlineFormDisabled,columns:r.columns,dataSource:a.subDataSource[r.key],onValueChange:h=>a.handleValueChange(h,r.key),authPre:a.getSubTableAuthPre(r.key),onAdded:h=>a.handleAdded(r,h),onExecuteFillRule:h=>a.handleSubTableDefaultValue(r,h)},{toolbarSuffix:j(()=>[a.onlineFormDisabled?U("",!0):(F(),J(p,{key:0,type:"primary",onClick:h=>a.openSubFormModalForAdd(r)},{default:j(()=>[k(R)]),_:2},1032,["onClick"])),a.onlineFormDisabled?U("",!0):(F(),J(p,{key:1,type:"primary",onClick:h=>a.openSubFormModalForEdit(r)},{default:j(()=>[k(H)]),_:2},1032,["onClick"]))]),_:2},1032,["height","disabled","columns","dataSource","onValueChange","authPre","onAdded","onExecuteFillRule"])]))]),_:2},1032,["tab"]))),128)):U("",!0)]),_:1},8,["activeKey"]),k(I,{loading:a.loading,absolute:!1},null,8,["loading"]),Ot(u.$slots,"bottom",{},void 0,!0),k(P,{formTableType:"3",request:a.popModalRequest,id:a.popTableName,onRegister:a.registerPopModal,onSuccess:a.getPopFormData,topTip:"",isVxeTableData:""},null,8,["request","id","onRegister","onSuccess"])],8,zt)}const fl=Ft(Zt,[["render",Xt],["__scopeId","data-v-52a8d605"]]);export{fl as default};