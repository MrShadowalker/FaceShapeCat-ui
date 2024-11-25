<template>
  <a-spin :spinning="confirmLoading">
    <a-form ref="formRef" class="antd-modal-form" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-row>
        <a-col :span="16">
          <a-row>
            <a-col :span="12">
              <a-form-item label="销售单号" v-bind="validateInfos.code">
                <a-input v-model:value="formData.code" placeholder="请输入销售单号" :disabled="disabled"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="销售时间" v-bind="validateInfos.saleTime">
                <a-date-picker placeholder="请选择销售时间"  v-model:value="formData.saleTime" showTime value-format="YYYY-MM-DD HH:mm:ss" style="width: 100%" :disabled="disabled"/>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="销售店铺" v-bind="validateInfos.departId">
                <!-- <a-input v-model:value="formData.departId" placeholder="请输入销售店铺" :disabled="disabled"></a-input> --> 
                <JDictSelectTag type="select" v-model:value="formData.departId" dictCode="sys_depart,depart_name,id,parent_id!=''" placeholder="请选择销售店铺"  :disabled="disabled"/>
                <!-- <a-select @change="changeRowGood" v-model:value="formData.departId">
                  <a-select-option v-for="item in shopData" :key="item.id" :value="item.id">{{ item.name }}</a-select-option>
                </a-select> -->
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="收款方式" v-bind="validateInfos.payType">
                    <JDictSelectTag type="select" v-model:value="formData.payType" dictCode="ev_pay_type" placeholder="请选择付款方式" :disabled="disabled"/>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="销售人员" v-bind="validateInfos.saleUserId">
                <!-- <a-input v-model:value="formData.salesId" placeholder="请输入销售人员" :disabled="disabled"></a-input> -->
                    <JDictSelectTag type="select" v-model:value="formData.saleUserId" dictCode="sys_user,realname,id,username!='admin'" placeholder="请选择销售人员" :disabled="disabled"/>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="应付金额">
                <a-input-number id="inputNumber" v-model:value="formData.amountTotal" :formatter="value => `${value}元`" :min="0"  disabled/>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="客户类型" v-bind="validateInfos.customType">
                <!-- <j-dict-select-tag v-model:value="formData.customType" dictCode="" placeholder="请选择客户类型" :disabled="disabled"/> -->
                    <JDictSelectTag type="radioButton" v-model:value="formData.customType" dictCode="ev_custom_type" placeholder="请选择客户类型" :disabled="disabled" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="实付金额" v-bind="validateInfos.payMoney">
                <a-input-number id="inputNumber" v-model:value="formData.payMoney" :formatter="value => `${value}元`" :min="0"  :disabled="disabled"/>
              </a-form-item>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="8">
          <a-form-item label="付款凭证" required="true">
            <j-image-upload v-model:value="formData.img" :disabled="disabled" :fileMax="4"></j-image-upload>
          </a-form-item>
        </a-col>
        <!-- <a-col :span="12">
          <a-form-item label="备注" v-bind="validateInfos.remark">
            <a-input v-model:value="formData.remark" placeholder="请输入备注" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col> -->
        <a-divider v-if="formData.customType=='2'" orientation="left" style="height: 2px;border-color: #999999;"><span style="color: #999999;">客户信息</span></a-divider>
        <a-col :span="24">
          <a-row v-if="formData.customType=='2'">
            <a-col :span="8">
              <a-form-item label="客户名称" required="true">
                <!-- <a-input v-model:value="formData.name"  placeholder="请输入客户名称" :disabled="disabled"/> -->
                <JDictSelectTag type="select" v-model:value="formData.name" dictCode="ev_custom,name,id,del_flag='0'" placeholder="请选择客户名称"  :disabled="disabled"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item label="联系电话">
                <a-input v-model:value="formData.phone" placeholder="请输入联系电话" disabled="false"></a-input>
              </a-form-item>
            </a-col>
          <a-col :span="8">
              <a-form-item label="联系地址">
                <a-input v-model:value="formData.address" placeholder="请输入联系地址" disabled="false"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="备注" v-bind="validateInfos.description" :labelCol="labelCol1"
                          :wrapperCol="wrapperCol1">
                <!-- <j-editor v-model:value="formData.description" :disabled="disabled"/> -->
                <a-textarea v-model:value="formData.description" :disabled="disabled" :rows="4" />
              </a-form-item>
            </a-col>
          </a-row>
        </a-col>
        <!-- <a-col :span="12">
          <a-form-item label="销售商品信息" v-bind="validateInfos.salesProductIds">
	          <a-textarea v-model:value="formData.salesProductIds" :rows="4" placeholder="请输入销售商品信息" :disabled="disabled"/>
          </a-form-item>
        </a-col> -->
        <!-- <a-col :span="12">
          <a-form-item label="销售单审核状态" v-bind="validateInfos.status">
            <a-input v-model:value="formData.status" placeholder="请输入销售单审核状态" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col> -->
        <a-divider orientation="left" style="height: 2px;border-color: #999999;"><span style="color: #999999;">商品列表</span></a-divider>
        <a-col :span="24">
          <!-- <a-form-item label="添加商品" :labelCol="labelCol1" :wrapperCol="wrapperCol1"> -->
            <a-table :pagination="false" :data-source="formData.evSaleGoodsList">
              <a-table-column title="序号" width="80px" align="center">
                <template #default="{ record,index }">
                  <span>{{index+1}}</span>
                </template>
              </a-table-column>              
              <a-table-column title="商品名称" align="center" width="160px">
                <template #default="{ record,index }">
                  <j-search-select @change="changeRowGoodSearch($event,index)" style="width: 160px;" dict="ev_goods,name,id,del_flag = '0'" v-model:value="record.goodsId"></j-search-select>
                  <!-- <a-select @change="changeRowGood" v-model:value="record.goodsId" :disabled="disabled">
                    <a-select-option v-for="item in goodsData" :key="item.id" :value="item.goodsId">{{ item.name }}</a-select-option>
                  </a-select> -->
                </template>
              </a-table-column>
              <a-table-column title="商品编号" align="center" width="120px">
                <template #default="{ record }">
                  <span>{{ record.code }}</span>
                  <!-- <a-input v-model:value="record.code" disabled></a-input> -->
                </template>
              </a-table-column>
              <a-table-column title="计量单位" align="center" width="120px">
                <template #default="{ record }">
                  <span>{{ record.unit }}</span>
                  <!-- <a-input v-model:value="record.unit" disabled></a-input> -->
                </template>
              </a-table-column>
              <a-table-column title="规格型号" align="center" width="120px">
                <template #default="{ record }">
                  <a-tooltip autoAdjustOverflow="true">
                    <template #title>{{record.spec}}</template>
                    <span style="width: 120px !important;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{ record.spec }}</span>
                  </a-tooltip>
                  <!-- <a-input v-model:value="record.spec" disabled></a-input> -->
                </template>
              </a-table-column>
              <a-table-column title="零售价" width="100px" align="center">
                <template #default="{ record }">
                  <span>{{ record.salePrice }}元</span>
                  <!-- <a-input v-model:value="record.total"></a-input> -->
                  <!-- <a-input-number id="inputNumber" v-model:value="record.salePrice" :formatter="value => `${value}元`" :min="0"  disabled/> -->
                </template>
              </a-table-column>
              <a-table-column title="数量" align="center">
                <template #default="{ record }">
                  <!-- <a-input v-model:value="record.num"></a-input> -->
                  <a-input-number id="inputNumber" v-model:value="record.num" :min="0"  @change="calculate(record)" :disabled="disabled"/>
                </template>
              </a-table-column>
              <!-- <a-table-column title="单价" align="center">
                <template #default="{ record }"> -->
                  <!-- <a-input v-model:value="record.saleMoney"></a-input> -->
                  <!-- <a-input-number id="inputNumber" v-model:value="record.saleMoney" :formatter="value => `${value}元`" :min="0"  @change="calculate(record)" :disabled="disabled"/>
                </template>
              </a-table-column> -->
              <a-table-column title="总价" align="center">
                <template #default="{ record }">
                  <!-- <a-input v-model:value="record.total"></a-input> -->
                  <a-input-number id="inputNumber" v-model:value="record.total" :formatter="value => `${value}元`" :min="0"  @change="calculateTotal" :disabled="disabled"/>
                </template>
              </a-table-column>
              <a-table-column align="center" v-if="!disabled">
                <template #title>
                  <a-space style="cursor: pointer;" @click="insertRow">添加<PlusOutlined /></a-space>
                </template>
                <template #default="{ index }">
                  <span>
                    <a-button @click="deleteRow(index)">删除</a-button>
                  </span>
                </template>
              </a-table-column>
            </a-table>
          <!-- </a-form-item> -->
        </a-col>
      </a-row>
    </a-form>
  </a-spin>
</template>

<script lang="ts" setup>
  import { ref, reactive, defineExpose, nextTick, defineProps, computed, onMounted } from 'vue';
  import { defHttp } from '/@/utils/http/axios';
  import { useMessage } from '/@/hooks/web/useMessage';
  import JDictSelectTag from '/@/components/Form/src/jeecg/components/JDictSelectTag.vue';
  import JSearchSelect from '/@/components/Form/src/jeecg/components/JSearchSelect.vue';
  import JImageUpload from '/@/components/Form/src/jeecg/components/JImageUpload.vue';
  import { getValueType } from '/@/utils';
  import { saveOrUpdate ,queryDepartTreeSync,goodsList,queryGoodsById} from '../EvSalesSlip.api';
  import { Form } from 'ant-design-vue';
  import { PlusOutlined } from '@ant-design/icons-vue'
  import { list as queryGoodsOptions } from '@/views/youran/B-product/productManagement/EvSpu.api'
  import { list as querySkuOptions } from '@/views/youran/B-product/measurementUnit/EvSku.api'

  const props = defineProps({
    formDisabled: { type: Boolean, default: false },
    formData: { type: Object, default: ()=>{} },
    formBpm: { type: Boolean, default: true }
  });
  const formRef = ref();
  const useForm = Form.useForm;
  const emit = defineEmits(['register', 'ok']);
  const formData = reactive<Record<string, any>>({
    saleTime:'',
    code:'',
    customType:'1',
    payType:'',
    salesId:'',
    departId:'',
    amountTotal:0,
    payMoney:0,
    evSaleGoodsList:[],   
    saleUserId:'',
  });

  const shopData = ref([])
  const { createMessage } = useMessage();
  const labelCol1 = ref<any>({xs: {span: 24}, sm: {span: 1}})
  const labelCol = ref<any>({ xs: { span: 24 }, sm: { span: 5 } });
  const wrapperCol = ref<any>({ xs: { span: 24 }, sm: { span: 16 } });
  const wrapperCol1 = ref<any>({xs: {span: 24}, sm: {span: 22}});
  const confirmLoading = ref<boolean>(false);
  //表单验证
  const validatorRules = {
    saleTime: [{required: true, message: '请选择销售时间!'}],
    code: [{required: true, message: '请输入销售单号!'}],
    customType: [{required: true, message: '请选择客户类型!'}],
    payType: [{required: true, message: '请选择支付方式!'}],

    saleUserId: [{required: true, message: '请选择销售人员!'}],
    departId: [{required: true, message: '请选择销售店铺!'}],
    payMoney: [{required: true, message: '请输入实际金额!'}],
  };
  const { resetFields, validate, validateInfos } = useForm(formData, validatorRules, { immediate: true });
  const goodsData = ref([])

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

onMounted(() => {
  getShop()
  // getGoodList()
})

 const calculate = (v) => {
    if (v.saleMoney && v.num) {
      v.total = v.saleMoney * v.num
    }
    calculateTotal()
  }
  const calculateTotal = () => {
    formData.amountTotal = 0
    for (let i = 0; i < formData.evSaleGoodsList.length; i++) {
      const v = formData.evSaleGoodsList[i];
      formData.amountTotal += v.total
    }
  }
  // const getGoodList = () => {
  //   goodsList({
  //     pageNo:1,
  //     pageSize:999999
  //   }).then(res => {
  //     console.log(res,'res');
  //     goodsData.value = res.records
  //   })
  // }


const getShop = () => {
queryDepartTreeSync().then(res => {
  console.log(res,'res');
  
})
}

  // 查询商品 Options
  const goodsOptions = ref([])
  async function getGoodsOptions() {
    const res = await queryGoodsOptions({ pageSize: 9999 })
    console.log(res, 'devil')
    goodsOptions.value = res.records
  }

  // 计量单位 Options
  // const skuOptions = ref([])
  // async function getSkuOptions() {
  //   const res = await querySkuOptions({ pageSize: 9999 })
  //   console.log(res, 'skuOptions')
  //   skuOptions.value = res.records
  // }

  function insertRow() {
    formData.evSaleGoodsList.unshift({
      unit: '',
      code: '',
      spec: '',
      goodsId:'',
      saleMoney:'',
      num:'',
      total:'',
    })
  }

  function deleteRow(index) {
    formData.evSaleGoodsList.splice(index, 1)
  }

  function changeRowGoodSearch(val,index){
    queryGoodsById({id:val}).then(res => {
      const tmp = formData.evSaleGoodsList[index]
      tmp.spec = res.spec
      tmp.unit = res.unit
      tmp.code = res.code
      tmp.salePrice = res.price
    })
  }

  // function changeRowGood(val) {
  //  for (let i = 0; i < formData.evSaleGoodsList.length; i++) {
  //     const e = formData.evSaleGoodsList[i]
  //     console.log(e,'eeeeee');

  //     for (let j = 0; j < goodsData.value.length; j++) {
  //       const v = goodsData.value[j];
  //         if (e.goodsId == v.id) {
  //           e.spec = v.spec
  //           e.unit = v.unit
  //           e.code = v.code
  //         }
  //     }
  //   }
  // }


  onMounted(() => {
    getGoodsOptions()
    // getSkuOptions()
  })
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
      // Object.assign(formData, record);

      if(record.id) {
        searchGoodsById(record.id)
      }
    });
  }


  const searchGoodsById = (id) => {
    queryGoodsById({id})
      .then((res) => {
        Object.assign(formData, res);
        if (formData.evSaleGoodsList.length > 0) {
          console.log(formData,'456');  
            for (let i = 0; i < formData.evSaleGoodsList.length; i++) {
              const e = formData.evSaleGoodsList[i];
              changeRowGood(e.goodsId)
              calculate(e)
            }
        }
        
      })
  }

  /**
   * 提交数据
   */
  async function submitForm() {
    // 触发表单验证
    await validate();
    if (formData.evSaleGoodsList.length < 1) {
        createMessage.warning('请填写商品信息');
      return
    }

    for (let i = 0; i < formData.evSaleGoodsList.length; i++) {
      const v = formData.evSaleGoodsList[i];
      if(!v.num || !v.total || !v.saleMoney || !v.goodsId ) {
        createMessage.warning('请将商品数据填写完整');
        return
      }
    }


    confirmLoading.value = true;
    const isUpdate = ref<boolean>(false);
    //时间格式化
    let model = formData;
    if (model.id) {
      isUpdate.value = true;
    }
    // //循环数据
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
