import api from '@/service/api'
// import isBase64 from '@/plugins/isbase64'

export default {
  state: () => ({
    modelVariant: [],
    loadModels: false,
    count: 0,
  }),
  mutations: {
    setModelVariant(state, data) {
      state.modelVariant = data.data;
      state.count = data.count;
      state.loadModels = true;
      /* state.modelVariant = data.data.filter(item => {
        return !!(item.number && item.thumbnail.path && isBase64(item.thumbnail.path))
      }); */
    },
  },
  actions: {
    loadModelVariant({
      commit,
      state
    }, query) {
      state.loadModels = false;
      api.getCars(query)
        .then(data => commit('setModelVariant', data))
    },
  },
  getters: {
    getModelVariant (state) {
      return state.modelVariant;
    },
    getModelsCount(state) {
      return state.count;
    },
    getLoadModels(state) {
      return state.loadModels;
    }
  }
}