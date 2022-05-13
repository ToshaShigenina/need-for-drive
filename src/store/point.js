import api from '@/service/api'

export default {
  state: () => ({
    pointVariant: []
  }),
  mutations: {
    setPointVariant(state, data) {
      state.pointVariant = data.data;
    },
  },
  actions: {
    loadPointVariant({
      commit
    }) {
      api.getPoints()
        .then(data => commit('setPointVariant', data))
    },
  },
  getters: {
    getPointVariant(state) {
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
  }
}