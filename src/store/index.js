import Vue from 'vue'
import Vuex from 'vuex'

import {
  parse,
  format
} from '@/plugins/datetime'

import city from './city'
import point from './point'
import model from './model'
import category from './category'
import rate from './rate'
import services from './services'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    city,
    point,
    model,
    category,
    rate,
    services
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
          dateFrom: format(new Date()),
          dateTo: ''
        },
      },
      {
        type: "rate",
        label: "Тариф",
        value: {
          id: null
        },
      },
      {
        type: 'service',
        value: []
      }
    ],
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
      state.orderList.find((item) => item.type === "color").value = '';
    },
    setOrderColorValue(state, value) {
      state.orderList.find((item) => item.type === "color").value = value;
    },
    setOrderDateFromValue(state, value) {
      state.orderList.find((item) => item.type === "period").value.dateFrom = value;
    },
    setOrderDateToValue(state, value) {
      state.orderList.find((item) => item.type === "period").value.dateTo = value;
    },
    setOrderRateValue(state, value) {
      state.orderList.find((item) => item.type === "rate").value = value;
    },
    setOrderRateValueById(state, id) {
      if (id) {
        const value = state.rate.rateList.find(item => item.id === id)
        state.orderList.find((item) => item.type === "rate").value = value;
      }
    },
    setOrderServiceValue(state, value) {
      state.orderList.find((item) => item.type === "service").value = value;
    },
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
    getPeriod(state) {
      const dateFrom = state.orderList.find((item) => item.type === "period").value.dateFrom;
      const dateTo = state.orderList.find((item) => item.type === "period").value.dateTo;
      const generateStr = (value, param) => {
        return value ? ` ${value}${param}` : '';
      }
      if (dateFrom && dateTo) {
        let period = (new Date(parse(dateTo)).getTime() - new Date(parse(dateFrom)).getTime()) / 1000;
        const years = Math.trunc(period / (60 * 60 * 24 * 365));
        period -= (years * 60 * 60 * 24 * 365);
        const months = Math.trunc(period / (60 * 60 * 24 * 30));
        period -= months * 60 * 60 * 24 * 30;
        const weeks = Math.trunc(period / (60 * 60 * 24 * 7));
        period -= weeks * 60 * 60 * 24 * 7;
        const days = Math.trunc(period / (60 * 60 * 24));
        period -= days * 60 * 60 * 24;
        const hours = Math.trunc(period / (60 * 60));
        period -= hours * 60 * 60;
        const minutes = Math.trunc(period / 60);
        return generateStr(years, 'г') + generateStr(months, 'м') +
          generateStr(weeks, 'н') + generateStr(days, 'д') +
          generateStr(hours, 'ч') + generateStr(minutes, 'м');
      }
      return '';
    },
    getOrderDateFrom(state) {
      return state.orderList.find((item) => item.type === "period").value.dateFrom;
    },
    getOrderDateTo(state) {
      return state.orderList.find((item) => item.type === "period").value.dateTo;
    },
    getOrderRate(state) {
      return state.orderList.find((item) => item.type === "rate");
    },
    getOrderServiceList(state) {
      return state.orderList.find((item) => item.type === "service").value;
    },
    getOrderService: (state) => (name) => {
      const services = state.services.services;
      const servicesOrder = state.orderList.find((item) => item.type === "service").value;
      const find = servicesOrder.find((item) => item === name);
      if (find) return services.find(item => item.type === find);
      return false;
    }
  }
})