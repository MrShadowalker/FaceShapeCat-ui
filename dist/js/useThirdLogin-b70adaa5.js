var z=Object.defineProperty;var C=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var P=(t,n,i)=>n in t?z(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,S=(t,n)=>{for(var i in n||(n={}))A.call(n,i)&&P(t,i,n[i]);if(C)for(var i of C(n))D.call(n,i)&&P(t,i,n[i]);return t};import{f as o,u as a}from"./tinymce-vendor-3c2b3d6e.js";import{C as E,B as G,m as N,u as J,ap as w,b6 as K}from"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";function Z(){const{createMessage:t,notification:n}=E(),{t:i}=G(),I=N(),k=J(),L=o(""),l=o({}),g=o(!1),h=o(!1),b=o(""),u=o(!1),p=o(!1),d=o(""),y=o(""),m=o(!1),f=o(""),v=o("");function M(e){let s=`${I.uploadUrl}/sys/thirdLogin/render/${e}`;window.open(s,`login ${e}`,"height=500, width=500, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no"),L.value=e,l.value={},g.value=!1;let F=function(H){let r=H.data;if(typeof r=="string")if(r==="登录失败")t.warning(r);else if(r.includes("绑定手机号")){h.value=!0;let q=r.split(",");b.value=q[1]}else c(r);else typeof r=="object"?r.isObj===!0&&(u.value=!0,l.value=S({},r)):t.warning("不识别的信息传递")};window.addEventListener("message",F,!1)}function c(e){a(g)===!1&&(g.value=!0,k.ThirdLogin({token:e,thirdType:a(L)}).then(s=>{s&&s.userInfo?n.success({message:i("sys.login.loginSuccessTitle"),description:`${i("sys.login.loginSuccessDesc")}: ${s.userInfo.realname}`,duration:3}):$(s)}))}function $(e){n.error({message:"登录失败",description:((e.response||{}).data||{}).message||e.message||"请求出现错误，请稍后再试",duration:4})}function j(){d.value="",y.value=l.value.uuid,u.value=!1,p.value=!0}function O(){m.value=!0,l.value.suffix=parseInt(Math.random()*98+1),w.post({url:"/sys/third/user/create",params:{thirdLoginInfo:a(l)}},{isTransformResponse:!1}).then(e=>{if(e.success){let s=e.result;c(s),u.value=!1}else t.warning(e.message)}).finally(()=>{m.value=!1})}function R(){let e=Object.assign({},a(l),{password:a(d)});w.post({url:"/sys/third/user/checkPassword",params:e},{isTransformResponse:!1}).then(s=>{s.success?(T(),c(s.result)):t.warning(s.message)})}function T(){p.value=!1,d.value="",y.value=""}function x(){return K({mobile:a(f),smsmode:"0"})}function B(){a(f)||U("请输入手机号"),a(v)||U("请输入验证码");let e={mobile:a(f),captcha:a(v),thirdUserUuid:a(b)};w.post({url:"/sys/thirdLogin/bindingThirdPhone",params:e},{isTransformResponse:!1}).then(s=>{s.success?(h.value=!1,c(s.result)):t.warning(s.message)})}function U(e){n.error({message:"登录失败",description:e,duration:4})}return{thirdPasswordShow:p,thirdLoginCheckPassword:R,thirdLoginNoPassword:T,thirdLoginPassword:d,thirdConfirmShow:u,thirdCreateUserLoding:m,thirdLoginUserCreate:O,thirdLoginUserBind:j,bindingPhoneModal:h,thirdHandleOk:B,thirdPhone:f,thirdCaptcha:v,onThirdLogin:M,sendCodeApi:x}}export{Z as useThirdLogin};