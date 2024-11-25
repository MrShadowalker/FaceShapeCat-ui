import{rules as n}from"./validator-a0d2ebc7.js";import{bq as m,C as p,ap as s}from"./jeecg-online-vendor-f57c6456.js";import{u as r}from"./tinymce-vendor-3c2b3d6e.js";const g=[{title:"模板标题",dataIndex:"templateName",width:80},{title:"模板编码",dataIndex:"templateCode",width:100},{title:"通知模板",dataIndex:"templateContent",width:150},{title:"模板类型",dataIndex:"templateType",width:100,customRender:({text:e})=>m("msgType",e)},{title:"是否应用",dataIndex:"useStatus",width:90,customRender:function({text:e}){return e=="1"?"是":"否"}}],f=[{label:"模板标题",field:"templateName",component:"Input"},{label:"模板编码",field:"templateCode",component:"Input"},{label:"模板类型",field:"templateType",component:"JDictSelectTag",componentProps:{dictCode:"msgType"}}],T=[{label:"ID",field:"id",component:"Input",show:!1},{label:"模板标题",field:"templateName",component:"Input",required:!0},{label:"模板编码",field:"templateCode",component:"Input",dynamicRules:({model:e,schema:t})=>[...n.duplicateCheckRule("sys_sms_template","template_code",e,t,!0)],dynamicDisabled:e=>!!e.values.id},{label:"模板类型",field:"templateType",component:"JDictSelectTag",componentProps:{dictCode:"msgType",placeholder:"请选择模板类型"},required:!0},{label:"是否应用",field:"useStatus",component:"JSwitch",componentProps:{options:["1","0"]}},{label:"模板内容",field:"templateContent",component:"InputTextArea",componentProps:{autoSize:{minRows:8,maxRows:8}},ifShow:({values:e})=>!["2","4","5"].includes(e.templateType)},{label:"模板内容",field:"templateContent",component:"JEditor",ifShow:({values:e})=>["2","4"].includes(e.templateType)},{label:"模板内容",field:"templateContent",component:"JMarkdownEditor",ifShow:({values:e})=>["5"].includes(e.templateType)}],h=[{label:"模板编码",field:"templateCode",component:"Input",show:!1},{label:"模板标题",field:"templateName",component:"Input",componentProps:{disabled:!0}},{label:"模板内容",field:"templateContent",component:"InputTextArea",componentProps:{disabled:!0,rows:5}},{label:"测试数据",field:"testData",component:"InputTextArea",required:!0,helpMessage:"JSON数据",defaultValue:"{}",componentProps:{placeholder:"请输入JSON格式测试数据",rows:5}},{label:"消息类型",field:"msgType",component:"JDictSelectTag",required:!0,defaultValue:"system",componentProps:{dictCode:"messageType",type:"radio"}},{label:"消息接收方",field:"receiver",required:!0,component:"JSelectUser",componentProps:{labelKey:"username",rowKey:"username"}}],{createConfirm:d}=p();var c=(e=>(e.list="/sys/message/sysMessageTemplate/list",e.delete="/sys/message/sysMessageTemplate/delete",e.deleteBatch="/sys/message/sysMessageTemplate/deleteBatch",e.exportXls="sys/message/sysMessageTemplate/exportXls",e.importXls="sys/message/sysMessageTemplate/importExcel",e.save="/sys/message/sysMessageTemplate/add",e.edit="/sys/message/sysMessageTemplate/edit",e.send="/sys/message/sysMessageTemplate/sendMsg",e))(c||{});const b=e=>s.get({url:"/sys/message/sysMessageTemplate/list",params:e}),w=(e,t=!1)=>new Promise((l,o)=>{const a=()=>{l(s.delete({url:"/sys/message/sysMessageTemplate/deleteBatch",params:e},{joinParamsToUrl:!0}))};t?d({iconType:"warning",title:"删除",content:"确定要删除吗？",onOk:()=>a(),onCancel:()=>o()}):a()}),M=(e,t)=>r(t)?s.put({url:"/sys/message/sysMessageTemplate/edit",params:e}):s.post({url:"/sys/message/sysMessageTemplate/add",params:e}),C=e=>s.post({url:"/sys/message/sysMessageTemplate/sendMsg",params:e});export{c as A,h as a,C as b,g as c,f as d,w as e,T as f,b as l,M as s};
