import Layout from '@/layout'

export default {
  path: '/discipline',
  component: Layout,
  meta: {
    title: '学科管理'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/discipline/list'),
      meta: {
        title: '学科'
      }
    },
    {
      path: 'directorys',
      component: () => import('@/views/discipline/directorys'),
      meta: {
        title: '目录'
      }
    },
    {
      path: 'tags',
      component: () => import('@/views/discipline/tags'),
      meta: {
        title: '标签'
      }
    }
  ]
}
