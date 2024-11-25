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
    title: '采购单id',
    align: "center",
    sorter: true,
    dataIndex: 'purchaseId'
  },
  {
    title: '退货原因',
    align: "center",
    dataIndex: 'returnReason'
  },
  {
    title: '审核状态',
    align: "center",
    sorter: true,
    dataIndex: 'status'
  },
  {
    title: '退货状态',
    align: "center",
    sorter: true,
    dataIndex: 'returnStatus'
  },
];

//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: "采购单id",
    field: 'purchaseId',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "退货原因",
    field: 'returnReason',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "审核状态",
    field: 'status',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "退货状态",
    field: 'returnStatus',
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
    label: '采购单id',
    field: 'purchaseId',
    component: 'Input',
  },
  {
    label: '退货原因',
    field: 'returnReason',
    component: 'Input',
  },
  {
    label: '审核状态',
    field: 'status',
    component: 'Input',
  },
  {
    label: '退货状态',
    field: 'returnStatus',
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
  purchaseId: {title: '采购单id',order: 1,view: 'text', type: 'string',},
  returnReason: {title: '退货原因',order: 2,view: 'text', type: 'string',},
  status: {title: '审核状态',order: 3,view: 'text', type: 'string',},
  returnStatus: {title: '退货状态',order: 4,view: 'text', type: 'string',},
};
