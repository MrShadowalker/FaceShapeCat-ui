var q=Object.defineProperty;var R=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var V=(e,a,l)=>a in e?q(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l,P=(e,a)=>{for(var l in a||(a={}))J.call(a,l)&&V(e,l,a[l]);if(R)for(var l of R(a))Y.call(a,l)&&V(e,l,a[l]);return e};var S=(e,a,l)=>new Promise((h,y)=>{var C=u=>{try{p(l.next(u))}catch(c){y(c)}},b=u=>{try{p(l.throw(u))}catch(c){y(c)}},p=u=>u.done?h(u.value):Promise.resolve(u.value).then(C,b);p((l=l.apply(e,a)).next())});import{d as Z,f as I,u as L,e as z,h as G,w as H,n as K,Y as m,a6 as r,ab as g,ae as _,a9 as v,a7 as T,F as w,aa as D,E as B,ad as N,k as M,Z as U,ac as Q}from"./tinymce-vendor-3c2b3d6e.js";import{p as d}from"./index-37448b2d.js";import{ar as W,aw as X,_ as x}from"./jeecg-online-vendor-f57c6456.js";import{ag as ee,o as ae}from"./antd-vue-vendor-05bfa84d.js";import{useRuleFormItem as te}from"./useFormItem-613b6d5d.js";import{C as ne}from"./CompTypeEnum-5c91fd88.js";const oe=Z({name:"JDictSelectTag",inheritAttrs:!1,components:{LoadingOutlined:ee},props:{value:d.oneOfType([d.string,d.number,d.array]),dictCode:d.string,type:d.string,placeholder:d.string,stringToNumber:d.bool,getPopupContainer:{type:Function,default:e=>e==null?void 0:e.parentNode},showChooseOption:d.bool.def(!0),options:{type:Array,default:[],required:!1},style:d.any},emits:["options-change","change","update:value"],setup(e,{emit:a,refs:l}){const h=I([]),y=W(),[C,,,b]=te(e,"value","change"),p=Object.assign({},L(e),L(y)),u=I(!1);let c=!0;const E=z(()=>!e.type||e.type==="list"?"select":e.type);G(()=>{e.dictCode&&(u.value=c,c=!1,k().finally(()=>{u.value=c})),e.dictCode||(h.value=e.options)}),H(()=>e.value,()=>{e.value===""&&(a("change",""),K(()=>b.onFieldChange()))});function k(){return S(this,null,function*(){let{dictCode:t,stringToNumber:i}=e;const o=yield X(t);h.value=o.reduce((f,s)=>{if(s){const O=s.value;f.push(P({label:s.text||s.label,value:i?+O:O},ae(s,["text","value"])))}return f},[])})}function F(t){var f,s,O,$;const{mode:i}=L(p);let o;i==="multiple"?(o=(s=(f=t==null?void 0:t.target)==null?void 0:f.value)!=null?s:t,(o==null||o==="")&&(o=[]),Array.isArray(o)&&(o=o.filter(A=>A!=null&&A!==""))):o=($=(O=t==null?void 0:t.target)==null?void 0:O.value)!=null?$:t,C.value=o,a("update:value",o)}function n(t){var i,o,f,s;C.value=(o=(i=t==null?void 0:t.target)==null?void 0:i.value)!=null?o:t,a("update:value",(s=(f=t==null?void 0:t.target)==null?void 0:f.value)!=null?s:t)}function j(t,i){var o;return typeof i.children=="function"&&((o=i.children()[0])==null?void 0:o.children.toLowerCase().indexOf(t.toLowerCase()))>=0?!0:(i.value||"").toString().toLowerCase().indexOf(t.toLowerCase())>=0}return{state:C,compType:E,attrs:y,loadingEcho:u,getBindValue:p,dictOptions:h,CompTypeEnum:ne,handleChange:F,handleChangeRadio:n,handleFilterOption:j}}}),le=["title"];function ue(e,a,l,h,y,C){const b=m("a-radio"),p=m("a-radio-group"),u=m("a-radio-button"),c=m("LoadingOutlined"),E=m("a-input"),k=m("a-select-option"),F=m("a-select");return e.compType===e.CompTypeEnum.Radio?(r(),g(p,_({key:0},e.attrs,{value:e.state,"onUpdate:value":a[0]||(a[0]=n=>e.state=n),onChange:e.handleChangeRadio}),{default:v(()=>[(r(!0),T(w,null,D(e.dictOptions,n=>(r(),g(b,{key:`${n.value}`,value:n.value},{default:v(()=>[B(N(n.label),1)]),_:2},1032,["value"]))),128))]),_:1},16,["value","onChange"])):e.compType===e.CompTypeEnum.RadioButton?(r(),g(p,_({key:1},e.attrs,{value:e.state,"onUpdate:value":a[1]||(a[1]=n=>e.state=n),buttonStyle:"solid",onChange:e.handleChangeRadio}),{default:v(()=>[(r(!0),T(w,null,D(e.dictOptions,n=>(r(),g(u,{key:`${n.value}`,value:n.value},{default:v(()=>[B(N(n.label),1)]),_:2},1032,["value"]))),128))]),_:1},16,["value","onChange"])):e.compType===e.CompTypeEnum.Select?(r(),T(w,{key:2},[e.loadingEcho?(r(),g(E,{key:0,readOnly:"",placeholder:"加载中…"},{prefix:v(()=>[M(c)]),_:1})):(r(),g(F,_({key:1,placeholder:e.placeholder},e.attrs,{value:e.state,"onUpdate:value":a[2]||(a[2]=n=>e.state=n),filterOption:e.handleFilterOption,getPopupContainer:e.getPopupContainer,style:e.style,onChange:e.handleChange}),{default:v(()=>[e.showChooseOption?(r(),g(k,{key:0,value:null},{default:v(()=>[B("请选择…")]),_:1})):U("",!0),(r(!0),T(w,null,D(e.dictOptions,n=>(r(),g(k,{key:`${n.value}`,value:n.value},{default:v(()=>[Q("span",{style:{display:"inline-block",width:"100%"},title:n.label},N(n.label),9,le)]),_:2},1032,["value"]))),128))]),_:1},16,["placeholder","value","filterOption","getPopupContainer","style","onChange"]))],64)):U("",!0)}const ge=x(oe,[["render",ue]]);export{ge as l};