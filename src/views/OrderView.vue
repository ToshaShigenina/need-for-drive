<template>
  <div class="wrapper wrapper_inner">
    <div class="container">
      <div class="row">
        <header-component />
      </div>

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
  },
  data() {
    return {
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
    disabledPoint() {
      return !(this.city.value.id && this.point.value.id)
    },
    tabs() {
      return this.tabList.map((item, i) => {
        if (this.active.index === i || i === 0) {
          item.disabled = false;
        } else if (i === 1) {
          item.disabled = this.disabledPoint;
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
