import{d as b,f as e,Y as k,a6 as h,ab as x,a9 as C,k as B,n}from"./tinymce-vendor-3c2b3d6e.js";import g from"./EvSpuForm-84c91a6a.js";import"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./JDictSelectTag-f0227cc5.js";import"./index-37448b2d.js";import"./useFormItem-613b6d5d.js";import"./CompTypeEnum-5c91fd88.js";import"./JImageUpload-1b0b2e46.js";import"./EvSpu.api-376e662f.js";import"./validator-a0d2ebc7.js";import"./user.api-367a7bce.js";const z=b({__name:"EvSpuModal",emits:["register","success"],setup(w,{expose:r,emit:u}){const i=e(""),m=e(800),t=e(!1),o=e(!1),a=e(),c=u;function p(){i.value="新增",t.value=!0,n(()=>{a.value.add()})}function d(l){i.value=o.value?"详情":"编辑",t.value=!0,n(()=>{a.value.edit(l)})}function v(){a.value.submitForm()}function f(){s(),c("success")}function s(){t.value=!1}return r({add:p,edit:d,disableSubmit:o}),(l,F)=>{const _=k("a-modal");return h(),x(_,{title:i.value,width:m.value,visible:t.value,onOk:v,okButtonProps:{class:{"jee-hidden":o.value}},onCancel:s,cancelText:"关闭"},{default:C(()=>[B(g,{ref_key:"registerForm",ref:a,onOk:f,formDisabled:o.value,formBpm:!1},null,8,["formDisabled"])]),_:1},8,["title","width","visible","okButtonProps"])}}});export{z as default};