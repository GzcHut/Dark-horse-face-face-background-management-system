// 用户登录，此请求只有一个
import request from '@/utils/request'

// 用户登录
export function getLoginAPI(loginForm) {
  return request({
    url: '/frame/login',
    method: 'post',
    data: loginForm
  })
}


