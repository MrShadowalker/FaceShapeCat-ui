import { defHttp } from '/@/utils/http/axios';
import { useMessage } from "/@/hooks/web/useMessage";
import { util_d$1 } from 'echarts/types/dist/shared';

const { createConfirm } = useMessage();

enum Api {
  list = '/evSku/evSku/list',
  save='/evSku/evSku/add',
  edit='/evSku/evSku/edit',
  saveVo='/evSku/evSku/addVo',
  editVo='/evSku/evSku/editVo',
  deleteOne = '/evSku/evSku/delete',
  deleteBatch = '/evSku/evSku/deleteBatch',
  importExcel = '/evSku/evSku/importExcel',
  exportXls = '/evSku/evSku/exportXls',
  specList = '/evSpec/evSpec/list',
}

/**
 * 导出api
 * @param params
 */
export const getExportUrl = Api.exportXls;

/**
 * 导入api
 */
export const getImportUrl = Api.importExcel;

/**
 * 列表接口
 * @param params
 */
export const list = (params) => defHttp.get({ url: Api.list, params:{...params,pageNo:1,pageSize:1000} });

export const specList = (params) => {
  return defHttp.get({ url: Api.specList, params });
}

/**
 * 删除单个
 * @param params
 * @param handleSuccess
 */
export const deleteOne = (params,handleSuccess) => {
  return defHttp.delete({url: Api.deleteOne, params}, {joinParamsToUrl: true}).then(() => {
    handleSuccess();
  });
}

/**
 * 批量删除
 * @param params
 * @param handleSuccess
 */
export const batchDelete = (params, handleSuccess) => {
  createConfirm({
    iconType: 'warning',
    title: '确认删除',
    content: '是否删除选中数据',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      return defHttp.delete({url: Api.deleteBatch, data: params}, {joinParamsToUrl: true}).then(() => {
        handleSuccess();
      });
    }
  });
}

/**
 * 保存或者更新
 * @param params
 * @param isUpdate
 */
export const saveOrUpdate = (params, isUpdate) => {
  let url = isUpdate ? Api.editVo : Api.saveVo;
  return defHttp.post({ url: url, params }, { isTransformResponse: false });
}
