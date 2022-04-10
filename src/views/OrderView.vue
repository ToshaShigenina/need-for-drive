<template>
  <div class="wrapper wrapper_inner">
    <div class="container">
      <div class="row">
        <header-component />
      </div>

      <tabs-component :list="tabs" :active="active" @to-tab="toTab">
        <template v-slot:tab-0>
          <div class="row justify-content-between">
            <div class="col-md-70 col-sm-60 col-100">
              <div class="content point">
                <div class="point__form form">
                  <input-text-component
                    v-model="city.value"
                    type="city"
                    :data="cityVariant"
                    :label="city.label"
                    width="94px"
                    placeholder="Начните вводить город..."
                  />
                  <input-text-component
                    v-model="point.value"
                    type="point"
                    :data="pointVariant"
                    :label="point.label"
                    width="94px"
                    placeholder="Начните вводить пункт..."
                  />
                </div>

                <map-component />
              </div>
            </div>
            <div class="col-md-30 col-sm-40 col-100">
              <order-component>
                <template v-slot:btn>
                  <button
                    type="button"
                    class="btn mw-100"
                    :disabled="tabs[1].disabled"
                    @click="toTab(1)"
                  >
                    Выбрать модель
                  </button>
                </template>
              </order-component>
            </div>
          </div>
        </template>
        <template v-slot:tab-1>
          <div class="row justify-content-between">
            <div class="col-md-70 col-sm-60 col-100">
              <div class="content model">
                <ul class="model__options input-list">
                  <li v-for="category in categoryList" :key="category.id">
                    <input-switch-component
                      type="radio"
                      :label="category.text"
                      name="category"
                      :value="category.id"
                      v-model="categoryActive"
                    />
                  </li>
                </ul>
                <model-list-component :category="categoryActive"/>
              </div>
            </div>
            <div class="col-md-30 col-sm-40 col-100">
              <order-component>
                <template v-slot:btn>
                  <button
                    type="button"
                    class="btn mw-100"
                    :disabled="tabs[2].disabled"
                    @click="toTab(2)"
                  >
                    Дополнительно
                  </button>
                </template>
              </order-component>
            </div>
          </div>
        </template>
        <template v-slot:tab-2>
          <div class="row justify-content-between">
            <div class="col-md-70 col-sm-60 col-100">
              <div class="content">{{ tabList[2] }}</div>
            </div>
            <div class="col-md-30 col-sm-40 col-100">
              <order-component>
                <template v-slot:btn>
                  <button
                    type="button"
                    class="btn mw-100"
                    :disabled="tabs[3].disabled"
                    @click="toTab(3)"
                  >
                    Итого
                  </button>
                </template>
              </order-component>
            </div>
          </div>
        </template>
        <template v-slot:tab-3>
          <div class="row justify-content-between">
            <div class="col-md-70 col-sm-60 col-100">
              <div class="content">{{ tabList[3] }}</div>
            </div>
            <div class="col-md-30 col-sm-40 col-100">
              <order-component>
                <template v-slot:btn>
                  <button type="button" class="btn mw-100">Заказать</button>
                </template>
              </order-component>
            </div>
          </div>
        </template>
      </tabs-component>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import TabsComponent from "@/components/TabsComponent.vue";
import OrderComponent from "@/components/OrderComponent.vue";
import InputTextComponent from "@/components/InputTextComponent.vue";
import InputSwitchComponent from "@/components/InputSwitchComponent.vue";
import MapComponent from "@/components/MapComponent.vue";
import ModelListComponent from "@/components/ModelListComponent.vue";

export default {
  name: "OrderView",
  components: {
    HeaderComponent,
    TabsComponent,
    OrderComponent,
    InputTextComponent,
    InputSwitchComponent,
    MapComponent,
    ModelListComponent,
  },
  data() {
    return {
      active: 0,
      categoryActive: 0,
      tabList: ["Местоположение", "Модель", "Дополнительно", "Итого"],
    };
  },
  computed: {
    city: {
      get() {
        return this.$store.getters.getOrderCity;
      },
      set(value) {
        this.$store.commit("setOrderCityValue", value);
      },
    },
    point: {
      get() {
        return this.$store.getters.getOrderPoint;
      },
      set(value) {
        this.$store.commit("setOrderPointValue", value);
      },
    },
    model() {
      return this.$store.getters.getOrderModel;
    },
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
    cityVariant() {
      return this.$store.getters.getCityVariant;
    },
    pointVariant() {
      return this.$store.getters.getPointVariant;
    },
    tabs() {
      return this.tabList.map((item, i) => {
        const result = { text: item };
        if (this.active === i || i === 0) {
          result.disabled = false;
        } else if (i === 1) {
          result.disabled = !(this.city.value && this.point.value);
        } else if (i === 2) {
          result.disabled = !this.model.value;
        } else {
          result.disabled = true;
        }
        return result;
      });
    },
  },
  methods: {
    toTab(i) {
      if (!this.tabs[i].disabled) this.active = i;
    },
  },
};
</script>
