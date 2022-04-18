import api from '@/service/api'

export default {
  state: () => ({
    categoryList: []
  }),
  mutations: {
    setCategoryList(state, data) {
      state.categoryList.push({
        id: 0,
        name: 'Все модели'
      });
      state.categoryList.push(...data.data);
    },
  },
  actions: {
    loadCategoryList({
      commit
    }) {
      api.getCategorys()
        .then(data => commit('setCategoryList', data))
    }
  },
  getters: {
    getCategoryList(state) {
      return state.categoryList;
    },
  }
}