import api from '@/service/api';

export default {
  state: () => ({
    cityVariant: [],
    loadCityError: null
  }),
  mutations: {
    setCityVariant (state, data) {
      state.cityVariant = data.data;
    },
    setLoadCityError (state, error) {
      state.loadCityError = error;
    }
  },
  actions: {
    loadCityVariant ({
      commit
    }) {
      commit('setLoadCityError', null);
      api.getCities()
        .then(data => commit('setCityVariant', data))
        .catch(error => {
          commit('setLoadCityError', error.message);
        });
    }
  },
  getters: {
    getCityVariant (state) {
      return state.cityVariant.filter(item => !!item.coords);
    },
    getLoadCityError (state) {
      return state.loadCityError;
    }
  }
};