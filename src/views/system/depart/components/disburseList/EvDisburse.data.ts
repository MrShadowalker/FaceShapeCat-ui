import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '店铺',
    align: "center",
    dataIndex: 'departId_dictText'
  },
  {
    title: '商品',
    align: "center",
    dataIndex: 'goodsId_dictText'
  },
  {
    title: '损耗时间',
    align: "center",
    dataIndex: 'disburseTime'
  },
  {
    title: '损耗类型',
    align: "center",
    dataIndex: 'type'
  },
  {
    title: '损耗数量',
    align: "center",
    dataIndex: 'num'
  },
  {
    title: '损耗原因',
    align: "center",
    dataIndex: 'reason'
  },
  {
    title: '损耗状态',
    align: "center",
    dataIndex: 'status'
  },
  {
    title: '备注',
    align: "center",
    dataIndex: 'remark'
  },
];

//查询数据
export const searchFormSchema: FormSchema[] = [
];

//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
  {
    label: '商品',
    field: 'goodsId',
    component: 'Input',
  },
  {
    label: '损耗时间',
    field: 'disburseTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss'
    },
  },
  {
    label: '损耗类型',
    field: 'type',
    component: 'Input',
  },
  {
    label: '损耗数量',
    field: 'num',
    component: 'Input',
  },
  {
    label: '损耗原因',
    field: 'reason',
    component: 'Input',
  },
  {
    label: '损耗状态',
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
  remark: {title: '备注',order: 1,view: 'text', type: 'string',},
  goodsId: {title: '商品',order: 2,view: 'text', type: 'string',},
  disburseTime: {title: '损耗时间',order: 3,view: 'datetime', type: 'string',},
  type: {title: '损耗类型',order: 4,view: 'text', type: 'string',},
  num: {title: '损耗数量',order: 5,view: 'text', type: 'string',},
  reason: {title: '损耗原因',order: 6,view: 'text', type: 'string',},
  status: {title: '损耗状态',order: 7,view: 'text', type: 'string',},
};
