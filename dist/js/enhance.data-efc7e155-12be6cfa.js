import{e as n}from"./tinymce-vendor-3c2b3d6e.js";import{g as u}from"./cgform.data-cbdd88c3-c388dc24.js";function r(t){return{columns:[{title:"页面按钮",align:"center",dataIndex:"buttonCode",customRender:({text:e})=>o(e,t.value)},{title:"事件状态",align:"center",dataIndex:"event",customRender:({text:e})=>e=="start"?"开始":"结束"},{title:"类型",align:"center",dataIndex:"cgJavaType",customRender:({text:e})=>e=="spring"?"spring-key":e==="class"?"java-class":e==="http"?"http-api":e},{title:"内容",align:"center",dataIndex:"cgJavaValue"},{title:"是否生效",align:"center",dataIndex:"activeStatus",customRender:({text:e})=>e=="1"?"有效":"无效"}]}}function c(t){return{formSchemas:n(()=>[{label:"页面按钮",field:"buttonCode",component:"Select",componentProps:{options:[{label:"新增",value:"add"},{label:"编辑",value:"edit"},{label:"删除",value:"delete"},{label:"导入",value:"import"},{label:"导出",value:"export"},{label:"查询",value:"query"},...t.value.map(e=>({label:e.buttonName,value:e.buttonCode}))]},defaultValue:"add"},{label:"事件状态",field:"event",component:"RadioButtonGroup",componentProps:{options:[{label:"开始",value:"start"},{label:"结束",value:"end"}]},defaultValue:"end"},{label:"类型",field:"cgJavaType",component:"RadioButtonGroup",componentProps:{options:[{label:"spring-key",value:"spring"},{label:"java-class",value:"class"},{label:"http-api",value:"http"}]},defaultValue:"spring"},{label:"内容",field:"cgJavaValue",component:"Input",required:!0},{label:"是否生效",field:"activeStatus",component:"RadioButtonGroup",componentProps:{options:[{label:"有效",value:"1"},{label:"无效",value:"0"}]},defaultValue:"1"}])}}function p(t){return{columns:[{title:"页面按钮",align:"center",dataIndex:"buttonCode",customRender:({text:e})=>o(e,t.value)},{title:"增强SQL",align:"center",dataIndex:"cgbSql",ellipsis:!0}]}}function s(t){return{formSchemas:n(()=>[{label:"页面按钮",field:"buttonCode",component:"Select",componentProps:{options:[{label:"新增",value:"add"},{label:"编辑",value:"edit"},{label:"删除",value:"delete"},...t.value.map(e=>({label:e.buttonName,value:e.buttonCode}))]},defaultValue:"add"},{label:"增强SQL",field:"cgbSql",component:"JCodeEditor",componentProps:{language:"sql",placeholder:"请输入SQL语句",languageChange:!1,lineNumbers:!1,fullScreen:!0,height:"320px"},defaultValue:""},{label:"描述",field:"content",component:"InputTextArea",defaultValue:""}])}}function o(t,e){let a=t;for(let l of u)if(l.code===t){a=l.title;break}if(!a){for(let l of e)if(l.buttonCode===t){a=l.buttonName;break}}return a}export{p as c,r as d,c as i,s as p};
