var z=(e,r,t)=>new Promise((a,l)=>{var i=s=>{try{n(t.next(s))}catch(c){l(c)}},u=s=>{try{n(t.throw(s))}catch(c){l(c)}},n=s=>s.done?a(s.value):Promise.resolve(s.value).then(i,u);n((t=t.apply(e,r)).next())});import{L as ve,d as he,f as B,Y as C,a6 as M,ab as Q,a9 as W,k as E,ac as q,E as me,u as I,Z as be,ae as ye,a4 as _t,a5 as Tt}from"./tinymce-vendor-3c2b3d6e.js";import{B as we}from"./index-64ecc8b2.js";import{bd as Ae}from"./antd-vue-vendor-05bfa84d.js";import{e as _e,_ as Te}from"./jeecg-online-vendor-f57c6456.js";import{C as xe}from"./index-37448b2d.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./vxe-table-vendor-26792376.js";var P={exports:{}},p={},V={exports:{}},w={};function K(){var e={};return e["align-content"]=!1,e["align-items"]=!1,e["align-self"]=!1,e["alignment-adjust"]=!1,e["alignment-baseline"]=!1,e.all=!1,e["anchor-point"]=!1,e.animation=!1,e["animation-delay"]=!1,e["animation-direction"]=!1,e["animation-duration"]=!1,e["animation-fill-mode"]=!1,e["animation-iteration-count"]=!1,e["animation-name"]=!1,e["animation-play-state"]=!1,e["animation-timing-function"]=!1,e.azimuth=!1,e["backface-visibility"]=!1,e.background=!0,e["background-attachment"]=!0,e["background-clip"]=!0,e["background-color"]=!0,e["background-image"]=!0,e["background-origin"]=!0,e["background-position"]=!0,e["background-repeat"]=!0,e["background-size"]=!0,e["baseline-shift"]=!1,e.binding=!1,e.bleed=!1,e["bookmark-label"]=!1,e["bookmark-level"]=!1,e["bookmark-state"]=!1,e.border=!0,e["border-bottom"]=!0,e["border-bottom-color"]=!0,e["border-bottom-left-radius"]=!0,e["border-bottom-right-radius"]=!0,e["border-bottom-style"]=!0,e["border-bottom-width"]=!0,e["border-collapse"]=!0,e["border-color"]=!0,e["border-image"]=!0,e["border-image-outset"]=!0,e["border-image-repeat"]=!0,e["border-image-slice"]=!0,e["border-image-source"]=!0,e["border-image-width"]=!0,e["border-left"]=!0,e["border-left-color"]=!0,e["border-left-style"]=!0,e["border-left-width"]=!0,e["border-radius"]=!0,e["border-right"]=!0,e["border-right-color"]=!0,e["border-right-style"]=!0,e["border-right-width"]=!0,e["border-spacing"]=!0,e["border-style"]=!0,e["border-top"]=!0,e["border-top-color"]=!0,e["border-top-left-radius"]=!0,e["border-top-right-radius"]=!0,e["border-top-style"]=!0,e["border-top-width"]=!0,e["border-width"]=!0,e.bottom=!1,e["box-decoration-break"]=!0,e["box-shadow"]=!0,e["box-sizing"]=!0,e["box-snap"]=!0,e["box-suppress"]=!0,e["break-after"]=!0,e["break-before"]=!0,e["break-inside"]=!0,e["caption-side"]=!1,e.chains=!1,e.clear=!0,e.clip=!1,e["clip-path"]=!1,e["clip-rule"]=!1,e.color=!0,e["color-interpolation-filters"]=!0,e["column-count"]=!1,e["column-fill"]=!1,e["column-gap"]=!1,e["column-rule"]=!1,e["column-rule-color"]=!1,e["column-rule-style"]=!1,e["column-rule-width"]=!1,e["column-span"]=!1,e["column-width"]=!1,e.columns=!1,e.contain=!1,e.content=!1,e["counter-increment"]=!1,e["counter-reset"]=!1,e["counter-set"]=!1,e.crop=!1,e.cue=!1,e["cue-after"]=!1,e["cue-before"]=!1,e.cursor=!1,e.direction=!1,e.display=!0,e["display-inside"]=!0,e["display-list"]=!0,e["display-outside"]=!0,e["dominant-baseline"]=!1,e.elevation=!1,e["empty-cells"]=!1,e.filter=!1,e.flex=!1,e["flex-basis"]=!1,e["flex-direction"]=!1,e["flex-flow"]=!1,e["flex-grow"]=!1,e["flex-shrink"]=!1,e["flex-wrap"]=!1,e.float=!1,e["float-offset"]=!1,e["flood-color"]=!1,e["flood-opacity"]=!1,e["flow-from"]=!1,e["flow-into"]=!1,e.font=!0,e["font-family"]=!0,e["font-feature-settings"]=!0,e["font-kerning"]=!0,e["font-language-override"]=!0,e["font-size"]=!0,e["font-size-adjust"]=!0,e["font-stretch"]=!0,e["font-style"]=!0,e["font-synthesis"]=!0,e["font-variant"]=!0,e["font-variant-alternates"]=!0,e["font-variant-caps"]=!0,e["font-variant-east-asian"]=!0,e["font-variant-ligatures"]=!0,e["font-variant-numeric"]=!0,e["font-variant-position"]=!0,e["font-weight"]=!0,e.grid=!1,e["grid-area"]=!1,e["grid-auto-columns"]=!1,e["grid-auto-flow"]=!1,e["grid-auto-rows"]=!1,e["grid-column"]=!1,e["grid-column-end"]=!1,e["grid-column-start"]=!1,e["grid-row"]=!1,e["grid-row-end"]=!1,e["grid-row-start"]=!1,e["grid-template"]=!1,e["grid-template-areas"]=!1,e["grid-template-columns"]=!1,e["grid-template-rows"]=!1,e["hanging-punctuation"]=!1,e.height=!0,e.hyphens=!1,e.icon=!1,e["image-orientation"]=!1,e["image-resolution"]=!1,e["ime-mode"]=!1,e["initial-letters"]=!1,e["inline-box-align"]=!1,e["justify-content"]=!1,e["justify-items"]=!1,e["justify-self"]=!1,e.left=!1,e["letter-spacing"]=!0,e["lighting-color"]=!0,e["line-box-contain"]=!1,e["line-break"]=!1,e["line-grid"]=!1,e["line-height"]=!1,e["line-snap"]=!1,e["line-stacking"]=!1,e["line-stacking-ruby"]=!1,e["line-stacking-shift"]=!1,e["line-stacking-strategy"]=!1,e["list-style"]=!0,e["list-style-image"]=!0,e["list-style-position"]=!0,e["list-style-type"]=!0,e.margin=!0,e["margin-bottom"]=!0,e["margin-left"]=!0,e["margin-right"]=!0,e["margin-top"]=!0,e["marker-offset"]=!1,e["marker-side"]=!1,e.marks=!1,e.mask=!1,e["mask-box"]=!1,e["mask-box-outset"]=!1,e["mask-box-repeat"]=!1,e["mask-box-slice"]=!1,e["mask-box-source"]=!1,e["mask-box-width"]=!1,e["mask-clip"]=!1,e["mask-image"]=!1,e["mask-origin"]=!1,e["mask-position"]=!1,e["mask-repeat"]=!1,e["mask-size"]=!1,e["mask-source-type"]=!1,e["mask-type"]=!1,e["max-height"]=!0,e["max-lines"]=!1,e["max-width"]=!0,e["min-height"]=!0,e["min-width"]=!0,e["move-to"]=!1,e["nav-down"]=!1,e["nav-index"]=!1,e["nav-left"]=!1,e["nav-right"]=!1,e["nav-up"]=!1,e["object-fit"]=!1,e["object-position"]=!1,e.opacity=!1,e.order=!1,e.orphans=!1,e.outline=!1,e["outline-color"]=!1,e["outline-offset"]=!1,e["outline-style"]=!1,e["outline-width"]=!1,e.overflow=!1,e["overflow-wrap"]=!1,e["overflow-x"]=!1,e["overflow-y"]=!1,e.padding=!0,e["padding-bottom"]=!0,e["padding-left"]=!0,e["padding-right"]=!0,e["padding-top"]=!0,e.page=!1,e["page-break-after"]=!1,e["page-break-before"]=!1,e["page-break-inside"]=!1,e["page-policy"]=!1,e.pause=!1,e["pause-after"]=!1,e["pause-before"]=!1,e.perspective=!1,e["perspective-origin"]=!1,e.pitch=!1,e["pitch-range"]=!1,e["play-during"]=!1,e.position=!1,e["presentation-level"]=!1,e.quotes=!1,e["region-fragment"]=!1,e.resize=!1,e.rest=!1,e["rest-after"]=!1,e["rest-before"]=!1,e.richness=!1,e.right=!1,e.rotation=!1,e["rotation-point"]=!1,e["ruby-align"]=!1,e["ruby-merge"]=!1,e["ruby-position"]=!1,e["shape-image-threshold"]=!1,e["shape-outside"]=!1,e["shape-margin"]=!1,e.size=!1,e.speak=!1,e["speak-as"]=!1,e["speak-header"]=!1,e["speak-numeral"]=!1,e["speak-punctuation"]=!1,e["speech-rate"]=!1,e.stress=!1,e["string-set"]=!1,e["tab-size"]=!1,e["table-layout"]=!1,e["text-align"]=!0,e["text-align-last"]=!0,e["text-combine-upright"]=!0,e["text-decoration"]=!0,e["text-decoration-color"]=!0,e["text-decoration-line"]=!0,e["text-decoration-skip"]=!0,e["text-decoration-style"]=!0,e["text-emphasis"]=!0,e["text-emphasis-color"]=!0,e["text-emphasis-position"]=!0,e["text-emphasis-style"]=!0,e["text-height"]=!0,e["text-indent"]=!0,e["text-justify"]=!0,e["text-orientation"]=!0,e["text-overflow"]=!0,e["text-shadow"]=!0,e["text-space-collapse"]=!0,e["text-transform"]=!0,e["text-underline-position"]=!0,e["text-wrap"]=!0,e.top=!1,e.transform=!1,e["transform-origin"]=!1,e["transform-style"]=!1,e.transition=!1,e["transition-delay"]=!1,e["transition-duration"]=!1,e["transition-property"]=!1,e["transition-timing-function"]=!1,e["unicode-bidi"]=!1,e["vertical-align"]=!1,e.visibility=!1,e["voice-balance"]=!1,e["voice-duration"]=!1,e["voice-family"]=!1,e["voice-pitch"]=!1,e["voice-range"]=!1,e["voice-rate"]=!1,e["voice-stress"]=!1,e["voice-volume"]=!1,e.volume=!1,e["white-space"]=!1,e.widows=!1,e.width=!0,e["will-change"]=!1,e["word-break"]=!0,e["word-spacing"]=!0,e["word-wrap"]=!0,e["wrap-flow"]=!1,e["wrap-through"]=!1,e["writing-mode"]=!1,e["z-index"]=!1,e}function ke(e,r,t){}function Se(e,r,t){}var Ce=/javascript\s*\:/img;function Ee(e,r){return Ce.test(r)?"":r}var $t=w.whiteList=K(),Rt=w.getDefaultWhiteList=K,Ot=w.onAttr=ke,Pt=w.onIgnoreAttr=Se,Vt=w.safeAttrValue=Ee,Ie={indexOf:function(e,r){var t,a;if(Array.prototype.indexOf)return e.indexOf(r);for(t=0,a=e.length;t<a;t++)if(e[t]===r)return t;return-1},forEach:function(e,r,t){var a,l;if(Array.prototype.forEach)return e.forEach(r,t);for(a=0,l=e.length;a<l;a++)r.call(t,e[a],a,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(e){return String.prototype.trimRight?e.trimRight():e.replace(/(\s*$)/g,"")}};var k=Ie;function Le(e,r){e=k.trimRight(e),e[e.length-1]!==";"&&(e+=";");var t=e.length,a=!1,l=0,i=0,u="";function n(){if(!a){var o=k.trim(e.slice(l,i)),f=o.indexOf(":");if(f!==-1){var g=k.trim(o.slice(0,f)),d=k.trim(o.slice(f+1));if(g){var v=r(l,u.length,g,d,o);v&&(u+=v+"; ")}}}l=i+1}for(;i<t;i++){var s=e[i];if(s==="/"&&e[i+1]==="*"){var c=e.indexOf("*/",i+2);if(c===-1)break;i=c+1,l=i+1,a=!1}else s==="("?a=!0:s===")"?a=!1:s===";"?a||n():s===`
`&&n()}return k.trim(u)}var $e=Le;var L=w,Re=$e;function j(e){return e==null}function Oe(e){var r={};for(var t in e)r[t]=e[t];return r}function ee(e){e=Oe(e||{}),e.whiteList=e.whiteList||L.whiteList,e.onAttr=e.onAttr||L.onAttr,e.onIgnoreAttr=e.onIgnoreAttr||L.onIgnoreAttr,e.safeAttrValue=e.safeAttrValue||L.safeAttrValue,this.options=e}ee.prototype.process=function(e){if(e=e||"",e=e.toString(),!e)return"";var r=this,t=r.options,a=t.whiteList,l=t.onAttr,i=t.onIgnoreAttr,u=t.safeAttrValue,n=Re(e,function(s,c,o,f,g){var d=a[o],v=!1;if(d===!0?v=d:typeof d=="function"?v=d(f):d instanceof RegExp&&(v=d.test(f)),v!==!0&&(v=!1),f=u(o,f),!!f){var m={position:c,sourcePosition:s,source:g,isWhite:v};if(v){var h=l(o,f,m);return j(h)?o+":"+f:h}else{var h=i(o,f,m);if(!j(h))return h}}});return n};var Pe=ee;var Dt=V.exports;(function(e,r){var t=w,a=Pe;function l(u,n){var s=new a(n);return s.process(u)}r=e.exports=l,r.FilterCSS=a;for(var i in t)r[i]=t[i];typeof window!="undefined"&&(window.filterCSS=e.exports)})(V,V.exports);var H=V.exports;var X={indexOf:function(e,r){var t,a;if(Array.prototype.indexOf)return e.indexOf(r);for(t=0,a=e.length;t<a;t++)if(e[t]===r)return t;return-1},forEach:function(e,r,t){var a,l;if(Array.prototype.forEach)return e.forEach(r,t);for(a=0,l=e.length;a<l;a++)r.call(t,e[a],a,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(e){var r=/\s|\n|\t/,t=r.exec(e);return t?t.index:-1}};var Ve=H.FilterCSS,De=H.getDefaultWhiteList,D=X;function te(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]}}var re=new Ve;function Ne(e,r,t){}function Fe(e,r,t){}function Be(e,r,t){}function We(e,r,t){}function ae(e){return e.replace(Xe,"&lt;").replace(Ge,"&gt;")}function He(e,r,t,a){if(t=fe(t),r==="href"||r==="src"){if(t=D.trim(t),t==="#")return"#";if(!(t.substr(0,7)==="http://"||t.substr(0,8)==="https://"||t.substr(0,7)==="mailto:"||t.substr(0,4)==="tel:"||t.substr(0,11)==="data:image/"||t.substr(0,6)==="ftp://"||t.substr(0,2)==="./"||t.substr(0,3)==="../"||t[0]==="#"||t[0]==="/"))return""}else if(r==="background"){if($.lastIndex=0,$.test(t))return""}else if(r==="style"){if(Z.lastIndex=0,Z.test(t)||(J.lastIndex=0,J.test(t)&&($.lastIndex=0,$.test(t))))return"";a!==!1&&(a=a||re,t=a.process(t))}return t=ue(t),t}var Xe=/</g,Ge=/>/g,Ue=/"/g,ze=/&quot;/g,Me=/&#([a-zA-Z0-9]*);?/gim,Qe=/&colon;?/gim,qe=/&newline;?/gim,$=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,Z=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,J=/u\s*r\s*l\s*\(.*/gi;function se(e){return e.replace(Ue,"&quot;")}function ie(e){return e.replace(ze,'"')}function ne(e){return e.replace(Me,function(t,a){return a[0]==="x"||a[0]==="X"?String.fromCharCode(parseInt(a.substr(1),16)):String.fromCharCode(parseInt(a,10))})}function oe(e){return e.replace(Qe,":").replace(qe," ")}function le(e){for(var r="",t=0,a=e.length;t<a;t++)r+=e.charCodeAt(t)<32?" ":e.charAt(t);return D.trim(r)}function fe(e){return e=ie(e),e=ne(e),e=oe(e),e=le(e),e}function ue(e){return e=se(e),e=ae(e),e}function je(){return""}function Ze(e,r){typeof r!="function"&&(r=function(){});var t=!Array.isArray(e);function a(u){return t?!0:D.indexOf(e,u)!==-1}var l=[],i=!1;return{onIgnoreTag:function(u,n,s){if(a(u))if(s.isClosing){var c="[/removed]",o=s.position+c.length;return l.push([i!==!1?i:s.position,o]),i=!1,c}else return i||(i=s.position),"[removed]";else return r(u,n,s)},remove:function(u){var n="",s=0;return D.forEach(l,function(c){n+=u.slice(s,c[0]),s=c[1]}),n+=u.slice(s),n}}}function Je(e){for(var r="",t=0;t<e.length;){var a=e.indexOf("<!--",t);if(a===-1){r+=e.slice(t);break}r+=e.slice(t,a);var l=e.indexOf("-->",a);if(l===-1)break;t=l+3}return r}function Ye(e){var r=e.split("");return r=r.filter(function(t){var a=t.charCodeAt(0);return a===127?!1:a<=31?a===10||a===13:!0}),r.join("")}var Nt=p.whiteList=te(),Ft=p.getDefaultWhiteList=te,Bt=p.onTag=Ne,Wt=p.onIgnoreTag=Fe,Ht=p.onTagAttr=Be,Xt=p.onIgnoreTagAttr=We,Gt=p.safeAttrValue=He,Ut=p.escapeHtml=ae,zt=p.escapeQuote=se,Mt=p.unescapeQuote=ie,Qt=p.escapeHtmlEntities=ne,qt=p.escapeDangerHtml5Entities=oe,jt=p.clearNonPrintableCharacter=le,Zt=p.friendlyAttrValue=fe,Jt=p.escapeAttrValue=ue,Yt=p.onIgnoreTagStripAll=je,Kt=p.StripTagBody=Ze,er=p.stripCommentTag=Je,tr=p.stripBlankChar=Ye,rr=p.cssFilter=re,ar=p.getDefaultCSSWhiteList=De,N={},y=X;function Ke(e){var r=y.spaceIndex(e),t;return r===-1?t=e.slice(1,-1):t=e.slice(1,r+1),t=y.trim(t).toLowerCase(),t.slice(0,1)==="/"&&(t=t.slice(1)),t.slice(-1)==="/"&&(t=t.slice(0,-1)),t}function et(e){return e.slice(0,2)==="</"}function tt(e,r,t){"use strict";var a="",l=0,i=!1,u=!1,n=0,s=e.length,c="",o="";e:for(n=0;n<s;n++){var f=e.charAt(n);if(i===!1){if(f==="<"){i=n;continue}}else if(u===!1){if(f==="<"){a+=t(e.slice(l,n)),i=n,l=n;continue}if(f===">"||n===s-1){a+=t(e.slice(l,i)),o=e.slice(i,n+1),c=Ke(o),a+=r(i,a.length,c,o,et(o)),l=n+1,i=!1;continue}if(f==='"'||f==="'")for(var g=1,d=e.charAt(n-g);d.trim()===""||d==="=";){if(d==="="){u=f;continue e}d=e.charAt(n-++g)}}else if(f===u){u=!1;continue}}return l<s&&(a+=t(e.substr(l))),a}var rt=/[^a-zA-Z0-9\\_:.-]/gim;function at(e,r){"use strict";var t=0,a=0,l=[],i=!1,u=e.length;function n(g,d){if(g=y.trim(g),g=g.replace(rt,"").toLowerCase(),!(g.length<1)){var v=r(g,d||"");v&&l.push(v)}}for(var s=0;s<u;s++){var c=e.charAt(s),o,f;if(i===!1&&c==="="){i=e.slice(t,s),t=s+1,a=e.charAt(t)==='"'||e.charAt(t)==="'"?t:it(e,s+1);continue}if(i!==!1&&s===a){if(f=e.indexOf(c,s+1),f===-1)break;o=y.trim(e.slice(a+1,f)),n(i,o),i=!1,s=f,t=s+1;continue}if(/\s|\n|\t/.test(c))if(e=e.replace(/\s|\n|\t/g," "),i===!1)if(f=st(e,s),f===-1){o=y.trim(e.slice(t,s)),n(o),i=!1,t=s+1;continue}else{s=f-1;continue}else if(f=nt(e,s-1),f===-1){o=y.trim(e.slice(t,s)),o=Y(o),n(i,o),i=!1,t=s+1;continue}else continue}return t<e.length&&(i===!1?n(e.slice(t)):n(i,Y(y.trim(e.slice(t))))),y.trim(l.join(" "))}function st(e,r){for(;r<e.length;r++){var t=e[r];if(t!==" ")return t==="="?r:-1}}function it(e,r){for(;r<e.length;r++){var t=e[r];if(t!==" ")return t==="'"||t==='"'?r:-1}}function nt(e,r){for(;r>0;r--){var t=e[r];if(t!==" ")return t==="="?r:-1}}function ot(e){return e[0]==='"'&&e[e.length-1]==='"'||e[0]==="'"&&e[e.length-1]==="'"}function Y(e){return ot(e)?e.substr(1,e.length-2):e}var sr=N.parseTag=tt,ir=N.parseAttr=at,lt=H.FilterCSS,b=p,ce=N,ft=ce.parseTag,ut=ce.parseAttr,O=X;function R(e){return e==null}function ct(e){var r=O.spaceIndex(e);if(r===-1)return{html:"",closing:e[e.length-2]==="/"};e=O.trim(e.slice(r+1,-1));var t=e[e.length-1]==="/";return t&&(e=O.trim(e.slice(0,-1))),{html:e,closing:t}}function gt(e){var r={};for(var t in e)r[t]=e[t];return r}function dt(e){var r={};for(var t in e)Array.isArray(e[t])?r[t.toLowerCase()]=e[t].map(function(a){return a.toLowerCase()}):r[t.toLowerCase()]=e[t];return r}function ge(e){e=gt(e||{}),e.stripIgnoreTag&&(e.onIgnoreTag,e.onIgnoreTag=b.onIgnoreTagStripAll),e.whiteList||e.allowList?e.whiteList=dt(e.whiteList||e.allowList):e.whiteList=b.whiteList,e.onTag=e.onTag||b.onTag,e.onTagAttr=e.onTagAttr||b.onTagAttr,e.onIgnoreTag=e.onIgnoreTag||b.onIgnoreTag,e.onIgnoreTagAttr=e.onIgnoreTagAttr||b.onIgnoreTagAttr,e.safeAttrValue=e.safeAttrValue||b.safeAttrValue,e.escapeHtml=e.escapeHtml||b.escapeHtml,this.options=e,e.css===!1?this.cssFilter=!1:(e.css=e.css||{},this.cssFilter=new lt(e.css))}ge.prototype.process=function(e){if(e=e||"",e=e.toString(),!e)return"";var r=this,t=r.options,a=t.whiteList,l=t.onTag,i=t.onIgnoreTag,u=t.onTagAttr,n=t.onIgnoreTagAttr,s=t.safeAttrValue,c=t.escapeHtml,o=r.cssFilter;t.stripBlankChar&&(e=b.stripBlankChar(e)),t.allowCommentTag||(e=b.stripCommentTag(e));var f=!1;t.stripIgnoreTagBody&&(f=b.StripTagBody(t.stripIgnoreTagBody,i),i=f.onIgnoreTag);var g=ft(e,function(d,v,m,h,de){var S={sourcePosition:d,position:v,isClosing:de,isWhite:Object.prototype.hasOwnProperty.call(a,m)},T=l(m,h,S);if(!R(T))return T;if(S.isWhite){if(S.isClosing)return"</"+m+">";var G=ct(h),pe=a[m],U=ut(G.html,function(A,_){var F=O.indexOf(pe,A)!==-1,x=u(m,A,_,F);return R(x)?F?(_=s(m,A,_,o),_?A+'="'+_+'"':A):(x=n(m,A,_,F),R(x)?void 0:x):x});return h="<"+m,U&&(h+=" "+U),G.closing&&(h+=" /"),h+=">",h}else return T=i(m,h,S),R(T)?c(h):T},c);return f&&(g=f.remove(g)),g};var pt=ge;var nr=P.exports;(function(e,r){var t=p,a=N,l=pt;function i(n,s){var c=new l(s);return c.process(n)}r=e.exports=i,r.filterXSS=i,r.FilterXSS=l,function(){for(var n in t)r[n]=t[n];for(var s in a)r[s]=a[s]}(),typeof window!="undefined"&&(window.filterXSS=e.exports);function u(){return typeof self!="undefined"&&typeof DedicatedWorkerGlobalScope!="undefined"&&self instanceof DedicatedWorkerGlobalScope}u()&&(self.filterXSS=e.exports)})(P,P.exports);var vt=P.exports;const ht=ve(vt),mt={whiteList:{h1:["style"],h2:["style"],h3:["style"],h4:["style"],h5:["style"],h6:["style"],hr:["style"],span:["style"],strong:["style"],b:["style"],i:["style"],br:[],p:["style"],pre:["style"],code:["style"],a:["style","target","href","title","rel"],img:["style","src","title","width","height"],div:["style"],table:["style","width","border","height"],tr:["style"],td:["style","width","colspan"],th:["style","width","colspan"],tbody:["style"],ul:["style"],li:["style"],ol:["style"],dl:["style"],dt:["style"],em:["style"],cite:["style"],section:["style"],header:["style"],footer:["style"],blockquote:["style"],audio:["autoplay","controls","loop","preload","src"],video:["autoplay","controls","loop","preload","src","height","width"]}};const bt=["innerHTML"],yt=he({__name:"DetailModal",setup(e){const r=_e(),t=B(!0),a=B({}),[l,{setModalProps:i,closeModal:u}]=xe(o=>z(this,null,function*(){t.value=!!(o!=null&&o.isUpdate),I(t)&&(o.record.msgContent&&(o.record.msgContent=ht(o.record.msgContent,mt)),a.value=o.record,s())})),n=B(!1);function s(){a.value.busId&&(n.value=!0)}function c(){let o=a.value;if(o.busId){let f=o.msgAbstract,g={};try{if(f){let d=JSON.parse(f);d&&Object.keys(d).map(v=>{g[v]=d[v]})}}catch(d){}Object.keys(g).length>0?r.push({path:"/task/handle/"+o.busId,query:g}):r.push({path:"/task/handle/"+o.busId})}u()}return(o,f)=>{const g=C("a-card-meta"),d=C("a-divider"),v=C("a-button"),m=C("a-card");return M(),Q(I(we),ye(o.$attrs,{onRegister:I(l),title:"查看详情",minHeight:600,showCancelBtn:!1,showOkBtn:!1,height:88,destroyOnClose:!0}),{default:W(()=>[E(m,{class:"daily-article"},{default:W(()=>[E(g,{title:a.value.titile,description:"发布人："+a.value.sender+" 发布时间： "+a.value.sendTime},null,8,["title","description"]),E(d),q("div",{innerHTML:a.value.msgContent,class:"article-content"},null,8,bt),q("div",null,[n.value?(M(),Q(v,{key:0,onClick:c},{default:W(()=>[me("前往办理"),E(I(Ae))]),_:1})):be("",!0)])]),_:1})]),_:1},16,["onRegister"])}}});const or=Te(yt,[["__scopeId","data-v-d7c689d4"]]);export{or as default};
