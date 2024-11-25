import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '客户姓名',
    align: "center",
    dataIndex: 'name'
  },
  {
    title: '联系电话',
    align: "center",
    dataIndex: 'phone'
  },
  {
    title: '联系地址',
    align: "center",
    dataIndex: 'address'
  },
  {
    title: '销售',
    align: "center",
    dataIndex: 'saleUserId_dictText'
  },
  {
    title: '已消费金额',
    align: "center",
    dataIndex: 'saleMoney',
    customRender:({text})=>{
      text = text?text:0
      return text + '元'
    },
  },
];

//查询数据
export const searchFormSchema: FormSchema[] = [
];

//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '客户姓名',
    field: 'name',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
              { required: true, message: '请输入客户姓名!'},
             ];
    },
  },
  {
    label: '联系电话',
    field: 'phone',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
              { required: true, message: '请输入联系电话!'},
              { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号码!'},
             ];
    },
  },
  {
    label: '联系地址',
    field: 'address',
    component: 'InputTextArea',
  },
  {
    label: '销售员',
    field: 'saleUserId',
    component: 'JSearchSelect',
    componentProps:{
      dict: ""
    },
    dynamicRules: ({model,schema}) => {
      return [
              { required: true, message: '请输入销售员!'},
             ];
    },
  },
	// TODO 主键隐藏字段，目前写死为ID
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false,
  },
];

// 高级查询数据
export const superQuerySchema = {
  name: {title: '客户姓名',order: 0,view: 'text', type: 'string',},
  phone: {title: '联系电话',order: 1,view: 'text', type: 'string',},
  address: {title: '联系地址',order: 2,view: 'textarea', type: 'string',},
  // saleUserId: {title: '销售员',order: 3,view: 'sel_search', type: 'string',,},
};
