<template>
  <a-row :class="['p-4', `${prefixCls}--box`]" type="flex" :gutter="10">
    <a-col :xl="6" :lg="24" :md="24" style="margin-bottom: 10px">
      <DepartLeftTree ref="leftTree" @select="onTreeSelect" @rootTreeData="onRootTreeData" />
    </a-col>
    <!-- <a-col :xl="12" :lg="24" :md="24" style="margin-bottom: 10px">
      <div style="height: 100%;" :class="[`${prefixCls}`]">
            <div style="padding: 20px">
              <DepartFormTab :data="departData" :rootTreeData="rootTreeData" @success="onSuccess" />
            </div>
        <div v-show="departData == null" style="padding-top: 40px">
          <a-empty description="尚未选择仓库" />
        </div>
      </div>
    </a-col> -->
    <a-col :xl="18" :lg="24" :md="24" style="margin-bottom: 10px">
      <a-card :bordered="false" :title="departData.title">
        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane key="1" tab="库存">
            <EvStocksList ref='stocksList'/>
          </a-tab-pane>
          <a-tab-pane key="2" tab="支出" >
            <EvDisburseList  ref="disburseList"/>
          </a-tab-pane>
          <a-tab-pane key="3" tab="调货">
            <!-- <a-table :dataSource="dataSource" :columns="columns" /> -->
            <EvAdjustList ref='adjustList' />
          </a-tab-pane>
          <template #rightExtra>
            <a-button v-if="activeKey == '2'"  type="primary" @click="addLoss">新增损耗</a-button>
            <a-button v-if="activeKey == '3'"  type="primary" @click="addTransferGoods">新增调货</a-button>
          </template>
        </a-tabs>
      </a-card>
    </a-col>
  </a-row>

  <!-- <EvSpuModal ref="registerModal" @success="handleSuccess"></EvSpuModal> -->

</template>

<script lang="ts" setup name="system-depart">
  import { provide, ref } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import DepartLeftTree from './components/DepartLeftTree.vue';
  import DepartFormTab from './components/DepartFormTab.vue';
  import DepartRuleTab from './components/DepartRuleTab.vue';
  import EvSpuModal from './components/EvSpuModal.vue'


  import EvDisburseList from './components/disburseList/EvDisburseList.vue'
  import EvStocksList from './components/EvStocks/EvStocksList.vue'
  import EvAdjustList from './components/EvAdjustList/EvAdjustList.vue'

  const { prefixCls } = useDesign('depart-manage');
  provide('prefixCls', prefixCls);

  // 给子组件定义一个ref变量
  const leftTree = ref();

  // 当前选中的仓库信息
  const departData = ref({});
  let  activeKey = ref('1');
  const registerModal = ref();
  const stocksList = ref();
  const disburseList = ref();
  const adjustList = ref();

  const rootTreeData = ref<any[]>([]);
  const columns = [
    {
      name: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
    },
    {
      title: 'Action',
      key: 'action',
    },
  ];

  const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ]

  // 左侧树选择后触发
  function onTreeSelect(data) {
    console.log('onTreeSelect: ', data);
    departData.value = data;
  }

  // 左侧树rootTreeData触发
  function onRootTreeData(data) {
    rootTreeData.value = data;
  }

  function onSuccess() {
    leftTree.value.loadRootTreeData();
  }

  // 调货

  function  addTransferGoods() {
    // registerModal.value.disableSubmit = false;
    // registerModal.value.add('2');
    adjustList.value.handleAdd();
  }
  // 损耗

  function addLoss() {
    console.log(disburseList.value,'disburseList.value');
    
    // disburseList.value.disableSubmit = false;
    disburseList.value.handleAdd();
    // registerModal.value.add('1');
  }
</script>

<style lang="less">
  @import './index.less';
</style>
