<template>
  <div class="p-2">
    <!--查询区域-->
    <div class="jeecg-basic-table-form-container">
      <a-form ref="formRef" @keyup.enter.native="searchQuery" :model="queryParam" :label-col="labelCol" :wrapper-col="wrapperCol">
         <a-row :gutter="24">
          <!-- <a-col :lg="6">
            <a-form-item name="remark">
              <template #label><span title="备注">备注</span></template>
              <a-input placeholder="请输入备注" v-model:value="queryParam.remark"></a-input>
            </a-form-item>
          </a-col> -->
          <a-col :lg="6">
            <a-form-item name="name">
              <template #label><span title="商品名称">商品名称</span></template>
              <JInput placeholder="请输入商品名称" v-model:value="queryParam.name"></JInput>
            </a-form-item>
          </a-col>
          
          <a-col :lg="6">
              <a-form-item name="code">
                <template #label><span title="商品编码">商品编码</span></template>
                <JInput placeholder="请输入商品编码" v-model:value="queryParam.code"></JInput>
              </a-form-item>
            </a-col>
          
          <a-col :lg="6">
              <a-form-item name="status">
                <template #label><span title="商品状态">商品状态</span></template>
                <JDictSelectTag type="select" v-model:value="queryParam.status" dictCode="ev_goods_status" placeholder="请选择商品状态" />
              </a-form-item>
            </a-col>
            <!-- <a-col :lg="6">
              <a-form-item name="brandId">
                <template #label><span title="商品品牌">商品品牌</span></template>
                <j-search-select placeholder="请选择商品品牌" v-model:value="queryParam.brandId" dict="ev_brand,name,id" />
              </a-form-item>
            </a-col> -->
          <template v-if="toggleSearchStatus">
            <a-col :lg="6">
              <a-form-item name="code">
                <template #label><span title="商品种类">商品种类</span></template>
                <JInput placeholder="请输入商品种类" v-model:value="queryParam.type"></JInput>
              </a-form-item>
            </a-col>
            <!-- <a-col :lg="5">
              <a-form-item name="code">
                <template #label><span title="计量单位">计量单位</span></template>
                <JInput placeholder="请输入计量单位" v-model:value="queryParam.unit"></JInput>
              </a-form-item>
            </a-col> -->
            <!-- <a-col :lg="6">
              <a-form-item name="code">
                <template #label><span title="经销商">经销商</span></template>
                <JInput placeholder="请输入经销商" v-model:value="queryParam.supplier"></JInput>
              </a-form-item>
            </a-col> -->
            <!-- <a-col :lg="6">
              <a-form-item name="supplierIds">
                <template #label><span title="默认供应商">默认供应</span></template>
                <j-search-select placeholder="请选择默认供应商" v-model:value="queryParam.supplierIds" dict=",," />
              </a-form-item>
            </a-col> -->
            <!-- <a-col :lg="6">
              <a-form-item name="description">
                <template #label><span title="简述">简述</span></template>
                <a-input placeholder="请输入简述" v-model:value="queryParam.description"></a-input>
              </a-form-item>
            </a-col> -->
            <!-- <a-col :lg="6">
              <a-form-item name="categoryIds">
                <template #label><span title="商品分类">商品分类</span></template>
                <j-search-select placeholder="请选择商品品牌" v-model:value="queryParam.categoryIds" dict="ev_category,name,id" />
              </a-form-item>
            </a-col> -->
          </template>
          <a-col :xl="4" :lg="4" :md="8" :sm="24">
            <span style="float: left; overflow: hidden" class="table-page-search-submitButtons">
              <a-col :lg="5">
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
      <!-- 可展开的 -->
      <!-- <template #expandedRowRender>
          <a-table :columns="innerColumns" :data-source="innerData" :pagination="false">
            <template #bodyCell="{ column }">
              <template v-if="column.key === 'state'">
                <span>
              <a-badge status="success" />
              Finished
            </span>
          </template>
          <template v-else-if="column.key === 'operation'">
            <span class="table-operation">
              <a>Pause</a>
              <a>Stop</a>
              <a-dropdown>
                <template #overlay>
                  <a-menu>
                    <a-menu-item>Action 1</a-menu-item>
                    <a-menu-item>Action 2</a-menu-item>
                  </a-menu>
                </template>
                <a>
                  More
                  <down-outlined />
                </a>
              </a-dropdown>
            </span>
          </template>
            </template>
          </a-table>
      </template> -->
      <!--插槽:table标题-->
      <template #tableTitle>
        <!-- <a-button type="primary" @click="handleAdd" preIcon="ant-design:plus-outlined"> 新增</a-button> -->
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

        </a-dropdown>
        <!-- 高级查询 -->
        <!-- <super-query :config="superQueryConfig" @search="handleSuperQuery" /> -->
      </template>
      <!--操作栏-->
      <!-- <template #action="{ record }">
        <TableAction :actions="getTableAction(record)" />
      </template> -->
      <template v-slot:bodyCell="{ column, record, index, text }">
        <template v-if="column.dataIndex==='description'">
          <!--富文本件字段回显插槽-->
          <div v-html="text"></div>
        </template>
        <template v-if="column.dataIndex==='status'">
          <JSwitch v-model:value="record.status" :options="['0', '1']"></JSwitch>
        </template>
      </template>
    </BasicTable>
    <!-- 表单区域 -->
    <EvSpuModal ref="registerModal" @success="handleSuccess"></EvSpuModal>
  </div>
</template>

<script lang="ts" name="evSpu-evSpu" setup>
  import { ref, reactive } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { columns, superQuerySchema } from './EvSpu.data';
  import { list, deleteOne, batchDelete, getImportUrl, getExportUrl } from './EvSpu.api';
  import { downloadFile } from '/@/utils/common/renderUtils';
  import EvSpuModal from './components/EvSpuModal.vue'
  import { useUserStore } from '/@/store/modules/user';
  import JSearchSelect from '/@/components/Form/src/jeecg/components/JSearchSelect.vue';
  import JSwitch from '/@/components/Form/src/jeecg/components/JSwitch.vue';
  import JInput from '/@/components/Form/src/jeecg/components/JInput.vue';
  import JDictSelectTag from '/@/components/Form/src/jeecg/components/JDictSelectTag.vue';

  const formRef = ref();
  const queryParam = reactive<any>({});
  const toggleSearchStatus = ref<boolean>(false);
  const registerModal = ref();
  const userStore = useUserStore();
  //注册table数据
  const { prefixCls, tableContext, onExportXls, onImportXls } = useListPage({
    tableProps: {
      title: 'SPU标准化产品单元表',
      api: list,
      columns,
      canResize:false,
      useSearchForm: false,
      showTableSetting: false,
      showActionColumn:false,
      // actionColumn: {
      //   width: 120,
      //   fixed: 'right',
      // },
      beforeFetch: (params) => {
        return Object.assign(params, queryParam);
      },
    },
    exportConfig: {
      name: "SPU标准化产品单元表",
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
