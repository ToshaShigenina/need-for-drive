import api from '@/service/api'

export default {
  state: () => ({
    orderStatuses: []
  }),
  mutations: {
    setOrderStatuses(state, data) {
      state.orderStatuses = data.data;
    },
  },
  actions: {
    loadOrderStatuses({
      commit
    }) {
      api.getOrderStatuses()
        .then(data => commit('setOrderStatuses', data))
    },
  },
  getters: {
    getOrderStatuses(state) {
      return state.orderStatuses;
    },
    getNewStatus(state) {
      return state.orderStatuses[3];
    },
    getConfirmStatus(state) {
      return state.orderStatuses[0];
    },
    getCancelStatus(state) {
      return state.orderStatuses[1];
    }
  }
}