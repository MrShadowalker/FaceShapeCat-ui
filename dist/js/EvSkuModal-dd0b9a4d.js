import{d as k,f as e,Y as b,a6 as h,ab as x,a9 as C,k as B,n as i}from"./tinymce-vendor-3c2b3d6e.js";import{E as g}from"./EvSkuForm-17543c31.js";import"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./JSearchSelect-4158b9a9.js";import"./index-37448b2d.js";const T=k({__name:"EvSkuModal",emits:["register","success"],setup(w,{expose:u,emit:r}){const s=e(""),c=e(800),t=e(!1),a=e(!1),o=e(),m=r;function d(){s.value="新增",t.value=!0,i(()=>{o.value.add()})}function v(n){s.value=a.value?"详情":"编辑",t.value=!0,i(()=>{o.value.edit(n)})}function f(){o.value.submitForm()}function p(){l(),m("success")}function l(){t.value=!1}return u({add:d,edit:v,disableSubmit:a}),(n,E)=>{const _=b("a-modal");return h(),x(_,{title:s.value,width:c.value,visible:t.value,onOk:f,okButtonProps:{class:{"jee-hidden":a.value}},onCancel:l,cancelText:"关闭"},{default:C(()=>[B(g,{ref_key:"registerForm",ref:o,onOk:p,formDisabled:a.value,formBpm:!1},null,8,["formDisabled"])]),_:1},8,["title","width","visible","okButtonProps"])}}});export{T as default};
