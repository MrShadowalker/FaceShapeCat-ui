import{X as l}from"./tinymce-vendor-3c2b3d6e.js";import{by as f,bz as m,bA as p,bB as g}from"./jeecg-online-vendor-f57c6456.js";import{aU as S}from"./index-37448b2d.js";const b={vue:l,"@":{hooks:{useMessage:f,useUserStore:m},utils:{axios:p,cache:g}}};function _(u,e){const i=Object.assign({},b,u);function s(t){if(t!=null&&t!=""){let o=t.toString().split("/"),r=i[o[0]];for(let n=1;n<o.length;n++)r=r[o[n]];return r}return null}function c(){}function a(t,o){let r="__export_"+S(6);if(o){const n=`return function (row, customImport, ${r}) {"use strict"; ${t}}`;new Function(n)().call(e,o,s,c)}else{const n=`return function (customImport, ${r}) {"use strict"; ${t}}`;new Function(n)().call(e,s,c)}}return{executeJsEnhanced:a}}const w=/(?:\/\*[\s\S]*?\*\/|\/\/.*?\r?\n|[^{])+\{([\s\S]*)\}$/;export{_ as I,w as g};