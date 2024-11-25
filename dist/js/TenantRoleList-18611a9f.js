var Z=Object.defineProperty,j=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var x=(r,o,t)=>o in r?Z(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,S=(r,o)=>{for(var t in o||(o={}))z.call(o,t)&&x(r,t,o[t]);if(y)for(var t of y(o))G.call(o,t)&&x(r,t,o[t]);return r},k=(r,o)=>j(r,q(o));var d=(r,o,t)=>new Promise((f,l)=>{var c=i=>{try{u(t.next(i))}catch(p){l(p)}},h=i=>{try{u(t.throw(i))}catch(p){l(p)}},u=i=>i.done?f(i.value):Promise.resolve(i.value).then(c,h);u((t=t.apply(r,o)).next())});import{d as E,f as T,o as J,Y as m,a6 as U,a7 as O,k as n,a9 as a,E as _,u as s,ab as W,Z as oo,ac as I,ad as to,F as eo,a4 as No,a5 as Fo}from"./tinymce-vendor-3c2b3d6e.js";import"./index-0f0d0317.js";import{a as w}from"./index-563223fc.js";import"./index-64ecc8b2.js";import ro from"./RoleDesc-e45ae2ef.js";import no from"./RoleDrawer-dc450acb.js";import io from"./RoleUserTable-18c034a9.js";import{c as ao,s as so}from"./role.data-0ec7d709.js";import{l as po,g as mo,a as lo,d as co,b as uo}from"./role.api-90341a61.js";import{useListPage as _o}from"./useListPage-66651993.js";import{g as fo}from"./tenant.api-77d3d470.js";import{E as go,aL as wo}from"./index-37448b2d.js";import{Q as ho}from"./index-2ad3f236.js";import bo from"./BasicTable-400bb95b.js";import{_ as Do}from"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./vxe-table-vendor-26792376.js";import"./index-5ae739c2.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./UserDrawer-e0d93f1a.js";import"./user.data-dbf79b1f.js";import"./user.api-367a7bce.js";import"./validator-a0d2ebc7.js";import"./renderUtils-59564de6.js";import"./useAdaptiveWidth-a0286c92.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./UseSelectModal-05b1bdb0.js";import"./injectionKey-69710956.js";const Co={style:{"margin-left":"10px","margin-top":"5px"}},Ro={class:"tenant-name"},vo=E({name:"system-role"}),yo=E(k(S({},vo),{setup(r){const o=T(!0),[t,{openDrawer:f}]=w(),[l,{openDrawer:c}]=w(),[h,{openModal:u}]=go(),[i,{openDrawer:p}]=w(),{prefixCls:xo,tableContext:N,onImportXls:So,onExportXls:ko}=_o({designScope:"role-template",tableProps:{title:"租户角色列表",api:po,columns:ao,formConfig:{schemas:so},actionColumn:{width:120},rowSelection:null,defSort:{column:"id",order:"desc"}},exportConfig:{name:"角色列表",url:mo},importConfig:{url:lo}}),[F,{reload:g},{rowSelection:To,selectedRowKeys:b}]=N;function B(){o.value=!0,c(!0,{isUpdate:!1})}function L(e){o.value=!0,c(!0,{record:e,isUpdate:!0})}function M(e){o.value=!1,p(!0,{record:e,isUpdate:!0})}function A(e){return d(this,null,function*(){yield co({id:e.id},g)})}function V(){return d(this,null,function*(){yield uo({ids:b.value},g)})}function K(e){f(!0,e)}function P(e){return[{label:"用户",onClick:K.bind(null,e)}]}function X(e){return[{label:"编辑",onClick:L.bind(null,e)},{label:"详情",onClick:M.bind(null,e)},{label:"删除",popConfirm:{title:"是否确认删除",confirm:A.bind(null,e)}}]}const D=T("");$();function $(){return d(this,null,function*(){D.value=yield fo()})}return J(()=>{wo("租户角色")}),(e,Uo)=>{const C=m("a-button"),R=m("Icon"),H=m("a-menu-item"),Q=m("a-menu"),Y=m("a-dropdown");return U(),O(eo,null,[n(s(bo),{onRegister:s(F)},{tableTitle:a(()=>[n(C,{type:"primary",preIcon:"ant-design:plus-outlined",onClick:B},{default:a(()=>[_(" 新增")]),_:1}),s(b).length>0?(U(),W(Y,{key:0},{overlay:a(()=>[n(Q,null,{default:a(()=>[n(H,{key:"1",onClick:V},{default:a(()=>[n(R,{icon:"ant-design:delete-outlined"}),_(" 删除 ")]),_:1})]),_:1})]),default:a(()=>[n(C,null,{default:a(()=>[_("批量操作 "),n(R,{icon:"mdi:chevron-down"})]),_:1})]),_:1})):oo("",!0),I("div",Co,[_("当前登录租户: "),I("span",Ro,to(D.value),1)])]),action:a(({record:v})=>[n(s(ho),{actions:P(v),dropDownActions:X(v)},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"]),n(io,{onRegister:s(t),disableUserEdit:!0},null,8,["onRegister"]),n(no,{onRegister:s(l),onSuccess:s(g),showFooter:o.value},null,8,["onRegister","onSuccess","showFooter"]),n(ro,{onRegister:s(i)},null,8,["onRegister"])],64)}}}));const Ot=Do(yo,[["__scopeId","data-v-e4e7a338"]]);export{Ot as default};
