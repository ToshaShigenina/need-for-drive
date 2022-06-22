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
                @click="togglePopup(true)"
              >
                Заказать
              </button>
            </template>
          </order-component>
        </div>
      </div>
    </div>
    <popup-component :open="popupOpen" @close-popup="togglePopup">
      <template #success>
        <button class="btn popup__btn" @click="confirmOrder">
          Подтвердить
        </button>
      </template>
    </popup-component>
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
import PopupComponent from "@/components/PopupComponent.vue";

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
    PopupComponent,
  },
  data() {
    return {
      redirect: false,
      activeTab: "point-component",
      popupOpen: false,
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
      return this.$store.getters.getOrderCity.value;
    },
    point() {
      return this.$store.getters.getOrderPoint.value;
    },
    model() {
      return this.$store.getters.getOrderModel.value;
    },
    limit() {
      return this.$store.getters.getLimit;
    },
    page() {
      return this.$store.getters.getPage;
    },
    color() {
      return this.$store.getters.getOrderColor.value;
    },
    rate() {
      return this.$store.getters.getOrderRate.value;
    },
    period() {
      return this.$store.getters.getOrderPeriod.value;
    },
    category() {
      return this.$store.getters.getCategoryActive;
    },
    disabledPoint() {
      return !(this.city.id && this.point.id);
    },
    disabledModel() {
      return !this.model.id;
    },
    disabledAdditional() {
      return !(
        this.color &&
        this.rate.id &&
        this.period.dateFrom &&
        this.period.dateTo
      );
    },
    tabs() {
      return this.tabList.map((item, i) => {
        if (this.activeTab === item.component || i === 0) {
          item.disabled = false;
        } else if (item.component === "model-component") {
          item.disabled = this.disabledPoint;
        } else if (item.component === "additional-component") {
          item.disabled = this.disabledPoint || this.disabledModel;
        } else if (item.component === "summary-component") {
          item.disabled =
            this.disabledPoint || this.disabledModel || this.disabledAdditional;
        } else {
          item.disabled = true;
        }
        return item;
      });
    },
    errorCount() {
      const error = [
        this.$store.getters.getCityLoadError,
        this.$store.getters.getPointLoadError,
        this.$store.getters.getModelLoadError,
        this.$store.getters.getCategoryLoadError,
        this.$store.getters.getRateLoadError,
        this.$store.getters.getStatusesLoadError,
      ];
      return error.filter((item) => item).length;
    },
  },
  methods: {
    toTab(component) {
      const item = this.tabs.find((elem) => elem.component === component);
      if (item && !item.disabled) {
        this.activeTab = item.component;
      }
    },
    togglePopup(isOpen) {
      this.popupOpen = isOpen;
    },
    confirmOrder() {
      this.$store.dispatch("confirmOrder").then(() => {
        if (this.$store.state.order.id) {
          this.$router.push({
            path: "result",
            query: { id: this.$store.state.order.id },
          });
        } else {
          this.$router.replace("error");
        }
      });
    },
  },
  watch: {
    errorCount() {
      if (this.errorCount && !this.redirect) {
        this.redirect = true;
        this.$router.replace({
          name: "error",
          params: {
            type: "Ошибка загрузки данных",
            message:
              "Что-то пошло не так, сервер недоступен. Попробуйте позже.",
          },
        });
      }
    },
  },
  created() {
    this.$store.dispatch("loadCityVariant");
    this.$store.dispatch("loadPointVariant");
    this.$store.dispatch(
      "loadModelVariant",
      `limit=${this.limit}&page=${this.page - 1}`
    );
    this.$store.dispatch("loadCategoryList");
    this.$store.dispatch("loadRateList");
    this.$store.dispatch("loadOrderStatuses");
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/abstracts/_variables.scss";
@import "@/assets/style/components/_main.scss";
</style>