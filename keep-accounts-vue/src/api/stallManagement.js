import request from '@/utils/request'

/**
 * 获取摊位管理列表
 * @param {*} query
 * @returns
 */
export function getStallManagementListAPI(params) {
  return request({
    url: '/demo/demobase/queryDemoBasePage',
    method: 'GET',
    params
  })
}

/**
 * 修改摊位密码
 * @param {*} data
 * @returns
 */
export function updateStallPasswordAPI(data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: '/demo/demobase/updatePassword',
    method: 'POST',
    data
  })
}

/**
 * 批量导出二维码
 * @param {*} params
 * @returns
 */
export function exportQrCodeAPI(params) {
  return request({
    url: '/demo/demobase/exportBatchQrCode',
    method: 'GET',
    responseType: 'blob',
    params
  })
}
