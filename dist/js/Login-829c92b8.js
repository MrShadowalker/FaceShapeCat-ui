import{d as h,e as g,a6 as l,a7 as w,u as e,ab as m,Z as c,ac as t,k as s,ad as p,aj as x}from"./tinymce-vendor-3c2b3d6e.js";import{k as y,aG as v,aH as k,aI as d}from"./index-37448b2d.js";import b from"./LoginForm-1e81c4f2.js";import L from"./ForgetPasswordForm-5f22156a.js";import B from"./RegisterForm-125168e0.js";import S from"./MobileForm-20b84f81.js";import T from"./QrCodeForm-071cb2f7.js";import{m as $,a2 as C,bc as D,B as I}from"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./checkcode-5ec5fe8f.js";import"./LoginFormTitle-a753d4da.js";import"./ThirdModal-2b91df07.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./useThirdLogin-b70adaa5.js";import"./step1-9c68c9e8.js";import"./step2-5120d8ac.js";import"./index-ee632f67.js";import"./step3-dddd43da.js";import"./index-35591d01.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";const A="/assets/login-box-bg-9027741f.svg",N={class:"-enter-x xl:hidden"},V={class:"container relative h-full py-2 mx-auto sm:px-10"},G={class:"flex h-full"},P={class:"hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12"},j={class:"my-auto"},z=["alt"],E={class:"mt-10 font-medium text-white -enter-x"},H={class:"inline-block mt-4 text-3xl"},M={class:"mt-5 font-normal text-white text-md dark:text-gray-500 -enter-x"},Z={class:"flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12"},ut=h({__name:"Login",props:{sessionTimeout:{type:Boolean}},setup(i){const o=$(),{prefixCls:n}=y("login"),{t:r}=I(),_=C().getShowPicker,u=g(()=>{var a;return(a=o==null?void 0:o.title)!=null?a:""}),{handleBackLogin:f}=D();return f(),(a,F)=>(l(),w("div",{class:x([e(n),"relative w-full h-full px-4"])},[!i.sessionTimeout&&e(_)?(l(),m(e(v),{key:0,class:"absolute text-white top-4 right-4 enter-x xl:text-gray-600",showText:!1})):c("",!0),i.sessionTimeout?c("",!0):(l(),m(e(k),{key:1,class:"absolute top-3 right-7 enter-x"})),t("span",N,[s(e(d),{alwaysShowTitle:!0})]),t("div",V,[t("div",G,[t("div",P,[s(e(d),{class:"-enter-x"}),t("div",j,[t("img",{alt:u.value,src:A,class:"w-1/2 -mt-16 -enter-x"},null,8,z),t("div",E,[t("span",H,p(e(r)("sys.login.signInTitle")),1)]),t("div",M,p(e(r)("sys.login.signInDesc")),1)])]),t("div",Z,[t("div",{class:x([`${e(n)}-form`,"relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"])},[s(b),s(L),s(B),s(S),s(T)],2)])])])],2))}});export{ut as default};