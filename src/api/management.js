// 企业管理
import request from '@/utils/request'

// 获取企业数据
export function getEnterpriseAPI(query) {
  return request({
    url: '/companys',
    method: 'get',
    params: query
  })
}
