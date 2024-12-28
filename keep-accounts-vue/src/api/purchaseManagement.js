import request from '@/utils/request'

/**
 * 获取采购记录列表
 * @param {*} params
 * @returns
 */
export function getPurchaseRecordsManagementListAPI(params) {
  return request({
    url: '/demo/demobase/goodsDealList',
    method: 'GET',
    params
  })
}

/**
 * 获取食安链条详情信息
 * @param {*} goodsDealDetailId
 * @returns
 */
export function getFoodSafetyChainDetailsAPI(goodsDealDetailId) {
  return request({
    url: `/demo/demobase/queryChain/${goodsDealDetailId}`,
    method: 'GET'
  })
}
