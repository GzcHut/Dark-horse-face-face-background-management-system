// 菜单管理
import request from '@/utils/request'

// 获取菜单列表
export function getMenuAPI() {
  return request({
    url: '/menus',
    method: 'get'
  })
}
