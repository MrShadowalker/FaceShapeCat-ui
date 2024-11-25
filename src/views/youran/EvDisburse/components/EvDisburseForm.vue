<template>
  <a-spin :spinning="confirmLoading">
    <a-form ref="formRef" class="antd-modal-form" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-row>
        <a-col :span="18">
          <a-row>
            <a-col :span="12">
              <a-form-item label="支出标题" v-bind="validateInfos.title" required="true">
                <a-input v-model:value="formData.title" placeholder="请输入支出标题" :disabled="disabled"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="支出时间" v-bind="validateInfos.disburseTime" required="true">
                <a-date-picker placeholder="请选择支出时间"  v-model:value="formData.disburseTime" showTime value-format="YYYY-MM-DD HH:mm:ss" style="width: 100%" :disabled="disabled"/>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="支出店铺" v-bind="validateInfos.departId" required="true">
                <!-- <a-input v-model:value="formData.departId" placeholder="请输入店铺" :disabled="disabled"></a-input> -->
                <JDictSelectTag type="select" v-model:value="formData.departId" dictCode="sys_depart,depart_name,id" @change="handleChangeDepart" placeholder="请选择填报店铺"  :disabled="disabled"/>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="填报人员" v-bind="validateInfos.user" required="true">
                <JDictSelectTag type="select" v-model:value="formData.user" dictCode="sys_user,realname,id,username!='admin'" placeholder="请选择填报人员" :disabled="disabled"/>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="支出类型" v-bind="validateInfos.type">
                <!-- <a-input v-model:value="formData.type" placeholder="请输入损耗类型" :disabled="disabled"></a-input> -->
                <JDictSelectTag type="radioButton" v-model:value="formData.type" dictCode="ev_expenditure_type" @change="handleChangeType" placeholder="请选择支出类型" :disabled="disabled" />
              </a-form-item>
            </a-col>
        </a-row>
      </a-col>
      <a-col :span="6">
        <a-form-item label="凭证" required="true">
            <j-image-upload v-model:value="formData.img" :disabled="disabled" :fileMax="1"></j-image-upload>
        </a-form-item>
      </a-col>
        <template v-if="formData.type=='1'">
          <a-divider orientation="left" style="height: 2px;border-color: #999999;"><span style="color: #999999;">损耗商品</span></a-divider>
          <a-col :span="12">
            <a-form-item label="损耗商品" v-bind="validateInfos.goodsId" required="true">
              <JDictSelectTag type="select" v-model:value="formData.goodsId" :dictCode="'ev_stocks,goods_name,goods_id,depart_id='+formData.departId?formData.departId:'\'\''" placeholder="请选择损耗商品" :disabled="disabled"/>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="损耗数量" v-bind="validateInfos.num" required="true">
              <a-input-number v-model:value="formData.num" :min="0" placeholder="请输入损耗数量" style="width: 100%" :disabled="disabled"/>
            </a-form-item>
          </a-col>
        </template>
        <template v-if="formData.type=='2'">
          <a-divider orientation="left" style="height: 2px;border-color: #999999;"><span style="color: #999999;">支出情况</span></a-divider>
          <a-col :span="12">
              <a-form-item label="支出金额" v-bind="validateInfos.money" required="true">
                <a-input-number v-model:value="formData.money" :min="0" :formatter="value => `${value}元`" placeholder="请输入支出金额" style="width: 100%" :disabled="disabled"/>
              </a-form-item>
            </a-col>
          </template>
        <!-- <a-col :span="24">
          <a-form-item label="备注" v-bind="validateInfos.remark">
            <a-input v-model:value="formData.remark" placeholder="请输入备注" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col> -->
        <a-col :span="24">
          <a-form-item label="支出原因" v-bind="validateInfos.reason" :labelCol="labelCol1"
          :wrapperCol="wrapperCol1" required="true">
            <!-- <a-input v-model:value="formData.reason" placeholder="请输入损耗原因" :disabled="disabled"></a-input> -->
            <a-textarea v-model:value="formData.reason" :disabled="disabled" :rows="4" />
          </a-form-item>
        </a-col>
        <!-- <a-col :span="24">
          <a-form-item label="损耗状态" v-bind="validateInfos.status">
            <a-input v-model:value="formData.status" placeholder="请输入损耗状态" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col> -->
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
  import JDictSelectTag from '/@/components/Form/src/jeecg/components/JDictSelectTag.vue';
  import { Form } from 'ant-design-vue';
  import JImageUpload from '/@/components/Form/src/jeecg/components/JImageUpload.vue';
  
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
    remark: '',   
    departId: '',   
    goodsId: '',   
    disburseTime: '',   
    type: '1',   
    num: 0,
    reason: '',   
    status: '',
    user: '',
    title: '',
    img: '',
    money: 0,
  });
  const { createMessage } = useMessage();
  const labelCol = ref<any>({ xs: { span: 24 }, sm: { span: 6 } });
  const wrapperCol = ref<any>({ xs: { span: 24 }, sm: { span: 16 } });
  
  const labelCol1 = ref<any>({xs: {span: 24}, sm: {span: 3}})
  const wrapperCol1 = ref<any>({xs: {span: 24}, sm: {span: 20}});
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

  function handleChangeType(){
    formData.money = 0
  }

  function handleChangeDepart(){
    formData.goodsId = ''
  }
  
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
    height: 410px !important;
    overflow-y: auto;
    padding: 14px;
  }
</style>
