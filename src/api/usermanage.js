// 用户资料展示，此请求也只有一个
import request from '@/utils/request'

// 用户信息
export function getUserInfoActionAPI() {
  return request({
    url: '/frame/profile',
    method: 'post'
  })
}
