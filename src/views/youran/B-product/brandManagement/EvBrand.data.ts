import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  // {
  //   title: '备注',
  //   align: "center",
  //   dataIndex: 'remark'
  // },
  {
    title: '品牌LOGO',
    align: "center",
    dataIndex: 'logoPath',
    customRender: render.renderImage,
  },
  {
    title: '品牌名称',
    align: "center",
    sorter: true,
    dataIndex: 'name'
  },
  // {
  //   title: '品牌编码',
  //   align: "center",
  //   sorter: true,
  //   dataIndex: 'code'
  // },
  // {
  //   title: '品牌描述',
  //   align: "center",
  //   dataIndex: 'description',
  // },
  // {
  //   title: '是否启用',
  //   align: "center",
  //   sorter: true,
  //   dataIndex: 'status',
  //   customRender:({text}) => {
  //      return  render.renderSwitch(text, [{text:'是',value:'Y'},{text:'否',value:'N'}]);
  //    },
  // },
];

//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: "品牌名称",
    field: 'name',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "品牌编码",
    field: 'code',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "是否启用",
    field: 'status',
    component: 'JSwitch',
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
    label: '品牌名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '品牌编码',
    field: 'code',
    component: 'Input',
  },
  {
    label: '品牌logo',
    field: 'logoPath',
    component: 'JImageUpload',
    componentProps:{
    },
  },
  {
    label: '品牌描述',
    field: 'description',
    component: 'JEditor',
  },
  {
    label: '是否启用',
    field: 'status',
    component: 'JSwitch',
    componentProps:{
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
  name: {title: '品牌名称',order: 1,view: 'text', type: 'string',},
  code: {title: '品牌编码',order: 2,view: 'text', type: 'string',},
  logoPath: {title: '品牌logo',order: 3,view: 'image', type: 'string',},
  description: {title: '品牌描述',order: 4,view: 'umeditor', type: 'string',},
  status: {title: '是否启用',order: 5,view: 'switch', type: 'string',},
};
