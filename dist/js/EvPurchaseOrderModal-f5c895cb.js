import{d as k,f as t,Y as x,a6 as i,ab as n,a9 as C,Z as O,n as u}from"./tinymce-vendor-3c2b3d6e.js";import{E as B}from"./EvPurchaseOrderForm-03206bfa.js";import"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./JDictSelectTag-f0227cc5.js";import"./index-37448b2d.js";import"./useFormItem-613b6d5d.js";import"./CompTypeEnum-5c91fd88.js";import"./JSearchSelect-4158b9a9.js";import"./JImageUpload-1b0b2e46.js";const Y=k({__name:"EvPurchaseOrderModal",emits:["register","success"],setup(P,{expose:c,emit:m}){const s=t(""),d=t(1200),e=t(!1),a=t(!1),o=t(),p=m;function v(){s.value="新增",e.value=!0,u(()=>{o.value.add()})}function f(l){s.value=a.value?"详情":"编辑",e.value=!0,u(()=>{o.value.edit(l)})}function _(){o.value.submitForm()}function b(){r(),p("success")}function r(){e.value=!1}return c({add:v,edit:f,disableSubmit:a}),(l,g)=>{const h=x("a-modal");return i(),n(h,{title:s.value,width:d.value,visible:e.value,onOk:_,okButtonProps:{class:{"jee-hidden":a.value}},onCancel:r,cancelText:"关闭"},{default:C(()=>[e.value?(i(),n(B,{key:0,ref_key:"registerForm",ref:o,onOk:b,formDisabled:a.value,formBpm:!1},null,8,["formDisabled"])):O("",!0)]),_:1},8,["title","width","visible","okButtonProps"])}}});export{Y as default};
