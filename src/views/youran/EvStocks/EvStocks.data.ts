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
    title: '序号',
    dataIndex: 'batch',
    align: 'center',
    width: 80,
    customRender: function ({ text, record, index, column }) {
        return index + 1;
    },
  },
  {
    title: '店铺',
    align: "center",
    dataIndex: 'departId'
  },
  {
    title: '商品',
    align: "center",
    dataIndex: 'goodsId'
  },
  {
    title: '零售价',
    align: "center",
    dataIndex: 'price'
  },
  {
    title: '数量',
    align: "center",
    dataIndex: 'num'
  },
  {
    title: '总价值',
    align: "center",
    customRender:({record})=>{
      let str = record.num * record.price
      return str+'元'
    }
  },
];

//查询数据
export const searchFormSchema: FormSchema[] = [
];

//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '删除标志位',
    field: 'delFlag',
    component: 'InputNumber',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
  {
    label: '店铺',
    field: 'departId',
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
  delFlag: {title: '删除标志位',order: 0,view: 'number', type: 'number',},
  remark: {title: '备注',order: 1,view: 'text', type: 'string',},
  departId: {title: '店铺',order: 2,view: 'text', type: 'string',},
  goodsId: {title: '商品',order: 3,view: 'text', type: 'string',},
  num: {title: '数量',order: 4,view: 'number', type: 'number',},
};
