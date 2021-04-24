const state = {
  logs: []
}

const mutations = {
  ADD_ERROR_LOG: (state, log) => {
    console.log('log1', log)
    state.logs.push(log)
  },
  CLEAR_ERROR_LOG: (state) => {
    state.logs.splice(0)
  }
}

const actions = {
  addErrorLog({ commit }, log) {
    console.log('log2', log)
    commit('ADD_ERROR_LOG', log)
  },
  clearErrorLog({ commit }) {
    console.log('log3')
    commit('CLEAR_ERROR_LOG')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
