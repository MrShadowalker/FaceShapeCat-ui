var C=(e,u,l)=>new Promise((_,g)=>{var f=n=>{try{p(l.next(n))}catch(r){g(r)}},m=n=>{try{p(l.throw(n))}catch(r){g(r)}},p=n=>n.done?_(n.value):Promise.resolve(n.value).then(f,m);p((l=l.apply(e,u)).next())});import{d as I,f as b,o as T,l as v,a4 as x,a5 as S,ac as t,Y as c,a6 as M,a7 as $,F as q,k as s,a9 as d,E as y,ad as z}from"./tinymce-vendor-3c2b3d6e.js";import{b as L,s as U}from"./ThirdApp.api-bf73b8d7.js";import"./index-64ecc8b2.js";import j from"./ThirdAppConfigModal-9fc01212.js";import{M as D}from"./antd-vue-vendor-05bfa84d.js";import{an as k,C as K,_ as N}from"./jeecg-online-vendor-f57c6456.js";import{E as V}from"./index-37448b2d.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./vxe-table-vendor-26792376.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-2ad3f236.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";const H=I({name:"OrganDingConfigForm",components:{ThirdAppConfigModal:j},setup(){const{createMessage:e}=K(),u=b(""),l=b(!1),_=b({agentId:void 0,clientId:"",clientSecret:""}),[g,{openModal:f}]=V();function m(){return C(this,null,function*(){let o=k();f(!0,{tenantId:o,thirdType:"dingtalk"})})}function p(o){return C(this,null,function*(){let i=yield L(o);i&&(_.value=i)})}function n(){let o=k();p({tenantId:o,thirdType:"dingtalk"})}function r(){return C(this,null,function*(){l.value=!0,yield U().then(o=>{let i={};o.result&&(i={width:600,title:o.message,content:()=>{let F,w=["成功信息如下：",h(v,o.result.successInfo.map((B,A)=>`${A+1}. ${B}`).join(`
`))];return o.success?F=[...w,v("br"),"无失败信息！"]:F=["失败信息如下：",h(v,o.result.failInfo.map((B,A)=>`${A+1}. ${B}`).join(`
`)),v("br"),...w],F}}),o.success?i!=null?D.success(i):e.warning(o.message):i&&i.title?D.warning(i):e.warning({content:"同步失败，请检查对接信息录入中是否填写正确，并确认是否已开启钉钉配置！",duration:5})}).finally(()=>{l.value=!1})})}function h(o,i){return o("div",{id:"box",style:{minHeight:"100px",border:"1px solid #d9d9d9",fontSize:"14px",maxHeight:"250px",whiteSpace:"pre",overflow:"auto",padding:"10px"}},i)}function E(){window.open("https://help.qiaoqiaoyun.com/expand/dingdingsyn.html","_target")}return T(()=>{let o=k();p({tenantId:o,thirdType:"dingtalk"})}),{appConfigData:_,collapseActiveKey:u,registerAppConfigModal:g,dingEditClick:m,handleSuccess:n,syncDingTalk:r,btnLoading:l,handleIconClick:E}}});const a=e=>(x("data-v-25c0e9ed"),e=e(),S(),e),R={class:"base-collapse"},O=a(()=>t("div",{class:"header"}," 钉钉集成 ",-1)),Y=a(()=>t("div",{style:{"font-size":"16px"}}," 1.获取对接信息",-1)),G=a(()=>t("div",{class:"base-desc"},"从钉钉开放平台获取对接信息，即可开始集成以及同步通讯录",-1)),J=a(()=>t("div",{style:{"margin-top":"5px"}},[t("a",{href:"https://help.qiaoqiaoyun.com/expand/dingding.html",target:"_blank"},"如何获取对接信息?")],-1)),P={class:"sync-padding"},Q=a(()=>t("div",{style:{width:"100%","justify-content":"space-between",display:"flex"}},[t("div",{style:{"font-size":"16px"}}," 2.对接信息录入")],-1)),W=a(()=>t("div",{class:"base-desc"},"完成步骤1后，填入Agentld、 AppKey、AppSecret后 可对接应用与同步通讯录",-1)),X={class:"flex-flow"},Z=a(()=>t("div",{class:"base-title"},"Agentld",-1)),tt={class:"base-message"},et={class:"flex-flow"},ot=a(()=>t("div",{class:"base-title"},"AppKey",-1)),it={class:"base-message"},nt={class:"flex-flow"},st=a(()=>t("div",{class:"base-title"},"AppSecret",-1)),at={class:"base-message"},ut={style:{"margin-top":"20px",width:"100%","text-align":"right"}},lt={class:"sync-padding"},pt=a(()=>t("div",{style:{"font-size":"16px",width:"100%"}}," 3.数据同步",-1)),dt={style:{"margin-top":"20px"},class:"base-desc"},rt={style:{"list-style-type":"disc","margin-left":"20px"}},ct=a(()=>t("li",null,"同步部门到本地",-1)),mt={style:{float:"right"}};function _t(e,u,l,_,g,f){const m=c("a-collapse-panel"),p=c("a-collapse"),n=c("a-input-password"),r=c("a-button"),h=c("a-icon"),E=c("a-tooltip"),o=c("ThirdAppConfigModal");return M(),$(q,null,[t("div",R,[O,s(p,{"expand-icon-position":"right",bordered:!1},{default:d(()=>[s(m,{key:"1"},{header:d(()=>[Y]),default:d(()=>[G,J]),_:1})]),_:1}),t("div",P,[s(p,{"expand-icon-position":"right",bordered:!1},{default:d(()=>[s(m,{key:"2"},{header:d(()=>[Q]),default:d(()=>[W,t("div",X,[Z,t("div",tt,[s(n,{value:e.appConfigData.agentId,"onUpdate:value":u[0]||(u[0]=i=>e.appConfigData.agentId=i),readonly:""},null,8,["value"])])]),t("div",et,[ot,t("div",it,[s(n,{value:e.appConfigData.clientId,"onUpdate:value":u[1]||(u[1]=i=>e.appConfigData.clientId=i),readonly:""},null,8,["value"])])]),t("div",nt,[st,t("div",at,[s(n,{value:e.appConfigData.clientSecret,"onUpdate:value":u[2]||(u[2]=i=>e.appConfigData.clientSecret=i),readonly:""},null,8,["value"])])]),t("div",ut,[s(r,{onClick:e.dingEditClick},{default:d(()=>[y("编辑")]),_:1},8,["onClick"])])]),_:1})]),_:1}),t("div",lt,[pt,t("div",dt,[y(" 从钉钉同步到本地 "),t("ul",rt,[ct,t("li",null,[y(" 同步部门下的用户到本地 "),s(E,{title:"同步用户与部门文档"},{default:d(()=>[s(h,{onClick:e.handleIconClick,type:"question-circle",class:"sync-text"},null,8,["onClick"])]),_:1})])]),t("div",mt,[s(r,{loading:e.btnLoading,onClick:e.syncDingTalk},{default:d(()=>[y(z(e.btnLoading?"同步中":"同步"),1)]),_:1},8,["loading","onClick"])])])])])]),s(o,{onRegister:e.registerAppConfigModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])],64)}const Ce=N(H,[["render",_t],["__scopeId","data-v-25c0e9ed"]]);export{Ce as default};
