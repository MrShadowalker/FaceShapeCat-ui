var u=(e,n,a)=>new Promise((r,p)=>{var s=i=>{try{m(a.next(i))}catch(t){p(t)}},l=i=>{try{m(a.throw(i))}catch(t){p(t)}},m=i=>i.done?r(i.value):Promise.resolve(i.value).then(s,l);m((a=a.apply(e,n)).next())});import{d as b,f as h,Y as f,a6 as g,a7 as R,k as w,a9 as v}from"./tinymce-vendor-3c2b3d6e.js";import"./index-0f0d0317.js";import{o as x}from"./select-d166b290.js";import{d as I}from"./table-bc67762d.js";import{t as k}from"./tree-921816b0.js";import{d as _}from"./antd-vue-vendor-05bfa84d.js";import{C as T,_ as A}from"./jeecg-online-vendor-f57c6456.js";import{useListPage as E}from"./useListPage-66651993.js";import y from"./BasicTable-400bb95b.js";import{Q as P}from"./index-2ad3f236.js";import"./index-37448b2d.js";import"./vxe-table-vendor-26792376.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./index-64ecc8b2.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./injectionKey-69710956.js";const S=[{title:"输入框",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:150},{title:"默认输入状态",dataIndex:"name7",editRow:!0,width:150},{title:"输入框校验",dataIndex:"name1",editRow:!0,align:"left",editRule:!0,width:150},{title:"输入框函数校验",dataIndex:"name2",editRow:!0,align:"right",editRule:e=>u(void 0,null,function*(){return e==="2"?"不能输入该值":""})},{title:"数字输入框",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:150},{title:"下拉框",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"},{label:"Option3",value:"3"}]},width:200},{title:"远程下拉",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:x,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"远程下拉树",dataIndex:"name8",editRow:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:k,resultField:"list"},width:200},{title:"日期选择",dataIndex:"date",editRow:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:150},{title:"时间选择",dataIndex:"time",editRow:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:100},{title:"勾选框",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:100},{title:"开关",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:100}],M=b({components:{BasicTable:y,TableAction:P},setup(){const{createMessage:e}=T(),n=h(""),{tableContext:a}=E({designScope:"basic-table-demo",tableProps:{title:"可编辑行示例",titleHelpMessage:["本例中修改[数字输入框]这一列时，同一行的[远程下拉]列的当前编辑数据也会同步发生改变"],api:I,columns:S,showIndexColumn:!1,showTableSetting:!0,tableSetting:{fullScreen:!0},actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}},useSearchForm:!1}}),[r]=a;function p(t){var o;n.value=t.key,(o=t.onEdit)==null||o.call(t,!0)}function s(t){var o;n.value="",(o=t.onEdit)==null||o.call(t,!1,!1)}function l(t){return u(this,null,function*(){var d,c;if(e.loading({content:"正在保存...",duration:0,key:"saving"}),yield(d=t.onValid)==null?void 0:d.call(t))try{const C=_(t.editValueRefs);(yield(c=t.onEdit)==null?void 0:c.call(t,!1,!0))&&(n.value=""),e.success({content:"数据已保存",key:"saving"})}catch(C){e.error({content:"保存失败",key:"saving"})}else e.error({content:"请填写正确的数据",key:"saving"})})}function m(t,o){return t.editable?[{label:"保存",onClick:l.bind(null,t,o)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:s.bind(null,t,o)}}]:[{label:"编辑",disabled:n.value?n.value!==t.key:!1,onClick:p.bind(null,t)}]}function i({column:t,value:o,record:d}){t.dataIndex==="id"&&(d.editValueRefs.name4.value=`${o}`)}return{registerTable:r,handleEdit:p,createActions:m,onEditChange:i}}}),Y={class:"p-4"};function D(e,n,a,r,p,s){const l=f("TableAction"),m=f("BasicTable");return g(),R("div",Y,[w(m,{onRegister:e.registerTable,onEditChange:e.onEditChange},{action:v(({record:i,column:t})=>[w(l,{actions:e.createActions(i,t)},null,8,["actions"])]),_:1},8,["onRegister","onEditChange"])])}const Qt=A(M,[["render",D]]);export{Qt as default};