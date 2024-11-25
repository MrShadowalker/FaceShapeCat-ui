import{d as N,f as h,r as P,e as O,w as x,o as E,u as w,av as $,Y as j,a6 as B,a7 as L,ae as M,ab as D,Z as K,ac as G}from"./tinymce-vendor-3c2b3d6e.js";import{p as c,k as W}from"./index-37448b2d.js";import{useRuleFormItem as Y}from"./useFormItem-613b6d5d.js";import{_ as Z}from"./htmlmixed-6ab39e30.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import{ar as q,b1 as Q,_ as U}from"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./codemirror-vendor-0a03fef5.js";const X=(e,i,d)=>{const _=[...i];return{codeHintingRegistry:()=>{const s=(g,o)=>{const f=g.getCursor(),b=g.getTokenAt(f),S=b.start,r=f.ch,n=b.string;if(n.length){const m=(a,u)=>a.toLowerCase().indexOf(u.toLowerCase());let l=_.filter(a=>{const u=m(a,n);return(u===0||u===1)&&(a.length!=n.length||a.length-1!=n.length)}).sort((a,u)=>m(a,n)<m(u,n)?-1:1);l.length===1&&(l[0]===n||l[0].substring(1)===n)&&(l=[]),l.length&&o({list:l,from:e.Pos(f.line,S),to:e.Pos(f.line,r)})}};s.async=!0,s.supportsSelection=!0,i.length&&e.registerHelper("hint",d,s)},codeHintingMount:s=>{i.length&&(s.setOption("mode",d),setTimeout(()=>{s.on("cursorActivity",function(){s==null||s.showHint({completeSingle:!1})})},1e3))}}},k=N({name:"JCodeEditor",inheritAttrs:!1,components:{},props:{value:c.string.def(""),height:c.string.def("auto"),disabled:c.bool.def(!1),fullScreen:c.bool.def(!1),zIndex:c.any.def(1500),theme:c.string.def("idea"),language:c.string.def(""),keywords:c.array.def([])},emits:["change","update:value"],setup(e,{emit:i}){var V;const d=h(null),{prefixCls:_}=W("code-editer"),p=window.CodeMirror||Z,y=h(),[s]=Y(e,"value","change",y),g=h();let o=null;const f=q(),b=h(e.height),S=P({tabSize:2,theme:e.theme,smartIndent:!0,lineNumbers:!0,line:!0,foldGutter:!0,lineWrapping:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter","CodeMirror-lint-markers"],styleActiveLine:!0,mode:e.language,extraKeys:{Tab:function(v){C(r,!1)}}});let r=(V=e.value)!=null?V:"";const n=h(!1),m=O(()=>n.value?"fullscreen-exit":"fullscreen"),l=O(()=>{let t={class:[_,"full-screen-parent","auto-height",{"full-screen":n.value}],style:{}};return n.value&&(t.style["z-index"]=e.zIndex),t}),{codeHintingMount:a,codeHintingRegistry:u}=X(p,e.keywords,e.language);u(),x(()=>e.value,()=>{r!=e.value&&C(e.value,!1)}),E(()=>{J()});function C(t,v=!0){t&&Q(t)&&(t=JSON.stringify(JSON.parse(t),null,2)),o==null||o.setValue(t!=null?t:""),r=t,v&&H(r)}function A(t){r=t.getValue()||"",e.value!=r&&H(r)}function H(t){i("change",t),i("update:value",t)}function J(){o=p.fromTextArea(g.value,S),o.on("change",A),C(r,!1),a(o)}function R(){n.value=!n.value}x(()=>e.disabled,t=>{o&&o.setOption("readOnly",t)}),x(()=>e.language,t=>{t&&o&&o.setOption("mode",t)});const z=Object.assign({},w(e),w(f));function F(){o&&o.refresh()}return{state:s,textarea:g,boxBindProps:l,getBindValue:z,setValue:C,isFullScreen:n,fullScreenIcon:m,onToggleFullScreen:R,refresh:F,containerRef:d}}}),I=()=>{$(e=>({"21a0f546":e.height}))},T=k.setup;k.setup=T?(e,i)=>(I(),T(e,i)):I;const ee=k;function te(e,i,d,_,p,y){const s=j("a-icon");return B(),L("div",M({ref:"containerRef"},e.boxBindProps),[e.fullScreen?(B(),D(s,{key:0,class:"full-screen-icon",type:e.fullScreenIcon,onClick:e.onToggleFullScreen},null,8,["type","onClick"])):K("",!0),G("textarea",M({ref:"textarea"},e.getBindValue),null,16)],16)}const ge=U(ee,[["render",te]]);export{ge as default};