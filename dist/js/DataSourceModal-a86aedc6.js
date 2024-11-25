var k=Object.defineProperty;var w=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var q=(e,t,r)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))E.call(t,r)&&q(e,r,t[r]);if(w)for(var r of w(t))L.call(t,r)&&q(e,r,t[r]);return e};var g=(e,t,r)=>new Promise((f,s)=>{var D=a=>{try{u(r.next(a))}catch(b){s(b)}},y=a=>{try{u(r.throw(a))}catch(b){s(b)}},u=a=>a.done?f(a.value):Promise.resolve(a.value).then(D,y);u((r=r.apply(e,t)).next())});import{d as O,f as R,e as N,u as c,Y as v,a6 as V,ab as J,a9 as l,k as n,E as z,ae as X}from"./tinymce-vendor-3c2b3d6e.js";import{B as G}from"./index-64ecc8b2.js";import"./index-09260ce4.js";import{ap as i,C as H}from"./jeecg-online-vendor-f57c6456.js";import{M as K}from"./antd-vue-vendor-05bfa84d.js";import{u as Q,B as Y}from"./useForm-df7d93c5.js";import{C as $}from"./index-37448b2d.js";const W={1:{dbDriver:"com.mysql.jdbc.Driver"},4:{dbDriver:"com.mysql.cj.jdbc.Driver"},2:{dbDriver:"oracle.jdbc.OracleDriver"},3:{dbDriver:"com.microsoft.sqlserver.jdbc.SQLServerDriver"},5:{dbDriver:"org.mariadb.jdbc.Driver"},6:{dbDriver:"org.postgresql.Driver"},7:{dbDriver:"dm.jdbc.driver.DmDriver"},8:{dbDriver:"com.kingbase8.Driver"},9:{dbDriver:"com.oscar.Driver"},10:{dbDriver:"org.sqlite.JDBC"},11:{dbDriver:"com.ibm.db2.jcc.DB2Driver"},12:{dbDriver:"org.hsqldb.jdbc.JDBCDriver"},13:{dbDriver:"org.apache.derby.jdbc.ClientDriver"},14:{dbDriver:"org.h2.Driver"},15:{dbDriver:""}},Z={1:{dbUrl:"jdbc:mysql://127.0.0.1:3306/jeecg-boot?characterEncoding=UTF-8&useUnicode=true&useSSL=false"},4:{dbUrl:"jdbc:mysql://127.0.0.1:3306/jeecg-boot?characterEncoding=UTF-8&useUnicode=true&useSSL=false&tinyInt1isBit=false&allowPublicKeyRetrieval=true&serverTimezone=Asia/Shanghai"},2:{dbUrl:"jdbc:oracle:thin:@127.0.0.1:1521:ORCL"},3:{dbUrl:"jdbc:sqlserver://127.0.0.1:1433;SelectMethod=cursor;DatabaseName=jeecgboot"},5:{dbUrl:"jdbc:mariadb://127.0.0.1:3306/jeecg-boot?characterEncoding=UTF-8&useSSL=false"},6:{dbUrl:"jdbc:postgresql://127.0.0.1:5432/jeecg-boot"},7:{dbUrl:"jdbc:dm://127.0.0.1:5236/?jeecg-boot&zeroDateTimeBehavior=convertToNull&useUnicode=true&characterEncoding=utf-8"},8:{dbUrl:"jdbc:kingbase8://127.0.0.1:54321/jeecg-boot"},9:{dbUrl:"jdbc:oscar://192.168.1.125:2003/jeecg-boot"},10:{dbUrl:"jdbc:sqlite://opt/test.db"},11:{dbUrl:"jdbc:db2://127.0.0.1:50000/jeecg-boot"},12:{dbUrl:"jdbc:hsqldb:hsql://127.0.0.1/jeecg-boot"},13:{dbUrl:"jdbc:derby://127.0.0.1:1527/jeecg-boot"},14:{dbUrl:"jdbc:h2:tcp://127.0.0.1:8082/jeecg-boot"},15:{dbUrl:""}},be=[{title:"数据源名称",dataIndex:"name",width:200,align:"left"},{title:"数据库类型",dataIndex:"dbType_dictText",width:200},{title:"驱动类",dataIndex:"dbDriver",width:200},{title:"数据源地址",dataIndex:"dbUrl"},{title:"用户名",dataIndex:"dbUsername",width:200}],me=[{field:"name",label:"数据源名称",component:"Input",colProps:{span:8}},{field:"dbType",label:"数据库类型",component:"JDictSelectTag",colProps:{span:8},componentProps:()=>({dictCode:"database_type"})}],A=[{field:"id",label:"id",component:"Input",show:!1},{field:"code",label:"数据源编码",component:"Input",required:!0,dynamicDisabled:({values:e})=>!!e.id},{field:"name",label:"数据源名称",component:"Input",required:!0},{field:"dbType",label:"数据库类型",component:"JDictSelectTag",required:!0,componentProps:({formModel:e})=>({dictCode:"database_type",onChange:t=>{e=Object.assign(e,W[t],Z[t])}})},{field:"dbDriver",label:"驱动类",required:!0,component:"Input"},{field:"dbUrl",label:"数据源地址",required:!0,component:"Input"},{field:"dbUsername",label:"用户名",required:!0,component:"Input"},{field:"dbPassword",label:"密码",required:!0,component:"InputPassword",slot:"pwd"},{field:"remark",label:"备注",component:"InputTextArea"}];const pe="sys/dataSource/exportXls",ge="sys/dataSource/importExcel",ve=e=>i.get({url:"/sys/dataSource/list",params:e}),ee=(e,t)=>{let r=t?"/sys/dataSource/edit":"/sys/dataSource/add";return i.post({url:r,params:e})},te=e=>i.get({url:"/sys/dataSource/queryById",params:e}),fe=(e,t)=>i.delete({url:"/sys/dataSource/delete",data:e},{joinParamsToUrl:!0}).then(()=>{t()}),re=e=>i.post({url:"/online/cgreport/api/testConnection",params:e}),De=(e,t)=>{K.confirm({title:"确认删除",content:"是否删除选中数据",okText:"确认",cancelText:"取消",onOk:()=>i.delete({url:"/sys/dataSource/deleteBatch",data:e},{joinParamsToUrl:!0}).then(()=>{t()})})},oe=O({__name:"DataSourceModal",emits:["register","success"],setup(e,{emit:t}){const{createMessage:r}=H(),f=t,s=R(!0),[D,{getFieldsValue:y,resetFields:u,validateFields:a,setFieldsValue:b,validate:T}]=Q({schemas:A,showActionButtonGroup:!1}),[I,{setModalProps:h,closeModal:B}]=$(o=>g(this,null,function*(){yield u(),h({confirmLoading:!1}),s.value=!!(o!=null&&o.isUpdate),c(s)&&(o.record=yield te({id:o.record.id}),yield b(x({},o.record)))})),C=N(()=>c(s)?"编辑数据源":"新增数据源");function M(){return g(this,null,function*(){let o=["dbType","dbDriver","dbUrl","dbName","dbUsername","dbPassword"],m=y(o),j={};o.forEach(d=>j[d]={value:m[d],errors:null}),yield a(o).then(d=>{let S=r.loading("连接中....",0);re(d).then(p=>{p.success&&r.success("连接成功")}).catch(p=>{}).finally(()=>S())})})}function P(o){return g(this,null,function*(){try{let m=yield T();h({confirmLoading:!0}),yield ee(m,s.value),B(),f("success")}finally{h({confirmLoading:!1})}})}return(o,m)=>{const j=v("a-input-password"),d=v("a-col"),S=v("a-button"),p=v("a-row");return V(),J(c(G),X(o.$attrs,{onRegister:c(I),title:C.value,onOk:P,width:"40%"}),{default:l(()=>[n(c(Y),{onRegister:c(D)},{pwd:l(({model:U,field:_})=>[n(p,{gutter:8},{default:l(()=>[n(d,{sm:15,md:16,lg:17,xl:19},{default:l(()=>[n(j,{value:U[_],"onUpdate:value":F=>U[_]=F,placeholder:"请输入密码"},null,8,["value","onUpdate:value"])]),_:2},1024),n(d,{sm:9,md:7,lg:7,xl:5},{default:l(()=>[n(S,{type:"primary",style:{width:"100%"},onClick:M},{default:l(()=>[z("测试")]),_:1})]),_:1})]),_:2},1024)]),_:1},8,["onRegister"])]),_:1},16,["onRegister","title"])}}}),ye=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));export{ye as D,oe as _,pe as a,ge as b,be as c,fe as d,De as e,ve as g,me as s};