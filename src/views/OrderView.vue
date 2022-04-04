<template>
  <div class="wrapper wrapper_inner">
    <div class="container">
      <div class="row">
        <header-component />
      </div>

      <tabs-component :list="tabList" :active="active" @to-tab="toTab">
        <template v-slot:tab-0>
          <div class="row justify-content-between">
            <div class="col-70">
              <div class="content point">
                <div class="point__form form">
                  <div class="form__group">
                    <label for="city" class="text-right" style="width: 94px"
                      >Город</label
                    >
                    <input-component
                      v-model="city"
                      type="city"
                      :data="cityVariant"
                      placeholder="Начните вводить город..."
                    />
                  </div>
                  <div class="form__group">
                    <label for="point" class="text-right" style="width: 94px"
                      >Пункт выдачи</label
                    >
                    <input-component
                      v-model="point"
                      type="point"
                      :data="pointVariant"
                      placeholder="Начните вводить пункт..."
                    />
                  </div>
                </div>

                <div class="map">
                  <p>Выбрать на карте:</p>
                  <img src="~@/assets/img/map.png" class="map__frame" alt="" />
                </div>
              </div>
            </div>
            <div class="col-30">
              <order-component :order="order">
                <template v-slot:btn>
                  <button
                    type="button"
                    class="btn mw-100"
                    :disabled="tabList[1].disabled"
                    @click="toTab(1)"
                  >
                    Выбрать модель
                  </button>
                </template>
              </order-component>
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
import OrderComponent from "@/components/OrderComponent.vue";
import InputComponent from "@/components/InputComponent.vue";

export default {
  name: "OrderView",
  components: {
    HeaderComponent,
    TabsComponent,
    OrderComponent,
    InputComponent,
  },
  data() {
    return {
      order: [
        {
          type: "city",
          label: "Город",
          value: "Ульяновск",
        },
        {
          type: "point",
          label: "Пункт выдачи",
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
      active: 0,
      tabList: [
        {
          text: "Местоположение",
          disabled: false,
        },
        {
          text: "Модель",
          disabled: true,
        },
        {
          text: "Дополнительно",
          disabled: true,
        },
        {
          text: "Итого",
          disabled: true,
        },
      ],
    };
  },
  computed: {
    name() {
      return this.$store.getters.getName;
    },
    city: {
      get() {
        return this.order.find((item) => item.type === "city").value;
      },
      set(value) {
        this.order.find((item) => item.type === "city").value = value;
      },
    },
    point: {
      get() {
        return this.order.find((item) => item.type === "point").value;
      },
      set(value) {
        this.order.find((item) => item.type === "point").value = value;
      },
    },
  },
  methods: {
    toTab(i) {
      if (!this.tabList[i].disabled) this.active = i;
    },
  },
};
</script>
