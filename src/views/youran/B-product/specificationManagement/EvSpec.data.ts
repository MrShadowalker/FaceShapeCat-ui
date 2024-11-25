import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '商品名称',
    align: "center",
    sorter: true,
    dataIndex: 'spuId_dictText'
  },
  {
    title: '规格名称',
    align: "center",
    sorter: true,
    dataIndex: 'name'
  },
];

//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: "商品名称",
    field: 'spuId',
    component: 'JSearchSelect',
    componentProps:{
      dict: ",,"
    },
    //colProps: {span: 6},
  },
  {
    label: "规格名称",
    field: 'name',
    component: 'JSearchSelect',
    componentProps:{
      dict: ",,"
    },
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
    label: '规格名称',
    field: 'name',
    component: 'JSearchSelect',
    componentProps:{
      dict: ""
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
  // spuId: {title: '商品ID',order: 0,view: 'sel_search', type: 'string',,},
  // name: {title: '规格名称',order: 1,view: 'sel_search', type: 'string',,},
};
