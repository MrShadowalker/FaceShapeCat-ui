import{d as l,e as d,u as r,h as _,o as b,Y as i,a6 as h,ab as B,a9 as p,k as C,E as k}from"./tinymce-vendor-3c2b3d6e.js";import{B as T,a5 as m,j as y,a2 as F}from"./antd-vue-vendor-05bfa84d.js";import{bc as I,B as g,_ as x}from"./jeecg-online-vendor-f57c6456.js";import{u as $}from"./useCountdown-d833a954.js";import{p as w}from"./index-37448b2d.js";import"./vxe-table-vendor-26792376.js";const E=l({name:"step3",components:{Button:T,Form:m,FormItem:m.Item,Input:y,Result:F},props:{accountInfo:{type:Object,default:()=>({})},count:w.number.def(5)},emits:["finish"],setup(t,{emit:n}){const{t:u}=g(),{accountInfo:f}=t,{handleBackLogin:a}=I(),{currentCount:e,start:o}=$(t.count),s=d(()=>u("sys.login.subTitleText",[r(e)]));_(()=>{r(e)===1&&setTimeout(()=>{c()},500)});function c(){a(),n("finish")}return b(()=>{o()}),{getSubTitle:s,finish:c}}});function R(t,n,u,f,a,e){const o=i("a-button"),s=i("Result");return h(),B(s,{status:"success",title:"更改密码成功","sub-title":t.getSubTitle},{extra:p(()=>[C(o,{key:"console",type:"primary",onClick:t.finish},{default:p(()=>[k(" 返回登录 ")]),_:1},8,["onClick"])]),_:1},8,["sub-title"])}const v=x(E,[["render",R]]);export{v as default};
