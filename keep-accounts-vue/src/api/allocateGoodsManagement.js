import request from '@/utils/request'

/**
 * 获取配货记录列表
 * @param {*} params
 * @returns
 */
export function getAllocateGoodsManagementListAPI(params) {
  return request({
    url: '/demo/demobase/queryDemoGoodsDealSellerPagePC',
    method: 'GET',
    params
  })
}
