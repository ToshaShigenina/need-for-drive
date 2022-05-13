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
import statuses from './statuses'
import api from '@/service/api'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    city,
    point,
    model,
    category,
    rate,
    services,
    statuses
  },
  state: {
    order: {},
    orderList: {
      cityId: {
        label: "Город",
        value: {
          id: null,
          name: ""
        },
      },
      pointId: {
        label: "Пункт выдачи",
        value: {
          id: null,
          address: ''
        },
      },
      carId: {
        label: "Модель",
        value: {
          id: null,
          name: ''
        },
      },
      color: {
        label: "Цвет",
        value: "",
      },
      period: {
        label: "Длительность аренды",
        value: {
          dateFrom: format(new Date()),
          dateTo: ''
        },
      },
      rateId: {
        label: "Тариф",
        value: {
          id: null
        },
      },
      service: []
    },
    orderPrice: 0
  },
  mutations: {
    setOrderCityValue(state, value) {
      state.orderList.cityId.value = value;
    },
    setOrderPointValue(state, value) {
      state.orderList.pointId.value = value;
    },
    setOrderModelValue(state, value) {
      state.orderList.carId.value = value;
    },
    setOrderColorValue(state, value) {
      state.orderList.color.value = value;
    },
    setOrderDateFromValue(state, value) {
      state.orderList.period.value.dateFrom = value;
    },
    setOrderDateToValue(state, value) {
      state.orderList.period.value.dateTo = value;
    },
    setOrderRateValue(state, value) {
      state.orderList.rateId.value = value;
    },
    setOrderRateValueById(state, id) {
      if (id) {
        const value = state.rate.rateList.find(item => item.id === id)
        state.orderList.rateId.value = value;
      }
    },
    setOrderServiceValue(state, value) {
      state.orderList.service = value;
    },
    setOrderPrice(state, price) {
      state.orderPrice = price;
    },
    setOrderList(state) {
      if (state.order.id) {
        state.orderList.cityId.value = state.order.cityId;
        state.orderList.pointId.value = state.order.pointId;
        state.orderList.carId.value = state.order.carId;
        state.orderList.rateId.value = state.order.rateId;
        state.orderList.color.value = state.order.color;
        state.orderList.period.value.dateFrom = format(new Date(state.order.dateFrom));
        state.orderList.period.value.dateTo = format(new Date(state.order.dateTo));
        state.orderList.service = [
          (state.order.isFullTank ? "isFullTank" : null),
          (state.order.isNeedChildChair ? 'isNeedChildChair' : null),
          (state.order.isRightWheel ? 'isRightWheel' : null)
        ].filter(item => !!item);
        state.orderPrice = state.order.price;
      }
    },
    setOrder(state, data) {
      if (data) state.order = data.data;
      else state.order = {};
    },
    createOrder(state) {
      const orderStatusId = this.getters.getConfirmStatus;
      const cityId = state.orderList.cityId.value;
      const pointId = state.orderList.pointId.value;
      const carId = state.orderList.carId.value;
      const color = state.orderList.color.value;
      const dateFrom = new Date(parse(state.orderList.period.value.dateFrom)).getTime();
      const dateTo = new Date(parse(state.orderList.period.value.dateTo)).getTime();
      const rateId = state.orderList.rateId.value;
      const price = this.getters.getOrderPrice;
      const isFullTank = this.getters.getOrderService('isFullTank');
      const isNeedChildChair = this.getters.getOrderService('isNeedChildChair');
      const isRightWheel = this.getters.getOrderService('isRightWheel');
      state.order = {
        orderStatusId,
        cityId,
        pointId,
        carId,
        color,
        dateFrom,
        dateTo,
        rateId,
        price,
        isFullTank: !!isFullTank,
        isNeedChildChair: !!isNeedChildChair,
        isRightWheel: !!isRightWheel,
      }
    }
  },
  actions: {
    loadOrder({
      commit
    }, id) {
      return api.getOrder(null, id)
        .then(data => {
          commit('setOrder', data);
          commit('setOrderList');
        });
    },
    confirmOrder({
      state,
      commit,
    }) {
      commit('createOrder');
      return api.postOrder(JSON.stringify(state.order))
        .then(data => {
          commit('setOrder', data);
          return data;
        });
    },
    cancelOrder({
      state,
      commit,
      getters
    }) {
      state.order.orderStatusId = getters.getCancelStatus;
      return api.postOrder(JSON.stringify(state.order))
        .then((data) => {
          commit('setOrder', data);
        });
    }
  },
  getters: {
    getOrderList(state) {
      return state.orderList;
    },
    getOrderCity(state) {
      return state.orderList.cityId;
    },
    getOrderPoint(state) {
      return state.orderList.pointId;
    },
    getOrderModel(state) {
      return state.orderList.carId;
    },
    getOrderColor(state) {
      return state.orderList.color;
    },
    getOrderPeriod(state) {
      return state.orderList.period;
    },
    getPeriod(state) {
      const dateFrom = state.orderList.period.value.dateFrom;
      const dateTo = state.orderList.period.value.dateTo;
      const generateStr = (value, param) => value ? ` ${value}${param}` : '';

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
      return state.orderList.period.value.dateFrom;
    },
    getOrderDateTo(state) {
      return state.orderList.period.value.dateTo;
    },
    getOrderRate(state) {
      return state.orderList.rateId;
    },
    getOrderServiceList(state) {
      return state.orderList.service;
    },
    getOrderService: (state) => (name) => {
      const services = state.services.services;
      const servicesOrder = state.orderList.service;
      const find = servicesOrder.find((item) => item === name);
      if (find) return services.find(item => item.type === find);
      return false;
    },
    getOrderPrice(state) {
      return state.orderPrice;
    },
    getOrder(state) {
      return state.order;
    }
  }
})