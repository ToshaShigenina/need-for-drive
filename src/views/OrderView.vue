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
import DatePickerComponent from "@/components/DatePickerComponent.vue";

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
    DatePickerComponent,
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
    colors() {
      const car = this.$store.getters.getCar(this.model.id);
      if (car) return car.colors;
      return [];
    },
    categoryList() {
      return this.$store.getters.getCategoryList;
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
    notBeforeToday(date) {
      const beforeToday = date < new Date(new Date().setHours(0, 0, 0, 0));
      const afterEnd = this.dateEnd ? date > new Date(new Date(this.parse(this.dateEnd)).setHours(0, 0, 0, 0)) : null;
      return afterEnd !== null ? (beforeToday || afterEnd) : beforeToday;
    },
    notBeforeDateStart(date) {
      const dateStart = this.dateStart ? new Date(this.parse(this.dateStart)) : null;
      return dateStart !== null ? date < new Date(dateStart.setDate(dateStart.getDate() - 1)) : false;
    },
    formatter(date) {
      if(typeof date === 'object') {
        const fullNumber = num => num < 10 ? '0'+num : num;
        return `${fullNumber(date.getDate())}.${fullNumber(date.getMonth()+1)}.${date.getFullYear()} ${fullNumber(date.getHours())}:${fullNumber(
          (Math.trunc(date.getMinutes() / 5) * 5) + 10
        )}`;
      }
      return date;
    },
    parse (dateString) {
      if(dateString) {
        const str = dateString.split('.');
        return `${str[1]}.${str[0]}.${str[2]}`;
      }
      return dateString;
    },
  },
  created() {
    this.$store.dispatch("loadCityVariant");
    this.$store.dispatch("loadPointVariant");
    this.$store.dispatch("loadModelVariant");
    this.$store.dispatch("loadCategoryList");
  },
};
</script>
