import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '备注',
    align: "center",
    dataIndex: 'remark'
  },
  {
    title: '销售单号',
    align: "center",
    dataIndex: 'salesSlipId_dictText'
  },
  {
    title: '退货原因',
    align: "center",
    dataIndex: 'returnReason'
  },
  {
    title: '退货单状态',
    align: "center",
    dataIndex: 'status_dictText'
  },
  {
    title: '退货状态',
    align: "center",
    sorter: true,
    dataIndex: 'returnStatus_dictText'
  },
  {
    title: '退货类型',
    align: "center",
    sorter: true,
    dataIndex: 'returnType_dictText'
  },
];

//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: "销售单号",
    field: 'salesSlipId',
    component: 'JSearchSelect',
    componentProps:{
      dict: ",,"
    },
    //colProps: {span: 6},
  },
  {
    label: "退货原因",
    field: 'returnReason',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "退货单状态",
    field: 'status',
    component: 'JDictSelectTag',
    componentProps:{
    },
    //colProps: {span: 6},
  },
  {
    label: "退货状态",
    field: 'returnStatus',
    component: 'JDictSelectTag',
    componentProps:{
    },
    //colProps: {span: 6},
  },
  {
    label: "退货类型",
    field: 'returnType',
    component: 'JDictSelectTag',
    componentProps:{
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
    label: '销售单号',
    field: 'salesSlipId',
    component: 'JSearchSelect',
    componentProps:{
      dict: ""
    },
  },
  {
    label: '退货原因',
    field: 'returnReason',
    component: 'InputTextArea',
  },
  {
    label: '退货单状态',
    field: 'status',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode: ""
    },
  },
  {
    label: '退货状态',
    field: 'returnStatus',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode: ""
    },
  },
  {
    label: '退货类型',
    field: 'returnType',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode: ""
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
  remark: {title: '备注',order: 0,view: 'text', type: 'string',},
  // salesSlipId: {title: '销售单号',order: 1,view: 'sel_search', type: 'string',,},
  returnReason: {title: '退货原因',order: 2,view: 'textarea', type: 'string',},
  // status: {title: '退货单状态',order: 3,view: 'list', type: 'string',,},
  // returnStatus: {title: '退货状态',order: 4,view: 'list', type: 'string',,},
  // returnType: {title: '退货类型',order: 5,view: 'list', type: 'string',,},
};
