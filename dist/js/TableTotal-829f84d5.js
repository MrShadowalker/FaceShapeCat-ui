import{d as n,Y as l,a6 as d,ab as u,a9 as o,k as m,u as i}from"./tinymce-vendor-3c2b3d6e.js";import{P as s}from"./index-31a6ff64.js";import{u as c}from"./index-0f0d0317.js";import{aE as T}from"./index-37448b2d.js";import v from"./BasicTable-400bb95b.js";import"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";import"./useContentHeight-bfd1eb89.js";import"./useWindowSizeFn-e63bb4b0.js";import"./useContentViewHeight-6be29838.js";import"./usePageContext-b7687fba.js";import"./injectionKey-69710956.js";import"./index-2ad3f236.js";import"./index-64ecc8b2.js";import"./BasicModal-9d388b71.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";const Ie=n({__name:"TableTotal",setup(_){const[p]=c({rowKey:"id",bordered:!0,canResize:!1,columns:[{title:"姓名",dataIndex:"name"},{title:"贡献点",dataIndex:"point"},{title:"等级",dataIndex:"level"},{title:"更新时间",dataIndex:"updateTime"}],dataSource:[{id:0,name:"张三",point:23,level:3,updateTime:"2019-8-14"},{id:1,name:"小鹿",point:33,level:9,updateTime:"2019-8-10"},{id:2,name:"小王",point:6,level:1,updateTime:"2019-8-13"},{id:3,name:"李四",point:53,level:8,updateTime:"2019-8-12"},{id:4,name:"小红",point:44,level:5,updateTime:"2019-8-11"},{id:5,name:"王五",point:97,level:10,updateTime:"2019-8-10"},{id:6,name:"小明",point:33,level:2,updateTime:"2019-8-10"},{id:7,name:"小张",point:33,level:4,updateTime:"2019-8-10"},{id:8,name:"小六",point:33,level:2,updateTime:"2019-8-10"},{id:9,name:"小五",point:33,level:7,updateTime:"2019-8-10"},{id:10,name:"小赵",point:33,level:2,updateTime:"2019-8-10"},{id:11,name:"李华",point:33,level:8,updateTime:"2019-8-10"},{id:12,name:"小康",point:33,level:5,updateTime:"2019-8-10"}],showSummary:!0,summaryFunc:r});function r(e){const t=T(e,["point","level"]);return[t,{_row:"平均",_index:"平均",point:(t.point/e.length).toFixed(2),level:(t.level/e.length).toFixed(0)}]}return(e,t)=>{const a=l("a-card");return d(),u(i(s),null,{default:o(()=>[m(a,{bordered:!1},{default:o(()=>[m(i(v),{onRegister:i(p)},null,8,["onRegister"])]),_:1})]),_:1})}}});export{Ie as default};