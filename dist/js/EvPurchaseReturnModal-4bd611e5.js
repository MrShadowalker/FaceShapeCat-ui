import{d as b,f as e,Y as h,a6 as k,ab as x,a9 as C,k as B,n as i}from"./tinymce-vendor-3c2b3d6e.js";import{E as P}from"./EvPurchaseReturnForm-510f6f27.js";import"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";const D=b({__name:"EvPurchaseReturnModal",emits:["register","success"],setup(g,{expose:r,emit:u}){const s=e(""),c=e(800),t=e(!1),a=e(!1),o=e(),m=u;function d(){s.value="新增",t.value=!0,i(()=>{o.value.add()})}function v(l){s.value=a.value?"详情":"编辑",t.value=!0,i(()=>{o.value.edit(l)})}function f(){o.value.submitForm()}function _(){n(),m("success")}function n(){t.value=!1}return r({add:d,edit:v,disableSubmit:a}),(l,w)=>{const p=h("a-modal");return k(),x(p,{title:s.value,width:c.value,visible:t.value,onOk:f,okButtonProps:{class:{"jee-hidden":a.value}},onCancel:n,cancelText:"关闭"},{default:C(()=>[B(P,{ref_key:"registerForm",ref:o,onOk:_,formDisabled:a.value,formBpm:!1},null,8,["formDisabled"])]),_:1},8,["title","width","visible","okButtonProps"])}}});export{D as default};
