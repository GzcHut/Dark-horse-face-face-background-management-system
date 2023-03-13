// 面试技巧
import request from '@/utils/request'

// 获取面试文章列表数据
export function getEssayListAPI(query) {
  return request({
    url: '/articles',
    method: 'get',
    params: query
  })
}
