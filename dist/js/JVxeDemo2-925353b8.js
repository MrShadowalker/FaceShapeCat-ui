import{d as w,f as s,r as C,Y as y,a6 as S,ab as v,a9 as _,k as T,E as J}from"./tinymce-vendor-3c2b3d6e.js";import{aA as e,a0 as D,r as P}from"./index-37448b2d.js";import{C as V}from"./jeecg-online-vendor-f57c6456.js";import{x as n}from"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";const A=w({__name:"JVxeDemo2",setup(z){const p=s(),{createMessage:h}=V(),i=s(!1),x=s([{title:"下拉框_字典表搜索",key:"select_dict_search",type:e.selectDictSearch,width:200,async:!0,dict:"sys_user,realname,username",tipsContent:"请输入查询条件"},{title:"JPopup",key:"popup",type:e.popup,width:180,popupCode:"demo",fieldConfig:[{source:"name",target:"popup"},{source:"sex",target:"popup_sex"},{source:"age",target:"popup_age"}]},{title:"JP-性别",key:"popup_sex",type:e.select,dictCode:"sex",disabled:!0,width:100},{title:"JP-年龄",key:"popup_age",type:e.normal,width:80},{title:"用户选择",key:"userSelect",type:e.userSelect,width:240},{title:"部门选择",key:"departSelect",type:e.departSelect,width:240},{title:"单选",key:"radio",type:e.radio,width:130,options:[{text:"男",value:"1"},{text:"女",value:"2"}],allowClear:!1},{title:"上传",key:"upload",type:e.upload,width:180,btnText:"点击上传",token:!0,responseName:"message",action:D},{title:"图片上传",key:"image",type:e.image,width:180,maxCount:6},{title:"文件上传",key:"file",type:e.file,width:180,maxCount:2},{title:"进度条",key:"progress",type:e.progress,minWidth:320}]),u=s([]),a=C({current:1,pageSize:10,pageSizeOptions:["10","20","30","100","200"],total:1e3});c(a.current,a.pageSize,!0);function k(t){a.current=t.current,a.pageSize=t.pageSize,c(t.current,t.pageSize,!0)}function b(){const t=p.value.getTableData();h.success("获取值成功，请看控制台输出")}function c(t,o,r=!1){r&&(i.value=!0);let l=Date.now(),d=[];for(let g=0;g<o;g++){let f=n(0,2);d.push({id:P(),select_dict_search:["admin","","jeecg"][n(0,2)],progress:n(0,100),radio:f?f.toString():null})}u.value=d;let m=Date.now()-l;r&&m<o&&setTimeout(()=>i.value=!1,o-m)}return(t,o)=>{const r=y("a-button"),l=y("JVxeTable");return S(),v(l,{ref_key:"tableRef",ref:p,toolbar:"","row-number":"","row-selection":"","keep-source":"",height:492,loading:i.value,dataSource:u.value,columns:x.value,pagination:a,style:{"margin-top":"8px"},onPageChange:k},{toolbarSuffix:_(()=>[T(r,{onClick:b},{default:_(()=>[J("获取数据")]),_:1})]),_:1},8,["loading","dataSource","columns","pagination"])}}});export{A as default};
