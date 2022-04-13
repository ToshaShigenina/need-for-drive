import Vue from 'vue'
import Vuex from 'vuex'

import slides from './slides'
import api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    slides,
    api
  },
  state: {
    orderList: [{
        type: "city",
        label: "Город",
        value: {
          id: null,
          name: ""
        },
      },
      {
        type: "point",
        label: "Пункт выдачи",
        value: {
          id: null,
          address: ''
        },
      },
      {
        type: "model",
        label: "Модель",
        value: {
          id: null,
          name: ''
        },
      },
      {
        type: "color",
        label: "Цвет",
        value: "",
      },
      {
        type: "period",
        label: "Длительность аренды",
        value: {
          dateFrom: null,
          dateTo: null
        },
      },
      {
        type: "rate",
        label: "Тариф",
        value: {
          name: '',
          id: null
        },
      },
      {
        type: "isFullTank",
        label: "Полный бак",
        value: false,
      },
      {
        type: "isNeedChildChair",
        label: "Детское кресло",
        value: false,
      },
      {
        type: "isRightWheel",
        label: "Правый руль",
        value: false,
      },
    ],
    cityVariant: [],
    pointVariant: [],
    modelVariant: [],
    categoryList: [],
    rateList: [],
  },
  mutations: {
    setOrderCityValue(state, value) {
      state.orderList.find((item) => item.type === "city").value = value;
    },
    setOrderPointValue(state, value) {
      state.orderList.find((item) => item.type === "point").value = value;
    },
    setCityVariant(state, data) {
      state.cityVariant = data.data;
      state.orderList.find((item) => item.type === "city").value = state.cityVariant[0];
    },
    setPointVariant(state, data) {
      state.pointVariant = data.data;
    },
    setModelVariant(state, data) {
      state.modelVariant = data.data;
    },
    setCategoryList(state, data) {
      state.categoryList = data.data;
    },
    setRateList(state, data) {
      state.rateList = data.data;
    }
  },
  actions: {
    loadCityVariant({
      dispatch
    }) {
      dispatch('loadData', {
        table: 'city',
        mutation: 'setCityVariant'
      })
    },
    loadPointVariant({
      dispatch
    }) {
      dispatch('loadData', {
        table: 'point',
        mutation: 'setPointVariant'
      })
    }
  },
  getters: {
    getOrder(state) {
      return state.orderList;
    },
    getOrderCity(state) {
      return state.orderList.find((item) => item.type === "city");
    },
    getOrderPoint(state) {
      return state.orderList.find((item) => item.type === "point");
    },
    getOrderModel(state) {
      return state.orderList.find((item) => item.type === "model");
    },
    getOrderColor(state) {
      return state.orderList.find((item) => item.type === "color");
    },
    getOrderPeriod(state) {
      return state.orderList.find((item) => item.type === "period");
    },
    getOrderRate(state) {
      return state.orderList.find((item) => item.type === "rate");
    },
    getOrderTank(state) {
      return state.orderList.find((item) => item.type === "isFullTank");
    },
    getOrderChair(state) {
      return state.orderList.find((item) => item.type === "isNeedChildChair");
    },
    getOrderWheel(state) {
      return state.orderList.find((item) => item.type === "isRightWheel");
    },
    getCityVariant(state) {
      return state.cityVariant;
    },
    getPointVariant(state) {
      return state.pointVariant;
    },
    getFilteredPointVariant: (state) => (city) => {
      if (city && state.pointVariant.length) {
        return state.pointVariant.filter(item => {
          if (item.cityId) {
            return item.cityId.name === city;
          }
        });
      }
      return state.pointVariant;
    }
  }
})