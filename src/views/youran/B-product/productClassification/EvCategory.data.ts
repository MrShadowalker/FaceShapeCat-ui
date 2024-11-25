import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  // {
  //   title: '备注',
  //   align: 'center',
  //   dataIndex: 'remark'
  // },
  {
    title: '分类名称',
    align: 'left',
    dataIndex: 'name'
  },
  // {
  //   title: '商品分类编码',
  //   align: 'center',
  //   dataIndex: 'code'
  // },
];

//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: "父级节点",
    field: "pid",
    component: 'JSearchSelect',
    componentProps: {
      dict:",,"
    },
    //colProps: {span: 6},
  },
  {
    label: "分类名称",
    field: "name",
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "商品分类编码",
    field: "code",
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
    label: '父级节点',
    field: 'pid',
    component: 'JTreeSelect',
    componentProps: {
      dict: "ev_category,name,id",
      pidField: "pid",
      pidValue: "0",
      hasChildField: "has_child",
    },
    dynamicRules: ({ model, schema }) => {
      return [
              { required: true, message: '请输入父级节点!' },
             ];
    },
  },
  {
    label: '分类名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '商品分类编码',
    field: 'code',
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
  name: {title: '分类名称',order: 2,view: 'text', type: 'string',},
  code: {title: '商品分类编码',order: 3,view: 'text', type: 'string',},
};
