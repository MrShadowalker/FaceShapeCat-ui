var g=(e,o,t)=>new Promise((f,r)=>{var c=s=>{try{a(t.next(s))}catch(m){r(m)}},u=s=>{try{a(t.throw(s))}catch(m){r(m)}},a=s=>s.done?f(s.value):Promise.resolve(s.value).then(c,u);a((t=t.apply(e,o)).next())});import{d as h,f as F,r as P,I as k,Y as d,a6 as y,ab as B,a9 as p,k as n,E as v}from"./tinymce-vendor-3c2b3d6e.js";import{B as C,a5 as I,j as b}from"./antd-vue-vendor-05bfa84d.js";import{S as _}from"./index-ee632f67.js";import{bd as D,B as S,C as j,be as E,bh as M,_ as R}from"./jeecg-online-vendor-f57c6456.js";import"./index-37448b2d.js";import"./vxe-table-vendor-26792376.js";const z=h({name:"step2",components:{Button:C,Form:I,FormItem:I.Item,InputPassword:b.Password,Input:b,StrengthMeter:_},props:{accountInfo:{type:Object,default:()=>({})}},emits:["prevStep","nextStep"],setup(e,{emit:o}){const{t}=S(),{createErrorModal:f}=j(),{accountInfo:r}=e,c=F(),u=P({username:r.obj.username||"",password:"",confirmPassword:""}),{getFormRules:a}=D(u),{validForm:s}=E(c);function m(){o("prevStep",r.obj)}function w(){return g(this,null,function*(){const i=yield s();if(!i)return;const l=yield M(k({username:i.username,password:i.password,smscode:r.obj.smscode,phone:r.obj.phone}));l.success?o("nextStep",r.obj):f({title:t("sys.api.errorTip"),content:l.message||t("sys.api.networkExceptionMsg")})})}return{t,formRef:c,formData:u,getFormRules:a,handleNext:w,handlePrev:m}}});function N(e,o,t,f,r,c){const u=d("Input"),a=d("FormItem"),s=d("StrengthMeter"),m=d("InputPassword"),w=d("Button"),i=d("Form");return y(),B(i,{class:"p-4 enter-x",model:e.formData,rules:e.getFormRules,ref:"formRef"},{default:p(()=>[n(a,{name:"username",class:"enter-x"},{default:p(()=>[n(u,{size:"large",value:e.formData.username,"onUpdate:value":o[0]||(o[0]=l=>e.formData.username=l),placeholder:e.t("sys.login.userName"),disabled:""},null,8,["value","placeholder"])]),_:1}),n(a,{name:"password",class:"enter-x"},{default:p(()=>[n(s,{size:"large",value:e.formData.password,"onUpdate:value":o[1]||(o[1]=l=>e.formData.password=l),placeholder:e.t("sys.login.password")},null,8,["value","placeholder"])]),_:1}),n(a,{name:"confirmPassword",class:"enter-x"},{default:p(()=>[n(m,{size:"large",visibilityToggle:"",value:e.formData.confirmPassword,"onUpdate:value":o[2]||(o[2]=l=>e.formData.confirmPassword=l),placeholder:e.t("sys.login.confirmPassword")},null,8,["value","placeholder"])]),_:1}),n(a,{class:"enter-x"},{default:p(()=>[n(w,{type:"primary",size:"large",block:"",onClick:e.handlePrev},{default:p(()=>[v(" 上一步 ")]),_:1},8,["onClick"]),n(w,{size:"large",block:"",class:"mt-4",onClick:e.handleNext},{default:p(()=>[v(" 下一步 ")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])}const Y=R(z,[["render",N]]);export{Y as default};
