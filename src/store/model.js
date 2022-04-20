import api from '@/service/api'
// import isBase64 from '@/plugins/isbase64'

export default {
  state: () => ({
    modelVariant: [],
    count: 0,
  }),
  mutations: {
    setModelVariant(state, data) {
      console.log(data)
      state.modelVariant = data.data;
      state.count = data.count;
      /* state.modelVariant = data.data.filter(item => {
        return !!(item.number && item.thumbnail.path && isBase64(item.thumbnail.path))
      }); */
    },
  },
  actions: {
    loadModelVariant({
      commit
    }, query) {
      api.getCars(query)
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