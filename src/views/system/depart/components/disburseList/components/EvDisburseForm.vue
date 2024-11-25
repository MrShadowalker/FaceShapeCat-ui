<template>
  <a-spin :spinning="confirmLoading">
    <a-form ref="formRef" class="antd-modal-form" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-row>
        <a-col :span="24">
          <a-form-item label="店铺" v-bind="validateInfos.departId">
            <!-- <a-input v-model:value="formData.goodsId" placeholder="请输入商品" :disabled="disabled"></a-input> -->
            <JDictSelectTag type="select" v-model:value="formData.departId" dictCode="sys_depart,depart_name,id,parent_id!=''" placeholder="请选择店铺" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="商品" v-bind="validateInfos.goodsId">
            <!-- <a-input v-model:value="formData.goodsId" placeholder="请输入商品" ></a-input> -->
            <JDictSelectTag type="select" v-model:value="formData.goodsId" dictCode="ev_goods,name,id,del_flag='0'" placeholder="请选择商品"  />

          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="支出时间" v-bind="validateInfos.disburseTime">
		        <a-date-picker placeholder="请选择支出时间"  v-model:value="formData.disburseTime" showTime value-format="YYYY-MM-DD HH:mm:ss" style="width: 100%" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="支出类型" v-bind="validateInfos.type">
            <a-input v-model:value="formData.type" placeholder="请输入支出类型" ></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="损耗数量" v-bind="validateInfos.num">
            <!-- <a-input v-model:value="formData.num" placeholder="请输入损耗数量" ></a-input> -->
                  <a-input-number id="inputNumber" v-model:value="formData.num" :min="0" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="损耗原因" v-bind="validateInfos.reason">
            <a-input v-model:value="formData.reason" placeholder="请输入损耗原因" ></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="损耗状态" v-bind="validateInfos.status">
            <a-input v-model:value="formData.status" placeholder="请输入损耗状态" ></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="备注" v-bind="validateInfos.remark">
            <!-- <a-input v-model:value="formData.remark" placeholder="请输入备注" ></a-input> -->
            <a-textarea v-model:value="formData.remark" :rows="4" />

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
  import { saveOrUpdate } from '../EvDisburse.api';
  import { Form } from 'ant-design-vue';
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
    // delFlag: '',   
    remark: '',   
    goodsId: '',   
    disburseTime: '',   
    type: '',   
    num: '',   
    reason: '',   
    status: '',
    departId:"",
  });
  const { createMessage } = useMessage();
  const labelCol = ref<any>({ xs: { span: 24 }, sm: { span: 5 } });
  const wrapperCol = ref<any>({ xs: { span: 24 }, sm: { span: 16 } });
  const confirmLoading = ref<boolean>(false);
  //表单验证
  const validatorRules = {
     departId: [{required: true, message: '请选择店铺!'}],
     goodsId: [{required: true, message: '请选择商品!'}],
     disburseTime: [{required: true, message: '请选择时间!'}],
     num: [{required: true, message: '请选择数量!'}],
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
    height: 500px !important;
    overflow-y: auto;
    padding: 14px;
  }
</style>
