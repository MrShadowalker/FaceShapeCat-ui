var S=Object.defineProperty,$=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var y=(e,o,t)=>o in e?S(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,k=(e,o)=>{for(var t in o||(o={}))E.call(o,t)&&y(e,t,o[t]);if(g)for(var t of g(o))N.call(o,t)&&y(e,t,o[t]);return e},w=(e,o)=>$(e,x(o));var v=(e,o,t)=>new Promise((c,l)=>{var f=r=>{try{m(t.next(r))}catch(a){l(a)}},_=r=>{try{m(t.throw(r))}catch(a){l(a)}},m=r=>r.done?c(r.value):Promise.resolve(r.value).then(f,_);m((t=t.apply(e,o)).next())});import{d as q,Y as V,a6 as F,a7 as J,ac as R,k as n,a9 as s,E as d,u as C}from"./tinymce-vendor-3c2b3d6e.js";import"./index-09260ce4.js";import{C as z}from"./jeecg-online-vendor-f57c6456.js";import{u as D,B as O}from"./useForm-df7d93c5.js";import"./index-37448b2d.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-2ad3f236.js";import"./index-64ecc8b2.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";const P={class:"p-4"},j={class:"p-4 bg-white"},A={title:"富文本 | Markdown",name:"MarkdownDemo"},Lt=q(w(k({},A),{setup(e){const{createMessage:o,createSuccessModal:t}=z(),c=[{field:"name",component:"Input",label:"姓名",required:!0,defaultValue:"zhangsan"},{field:"tinymce",component:"JEditor",label:"富文本",defaultValue:"defaultValue",required:!0},{field:"markdown",component:"JMarkdownEditor",label:"Markdown",defaultValue:"# 张三",required:!0,componentProps:{height:300}}],[l,{setProps:f,validate:_,setFieldsValue:m}]=D({labelWidth:120,schemas:c,actionColOptions:{span:24},compact:!0,showResetButton:!1,showSubmitButton:!1,showAdvancedButton:!1,disabled:!1});function r(p){}function a(p){f({disabled:!!p})}function B(){return v(this,null,function*(){try{const p=yield _();t({title:"校验通过",content:`${JSON.stringify(p)}`})}catch(p){o.warning("检验不通过")}})}function h(){m({name:"LiSi",markdown:"# 李四",tinymce:'<p><strong><span style="font-size: 18pt;">张<span style="color: #e03e2d;">三</span>丰</span></strong></p>'})}return(p,i)=>{const u=V("a-button"),M=V("a-button-group");return F(),J("div",P,[R("div",j,[n(M,{class:"j-table-operator"},{default:s(()=>[n(u,{type:"primary",onClick:i[0]||(i[0]=b=>a(0))},{default:s(()=>[d("启用")]),_:1}),n(u,{type:"primary",onClick:i[1]||(i[1]=b=>a(1))},{default:s(()=>[d("禁用")]),_:1}),n(u,{type:"primary",onClick:i[2]||(i[2]=b=>B())},{default:s(()=>[d("校验表单并获取值")]),_:1}),n(u,{type:"primary",onClick:i[3]||(i[3]=b=>h())},{default:s(()=>[d("设置值")]),_:1})]),_:1}),n(C(O),{onRegister:C(l),onSubmit:r},null,8,["onRegister"])])])}}}));export{Lt as default};
