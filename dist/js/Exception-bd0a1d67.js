import{d as N,f as O,e as m,u as s,k as r}from"./tinymce-vendor-3c2b3d6e.js";import{B as R,a2 as S}from"./antd-vue-vendor-05bfa84d.js";import{bb as e,b8 as A,a as _,B as k}from"./jeecg-online-vendor-f57c6456.js";import{az as G,aF as P,k as C}from"./index-37448b2d.js";import"./vxe-table-vendor-26792376.js";const D="/assets/no-data-f7e550cc.svg",h="/assets/net-error-61b7e6df.svg",w=N({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(n){const a=O(new Map),{query:p}=A(),o=G(),c=P(),{t}=k(),{prefixCls:d}=C("app-exception-page"),x=m(()=>{const{status:l}=p,{status:i}=n;return Number(l)||i}),E=m(()=>s(a).get(s(x))),b=t("sys.exception.backLogin"),u=t("sys.exception.backHome");return s(a).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:t("sys.exception.subTitle403"),btnText:n.full?b:u,handler:()=>n.full?o(_.BASE_LOGIN):o()}),s(a).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:t("sys.exception.subTitle404"),btnText:n.full?b:u,handler:()=>n.full?o(_.BASE_LOGIN):o()}),s(a).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:t("sys.exception.subTitle500"),btnText:u,handler:()=>o()}),s(a).set(e.PAGE_NOT_DATA,{title:t("sys.exception.noDataTitle"),subTitle:"",btnText:t("common.redo"),handler:()=>c(),icon:D}),s(a).set(e.NET_WORK_ERROR,{title:t("sys.exception.networkErrorTitle"),subTitle:t("sys.exception.networkErrorSubTitle"),btnText:t("common.redo"),handler:()=>c(),icon:h}),()=>{const{title:l,subTitle:i,btnText:T,icon:f,handler:g,status:y}=s(E)||{};return r(S,{class:d,status:y,title:n.title||l,"sub-title":n.subTitle||i},{extra:()=>T&&r(R,{type:"primary",onClick:g},{default:()=>T}),icon:()=>f?r("img",{src:f},null):null})}}});export{w as default};
