<template>
  <div class="p-2">
    <!--查询区域-->
    <div class="jeecg-basic-table-form-container">
      <a-form ref="formRef" @keyup.enter.native="searchQuery" :model="queryParam" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-row :gutter="24">   
            <a-col :lg="6">
              <a-form-item label="采购店铺" >
                <!-- <a-input v-model:value="formData.departId" placeholder="请输入销售店铺" :disabled="disabled"></a-input> --> 
                <JDictSelectTag type="select" v-model:value="queryParam.shopId" dictCode="sys_depart,depart_name,id,parent_id!=''" placeholder="请选择采购店铺" :disabled="disabled"/>

                <!-- <a-select @change="changeRowGood" v-model:value="formData.departId">
                  <a-select-option v-for="item in shopData" :key="item.id" :value="item.id">{{ item.name }}</a-select-option>
                </a-select> -->
              </a-form-item>
            </a-col>
          <a-col :lg="6">
            <a-form-item name="supplier">
              <template #label><span title="供应商">供应商</span></template>
              <j-input placeholder="请输入供应商" v-model:value="queryParam.supplier"></j-input>
            </a-form-item>
          </a-col>
          <a-col :lg="6">
            <a-form-item name="code">
              <template #label><span title="采购单号">采购单号</span></template>
              <j-input placeholder="请输入采购单号" v-model:value="queryParam.code"></j-input>
            </a-form-item>
          </a-col>
          
          <template v-if="toggleSearchStatus">
          <a-col :lg="6">
              <a-form-item name="payType">
                <template #label><span title="付款方式">付款方式</span></template>
                <!-- <a-input placeholder="请输入付款方式" v-model:value="queryParam.paymentType"></a-input> -->
                 <!-- <a-radio-group v-model:value="queryParam.paymentType" button-style="solid">
                      <a-radio-button value="1">微信</a-radio-button>
                      <a-radio-button value="2">支付宝</a-radio-button>
                      <a-radio-button value="3">现金</a-radio-button>
                </a-radio-group> -->
                <!-- <JSelectMultiple v-model:value="queryParam.payType" placeholder="请选择下拉多选" dictCode="ev_pay_type"></JSelectMultiple> -->
                <JDictSelectTag type="select" v-model:value="queryParam.payType" dictCode="ev_pay_type" placeholder="请选择付款方式" />
              </a-form-item>
            </a-col>
            <!-- <a-col :lg="6">
              <a-form-item name="supplierName">
                <template #label><span title="供应商联系人">供应商联袭人</span></template>
                <a-input placeholder="请输入供应商联系人" v-model:value="queryParam.supplierName"></a-input>
              </a-form-item>
            </a-col>
            <a-col :lg="6">
              <a-form-item name="supplierPhone">
                <template #label><span title="供应商联系电话">供应商联</span></template>
                <a-input placeholder="请输入供应商联系电话" v-model:value="queryParam.supplierPhone"></a-input>
              </a-form-item>
            </a-col> -->
            <!-- <a-col :lg="6">
              <a-form-item name="buyTime">
                <template #label><span title="采购时间">采购时间</span></template>
                <a-date-picker showTime valueFormat="YYYY-MM-DD HH:mm:ss" placeholder="请选择采购时间" v-model:value="queryParam.buyTime" />
              </a-form-item>
            </a-col> -->
            <!-- <a-col :lg="6">
              <a-form-item name="paymentTime">
                <template #label><span title="付款时间">付款时间</span></template>
                <a-date-picker showTime valueFormat="YYYY-MM-DD HH:mm:ss" placeholder="请选择付款时间" v-model:value="queryParam.paymentTime" />
              </a-form-item>
            </a-col> -->
            <!-- <a-col :lg="6">
              <a-form-item name="payStatus">
                <template #label><span title="付款状态">付款状态</span></template> -->
                <!-- <a-input placeholder="请输入付款状态" v-model:value="queryParam.paymentStatus"></a-input> -->
                <!-- <JDictSelectTag type="select" v-model:value="queryParam.payStatus" dictCode="ev_pay_status" placeholder="请选择付款状态" />
              </a-form-item>
            </a-col> -->
            <!-- <a-col :lg="6">
              <a-form-item name="goodsStatus">
                <template #label><span title="采购状态">采购状态</span></template>
                <JDictSelectTag type="select" v-model:value="queryParam.goodsStatus" dictCode="ev_buy_status" placeholder="请选择采购状态" />
              </a-form-item>
            </a-col> -->
            <!-- <a-col :lg="6">
              <a-form-item name="reviewStatus">
                <template #label><span title="审核状态">到货状态</span></template>
                <a-input placeholder="请输入审核状态" v-model:value="queryParam.reviewStatus"></a-input>
              </a-form-item>
            </a-col> -->
            <!-- <a-col :lg="12">
            </a-col> -->
            <!-- <a-col :lg="6">
              <a-form-item name="buyProductIds">
                <template #label><span title="采购商品ids">采购商品</span></template>
                <j-select-multiple placeholder="请选择采购商品ids" dictCode="" v-model:value="queryParam.buyProductIds" />
              </a-form-item>
            </a-col> -->
          </template>
          <a-col :xl="6" :lg="6" :md="8" :sm="24">
            <span style="float: left; overflow: hidden" class="table-page-search-submitButtons">
              <a-col :lg="6">
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
    <BasicTable @register="registerTable" >
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
    <EvPurchaseOrderModal ref="registerModal" @success="handleSuccess"></EvPurchaseOrderModal>
  </div>
</template>

<script lang="ts" name="evPurchaseOrder-evPurchaseOrder" setup>
  import { ref, reactive } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { columns, superQuerySchema } from './EvPurchaseOrder.data';
  import { list, deleteOne, batchDelete, getImportUrl, getExportUrl } from './EvPurchaseOrder.api';
  import { downloadFile } from '/@/utils/common/renderUtils';
  import EvPurchaseOrderModal from './components/EvPurchaseOrderModal.vue'
  import { useUserStore } from '/@/store/modules/user';
  import JSelectMultiple from '/@/components/Form/src/jeecg/components/JSelectMultiple.vue';
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
      // title: '采购订单表',
      api: list,
      columns,
      canResize:false,
      showTableSetting: false,
      useSearchForm: false,
      showIndexColumn: true,
      actionColumn: {
        width: 150,
        fixed: 'right',
      },
      beforeFetch: (params) => {
        return Object.assign(params, queryParam);
      },
    },
    exportConfig: {
      name: "采购订单表",
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
