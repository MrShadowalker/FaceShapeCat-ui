import{d as n,a6 as r,ab as i,u as a}from"./tinymce-vendor-3c2b3d6e.js";import"./index-09260ce4.js";import{e as l}from"./antd-vue-vendor-05bfa84d.js";import{u as p,B as m}from"./useForm-df7d93c5.js";import{_ as s}from"./jeecg-online-vendor-f57c6456.js";import"./index-37448b2d.js";import"./vxe-table-vendor-26792376.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-2ad3f236.js";import"./index-64ecc8b2.js";import"./BasicModal-9d388b71.js";import"./useWindowSizeFn-e63bb4b0.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";const c=[{label:"文本框",field:"name",component:"Input",componentProps:{prefix:"中文",showCount:!0},defaultValue:"张三"},{label:"密码",field:"password",component:"InputPassword",componentProps:{visibilityToggle:!0,prefix:"密码"}},{label:"搜索框",field:"searchBox",component:"InputSearch",componentProps:{onSearch:e=>{}}},{label:"文本域",field:"textArea",component:"InputTextArea",componentProps:{allowClear:!0,showCount:!0,autoSize:{minRows:2,maxRows:3}}},{label:"数值输入框",field:"number",component:"InputNumber",componentProps:{addonAfter:"保留两位小数",max:100,precision:2,step:.1}},{label:"下拉框",field:"jinputtype",component:"Select",componentProps:{options:[{value:"like",label:"模糊（like）"},{value:"ne",label:"不等于（ne）"},{value:"ge",label:"大于等于（ge）"},{value:"le",label:"小于等于（le)"}],mode:"multiple",showSearch:!0}},{field:"TreeSelect",label:"下拉树",component:"TreeSelect",componentProps:{treeCheckable:!0,title:"下拉树",treeData:[{label:"洗衣机",value:"0",children:[{label:"滚筒洗衣机",value:"0-1"}]},{label:"电视机",value:"1",children:[{label:"平板电视",value:"1-1",disabled:!0},{label:"CRT电视机",value:"1-2"},{label:"投影电视",value:"1-3"}]}]}},{label:"RadioButtonGroup组件",field:"status",component:"RadioButtonGroup",componentProps:{options:[{label:"有效",value:1},{label:"无效",value:0}]}},{label:"单选框",field:"radioSex",component:"RadioGroup",componentProps:{options:[{label:"男",value:1,disabled:!1},{label:"女",value:0}]}},{label:"多选框",field:"checkbox",component:"Checkbox",componentProps:{disabled:!1}},{label:"多选框组",field:"checkSex",component:"CheckboxGroup",componentProps:{name:"爱好",options:[{label:"运动",value:0,disabled:!0},{label:"听音乐",value:1},{label:"看书",value:2}]},defaultValue:[2]},{label:"自动完成组件",field:"AutoComplete",component:"AutoComplete",componentProps:{options:[{value:"Burns Bay Road"},{value:"Downing Street"},{value:"Wall Street"}]}},{label:"级联选择",field:"cascade",component:"Cascader",componentProps:{maxTagCount:2,placement:"bottomRight",showSearch:!0,options:[{label:"北京",value:"BeiJin",children:[{label:"海淀区",value:"HaiDian"}]},{label:"江苏省",value:"JiangSu",children:[{label:"南京",value:"Nanjing",children:[{label:"中华门",value:"ZhongHuaMen"}]}]}]}},{label:"日期选择",field:"dateSelect",component:"DatePicker",componentProps:{format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",showToday:!0,disabledDate:e=>{let o=l(e).format("YYYY-MM-DD"),t=l(new Date).format("YYYY-MM-DD");return o==t}}},{label:"月份选择",field:"monthSelect",component:"MonthPicker",componentProps:{disabledDate:e=>{let o=l(e).format("YYYY-MM"),t=l(new Date).format("YYYY-MM");return o==t}}},{label:"周选择",field:"weekSelect",component:"WeekPicker",componentProps:{size:"small"}},{label:"时间选择",field:"timeSelect",component:"TimePicker",componentProps:{size:"default",showNow:!0}},{label:"日期时间范围",field:"dateTimeRangeSelect",component:"RangePicker",componentProps:{showTime:!0,format:"YYYY/MM/DD HH:mm:ss",placeholder:["请选择开始日期时间","请选择结束日期时间"]}},{label:"日期范围",field:"dateRangeSelect",component:"RangeDate",componentProps:{format:"YYYY/MM/DD",placeholder:["请选择开始日期","请选择结束日期"]}},{label:"时间范围",field:"timeRangeSelect",component:"RangeTime",componentProps:{format:"HH/mm/ss",placeholder:["请选择开始时间","请选择结束时间"]}},{label:"开关",field:"switch",component:"Switch",componentProps:{size:"default",unCheckedChildren:"开启",unCheckedValue:"0",checkedChildren:"关闭",checkedValue:"1",disabled:!1}},{label:"滑动输入条",field:"slider",component:"Slider",componentProps:{min:-20,max:100,range:!0,marks:{"-20":"-20°C",0:"0°C",26:"26°C",37:"37°C",100:{style:{color:"#f50"},label:"100°C"}}}},{label:"评分",field:"rate",component:"Rate",componentProps:{allowHalf:!0,count:5,tooltips:["非常差","较差","正常","很好","非很好"]}},{label:"分割线",field:"divisionLine",component:"Divider",componentProps:{dashed:!1,orientation:"center",plain:!0,type:"horizontal"}}],u=n({__name:"BasicFormComponent",setup(e){const[o,{getFieldsValue:t,setFieldsValue:d,resetFields:b,validate:f}]=p({schemas:c,labelWidth:"150px",showActionButtonGroup:!1,autoFocusFirstItem:!0});return(h,v)=>(r(),i(a(m),{onRegister:a(o),style:{"margin-top":"20px"}},null,8,["onRegister"]))}});const Ye=s(u,[["__scopeId","data-v-43f0453f"]]);export{Ye as default};