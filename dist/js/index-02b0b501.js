import{d as g,f as i,n as h,u as F,Y as r,a6 as k,ab as B,a9 as n,k as e,E as y}from"./tinymce-vendor-3c2b3d6e.js";import{_ as A}from"./index-d4a67b72.js";import{t as D}from"./data-27ea16d4.js";import{P as v}from"./index-31a6ff64.js";import{L as K,a6 as L,a7 as R,S as $,d as T,bc as b}from"./antd-vue-vendor-05bfa84d.js";import{w,_ as P}from"./jeecg-online-vendor-f57c6456.js";import"./index-37448b2d.js";import"./vxe-table-vendor-26792376.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./useContentHeight-bfd1eb89.js";import"./useWindowSizeFn-e63bb4b0.js";import"./useContentViewHeight-6be29838.js";import"./usePageContext-b7687fba.js";import"./injectionKey-69710956.js";const S=g({name:"system-testtree",components:{BasicTree:A,PageWrapper:v,Card:K,Row:L,Col:R,Spin:$},setup(){const a=i(null),f=i(null),C=i(null),p=i([]),l=i(!1);function _(t,d){}function u(){l.value=!0,setTimeout(()=>{p.value=T(D),l.value=!1,h(()=>{var t;(t=F(f))==null||t.expandAll(!0)})},2e3)}function o(){l.value=!0,setTimeout(()=>{p.value=T(D),l.value=!1},2e3)}const c=i([{title:"parent ",key:"0-0"}]);function m(t){return new Promise(d=>{if(w(t.children)&&t.children.length>0){d();return}setTimeout(()=>{const s=F(a);if(s){const E=[{title:`Child Node ${t.eventKey}-0`,key:`${t.eventKey}-0`},{title:`Child Node ${t.eventKey}-1`,key:`${t.eventKey}-1`}];s.updateNodeByKey(t.eventKey,{children:E}),s.setExpandedKeys(b([t.eventKey,...s.getExpandedKeys()]))}d()},300)})}return{treeData:D,handleCheck:_,tree:c,onLoadData:m,asyncTreeRef:a,asyncExpandTreeRef:f,loadTreeRef:C,tree2:p,loadTreeData:u,treeLoading:l,loadTreeData2:o}}});function x(a,f,C,p,l,_){const u=r("BasicTree"),o=r("Col"),c=r("a-button"),m=r("Spin"),t=r("Card"),d=r("Row"),s=r("PageWrapper");return k(),B(s,{title:"Tree基础示例"},{default:n(()=>[e(d,{gutter:[16,16]},{default:n(()=>[e(o,{span:8},{default:n(()=>[e(u,{title:"基础示例，默认展开第一层",treeData:a.treeData,defaultExpandLevel:"1"},null,8,["treeData"])]),_:1}),e(o,{span:8},{default:n(()=>[e(u,{title:"可勾选，默认全部展开",treeData:a.treeData,checkable:!0,defaultExpandAll:"",onCheck:a.handleCheck},null,8,["treeData","onCheck"])]),_:1}),e(o,{span:8},{default:n(()=>[e(u,{title:"指定默认展开/勾选示例",treeData:a.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])]),_:1}),e(o,{span:8},{default:n(()=>[e(u,{title:"懒加载异步树",ref:"asyncTreeRef",treeData:a.tree,"load-data":a.onLoadData},null,8,["treeData","load-data"])]),_:1}),e(o,{span:8},{default:n(()=>[e(t,{title:"异步数据，默认展开"},{extra:n(()=>[e(c,{onClick:a.loadTreeData,loading:a.treeLoading},{default:n(()=>[y("加载数据")]),_:1},8,["onClick","loading"])]),default:n(()=>[e(m,{spinning:a.treeLoading},{default:n(()=>[e(u,{ref:"asyncExpandTreeRef",treeData:a.tree2},null,8,["treeData"])]),_:1},8,["spinning"])]),_:1})]),_:1}),e(o,{span:8},{default:n(()=>[e(t,{title:"BasicTree内置加载"},{extra:n(()=>[e(c,{onClick:a.loadTreeData2,loading:a.treeLoading},{default:n(()=>[y("请求数据")]),_:1},8,["onClick","loading"])]),default:n(()=>[e(u,{ref:"loadTreeRef",treeData:a.tree2,loading:a.treeLoading},null,8,["treeData","loading"])]),_:1})]),_:1})]),_:1})]),_:1})}const N=P(S,[["render",x]]);export{N as default};