import{g as i,r as v,ak as I,h as g,e as d,n as c,I as h,u as x}from"./tinymce-vendor-3c2b3d6e.js";import{a5 as C,aj as F}from"./antd-vue-vendor-05bfa84d.js";function w(s,o="value",l="change",m){const a=i(),n=a==null?void 0:a.emit,r=C.useInjectFormItemContext(),t=v({value:s[o]}),u=I(t),f=e=>{t.value=e};return g(()=>{t.value=s[o]}),[d({get(){return t.value==null?"":t.value},set(e){F(e,u.value)||(t.value=e,c(()=>{n==null||n(l,e,...h(x(m))||[]),c(()=>r.onFieldChange())}))}}),f,u,r]}export{w as useRuleFormItem};
