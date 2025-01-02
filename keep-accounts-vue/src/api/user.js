import request from '@/utils/request'

export function loginAPI(data) {
  return request({
    url: '/admin/employee/login',
    method: 'post',
    data
  })
}

