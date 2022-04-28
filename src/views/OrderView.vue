<template>
  <div class="wrapper wrapper_inner">
    <div class="container">
      <div class="row">
        <header-component />
      </div>

      <tabs-nav-component :list="tabs" v-model="activeTab" />

      <div class="row justify-content-between">
        <div class="col-md-64 col-sm-60 col-100">
          <component :is="activeTab" />
        </div>
        <div class="col-md-36 col-sm-40 col-100">
          <order-component>
            <template #btn>
              <button
                v-if="activeTab === 'point-component'"
                key="to-model-component"
                type="button"
                class="btn mw-100"
                :disabled="disabledPoint"
                @click="toTab('model-component')"
              >
                Выбрать модель
              </button>
              <button
                v-if="activeTab === 'model-component'"
                key="to-additional-component"
                type="button"
                class="btn mw-100"
                :disabled="disabledModel"
                @click="toTab('additional-component')"
              >
                Дополнительно
              </button>
              <button
                v-if="activeTab === 'additional-component'"
                key="to-summary-component"
                type="button"
                class="btn mw-100"
                :disabled="disabledAdditional"
                @click="toTab('summary-component')"
              >
                Итого
              </button>
              <button
                v-if="activeTab === 'summary-component'"
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
      activeTab: "point-component",
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
    category() {
      return this.$store.getters.getCategoryActive;
    },
    disabledPoint() {
      return !(this.city.value.id && this.point.value.id);
    },
    disabledModel() {
      return !this.model.value.id;
    },
    disabledAdditional() {
      return true;
    },
    tabs() {
      return this.tabList.map((item, i) => {
        if (this.activeTab === item.component || i === 0) {
          item.disabled = false;
        } else if (item.component === "model-component") {
          item.disabled = this.disabledPoint;
        } else if (i === 2) {
          item.disabled = this.disabledPoint || this.disabledModel;
        } else {
          item.disabled = true;
        }
        return item;
      });
    },
  },
  methods: {
    toTab(component) {
      const item = this.tabs.find(elem => elem.component === component)
      if (item && !item.disabled) {
        this.activeTab = item.component;
      }
    },
  },
  created() {
    this.$store.dispatch("loadCityVariant");
    this.$store.dispatch("loadPointVariant");
    // this.$store.dispatch("loadModelVariant", this.queryModel);
    this.$store.dispatch("loadCategoryList");
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/style/abstracts/_variables.scss';
@import '@/assets/style/components/_main.scss';
</style>