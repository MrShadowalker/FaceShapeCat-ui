import { FormSchema } from '/@/components/Form';

// 仓库基础表单
export function useBasicFormSchema() {
  const basicFormSchema: FormSchema[] = [
    {
      label: '',
      field: 'id',
      component: 'Input',
      show: false,
    },
    {
      field: 'parentId',
      label: '所属部门',
      component: 'TreeSelect',
      componentProps: {
        treeData: [],
        placeholder: '无',
        dropdownStyle: { maxHeight: '200px', overflow: 'auto' },
      },
    },
    {
      field: 'departName',
      label: '部门名称',
      component: 'Input',
      componentProps: {
        placeholder: '请输入机构/仓库名称',
      },
      rules: [{ required: true, message: '机构名称不能为空' }],
    },
    // {
    //   field: 'orgCode',
    //   label: '机构编码',
    //   component: 'Input',
    //   componentProps: {
    //     placeholder: '请输入机构编码',
    //   },
    // },
    // {
    //   field: 'orgCategory',
    //   label: '机构类型',
    //   component: 'RadioButtonGroup',
    //   componentProps: { options: [] },
    // },
    // {
    //   field: 'departOrder',
    //   label: '排序',
    //   component: 'InputNumber',
    //   componentProps: {},
    // },
    // {
    //   field: 'mobile',
    //   label: '电话',
    //   component: 'Input',
    //   componentProps: {
    //     placeholder: '请输入电话',
    //   },
    // },
    // {
    //   field: 'fax',
    //   label: '传真',
    //   component: 'Input',
    //   componentProps: {
    //     placeholder: '请输入传真',
    //   },
    // },
    // {
    //   field: 'address',
    //   label: '地址',
    //   component: 'Input',
    //   componentProps: {
    //     placeholder: '请输入地址',
    //   },
    // },
    // {
    //   field: 'memo',
    //   label: '备注',
    //   component: 'InputTextArea',
    //   componentProps: {
    //     placeholder: '请输入备注',
    //   },
    // },
  ];
  return { basicFormSchema };
}

// 机构类型选项
export const orgCategoryOptions = {
  // 一级仓库
  root: [{ value: '1', label: '公司' }],
  // 子级仓库
  child: [
    { value: '2', label: '仓库' },
    { value: '3', label: '岗位' },
  ],
};
