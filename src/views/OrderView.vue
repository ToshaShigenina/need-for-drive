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

      <tabs-nav-component :list="tabs" v-model="active"/>

      <div class="row justify-content-between">
        <div class="col-md-70 col-sm-60 col-100">
          <component :is="active.component"/>
        </div>
        <div class="col-md-30 col-sm-40 col-100">
          <order-component>
            <template #btn>
              <button
                v-if="active.component === 'point-component'"
                key="to-model-component"
                type="button"
                class="btn mw-100"
                :disabled="tabs[1].disabled"
                @click="toTab(1)"
              >
                Выбрать модель
              </button>
              <button
                v-if="active.component === 'model-component'"
                key="to-additional-component"
                type="button"
                class="btn mw-100"
                :disabled="tabs[2].disabled"
                @click="toTab(2)"
              >
                Дополнительно
              </button>
              <button
                v-if="active.component === 'additional-component'"
                key="to-summary-component"
                type="button"
                class="btn mw-100"
                :disabled="tabs[3].disabled"
                @click="toTab(3)"
              >
                Итого
              </button>
              <button
                v-if="active.component === 'summary-component'"
                key="to-confirm"
                type="button"
                class="btn mw-100"
              >
                Заказать
              </button>
            </template>
          </order-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import TabsNavComponent from "@/components/TabsNavComponent.vue";
import PointComponent from "@/components/PointComponent.vue";
import ModelComponent from "@/components/ModelComponent.vue";
import AdditionalComponent from "@/components/AdditionalComponent.vue";
import SummaryComponent from "@/components/SummaryComponent.vue";
import OrderComponent from "@/components/OrderComponent.vue";
import InputSwitchComponent from "@/components/InputSwitchComponent.vue";
import ModelListComponent from "@/components/ModelListComponent.vue";

export default {
  name: "OrderView",
  components: {
    HeaderComponent,
    TabsNavComponent,
    PointComponent,
    ModelComponent,
    AdditionalComponent,
    SummaryComponent,
    OrderComponent,
    InputSwitchComponent,
    ModelListComponent,
  },
  data() {
    return {
      categoryActive: 0,
      active: {
        index: 0,
        component: "point-component",
      },
      tabList: [
        {
          text: "Местоположение",
          disabled: false,
          component: "point-component",
        },
        {
          text: "Модель",
          disabled: true,
          component: "model-component",
        },
        {
          text: "Дополнительно",
          disabled: true,
          component: "additional-component",
        },
        {
          text: "Итого",
          disabled: true,
          component: "summary-component",
        },
      ],
    };
  },
  computed: {
    city() {
      return this.$store.getters.getOrderCity;
    },
    point() {
      return this.$store.getters.getOrderPoint;
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
    disabledPoint() {
      return !(this.city.value.id && this.point.value.id)
    },
    tabs() {
      return this.tabList.map((item, i) => {
        if (this.active.index === i || i === 0) {
          item.disabled = false;
        } else if (i === 1) {
          item.disabled = this.disabledPoint;
        } else if (i === 2) {
          item.disabled = !this.model.value;
        } else {
          item.disabled = true;
        }
        return item;
      });
    },
  },
  methods: {
    toTab(i) {
      if (!this.tabs[i].disabled) {
        this.active.index = i;
        this.active.component = this.tabs[i].component;
      }
    },
  },
  created() {
    this.$store.dispatch("loadCityVariant");
    this.$store.dispatch("loadPointVariant");
  },
};
</script>
