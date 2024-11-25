import { unref } from 'vue';
import { defHttp } from '/@/utils/http/axios';
import { useMessage } from '/@/hooks/web/useMessage';

const { createConfirm } = useMessage();

export enum Api {
  queryDepartTreeSync = '/sys/sysDepart/queryDepartTreeSync',
  save = '/sys/sysDepart/add',
  edit = '/sys/sysDepart/edit',
  delete = '/sys/sysDepart/delete',
  deleteBatch = '/sys/sysDepart/deleteBatch',
  exportXlsUrl = '/sys/sysDepart/exportXls',
  importExcelUrl = '/sys/sysDepart/importExcel',

  roleQueryTreeList = '/sys/role/queryTreeList',
  queryDepartPermission = '/sys/permission/queryDepartPermission',
  saveDepartPermission = '/sys/permission/saveDepartPermission',

  dataRule = '/sys/sysDepartPermission/datarule',

  getCurrentUserDeparts = '/sys/user/getCurrentUserDeparts',
  selectDepart = '/sys/selectDepart',
  getUpdateDepartInfo = '/sys/user/getUpdateDepartInfo',
  doUpdateDepartInfo = '/sys/user/doUpdateDepartInfo',
  changeDepartChargePerson = '/sys/user/changeDepartChargePerson',



  evDisburseAdd = '/youran-boot/evDisburse/add',
  evAdjustAdd = '/youran-boot/evAdjust/add',
  
}

/**
 * 获取仓库树列表
 */
export const queryDepartTreeSync = (params?) => defHttp.get({ url: Api.queryDepartTreeSync, params });

/**
 * 保存或者更新仓库角色
 */
export const saveOrUpdateDepart = (params, isUpdate) => {
  if (isUpdate) {
    return defHttp.put({ url: Api.edit, params });
  } else {
    return defHttp.post({ url: Api.save, params });
  }
};

/**
 * 批量删除仓库角色
 */
export const deleteBatchDepart = (params, confirm = false) => {
  return new Promise((resolve, reject) => {
    const doDelete = () => {
      resolve(defHttp.delete({ url: Api.deleteBatch, params }, { joinParamsToUrl: true }));
    };
    if (confirm) {
      createConfirm({
        iconType: 'warning',
        title: '删除',
        content: '确定要删除吗？',
        onOk: () => doDelete(),
        onCancel: () => reject(),
      });
    } else {
      doDelete();
    }
  });
};

/**
 * 获取权限树列表
 */
export const queryRoleTreeList = (params?) => defHttp.get({ url: Api.roleQueryTreeList, params });
/**
 * 查询仓库权限
 */
export const queryDepartPermission = (params?) => defHttp.get({ url: Api.queryDepartPermission, params });
/**
 * 保存仓库权限
 */
export const saveDepartPermission = (params) => defHttp.post({ url: Api.saveDepartPermission, params });

/**
 *  查询仓库数据权限列表
 */
export const queryDepartDataRule = (functionId, departId, params?) => {
  let url = `${Api.dataRule}/${unref(functionId)}/${unref(departId)}`;
  return defHttp.get({ url, params });
};
/**
 * 保存仓库数据权限
 */
export const saveDepartDataRule = (params) => defHttp.post({ url: Api.dataRule, params });
/**
 * 获取登录用户仓库信息
 */
export const getUserDeparts = (params?) => defHttp.get({ url: Api.getCurrentUserDeparts, params });
/**
 * 切换选择仓库
 */
export const selectDepart = (params?) => defHttp.put({ url: Api.selectDepart, params });

/**
 * 编辑仓库前获取仓库相关信息
 * @param id
 */
export const getUpdateDepartInfo = (id) => defHttp.get({ url: Api.getUpdateDepartInfo, params: {id} });

/**
 * 编辑仓库
 * @param params
 */
export const doUpdateDepartInfo = (params) => defHttp.put({ url: Api.doUpdateDepartInfo, params });

/**
 * 删除仓库
 * @param id
 */
export const deleteDepart = (id) => defHttp.delete({ url: Api.delete, params:{ id } }, { joinParamsToUrl: true });

/**
 * 设置负责人 取消负责人
 * @param params
 */
export const changeDepartChargePerson = (params) => defHttp.put({ url: Api.changeDepartChargePerson, params });


export const evDisburseAdd = (params) => defHttp.post({ url: Api.evDisburseAdd, params });
export const evAdjustAdd = (params) => defHttp.post({ url: Api.evAdjustAdd, params });
