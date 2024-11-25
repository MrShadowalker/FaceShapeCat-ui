import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '采购店铺',
    align: "center",
    // sorter: true,
    dataIndex: 'shopId_dictText'
  },
  {
    title: '供应商',
    align: "center",
    // sorter: true,
    dataIndex: 'supplier'
  },
  {
    title: '采购单号',
    align: "center",
    // sorter: true,
    dataIndex: 'code'
  },
  {
    title: '付款方式',
    align: "center",
    // sorter: true,
    dataIndex: 'payType_dictText',
    // customRender:({ text, record, index, column }) => {
    //   console.log(text,'rrrrrrrrrrrrrrrrrr');
    //   if (text == '0') {
    //     return '微信'
    //   } else if(text == '1') {
    //     return '支付宝'
    //   }else if(text == '2') {
    //     return '现金'
    //   }      
    // },
  },
  {
    title: '供应商联系人',
    align: "center",
    // sorter: true,
    dataIndex: 'contact'
  },
  // {
  //   title: '供应商联系电话',
  //   align: "center",
  //   sorter: true,
  //   dataIndex: 'supplierPhone'
  // },
  {
    title: '采购时间',
    align: "center",
    // sorter: true,
    dataIndex: 'buyTime'
  },
  // {
  //   title: '付款时间',
  //   align: "center",
  //   sorter: true,
  //   dataIndex: 'paymentTime'
  // },
  // {
  //   title: '付款状态',
  //   align: "center",
  //   // sorter: true,
  //   dataIndex: 'payStatus',
  //   customRender:({ text, record, index, column }) => {
  //     if (text == '0') {
  //       return '已支付'
  //     } else if(text == '1') {
  //       return '未支付'
  //     }
      
  //   },
  // },
  // {
  //   title: '采购状态',
  //   align: "center",
  //   sorter: true,
  //   dataIndex: 'goodsStatus',
  //   customRender:({ text, record, index, column }) => {
  //     if (text == '0') {
  //       return '已到货'
  //     } else if(text == '1') {
  //       return '未到货'
  //     }
      
  //   },
  // },
  // {
  //   title: '到货状态',
  //   align: "center",
  //   sorter: true,
  //   dataIndex: 'reviewStatus'
  // },
  // {
  //   title: '合计金额',
  //   align: "center",
  //   sorter: true,
  //   dataIndex: 'buyProductIds_dictText'
  // },
  {
    title: '实付金额',
    align: "center",
    dataIndex: 'payMoney',
    customRender: ({text})=>{
      return text+'元'
    }
  },
];

//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: "供应商",
    field: 'supplierId',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "采购单号",
    field: 'code',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "付款方式",
    field: 'paymentType',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "供应商联系人",
    field: 'supplierName',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "供应商联系电话",
    field: 'supplierPhone',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "采购时间",
    field: 'purchaseTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    //colProps: {span: 6},
  },
  {
    label: "付款时间",
    field: 'paymentTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    //colProps: {span: 6},
  },
  // {
  //   label: "付款状态",
  //   field: 'paymentStatus',
  //   component: 'Input',
  //   //colProps: {span: 6},
  // },
  {
    label: "采购状态",
    field: 'status',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "审核状态",
    field: 'reviewStatus',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "采购商品ids",
    field: 'buyProductIds',
    component: 'JSelectMultiple',
    componentProps: {
    },
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
    label: '供应商',
    field: 'supplierId',
    component: 'Input',
  },
  {
    label: '采购单号',
    field: 'code',
    component: 'Input',
  },
  {
    label: '付款方式',
    field: 'paymentType',
    component: 'Input',
  },
  {
    label: '供应商联系人',
    field: 'supplierName',
    component: 'Input',
  },
  {
    label: '供应商联系电话',
    field: 'supplierPhone',
    component: 'Input',
  },
  {
    label: '采购时间',
    field: 'purchaseTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss'
    },
  },
  {
    label: '付款时间',
    field: 'paymentTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss'
    },
  },
  // {
  //   label: '付款状态',
  //   field: 'paymentStatus',
  //   component: 'Input',
  // },
  {
    label: '采购状态',
    field: 'status',
    component: 'Input',
  },
  {
    label: '审核状态',
    field: 'reviewStatus',
    component: 'Input',
  },
  {
    label: '采购商品ids',
    field: 'buyProductIds',
    component: 'JSelectMultiple',
    componentProps:{
        dictCode:""
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
  // remark: {title: '备注',order: 0,view: 'text', type: 'string',},
  // supplierId: {title: '供应商',order: 1,view: 'text', type: 'string',},
  // code: {title: '采购单号',order: 2,view: 'text', type: 'string',},
  // paymentType: {title: '付款方式',order: 3,view: 'text', type: 'string',},
  // supplierName: {title: '供应商联系人',order: 4,view: 'text', type: 'string',},
  // supplierPhone: {title: '供应商联系电话',order: 5,view: 'text', type: 'string',},
  // purchaseTime: {title: '采购时间',order: 6,view: 'datetime', type: 'string',},
  // paymentTime: {title: '付款时间',order: 7,view: 'datetime', type: 'string',},
  // paymentStatus: {title: '付款状态',order: 8,view: 'text', type: 'string',},
  // status: {title: '采购状态',order: 9,view: 'text', type: 'string',},
  // reviewStatus: {title: '审核状态',order: 10,view: 'text', type: 'string',},
  // buyProductIds: {title: '采购商品ids',order: 11,view: 'list_multi', type: 'string',,},
};
