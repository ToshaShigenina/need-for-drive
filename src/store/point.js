import api from '@/service/api';

export default {
  state: () => ({
    pointVariant: [],
    pointLoadError: null
  }),
  mutations: {
    setPointVariant (state, data) {
      state.pointVariant = data.data;
    },
    setPointLoadError (state, error) {
      state.pointLoadError = error;
    }
  },
  actions: {
    loadPointVariant ({
      commit
    }) {
      commit('setPointLoadError', null);
      api.getPoints()
        .then(data => commit('setPointVariant', data))
        .catch(error => {
          commit('setPointLoadError', error.message);
        });
    },
  },
  getters: {
    getPointVariant (state) {
      return state.pointVariant.filter(item => !!item.cityId && !!item.coords);
    },
    getFilteredPointVariant: (state) => (city) => {
      if (city && state.pointVariant.length) {
        return state.pointVariant.filter(item => {
          if (item.cityId) {
            return item.cityId.name === city;
          }
        });
      }
      return state.pointVariant.filter(item => {
        if (item.cityId) return item;
      });
    },
    getPointLoadError (state) {
      return state.pointLoadError;
    }
  }
};