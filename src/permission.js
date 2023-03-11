import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// // 白名单，无需登陆便可以访问的
const whileList = ['/login', '/404']

router.beforeEach(async (to, form, next) => {
  NProgress.start()
  // 获取token
  const token = store.state.user.token

  if (token !== '') { // 获取到token
    if (whileList.includes(to.path)) {
      next('/')
      NProgress.done()
    } else {
      // if (!store.state.user.userInfo.userId) {
      //   await store.dispatch('user/getuserInfoAction')
      // }
      next()
    }
  } else { // 没有获取到token
    if (whileList.includes(to.path)) {
      next()
    } else {
      // 跳转至登录，并携带回跳地址
      next(`/login?redirectUrl=${to.fullPath}`)
      NProgress.done()
    }
  }
})

// 注册全局后置守卫
router.afterEach(() => {
  NProgress.done()
})
