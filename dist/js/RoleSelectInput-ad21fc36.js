var I=(e,u,d)=>new Promise((o,r)=>{var g=a=>{try{i(d.next(a))}catch(c){r(c)}},f=a=>{try{i(d.throw(a))}catch(c){r(c)}},i=a=>a.done?o(a.value):Promise.resolve(a.value).then(g,f);i((d=d.apply(e,u)).next())});import"./index-64ecc8b2.js";import{u as L,ap as T,_ as D}from"./jeecg-online-vendor-f57c6456.js";import{d as N,f as y,e as $,h as j,w as V,a4 as ae,a5 as se,Y as M,a6 as p,a7 as m,ac as C,aj as z,F as k,aa as A,ab as q,Z as w,ad as H,k as P}from"./tinymce-vendor-3c2b3d6e.js";import Y from"./RoleSelectModal-0528d83f.js";import Z from"./SelectedUserItem-6a7f0563.js";import{a5 as G}from"./antd-vue-vendor-05bfa84d.js";import{E as J}from"./index-37448b2d.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./vxe-table-vendor-26792376.js";const b=2,K=N({name:"RoleSelectInput",components:{RoleSelectModal:Y,SelectedUserItem:Z},props:{disabled:{type:Boolean,default:!1},store:{type:String,default:"id"},value:{type:String,default:""},multi:{type:Boolean,default:!1},getContainer:{type:Function,default:null},appId:{type:String,default:""}},emits:["update:value","change"],setup(e,{emit:u}){const d=G.useInjectFormItemContext(),o=y([]),r=y(!0),[g,{openModal:f,closeModal:i}]=J();function a(l){l.preventDefault(),l.stopPropagation();let t=o.value.map(s=>s.id);f(!0,{list:t})}const c=$(()=>{let l=b,t=o.value.length;return t>l?{status:!0,count:t-l}:{status:!1}});function B(l){r.value=!1;let t=o.value,s=-1;for(let n=0;n<t.length;n++)if(t[n].id==l){s=n;break}s>=0&&(t.splice(s,1),o.value=t,_())}function _(){let l=[],t=o.value;t&&t.length>0&&(l=t.map(n=>n[e.store]));let s=l.join(",");u("update:value",s),u("change",s),d.onFieldChange()}function E(l,t){r.value=!1,t&&t.length>0?o.value=t:o.value=[],_(),i()}const S=y(""),F=L();j(()=>{let l=F.getTenant,t=e.appId;t?S.value=t:S.value=new Date().getTime()+"-"+l}),V(()=>e.value,l=>I(this,null,function*(){l?r.value===!0&&(yield U(l)):o.value=[],r.value=!0}),{immediate:!0});function U(l){return I(this,null,function*(){const t="/sys/role/listByTenant";let s={[e.store]:l,pageSize:200};e.store==="code"&&(s.roleCode=l),o.value=[];const n=yield T.get({url:t,params:s},{isTransformResponse:!1});if(n.success){const{records:h}=n.result;let R=[];if(h&&h.length>0)for(let v of h)R.push({id:v.id,name:v.name||v.roleName,code:v.roleCode,checked:!0,selectType:"sys_role"});o.value=R}})}return{selectedList:o,ellipsisInfo:c,maxCount:b,registerRoleModal:g,closeRoleModal:i,showModal:a,onSelected:E,unSelect:B,currentAppId:S}}});const O={key:1,style:{height:"30px","line-height":"30px",display:"inline-block","margin-left":"7px",color:"#bfbfbf"}},Q={key:2,class:"user-selected-item"},W={class:"user-select-ellipsis"},X={style:{color:"red"}};function x(e,u,d,o,r,g){const f=M("SelectedUserItem"),i=M("RoleSelectModal");return p(),m("div",null,[C("div",{onClick:u[0]||(u[0]=(...a)=>e.showModal&&e.showModal(...a)),class:z(e.disabled?"select-input disabled-select":"select-input")},[e.selectedList.length>0?(p(!0),m(k,{key:0},A(e.selectedList,(a,c)=>(p(),m(k,null,[c<e.maxCount?(p(),q(f,{key:0,info:a,onUnSelect:e.unSelect,query:""},null,8,["info","onUnSelect"])):w("",!0)],64))),256)):(p(),m("span",O,"请选择")),e.ellipsisInfo.status?(p(),m("div",Q,[C("div",W,[C("span",X,"+"+H(e.ellipsisInfo.count)+"...",1)])])):w("",!0)],2),P(i,{appId:e.currentAppId,multi:e.multi,getContainer:e.getContainer,title:"选择组织角色",onRegister:e.registerRoleModal,onSelected:e.onSelected},null,8,["appId","multi","getContainer","onRegister","onSelected"])])}const fe=D(K,[["render",x],["__scopeId","data-v-9195f57a"]]);export{fe as default};