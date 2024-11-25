<template>
  <a-card :bordered="false" style="height: 100%">
    <!-- <div class="j-table-operator" style="width: 100%"> -->
      <!-- <a-button type="primary" preIcon="ant-design:plus-outlined" @click="onAddDepart">新增</a-button> -->
      <!-- <a-button type="primary" preIcon="ant-design:plus-outlined" @click="onAddChildDepart()">添加下级</a-button> -->
      <!-- <a-upload name="file" :showUploadList="false" :customRequest="onImportXls">
        <a-button type="primary" preIcon="ant-design:import-outlined">导入</a-button>
      </a-upload>
      <a-button type="primary" preIcon="ant-design:export-outlined" @click="onExportXls">导出</a-button>
      <a-button type="primary" preIcon="ant-design:sync-outlined">同步企微?</a-button>
      <a-button type="primary" preIcon="ant-design:sync-outlined">同步钉钉?</a-button> -->
      <!-- <template v-if="checkedKeys.length > 0">
        <a-dropdown>
          <template #overlay>
            <a-menu>
              <a-menu-item key="1" @click="onDeleteBatch">
                <icon icon="ant-design:delete-outlined" />
                <span>删除</span>
              </a-menu-item>
            </a-menu>
          </template>
          <a-button>
            <span>批量操作 </span>
            <icon icon="akar-icons:chevron-down" />
          </a-button>
        </a-dropdown>
      </template> -->
    <!-- </div> -->
    <!-- <a-alert type="info" show-icon class="alert" style="margin-bottom: 8px">
      <template #message>
        <template v-if="checkedKeys.length > 0">
          <span>已选中 {{ checkedKeys.length }} 条记录</span>
          <a-divider type="vertical" />
          <a @click="checkedKeys = []">清空</a>
        </template>
        <template v-else>
          <span>未选中任何数据</span>
        </template>
      </template>
    </a-alert> -->
    <a-spin :spinning="loading">
      <!-- <a-input-search placeholder="按仓库名称搜索…" style="margin-bottom: 10px" @search="onSearch" /> -->
      <!--组织机构树-->
      <template v-if="treeData.length > 0">
        <a-tree
          v-if="!treeReloading"
          :clickRowToExpand="false"
          :treeData="treeData"
          :load-data="loadChildrenTreeData"
          v-model:expandedKeys="expandedKeys"
          @check="onCheck"
          @select="onSelect"
        >
          <!-- checkable -->
          <!-- :selectedKeys="selectedKeys" -->
          <!-- :checkStrictly="checkStrictly" -->
          <!-- :checkedKeys="checkedKeys" -->
          <template #title="{ key: treeKey, title, dataRef }">
            <a-dropdown :trigger="['contextmenu']">
              <Popconfirm
                :open="visibleTreeKey === treeKey"
                title="确定要删除吗？"
                ok-text="确定"
                cancel-text="取消"
                placement="rightTop"
                @confirm="onDelete(dataRef)"
                @openChange="onVisibleChange"
              >
                <span>{{ title }}</span>
              </Popconfirm>

              <template #overlay>
                <a-menu @click="" v-if="dataRef.orgType === '1' || dataRef.orgType === '2'">
                  <a-menu-item v-if="dataRef.orgType === '1'" key="1" @click="onAddChildDepart(dataRef)">添加店铺</a-menu-item>
                  <a-menu-item v-if="dataRef.orgType === '2'"  key="2" @click="onEditDepart(dataRef)">
                    <span style="color: black">编辑</span>
                  </a-menu-item>
                  <a-menu-item v-if="dataRef.orgType === '2'"  key="3" @click="visibleTreeKey = treeKey">
                    <span style="color: red">删除</span>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </template>
        </a-tree>
      </template>
      <a-empty v-else description="暂无数据" />
    </a-spin>
    <DepartFormModal :rootTreeData="treeData" @register="registerModal" @success="loadRootTreeData" />
  </a-card>
</template>

<script lang="ts" setup>
  import { inject, nextTick, ref, unref } from 'vue';
  import { useModal } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useMethods } from '/@/hooks/system/useMethods';
  import { Api, deleteBatchDepart, queryDepartTreeSync } from '../depart.api';
  import { searchByKeywords } from '/@/views/system/departUser/depart.user.api';
  import DepartFormModal from '/@/views/system/depart/components/DepartFormModal.vue';
  import { Popconfirm } from 'ant-design-vue';

  const prefixCls = inject('prefixCls');
  const emit = defineEmits(['select', 'rootTreeData']);
  const { createMessage } = useMessage();
  const { handleImportXls, handleExportXls } = useMethods();

  const loading = ref<boolean>(false);
  // 仓库树列表数据
  const treeData = ref<any[]>([]);
  // 当前选中的项
  const checkedKeys = ref<any[]>([]);
  // 当前展开的项
  const expandedKeys = ref<any[]>([]);
  // 当前选中的项
  const selectedKeys = ref<any[]>([]);
  // 树组件重新加载
  const treeReloading = ref<boolean>(false);
  // 树父子是否关联
  const checkStrictly = ref<boolean>(true);
  // 当前选中的仓库
  const currentDepart = ref<any>(null);
  // 控制确认删除提示框是否显示
  const visibleTreeKey = ref<any>(null);
  // 搜索关键字
  const searchKeyword = ref('');

  // 注册 modal
  const [registerModal, { openModal }] = useModal();

  // 加载顶级仓库信息
  async function loadRootTreeData() {
    try {
      loading.value = true;
      treeData.value = [];
      const result = await queryDepartTreeSync();
      if (Array.isArray(result)) {
        treeData.value = result;
      }
      if (expandedKeys.value.length === 0) {
        autoExpandParentNode();
      } else {
        if (selectedKeys.value.length === 0) {
          let item = treeData.value[0];
          if (item) {
            // 默认选中第一个
            setSelectedKey(item.id, item);
          }
        } else {
          emit('select', currentDepart.value);
        }
      }
      emit('rootTreeData', treeData.value);
    } finally {
      loading.value = false;
    }
  }

  loadRootTreeData();

  // 加载子级仓库信息
  async function loadChildrenTreeData(treeNode) {
    try {
      const result = await queryDepartTreeSync({
        pid: treeNode.dataRef.id,
      });
      if (result.length == 0) {
        treeNode.dataRef.isLeaf = true;
      } else {
        treeNode.dataRef.children = result;
        if (expandedKeys.value.length > 0) {
          // 判断获取的子级是否有当前展开的项
          let subKeys: any[] = [];
          for (let key of expandedKeys.value) {
            if (result.findIndex((item) => item.id === key) !== -1) {
              subKeys.push(key);
            }
          }
          if (subKeys.length > 0) {
            expandedKeys.value = [...expandedKeys.value];
          }
        }
      }
      treeData.value = [...treeData.value];
      emit('rootTreeData', treeData.value);
    } catch (e) {
      console.error(e);
    }
    return Promise.resolve();
  }

  // 自动展开父节点，只展开一级
  function autoExpandParentNode() {
    let item = treeData.value[0];
    if (item) {
      if (!item.isLeaf) {
        expandedKeys.value = [item.key];
      }
      // 默认选中第一个
      setSelectedKey(item.id, item);
      reloadTree();
    } else {
      emit('select', null);
    }
  }

  // 重新加载树组件，防止无法默认展开数据
  async function reloadTree() {
    await nextTick();
    treeReloading.value = true;
    await nextTick();
    treeReloading.value = false;
  }

  /**
   * 设置当前选中的行
   */
  function setSelectedKey(key: string, data?: object) {
    selectedKeys.value = [key];
    if (data) {
      currentDepart.value = data;
      emit('select', data);
    }
  }

  // 添加一级仓库
  function onAddDepart() {
    openModal(true, { isUpdate: false, isChild: false });
  }
  function onEditDepart(data = currentDepart.value) {
    if (data == null) {
      createMessage.warning('请先选择一个仓库');
      return;
    }
    // console.log(data,'data=======================');
    // const record = { parentId: data.id };
    const record = data;
    openModal(true, { isUpdate: true, isChild: true, record });
  }

  // 添加子级仓库
  function onAddChildDepart(data = currentDepart.value) {
    
    if (data == null) {
      createMessage.warning('请先选择一个仓库');
      return;
    }
    const record = { parentId: data.id };
    openModal(true, { isUpdate: false, record });
  }

  // 搜索事件
  async function onSearch(value: string) {
    if (value) {
      try {
        loading.value = true;
        treeData.value = [];
        let result = await searchByKeywords({ keyWord: value });
        if (Array.isArray(result)) {
          treeData.value = result;
        }
        autoExpandParentNode();
      } finally {
        loading.value = false;
      }
    } else {
      loadRootTreeData();
    }
    searchKeyword.value = value;
  }

  // 树复选框选择事件
  function onCheck(e) {
    if (Array.isArray(e)) {
      checkedKeys.value = e;
    } else {
      checkedKeys.value = e.checked;
    }
  }

  // 树选择事件
  function onSelect(selKeys, event) {
    console.log('select: ', selKeys, event);
    if (selKeys.length > 0 && selectedKeys.value[0] !== selKeys[0]) {
      setSelectedKey(selKeys[0], event.selectedNodes[0]);
      console.log(123);
      
    } else {
      // 这样可以防止用户取消选择
      setSelectedKey(selectedKeys.value[0]);
      console.log(234);
    }
  }

  /**
   * 根据 ids 删除仓库
   * @param idListRef array
   * @param confirm 是否显示确认提示框
   */
  async function doDeleteDepart(idListRef, confirm = true) {
    const idList = unref(idListRef);
    if (idList.length > 0) {
      try {
        loading.value = true;
        await deleteBatchDepart({ ids: idList.join(',') }, confirm);
        await loadRootTreeData();
      } finally {
        loading.value = false;
      }
    }
  }

  // 删除单个仓库
  async function onDelete(data) {
    if (data) {
      onVisibleChange(false);
      doDeleteDepart([data.id], false);
    }
  }

  // 批量删除仓库
  async function onDeleteBatch() {
    try {
      await doDeleteDepart(checkedKeys);
      checkedKeys.value = [];
    } finally {
    }
  }

  function onVisibleChange(visible) {
    if (!visible) {
      visibleTreeKey.value = null;
    }
  }

  function onImportXls(d) {
    handleImportXls(d, Api.importExcelUrl, () => {
      loadRootTreeData();
    });
  }

  function onExportXls() {
    handleExportXls('仓库信息', Api.exportXlsUrl);
  }

  defineExpose({
    loadRootTreeData,
  });
</script>


<style lang="less" scoped>
/deep/ .ant-tree-treenode {
  width: 100%;
  .ant-tree-node-content-wrapper-normal {
      width: 80%;
      .ant-dropdown-trigger {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
      }
  }
}
</style>