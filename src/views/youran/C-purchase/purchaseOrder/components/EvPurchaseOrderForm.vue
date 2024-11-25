<template>
  <a-spin :spinning="confirmLoading">
    <a-form ref="formRef" class="antd-modal-form" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-row>
        <a-col :span="16">
          <a-row>        
            <a-col :span="14">
              <a-form-item label="采购店铺" v-bind="validateInfos.shopId">
                <!-- <a-input v-model:value="formData.departId" placeholder="请输入销售店铺" :disabled="disabled"></a-input> --> 
                <JDictSelectTag type="select" v-model:value="formData.shopId" dictCode="sys_depart,depart_name,id,parent_id!=''" placeholder="请选择采购店铺" :disabled="disabled"/>

                <!-- <a-select @change="changeRowGood" v-model:value="formData.departId">
                  <a-select-option v-for="item in shopData" :key="item.id" :value="item.id">{{ item.name }}</a-select-option>
                </a-select> -->
              </a-form-item>
            </a-col>
            <a-col :span="10">
              <a-form-item label="付款方式" v-bind="validateInfos.payType">
                <!-- <a-input v-model:value="formData.paymentType" placeholder="请输入付款方式" :disabled="disabled"></a-input> -->
                <!-- <a-radio-group v-model:value="validateInfos.paymentMethod" button-style="solid">
                      <a-radio-button value="1">微信</a-radio-button>
                      <a-radio-button value="2">支付宝</a-radio-button>
                      <a-radio-button value="3">现金</a-radio-button>
                </a-radio-group> -->
                  <JDictSelectTag type="select" v-model:value="formData.payType" dictCode="ev_pay_type" placeholder="请选择付款方式" :disabled="disabled"/>

              </a-form-item>
            </a-col>
            <a-col :span="14">
              <a-form-item label="采购单号" v-bind="validateInfos.code">
                <a-input v-model:value="formData.code" placeholder="请输入采购单号" :disabled="disabled"></a-input>
              </a-form-item>
            </a-col>
            
            <a-col :span="10">
              <a-form-item label="合计金额">
                      <!-- <a-input v-model:value="formData.amountTotal"></a-input> -->
                      <a-input-number id="inputNumber" v-model:value="formData.amountTotal" :formatter="value => `${value}元`" :min="0"  disabled/>
              </a-form-item>
            </a-col>
            
            <a-col :span="14">
              <a-form-item label="采购时间" v-bind="validateInfos.buyTime">
                <a-date-picker placeholder="请选择采购时间"  v-model:value="formData.buyTime" showTime value-format="YYYY-MM-DD HH:mm:ss" style="width: 100%" :disabled="disabled"/>
              </a-form-item>
            </a-col>

            <a-col :span="10">
              <a-form-item label="实际付款" v-bind="validateInfos.payMoney">
                      <!-- <a-input v-model:value="formData.payMoney"></a-input> -->
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
          <a-form-item label="付款时间" v-bind="validateInfos.paymentTime">
		        <a-date-picker placeholder="请选择付款时间"  v-model:value="formData.paymentTime" showTime value-format="YYYY-MM-DD HH:mm:ss" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col> -->
        <!-- <a-col :span="12">
          <a-form-item label="付款状态" v-bind="validateInfos.payStatus"> -->
            <!-- <a-input v-model:value="formData.paymentStatus" placeholder="请输入付款状态" :disabled="disabled"></a-input> -->
            <!-- <a-switch v-model:checked="formData.payStatus" :disabled="disabled"/> -->
              <!-- <JDictSelectTag type="select" v-model:value="formData.payStatus" dictCode="ev_pay_status" placeholder="请选择付款状态" :disabled="disabled"/>
          </a-form-item>
        </a-col> -->
        <!-- <a-col :span="12">
          <a-form-item label="采购状态" v-bind="validateInfos.goodsStatus">
                <JDictSelectTag type="select" v-model:value="formData.goodsStatus" dictCode="ev_buy_status" placeholder="请选择采购状态" />
          </a-form-item>
        </a-col> -->
        <!-- <a-col :span="12">
          <a-form-item label="到货状态" v-bind="validateInfos.status">
            <a-switch v-model:checked="formData.status" :disabled="disabled"/>
          </a-form-item>
        </a-col> -->
        <a-divider orientation="left" style="height: 2px;border-color: #999999;"><span style="color: #999999;">进货列表</span></a-divider>
        
        <a-col :span="24">
          <!-- <a-form-item label="添加商品" :labelCol="labelCol1" :wrapperCol="wrapperCol1"> -->
            <a-table :pagination="false" :data-source="formData.evBuyGoodsList">
              <a-table-column title="序号" width="80px" align="center">
                <template #default="{ record,index }">
                  <span>{{index+1}}</span>
                </template>
              </a-table-column>
              <a-table-column title="商品" width="160px" align="center">
                <template #default="{ record,index }">
                  <!-- <j-search-select @blur="handleGoodsBlur(record.goodsId,index)" @change="changeRowGoodSearch($event,index)" style="width: 160px;" dict="ev_goods,name,id,del_flag = '0'" v-model:value="record.goodsId"></j-search-select> -->
                  <j-search-select @change="changeRowGoodSearch($event,index)" style="width: 160px;" dict="ev_goods,name,id,del_flag = '0'" v-model:value="record.goodsId" :disabled="disabled"></j-search-select>
                  <!-- <a-select @change="changeRowGood" v-model:value="record.goodsId" :disabled="disabled">
                    <a-select-option v-for="item in goodsData" :key="item.id" :value="item.id">{{ item.name }}</a-select-option>
                  </a-select> -->
                </template>
              </a-table-column>
              <a-table-column title="商品编号" width="120px" align="center">
                <template #default="{ record }">
                  <span>{{ record.code }}</span>
                  <!-- <a-input v-model:value="record.code" disabled></a-input> -->
                </template>
              </a-table-column>
              <a-table-column title="计量单位" width="120px" align="center">
                <template #default="{ record }">
                  <span>{{ record.unit }}</span>
                  <!-- <a-input v-model:value="record.unit" disabled></a-input> -->
                </template>
              </a-table-column>
              <a-table-column title="规格型号" width="120px" align="center">
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
              <a-table-column title="进货单价" width="110px" align="center">
                <template #default="{ record }">
                  <!-- <a-input v-model:value="record.unitPrice"></a-input> -->
                  <a-input-number id="inputNumber" v-model:value="record.price" :formatter="value => `${value}元`" :min="0"  @change="calculate(record)" :disabled="disabled"/>
                </template>
              </a-table-column>
              <a-table-column title="数量" width="110px" align="center">
                <template #default="{ record }">
                  <!-- <a-input v-model:value="record.num"></a-input> --> 
                  <a-input-number style="width: 60px !important;" v-model:value="record.num" :min="0"  @change="calculate(record)"  :disabled="disabled"/>
                </template>
              </a-table-column>
              <a-table-column title="总价" width="120px" align="center">
                <template #default="{ record }">
                  <!-- <a-input v-model:value="record.total"></a-input> -->
                   <span>{{ record.total }}元</span>
                  <!-- <a-input-number id="inputNumber" v-model:value="record.total" :formatter="value => `${value}元`" :min="0"  @change="calculateTotal" disabled/> -->
                </template>
              </a-table-column>
              <a-table-column width="120px" align="center">
                <template #title>
                  <a-space style="cursor: pointer;"><a-button type="text" @click="insertRow" :disabled="disabled"><PlusOutlined />添加</a-button></a-space>
                </template>
                <template #default="{ index }">
                  <span>
                    <a-button @click="deleteRow(index)" :disabled="disabled">删除</a-button>
                  </span>
                </template>
              </a-table-column>
            </a-table>
          <!-- </a-form-item> -->
        </a-col>
        <a-divider orientation="left" style="height: 2px;border-color: #999999;"><span style="color: #999999;">供应商信息</span></a-divider>
        
        
        <a-col :span="12">
          <a-form-item label="供应商" v-bind="validateInfos.supplier">
            <a-input v-model:value="formData.supplier" placeholder="请输入供应商" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="供应商联系人" v-bind="validateInfos.contact">
            <a-input v-model:value="formData.contact" placeholder="请输入供应商联系人" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
         
        <a-col :span="12">
          <a-form-item label="供应商联系电话" v-bind="validateInfos.phone">
            <a-input v-model:value="formData.phone" placeholder="请输入供应商联系电话" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="供应商联系地址" >
            <a-input v-model:value="formData.address" placeholder="请输入供应商联系地址" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        
        <a-col :span="24">
          <a-form-item label="备注" v-bind="validateInfos.description" :labelCol="labelCol1"
                       :wrapperCol="wrapperCol1">
            <!-- <j-editor v-model:value="formData.description" :disabled="disabled"/> -->
            <a-textarea v-model:value="formData.description" :disabled="disabled" :rows="4" />
          </a-form-item>
        </a-col>
        <!-- <a-col :span="12">
          <a-form-item label="审核状态" v-bind="validateInfos.reviewStatus">
            <a-input v-model:value="formData.reviewStatus" placeholder="请输入审核状态" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col> -->
        <!-- <a-col :span="12">
          <a-form-item label="采购商品" v-bind="validateInfos.buyProductIds">
	          <j-select-multiple type="list_multi" v-model:value="formData.buyProductIds" dictCode="" placeholder="请选择采购商品" :disabled="disabled" :triggerChange="false"/>
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
  import JSelectMultiple from '/@/components/Form/src/jeecg/components/JSelectMultiple.vue';
  import { getValueType } from '/@/utils';
  import { saveOrUpdate,goodsList,queryGoodsById } from '../EvPurchaseOrder.api';
  import { Form } from 'ant-design-vue';
  import JDictSelectTag from '/@/components/Form/src/jeecg/components/JDictSelectTag.vue';
  import JSearchSelect from '/@/components/Form/src/jeecg/components/JSearchSelect.vue';
  import JImageUpload from '/@/components/Form/src/jeecg/components/JImageUpload.vue';
  import { PlusOutlined } from '@ant-design/icons-vue'
  
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
    // remark: '',   
    // supplierId: '',   
    code: '',   
    // paymentType: '',   
    // supplierName: '',   
    // supplierPhone: '',   
    // purchaseTime: '',   
    // paymentTime: '',   
    // paymentStatus: '',   
    // status: '',   
    // reviewStatus: '',   
    // buyProductIds: '',
    amountTotal:0,
    evBuyGoodsList:[],
    supplier:'' ,  
    payMoney:0 ,  
    contact:'' ,  
    buyTime:'' ,  
    payType:'' , 
    shopId:'', 
  });
  const { createMessage } = useMessage();
  // const labelCol = ref<any>({ xs: { span: 24 }, sm: { span: 7 } });
  // const wrapperCol = ref<any>({ xs: { span: 24 }, sm: { span: 16 } });
  const labelCol1 = ref<any>({xs: {span: 24}, sm: {span: 3}})
  const labelCol = ref<any>({ xs: { span: 24 }, sm: { span: 6 } });
  const wrapperCol = ref<any>({ xs: { span: 24 }, sm: { span: 16 } });
  const wrapperCol1 = ref<any>({xs: {span: 24}, sm: {span: 20}});

  const confirmLoading = ref<boolean>(false);
  //表单验证
  const validatorRules = {
    payMoney: [{required: true, message: '请输入实际金额!'}],
    code: [{required: true, message: '请输入采购单号!'}],
    supplier: [{required: true, message: '请输入供应商!'}],
    contact: [{required: true, message: '请输入供应商联系人!'}],
    payType: [{required: true, message: '请选择支付方式!'}],
    buyTime: [{required: true, message: '请选择采购时间!'}],
    // payStatus: [{required: true, message: '请选择付款状态!'}],
    goodsStatus: [{required: true, message: '请选择采购状态!'}],
    // payMoney: [{required: true, message: '请输入实际金额!'}],
    shopId:[{required: true, message: '请选择采购店铺!'}],
    phone: [{ required: true, pattern: /^1[3456789]\d{9}$/, message: '手机号码格式有误' }],
  
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
    //console.log(props,'props.formData.props.formData.props.formData.');
    
    // getGoodList()
  })
  const calculate = (v) => {
    if (v.price && v.num) {
      v.total = v.price * v.num
    }
    calculateTotal()
  }


  function deleteRow(index) {
    formData.evBuyGoodsList.splice(index, 1)
  }


  const calculateTotal = () => {
    formData.amountTotal = 0
    for (let i = 0; i < formData.evBuyGoodsList.length; i++) {
      const v = formData.evBuyGoodsList[i];
      formData.amountTotal += v.total
    }
    formData.payMoney = formData.amountTotal
  }
  // const getGoodList = () => {
  //   goodsList({
  //     pageNo:1,
  //     pageSize:999999
  //   }).then(res => {
  //     //console.log(res,'res');
  //     goodsData.value = res.records
  //   })
  // }
  function handleGoodsBlur(val,index){    
    for (let i = 0; i < formData.evBuyGoodsList.length; i++) {
      if(i==index){
        continue
      }
      if(val == formData.evBuyGoodsList[i].goodsId){
        createMessage.error('商品重复!');
        // formData.evBuyGoodsList[index].goodsId = ''
        // val = ''
        const tmp = formData.evBuyGoodsList[index]
        tmp.goodsId = ''
        tmp.spec = ''
        tmp.unit = ''
        tmp.code = ''
        tmp.salePrice = 0
        formData.evBuyGoodsList[index] = tmp
        return
      }      
    }
  }

  function changeRowGoodSearch(val,index){
    queryGoodsById({id:val}).then(res => {
      const tmp = formData.evBuyGoodsList[index]
      tmp.spec = res.spec
      tmp.unit = res.unit
      tmp.code = res.code
      tmp.salePrice = res.price
    })
  }

  function changeRowGood(val) {
    for (let i = 0; i < formData.evBuyGoodsList.length; i++) {
      const e = formData.evBuyGoodsList[i]
      //console.log(e,'eeeeee');

      for (let j = 0; j < goodsData.value.length; j++) {
        const v = goodsData.value[j];
          if (e.goodsId == v.id) {
            e.spec = v.spec
            e.unit = v.unit
            e.code = v.code
          }
      }
      
      
    }
  }

  function insertRow() {
    // formData.evBuyGoodsList.unshift({
    formData.evBuyGoodsList.push({
      unit: '',
      code: '',
      spec: '',
      goodsId:'',
      salePrice: 0,
      price:0,
      num:0,
      total:0,
    })
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
    //console.log(record,'record');
    
    nextTick(() => {
      resetFields();
      let amountTotal = 0
      for (let i = 0; i < record.evBuyGoodsList.length; i++) {
        const v = record.evBuyGoodsList[i];
        amountTotal += (v.price*v.num)
      }
      Object.assign(formData, record);
      formData.amountTotal = amountTotal
      // if(record.id) {
      //   searchGoodsById(record.id)
      // }
      
      //赋值
      // Object.assign(formData, record);
    });
  }

  const searchGoodsById = (id) => {
    queryGoodsById({id})
      .then((res) => {
        Object.assign(formData, res);
        if (formData.evBuyGoodsList.length > 0) {
          console.log(formData,'456');  
            for (let i = 0; i < formData.evBuyGoodsList.length; i++) {
              const e = formData.evBuyGoodsList[i];
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
    if (formData.evBuyGoodsList.length < 1) {
        createMessage.warning('请填写商品信息');
        return
    }
    for (let i = 0; i < formData.evBuyGoodsList.length; i++) {
      const v = formData.evBuyGoodsList[i];
      if(!v.num || !v.total || !v.price || !v.goodsId) {
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
