import{d as ee,f as g,e as R,r as C,n as te,Y as p,a6 as k,a7 as oe,F as ae,k as f,a9 as N,ab as ie,ae as re,Z as le}from"./tinymce-vendor-3c2b3d6e.js";import{ap as x,bs as se}from"./jeecg-online-vendor-f57c6456.js";import"./index-09260ce4.js";import{B as ne}from"./index-64ecc8b2.js";import{aA as j,C as me,aZ as B,E as _}from"./index-37448b2d.js";import{T as pe}from"./useSchemas-0433a403-d91fb803.js";import ce from"./CodeFileListModal-a6d3290d-57422d6c.js";import ue from"./FileSelectModal-9a02560b-d676a918.js";import"./antd-vue-vendor-05bfa84d.js";import"./validator-a0d2ebc7.js";import"./CodeFileViewModal-373e8058-3fcb36d4.js";import"./download-2caf3e60.js";import{B as de,u as ge}from"./useForm-df7d93c5.js";import"./vxe-table-vendor-26792376.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-2ad3f236.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./base64Conver-fa2fe1af.js";import"./user.api-367a7bce.js";var w=(t,m,r)=>new Promise((c,b)=>{var h=a=>{try{l(r.next(a))}catch(o){b(o)}},s=a=>{try{l(r.throw(a))}catch(o){b(o)}},l=a=>a.done?c(a.value):Promise.resolve(a.value).then(h,s);l((r=r.apply(t,m)).next())});const fe=ee({name:"CodeGenerator",components:{BasicForm:de,BasicModal:ne,FileSelectModal:ue,CodeFileListModal:ce},emits:["register"],setup(t){const m="JEECG_ONL_PROJECT_PATH",r=g(!0),c=g(),b=R(()=>r.value?800:1200),h=g("代码生成"),s=g(!1),l=g(""),a=C({projectPath:"",packageStyle:"service",jspMode:"",jformType:"1",tableName_tmp:"",ftlDescription:"",entityName:"",codeTypes:"controller,service,dao,mapper,entity,vue"}),o=C({}),v=g([]),u=C({dataSource:[],columns:[{title:"子表名",key:"tableName",type:j.input,disabled:!0,validateRules:[{required:!0,message:"请输入${title}"}]},{title:"子表实体",key:"entityName",type:j.input,validateRules:[{required:!0,message:"请输入${title}"}]},{title:"功能说明",key:"ftlDescription",type:j.input,validateRules:[{required:!0,message:"请输入${title}"}]}]}),M=R(()=>u.dataSource.length>0),{formSchemas:I}=pe(t,{onProjectPathChange:Q,onProjectPathSearch:W,jspModeOptions:v},r),[O,{resetFields:D,setFieldsValue:F,validate:E}]=ge({schemas:I,showActionButtonGroup:!1,labelAlign:"right"}),[G,{closeModal:L}]=me(e=>w(this,null,function*(){yield D(),l.value=e.code,s.value=!1,u.dataSource=[],v.value=[],z(),Object.assign(o,a),V()}));function V(){return w(this,null,function*(){let{main:e,sub:i,jspModeList:d,projectPath:n}=yield x.get({url:"/online/cgform/head/tableInfo",params:{code:l.value}}),y=[];for(let T of d){const{code:P,note:X}=T;P=="many"||y.push({label:X,value:P})}v.value=y,e.isTree=="Y"?o.jspMode="tree":o.jspMode=y[0].value,r.value=e.tableType==1,h.value="代码生成【"+e.tableName+"】",o.projectPath||(o.projectPath=n,window.localStorage.setItem(m,n)),o.jformType=e.tableType+"",o.tableName_tmp=e.tableName,o.ftlDescription=e.tableTxt;let S=B(e.tableName);o.entityName=S.substring(0,1).toUpperCase()+S.substring(1),yield te(),F(o),i&&i.length>0&&(u.dataSource=i.map(T=>({tableName:T.tableName,entityName:Z(T.tableName),ftlDescription:T.tableTxt})))})}const[$,{openModal:A}]=_();function J(){return w(this,null,function*(){try{const e=yield E();let i=Object.assign({},e,{code:l.value,tableName:e.tableName_tmp});if(M.value){if(yield c.value.validateTable())return;i.subList=c.value.getTableData()}s.value=!0;let d=yield q(i);A(!0,{codeList:d.codeList,pathKey:d.pathKey,tableName:e.tableName_tmp}),L()}catch(e){}finally{s.value=!1}})}function q(e){return new Promise((i,d)=>{x.post({url:"/online/cgform/api/codeGenerate",params:e},{isTransformResponse:!1}).then(n=>{if(n.success){let y=n.result,S=n.message;i({codeList:y,pathKey:S})}else this.$message.error(n.message),d(n.message)})})}function H(){L()}const[K,U]=_();function W(){U.openModal(!0,{})}function Y(e){window.localStorage.setItem(m,e),F({projectPath:e})}function Z(e){let i=B(e);return i.substring(0,1).toUpperCase()+i.substring(1)}function z(){let e=window.localStorage.getItem(m);e&&(a.projectPath=e)}function Q(e){e.target.value&&window.localStorage.setItem(m,e.target.value)}return{title:h,modalWidth:b,confirmLoading:s,subTable:u,showSubTable:M,onSubmit:J,onCancel:H,onFileSelect:Y,registerFileSelectModal:K,subTableRef:c,registerForm:O,registerModal:G,registerCodeFileListModal:$}}});function be(t,m,r,c,b,h){const s=p("BasicForm"),l=p("JVxeTable"),a=p("a-card"),o=p("a-spin"),v=p("BasicModal"),u=p("FileSelectModal"),M=p("code-file-list-modal");return k(),oe(ae,null,[f(v,{onRegister:t.registerModal,title:t.title,width:t.modalWidth,confirmLoading:t.confirmLoading,okText:"开始生成",cancelText:"取消",onOk:t.onSubmit,onCancel:t.onCancel},{default:N(()=>[f(o,{spinning:t.confirmLoading},{default:N(()=>[f(s,{onRegister:t.registerForm},null,8,["onRegister"]),t.showSubTable?(k(),ie(a,{key:0,title:"子表信息",size:"small"},{default:N(()=>[f(l,re({ref:"subTableRef",rowNumber:"",maxHeight:580},t.subTable),null,16)]),_:1})):le("",!0)]),_:1},8,["spinning"])]),_:1},8,["onRegister","title","width","confirmLoading","onOk","onCancel"]),f(u,{onRegister:t.registerFileSelectModal,onSelect:t.onFileSelect},null,8,["onRegister","onSelect"]),f(M,{onRegister:t.registerCodeFileListModal},null,8,["onRegister"])],64)}const Ct=se(fe,[["render",be]]);export{Ct as default};