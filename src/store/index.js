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
        id: null,
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
    categoryList: [{
        id: 0,
        text: 'Все модели'
      },
      {
        id: 1,
        text: 'Эконом'
      },
      {
        id: 2,
        text: 'Премиум'
      }
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
    carVariant: [{
        id: 0,
        name: 'ELANTRA',
        categoryId: 2,
        description: '',
        thumbnail: require('../assets/img/car.png'),
        priceMin: 12000,
        priceMax: 15000,
        colors: [
          'Любой',
          'Голубой',
          'Красный'
        ]
      },
      {
        id: 1,
        name: 'i30 N',
        categoryId: 1,
        description: '',
        thumbnail: require('../assets/img/car.png'),
        priceMin: 10000,
        priceMax: 32000,
        colors: [
          'Любой',
          'Голубой',
          'Зеленый'
        ]
      },
      {
        id: 2,
        name: 'CRETA',
        categoryId: 2,
        description: '',
        thumbnail: require('../assets/img/car.png'),
        priceMin: 12000,
        priceMax: 15000,
        colors: [
          'Любой',
          'Синий',
          'Красный'
        ]
      },
      {
        id: 3,
        name: 'SONATA',
        categoryId: 1,
        description: '',
        thumbnail: require('../assets/img/car.png'),
        priceMin: 10000,
        priceMax: 32000,
        colors: [
          'Любой',
          'Голубой',
          'Красный'
        ]
      }
    ],
  },
  mutations: {
    setOrderCityValue(state, value) {
      state.order.find((item) => item.type === "city").value = value;
    },
    setOrderPointValue(state, value) {
      state.order.find((item) => item.type === "point").value = value;
    },
    setCarValue(state, id) {
      const car = state.carVariant.find(item => item.id === id);
      const order = state.order.find((item) => item.type === "model");
      if (id !== null) {
        order.value = car.name;
      } else {
        order.value = '';
      }

      order.id = car.id;
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
    getCategoryList(state) {
      return state.categoryList;
    },
    getFilteredOrder(state) {
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
    getOrderModel(state) {
      return state.order.find((item) => item.type === "model");
    },
    getCityVariant(state) {
      return state.cityVariant;
    },
    getPointVariant(state) {
      return state.pointVariant;
    },
    getCarVariant: (state) => (categoryId) => {
      if (categoryId) {
        return state.carVariant.filter(item => item.categoryId === categoryId);
      }
      return state.carVariant;
    },
    getCar: (state) => (id) => {
      return state.carVariant.find(item => item.id === id);
    }
  }
})