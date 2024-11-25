import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '供应商名称',
    align: "center",
    sorter: true,
    dataIndex: 'name'
  },
  {
    title: '供应商简称',
    align: "center",
    sorter: true,
    dataIndex: 'shortName'
  },
  {
    title: '供应商默认联系人',
    align: "center",
    dataIndex: 'supplierName'
  },
  {
    title: '供应商默认电话',
    align: "center",
    dataIndex: 'supplierPhone'
  },
  {
    title: '供应商简介',
    align: "center",
    dataIndex: 'description'
  },
];

//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: "供应商名称",
    field: 'name',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "供应商简称",
    field: 'shortName',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "供应商默认联系人",
    field: 'supplierName',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "供应商默认电话",
    field: 'supplierPhone',
    component: 'Input',
    //colProps: {span: 6},
  },
];

//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '供应商名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '供应商简称',
    field: 'shortName',
    component: 'Input',
  },
  {
    label: '供应商默认联系人',
    field: 'supplierName',
    component: 'Input',
  },
  {
    label: '供应商默认电话',
    field: 'supplierPhone',
    component: 'Input',
  },
  {
    label: '供应商简介',
    field: 'description',
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
  name: {title: '供应商名称',order: 0,view: 'text', type: 'string',},
  shortName: {title: '供应商简称',order: 1,view: 'text', type: 'string',},
  supplierName: {title: '供应商默认联系人',order: 2,view: 'text', type: 'string',},
  supplierPhone: {title: '供应商默认电话',order: 3,view: 'text', type: 'string',},
  description: {title: '供应商简介',order: 4,view: 'text', type: 'string',},
};
