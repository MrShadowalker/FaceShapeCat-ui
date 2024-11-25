<template>
  <a-modal :title="title" :width="width" :visible="visible" @ok="handleOk" :okButtonProps="{ class: { 'jee-hidden': disableSubmit } }" @cancel="handleCancel" cancelText="关闭">
    <EvDisburseForm v-if="pageFlag == '1'" ref="registerForm1" @ok="submitCallback" :formDisabled="disableSubmit" :formBpm="false"></EvDisburseForm>
    <EvAdjustForm v-if="pageFlag == '2'" ref="registerForm2" @ok="submitCallback" :formDisabled="disableSubmit" :formBpm="false"></EvAdjustForm>
  </a-modal>
</template>

<script lang="ts" setup>
  import { ref, nextTick, defineExpose } from 'vue';
  import EvAdjustForm from './EvAdjustForm.vue'
  import EvDisburseForm from './EvDisburseForm.vue'
  
  const title = ref<string>('');
  const width = ref<number>(800);
  const visible = ref<boolean>(false);
  const disableSubmit = ref<boolean>(false);
  const registerForm1 = ref(); // 损耗
  const registerForm2 = ref(); // 调货
  const emit = defineEmits(['register', 'success']);

  let pageFlag = ref('')

  /**
   * 新增
   */
  function add(val) {
    pageFlag.value = val 
    title.value = '新增';
    visible.value = true;
    nextTick(() => {
      if (pageFlag.value == '1') {
        registerForm1.value.add();
      } else {
        registerForm2.value.add();
      }
    });
  }
  
  /**
   * 编辑
   * @param record
   */
  function edit(record) {
    title.value = disableSubmit.value ? '详情' : '编辑';
    visible.value = true;
    nextTick(() => {
      // registerForm.value.edit(record);
    });
  }
  
  /**
   * 确定按钮点击事件
   */
  function handleOk() {
    // registerForm.value.submitForm();
  }

  /**
   * form保存回调事件
   */
  function submitCallback() {
    handleCancel();
    emit('success');
  }

  /**
   * 取消按钮回调事件
   */
  function handleCancel() {
    visible.value = false;
  }

  defineExpose({
    add,
    edit,
    disableSubmit,
  });
</script>

<style>
  /**隐藏样式-modal确定按钮 */
  .jee-hidden {
    display: none !important;
  }
</style>
