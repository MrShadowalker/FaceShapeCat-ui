var D=(h,I,a)=>new Promise((u,l)=>{var i=t=>{try{r(a.next(t))}catch(c){l(c)}},s=t=>{try{r(a.throw(t))}catch(c){l(c)}},r=t=>t.done?u(t.value):Promise.resolve(t.value).then(i,s);r((a=a.apply(h,I)).next())});import{d as P,f as n,Y as m,a6 as f,a7 as A,k as v,a9 as d,E as O,ac as C,ab as w,ad as Y,Z,u as y,F as z}from"./tinymce-vendor-3c2b3d6e.js";import{_ as G}from"./index-d4a67b72.js";import{u as H,a as J,B as Q}from"./index-563223fc.js";import{C as U}from"./jeecg-online-vendor-f57c6456.js";import W from"./DepartRoleDataRuleDrawer-8573bf85.js";import{a as X,b as ee,c as ae}from"./depart.user.api-f634a469.js";import"./antd-vue-vendor-05bfa84d.js";import"./index-37448b2d.js";import"./vxe-table-vendor-26792376.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";const ve=P({__name:"DepartRoleAuthDrawer",emits:["register"],setup(h){const{createMessage:I}=U(),a=n(!1),u=n(""),l=n(""),i=n([]),s=n([]),r=n([]),t=n([]),c=n([]),b=n([]),K=n(!0),[B,{closeDrawer:F}]=H(e=>{l.value=e.record.id,u.value=e.record.departId,R()}),[S,T]=J();function R(){return D(this,null,function*(){try{a.value=!0;const{ids:e,treeList:o}=yield X({departId:u.value});e.length>0?(b.value=e,t.value=e,i.value=o,s.value=yield ee({roleId:l.value}),r.value=[s.value]):g()}finally{a.value=!1}})}function g(){i.value=[],t.value=[],s.value=[],r.value=[],a.value=!1}function E(e){K.value?s.value=e.checked:s.value=e}function N(e){t.value=e}function V(e,{selectedNodes:o}){var p;if((p=o[0])!=null&&p.ruleFlag){let _=e[0];T.openDrawer(!0,{roleId:l,departId:u,functionId:_})}c.value=[]}function $(){g(),F()}function j(){g()}function x(e){return D(this,null,function*(){try{a.value=!0;let o={roleId:l.value,permissionIds:s.value.join(","),lastpermissionIds:r.value.join(",")};yield ae(o),e&&$()}finally{a.value=!1,e||R()}})}return(e,o)=>{const p=m("Icon"),_=m("a-empty"),q=m("a-spin"),L=m("a-button");return f(),A(z,null,[v(y(Q),{title:"部门角色权限配置",width:650,loading:a.value,showFooter:"",okText:"保存并关闭",onOk:o[1]||(o[1]=k=>x(!0)),onClose:j,onRegister:y(B)},{centerFooter:d(()=>[v(L,{type:"primary",loading:a.value,ghost:"",onClick:o[0]||(o[0]=k=>x(!1))},{default:d(()=>[O("仅保存")]),_:1},8,["loading"])]),default:d(()=>[C("div",null,[v(q,{spinning:a.value},{default:d(()=>[i.value.length>0?(f(),w(y(G),{key:0,title:"所拥有的部门权限",toolbar:"",checkable:"",treeData:i.value,checkedKeys:s.value,selectedKeys:c.value,expandedKeys:t.value,checkStrictly:K.value,clickRowToExpand:!1,onCheck:E,onExpand:N,onSelect:V},{title:d(({slotTitle:k,ruleFlag:M})=>[C("span",null,Y(k),1),M?(f(),w(p,{key:0,icon:"ant-design:align-left-outlined",style:{"margin-left":"5px",color:"red"}})):Z("",!0)]),_:1},8,["treeData","checkedKeys","selectedKeys","expandedKeys","checkStrictly"])):(f(),w(_,{key:1,description:"无可配置部门权限"}))]),_:1},8,["spinning"])])]),_:1},8,["loading","onRegister"]),v(W,{onRegister:y(S)},null,8,["onRegister"])],64)}}});export{ve as default};