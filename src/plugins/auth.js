import store from '@/store/'
import UnauthentificatedError from '@/classes/unauthentificated-error'

export default {
  axios: null,
  store: null,

  install(Vue, { axios, store }) {
    this.axios = axios
    this.store = store

    this.addInterceptors()

    if (localStorage['token']) {
      this.setToken(localStorage['token'])
      store.dispatch('user/getUserInfo')
    }
  },

  logout() {
    localStorage['token'] = ''
    delete this.axios.defaults.headers.common['Authorization']
    store.commit('user/RESET_USER')
    store.commit('user/RESET_TOKEN')
  },
  setToken(token) {
    localStorage['token'] = token
    store.commit('user/SET_TOKEN', token)
    this.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  },
  addInterceptors() {
    this.axios.interceptors.response.use(R => {
      const token = R.data.token

      if (token) {
        this.setToken(token)
      }

      return R
    }, E => {
      return Promise.reject(E)
    })

    this.axios.interceptors.response.use(R => {
      const badStatuses = [
        'Token is Invalid',
        'Token is Expired'
      ]
      if (R.data && R.data.status && badStatuses.includes(R.data.status)) {
        this.logout()

        throw new UnauthentificatedError(R.data.status)
      }
      return R
    }, E => {
      return Promise.reject(E)
    })
  }
}
