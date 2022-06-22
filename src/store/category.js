import api from '@/service/api';

export default {
  state: () => ({
    categoryList: [],
    categoryActive: 0,
    categoryLoadError: null
  }),
  mutations: {
    setCategoryList (state, data) {
      const defaultCategory = {
        id: 0,
        name: 'Все модели'
      };
      state.categoryList = [ defaultCategory ].concat(data.data);
    },
    setCategoryActive (state, id) {
      state.categoryActive = id;
    },
    setCategoryLoadError (state, error) {
      state.error = error;
    }
  },
  actions: {
    loadCategoryList ({
      commit
    }) {
      commit('setCategoryLoadError', null);
      api.getCategorys()
        .then(data => commit('setCategoryList', data))
        .catch(error => {
          commit('setCategoryLoadError', error.message);
        });
    }
  },
  getters: {
    getCategoryList (state) {
      return state.categoryList;
    },
    getCategoryActive (state) {
      return state.categoryActive;
    },
    getCategoryLoadError (state) {
      return state.categoryLoadError;
    }
  }
};