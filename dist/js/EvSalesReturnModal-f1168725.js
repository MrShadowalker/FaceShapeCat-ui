import{d as b,f as e,Y as k,a6 as h,ab as x,a9 as C,k as B,n as i}from"./tinymce-vendor-3c2b3d6e.js";import{E as g}from"./EvSalesReturnForm-eda32d24.js";import"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./JDictSelectTag-f0227cc5.js";import"./index-37448b2d.js";import"./useFormItem-613b6d5d.js";import"./CompTypeEnum-5c91fd88.js";import"./JSearchSelect-4158b9a9.js";const N=b({__name:"EvSalesReturnModal",emits:["register","success"],setup(w,{expose:r,emit:u}){const s=e(""),c=e(800),t=e(!1),a=e(!1),o=e(),m=u;function d(){s.value="新增",t.value=!0,i(()=>{o.value.add()})}function p(n){s.value=a.value?"详情":"编辑",t.value=!0,i(()=>{o.value.edit(n)})}function v(){o.value.submitForm()}function f(){l(),m("success")}function l(){t.value=!1}return r({add:d,edit:p,disableSubmit:a}),(n,E)=>{const _=k("a-modal");return h(),x(_,{title:s.value,width:c.value,visible:t.value,onOk:v,okButtonProps:{class:{"jee-hidden":a.value}},onCancel:l,cancelText:"关闭"},{default:C(()=>[B(g,{ref_key:"registerForm",ref:o,onOk:f,formDisabled:a.value,formBpm:!1},null,8,["formDisabled"])]),_:1},8,["title","width","visible","okButtonProps"])}}});export{N as default};
