var ie=Object.defineProperty,se=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var F=(a,n,o)=>n in a?ie(a,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[n]=o,j=(a,n)=>{for(var o in n||(n={}))ce.call(n,o)&&F(a,o,n[o]);if(A)for(var o of A(n))me.call(n,o)&&F(a,o,n[o]);return a},B=(a,n)=>se(a,pe(n));var N=(a,n,o)=>new Promise((u,p)=>{var E=c=>{try{g(o.next(c))}catch(b){p(b)}},T=c=>{try{g(o.throw(c))}catch(b){p(b)}},g=c=>c.done?u(c.value):Promise.resolve(c.value).then(E,T);g((o=o.apply(a,n)).next())});import{d as J,f as R,r as C,Y as s,a6 as U,a7 as P,ac as d,k as e,a9 as t,F as de,Z as Q,E as m,ad as ue,a8 as fe,u as _,ab as _e,a4 as ge,a5 as be}from"./tinymce-vendor-3c2b3d6e.js";import"./index-0f0d0317.js";import{useListPage as ve}from"./useListPage-66651993.js";import{l as ye,g as he,a as Ie,d as xe,b as we}from"./EvCustomInfoForm-597d89aa.js";import Ce from"./EvCustomInfoModal-8ba29b32.js";import{u as Se,_ as ke}from"./jeecg-online-vendor-f57c6456.js";import{J as De}from"./JSearchSelect-4158b9a9.js";import{Q as Ne}from"./index-2ad3f236.js";import Re from"./BasicTable-400bb95b.js";import"./index-37448b2d.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./index-64ecc8b2.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./injectionKey-69710956.js";const Ue=[{title:"备注",align:"center",dataIndex:"remark"},{title:"客户姓名",align:"center",sorter:!0,dataIndex:"name"},{title:"对接销售",align:"center",sorter:!0,dataIndex:"userId_dictText"},{title:"电话",align:"center",dataIndex:"phoneNum"},{title:"客户公司",align:"center",sorter:!0,dataIndex:"company"},{title:"客户地址",align:"center",dataIndex:"address"}];const Ee={remark:{title:"备注",order:0,view:"text",type:"string"},name:{title:"客户姓名",order:1,view:"text",type:"string"},phoneNum:{title:"电话",order:3,view:"text",type:"string"},company:{title:"客户公司",order:4,view:"text",type:"string"},address:{title:"客户地址",order:5,view:"text",type:"string"}},h=a=>(ge("data-v-3c33807c"),a=a(),be(),a),Te={class:"p-2"},Ae={class:"jeecg-basic-table-form-container"},Fe=h(()=>d("span",{title:"客户姓名"},"客户姓名",-1)),je=h(()=>d("span",{title:"对接销售"},"对接销售",-1)),Be=h(()=>d("span",{title:"电话"},"电话",-1)),Pe=h(()=>d("span",{title:"客户公司"},"客户公司",-1)),Qe=h(()=>d("span",{title:"客户地址"},"客户地址",-1)),Je={style:{float:"left",overflow:"hidden"},class:"table-page-search-submitButtons"},Ke=J({name:"evCustomInfo-evCustomInfo"}),Le=J(B(j({},Ke),{setup(a){const n=R(),o=C({}),u=R(!1),p=R(),E=Se(),{prefixCls:T,tableContext:g,onExportXls:c,onImportXls:b}=ve({tableProps:{title:"客户信息",api:ye,columns:Ue,canResize:!1,useSearchForm:!1,actionColumn:{width:120,fixed:"right"},beforeFetch:l=>Object.assign(l,o)},exportConfig:{name:"客户信息",url:he,params:o},importConfig:{url:Ie,success:x}}),[K,{reload:S,collapseAll:Ve,updateTableDataRecord:qe,findTableDataRecord:Oe,getDataSource:Me},{rowSelection:L,selectedRowKeys:I}]=g,V=C({xs:24,sm:4,xl:6,xxl:4}),q=C({xs:24,sm:20}),O=C(Ee);function M(l){Object.keys(l).map(r=>{o[r]=l[r]}),k()}function X(){p.value.disableSubmit=!1,p.value.add()}function $(l){p.value.disableSubmit=!1,p.value.edit(l)}function z(l){p.value.disableSubmit=!0,p.value.edit(l)}function H(l){return N(this,null,function*(){yield xe({id:l.id},x)})}function Y(){return N(this,null,function*(){yield we({ids:I.value},x)})}function x(){(I.value=[])&&S()}function Z(l){return[{label:"编辑",onClick:$.bind(null,l)}]}function G(l){return[{label:"详情",onClick:z.bind(null,l)},{label:"删除",popConfirm:{title:"是否确认删除",confirm:H.bind(null,l),placement:"topLeft"}}]}function k(){S()}function W(){n.value.resetFields(),I.value=[],S()}return(l,r)=>{const w=s("a-input"),v=s("a-form-item"),f=s("a-col"),y=s("a-button"),D=s("Icon"),ee=s("a-row"),te=s("a-form"),oe=s("j-upload-button"),ne=s("a-menu-item"),ae=s("a-menu"),le=s("a-dropdown"),re=s("super-query");return U(),P("div",Te,[d("div",Ae,[e(te,{ref_key:"formRef",ref:n,onKeyup:fe(k,["enter","native"]),model:o,"label-col":V,"wrapper-col":q},{default:t(()=>[e(ee,{gutter:24},{default:t(()=>[e(f,{lg:6},{default:t(()=>[e(v,{name:"name"},{label:t(()=>[Fe]),default:t(()=>[e(w,{placeholder:"请输入客户姓名",value:o.name,"onUpdate:value":r[0]||(r[0]=i=>o.name=i)},null,8,["value"])]),_:1})]),_:1}),e(f,{lg:6},{default:t(()=>[e(v,{name:"userId"},{label:t(()=>[je]),default:t(()=>[e(De,{placeholder:"请选择对接销售",value:o.userId,"onUpdate:value":r[1]||(r[1]=i=>o.userId=i),dict:",,"},null,8,["value"])]),_:1})]),_:1}),u.value?(U(),P(de,{key:0},[e(f,{lg:6},{default:t(()=>[e(v,{name:"phoneNum"},{label:t(()=>[Be]),default:t(()=>[e(w,{placeholder:"请输入电话",value:o.phoneNum,"onUpdate:value":r[2]||(r[2]=i=>o.phoneNum=i)},null,8,["value"])]),_:1})]),_:1}),e(f,{lg:6},{default:t(()=>[e(v,{name:"company"},{label:t(()=>[Pe]),default:t(()=>[e(w,{placeholder:"请输入客户公司",value:o.company,"onUpdate:value":r[3]||(r[3]=i=>o.company=i)},null,8,["value"])]),_:1})]),_:1}),e(f,{lg:6},{default:t(()=>[e(v,{name:"address"},{label:t(()=>[Qe]),default:t(()=>[e(w,{placeholder:"请输入客户地址",value:o.address,"onUpdate:value":r[4]||(r[4]=i=>o.address=i)},null,8,["value"])]),_:1})]),_:1})],64)):Q("",!0),e(f,{xl:6,lg:7,md:8,sm:24},{default:t(()=>[d("span",Je,[e(f,{lg:6},{default:t(()=>[e(y,{type:"primary",preIcon:"ant-design:search-outlined",onClick:k},{default:t(()=>[m("查询")]),_:1}),e(y,{type:"primary",preIcon:"ant-design:reload-outlined",onClick:W,style:{"margin-left":"8px"}},{default:t(()=>[m("重置")]),_:1}),d("a",{onClick:r[5]||(r[5]=i=>u.value=!u.value),style:{"margin-left":"8px"}},[m(ue(u.value?"收起":"展开")+" ",1),e(D,{icon:u.value?"ant-design:up-outlined":"ant-design:down-outlined"},null,8,["icon"])])]),_:1})])]),_:1})]),_:1})]),_:1},8,["model","label-col","wrapper-col"])]),e(_(Re),{onRegister:_(K),rowSelection:_(L)},{tableTitle:t(()=>[e(y,{type:"primary",onClick:X,preIcon:"ant-design:plus-outlined"},{default:t(()=>[m(" 新增")]),_:1}),e(y,{type:"primary",preIcon:"ant-design:export-outlined",onClick:_(c)},{default:t(()=>[m(" 导出")]),_:1},8,["onClick"]),e(oe,{type:"primary",preIcon:"ant-design:import-outlined",onClick:_(b)},{default:t(()=>[m("导入")]),_:1},8,["onClick"]),_(I).length>0?(U(),_e(le,{key:0},{overlay:t(()=>[e(ae,null,{default:t(()=>[e(ne,{key:"1",onClick:Y},{default:t(()=>[e(D,{icon:"ant-design:delete-outlined"}),m(" 删除 ")]),_:1})]),_:1})]),default:t(()=>[e(y,null,{default:t(()=>[m("批量操作 "),e(D,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):Q("",!0),e(re,{config:O,onSearch:M},null,8,["config"])]),action:t(({record:i})=>[e(_(Ne),{actions:Z(i),dropDownActions:G(i)},null,8,["actions","dropDownActions"])]),bodyCell:t(({column:i,record:Xe,index:$e,text:ze})=>[]),_:1},8,["onRegister","rowSelection"]),e(Ce,{ref_key:"registerModal",ref:p,onSuccess:x},null,512)])}}}));const oo=ke(Le,[["__scopeId","data-v-3c33807c"]]);export{oo as default};
