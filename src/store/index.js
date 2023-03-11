import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

import Persistence from 'vuex-persistedstate'

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user
  },
  getters,
  plugins: [ // 插件
    Persistence({
      key: 'Dark horse face face background management system',
      paths: ['app', 'settings', 'user'] // 需要本地存储的模块
    })
  ]
})

export default store
