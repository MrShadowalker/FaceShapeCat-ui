import{ah as $,N as i,a6 as d,a7 as m}from"./antd-vue-vendor-05bfa84d.js";import{d as k,a4 as w,a5 as A,ac as s,Y as a,a6 as r,ab as u,aj as c,a9 as e,k as l,a7 as f,F as P,aa as y,Z as h,ad as p,E as v}from"./tinymce-vendor-3c2b3d6e.js";import{l as b}from"./index-37448b2d.js";import{cardList as N}from"./data-8fe796b0.js";import{P as S}from"./index-31a6ff64.js";import{_ as L}from"./jeecg-online-vendor-f57c6456.js";import"./vxe-table-vendor-26792376.js";import"./useContentHeight-bfd1eb89.js";import"./useWindowSizeFn-e63bb4b0.js";import"./useContentViewHeight-6be29838.js";import"./usePageContext-b7687fba.js";import"./injectionKey-69710956.js";const V=k({components:{Icon:b,Progress:$,PageWrapper:S,[i.name]:i,[i.Item.name]:i.Item,AListItemMeta:i.Item.Meta,[d.name]:d,[m.name]:m},setup(){return{prefixCls:"list-basic",list:N,pagination:{show:!0,pageSize:3}}}});const n=t=>(w("data-v-7011cfb0"),t=t(),A(),t),W=n(()=>s("div",null,"我的待办",-1)),z=n(()=>s("p",null,"8个任务",-1)),M=n(()=>s("div",null,"本周任务平均处理时间",-1)),j=n(()=>s("p",null,"32分钟",-1)),D=n(()=>s("div",null,"本周完成任务数",-1)),O=n(()=>s("p",null,"24个任务",-1)),R={key:0,class:"extra"},T={class:"description"},Y={class:"info"},Z=n(()=>s("span",null,"Owner",-1)),q=n(()=>s("span",null,"开始时间",-1)),G={class:"progress"};function H(t,J,K,Q,U,X){const _=a("a-col"),C=a("a-row"),g=a("Icon"),F=a("Progress"),I=a("a-list-item-meta"),x=a("a-list-item"),B=a("a-list"),E=a("PageWrapper");return r(),u(E,{class:c(t.prefixCls),title:"标准列表"},{default:e(()=>[s("div",{class:c(`${t.prefixCls}__top`)},[l(C,{gutter:12},{default:e(()=>[l(_,{span:8,class:c(`${t.prefixCls}__top-col`)},{default:e(()=>[W,z]),_:1},8,["class"]),l(_,{span:8,class:c(`${t.prefixCls}__top-col`)},{default:e(()=>[M,j]),_:1},8,["class"]),l(_,{span:8,class:c(`${t.prefixCls}__top-col`)},{default:e(()=>[D,O]),_:1},8,["class"])]),_:1})],2),s("div",{class:c(`${t.prefixCls}__content`)},[l(B,{pagination:t.pagination},{default:e(()=>[(r(!0),f(P,null,y(t.list,o=>(r(),u(x,{key:o.id,class:"list"},{default:e(()=>[l(I,null,{avatar:e(()=>[o.icon?(r(),u(g,{key:0,class:"icon",icon:o.icon,color:o.color},null,8,["icon","color"])):h("",!0)]),title:e(()=>[s("span",null,p(o.title),1),o.extra?(r(),f("div",R,p(o.extra),1)):h("",!0)]),description:e(()=>[s("div",T,p(o.description),1),s("div",Y,[s("div",null,[Z,v(p(o.author),1)]),s("div",null,[q,v(p(o.datetime),1)])]),s("div",G,[l(F,{percent:o.percent,status:"active"},null,8,["percent"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["pagination"])],2)]),_:1},8,["class"])}const us=L(V,[["render",H],["__scopeId","data-v-7011cfb0"]]);export{us as default};
