var w=(f,U,b)=>new Promise((g,y)=>{var x=r=>{try{a(b.next(r))}catch(C){y(C)}},S=r=>{try{a(b.throw(r))}catch(C){y(C)}},a=r=>r.done?g(r.value):Promise.resolve(r.value).then(x,S);a((b=b.apply(f,U)).next())});import{d as Y,f as v,r as A,e as G,Y as p,a6 as H,ab as K,a9 as t,k as e,ae as c,u as _,a4 as Q,a5 as W,ac as X,n as Z}from"./tinymce-vendor-3c2b3d6e.js";import{C as h,_ as ee}from"./jeecg-online-vendor-f57c6456.js";import{l as ae}from"./JDictSelectTag-f0227cc5.js";import{J as le}from"./JImageUpload-1b0b2e46.js";import{c as te,s as se}from"./EvSpu.api-376e662f.js";import{a5 as oe}from"./antd-vue-vendor-05bfa84d.js";import{duplicateValidate as P}from"./validator-a0d2ebc7.js";import"./vxe-table-vendor-26792376.js";import"./index-37448b2d.js";import"./useFormItem-613b6d5d.js";import"./CompTypeEnum-5c91fd88.js";import"./user.api-367a7bce.js";const de=f=>(Q("data-v-10c71f18"),f=f(),W(),f),ue=de(()=>X("span",{style:{color:"#999999"}},"进货信息",-1)),ne=Y({__name:"EvSpuForm",props:{formDisabled:{type:Boolean,default:!1},formData:{type:Object,default:()=>{}},formBpm:{type:Boolean,default:!0}},emits:["register","ok"],setup(f,{expose:U,emit:b}){const g=f,y=v(),x=oe.useForm,S=b,a=A({id:"",remark:"",name:"",type:"",description:"",unit:"",spec:"",img:"",code:"",supplier:"",contact:"",phone:"",address:"",price:0,costPrice:0,status:"0"}),{createMessage:r}=h(),C=v({xs:{span:24},sm:{span:6}}),k=v({xs:{span:24},sm:{span:3}}),E=v({xs:{span:24},sm:{span:16}}),F=v({xs:{span:24},sm:{span:20}}),B=v(!1),O={name:[{required:!0,message:"请输入商品名称!"},{validator:M}],code:[{required:!0,message:"请输入商品编码!"},{validator:$}],price:[{required:!0,message:"请输入零售价!"}],type:[{required:!0,message:"请输入种类!"}],unit:[{required:!0,message:"请输入计量单位!"}],spec:[{required:!0,message:"请输入规格型号!"}]},{resetFields:R,validate:V,validateInfos:m}=x(a,O,{immediate:!0}),d=G(()=>g.formBpm===!0?g.formData.disabled!==!1:g.formDisabled);function j(){D({status:"1"})}function D(n){Z(()=>w(this,null,function*(){if(R(),n.id){const l=yield te({id:n.id,pageSize:9999});n.specificationNames=l.records}Object.assign(a,n)}))}function re(){d.value||a.specificationNames.push({name:""})}function pe(n){a.specificationNames.splice(n,1)}function J(){return w(this,null,function*(){yield V(),B.value=!0;const n=v(!1);let l=a;l.id&&(n.value=!0),yield se(l,n.value).then(o=>{o.success?(r.success(o.message),S("ok")):r.warning(o.message)}).finally(()=>{B.value=!1})})}function M(n,l){return w(this,null,function*(){return P("ev_goods","name",l,a.id||"")})}function $(n,l){return w(this,null,function*(){return P("ev_goods","code",l,a.id||"")})}return U({add:j,edit:D,submitForm:J}),(n,l)=>{const o=p("a-form-item"),u=p("a-col"),i=p("a-input"),N=p("a-row"),q=p("a-input-number"),I=p("a-textarea"),z=p("a-divider"),L=p("a-form"),T=p("a-spin");return H(),K(T,{spinning:B.value},{default:t(()=>[e(L,{ref_key:"formRef",ref:y,class:"antd-modal-form",labelCol:C.value,wrapperCol:E.value},{default:t(()=>[e(N,null,{default:t(()=>[e(u,{span:12},{default:t(()=>[e(o,{label:"商品图片"},{default:t(()=>[e(le,{value:a.img,"onUpdate:value":l[0]||(l[0]=s=>a.img=s),disabled:d.value},null,8,["value","disabled"])]),_:1})]),_:1}),e(u,{span:12},{default:t(()=>[e(N,null,{default:t(()=>[e(u,{span:24},{default:t(()=>[e(o,c({label:"商品名称"},_(m).name),{default:t(()=>[e(i,{value:a.name,"onUpdate:value":l[1]||(l[1]=s=>a.name=s),placeholder:"请输入商品名称",disabled:d.value},null,8,["value","disabled"])]),_:1},16)]),_:1}),e(u,{span:24},{default:t(()=>[e(o,c({label:"商品编码"},_(m).code),{default:t(()=>[e(i,{value:a.code,"onUpdate:value":l[2]||(l[2]=s=>a.code=s),placeholder:"请输入商品编码",disabled:d.value},null,8,["value","disabled"])]),_:1},16)]),_:1})]),_:1})]),_:1}),e(u,{span:24},{default:t(()=>[e(o,c({label:"规格型号"},_(m).spec,{labelCol:k.value,wrapperCol:F.value}),{default:t(()=>[e(i,{value:a.spec,"onUpdate:value":l[3]||(l[3]=s=>a.spec=s),placeholder:"请输入规格型号",disabled:d.value},null,8,["value","disabled"])]),_:1},16,["labelCol","wrapperCol"])]),_:1}),e(u,{span:12},{default:t(()=>[e(o,c({label:"商品种类"},_(m).type),{default:t(()=>[e(i,{value:a.type,"onUpdate:value":l[4]||(l[4]=s=>a.type=s),placeholder:"请输入商品种类",disabled:d.value},null,8,["value","disabled"])]),_:1},16)]),_:1}),e(u,{span:12},{default:t(()=>[e(o,c({label:"计量单位"},_(m).unit),{default:t(()=>[e(i,{value:a.unit,"onUpdate:value":l[5]||(l[5]=s=>a.unit=s),placeholder:"请输入计量单位",disabled:d.value},null,8,["value","disabled"])]),_:1},16)]),_:1}),e(u,{span:12},{default:t(()=>[e(o,c({label:"商品状态"},_(m).status),{default:t(()=>[e(ae,{value:a.status,"onUpdate:value":l[6]||(l[6]=s=>a.status=s),type:"radio","dict-code":"ev_goods_status",placeholder:"请选择商品状态",disabled:d.value},null,8,["value","disabled"])]),_:1},16)]),_:1}),e(u,{span:12},{default:t(()=>[e(o,c({label:"零售价"},_(m).price),{default:t(()=>[e(q,{value:a.price,"onUpdate:value":l[7]||(l[7]=s=>a.price=s),formatter:s=>`${s}元`,placeholder:"请输入零售价",disabled:d.value},null,8,["value","formatter","disabled"])]),_:1},16)]),_:1}),e(u,{span:24},{default:t(()=>[e(o,{label:"商品描述",labelCol:k.value,wrapperCol:F.value},{default:t(()=>[e(I,{value:a.description,"onUpdate:value":l[8]||(l[8]=s=>a.description=s),disabled:d.value,rows:4},null,8,["value","disabled"])]),_:1},8,["labelCol","wrapperCol"])]),_:1}),e(z,{orientation:"left",style:{height:"2px","border-color":"#999999"}},{default:t(()=>[ue]),_:1}),e(u,{span:12},{default:t(()=>[e(o,{label:"厂家名称"},{default:t(()=>[e(i,{value:a.supplier,"onUpdate:value":l[9]||(l[9]=s=>a.supplier=s),placeholder:"请输入厂家名称",disabled:d.value},null,8,["value","disabled"])]),_:1})]),_:1}),e(u,{span:12},{default:t(()=>[e(o,{label:"联系人"},{default:t(()=>[e(i,{value:a.contact,"onUpdate:value":l[10]||(l[10]=s=>a.contact=s),placeholder:"请输入联系人",disabled:d.value},null,8,["value","disabled"])]),_:1})]),_:1}),e(u,{span:12},{default:t(()=>[e(o,{label:"联系电话"},{default:t(()=>[e(i,{value:a.phone,"onUpdate:value":l[11]||(l[11]=s=>a.phone=s),placeholder:"请输入联系电话",disabled:d.value},null,8,["value","disabled"])]),_:1})]),_:1}),e(u,{span:12},{default:t(()=>[e(o,{label:"进货价"},{default:t(()=>[e(q,{value:a.costPrice,"onUpdate:value":l[12]||(l[12]=s=>a.costPrice=s),placeholder:"请输入进货价",formatter:s=>`${s}元`,disabled:d.value},null,8,["value","formatter","disabled"])]),_:1})]),_:1}),e(u,{span:24},{default:t(()=>[e(o,{label:"联系地址",labelCol:k.value,wrapperCol:F.value},{default:t(()=>[e(I,{value:a.address,"onUpdate:value":l[13]||(l[13]=s=>a.address=s),placeholder:"请输入联系地址",disabled:d.value,rows:4},null,8,["value","disabled"])]),_:1},8,["labelCol","wrapperCol"])]),_:1})]),_:1})]),_:1},8,["labelCol","wrapperCol"])]),_:1},8,["spinning"])}}});const Se=ee(ne,[["__scopeId","data-v-10c71f18"]]);export{Se as default};
