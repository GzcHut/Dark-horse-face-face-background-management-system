// 权限组管理
import request from '@/utils/request'

// 权限组列表
export function getPermissionsAPI(query) {
  return request({
    url: '/permissions',
    method: 'get',
    params: query
  })
}
