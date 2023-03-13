// 题库管理
import request from '@/utils/request'

// 获取基础题库列表
export function getFQuestionListAPI(query) {
  return request({
    url: '/questions',
    method: 'get',
    params: query
  })
}

// 获取精选题库列表
export function getSQuestionListAPI(query) {
  return request({
    url: '/questions/choice',
    method: 'get',
    params: query
  })
}

// 获取组题列表 
export function getGQuestionListAPI(query) {
  return request({
    url: '/questions/randoms',
    method: 'get',
    params: query
  })
}
