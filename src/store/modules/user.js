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
    const resp = await getUserInfoActionAPI()
    console.log(resp)
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

