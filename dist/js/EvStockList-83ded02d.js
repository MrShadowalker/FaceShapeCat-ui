var se=Object.defineProperty,ce=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var F=(l,n,o)=>n in l?se(l,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[n]=o,J=(l,n)=>{for(var o in n||(n={}))ue.call(n,o)&&F(l,o,n[o]);if(A)for(var o of A(n))de.call(n,o)&&F(l,o,n[o]);return l},N=(l,n)=>ce(l,pe(n));var D=(l,n,o)=>new Promise((d,c)=>{var E=p=>{try{b(o.next(p))}catch(g){c(g)}},P=p=>{try{b(o.throw(p))}catch(g){c(g)}},b=p=>p.done?d(p.value):Promise.resolve(p.value).then(E,P);b((o=o.apply(l,n)).next())});import{d as K,f as R,r as S,Y as s,a6 as T,a7 as j,ac as f,k as e,a9 as t,F as me,Z as B,E as u,ad as fe,a8 as _e,u as m,ab as be,a4 as ge,a5 as ve}from"./tinymce-vendor-3c2b3d6e.js";import"./index-0f0d0317.js";import{useListPage as he}from"./useListPage-66651993.js";import{l as Ie,g as ye,a as Se,d as ke,b as we}from"./EvStockForm-78b2a5b7.js";import xe from"./EvStockModal-2a564cfc.js";import{u as Ce,_ as De}from"./jeecg-online-vendor-f57c6456.js";import{J as Q}from"./JSearchSelect-4158b9a9.js";import{Q as Re}from"./index-2ad3f236.js";import Te from"./BasicTable-400bb95b.js";import"./index-37448b2d.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./index-64ecc8b2.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./injectionKey-69710956.js";const Ee=[{title:"仓库",align:"center",dataIndex:"whId_dictText"},{title:"skuID",align:"center",dataIndex:"skuId_dictText"},{title:"数量",align:"center",dataIndex:"count"},{title:"成本",align:"center",dataIndex:"cost"}];const Pe={count:{title:"数量",order:2,view:"number",type:"number"},cost:{title:"成本",order:3,view:"number",type:"number"}},k=l=>(ge("data-v-34334fe2"),l=l(),ve(),l),Ue={class:"p-2"},Ae={class:"jeecg-basic-table-form-container"},Fe=k(()=>f("span",{title:"仓库"},"仓库",-1)),Je=k(()=>f("span",{title:"skuID"},"skuI",-1)),Ne=k(()=>f("span",{title:"数量"},"数量",-1)),je=k(()=>f("span",{title:"成本"},"成本",-1)),Be={style:{float:"left",overflow:"hidden"},class:"table-page-search-submitButtons"},Qe=K({name:"evStock-evStock"}),Ke=K(N(J({},Qe),{setup(l){const n=R(),o=S({}),d=R(!1),c=R(),E=Ce(),{prefixCls:P,tableContext:b,onExportXls:p,onImportXls:g}=he({tableProps:{title:"库存表",api:Ie,columns:Ee,canResize:!1,useSearchForm:!1,actionColumn:{width:120,fixed:"right"},beforeFetch:a=>Object.assign(a,o)},exportConfig:{name:"库存表",url:ye,params:o},importConfig:{url:Se,success:I}}),[L,{reload:w,collapseAll:Le,updateTableDataRecord:Ve,findTableDataRecord:qe,getDataSource:Oe},{rowSelection:V,selectedRowKeys:h}]=b,q=S({xs:24,sm:4,xl:6,xxl:4}),O=S({xs:24,sm:20}),M=S(Pe);function X(a){Object.keys(a).map(i=>{o[i]=a[i]}),x()}function $(){c.value.disableSubmit=!1,c.value.add()}function z(a){c.value.disableSubmit=!1,c.value.edit(a)}function H(a){c.value.disableSubmit=!0,c.value.edit(a)}function Y(a){return D(this,null,function*(){yield ke({id:a.id},I)})}function Z(){return D(this,null,function*(){yield we({ids:h.value},I)})}function I(){(h.value=[])&&w()}function G(a){return[{label:"编辑",onClick:z.bind(null,a)}]}function W(a){return[{label:"详情",onClick:H.bind(null,a)},{label:"删除",popConfirm:{title:"是否确认删除",confirm:Y.bind(null,a),placement:"topLeft"}}]}function x(){w()}function ee(){n.value.resetFields(),h.value=[],w()}return(a,i)=>{const y=s("a-form-item"),_=s("a-col"),U=s("a-input"),v=s("a-button"),C=s("Icon"),te=s("a-row"),oe=s("a-form"),ne=s("j-upload-button"),le=s("a-menu-item"),ae=s("a-menu"),ie=s("a-dropdown"),re=s("super-query");return T(),j("div",Ue,[f("div",Ae,[e(oe,{ref_key:"formRef",ref:n,onKeyup:_e(x,["enter","native"]),model:o,"label-col":q,"wrapper-col":O},{default:t(()=>[e(te,{gutter:24},{default:t(()=>[e(_,{lg:6},{default:t(()=>[e(y,{name:"whId"},{label:t(()=>[Fe]),default:t(()=>[e(Q,{placeholder:"请选择仓库",value:o.whId,"onUpdate:value":i[0]||(i[0]=r=>o.whId=r),dict:",,"},null,8,["value"])]),_:1})]),_:1}),e(_,{lg:6},{default:t(()=>[e(y,{name:"skuId"},{label:t(()=>[Je]),default:t(()=>[e(Q,{placeholder:"请选择skuID",value:o.skuId,"onUpdate:value":i[1]||(i[1]=r=>o.skuId=r),dict:",,"},null,8,["value"])]),_:1})]),_:1}),d.value?(T(),j(me,{key:0},[e(_,{lg:6},{default:t(()=>[e(y,{name:"count"},{label:t(()=>[Ne]),default:t(()=>[e(U,{placeholder:"请输入数量",value:o.count,"onUpdate:value":i[2]||(i[2]=r=>o.count=r)},null,8,["value"])]),_:1})]),_:1}),e(_,{lg:6},{default:t(()=>[e(y,{name:"cost"},{label:t(()=>[je]),default:t(()=>[e(U,{placeholder:"请输入成本",value:o.cost,"onUpdate:value":i[3]||(i[3]=r=>o.cost=r)},null,8,["value"])]),_:1})]),_:1})],64)):B("",!0),e(_,{xl:6,lg:7,md:8,sm:24},{default:t(()=>[f("span",Be,[e(_,{lg:6},{default:t(()=>[e(v,{type:"primary",preIcon:"ant-design:search-outlined",onClick:x},{default:t(()=>[u("查询")]),_:1}),e(v,{type:"primary",preIcon:"ant-design:reload-outlined",onClick:ee,style:{"margin-left":"8px"}},{default:t(()=>[u("重置")]),_:1}),f("a",{onClick:i[4]||(i[4]=r=>d.value=!d.value),style:{"margin-left":"8px"}},[u(fe(d.value?"收起":"展开")+" ",1),e(C,{icon:d.value?"ant-design:up-outlined":"ant-design:down-outlined"},null,8,["icon"])])]),_:1})])]),_:1})]),_:1})]),_:1},8,["model","label-col","wrapper-col"])]),e(m(Te),{onRegister:m(L),rowSelection:m(V)},{tableTitle:t(()=>[e(v,{type:"primary",onClick:$,preIcon:"ant-design:plus-outlined"},{default:t(()=>[u(" 新增")]),_:1}),e(v,{type:"primary",preIcon:"ant-design:export-outlined",onClick:m(p)},{default:t(()=>[u(" 导出")]),_:1},8,["onClick"]),e(ne,{type:"primary",preIcon:"ant-design:import-outlined",onClick:m(g)},{default:t(()=>[u("导入")]),_:1},8,["onClick"]),m(h).length>0?(T(),be(ie,{key:0},{overlay:t(()=>[e(ae,null,{default:t(()=>[e(le,{key:"1",onClick:Z},{default:t(()=>[e(C,{icon:"ant-design:delete-outlined"}),u(" 删除 ")]),_:1})]),_:1})]),default:t(()=>[e(v,null,{default:t(()=>[u("批量操作 "),e(C,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):B("",!0),e(re,{config:M,onSearch:X},null,8,["config"])]),action:t(({record:r})=>[e(m(Re),{actions:G(r),dropDownActions:W(r)},null,8,["actions","dropDownActions"])]),bodyCell:t(({column:r,record:Me,index:Xe,text:$e})=>[]),_:1},8,["onRegister","rowSelection"]),e(xe,{ref_key:"registerModal",ref:c,onSuccess:I},null,512)])}}}));const to=De(Ke,[["__scopeId","data-v-34334fe2"]]);export{to as default};