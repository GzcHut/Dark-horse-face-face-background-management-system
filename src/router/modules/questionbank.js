import Layout from '@/layout'

export default {
  path: '/questionbank',
  component: Layout,
  meta: {
    title: '题库管理'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/question-bank/list'),
      meta: {
        title: '基础题库'
      }
    },
    {
      path: 'choice',
      component: () => import('@/views/question-bank/choice'),
      meta: {
        title: '精选题库'
      }
    },
    {
      path: 'new',
      component: () => import('@/views/question-bank/new'),
      meta: {
        title: '试题录入'
      }
    },
    {
      path: 'randoms',
      component: () => import('@/views/question-bank/randoms'),
      meta: {
        title: '组题列表'
      }
    }
  ]
}
