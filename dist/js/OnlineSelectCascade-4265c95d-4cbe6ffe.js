import{d as V,f as m,w as h,Y as y,a6 as v,ab as S,a9 as b,a7 as k,F as B,aa as O,ac as P,ad as $}from"./tinymce-vendor-3c2b3d6e.js";import{C as M,ap as w,bs as N}from"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";var R=(t,r,o)=>new Promise((u,n)=>{var f=a=>{try{d(o.next(a))}catch(s){n(s)}},p=a=>{try{d(o.throw(a))}catch(s){n(s)}},d=a=>a.done?u(a.value):Promise.resolve(a.value).then(f,p);d((o=o.apply(t,r)).next())});const x="/online/cgform/api/querySelectOptions",T=V({name:"OnlineSelectCascade",props:{table:{type:String,default:""},txt:{type:String,default:""},store:{type:String,default:""},idField:{type:String,default:""},pidField:{type:String,default:""},pidValue:{type:String,default:"-1"},origin:{type:Boolean,default:!1},condition:{type:String,default:""},value:{type:String,default:""},isNumber:{type:Boolean,default:!1},placeholder:{type:String,default:"请选择"}},emits:["change","next"],setup(t,{emit:r}){const{createMessage:o}=M(),u=m(""),n=m([]),f=m(!0);function p(e){let l=e||"";r("change",l),g(l)}h(()=>t.condition,e=>{f.value=!0,e&&a()},{immediate:!0}),h(()=>t.pidValue,e=>{e==="-1"?n.value=[]:a()}),h(()=>t.value,(e,l)=>{e?u.value=e:(u.value=[],l&&(r("change",""),r("next","-1"))),e&&!l&&d(e)},{immediate:!0});function d(e){return R(this,null,function*(){if(t.idField===t.store)r("next",e);else if(t.origin===!0)yield F(),g(e);else{let l=yield C();g(e,l)}})}function a(){let e=s();t.origin===!0?e.condition=t.condition:e.pidValue=t.pidValue,n.value=[],w.get({url:x,params:e},{isTransformResponse:!1}).then(l=>{l.success?n.value=[...l.result]:o.warning("联动组件数据加载失败,请检查配置!")})}function s(){return{table:t.table,txt:t.txt,key:t.store,idField:t.idField,pidField:t.pidField}}function C(){return new Promise(e=>{if(!t.value)u.value=[],e([]);else{let l=s();t.isNumber===!0?l.condition=`${t.store} = ${t.value}`:l.condition=`${t.store} = '${t.value}'`,w.get({url:x,params:l},{isTransformResponse:!1}).then(i=>{i.success?e(i.result):(o.warning("联动组件数据加载失败,请检查配置!"),e([]))})}})}function F(){return new Promise(e=>{(function l(i){i>10&&e([]);let c=n.value;c&&c.length>0?e(c):setTimeout(()=>{l(i++)},300)})(0)})}function g(e,l=[]){if(e&&e.length>0){(!l||l.length==0)&&(l=n.value);let i=l.filter(c=>c.store===e);if(i&&i.length>0){let c=i[0].id;r("next",c)}}}return{selectedValue:u,dictOptions:n,handleChange:p}}}),_=["title"];function q(t,r,o,u,n,f){const p=y("a-select-option"),d=y("a-select");return v(),S(d,{placeholder:t.placeholder,value:t.selectedValue,onChange:t.handleChange,allowClear:"",style:{width:"100%"}},{default:b(()=>[(v(!0),k(B,null,O(t.dictOptions,(a,s)=>(v(),S(p,{key:s,value:a.store},{default:b(()=>[P("span",{style:{display:"inline-block",width:"100%"},title:a.label},$(a.label),9,_)]),_:2},1032,["value"]))),128))]),_:1},8,["placeholder","value","onChange"])}const L=N(T,[["render",q]]);export{L as default};