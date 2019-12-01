import repositoryFactory from '@/repositories/repository-factory'
const authRepository = repositoryFactory('auth')

export default {
    namespaced: true,
    state: {
        loading: false,
        token: '',
        user: {},
    },
    mutations: {
        SET_TOKEN: (state, v) => { state.token = v },
        SET_LOADING: (state, v) => { state.loading = v },
        SET_USER: (state, v) => { state.user = v },
        RESET_USER: (state) => { state.user = {} },
        RESET_TOKEN: (state) => { state.token = '' }
    },
    actions: {
        getUserInfo ({ commit }) {
            commit('SET_LOADING', true)
            return authRepository.profile()
                .then((user) => {
                    commit('SET_USER', user)
                    return user
                })
                .finally(() => {
                    commit('SET_LOADING', false)
                })
        }
    }
}
