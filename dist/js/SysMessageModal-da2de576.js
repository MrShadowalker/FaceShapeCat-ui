var B=(D,i,f)=>new Promise((e,_)=>{var p=n=>{try{s(f.next(n))}catch(u){_(u)}},m=n=>{try{s(f.throw(n))}catch(u){_(u)}},s=n=>n.done?e(n.value):Promise.resolve(n.value).then(p,m);s((f=f.apply(D,i)).next())});import{B as Q}from"./index-64ecc8b2.js";import{bi as W,au as X,bj as $,bk as ee,aI as ae}from"./antd-vue-vendor-05bfa84d.js";import{u as te,U as se}from"./JSelectUser-6efbe652.js";import{f as y,r as P,e as F,u as ne,ac as t,Y as c,a6 as h,a7 as v,F as O,k as o,a9 as d,aj as K,ao as le,ad as T,ab as j,aa as oe,Z as re}from"./tinymce-vendor-3c2b3d6e.js";import ie from"./SysMessageList-c5d0d00b.js";import ce from"./DetailModal-39b00bb9.js";import{_ as de}from"./jeecg-online-vendor-f57c6456.js";import{C as fe,E as N}from"./index-37448b2d.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./vxe-table-vendor-26792376.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./useFormItem-613b6d5d.js";import"./useSysMessage-e75c3f9d.js";const _e={name:"SysMessageModal",components:{BasicModal:Q,FilterOutlined:W,CloseOutlined:X,BellFilled:$,ExclamationOutlined:ee,JSelectUser:te,SysMessageList:ie,UserSelectModal:se,PlusOutlined:ae,DetailModal:ce},emits:["register","refresh"],setup(D,{emit:i}){const f=y(),e=y(),_=y("all");function p(a,l){_.value=l,n()}function m(a){_.value=a}const s=P({fromUser:"",realname:"",rangeDateKey:"7day",rangeDate:[]});function n(){let a={fromUser:s.fromUser,rangeDateKey:s.rangeDateKey,rangeDate:s.rangeDate};_.value=="all"?f.value.reload(a):e.value.reload(a)}const[u,{closeModal:b}]=fe(a=>B(this,null,function*(){n()})),k=y(!1);function C(a,l){k.value=!0}const g=P([{key:"jt",text:"今天",active:!1},{key:"zt",text:"昨天",active:!1},{key:"qt",text:"前天",active:!1},{key:"bz",text:"本周",active:!1},{key:"sz",text:"上周",active:!1},{key:"by",text:"本月",active:!1},{key:"sy",text:"上月",active:!1},{key:"7day",text:"七日",active:!0},{key:"zdy",text:"自定义",active:!1}]);function x(a){for(let l of g)l.key!=a.key&&(l.active=!1);a.active=!a.active,a.active==!1?s.rangeDateKey="":s.rangeDateKey=a.key,a.key=="zdy"?a.active==!1&&(s.rangeDate=[],n()):n()}const M=F(()=>{let a=g.filter(l=>l.active==!0);return!!(a&&a.length>0&&a[0].text=="自定义")}),S=y([]);function R(a,l){s.rangeDate=[...l],n()}function r(a){i("refresh",a)}const z=F(()=>{const{fromUser:a,rangeDateKey:l,realname:Z}=s;if(!a&&!l)return"";let U=[];if(a&&U.push(Z),l){let w=g.filter(H=>H.key==l);w&&w.length>0&&U.push(w[0].text)}return U.join("、")}),[E,{openModal:I}]=N();function V(a,l){a&&a.length>0&&(s.fromUser=l,s.realname=a[0].label)}function A(){I(!0,{})}function G(){s.fromUser="",s.realname=""}function L(){s.fromUser="",s.realname="",s.rangeDateKey="",s.rangeDate=[];for(let a of g)a.active=!1;n()}const[q,{openModal:J}]=N();function Y(a){J(!0,{record:ne(a),isUpdate:!0})}return{conditionStr:z,regModal:E,getSelectedUser:V,openSelectPerson:A,clearSearchParamsUser:G,clearAll:L,registerModal:u,activeKey:_,handleChangePanel:m,handleChangeTab:p,showSearch:k,searchParams:s,handleChangeSearchPerson:C,dateTags:g,handleClickDateTag:x,showRangeDate:M,searchRangeDate:S,handleChangeSearchDate:R,closeModal:b,hrefThenClose:r,allMessageRef:f,starMessageRef:e,registerDetail:q,showDetailModal:Y}}},ge={class:"sys-msg-modal-title"},he=t("div",{class:"title"},null,-1),me={class:"ant-tabs-nav-wrap"},ue={class:"ant-tabs-nav-scroll"},ve={class:"ant-tabs-nav ant-tabs-nav-animated"},ye={class:"icon-right"},pe={class:"icons"},be=t("span",{class:"search-label"},"回复、提到我的人?：",-1),ke={style:{display:"inline-block"}},Ce={key:0,class:"selected-user"},De={class:"clear-user-icon"},xe={class:"search-date"},Me=t("div",{class:"date-label"},"时间：",-1),Se={class:"date-tags"},Re={class:"tags-container"},Ue=["onClick"],we={key:0,class:"cust-range-date"},Ke={key:0,class:"anticon filtera"},Te={style:{"font-size":"12px","margin-left":"3px"}},ze={style:{display:"flex",margin:"0 5px"}},Be={class:"sys-message-card"},Pe=t("div",null,null,-1);function Fe(D,i,f,e,_,p){const m=c("close-outlined"),s=c("plus-outlined"),n=c("a-button"),u=c("a-range-picker"),b=c("filter-outlined"),k=c("a-popover"),C=c("sys-message-list"),g=c("a-tab-pane"),x=c("a-tabs"),M=c("BasicModal"),S=c("user-select-modal"),R=c("DetailModal");return h(),v(O,null,[o(M,{canFullscreen:!1,draggable:!1,closable:!1,onRegister:e.registerModal,wrapClassName:"sys-msg-modal",width:800,footer:null,destroyOnClose:""},{title:d(()=>[t("div",ge,[he,t("div",me,[t("div",ue,[t("div",ve,[t("div",null,[t("div",{onClick:i[0]||(i[0]=r=>e.handleChangeTab(r,"all")),role:"tab","aria-disabled":"false","aria-selected":"false",class:K(["ant-tabs-tab",{"ant-tabs-tab-active":e.activeKey=="all"}])}," 全部消息 ",2),t("div",{onClick:i[1]||(i[1]=r=>e.handleChangeTab(r,"star")),role:"tab","aria-disabled":"false","aria-selected":"true",class:K(["ant-tabs-tab",{"ant-tabs-tab-active":e.activeKey=="star"}])}," 标星消息 ",2)]),t("div",{class:"ant-tabs-ink-bar ant-tabs-ink-bar-animated",style:le({transform:e.activeKey=="all"?"translate3d(130px, 0px, 0px)":"translate3d(215px, 0px, 0px)",display:"block",width:"88px",height:"1px"})},null,4)])])]),t("div",ye,[t("div",pe,[o(k,{placement:"bottomRight",overlayStyle:{width:"400px"},trigger:"click",open:e.showSearch,"onUpdate:open":i[3]||(i[3]=r=>e.showSearch=r)},{content:d(()=>[t("div",null,[be,t("span",ke,[e.searchParams.fromUser?(h(),v("div",Ce,[t("span",null,T(e.searchParams.realname),1),t("span",De,[o(m,{style:{"font-size":"12px"},onClick:e.clearSearchParamsUser},null,8,["onClick"])])])):(h(),j(n,{key:1,type:"dashed",shape:"circle",onClick:e.openSelectPerson},{default:d(()=>[o(s)]),_:1},8,["onClick"]))])]),t("div",xe,[Me,t("div",Se,[t("div",Re,[(h(!0),v(O,null,oe(e.dateTags,r=>(h(),v("div",{class:K(r.active==!0?"tag active":"tag"),onClick:z=>e.handleClickDateTag(r)},T(r.text),11,Ue))),256))]),e.showRangeDate?(h(),v("div",we,[o(u,{value:e.searchRangeDate,"onUpdate:value":i[2]||(i[2]=r=>e.searchRangeDate=r),onChange:e.handleChangeSearchDate},null,8,["value","onChange"])])):re("",!0)])])]),default:d(()=>[e.conditionStr?(h(),v("span",Ke,[o(b),t("span",Te,T(e.conditionStr),1),t("span",ze,[o(m,{style:{"font-size":"12px"},onClick:e.clearAll},null,8,["onClick"])])])):(h(),j(b,{key:1}))]),_:1},8,["open"]),o(m,{onClick:e.closeModal},null,8,["onClick"])])])])]),default:d(()=>[t("div",Be,[o(x,{activeKey:e.activeKey,center:"",onTabClick:e.handleChangePanel,animated:""},{renderTabBar:d(()=>[Pe]),default:d(()=>[o(g,{tab:"全部消息",key:"all",forceRender:""},{default:d(()=>[o(C,{ref:"allMessageRef",onClose:e.hrefThenClose,onDetail:e.showDetailModal},null,8,["onClose","onDetail"])]),_:1}),o(g,{tab:"标星消息",key:"star",forceRender:""},{default:d(()=>[o(C,{ref:"starMessageRef",star:"",onClose:e.hrefThenClose,onDetail:e.showDetailModal},null,8,["onClose","onDetail"])]),_:1})]),_:1},8,["activeKey","onTabClick"])])]),_:1},8,["onRegister"]),o(S,{isRadioSelection:"",showButton:!1,labelKey:"realname",rowKey:"username",onRegister:e.regModal,onGetSelectResult:e.getSelectedUser},null,8,["onRegister","onGetSelectResult"]),o(R,{onRegister:e.registerDetail,zIndex:1001},null,8,["onRegister"])],64)}const $e=de(_e,[["render",Fe]]);export{$e as default};
