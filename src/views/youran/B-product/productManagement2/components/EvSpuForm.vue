<template>
  <a-spin :spinning="confirmLoading">
    <a-form ref="formRef" class="antd-modal-form" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-row>

        <a-col :span="12">
          <a-form-item label="经销商">
            <a-input v-model:value="formData.supplier" placeholder="请输入经销商" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="联系人">
            <a-input v-model:value="formData.contact" placeholder="请输入联系人" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="联系电话">
            <a-input v-model:value="formData.phone" placeholder="请输入联系电话" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="联系地址">
            <a-input v-model:value="formData.address" placeholder="请输入联系地址" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12" >
          <a-form-item label="零售价" v-bind="validateInfos.price">
            <a-input v-model:value="formData.price" placeholder="请输入零售价" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="进价" >
            <a-input v-model:value="formData.costPrice" placeholder="请输入进价" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>

        <a-divider />

        
        <a-col :span="12">
          <a-form-item label="商品名称" v-bind="validateInfos.name">
            <a-input v-model:value="formData.name" placeholder="请输入商品名称" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="商品编码" v-bind="validateInfos.code">
            <a-input v-model:value="formData.code" placeholder="请输入商品编码" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
         <a-col :span="12">
          <a-form-item label="商品种类" v-bind="validateInfos.type">
            <a-input v-model:value="formData.type" placeholder="请输入商品种类" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="计量单位" v-bind="validateInfos.unit">
            <a-input v-model:value="formData.unit" placeholder="请输入计量单位" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="规格型号" v-bind="validateInfos.spec">
            <a-input v-model:value="formData.spec" placeholder="请输入规格型号" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>


        <!-- <a-col :span="12">
          <a-form-item label="商品分类" v-bind="validateInfos.categoryIds">
            <JTreeSelect
                placeholder="请选择商品分类"
                v-model:value="formData.categoryIds"
                dict="ev_category,name,id"
                pidValue="0"
                load-triggle-change
                :disabled="disabled"
            >
            </JTreeSelect>
          </a-form-item>
        </a-col> -->

        <!-- <a-col :span="12">
          <a-form-item label="默认供应商" v-bind="validateInfos.supplierIds">
	          <j-search-select v-model:value="formData.supplierIds" dict="" :disabled="disabled" />
          </a-form-item>
        </a-col> -->
        <!-- <a-col :span="24">
          <a-form-item label="添加规格" :labelCol="labelCol1" :wrapperCol="wrapperCol1">
            <a-table :pagination="false" :data-source="formData.specificationNames">
              <a-table-column title="规格名称">
                <template #default="{ record }">
                  <a-input v-model:value="record.name" :disabled="disabled"></a-input>
                </template>
              </a-table-column>
              <a-table-column align="center">
                <template #title>
                  <a-space style="cursor: pointer;" @click="insertSpecificationName"><PlusOutlined /></a-space>
                </template>
                <template #default="{ index }">
                  <span>
                    <a-button @click="deleteSpecificationName(index)">删除</a-button>
                  </span>
                </template>
              </a-table-column>
            </a-table>
          </a-form-item>
        </a-col> -->
        <a-col :span="24">
          <a-form-item label="商品图片"  :labelCol="labelCol1" :wrapperCol="wrapperCol1">
            <j-image-upload v-model:value="formData.img" :disabled="disabled"></j-image-upload>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="商品描述" :labelCol="labelCol1"
                       :wrapperCol="wrapperCol1">
            <!-- <j-editor v-model:value="formData.description" :disabled="disabled"/> -->
            <a-textarea v-model:value="formData.description" :disabled="disabled" :rows="4" />
          </a-form-item>
        </a-col>
        <!-- <a-col :span="24">
          <a-form-item label="备注" v-bind="validateInfos.remark" :labelCol="labelCol1" :wrapperCol="wrapperCol1">
	          <a-textarea v-model:value="formData.remark" :rows="4" placeholder="请输入备注" :disabled="disabled"/>
          </a-form-item>
        </a-col> -->
      </a-row>
    </a-form>
  </a-spin>
</template>

<script lang="ts" setup>
import {ref, reactive, defineExpose, nextTick, defineProps, computed, onMounted} from 'vue';
import {defHttp} from '/@/utils/http/axios';
import {useMessage} from '/@/hooks/web/useMessage';
import JDictSelectTag from '/@/components/Form/src/jeecg/components/JDictSelectTag.vue';
import JSearchSelect from '/@/components/Form/src/jeecg/components/JSearchSelect.vue';
import JImageUpload from '/@/components/Form/src/jeecg/components/JImageUpload.vue';
import JSwitch from '/@/components/Form/src/jeecg/components/JSwitch.vue';
import JTreeSelect from '/@/components/Form/src/jeecg/components/JTreeSelect.vue';
import JEditor from '/@/components/Form/src/jeecg/components/JEditor.vue';
import {getValueType} from '/@/utils';
import {listSpec, saveOrUpdate} from '../EvSpu.api';
import {Form} from 'ant-design-vue';
import {duplicateValidate} from '/@/utils/helper/validator'
import { PlusOutlined } from '@ant-design/icons-vue'


const props = defineProps({
  formDisabled: {type: Boolean, default: false},
  formData: {
    type: Object, default: () => {
    }
  },
  formBpm: {type: Boolean, default: true}
});
const formRef = ref();
const useForm = Form.useForm;
const emit = defineEmits(['register', 'ok']);
const formData = reactive<Record<string, any>>({
  id: '',
  remark: '',
  name: '',
  price:'',
  type:'',
  unit:'',
  spec:'',
  code: '',
  imgPath: '',
  brandId: '',
  supplierIds: '',
  description: '',
  status: '',
  categoryIds: '',
  specificationNames: []
});
const {createMessage} = useMessage();
const labelCol = ref<any>({xs: {span: 24}, sm: {span: 6}});
const labelCol1 = ref<any>({xs: {span: 24}, sm: {span: 3}});
const wrapperCol = ref<any>({xs: {span: 24}, sm: {span: 16}});
const wrapperCol1 = ref<any>({xs: {span: 24}, sm: {span: 21}});
const confirmLoading = ref<boolean>(false);
//表单验证
const validatorRules = {
  name: [{required: true, message: '请输入商品名称!'}, {validator: nameDuplicatevalidate}],
  code: [{required: true, message: '请输入商品编码!'}, {validator: codeDuplicatevalidate}],
  price: [{required: true, message: '请输入零售价!'}],
  type: [{required: true, message: '请输入种类!'}],
  unit: [{required: true, message: '请输入计量单位!'}],
  spec: [{required: true, message: '请输入规格型号!'}],
};
const {resetFields, validate, validateInfos} = useForm(formData, validatorRules, {immediate: true});

// 表单禁用
const disabled = computed(() => {
  if (props.formBpm === true) {
    if (props.formData.disabled === false) {
      return false;
    } else {
      return true;
    }
  }
  return props.formDisabled;
});


/**
 * 新增
 */
function add() {
  edit({status: '1'});
}

/**
 * 编辑
 */
function edit(record) {
  nextTick(async () => {
    resetFields();
    if(record.id){
      // record.specificationNames=
      const res = await listSpec({id:record.id,pageSize:9999})
      console.log(res, 'devil')
      record.specificationNames = res.records
    }
    //赋值
    Object.assign(formData, record);
  });
}

// 添加规格名称
function insertSpecificationName() {
  if(disabled.value){
    return
  }
  formData.specificationNames.push({
    name: ''
  })
}

// 删除规格名称
function deleteSpecificationName(index) {
  // if(formData.specificationNames[]){}
  formData.specificationNames.splice(index, 1)
}

/**
 * 提交数据
 */
async function submitForm() {
  console.log(formData);
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

async function nameDuplicatevalidate(_r, value) {
  return duplicateValidate('ev_goods', 'name', value, formData.id || '')
}

async function codeDuplicatevalidate(_r, value) {
  return duplicateValidate('ev_goods', 'code', value, formData.id || '')
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
