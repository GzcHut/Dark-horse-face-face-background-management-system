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
    method: 'post',
    data: formData
  })
}

// 获取用户详情，用于回显
export function revUserListAPI(dataId) {
  return request({
    url: `/users/${dataId}`,
    method: 'get'
  })
}

// 删除用户
export function delUserListAPI(dataId) {
  return request({
    url: `/users/${dataId}`,
    method: 'delete'
  })
}
