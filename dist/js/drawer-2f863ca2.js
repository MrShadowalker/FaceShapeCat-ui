var m=(s,a,r)=>new Promise((i,o)=>{var c=e=>{try{n(r.next(e))}catch(p){o(p)}},t=e=>{try{n(r.throw(e))}catch(p){o(p)}},n=e=>e.done?i(e.value):Promise.resolve(e.value).then(c,t);n((r=r.apply(s,a)).next())});import{d as u,f,e as l,u as d,Y as w,a6 as g,ab as D,ae as _}from"./tinymce-vendor-3c2b3d6e.js";import{B,u as h}from"./index-563223fc.js";import{_ as $}from"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./index-37448b2d.js";import"./vxe-table-vendor-26792376.js";const b=u({name:"tableDrawer",components:{BasicDrawer:B},emits:["success","register"],setup(s,{emit:a}){const r=f(!0),[i,{setDrawerProps:o,closeDrawer:c}]=h(e=>m(this,null,function*(){o({confirmLoading:!1}),r.value=!!(e!=null&&e.isUpdate)})),t=l(()=>d(r)?"编辑角色":"新增角色");function n(){return m(this,null,function*(){try{o({confirmLoading:!0}),c(),a("success")}finally{o({confirmLoading:!1})}})}return{registerDrawer:i,getTitle:t,handleSubmit:n}}});function k(s,a,r,i,o,c){const t=w("BasicDrawer");return g(),D(t,_(s.$attrs,{onRegister:s.registerDrawer,showFooter:"",title:s.getTitle,width:"500px",onOk:s.handleSubmit}),null,16,["onRegister","title","onOk"])}const S=$(b,[["render",k]]);export{S as default};
