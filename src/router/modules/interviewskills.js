import Layout from '@/layout'

export default {
  path: '/interviewskills',
  component: Layout,
  children: [
    {
      path: '',
      name: 'interviewskills',
      component: () => import('@/views/interview-skills'),
      meta: {
        title: '面试技巧'
      }
    }
  ]
}
