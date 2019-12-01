import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import uuidv4 from 'uuid/v4'

import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
  },
  state: {
    addNotePanelShow: false,
    lists: [],
    notes: []
  },
  mutations: {
    ADD_LIST: (state, list) => {
      state.lists.push({
        id: uuidv4(),
        ...list
      })
    },
    DELETE_LIST: (state, list) => {
      const index = state.lists.findIndex(i => i.id === list.id)
      state.lists.splice(index, 1)
    },
    PUT_LIST: (state, list) => {
      const index = state.lists.findIndex(i => i.id === list.id)
      state.lists.splice(index, 1, list)
    },

    ADD_NOTE: (state, note) => {
      state.notes.push({
        id: uuidv4(),
        date_create: +new Date(),
        ...note,
      })
    },
    REMOVE_NOTE: (state, note) => {
      const index = state.notes.findIndex(i => i.id === note.id)
      state.notes.splice(index, 1)
    },

    SAVE_STORE: () => { /** save store manualy */ },
    SET_ADD_NOTE_PANEL_SHOW: (state, val) => { state.addNotePanelShow = val }
  },
  plugins: [
    createPersistedState({
      reducer: state => {
        const saving = ['lists', 'notes'].reduce((acc, name) => {
          acc[name] = state[name]
          return acc
        }, {})

        return saving
      }
    })
  ]
})
