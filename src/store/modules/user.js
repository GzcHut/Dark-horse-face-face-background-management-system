import { getLoginAPI } from '@/api/user'
import { getUserInfoActionAPI } from '@/api/usermanage'

const getDefaultState = () => {
  return {
    token: '',
    userInfo: {}
  }
}

const state = getDefaultState()

const mutations = {
  // 存储Token
  setToken(state, newToken) {
    state.token = newToken
  },
  // 存储用户信息
  setUserInfo: (state, userInfo) => {
    state.userInfo = userInfo
  },
  // 清空存储信息
  emptyToken(state, emptytoken) {
    state.token = emptytoken
  },
  emptyUserInfo(state, emptyuserinfo) {
    state.userInfo = emptyuserinfo
  }

}

const actions = {
  // 获取Token
  async getLogin({ commit }, loginFormRecessiveness) {
    const resp = await getLoginAPI(loginFormRecessiveness)
    const newToken = resp.data
    commit('setToken', newToken)
  },
  // 获取用户信息
  async getUserInfoAction({ commit }) {
    const { data } = await getUserInfoActionAPI()
    // console.log(data)
    const userInfo = data
    commit('setUserInfo', userInfo)
  },
  emptyTokenAction({ commit }) {
    const emptytoken = ''
    commit('emptyToken', emptytoken)
  },
  emptyUserInfoAction({ commit }) {
    const emptyuserinfo = {}
    commit('emptyUserInfo', emptyuserinfo)
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

