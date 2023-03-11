import Vue from 'vue'
import Router from 'vue-router'

import backgroundRouter from './modules/background'
import enterpriseRouter from './modules/enterprise'
import questionbankRouter from './modules/questionbank'
import disciplineRouter from './modules/discipline'
import interviewskillsRouter from './modules/interviewskills'
const asyncRouter = [
  backgroundRouter,
  enterpriseRouter,
  questionbankRouter,
  disciplineRouter,
  interviewskillsRouter
]

Vue.use(Router)

import Layout from '@/layout'


export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '数据概览', icon: 'dashboard' }
    }]
  },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [...constantRoutes, ...asyncRouter]
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
