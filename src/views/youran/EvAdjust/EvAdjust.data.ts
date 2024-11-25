import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '调货商品',
    align: "center",
    dataIndex: 'goodsId_dictText'
  },
  {
    title: '供货店铺',
    align: "center",
    dataIndex: 'fromId'
  },
  {
    title: '收货店铺',
    align: "center",
    dataIndex: 'toId'
  },
  {
    title: '数量',
    align: "center",
    dataIndex: 'num'
  },
  {
    title: '调货日期',
    align: "center",
    dataIndex: 'adjustTime'
  },
  {
    title: '送货人员',
    align: "center",
    dataIndex: 'fromUserId_dictText'
  },
  {
    title: '收货人员',
    align: "center",
    dataIndex: 'toUserId_dictText'
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
    label: '供货店铺',
    field: 'fromId',
    component: 'Input',
  },
  {
    label: '收货店铺',
    field: 'toId',
    component: 'Input',
  },
  {
    label: '商品',
    field: 'goodsId',
    component: 'Input',
  },
  {
    label: '数量',
    field: 'num',
    component: 'InputNumber',
  },
  {
    label: '调货日期',
    field: 'adjustTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss'
    },
  },
  {
    label: '申请人',
    field: 'fromUserId',
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
  fromId: {title: '供货店铺',order: 2,view: 'text', type: 'string',},
  toId: {title: '收货店铺',order: 3,view: 'text', type: 'string',},
  goodsId: {title: '商品',order: 4,view: 'text', type: 'string',},
  num: {title: '数量',order: 5,view: 'number', type: 'number',},
  adjustTime: {title: '调货日期',order: 6,view: 'datetime', type: 'string',},
  fromUserId: {title: '申请人',order: 7,view: 'text', type: 'string',},
};
