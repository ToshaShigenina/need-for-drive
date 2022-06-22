import api from '@/service/api';

export default {
  state: () => ({
    orderStatuses: [],
    statusesLoadError: null
  }),
  mutations: {
    setOrderStatuses (state, data) {
      state.orderStatuses = data.data;
    },
    setStetusesLoadError (state, error) {
      state.statusesLoadError = error;
    }
  },
  actions: {
    loadOrderStatuses ({
      commit
    }) {
      commit('setStetusesLoadError', null);
      api.getOrderStatuses()
        .then(data => commit('setOrderStatuses', data))
        .catch(error => {
          commit('setStetusesLoadError', error.message);
        });
    },
  },
  getters: {
    getOrderStatuses (state) {
      return state.orderStatuses;
    },
    getNewStatus (state) {
      return state.orderStatuses[ 3 ];
    },
    getConfirmStatus (state) {
      return state.orderStatuses[ 0 ];
    },
    getCancelStatus (state) {
      return state.orderStatuses[ 1 ];
    },
    getStatusesLoadError (state) {
      return state.statusesLoadError;
    }
  }
};