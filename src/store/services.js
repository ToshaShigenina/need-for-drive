export default {
  state: () => ({
    services: [{
        type: "isFullTank",
        label: "Полный бак",
        price: 500
      },
      {
        type: "isNeedChildChair",
        label: "Детское кресло",
        price: 200
      },
      {
        type: "isRightWheel",
        label: "Правый руль",
        price: 1600
      },
    ]
  }),
  mutations: {},
  actions: {},
  getters: {
    getServices(state) {
      return state.services;
    },
    getFilteredServices: (state) => (filter) => {
      if (Array.isArray(filter)) {
        const result = [];
        filter.forEach(item => {
          const find = state.services.find(elem => elem.type === item)
          if (find) result.push(find);
        })
        return result;
      }
      return state.services.find(item => item.type === filter);
    },
  }
}