// 学科管理
import request from '@/utils/request'

// 获取学科列表数据
export function getDisciplineListAPI(query) {
  return request({
    url: '/subjects',
    method: 'get',
    params: query
  })
}

// 获取目录列表数据
export function getDirectoryListAPI(query) {
  return request({
    url: '/directorys',
    method: 'get',
    params: query
  })
}

// 获取标签列表数据
export function getLabelListAPI(query) {
  return request({
    url: '/tags',
    method: 'get',
    params: query
  })
}
