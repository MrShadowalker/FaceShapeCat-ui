import{f as u,o as c,w as m,b as f}from"./tinymce-vendor-3c2b3d6e.js";import{aP as d,as as w}from"./jeecg-online-vendor-f57c6456.js";import{a as p}from"./index-37448b2d.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";function W(e,l){const o=u(0),r=u(0);let a=()=>{d(e.value)?(o.value=e.value.scrollX,r.value=e.value.scrollY):e.value&&(o.value=e.value.scrollLeft,r.value=e.value.scrollTop)};if(w(l)){let t=0;l.wait&&l.wait>0&&(t=l.wait,Reflect.deleteProperty(l,"wait")),a=p(a,t)}let s;c(()=>{s=m(e,(t,i,n)=>{t?t.addEventListener("scroll",a):i&&i.removeEventListener("scroll",a),n(()=>{o.value=r.value=0,t&&t.removeEventListener("scroll",a)})},{immediate:!0})}),f(()=>{e.value&&e.value.removeEventListener("scroll",a)});function v(){s&&s()}return{refX:o,refY:r,stop:v}}export{W as useScroll};