var Z=Object.defineProperty,A=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var F=(e,a,t)=>a in e?Z(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,E=(e,a)=>{for(var t in a||(a={}))ae.call(a,t)&&F(e,t,a[t]);if(B)for(var t of B(a))te.call(a,t)&&F(e,t,a[t]);return e},L=(e,a)=>A(e,ee(a));var V=(e,a,t)=>new Promise((m,x)=>{var C=p=>{try{l(t.next(p))}catch(f){x(f)}},h=p=>{try{l(t.throw(p))}catch(f){x(f)}},l=p=>p.done?m(p.value):Promise.resolve(p.value).then(C,h);l((t=t.apply(e,a)).next())});import{d as le,f as c,r as se,e as oe,Y as v,a6 as U,ab as O,a9 as u,k as s,ae as k,u as b,a7 as ne,aa as ue,F as re,a4 as de,a5 as pe,ac as P,n as ie}from"./tinymce-vendor-3c2b3d6e.js";import{C as T,ap as g,_ as ce}from"./jeecg-online-vendor-f57c6456.js";import{J as ve}from"./JSearchSelect-4158b9a9.js";import{a5 as me}from"./antd-vue-vendor-05bfa84d.js";const{createConfirm:fe}=T();const Ue="/evSku/evSku/exportXls",Ie="/evSku/evSku/importExcel",Be=e=>g.get({url:"/evSku/evSku/list",params:L(E({},e),{pageNo:1,pageSize:1e3})}),_e=e=>g.get({url:"/evSpec/evSpec/list",params:e}),Fe=(e,a)=>g.delete({url:"/evSku/evSku/delete",params:e},{joinParamsToUrl:!0}).then(()=>{a()}),Ee=(e,a)=>{fe({iconType:"warning",title:"确认删除",content:"是否删除选中数据",okText:"确认",cancelText:"取消",onOk:()=>g.delete({url:"/evSku/evSku/deleteBatch",data:e},{joinParamsToUrl:!0}).then(()=>{a()})})},Se=(e,a)=>{let t=a?"/evSku/evSku/editVo":"/evSku/evSku/addVo";return g.post({url:t,params:e},{isTransformResponse:!1})},ke=e=>(de("data-v-aa3ba2e6"),e=e(),pe(),e),be=ke(()=>P("div",{style:{"margin-left":"30px"}},[P("span",null,"规格参数:")],-1)),ge=le({__name:"EvSkuForm",props:{formDisabled:{type:Boolean,default:!1},formData:{type:Object,default:()=>{}},formBpm:{type:Boolean,default:!0}},emits:["register","ok"],setup(e,{expose:a,emit:t}){const m=e,x=c(),C=me.useForm,h=t,l=se({id:"",remark:"",spuId:"",warehouseId:"",specValueIds:"",skuUnit:"",retailPrice:void 0,evSpecValueList:[]}),{createMessage:p}=T(),f=c({xs:{span:24},sm:{span:6}}),D=c({xs:{span:24},sm:{span:3}}),j=c({xs:{span:24},sm:{span:16}}),R=c({xs:{span:24},sm:{span:20}}),w=c(!1),z={},{resetFields:M,validate:N,validateInfos:_}=C(l,z,{immediate:!0}),S=oe(()=>m.formBpm===!0?m.formData.disabled!==!1:m.formDisabled);function X(){I({})}function I(i){ie(()=>{M(),Object.assign(l,i)})}function J(i){return V(this,null,function*(){yield _e({spuId:i,pageSize:9999}).then(o=>{let n=o.records;if(l.evSpecValueList=[],Array.isArray(n))for(let r=0;r<n.length;r++)l.evSpecValueList.push({name:n[r].name,specValue:"",specId:n[r].id});o.success})})}function H(i){J(i)}function Y(){return V(this,null,function*(){yield N(),w.value=!0;const i=c(!1);let o=l;o.id&&(i.value=!0),yield Se(o,i.value).then(n=>{n.success?(p.success(n.message),h("ok")):p.warning(n.message)}).finally(()=>{w.value=!1})})}return a({add:X,edit:I,submitForm:Y}),(i,o)=>{const n=v("a-form-item"),r=v("a-col"),y=v("a-input"),$=v("a-input-number"),q=v("a-row"),G=v("a-form"),K=v("a-spin");return U(),O(K,{spinning:w.value},{default:u(()=>[s(G,{ref_key:"formRef",ref:x,class:"antd-modal-form",labelCol:f.value,wrapperCol:j.value},{default:u(()=>[s(q,null,{default:u(()=>[s(r,{span:12},{default:u(()=>[s(n,k({label:"商品"},b(_).spuId),{default:u(()=>[s(ve,{value:l.spuId,"onUpdate:value":o[0]||(o[0]=d=>l.spuId=d),dict:"ev_spu,name,id,del_flag='0'",disabled:S.value,onChange:H},null,8,["value","disabled"])]),_:1},16)]),_:1}),s(r,{span:12},{default:u(()=>[s(n,k({label:"规格名称"},b(_).name),{default:u(()=>[s(y,{value:l.name,"onUpdate:value":o[1]||(o[1]=d=>l.name=d),placeholder:"请输入规格名称",disabled:S.value},null,8,["value","disabled"])]),_:1},16)]),_:1}),s(r,{span:12},{default:u(()=>[s(n,k({label:"计量单位"},b(_).skuUnit),{default:u(()=>[s(y,{value:l.skuUnit,"onUpdate:value":o[2]||(o[2]=d=>l.skuUnit=d),placeholder:"请输入计量单位",disabled:S.value},null,8,["value","disabled"])]),_:1},16)]),_:1}),s(r,{span:12},{default:u(()=>[s(n,k({label:"建议零售价"},b(_).retailPrice),{default:u(()=>[s($,{value:l.retailPrice,"onUpdate:value":o[3]||(o[3]=d=>l.retailPrice=d),placeholder:"请输入建议零售价",style:{width:"100%"},disabled:S.value,prefix:"￥",suffix:"元"},null,8,["value","disabled"])]),_:1},16)]),_:1}),s(r,{span:24},{default:u(()=>[be]),_:1}),(U(!0),ne(re,null,ue(l.evSpecValueList,(d,Q)=>(U(),O(r,{span:24,key:Q},{default:u(()=>[s(n,k({label:d.name},b(_).evSpecValueList,{labelCol:D.value,wrapperCol:R.value}),{default:u(()=>[s(y,{value:d.specValue,"onUpdate:value":W=>d.specValue=W,placeholder:"请输入参数",disabled:S.value},null,8,["value","onUpdate:value","disabled"])]),_:2},1040,["label","labelCol","wrapperCol"])]),_:2},1024))),128))]),_:1})]),_:1},8,["labelCol","wrapperCol"])]),_:1},8,["spinning"])}}});const xe=ce(ge,[["__scopeId","data-v-aa3ba2e6"]]),Le=Object.freeze(Object.defineProperty({__proto__:null,default:xe},Symbol.toStringTag,{value:"Module"}));export{xe as E,Ie as a,Ee as b,Le as c,Fe as d,Ue as g,Be as l};