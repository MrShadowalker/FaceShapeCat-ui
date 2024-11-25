var N=(h,B,V)=>new Promise((H,$)=>{var S=v=>{try{x(V.next(v))}catch(d){$(d)}},I=v=>{try{x(V.throw(v))}catch(d){$(d)}},x=v=>v.done?H(v.value):Promise.resolve(v.value).then(S,I);x((V=V.apply(h,B)).next())});import{d as Re,r as D,M as Ve,f as C,e as xe,u as n,Y as c,a6 as s,ab as b,a9 as r,k as a,a7 as p,aa as w,F as _,E as y,ad as R,ac as P,a8 as ae,Z as O,ae as Ue,n as ne}from"./tinymce-vendor-3c2b3d6e.js";import{u as Oe,B as Be}from"./index-563223fc.js";import{ap as F}from"./jeecg-online-vendor-f57c6456.js";import{bb as j,aI as Ie,b9 as A,au as $e}from"./antd-vue-vendor-05bfa84d.js";const Ee=h=>F.get({url:"/sys/gatewayRoute/list",params:h}),ze=h=>F.post({url:"/sys/gatewayRoute/updateAll",params:h}),Je=(h,B)=>F.delete({url:"/sys/gatewayRoute/delete",data:h},{joinParamsToUrl:!0}).then(()=>{B()}),De={key:0},Pe={key:1},He={key:2},Me={key:3},Te={class:"btn",style:{"padding-top":"10px"}},Ke={class:"btn",style:{"padding-top":"10px"}},Le=Re({__name:"RouteModal",emits:["register","success"],setup(h,{emit:B}){const V=B,H=D({xs:{span:24},sm:{span:5}}),$=D({xs:{span:24},sm:{span:16}}),S=Ve(),I=C(!0),x=C(),v=C();let d=D({inputVisible:!1,inputValue:""});const U=C(0),z=C(-1),le={routerId:[{required:!0,message:"routerId不能为空",trigger:"blur"}],name:[{required:!0,message:"路由名称不能为空",trigger:"blur"}],uri:[{required:!0,message:"uri不能为空",trigger:"blur"}]},q=["Path","Host","Method","After","Before","Between","RemoteAddr"],M=[{key:1,name:"限流过滤器"}],re=C([{name:"Path",args:[]},{name:"Header",args:{header:"",regexp:""}},{name:"Query",args:{param:"",regexp:""}},{name:"Method",args:[]},{name:"Host",args:[]},{name:"Cookie",args:{name:"",regexp:""}},{name:"After",args:[]},{name:"Before",args:[]},{name:"Between",args:[]},{name:"RemoteAddr",args:[]}]),E=C();let u=D({});const[ue,{setDrawerProps:T,closeDrawer:se}]=Oe(e=>N(this,null,function*(){I.value=!!(e!=null&&e.isUpdate),T({confirmLoading:!1}),de(),n(I)&&(u=Object.assign(u,e.record))})),oe=xe(()=>n(I)?"编辑路由":"新增路由");function ie(e,l){let i=e.args.filter(m=>m!==l);e.args=i}function de(){u=Object.assign(u,{id:"",routerId:"",name:"",uri:"",status:1,predicates:[],filters:[]})}function pe(e){u.predicates.push({args:e.args,name:e.name})}function ce(e,l,i){l[i]=e.target.value}function fe(e,l,i,m){U.value=m,z.value=i,d.inputValue=l,ne(()=>{v.value[0].focus()})}function me(e,l){d.inputValue="",d.inputVisible=!0,U.value=l,ne(()=>{x.value[0].focus()})}function J(e){}function Q(e,l){e.predicates.splice(l,1)}function ge(e,l){e.args.splice(l,1)}function ve(e,l){e.filters.splice(l,1)}function _e(e){e.args.push({key:"key"+e.args.length+1,value:""})}function ye(e){e.key==0&&u.filters.push({args:[{key:"name",value:"default"},{key:"fallbackUri",value:"forward:/fallback"}],name:"Hystrix",title:M[0].name}),e.key==1&&u.filters.push({args:[{key:"key-resolver",value:"#{@ipKeyResolver}"},{key:"redis-rate-limiter.replenishRate",value:20},{key:"redis-rate-limiter.burstCapacity",value:20}],name:"RequestRateLimiter",title:M[0].name})}function Y(e){let l=e.args;const i=d.inputValue;i&&l.indexOf(i)===-1&&(e.args=[...l,d.inputValue]),d.inputVisible=!1,d.inputValue="",z.value=-1,U.value=-1}function Z(e,l,i){d.inputValue&&(e.args[i]=d.inputValue),z.value=-1,U.value=-1}function Ne(){}function ke(){return N(this,null,function*(){yield E.value.validate().then(()=>{try{T({confirmLoading:!0});let e=Object.assign({},u,{predicates:JSON.stringify(u.predicates),filters:JSON.stringify(u.filters)});ze({router:e}).then(()=>{se(),V("success")})}finally{T({confirmLoading:!1})}})})}return(e,l)=>{const i=c("a-input"),m=c("a-form-item"),he=c("a-switch"),K=c("a-divider"),G=c("a-tag"),W=c("a-col"),Ce=c("a-row"),X=c("a-menu-item"),ee=c("a-menu"),L=c("a-button"),te=c("a-dropdown"),be=c("a-form-item-rest"),we=c("a-form");return s(),b(n(Be),Ue(e.$attrs,{onRegister:n(ue),title:oe.value,width:"30%",onOk:ke,destroyOnClose:"",showFooter:""}),{default:r(()=>[a(we,{ref_key:"formRef",ref:E,"label-col":H,"wrapper-col":$,model:n(u),rules:le},{default:r(()=>[a(m,{label:"路由ID",name:"routerId"},{default:r(()=>[a(i,{value:n(u).routerId,"onUpdate:value":l[0]||(l[0]=t=>n(u).routerId=t),placeholder:"路由唯一ID"},null,8,["value"])]),_:1}),a(m,{label:"路由名称",name:"name"},{default:r(()=>[a(i,{value:n(u).name,"onUpdate:value":l[1]||(l[1]=t=>n(u).name=t),placeholder:"路由名称"},null,8,["value"])]),_:1}),a(m,{label:"路由URI",name:"uri"},{default:r(()=>[a(i,{value:n(u).uri,"onUpdate:value":l[2]||(l[2]=t=>n(u).uri=t),placeholder:"路由URL"},null,8,["value"])]),_:1}),a(m,{label:"路由状态",name:"status"},{default:r(()=>[a(he,{"default-checked":"","checked-value":1,"un-checked-value":0,checked:n(u).status,"onUpdate:checked":l[3]||(l[3]=t=>n(u).status=t)},null,8,["checked"])]),_:1}),a(m,{name:"predicates",label:"路由条件"},{default:r(()=>[(s(!0),p(_,null,w(n(u).predicates,(t,k)=>(s(),p("div",null,[q.includes(t.name)?(s(),p(_,{key:0},[a(K,null,{default:r(()=>[y(R(t.name)+" ",1),a(n(j),{size:"22",onClick:o=>Q(n(u),k)},null,8,["onClick"])]),_:2},1024),P("div",null,[(s(!0),p(_,null,w(t.args,(o,f)=>(s(),p(_,null,[f==z.value&&k==U.value?(s(),b(i,{key:0,ref_for:!0,ref_key:"inputRef2",ref:v,type:"text",size:"small",style:{width:"190px"},value:n(d).inputValue,"onUpdate:value":l[4]||(l[4]=g=>n(d).inputValue=g),onChange:J,onBlur:g=>Z(t,o,f),onKeyup:ae(g=>Z(t,o,f),["enter"])},null,8,["value","onBlur","onKeyup"])):(s(),b(G,{key:o,style:{"margin-bottom":"2px"},closable:!0,onClose:()=>ie(t,o),onClick:g=>fe(t,o,f,k)},{default:r(()=>[y(R(o),1)]),_:2},1032,["onClose","onClick"]))],64))),256)),n(d).inputVisible&&k==U.value?(s(),b(i,{key:0,ref_for:!0,ref_key:"inputRef",ref:x,type:"text",size:"small",style:{width:"100px"},value:n(d).inputValue,"onUpdate:value":l[5]||(l[5]=o=>n(d).inputValue=o),onChange:J,onBlur:o=>Y(t),onKeyup:ae(o=>Y(t),["enter"])},null,8,["value","onBlur","onKeyup"])):(s(),b(G,{key:1,style:{background:"#fff",borderstyle:"dashed","margin-bottom":"2px"},onClick:o=>me(t,k)},{default:r(()=>[a(n(Ie),{size:"22"}),y(" 新建"+R(t.name),1)]),_:2},1032,["onClick"]))])],64)):O("",!0),q.includes(t.name)?O("",!0):(s(),p(_,{key:1},[a(K,null,{default:r(()=>[y(R(t.name)+" ",1),a(n(j),{size:"22",onClick:o=>Q(n(u),k)},null,8,["onClick"])]),_:2},1024),P("div",null,[(s(!0),p(_,null,w(t.args,(o,f)=>(s(),b(Ce,null,{default:r(()=>[a(W,{span:5,style:{"margin-top":"8px"}},{default:r(()=>[f=="header"?(s(),p("span",De,"Header名称")):O("",!0),f=="regexp"?(s(),p("span",Pe,"参数值")):O("",!0),f=="param"?(s(),p("span",He,"参数名")):O("",!0),f=="name"?(s(),p("span",Me,"参数名")):O("",!0)]),_:2},1024),a(W,{span:18},{default:r(()=>[a(i,{defaultValue:o,placeholder:"参数值",style:{width:"70%","margin-right":"8px","margin-top":"3px"},onChange:g=>ce(g,t.args,f)},null,8,["defaultValue","onChange"])]),_:2},1024)]),_:2},1024))),256))])],64))]))),256)),P("p",Te,[a(te,null,{overlay:r(()=>[a(ee,null,{default:r(()=>[(s(!0),p(_,null,w(re.value,t=>(s(),b(X,{key:t.name,onClick:k=>pe(t)},{default:r(()=>[y(R(t.name),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:r(()=>[a(L,{type:"dashed",style:{"margin-left":"8px",width:"100%"}},{default:r(()=>[y(" 添加路由条件 "),a(n(A),{size:22})]),_:1})]),_:1})])]),_:1}),a(m,{name:"predicates",label:"过滤器"},{default:r(()=>[(s(!0),p(_,null,w(n(u).filters,(t,k)=>(s(),p("div",null,[a(K,null,{default:r(()=>[y(R(t.name)+" ",1),a(n(j),{size:"22",onClick:o=>ve(n(u),k)},null,8,["onClick"])]),_:2},1024),(s(!0),p(_,null,w(t.args,(o,f)=>(s(),p("div",{key:o.key},[a(be,null,{default:r(()=>[a(i,{value:o.key,"onUpdate:value":g=>o.key=g,placeholder:"参数键",style:{width:"45%","margin-right":"8px"}},null,8,["value","onUpdate:value"]),a(i,{value:o.value,"onUpdate:value":g=>o.value=g,placeholder:"参数值",style:{width:"40%","margin-right":"8px","margin-top":"3px"}},null,8,["value","onUpdate:value"])]),_:2},1024),a(n($e),{size:22,onClick:g=>ge(t,f)},null,8,["onClick"])]))),128)),a(L,{type:"dashed",style:{"margin-left":"28%",width:"37%","margin-top":"5px"},size:"small",onClick:o=>_e(t)},{default:r(()=>[a(n(A),{size:22}),y(" 添加参数 ")]),_:2},1032,["onClick"])]))),256)),P("p",Ke,[a(te,null,{overlay:r(()=>[a(ee,{onClick:ye},{default:r(()=>[(s(),p(_,null,w(M,t=>a(X,{key:t.key,name:t.name},{default:r(()=>[y(R(t.name),1)]),_:2},1032,["name"])),64))]),_:1})]),default:r(()=>[a(L,{type:"dashed",style:{"margin-left":"8px",width:"100%"}},{default:r(()=>[y(" 添加过滤器 "),a(n(A))]),_:1})]),_:1})])]),_:1})]),_:1},8,["label-col","wrapper-col","model"])]),_:1},16,["onRegister","title"])}}}),Qe=Object.freeze(Object.defineProperty({__proto__:null,default:Le},Symbol.toStringTag,{value:"Module"}));export{Qe as R,Le as _,Je as d,Ee as g};