var w=(h,c,r)=>new Promise((o,l)=>{var p=t=>{try{u(r.next(t))}catch(d){l(d)}},m=t=>{try{u(r.throw(t))}catch(d){l(d)}},u=t=>t.done?o(t.value):Promise.resolve(t.value).then(p,m);u((r=r.apply(h,c)).next())});import{d as D,r as S,f as v,Y as k,a6 as T,ab as z,a9 as V,k as B}from"./tinymce-vendor-3c2b3d6e.js";import{ap as g,C as J}from"./jeecg-online-vendor-f57c6456.js";import{aA as i}from"./index-37448b2d.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";const I=D({__name:"JSBCDemo",setup(h){const{createMessage:c}=J(),r=S({btn:["add","save","remove","clearSelection"]}),o=v(!1),l=S({current:1,pageSize:200,pageSizeOptions:["10","20","30","100","200"],total:0}),p=v([]),m=v([]),u=v([{key:"num",title:"序号",width:80,type:i.normal},{key:"ship_name",title:"船名",width:180,type:i.input},{key:"call",title:"呼叫",width:80,type:i.input},{key:"len",title:"长",width:80,type:i.input},{key:"ton",title:"吨",width:120,defaultValue:233,type:i.input},{key:"payer",title:"付款方",width:120,defaultValue:"张三",type:i.input},{key:"count",title:"数",width:40,type:i.normal},{key:"company",title:"公司",minWidth:180,type:i.input},{key:"trend",title:"动向",width:120,type:i.input}]);t();function t(){return w(this,null,function*(){o.value=!0,yield g.get({url:"/mock/vxe/getData",params:{pageNo:l.current,pageSize:l.pageSize}}).then(e=>{l.total=e.total,m.value=e.records,p.value=[]}).finally(()=>{o.value=!1})})}function d({$table:e,target:n}){e.validate().then(a=>{if(!a){let s=n.getTableData(),f=n.getNewData(),y=n.getDeleteData();o.value=!0,g.post({url:"/mock/vxe/immediateSaveAll",params:s}).then(()=>{c.success("保存成功！")}).finally(()=>{o.value=!1})}})}function _(e){let n=e.deleteRows.map(a=>a.id);o.value=!0,window.setTimeout(()=>{o.value=!1,c.success("删除成功"),e.confirmRemove()},1e3)}function b(e){let{$table:n,row:a,column:s}=e,f=s.property;n.isUpdateByRow(a,f)&&n.validate(a).then(y=>{if(!y){let x=c.loading(`正在保存"${s.title}"`,0);g.put({url:"/mock/vxe/immediateSaveRow",params:a}).then(N=>{c.success(`"${s.title}"保存成功！`),n.reloadRow(a,null,f)}).finally(()=>{x()})}})}function R(e){l.current=e.current,l.pageSize=e.pageSize,t()}function C(e){p.value=e.selectedRows}return(e,n)=>{const a=k("JVxeTable"),s=k("a-card");return T(),z(s,{title:"即时保存示例",bordered:!1},{default:V(()=>[B(a,{toolbar:"",toolbarConfig:r,rowNumber:"",rowSelection:"",keepSource:"",asyncRemove:"",height:340,loading:o.value,columns:u.value,dataSource:m.value,pagination:l,onSave:d,onRemoved:_,onEditClosed:b,onPageChange:R,onSelectRowChange:C},null,8,["toolbarConfig","loading","columns","dataSource","pagination"])]),_:1})}}});export{I as default};
