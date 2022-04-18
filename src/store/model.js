import api from '@/service/api'
import isBase64 from '@/plugins/isbase64'

export default {
  state: () => ({
    modelVariant: []
  }),
  mutations: {
    setModelVariant(state, data) {
      state.modelVariant = data.data.filter(item => {
        return !!(item.number && item.thumbnail.path && isBase64(item.thumbnail.path))
      });
    },
  },
  actions: {
    loadModelVariant({
      commit
    }) {
      api.getCars()
        .then(data => commit('setModelVariant', data))
    },
  },
  getters: {
    getModelVariant: (state) => (categoryId) => {
      if (categoryId) {
        return state.modelVariant.filter(item => item.categoryId.id === categoryId);
      }
      return state.modelVariant;
    },
  }
}