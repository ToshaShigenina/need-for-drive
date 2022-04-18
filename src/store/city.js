import api from '@/service/api'

export default {
  state: () => ({
    cityVariant: []
  }),
  mutations: {
    setCityVariant(state, data) {
      state.cityVariant = data.data;
      // state.orderList.find((item) => item.type === "city").value = state.cityVariant[0];
    }
  },
  actions: {
    loadCityVariant({
      commit
    }) {
      api.getCities()
        .then(data => commit('setCityVariant', data))
    }
  },
  getters: {
    getCityVariant(state) {
      return state.cityVariant;
    }
  }
}