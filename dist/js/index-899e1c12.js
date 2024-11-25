var D=Object.defineProperty;var x=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var C=(o,t,a)=>t in o?D(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,E=(o,t)=>{for(var a in t||(t={}))O.call(t,a)&&C(o,a,t[a]);if(x)for(var a of x(t))V.call(t,a)&&C(o,a,t[a]);return o};var f=(o,t,a)=>new Promise((s,i)=>{var e=l=>{try{r(a.next(l))}catch(m){i(m)}},n=l=>{try{r(a.throw(l))}catch(m){i(m)}},r=l=>l.done?s(l.value):Promise.resolve(l.value).then(e,n);r((a=a.apply(o,t)).next())});import{L as re,d as w,f as _,w as S,n as b,h as M,u as F,o as N,b as P,a6 as y,a7 as k,e as A,k as d,Y as h,ab as G,a9 as c,E as v}from"./tinymce-vendor-3c2b3d6e.js";import{h as J,i as T,y as $,_ as U}from"./jeecg-online-vendor-f57c6456.js";import{b as W}from"./index-37448b2d.js";import{useWindowSizeFn as I}from"./useWindowSizeFn-e63bb4b0.js";import{r as z,_ as H}from"./htmlmixed-6ab39e30.js";/* empty css             */import{P as q}from"./index-31a6ff64.js";import{R as B,a8 as Y,M as K}from"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./codemirror-vendor-0a03fef5.js";import"./useContentHeight-bfd1eb89.js";import"./useContentViewHeight-6be29838.js";import"./usePageContext-b7687fba.js";import"./injectionKey-69710956.js";var ye=z();const L=w({__name:"CodeMirror",props:{mode:{type:String,default:"application/json"},value:{type:String,default:""},readonly:{type:Boolean,default:!1}},emits:["change"],setup(o,{emit:t}){const a=o,s=t,i=_();let e;const n=W(m,100),r=J();S(()=>a.value,u=>f(this,null,function*(){yield b();const p=e==null?void 0:e.getValue();u!==p&&(e==null||e.setValue(u||""))}),{flush:"post"}),M(()=>{e==null||e.setOption("mode",a.mode)}),S(()=>r.getDarkMode,()=>f(this,null,function*(){l()}),{immediate:!0});function l(){var u;(u=F(e))==null||u.setOption("theme",r.getDarkMode==="light"?"idea":"material-palenight")}function m(){e==null||e.refresh()}function g(){return f(this,null,function*(){const u={autoCloseBrackets:!0,autoCloseTags:!0,foldGutter:!0,gutters:["CodeMirror-linenumbers"]};e=H(i.value,E({value:"",mode:a.mode,readOnly:a.readonly,tabSize:2,theme:"material-palenight",lineWrapping:!0,lineNumbers:!0},u)),e==null||e.setValue(a.value),l(),e==null||e.on("change",()=>{s("change",e==null?void 0:e.getValue())})})}return N(()=>f(this,null,function*(){yield b(),g(),I(n)})),P(()=>{e=null}),(u,p)=>(y(),k("div",{class:"relative !h-full w-full overflow-hidden",ref_key:"el",ref:i},null,512))}}),X={class:"h-full"},R={JSON:"application/json",html:"htmlmixed",js:"javascript"},Q=w({__name:"CodeEditor",props:{value:{type:[Object,String]},mode:{type:String,default:R.JSON},readonly:{type:Boolean},autoFormat:{type:Boolean,default:!0}},emits:["change","update:value","format-error"],setup(o,{emit:t}){const a=o,s=t,i=A(()=>{const{value:n,mode:r,autoFormat:l}=a;if(!l||r!==R.JSON)return n;let m=n;if(T(n))try{m=JSON.parse(n)}catch(g){return s("format-error",n),n}return JSON.stringify(m,null,2)});function e(n){s("update:value",n),s("change",n)}return(n,r)=>(y(),k("div",X,[d(L,{value:i.value,onChange:e,mode:o.mode,readonly:o.readonly},null,8,["value","mode","readonly"])]))}}),Z=$(Q),j='{"name":"BeJson","url":"http://www.xxx.com","page":88,"isNonProfit":true,"address":{"street":"科技园路.","city":"江苏苏州","country":"中国"},"links":[{"name":"Google","url":"http://www.xxx.com"},{"name":"Baidu","url":"http://www.xxx.com"},{"name":"SoSo","url":"http://www.xxx.com"}]}',ee=`
      (() => {
        var htmlRoot = document.getElementById('htmlRoot');
        var theme = window.localStorage.getItem('__APP__DARK__MODE__');
        if (htmlRoot && theme) {
          htmlRoot.setAttribute('data-theme', theme);
          theme = htmlRoot = null;
        }
      })();
  `,te=`
     <!DOCTYPE html>
<html lang="en" id="htmlRoot">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
    />
    <title><%= title %></title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="app">
    </div>
  </body>
</html>
  `,ae=w({components:{CodeEditor:Z,PageWrapper:q,RadioButton:B.Button,RadioGroup:B.Group,ASpace:Y},setup(){const o=_("application/json"),t=_(j);function a(i){const e=i.target.value;if(e==="application/json"){t.value=j;return}if(e==="htmlmixed"){t.value=te;return}if(e==="javascript"){t.value=ee;return}}function s(){K.info({title:"编辑器当前值",content:t.value})}return{value:t,modeValue:o,handleModeChange:a,showData:s}}});function oe(o,t,a,s,i,e){const n=h("a-button"),r=h("RadioButton"),l=h("RadioGroup"),m=h("a-space"),g=h("CodeEditor"),u=h("PageWrapper");return y(),G(u,{title:"代码编辑器组件示例",contentFullHeight:"",fixedHeight:"",contentBackground:""},{extra:c(()=>[d(m,{size:"middle"},{default:c(()=>[d(n,{onClick:o.showData,type:"primary"},{default:c(()=>[v("获取数据")]),_:1},8,["onClick"]),d(l,{"button-style":"solid",value:o.modeValue,"onUpdate:value":t[0]||(t[0]=p=>o.modeValue=p),onChange:o.handleModeChange},{default:c(()=>[d(r,{value:"application/json"},{default:c(()=>[v(" json数据 ")]),_:1}),d(r,{value:"htmlmixed"},{default:c(()=>[v(" html代码 ")]),_:1}),d(r,{value:"javascript"},{default:c(()=>[v(" javascript代码 ")]),_:1})]),_:1},8,["value","onChange"])]),_:1})]),default:c(()=>[d(g,{value:o.value,"onUpdate:value":t[1]||(t[1]=p=>o.value=p),mode:o.modeValue},null,8,["value","mode"])]),_:1})}const xe=U(ae,[["render",oe]]);export{xe as default};
