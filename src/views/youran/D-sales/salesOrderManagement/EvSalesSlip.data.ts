import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '序号',
    dataIndex: 'batch',
    align: 'center',
    width: 50,
    customRender: function ({ text, record, index, column }) {
        return index + 1;
    },
  },
  // {
  //   title: '备注',
  //   align: "center",
  //   dataIndex: 'remark'
  // },
  {
    title: '销售单号',
    align: "center",
    // sorter: true,
    dataIndex: 'code'
  },
  // {
  //   title: '销售商品信息',
  //   align: "center",
  //   dataIndex: 'salesProductIds'
  // },
  {
    title: '销售人员', 
    align: "center",
    dataIndex: 'saleUserId_dictText'
  }, 
  {
    title: '销售时间',
    align: "center",
    // sorter: true,
    dataIndex: 'saleTime'
  },
  // {
  //   title: '客户信息ID',
  //   align: "center",
  //   dataIndex: 'customId_dictText'
  // },
  {
    title: '客户',
    align: "center",
    dataIndex: 'customType',
    customRender:({ text, record, index, column }) => {
      if (text == '0') {
        return '散客'
      } else if(text == '1') {
        return record.customId_dictText
      }      
    },
  },
  {
    title: '收款方式',
    align: "center",
    dataIndex: 'payType',
    customRender:({ text, record, index, column }) => {
      // console.log(text,'rrrrrrrrrrrrrrrrrr');
      if (text == '0') {
        return '微信'
      } else if(text == '1') {
        return '支付宝'
      }else if(text == '2') {
        return '现金'
      }
      
    },
  },
  // {
  //   title: '销售单审核状态',
  //   align: "center",
  //   dataIndex: 'status'
  // },
];

//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: "销售单号",
    field: 'code',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "销售时间",
    field: "salesTime",
    component: 'RangePicker',
    componentProps: {
      showTime: true,
    },
    //colProps: {span: 6},
  },
  {
    label: "客户信息ID",
    field: 'customId',
    component: 'JDictSelectTag',
    componentProps:{
    },
    //colProps: {span: 6},
  },
  {
    label: "客户类型",
    field: 'customType',
    component: 'JDictSelectTag',
    componentProps:{
    },
    //colProps: {span: 6},
  },
  {
    label: "销售商品信息",
    field: 'salesProductIds',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "收款方式",
    field: 'paymentMethod',
    component: 'JDictSelectTag',
    componentProps:{
    },
    //colProps: {span: 6},
  },
  {
    label: "销售人员",
    field: 'salesId',
    component: 'JSearchSelect',
    componentProps:{
      dict: ",,"
    },
    //colProps: {span: 6},
  },
  {
    label: "销售单审核状态",
    field: 'status',
    component: 'Input',
    //colProps: {span: 6},
  },
];

//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
  {
    label: '销售单号',
    field: 'code',
    component: 'Input',
  },
  {
    label: '销售时间',
    field: 'salesTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss'
    },
  },
  {
    label: '客户信息ID',
    field: 'customId',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode: ""
    },
  },
  {
    label: '客户类型',
    field: 'customType',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode: ""
    },
  },
  {
    label: '销售商品信息',
    field: 'salesProductIds',
    component: 'InputTextArea',
  },
  {
    label: '收款方式',
    field: 'paymentMethod',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode: ""
    },
  },
  {
    label: '销售人员',
    field: 'salesId',
    component: 'JSearchSelect',
    componentProps:{
      dict: ""
    },
  },
  {
    label: '销售单审核状态',
    field: 'status',
    component: 'Input',
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
  remark: {title: '备注',order: 0,view: 'text', type: 'string',},
  code: {title: '销售单号',order: 1,view: 'text', type: 'string',},
  salesTime: {title: '销售时间',order: 2,view: 'datetime', type: 'string',},
  // customId: {title: '客户信息ID',order: 3,view: 'list', type: 'string',,},
  // customType: {title: '客户类型',order: 4,view: 'list', type: 'string',,},
  salesProductIds: {title: '销售商品信息',order: 5,view: 'textarea', type: 'string',},
  // paymentMethod: {title: '收款方式',order: 6,view: 'list', type: 'string',,},
  // salesId: {title: '销售人员',order: 7,view: 'sel_search', type: 'string',,},
  status: {title: '销售单审核状态',order: 8,view: 'text', type: 'string',},
};
