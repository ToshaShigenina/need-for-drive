import api from '@/service/api';

export default {
  state: () => ({
    rateList: [],
    rateLoadError: null,
  }),
  mutations: {
    setRateList (state, data) {
      state.rateList = data.data.filter(item => item.rateTypeId);
    },
    setRateLoadError (state, error) {
      state.rateLoadError = error;
    }
  },
  actions: {
    loadRateList ({
      commit
    }) {
      commit('setRateLoadError', null);
      api.getRates()
        .then(data => commit('setRateList', data))
        .catch(error => {
          commit('setRateLoadError', error.message);
        });
    },
  },
  getters: {
    getRateList (state) {
      return state.rateList.filter(item => item.rateTypeId);
    },
    getRateLoadError (state) {
      return state.rateLoadError;
    }
  }
};