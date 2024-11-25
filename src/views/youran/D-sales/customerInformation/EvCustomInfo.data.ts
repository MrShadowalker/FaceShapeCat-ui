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
    title: '客户姓名',
    align: "center",
    sorter: true,
    dataIndex: 'name'
  },
  {
    title: '对接销售',
    align: "center",
    sorter: true,
    dataIndex: 'userId_dictText'
  },
  {
    title: '电话',
    align: "center",
    dataIndex: 'phoneNum'
  },
  {
    title: '客户公司',
    align: "center",
    sorter: true,
    dataIndex: 'company'
  },
  {
    title: '客户地址',
    align: "center",
    dataIndex: 'address'
  },
];

//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: "客户姓名",
    field: 'name',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "对接销售",
    field: 'userId',
    component: 'JSearchSelect',
    componentProps:{
      dict: ",,"
    },
    //colProps: {span: 6},
  },
  {
    label: "电话",
    field: 'phoneNum',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "客户公司",
    field: 'company',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "客户地址",
    field: 'address',
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
    label: '客户姓名',
    field: 'name',
    component: 'Input',
  },
  {
    label: '对接销售',
    field: 'userId',
    component: 'JSearchSelect',
    componentProps:{
      dict: ""
    },
  },
  {
    label: '电话',
    field: 'phoneNum',
    component: 'Input',
  },
  {
    label: '客户公司',
    field: 'company',
    component: 'Input',
  },
  {
    label: '客户地址',
    field: 'address',
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
  name: {title: '客户姓名',order: 1,view: 'text', type: 'string',},
  // userId: {title: '对接销售',order: 2,view: 'sel_search', type: 'string',,},
  phoneNum: {title: '电话',order: 3,view: 'text', type: 'string',},
  company: {title: '客户公司',order: 4,view: 'text', type: 'string',},
  address: {title: '客户地址',order: 5,view: 'text', type: 'string',},
};
