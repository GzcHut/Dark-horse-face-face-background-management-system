import Layout from '@/layout'

export default {
  path: '/background',
  component: Layout,
  meta: {
    title: '后台管理'
  },
  children: [
    {
      path: 'user',
      component: () => import('@/views/background/user'),
      meta: {
        title: '用户'
      }
    },
    {
      path: 'menu',
      component: () => import('@/views/background/menu'),
      meta: {
        title: '菜单'
      }
    },
    {
      path: 'permissions',
      component: () => import('@/views/background/permissions'),
      meta: {
        title: '权限'
      }
    },
    {
      path: 'log',
      component: () => import('@/views/background/log'),
      meta: {
        title: '日志'
      }
    }

  ]
}
