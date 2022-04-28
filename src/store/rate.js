import api from '@/service/api'

export default {
  state: () => ({
    rateList: []
  }),
  mutations: {
    setRateList(state, data) {
      state.rateList = data.data.filter(item => item.rateTypeId);
    },
  },
  actions: {
    loadRateList({
      commit
    }) {
      api.getRates()
        .then(data => commit('setRateList', data))
    },
  },
  getters: {
    getRateList(state) {
      return state.rateList;
    },
  }
}