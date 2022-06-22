import api from '@/service/api';
import isBase64 from '@/plugins/isbase64';

export default {
  state: () => ({
    modelVariant: [],
    loadModels: false,
    count: 0,
    page: 1,
    limit: 6,
    modelLoadError: null,
  }),
  mutations: {
    setModelVariant (state, data) {
      state.modelVariant = data.data.map(item => {
        if (!item.thumbnail.path || !isBase64(item.thumbnail.path)) {
          item.thumbnail.path = require('../assets/img/car-placeholder.png');
        }
        return item;
      });
      state.count = data.count;
      state.loadModels = true;
    },
    setPage (state, page) {
      state.page = page;
    },
    setModelLoadError (state, error) {
      state.modelLoadError = error;
    }
  },
  actions: {
    loadModelVariant ({
      commit,
      state
    }, query) {
      state.loadModels = false;
      commit('setModelLoadError', null);
      api.getCars(query)
        .then(data => commit('setModelVariant', data))
        .catch(error => {
          commit('setModelLoadError', error.message);
        });
    },
  },
  getters: {
    getModelVariant (state) {
      return state.modelVariant;
    },
    getModelsCount (state) {
      return state.count;
    },
    getLimit (state) {
      return state.limit;
    },
    getPage (state) {
      return state.page;
    },
    getLoadModels (state) {
      return state.loadModels;
    },
    getModelLoadError (state) {
      return state.modelLoadError;
    }
  }
};