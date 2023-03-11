import Layout from '@/layout'

export default {
  path: '/enterprise',
  component: Layout,
  children: [
    {
      path: '',
      name: 'enterprise',
      component: () => import('@/views/enterprise'),
      meta: {
        title: '企业管理'
      }
    }
  ]
}
