import{d as f,ac as l,Y as n,a6 as s,ab as x,a9 as t,a7 as d,Z as r,k as a,E as c}from"./tinymce-vendor-3c2b3d6e.js";import{_ as h}from"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";const I=[{title:"Name",dataIndex:"name",key:"name"},{title:"Platform",dataIndex:"platform",key:"platform"},{title:"Version",dataIndex:"version",key:"version"},{title:"Upgraded",dataIndex:"upgradeNum",key:"upgradeNum"},{title:"Creator",dataIndex:"creator",key:"creator"},{title:"Date",dataIndex:"createdAt",key:"createdAt"},{title:"Action",key:"operation"}],m=[];for(let e=0;e<3;++e)m.push({key:e,name:"Screem",platform:"iOS",version:"10.3.4.5654",upgradeNum:500,creator:"Jack",createdAt:"2014-12-24 23:12:00"});const N=[{title:"Date",dataIndex:"date",key:"date"},{title:"Name",dataIndex:"name",key:"name"},{title:"Status",dataIndex:"state",key:"state"},{title:"Upgrade Status",dataIndex:"upgradeNum",key:"upgradeNum"},{title:"Action",dataIndex:"operation",key:"operation"}],p=[];for(let e=0;e<3;++e)p.push({key:e,date:"2014-12-24 23:12:00",name:"This is production name",upgradeNum:"Upgraded: 56"});const g=f({components:{},setup(){return{data:m,columns:I,innerColumns:N,innerData:p}}}),b={key:0},C={key:0},A={key:1,class:"table-operation"},v=l("a",null,"Pause",-1),S=l("a",null,"Stop",-1),V=l("a",null," More ",-1);function w(e,B,D,$,P,T){const _=n("a-badge"),i=n("a-menu-item"),k=n("a-menu"),y=n("a-dropdown"),u=n("a-table");return s(),x(u,{columns:e.columns,"data-source":e.data,class:"components-table-demo-nested"},{bodyCell:t(({column:o})=>[o.key==="operation"?(s(),d("a",b,"Publish")):r("",!0)]),expandedRowRender:t(()=>[a(u,{columns:e.innerColumns,"data-source":e.innerData,pagination:!1},{bodyCell:t(({column:o})=>[o.dataIndex==="state"?(s(),d("span",C,[a(_,{status:"success"}),c(" Finished ")])):r("",!0),o.dataIndex==="operation"?(s(),d("span",A,[v,S,a(y,null,{overlay:t(()=>[a(k,null,{default:t(()=>[a(i,null,{default:t(()=>[c("Action 1")]),_:1}),a(i,null,{default:t(()=>[c("Action 2")]),_:1})]),_:1})]),default:t(()=>[V]),_:1})])):r("",!0)]),_:1},8,["columns","data-source"])]),_:1},8,["columns","data-source"])}const J=h(g,[["render",w]]);export{J as default};