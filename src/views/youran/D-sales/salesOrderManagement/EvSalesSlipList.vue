<template>
  <div class="p-2">
    <!--查询区域-->
    <div class="jeecg-basic-table-form-container">
      <a-form ref="formRef" @keyup.enter.native="searchQuery" :model="queryParam" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-row :gutter="24">
          <a-col :lg="6">
            <a-form-item name="code">
              <template #label><span title="销售单号">销售单号</span></template>
              <j-input placeholder="请输入销售单号" v-model:value="queryParam.code"></j-input>
            </a-form-item>
          </a-col>
          <a-col :lg="6">
            <a-form-item name="customType">
              <template #label><span title="客户类型">客户类型</span></template>
              <!-- <a-input placeholder="请输入客户类型" v-model:value="queryParam.customType"></a-input> -->
              <JDictSelectTag type="select" v-model:value="queryParam.customType" dictCode="ev_custom_type" placeholder="请选择客户类型" />
              
            </a-form-item>
          </a-col>
          <a-col :lg="6">
            <a-form-item name="payType">
              <template #label><span title="收款方式">收款方式</span></template>
              <!-- <a-input placeholder="请输入收款方式" v-model:value="queryParam.paymentMethod"></a-input> -->
              <!-- <a-radio-group v-model:value="queryParam.paymentMethod" button-style="solid">
                <a-radio-button value="1">微信</a-radio-button>
                <a-radio-button value="2">支付宝</a-radio-button>
                <a-radio-button value="3">现金</a-radio-button>
              </a-radio-group> -->
              <JDictSelectTag type="select" v-model:value="queryParam.payType" dictCode="ev_pay_type" placeholder="请选择收款方式" />
            </a-form-item>            
          </a-col>
          <!-- <a-col :lg="6">
            <a-form-item>
               <template #label><span title="销售时间">销售时间</span></template>
               <div style="display: flex">
                 <a-form-item name="salesTime_begin" style="margin-bottom: 0;">
                   <a-date-picker showTime value-format="YYYY-MM-DD HH:mm:ss" placeholder="请选择开始时间" v-model:value="queryParam.salesTime_begin" class="query-group-cust" />
                 </a-form-item>
                 <span class="query-group-split-cust">~</span>
                 <a-form-item name="salesTime_end" style="margin-bottom: 0;">
                   <a-date-picker showTime value-format="YYYY-MM-DD HH:mm:ss" placeholder="请选择结束时间" v-model:value="queryParam.salesTime_end" class="query-group-cust" />
                 </a-form-item>
               </div>
            </a-form-item>
          </a-col> -->
          <template v-if="toggleSearchStatus">
            <!-- <a-col :lg="6">
              <a-form-item name="customId">
                <template #label><span title="客户信息ID">客户信息</span></template>
                <a-input placeholder="请输入客户信息ID" v-model:value="queryParam.customId"></a-input>
              </a-form-item>
            </a-col> -->
            <!-- <a-col :lg="6">
              <a-form-item name="salesProductIds">
                <template #label><span title="销售商品信息">销售商品</span></template>
                <a-input placeholder="请输入销售商品信息" v-model:value="queryParam.salesProductIds"></a-input>
              </a-form-item>
            </a-col> -->
            <a-col :lg="6">
              <a-form-item name="saleUserId">
                <template #label><span title="销售人员">销售人员</span></template>
                <!-- <j-search-select placeholder="请输入销售人员" v-model:value="queryParam.saleUserId" dict=",," /> -->
                <JDictSelectTag type="select" v-model:value="queryParam.saleUserId" dictCode="sys_user,realname,id,username!='admin'" placeholder="请选择销售人员" />
              </a-form-item>
            </a-col>
            <!-- <a-col :lg="6">
              <a-form-item name="status">
                <template #label><span title="销售单审核状态">销售单审</span></template>
                <a-input placeholder="请输入销售单审核状态" v-model:value="queryParam.status"></a-input>
              </a-form-item>
            </a-col> -->
          </template>
          <a-col :xl="6" :lg="7" :md="8" :sm="24">
            <span style="float: left; overflow: hidden" class="table-page-search-submitButtons">
              <a-col :lg="12">
                <a-button type="primary" preIcon="ant-design:search-outlined" @click="searchQuery">查询</a-button>
                <a-button type="primary" preIcon="ant-design:reload-outlined" @click="searchReset" style="margin-left: 8px">重置</a-button>
                <a @click="toggleSearchStatus = !toggleSearchStatus" style="margin-left: 8px">
                  {{ toggleSearchStatus ? '收起' : '展开' }}
                  <Icon :icon="toggleSearchStatus ? 'ant-design:up-outlined' : 'ant-design:down-outlined'" />
                </a>
              </a-col>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <!--引用表格-->
    <BasicTable @register="registerTable">
      <!--插槽:table标题-->
      <template #tableTitle>
        <a-button type="primary" @click="handleAdd" preIcon="ant-design:plus-outlined"> 新增</a-button>
        <!-- <a-button  type="primary" preIcon="ant-design:export-outlined" @click="onExportXls"> 导出</a-button>
        <j-upload-button  type="primary" preIcon="ant-design:import-outlined" @click="onImportXls">导入</j-upload-button> -->
        <a-dropdown v-if="selectedRowKeys.length > 0">
          <template #overlay>
            <a-menu>
              <a-menu-item key="1" @click="batchHandleDelete">
                <Icon icon="ant-design:delete-outlined"></Icon>
                删除
              </a-menu-item>
            </a-menu>
          </template>
          <a-button>批量操作
            <Icon icon="mdi:chevron-down"></Icon>
          </a-button>
        </a-dropdown>
        <!-- 高级查询 -->
        <!-- <super-query :config="superQueryConfig" @search="handleSuperQuery" /> -->
      </template>
      <!--操作栏-->
      <template #action="{ record }">
        <TableAction :actions="getTableAction(record)" />
      </template>
      <template v-slot:bodyCell="{ column, record, index, text }">
      </template>
    </BasicTable>
    <!-- 表单区域 -->
    <EvSalesSlipModal ref="registerModal" @success="handleSuccess"></EvSalesSlipModal>
  </div>
</template>

<script lang="ts" name="evSalesSlip-evSalesSlip" setup>
  import { ref, reactive } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { columns, superQuerySchema } from './EvSalesSlip.data';
  import { list, deleteOne, batchDelete, getImportUrl, getExportUrl } from './EvSalesSlip.api';
  import { downloadFile } from '/@/utils/common/renderUtils';
  import EvSalesSlipModal from './components/EvSalesSlipModal.vue'
  import { useUserStore } from '/@/store/modules/user';
  // import JSearchSelect from '/@/components/Form/src/jeecg/components/JSearchSelect.vue';
  import JDictSelectTag from '/@/components/Form/src/jeecg/components/JDictSelectTag.vue';
  import { JInput } from '/@/components/Form';

  const formRef = ref();
  const queryParam = reactive<any>({});
  const toggleSearchStatus = ref<boolean>(false);
  const registerModal = ref();
  const userStore = useUserStore();
  //注册table数据
  const { prefixCls, tableContext, onExportXls, onImportXls } = useListPage({
    tableProps: {
      title: '销售单',
      api: list,
      columns,
      canResize:false,
      useSearchForm: false,
      showTableSetting: false,
      actionColumn: {
        width: 150,
        fixed: 'right',
      },
      beforeFetch: (params) => {
        return Object.assign(params, queryParam);
      },
    },
    exportConfig: {
      name: "销售单",
      url: getExportUrl,
      params: queryParam,
    },
	  importConfig: {
	    url: getImportUrl,
	    success: handleSuccess
	  },
  });
  const [registerTable, { reload, collapseAll, updateTableDataRecord, findTableDataRecord, getDataSource }, { rowSelection, selectedRowKeys }] = tableContext;
  const labelCol = reactive({
    xs:24,
    sm:6,
    // xl:6,
    // xxl:4
  });
  const wrapperCol = reactive({
    xs: 24,
    sm: 16,
  });

  // 高级查询配置
  const superQueryConfig = reactive(superQuerySchema);

  /**
   * 高级查询事件
   */
  function handleSuperQuery(params) {
    Object.keys(params).map((k) => {
      queryParam[k] = params[k];
    });
    searchQuery();
  }

  /**
   * 新增事件
   */
  function handleAdd() {
    registerModal.value.disableSubmit = false;
    registerModal.value.add();
  }
  
  /**
   * 编辑事件
   */
  function handleEdit(record: Recordable) {
    registerModal.value.disableSubmit = false;
    registerModal.value.edit(record);
  }
   
  /**
   * 详情
   */
  function handleDetail(record: Recordable) {
    registerModal.value.disableSubmit = true;
    registerModal.value.edit(record);
  }
   
  /**
   * 删除事件
   */
  async function handleDelete(record) {
    await deleteOne({ id: record.id }, handleSuccess);
  }
   
  /**
   * 批量删除事件
   */
  async function batchHandleDelete() {
    await batchDelete({ ids: selectedRowKeys.value }, handleSuccess);
  }
   
  /**
   * 成功回调
   */
  function handleSuccess() {
    (selectedRowKeys.value = []) && reload();
  }
   
  /**
   * 操作栏
   */
  function getTableAction(record) {
    return [
      // {
      //   label: '编辑',
      //   onClick: handleEdit.bind(null, record),
      // },
      {
        label: '详情',
        onClick: handleDetail.bind(null, record),
      }, {
        label: '删除',
        popConfirm: {
          title: '是否确认删除',
          confirm: handleDelete.bind(null, record),
          placement: 'topLeft',
        }
      }
    ];
  }
   
  /**
   * 下拉操作栏
   */
  function getDropDownAction(record) {
    return [
      {
        label: '详情',
        onClick: handleDetail.bind(null, record),
      }, {
        label: '删除',
        popConfirm: {
          title: '是否确认删除',
          confirm: handleDelete.bind(null, record),
          placement: 'topLeft',
        }
      }
    ]
  }

  /**
   * 查询
   */
  function searchQuery() {
    reload();
  }
  
  /**
   * 重置
   */
  function searchReset() {
    formRef.value.resetFields();
    selectedRowKeys.value = [];
    //刷新数据
    reload();
  }
  



</script>

<style lang="less" scoped>
  .jeecg-basic-table-form-container {
    padding: 0;
    .table-page-search-submitButtons {
      display: block;
      margin-bottom: 24px;
      white-space: nowrap;
    }
    .query-group-cust{
      min-width: 100px !important;
    }
    .query-group-split-cust{
      width: 30px;
      display: inline-block;
      text-align: center
    }
  }
</style>
