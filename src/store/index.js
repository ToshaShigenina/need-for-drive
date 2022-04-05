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
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getSlides(state) {
      return state.slides;
    }
  }
})