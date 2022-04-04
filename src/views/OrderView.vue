<template>
  <div class="wrapper wrapper_inner">
    <div class="container">
      <div class="row">
        <header-component />
      </div>

      <tabs-component :list="tabList">
        <template v-slot:tab-0>
          <div class="row justify-content-between">
            <div class="col-70">
              <div class="content point">
                <div class="point__form form">
                  <div class="form__group">
                    <label for="city">Город</label>
                    <div class="input input__search">
                      <input type="text" id="city" v-model="form.city" />
                      <button type="button" class="input__close"></button>
                    </div>
                  </div>
                  <div class="form__group">
                    <label for="point">Пункт выдачи</label>
                    <div class="input input__search">
                      <input type="text" id="point" v-model="form.point" />
                      <button type="button" class="input__close"></button>
                      <ul class="input__result">
                        <li>Увельский</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="map">
                  <p>Выбрать на карте:</p>
                  <img src="~@/assets/img/map.png" alt="">
                </div>
              </div>
            </div>
            <div class="col-30">
              <div class="order">
                <h2 class="order__heading">Ваш заказ:</h2>

                <ul class="order__list">
                  <li class="order__item">
                    <span>Пункт выдачи</span>
                    <span>
                      Ульяновск,<br />
                      Нариманова 42
                    </span>
                  </li>
                </ul>

                <p class="order__result">
                  <strong>Цена:</strong> от 8 000 до 12 000 ₽
                </p>

                <button type="button" disabled class="btn mw-100">
                  Выбрать модель
                </button>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:tab-1> Content 2 </template>
        <template v-slot:tab-2> Content 3 </template>
        <template v-slot:tab-3> Content 4 </template>
      </tabs-component>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import TabsComponent from "@/components/TabsComponent.vue";

export default {
  name: "OrderView",
  components: {
    HeaderComponent,
    TabsComponent,
  },
  data() {
    return {
      form: {
        city: "",
        point: "",
        model: "",
      },
      tabList: [
        {
          text: "Местоположение",
          disabled: false,
        },
        {
          text: "Модель",
          disabled: false,
        },
        {
          text: "Дополнительно",
          disabled: false,
        },
        {
          text: "Итого",
          disabled: false,
        },
      ],
    };
  },
  computed: {
    name() {
      return this.$store.getters.getName;
    },
  },
};
</script>
