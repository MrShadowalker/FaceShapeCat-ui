var g=(d,y,l)=>new Promise((k,h)=>{var v=a=>{try{s(l.next(a))}catch(u){h(u)}},w=a=>{try{s(l.throw(a))}catch(u){h(u)}},s=a=>a.done?k(a.value):Promise.resolve(a.value).then(v,w);s((l=l.apply(d,y)).next())});import{c as T,f as r,r as M,e as P,w as R,u as L,n as C}from"./tinymce-vendor-3c2b3d6e.js";import{a5 as q}from"./index-37448b2d.js";function Q(d,y,l,k){const h=T("selectOptions",r([])),v=T("selectValues",M({})),w=T("loadingEcho",r(!1)),s=r([]),a=r([]),u=r([]),K=r(!1),D=P(()=>k.multiple?l.checkStrictly:!0);let b=!0;R(v,({value:e})=>{e&&K.value==!1&&e.length>0&&(w.value=b,b=!1,m(null,e.join(",")).finally(()=>{w.value=!1}))},{immediate:!0});function E(){const e=L(d);if(!e)throw new Error("tree is null!");return e}function j(){C(()=>{l.defaultExpandLevel&&l.defaultExpandLevel>0&&E().filterByLevel(l.defaultExpandLevel),a.value=v.value}).then()}function B(e,t){if(l.checkable==!1){a.value=l.checkStrictly?e.checked:e;const{selectedNodes:n}=t;let c=[];n.forEach(i=>{c.push(i)}),u.value=c}}function A(e,t){if(l.checkable==!0){if(!k.multiple){if(t.checked){a.value=[t.node.eventKey];let i=l.rowKey,x=t.checkedNodes.find(f=>f[i]===t.node.eventKey);u.value=[x]}else a.value=[],u.value=[];return}a.value=l.checkStrictly?e.checked:e;const{checkedNodes:n}=t;let c=[];n.forEach(i=>{c.push(i)}),u.value=c}}function O(e){return g(this,null,function*(){E().checkAll(e),yield C(),a.value=E().getCheckedKeys(),e?V():u.value=[]})}function V(){let e="";L(a).length>0&&(e=a.value.join(",")),y({ids:e}).then(t=>{u.value=t})}function z(e){E().expandAll(e)}function m(e,t){return g(this,null,function*(){let n={},c="";e&&(c=e.eventKey,n.pid=e.value),t&&(c="",n.ids=t);let i=yield y(n),x=i;if(l.serverTreeData||(i=q(i,l,c),i.length==0&&e&&S(c,s.value)),K.value==!0){if(!e)s.value=i;else return new Promise(f=>{if(!e.children){f();return}const o=L(d);o&&(o.updateNodeByKey(e.eventKey,{children:i}),o.setExpandedKeys([e.eventKey,...o.getExpandedKeys()])),f()});j()}else{const f=[];x.forEach(o=>{f.push({label:o[l.titleKey],value:o[l.rowKey]})}),h.value=f}})}function S(e,t){if(t&&t.length>0)for(let n of t)if(n.key==e){n.child||(n.isLeaf=!0);break}else S(e,n.children)}function F(e){const t=[],n=[];u.value.forEach(c=>{t.push({label:c[l.labelKey],value:c[l.rowKey]})}),a.value.forEach(c=>{n.push(c)}),h.value=t,e&&e(t,n)}function H(e){return g(this,null,function*(){e?(K.value=!0,yield m(null,null)):K.value=!1})}return[{visibleChange:H,selectOptions:h,selectValues:v,onLoadData:m,onCheck:A,onSelect:B,checkALL:O,expandAll:z,checkedKeys:a,selectRows:u,treeData:s,getCheckStrictly:D,getSelectTreeData:F}]}export{Q as u};