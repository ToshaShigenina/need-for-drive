import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slides: [{
        title: "Бесплатная парковка",
        description: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
        class: "slide_parking",
        link: {
          url: "#",
          text: "Подробнее",
        },
      },
      {
        title: "Страховка",
        description: "Полная страховка страховка автомобиля",
        class: "slide_insurance",
        link: {
          url: "#",
          text: "Подробнее",
        },
      },
      {
        title: "Бензин",
        description: "Полный бак на любой заправке города за наш счёт",
        class: "slide_petrol",
        link: {
          url: "#",
          text: "Подробнее",
        },
      },
      {
        title: "Обслуживание",
        description: "Автомобиль проходит еженедельное ТО",
        class: "slide_service",
        link: {
          url: "#",
          text: "Подробнее",
        },
      },
    ],
    order: [{
        type: "city",
        label: "Город",
        value: "Ульяновск",
      },
      {
        type: "point",
        label: "Пункт выдачи",
        value: "",
      },
      {
        type: "model",
        label: "Модель",
        value: "",
      },
      {
        type: "color",
        label: "Цвет",
        value: "",
      },
      {
        type: "period",
        label: "Длительность аренды",
        value: "",
      },
      {
        type: "rate",
        label: "Тариф",
        value: "",
      },
      {
        type: "fuel",
        label: "Полный бак",
        value: "",
      },
      {
        type: "child-seat",
        label: "Детское кресло",
        value: "",
      },
      {
        type: "right-hand-drive",
        label: "Правый руль",
        value: "",
      },
    ],
    cityVariant: [
      "Екатеринбург",
      "Ульяновск",
      "Уфа",
      "Москва",
      "Санкт-Петербург",
      "Казань",
    ],
    pointVariant: [
      "Екатеринбург",
      "Ульяновск",
      "Уфа",
      "Москва",
      "Санкт-Петербург",
      "Казань",
    ],
  },
  mutations: {
    setOrderCityValue(state, value) {
      state.order.find((item) => item.type === "city").value = value;
    },
    setOrderPointValue(state, value) {
      state.order.find((item) => item.type === "point").value = value;
    }
  },
  actions: {},
  getters: {
    getSlides(state) {
      return state.slides;
    },
    getOrder(state) {
      return state.order;
    },
    getFilteredOrder (state) {
      return state.order.filter(
        (item) => item.value && item.type !== "city" && item.type !== "point"
      );
    },
    getOrderCity(state) {
      return state.order.find((item) => item.type === "city");
    },
    getOrderPoint(state) {
      return state.order.find((item) => item.type === "point");
    },
    getCityVariant(state) {
      return state.cityVariant;
    },
    getPointVariant(state) {
      return state.pointVariant;
    }
  }
})