import{d as k,f as e,Y as b,a6 as h,ab as x,a9 as C,k as B,n as i}from"./tinymce-vendor-3c2b3d6e.js";import{E as g}from"./EvStocksForm-9b4cae12.js";import"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";const M=k({__name:"EvStocksModal",emits:["register","success"],setup(w,{expose:c,emit:r}){const s=e(""),u=e(800),t=e(!1),a=e(!1),o=e(),m=r;function d(){s.value="新增",t.value=!0,i(()=>{o.value.add()})}function v(n){s.value=a.value?"详情":"编辑",t.value=!0,i(()=>{o.value.edit(n)})}function f(){o.value.submitForm()}function _(){l(),m("success")}function l(){t.value=!1}return c({add:d,edit:v,disableSubmit:a}),(n,E)=>{const p=b("a-modal");return h(),x(p,{title:s.value,width:u.value,visible:t.value,onOk:f,okButtonProps:{class:{"jee-hidden":a.value}},onCancel:l,cancelText:"关闭"},{default:C(()=>[B(g,{ref_key:"registerForm",ref:o,onOk:_,formDisabled:a.value,formBpm:!1},null,8,["formDisabled"])]),_:1},8,["title","width","visible","okButtonProps"])}}});export{M as default};
