var w=(e,n,l)=>new Promise((u,d)=>{var _=o=>{try{t(l.next(o))}catch(i){d(i)}},S=o=>{try{t(l.throw(o))}catch(i){d(i)}},t=o=>o.done?u(o.value):Promise.resolve(o.value).then(_,S);t((l=l.apply(e,n)).next())});import{d as X,f,r as q,e as J,Y as p,a6 as V,ab as z,a9 as c,k as r,ae as k,u as B,n as H}from"./tinymce-vendor-3c2b3d6e.js";import{C as E,ap as v,aM as L,_ as N}from"./jeecg-online-vendor-f57c6456.js";import{J as Y}from"./JSearchSelect-4158b9a9.js";import{a5 as $}from"./antd-vue-vendor-05bfa84d.js";const{createConfirm:G}=E();const se="/evSpec/evSpec/exportXls",oe="/evSpec/evSpec/importExcel",ne=e=>v.get({url:"/evSpec/evSpec/list",params:e}),le=(e,n)=>v.delete({url:"/evSpec/evSpec/delete",params:e},{joinParamsToUrl:!0}).then(()=>{n()}),re=(e,n)=>{G({iconType:"warning",title:"确认删除",content:"是否删除选中数据",okText:"确认",cancelText:"取消",onOk:()=>v.delete({url:"/evSpec/evSpec/deleteBatch",data:e},{joinParamsToUrl:!0}).then(()=>{n()})})},K=(e,n)=>{let l=n?"/evSpec/evSpec/edit":"/evSpec/evSpec/add";return v.post({url:l,params:e},{isTransformResponse:!1})},Q=X({__name:"EvSpecForm",props:{formDisabled:{type:Boolean,default:!1},formData:{type:Object,default:()=>{}},formBpm:{type:Boolean,default:!0}},emits:["register","ok"],setup(e,{expose:n,emit:l}){const u=e,d=f(),_=$.useForm,S=l,t=q({id:"",spuId:"",name:""}),{createMessage:o}=E(),i=f({xs:{span:24},sm:{span:5}}),F=f({xs:{span:24},sm:{span:16}}),g=f(!1),I={spuId:[{required:!0,message:"请输入商品名称!"}],name:[{required:!0,message:"请输入规格名称!"}]},{resetFields:O,validate:U,validateInfos:y}=_(t,I,{immediate:!0}),C=J(()=>u.formBpm===!0?u.formData.disabled!==!1:u.formDisabled);function j(){T({})}function T(m){H(()=>{O(),Object.assign(t,m)})}function h(){return w(this,null,function*(){yield U(),g.value=!0;const m=f(!1);let a=t;a.id&&(m.value=!0);for(let s in a)a[s]instanceof Array&&L(d.value.getProps,s)==="string"&&(a[s]=a[s].join(","));yield K(a,m.value).then(s=>{s.success?(o.success(s.message),S("ok")):o.warning(s.message)}).finally(()=>{g.value=!1})})}return n({add:j,edit:T,submitForm:h}),(m,a)=>{const s=p("a-form-item"),b=p("a-col"),D=p("a-input"),P=p("a-row"),M=p("a-form"),R=p("a-spin");return V(),z(R,{spinning:g.value},{default:c(()=>[r(M,{ref_key:"formRef",ref:d,class:"antd-modal-form",labelCol:i.value,wrapperCol:F.value},{default:c(()=>[r(P,null,{default:c(()=>[r(b,{span:12},{default:c(()=>[r(s,k({label:"商品名称"},B(y).spuId),{default:c(()=>[r(Y,{value:t.spuId,"onUpdate:value":a[0]||(a[0]=x=>t.spuId=x),dict:"ev_spu,name,id",disabled:C.value},null,8,["value","disabled"])]),_:1},16)]),_:1}),r(b,{span:12},{default:c(()=>[r(s,k({label:"规格名称"},B(y).name),{default:c(()=>[r(D,{value:t.name,"onUpdate:value":a[1]||(a[1]=x=>t.name=x),disabled:C.value},null,8,["value","disabled"])]),_:1},16)]),_:1})]),_:1})]),_:1},8,["labelCol","wrapperCol"])]),_:1},8,["spinning"])}}});const W=N(Q,[["__scopeId","data-v-6ef161e3"]]),ce=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));export{W as E,oe as a,re as b,ce as c,le as d,se as g,ne as l};
