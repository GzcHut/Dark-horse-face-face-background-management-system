// 用户管理
import request from '@/utils/request'

// 用户列表
export function getUserListAPI(query) {
  return request({
    url: '/users',
    method: 'get',
    params: query
  })
}

// 用户添加
export function addUserListAPI(formData) {
  return request({
    url: '/users',
    method: 'get',
    data: formData
  })
}
