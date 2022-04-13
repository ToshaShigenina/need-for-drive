import Vue from 'vue'
import Vuex from 'vuex'

import city from './city'
import point from './point'
import model from './model'
import category from './category'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    city,
    point,
    model,
    category
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
    rateList: [],
  },
  mutations: {
    setOrderCityValue(state, value) {
      state.orderList.find((item) => item.type === "city").value = value;
    },
    setOrderPointValue(state, value) {
      state.orderList.find((item) => item.type === "point").value = value;
    },
    setOrderModelValue(state, value) {
      state.orderList.find((item) => item.type === "model").value = value;
    },
    setRateList(state, data) {
      state.rateList = data.data;
    }
  },
  actions: {},
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
  }
})