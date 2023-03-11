import request from '@/utils/request'

// 用户信息
export function getUserInfoActionAPI() {
  return request({
    url: '/frame/profile',
    method: 'post'
  })
}
