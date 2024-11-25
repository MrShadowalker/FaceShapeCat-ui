import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '仓库',
    align: "center",
    dataIndex: 'whId_dictText'
  },
  {
    title: 'skuID',
    align: "center",
    dataIndex: 'skuId_dictText'
  },
  {
    title: '数量',
    align: "center",
    dataIndex: 'count'
  },
  {
    title: '成本',
    align: "center",
    dataIndex: 'cost'
  },
];

//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: "仓库",
    field: 'whId',
    component: 'JSearchSelect',
    componentProps:{
      dict: ",,"
    },
    //colProps: {span: 6},
  },
  {
    label: "skuID",
    field: 'skuId',
    component: 'JSearchSelect',
    componentProps:{
      dict: ",,"
    },
    //colProps: {span: 6},
  },
  {
    label: "数量",
    field: 'count',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "成本",
    field: 'cost',
    component: 'Input',
    //colProps: {span: 6},
  },
];

//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '仓库',
    field: 'whId',
    component: 'JSearchSelect',
    componentProps:{
      dict: ""
    },
  },
  {
    label: 'skuID',
    field: 'skuId',
    component: 'JSearchSelect',
    componentProps:{
      dict: ""
    },
  },
  {
    label: '数量',
    field: 'count',
    component: 'InputNumber',
  },
  {
    label: '成本',
    field: 'cost',
    component: 'InputNumber',
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
  // whId: {title: '仓库',order: 0,view: 'sel_search', type: 'string',,},
  // skuId: {title: 'skuID',order: 1,view: 'sel_search', type: 'string',,},
  count: {title: '数量',order: 2,view: 'number', type: 'number',},
  cost: {title: '成本',order: 3,view: 'number', type: 'number',},
};
