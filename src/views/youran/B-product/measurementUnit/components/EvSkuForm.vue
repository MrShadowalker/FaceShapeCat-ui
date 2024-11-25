<template>
  <a-spin :spinning="confirmLoading">
    <a-form ref="formRef" class="antd-modal-form" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-row>
        <!-- <a-col :span="12">
          <a-form-item label="备注" v-bind="validateInfos.remark">
            <a-input v-model:value="formData.remark" placeholder="请输入备注" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col> -->
        <a-col :span="12">
          <a-form-item label="商品" v-bind="validateInfos.spuId">
	          <j-search-select v-model:value="formData.spuId" dict="ev_spu,name,id,del_flag='0'" :disabled="disabled" @change="handleChangeSpu"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="规格名称" v-bind="validateInfos.name">
            <a-input v-model:value="formData.name" placeholder="请输入规格名称" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <!-- <a-col :span="12">
          <a-form-item label="仓库id" v-bind="validateInfos.warehouseId">
	          <j-select-multiple type="list_multi" v-model:value="formData.warehouseId" dictCode="" placeholder="请选择仓库id" :disabled="disabled" :triggerChange="false"/>
          </a-form-item>
        </a-col> -->
        <a-col :span="12">
          <a-form-item label="计量单位" v-bind="validateInfos.skuUnit">
            <a-input v-model:value="formData.skuUnit" placeholder="请输入计量单位" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="建议零售价" v-bind="validateInfos.retailPrice">
	          <a-input-number v-model:value="formData.retailPrice" placeholder="请输入建议零售价" style="width: 100%" :disabled="disabled" prefix="￥" suffix="元"/>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <div style="margin-left: 30px;">
            <span>规格参数:</span>
          </div>
        </a-col>

        <a-col :span="24" v-for="(item,index) in formData.evSpecValueList" :key="index">
          <!-- {{ item.name }} -->
          <!-- formData.evSpecVoList -->
          <a-form-item :label="item.name" v-bind="validateInfos.evSpecValueList" :labelCol="labelCol1" :wrapperCol="wrapperCol1">
            <a-input v-model:value="item.specValue" placeholder="请输入参数" :disabled="disabled"></a-input>
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
  import JSelectMultiple from '/@/components/Form/src/jeecg/components/JSelectMultiple.vue';
  import JSearchSelect from '/@/components/Form/src/jeecg/components/JSearchSelect.vue';
  import { getValueType } from '/@/utils';
  import { saveOrUpdate,specList } from '../EvSku.api';
  import { Form } from 'ant-design-vue';
import { idText } from 'typescript';
  
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
    spuId: '',   
    warehouseId: '',   
    specValueIds: '',   
    skuUnit: '',   
    retailPrice: undefined,
    evSpecValueList: []
  });
  const { createMessage } = useMessage();
  const labelCol = ref<any>({ xs: { span: 24 }, sm: { span: 6 } });
  const labelCol1 = ref<any>({ xs: { span: 24 }, sm: { span: 3 } });
  const wrapperCol = ref<any>({ xs: { span: 24 }, sm: { span: 16 } });
  const wrapperCol1 = ref<any>({ xs: { span: 24 }, sm: { span: 20 } });
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
      // record.spuId = "1789513422933565441"
      //赋值
      Object.assign(formData, record);
    });
  }
  async function getSpecList(spuId){
    await specList({spuId:spuId,pageSize:9999}).then((res)=>{
      // for (let item of res) {
      //   if(item.evSpecValue==null){item.evSpecValue={specValue:undefined}}
      // }
      let listData = res.records
      // console.log(res.records,"devaolsl")
      formData.evSpecValueList=[]
          if(Array.isArray(listData)){
            for(let i = 0; i < listData.length; i++){
              formData.evSpecValueList.push({
                name: listData[i].name,
                specValue: '',
                specId: listData[i].id
              })
            }
          }
        if (res.success) {
          // createMessage.success(res.message);
        } else {
          // createMessage.warning(res.message);
        }

    })
    
  }
  function handleChangeSpu(spuId){
    getSpecList(spuId)
  }

  /**
   * 提交数据
   */
  async function submitForm() {
console.log(formData, 'devil')
    // return
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
    // for (let data in model) {
    //   //如果该数据是数组并且是字符串类型
    //   if (model[data] instanceof Array) {
    //     let valueType = getValueType(formRef.value.getProps, data);
    //     //如果是字符串类型的需要变成以逗号分割的字符串
    //     if (valueType === 'string') {
    //       model[data] = model[data].join(',');
    //     }
    //   }
    // }
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
