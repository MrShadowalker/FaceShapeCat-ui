import{e}from"./tinymce-vendor-3c2b3d6e.js";import{h as p}from"./jeecg-online-vendor-f57c6456.js";import"./antd-vue-vendor-05bfa84d.js";import"./vxe-table-vendor-26792376.js";function h(){const t=p(),o=e(()=>t.getMultiTabsSetting.show),i=e(()=>t.getMultiTabsSetting.showQuick),s=e(()=>t.getMultiTabsSetting.showRedo),n=e(()=>t.getMultiTabsSetting.showFold),g=e(()=>t.getMultiTabsSetting.theme);function u(l){t.setProjectConfig({multiTabsSetting:l})}return{setMultipleTabSetting:u,getShowMultipleTab:o,getShowQuick:i,getShowRedo:s,getShowFold:n,getTabsTheme:g}}export{h as useMultipleTabSetting};