var W=Object.defineProperty;var A=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var K=(o,a,n)=>a in o?W(o,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[a]=n,D=(o,a)=>{for(var n in a||(a={}))X.call(a,n)&&K(o,n,a[n]);if(A)for(var n of A(a))$.call(a,n)&&K(o,n,a[n]);return o};var R=(o,a,n)=>new Promise((e,g)=>{var x=i=>{try{p(n.next(i))}catch(f){g(f)}},d=i=>{try{p(n.throw(i))}catch(f){g(f)}},p=i=>i.done?e(i.value):Promise.resolve(i.value).then(x,d);p((n=n.apply(o,a)).next())});import{B as ee}from"./index-64ecc8b2.js";import{m as te,au as ae,k as ne}from"./antd-vue-vendor-05bfa84d.js";import se from"./UserList-9509c9fd.js";import le from"./SelectedUserItem-6a7f0563.js";import oe from"./UserListAndDepart-7270315e.js";import re from"./UserListAndRole-64eda5ed.js";import{u as ce,ap as ie,_ as de}from"./jeecg-online-vendor-f57c6456.js";import{f as _,e as ue,I as fe,u as N,Y as r,a6 as y,ab as w,a9 as u,ac as m,Z as _e,k as c,E as j,a7 as z,F as V,aa as Q,ad as me,aj as F}from"./tinymce-vendor-3c2b3d6e.js";import{C as pe}from"./index-37448b2d.js";const q="#{sys_user_code}",he={id:q,username:q,realname:"当前用户",avatarIcon:"idcard-outlined",avatarColor:"rgb(75 176 79)"},ve=ne,Se={name:"UserSelectModal",components:{BasicModal:ee,SearchOutlined:te,CloseOutlined:ae,SelectedUserItem:le,UserList:se,DepartUserList:oe,RoleUserList:re,APagination:ve},props:{multi:{type:Boolean,default:!1},getContainer:{type:Function,default:null},izExcludeMy:{type:Boolean,default:!1},inSuperQuery:{type:Boolean,default:!1}},emits:["selected","register"],setup(o,{emit:a}){const n=_("1"),e=_([]),g=ce(),x=ue(()=>{let t=e.value;return!t||t.length==0?[]:t.map(s=>s.id)}),d=_([]),[p]=pe(t=>{let s=t.list;s&&s.length>0?e.value=[...s]:e.value=[],t.excludeUserIdList?d.value=t.excludeUserIdList:d.value=[],o.izExcludeMy&&d.value.push(g.getUserInfo.id),U()});function i(){let t=fe(e.value);a("selected",t)}const f=_(""),b=_([]);function O(t){b.value=[{value:"",label:"全部用户"},...t],f.value=""}function L(){U()}const I=_(!1),S=_("");function T(t){t&&P(t),I.value=!0}function B(){U()}function E(t){t&&P(t),S.value="",I.value=!1,U()}const C=_(1),k=_(0),l=_([]);function H(){return R(this,null,function*(){yield U()})}function U(){return R(this,null,function*(){const t="/sys/user/selectUserList";let s={pageNo:C.value,pageSize:10};S.value&&(s.keyword=S.value),f.value&&(s.departId=f.value);const h=yield ie.get({url:t,params:s},{isTransformResponse:!1});if(h.success){let{records:v,total:M}=h.result;N(d)&&N(d).length>0&&(M=M-N(d).length),k.value=M,Y(v),l.value=v}})}function Y(t){C.value==1&&o.inSuperQuery===!0&&t.unshift(D({},he))}function Z(t){if(o.multi===!0){let s=e.value;x.value.indexOf(t.id)<0&&(s.push(D({},t)),e.value=s)}else e.value=[D({},t)]}function G(t){let s=e.value,h=-1;for(let v=0;v<s.length;v++)if(s[v].id===t){h=v;break}h>=0&&(s.splice(h,1),e.value=s)}function J(t){n.value=t}function P(t){t.preventDefault(),t.stopPropagation()}return U(),{selectedDepart:f,departOptions:b,initDepartOptions:O,onDepartChange:L,register:p,handleOk:i,searchText:S,searchInputStatus:I,showSearchInput:T,onSearchUser:B,clearSearch:E,myActiveKey:n,onChangeTab:J,pageNo:C,totalRecord:k,onPageChange:H,userDataList:l,selectedUserList:e,selectedIdList:x,onSelectUser:Z,unSelectUser:G,excludeUserIdList:d}}};const Ue={style:{position:"relative","min-height":"350px"}},ye={class:"my-tabs"},ge={class:"selected-users",style:{width:"100%","overflow-x":"hidden"}},xe={style:{display:"flex","justify-content":"space-between",width:"100%"}},Le={class:"select-user-page-info"};function Ie(o,a,n,e,g,x){const d=r("a-select-option"),p=r("a-select"),i=r("SearchOutlined"),f=r("CloseOutlined"),b=r("a-input"),O=r("user-list"),L=r("a-tab-pane"),I=r("depart-user-list"),S=r("role-user-list"),T=r("a-tabs"),B=r("SelectedUserItem"),E=r("a-pagination"),C=r("a-button"),k=r("BasicModal");return y(),w(k,{onRegister:e.register,getContainer:n.getContainer,canFullscreen:!1,title:"选择用户",width:600,wrapClassName:"j-user-select-modal2"},{footer:u(()=>[m("div",xe,[m("div",Le,[e.myActiveKey=="1"?(y(),w(E,{key:0,current:e.pageNo,"onUpdate:current":a[3]||(a[3]=l=>e.pageNo=l),size:"small",total:e.totalRecord,"show-quick-jumper":"",onChange:e.onPageChange},null,8,["current","total","onChange"])):_e("",!0)]),c(C,{type:"primary",onClick:e.handleOk},{default:u(()=>[j("确 定")]),_:1},8,["onClick"])])]),default:u(()=>[c(p,{value:e.selectedDepart,"onUpdate:value":a[0]||(a[0]=l=>e.selectedDepart=l),style:{width:"100%"},class:"depart-select",onChange:e.onDepartChange},{default:u(()=>[(y(!0),z(V,null,Q(e.departOptions,l=>(y(),w(d,{value:l.value},{default:u(()=>[j(me(l.label),1)]),_:2},1032,["value"]))),256))]),_:1},8,["value","onChange"]),m("div",Ue,[m("div",{class:F(e.searchInputStatus?"my-search all-width":"my-search")},[m("span",{class:F(e.searchInputStatus?"hidden":""),style:{"margin-left":"10px"}},[c(i,{style:{color:"#c0c0c0"},onClick:e.showSearchInput},null,8,["onClick"])],2),m("div",{style:{width:"100%"},class:F(e.searchInputStatus?"":"hidden")},[c(b,{value:e.searchText,"onUpdate:value":a[1]||(a[1]=l=>e.searchText=l),onPressEnter:e.onSearchUser,style:{width:"100%"},placeholder:"请输入用户名按回车搜索"},{prefix:u(()=>[c(i,{style:{color:"#c0c0c0"}})]),suffix:u(()=>[c(f,{title:"退出搜索",onClick:e.clearSearch},null,8,["onClick"])]),_:1},8,["value","onPressEnter"])],2)],2),m("div",ye,[c(T,{activeKey:e.myActiveKey,"onUpdate:activeKey":a[2]||(a[2]=l=>e.myActiveKey=l),centered:!0,onChange:e.onChangeTab},{default:u(()=>[c(L,{key:"1",tab:"全部",forceRender:""},{default:u(()=>[c(O,{multi:n.multi,excludeUserIdList:e.excludeUserIdList,dataList:e.userDataList,selectedIdList:e.selectedIdList,depart:"",onSelected:e.onSelectUser,onUnSelect:e.unSelectUser},null,8,["multi","excludeUserIdList","dataList","selectedIdList","onSelected","onUnSelect"])]),_:1}),c(L,{key:"2",tab:"按部门",forceRender:""},{default:u(()=>[c(I,{searchText:e.searchText,selectedIdList:e.selectedIdList,excludeUserIdList:e.excludeUserIdList,onLoaded:e.initDepartOptions,onSelected:e.onSelectUser,onUnSelect:e.unSelectUser},null,8,["searchText","selectedIdList","excludeUserIdList","onLoaded","onSelected","onUnSelect"])]),_:1}),c(L,{key:"3",tab:"按角色",forceRender:""},{default:u(()=>[c(S,{excludeUserIdList:e.excludeUserIdList,searchText:e.searchText,selectedIdList:e.selectedIdList,onSelected:e.onSelectUser,onUnSelect:e.unSelectUser},null,8,["excludeUserIdList","searchText","selectedIdList","onSelected","onUnSelect"])]),_:1})]),_:1},8,["activeKey","onChange"])]),m("div",ge,[(y(!0),z(V,null,Q(e.selectedUserList,l=>(y(),w(B,{info:l,onUnSelect:e.unSelectUser},null,8,["info","onUnSelect"]))),256))])])]),_:1},8,["onRegister","getContainer"])}const Ce=de(Se,[["render",Ie]]),Ne=Object.freeze(Object.defineProperty({__proto__:null,default:Ce},Symbol.toStringTag,{value:"Module"}));export{Ce as U,he as a,Ne as b,q as m};