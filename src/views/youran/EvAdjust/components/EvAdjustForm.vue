<template>
  <a-spin :spinning="confirmLoading">
    <a-form ref="formRef" class="antd-modal-form" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-row>
        <a-col :span="12">
          <a-form-item label="送货店铺" v-bind="validateInfos.fromId">
            <!-- <a-input v-model:value="formData.fromId" placeholder="请输入供货店铺" :disabled="disabled"></a-input> -->
            <JDictSelectTag type="select" v-model:value="formData.fromId" dictCode="sys_depart,depart_name,id,parent_id!=''" placeholder="请选择送货店铺"  :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="收货店铺" v-bind="validateInfos.toId">
            <!-- <a-input v-model:value="formData.toId" placeholder="请输入收货店铺" :disabled="disabled"></a-input> -->
            <JDictSelectTag type="select" v-model:value="formData.toId" dictCode="sys_depart,depart_name,id,parent_id!=''" placeholder="请选择送货店铺"  :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="送货人员" v-bind="validateInfos.fromUserId">
            <JDictSelectTag type="select" v-model:value="formData.fromUserId" dictCode="sys_user,realname,id,username!='admin'" placeholder="请选择送货人员" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="收货人员" v-bind="validateInfos.toUserId">
            <JDictSelectTag type="select" v-model:value="formData.toUserId" dictCode="sys_user,realname,id,username!='admin'" placeholder="请选择收货人员" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-divider orientation="left" style="height: 2px;border-color: #999999;"><span style="color: #999999;">调货信息</span></a-divider>
        <a-col :span="18">
          <a-row>
            <a-col :span="12">
              <a-form-item label="调货商品" v-bind="validateInfos.goodsId">
                <a-input v-model:value="formData.goodsId" placeholder="请输入商品" :disabled="disabled"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="调货数量" v-bind="validateInfos.num">
                <a-input-number v-model:value="formData.num" :min="0" placeholder="请输入数量" style="width: 100%" :disabled="disabled"/>
              </a-form-item>
            </a-col>
              <a-col :span="12">
                <a-form-item label="调货日期" v-bind="validateInfos.adjustTime">
                  <a-date-picker placeholder="请选择调货日期"  v-model:value="formData.adjustTime" showTime value-format="YYYY-MM-DD HH:mm:ss" style="width: 100%" :disabled="disabled"/>
                </a-form-item>
              </a-col>
            </a-row>
        </a-col>
        <a-col :span="6">
          <a-form-item label="凭证" required="true">
            <j-image-upload v-model:value="formData.img" :disabled="disabled" :fileMax="4"></j-image-upload>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="备注" v-bind="validateInfos.remark" :labelCol="labelCol1"
          :wrapperCol="wrapperCol1">
            <!-- <a-input v-model:value="formData.remark" placeholder="请输入备注" :disabled="disabled"></a-input> -->
            <a-textarea v-model:value="formData.remark" :disabled="disabled" :rows="4" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-spin>
</template>

<script lang="ts" setup>
  import { ref, reactive, defineExpose, nextTick, defineProps, computed, onMounted } from 'vue';
  import { defHttp } from '/@/utils/http/axios';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { getValueType } from '/@/utils';
  import { saveOrUpdate } from '../EvAdjust.api';
  import { Form } from 'ant-design-vue';
  import JImageUpload from '/@/components/Form/src/jeecg/components/JImageUpload.vue';
  import JDictSelectTag from '/@/components/Form/src/jeecg/components/JDictSelectTag.vue';
  
  const props = defineProps({
    formDisabled: { type: Boolean, default: false },
    formData: { type: Object, default: ()=>{} },
    formBpm: { type: Boolean, default: true }
  });
  const formRef = ref();
  const useForm = Form.useForm;
  const emit = defineEmits(['register', 'ok']);
  const formData = reactive<Record<string, any>>({
    id: '',
    delFlag: undefined,
    remark: '',   
    fromId: '',   
    toId: '',   
    goodsId: '',   
    num: 0,
    adjustTime: '',   
    fromUserId: '',   
    toUserId: '',   
    img: '', 
  });
  const { createMessage } = useMessage();
  const labelCol = ref<any>({ xs: { span: 24 }, sm: { span: 5 } });
  const wrapperCol = ref<any>({ xs: { span: 24 }, sm: { span: 16 } });
  const labelCol1 = ref<any>({xs: {span: 24}, sm: {span: 1}})
  const wrapperCol1 = ref<any>({xs: {span: 24}, sm: {span: 22}});
  const confirmLoading = ref<boolean>(false);
  //表单验证
  const validatorRules = {
  };
  const { resetFields, validate, validateInfos } = useForm(formData, validatorRules, { immediate: true });

  // 表单禁用
  const disabled = computed(()=>{
    if(props.formBpm === true){
      if(props.formData.disabled === false){
        return false;
      }else{
        return true;
      }
    }
    return props.formDisabled;
  });

  
  /**
   * 新增
   */
  function add() {
    edit({});
  }

  /**
   * 编辑
   */
  function edit(record) {
    nextTick(() => {
      resetFields();
      //赋值
      Object.assign(formData, record);
    });
  }

  /**
   * 提交数据
   */
  async function submitForm() {
    // 触发表单验证
    await validate();
    confirmLoading.value = true;
    const isUpdate = ref<boolean>(false);
    //时间格式化
    let model = formData;
    if (model.id) {
      isUpdate.value = true;
    }
    //循环数据
    for (let data in model) {
      //如果该数据是数组并且是字符串类型
      if (model[data] instanceof Array) {
        let valueType = getValueType(formRef.value.getProps, data);
        //如果是字符串类型的需要变成以逗号分割的字符串
        if (valueType === 'string') {
          model[data] = model[data].join(',');
        }
      }
    }
    await saveOrUpdate(model, isUpdate.value)
      .then((res) => {
        if (res.success) {
          createMessage.success(res.message);
          emit('ok');
        } else {
          createMessage.warning(res.message);
        }
      })
      .finally(() => {
        confirmLoading.value = false;
      });
  }


  defineExpose({
    add,
    edit,
    submitForm,
  });
</script>

<style lang="less" scoped>
  .antd-modal-form {
    height: 460px !important;
    overflow-y: auto;
    padding: 14px;
  }
</style>
