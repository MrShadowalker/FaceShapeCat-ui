import{d as T,ac as i,Y as o,a6 as h,ab as g,a9 as t,k as u,E as e}from"./tinymce-vendor-3c2b3d6e.js";import{u as y}from"./index-0f0d0317.js";import{P as k}from"./index-31a6ff64.js";import{X as c,L as f,l as v,O as p,a0 as n,a4 as s}from"./antd-vue-vendor-05bfa84d.js";import{refundTimeTableSchema as x,refundTimeTableData as X}from"./data-526132ec.js";import P from"./BasicTable-400bb95b.js";import{_ as S}from"./jeecg-online-vendor-f57c6456.js";import"./index-2ad3f236.js";import"./index-64ecc8b2.js";import"./BasicModal-9d388b71.js";import"./index-37448b2d.js";import"./vxe-table-vendor-26792376.js";import"./useWindowSizeFn-e63bb4b0.js";import"./download-2caf3e60.js";import"./base64Conver-fa2fe1af.js";import"./useContentHeight-bfd1eb89.js";import"./useContentViewHeight-6be29838.js";import"./usePageContext-b7687fba.js";import"./injectionKey-69710956.js";import"./index-09260ce4.js";import"./useForm-df7d93c5.js";import"./componentMap-e2e33057.js";import"./useFormItem-613b6d5d.js";import"./index-ee632f67.js";import"./index-b5f97370.js";import"./useCountdown-d833a954.js";import"./useFormItemSingle-4fd81116.js";import"./JAddInput-a2153936.js";import"./areaDataUtil-10873080.js";import"./data-9be677e2.js";import"./useSelectBiz-b5c21498.js";import"./props-ea47501e.js";import"./JSelectBiz-b887fca6.js";import"./index-2d7d6454.js";import"./htmlmixed-6ab39e30.js";import"./codemirror-vendor-0a03fef5.js";import"./vue-41a95ea0.js";/* empty css             */import"./anyword-hint-577f8e6e.js";import"./index-d4a67b72.js";import"./bem-a6e46c9e.js";import"./props-3977d3d5.js";import"./useContextMenu-3e9e42e0.js";import"./depart.api-76b2f38a.js";import"./JSelectUser-6efbe652.js";import"./JImageUpload-1b0b2e46.js";import"./JDictSelectTag-f0227cc5.js";import"./CompTypeEnum-5c91fd88.js";import"./JSelectDept-073e3b74.js";import"./useTreeBiz-a3326efb.js";import"./JEditor-75d90eae.js";import"./index-13e7f179.js";import"./JPopup-8248ac78.js";import"./cron-parser-vendor-a4cfb0b0.js";import"./JTreeSelect-73cfd2cd.js";import"./JEllipsis-242e7bd0.js";import"./JUpload-70acb676.js";import"./index-76418551.js";import"./JSearchSelect-4158b9a9.js";import"./index-3dc0c4fd.js";import"./index-aba90786.js";import"./formUtils-09c7de86.js";const N=T({components:{BasicTable:P,PageWrapper:k,[c.name]:c,[f.name]:f,Empty:v,[p.name]:p,[p.Item.name]:p.Item,[n.name]:n,[n.Step.name]:n.Step,[s.name]:s,[s.TabPane.name]:s.TabPane},setup(){const[F]=y({title:"退货进度",columns:x,pagination:!1,dataSource:X,showIndexColumn:!1,scroll:{y:300}});return{registerTimeTable:F}}}),$={class:"pt-4 m-4 desc-wrap"},w=i("a",null,"12421",-1),I=i("div",null,"Jeecg",-1),V=i("p",null,"2016-12-12 12:32",-1),W=i("p",null,"Chad",-1),Y=i("h4",null,"信息组",-1);function z(F,M,R,J,K,L){const _=o("a-button"),d=o("a-tab-pane"),D=o("a-tabs"),a=o("a-descriptions-item"),l=o("a-descriptions"),r=o("a-step"),C=o("a-steps"),m=o("a-card"),E=o("a-divider"),b=o("Empty"),B=o("BasicTable"),A=o("PageWrapper");return h(),g(A,{title:"单号：234231029431",contentBackground:""},{extra:t(()=>[u(_,null,{default:t(()=>[e(" 操作一 ")]),_:1}),u(_,null,{default:t(()=>[e(" 操作二 ")]),_:1}),u(_,{type:"primary"},{default:t(()=>[e(" 主操作 ")]),_:1})]),footer:t(()=>[u(D,{"default-active-key":"1"},{default:t(()=>[u(d,{key:"1",tab:"详情"}),u(d,{key:"2",tab:"规则"})]),_:1})]),default:t(()=>[i("div",$,[u(l,{size:"small",column:2},{default:t(()=>[u(a,{label:"创建人"},{default:t(()=>[e(" 曲丽丽 ")]),_:1}),u(a,{label:"订购产品"},{default:t(()=>[e(" XX 服务 ")]),_:1}),u(a,{label:"创建时间"},{default:t(()=>[e(" 2017-01-10 ")]),_:1}),u(a,{label:"关联单据"},{default:t(()=>[w]),_:1}),u(a,{label:"生效日期"},{default:t(()=>[e(" 2017-07-07 ~ 2017-08-08 ")]),_:1}),u(a,{label:"备注"},{default:t(()=>[e(" 请于两个工作日内确认 ")]),_:1})]),_:1}),u(m,{title:"流程进度",bordered:!1},{default:t(()=>[u(C,{current:1,"progress-dot":"",size:"small"},{default:t(()=>[u(r,{title:"创建项目"},{description:t(()=>[I,e(),V]),_:1}),u(r,{title:"部门初审"},{description:t(()=>[W]),_:1}),u(r,{title:"财务复核"}),u(r,{title:"完成"})]),_:1})]),_:1}),u(m,{title:"用户信息",bordered:!1,class:"mt-5"},{default:t(()=>[u(l,{column:3},{default:t(()=>[u(a,{label:"用户姓名"},{default:t(()=>[e(" 付小小 ")]),_:1}),u(a,{label:"会员卡号"},{default:t(()=>[e(" XX 32943898021309809423 ")]),_:1}),u(a,{label:"身份证"},{default:t(()=>[e(" 3321944288191034921 ")]),_:1}),u(a,{label:"联系方式"},{default:t(()=>[e(" 18100000000 ")]),_:1}),u(a,{label:"联系地址",span:2},{default:t(()=>[e(" 曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口 ")]),_:1})]),_:1}),u(l,{title:"信息组",column:3},{default:t(()=>[u(a,{label:"某某数据"},{default:t(()=>[e(" 111 ")]),_:1}),u(a,{label:"该数据更新时间"},{default:t(()=>[e(" 2017-08-08 ")]),_:1}),u(a,{label:"某某数据"},{default:t(()=>[e(" 725 ")]),_:1}),u(a,{label:"该数据更新时间"},{default:t(()=>[e(" 2017-08-08 ")]),_:1})]),_:1}),Y,u(m,{title:"多层级信息组"},{default:t(()=>[u(l,{title:"组名称",column:3},{default:t(()=>[u(a,{label:"负责人"},{default:t(()=>[e(" 林东东 ")]),_:1}),u(a,{label:"角色码"},{default:t(()=>[e(" 1234567 ")]),_:1}),u(a,{label:"所属部门"},{default:t(()=>[e(" XX公司 - YY部 ")]),_:1}),u(a,{label:"过期时间"},{default:t(()=>[e(" 2017-08-08 ")]),_:1}),u(a,{label:"描述",span:2},{default:t(()=>[e(" 这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长... ")]),_:1})]),_:1}),u(E),u(l,{title:"组名称",column:1},{default:t(()=>[u(a,{label:"学名"},{default:t(()=>[e(" Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗.. ")]),_:1})]),_:1}),u(E),u(l,{title:"组名称",column:1},{default:t(()=>[u(a,{label:"负责人"},{default:t(()=>[e(" 付小小 ")]),_:1}),u(a,{label:"角色码"},{default:t(()=>[e(" 1234568 ")]),_:1})]),_:1})]),_:1})]),_:1}),u(m,{title:"用户近半年来电记录",class:"my-5"},{default:t(()=>[u(b)]),_:1}),u(B,{onRegister:F.registerTimeTable},null,8,["onRegister"])])]),_:1})}const ut=S(N,[["render",z]]);export{ut as default};
