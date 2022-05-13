<template>
  <div class="wrapper wrapper_inner">
    <div class="container">
      <div class="row">
        <header-component />
      </div>

      <div class="heading-bordered">
        <p>Заказ номер {{ this.$route.query.id }}</p>
      </div>

      <div class="row justify-content-between">
        <div class="col-md-64 col-sm-60 col-100">
          <summary-component :id="this.$route.query.id" />
        </div>
        <div class="col-md-36 col-sm-40 col-100">
          <order-component>
            <template #btn>
              <button
                v-if="
                  order &&
                  order.orderStatusId &&
                  order.orderStatusId.id === confirmStatus.id
                "
                type="button"
                class="btn btn_cancel mw-100"
                @click="togglePopup(true)"
              >
                Отменить
              </button>
              <router-link
                v-if="
                  order &&
                  order.orderStatusId &&
                  order.orderStatusId.id === cancelStatus.id
                "
                class="btn mw-100"
                to="/"
              >
                На главную
              </router-link>
            </template>
          </order-component>
        </div>
      </div>
    </div>
    <popup-component :open="popupOpen" @close-popup="togglePopup">
      <template #title> Отменить заказ </template>
      <template #success>
        <button class="btn popup__btn" @click="cancelOrder">Отменить</button>
      </template>
    </popup-component>
    <popup-component
      :open="popupResult"
      :cancel="false"
      @close-popup="toggleResult"
    >
      <template #title> Заказ {{ $route.query.id }} был отменен </template>
      <template #success>
        <router-link class="btn popup__btn" to="/"> На главную </router-link>
      </template>
    </popup-component>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SummaryComponent from "@/components/SummaryComponent.vue";
import OrderComponent from "@/components/OrderComponent.vue";
import PopupComponent from "@/components/PopupComponent.vue";

export default {
  name: "OrderView",
  components: {
    HeaderComponent,
    SummaryComponent,
    OrderComponent,
    PopupComponent,
  },
  data() {
    return {
      popupOpen: false,
      popupResult: false,
    };
  },
  computed: {
    order() {
      return this.$store.getters.getOrder;
    },
    confirmStatus() {
      return this.$store.getters.getConfirmStatus;
    },
    cancelStatus() {
      return this.$store.getters.getCancelStatus;
    },
  },
  methods: {
    togglePopup(isOpen) {
      this.popupOpen = isOpen;
    },
    toggleResult(isOpen) {
      this.popupResult = isOpen;
    },
    cancelOrder() {
      this.$store.dispatch("cancelOrder").then(() => {
        this.togglePopup(false);
        this.toggleResult(true);
      });
    },
  },
  created() {
    this.$store.dispatch("loadOrderStatuses");
    if (this.$route.query.id) {
      this.$store.dispatch("loadOrder", this.$route.query.id);
    } else {
      this.$router.push("404");
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/abstracts/_variables.scss";
@import "@/assets/style/components/_main.scss";
</style>