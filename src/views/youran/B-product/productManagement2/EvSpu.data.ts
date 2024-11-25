import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '序号',
    dataIndex: 'batch',
    align: 'center',
    width: 50,
    customRender: function ({ text, record, index, column }) {
        return index + 1;
    },
  },
  {
    title: '商品图片',
    align: "center",
    width: 80,
    dataIndex: 'img',
    customRender: render.renderImage,
  },
  {
    title: '商品名称',
    align: "center",
    width: 180,
    dataIndex: 'name'
  },
  {
    title: '商品编码',
    align: "center",
    width: 120,
    dataIndex: 'code'
  },
  {
    title: '商品分类',
    align: "center",
    width: 100,
    dataIndex: 'type'
  },
  {
    title: '规格型号',
    align: "center",
    width: 180,
    dataIndex: 'spec'
  },
  {
    title: '计量单位',
    align: "center",
    width: 80,
    dataIndex: 'unit'
  },
  {
    title: '零售价',
    align: "center",
    width: 80,
    dataIndex: 'price',
    customRender: function ({ text, record, index, column }) {
        return text + '元';
    },
  },
  {
    title: '商品状态',
    align: "center",
    width: 80,
    dataIndex: 'status_dictText'
  },
  {
    title: '本店库存',
    align: "center",
    // width: 80,
    dataIndex: 'st'
  },
  {
    title: '商品介绍',
    align: "center",
    // width: 80,
    dataIndex: 'description'
  },
  // {
  //   title: '上架状态',
  //   align: "center",
  //   width: 240,
  //   dataIndex: 'status'
  // },
  // {
  //   title: '备注',
  //   align: "center",
  //   dataIndex: 'remark'
  // },
  // {
  //   title: '默认供应商',
  //   align: "center",
  //   dataIndex: 'supplierIds_dictText'
  // },
  // {
  //   title: '商品介绍',
  //   align: "center",
  //   dataIndex: 'description',
  // },
];

//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: "备注",
    field: 'remark',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "商品名称",
    field: 'name',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "商品编码",
    field: 'code',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "商品品牌",
    field: 'brandId',
    component: 'JSearchSelect',
    componentProps:{
      // dict: ",,"
    },
    //colProps: {span: 6},
  },
  {
    label: "默认供应商",
    field: 'supplierIds',
    component: 'JSearchSelect',
    componentProps:{
      // dict: ",,"
    },
    //colProps: {span: 6},
  },
  {
    label: "简述",
    field: 'description',
    component: 'Input',
    //colProps: {span: 6},
  },
  {
    label: "状态",
    field: 'status',
    component: 'JDictSelectTag',
    componentProps:{
    },
    //colProps: {span: 6},
  },
  {
    label: "商品分类",
    field: 'categoryIds',
    component: 'Input',
    //colProps: {span: 6},
  },
];

//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
  {
    label: '商品名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '商品编码',
    field: 'code',
    component: 'Input',
  },
  {
    label: '商品图片',
    field: 'imgPath',
    component: 'JImageUpload',
    componentProps:{
    },
  },
  {
    label: '商品品牌',
    field: 'brandId',
    component: 'JSearchSelect',
    componentProps:{
      dict: ""
    },
  },
  {
    label: '默认供应商',
    field: 'supplierIds',
    component: 'JSearchSelect',
    componentProps:{
      dict: ""
    },
  },
  {
    label: '简述',
    field: 'description',
    component: 'JEditor',
  },
  {
    label: '状态',
    field: 'status',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode: ""
    },
    dynamicDisabled: true
  },
  {
    label: '商品分类',
    field: 'categoryIds',
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
  remark: {title: '备注',order: 0,view: 'textarea', type: 'string',},
  name: {title: '商品名称',order: 1,view: 'text', type: 'string',},
  code: {title: '商品编码',order: 2,view: 'text', type: 'string',},
  imgPath: {title: '商品图片',order: 3,view: 'image', type: 'string',},
  // brandId: {title: '商品品牌',order: 4,view: 'sel_search', type: 'string',,},
  // supplierIds: {title: '默认供应商',order: 5,view: 'sel_search', type: 'string',,},
  description: {title: '简述',order: 6,view: 'umeditor', type: 'string',},
  // status: {title: '状态',order: 7,view: 'list', type: 'string',,},
  categoryIds: {title: '商品分类',order: 8,view: 'text', type: 'string',},
};
