import{d as M,f as l,e as N,w as S,Y as y,a6 as v,a7 as I,ab as E,F,ac as T,k,a9 as K,E as b}from"./tinymce-vendor-3c2b3d6e.js";import{C as V,bs as q}from"./jeecg-online-vendor-f57c6456.js";import{u as z}from"./auth.data-8be5c9e3-b21bdf87.js";import{D as A,A as J,L as O}from"./auth.api-d3a6c4b3-afe9bb9e.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";var g=(e,u,t)=>new Promise((f,i)=>{var m=a=>{try{r(t.next(a))}catch(s){i(s)}},o=a=>{try{r(t.throw(a))}catch(s){i(s)}},r=a=>a.done?f(a.value):Promise.resolve(a.value).then(m,o);r((t=t.apply(e,u)).next())});const R=M({name:"AuthButtonTree",props:{cgformId:{type:String,required:!0}},setup(e){const{createMessage:u}=V(),t=l(""),f=l(2),i=l(!0),m=l([]),o=l([]),r=l([]),a=l(""),s=N(()=>!t.value);S(()=>e.cgformId,h,{immediate:!0});function h(){return g(this,null,function*(){if(!e.cgformId)return;let n=yield A(e.cgformId,f.value);n.forEach(d=>{for(const p of z)if(d.code==p.code){d.title=p.title;break}});let c=[];for(let d of n){let p=w(d);c.push({key:d.id,title:p})}r.value=c})}function C(){h(),x(t.value,a.value)}function x(n,c){return g(this,null,function*(){t.value=n,a.value=c,o.value=[],yield h();let d=yield J({roleId:n,cgformId:e.cgformId,type:f.value,authMode:c});o.value=d.map(p=>p.authId)})}function D(){t.value="",h()}function P(){return g(this,null,function*(){yield O(t.value,e.cgformId,{authId:JSON.stringify(o.value),authMode:a.value}),u.success("保存成功")})}function w(n){let c=n.title+"-";return n.page==3?c+="列表可见":n.page==5&&(c+="表单可见"),c}function B(n){m.value=n,i.value=!1}function _(){t.value="",o.value=[]}return{loadChecked:x,clear:_,expandedKeys:m,autoExpandParent:i,checkedKeys:o,treeData:r,disabled:s,onSave:P,onExpand:B,onRefresh:C,clearChecked:D}}}),$={class:"onl-auth-tree-btns"};function L(e,u,t,f,i,m){const o=y("a-empty"),r=y("a-button"),a=y("a-tree");return v(),I("div",null,[e.disabled?(v(),E(o,{key:0,description:"请先选中左侧角色/部门/用户"})):e.treeData.length===0?(v(),E(o,{key:1,description:"无权限信息"})):(v(),I(F,{key:2},[T("div",$,[k(r,{onClick:e.onRefresh,size:"small",type:"primary",preIcon:"ant-design:redo",ghost:""},{default:K(()=>[b("刷新")]),_:1},8,["onClick"]),k(r,{onClick:e.onSave,size:"small",type:"primary",preIcon:"ant-design:save",ghost:""},{default:K(()=>[b("保存")]),_:1},8,["onClick"])]),k(a,{checkable:"",checkedKeys:e.checkedKeys,"onUpdate:checkedKeys":u[0]||(u[0]=s=>e.checkedKeys=s),expandedKeys:e.expandedKeys,autoExpandParent:e.autoExpandParent,treeData:e.treeData,onExpand:e.onExpand},null,8,["checkedKeys","expandedKeys","autoExpandParent","treeData","onExpand"])],64))])}const W=q(R,[["render",L],["__scopeId","data-v-d165a23e"]]);export{W as default};