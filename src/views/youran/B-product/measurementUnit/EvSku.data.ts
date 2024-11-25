import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '商品名称',
    align: "center",
    dataIndex: 'spuId_dictText'
  },
  {
    title: '计量单位名称',
    align: "center",
    dataIndex: 'name'
  },
  // {
  //   title: '仓库id',
  //   align: "center",
  //   dataIndex: 'warehouseId_dictText'
  // },
  // {
  //   title: '规格值ids',
  //   align: "center",
  //   sorter: true,
  //   dataIndex: 'specValueIds'
  // },
  {
    title: '计量单位',
    align: "center",
    sorter: true,
    dataIndex: 'skuUnit'
  },
  {
    title: '建议零售价',
    align: "center",
    sorter: true,
    dataIndex: 'retailPrice'
  },
  // {
  //   title: '备注',
  //   align: "center",
  //   dataIndex: 'remark'
  // },
];

//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: "商品ID",
    field: 'spuId',
    component: 'JSearchSelect',
    componentProps:{
      dict: ",,"
    },
    //colProps: {span: 6},
  },
  {
    label: "仓库id",
    field: 'warehouseId',
    component: 'JSelectMultiple',
    componentProps: {
    },
    //colProps: {span: 6},
  },
  {
    label: "规格值ids",
    field: 'specValueIds',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "计量单位",
    field: 'skuUnit',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "建议零售价",
    field: 'retailPrice',
    component: 'Input',
    //colProps: {span: 6},
  },
];

//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '商品ID',
    field: 'spuId',
    component: 'JSearchSelect',
    componentProps:{
      dict: ""
    },
  },
  {
    label: '仓库id',
    field: 'warehouseId',
    component: 'JSelectMultiple',
    componentProps:{
        dictCode:""
     },
  },
  {
    label: '规格值ids',
    field: 'specValueIds',
    component: 'Input',
  },
  {
    label: '计量单位',
    field: 'skuUnit',
    component: 'Input',
  },
  {
    label: '建议零售价',
    field: 'retailPrice',
    component: 'InputNumber',
  },
	// TODO 主键隐藏字段，目前写死为ID
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false,
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
];

// 高级查询数据
export const superQuerySchema = {
  remark: {title: '备注',order: 0,view: 'text', type: 'string',},
  // spuId: {title: '商品ID',order: 1,view: 'sel_search', type: 'string',,},
  // warehouseId: {title: '仓库id',order: 2,view: 'list_multi', type: 'string',,},
  specValueIds: {title: '规格值ids',order: 3,view: 'text', type: 'string',},
  skuUnit: {title: '计量单位',order: 4,view: 'text', type: 'string',},
  retailPrice: {title: '建议零售价',order: 5,view: 'number', type: 'number',},
};
