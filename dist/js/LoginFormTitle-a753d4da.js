import{d as i,e as l,u as r,a6 as a,a7 as m,ad as c}from"./tinymce-vendor-3c2b3d6e.js";import{bc as g,bi as e,B as p}from"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";const u={class:"mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left"},b=i({__name:"LoginFormTitle",setup(_){const{t}=p(),{getLoginState:o}=g(),n=l(()=>({[e.RESET_PASSWORD]:t("sys.login.forgetFormTitle"),[e.LOGIN]:t("sys.login.signInFormTitle"),[e.REGISTER]:t("sys.login.signUpFormTitle"),[e.MOBILE]:t("sys.login.mobileSignInFormTitle"),[e.QR_CODE]:t("sys.login.qrSignInFormTitle")})[r(o)]);return(s,x)=>(a(),m("h2",u,c(n.value),1))}});export{b as default};
