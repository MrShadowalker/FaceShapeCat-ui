var $=Object.defineProperty;var m=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var y=(t,a,e)=>a in t?$(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,p=(t,a)=>{for(var e in a||(a={}))w.call(a,e)&&y(t,e,a[e]);if(m)for(var e of m(a))T.call(a,e)&&y(t,e,a[e]);return t};import{aq as B,_ as C,y as E}from"./jeecg-online-vendor-f57c6456.js";import{d as F,f as g,e as k,u as q,h as z,w as D,o as I,a6 as M,a7 as P,ao as j,ad as A}from"./tinymce-vendor-3c2b3d6e.js";import{aa as S,ab as G}from"./index-37448b2d.js";const H={startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(t){return t>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},J=F({name:"CountTo",props:H,emits:["onStarted","onFinished"],setup(t,{emit:a}){const e=g(t.startVal),u=g(!1);let r=S(e);const d=k(()=>x(q(r)));z(()=>{e.value=t.startVal}),D([()=>t.startVal,()=>t.endVal],()=>{t.autoplay&&s()}),I(()=>{t.autoplay&&s()});function s(){f(),e.value=t.endVal}function h(){e.value=t.startVal,f()}function f(){r=S(e,p({disabled:u,duration:t.duration,onFinished:()=>a("onFinished"),onStarted:()=>a("onStarted")},t.useEasing?{transition:G[t.transition]}:{}))}function x(n){if(!n&&n!==0)return"";const{decimals:b,decimal:V,separator:i,suffix:N,prefix:_}=t;n=Number(n).toFixed(b),n+="";const l=n.split(".");let o=l[0];const v=l.length>1?V+l[1]:"",c=/(\d+)(\d{3})/;if(i&&!B(i))for(;c.test(o);)o=o.replace(c,"$1"+i+"$2");return _+o+v+N}return{value:d,start:s,reset:h}}});function K(t,a,e,u,r,d){return M(),P("span",{style:j({color:t.color})},A(t.value),5)}const L=C(J,[["render",K]]),W=E(L);export{W as C};