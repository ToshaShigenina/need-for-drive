<template>
  <div class="content summary">
    <div class="summary__order">
      <h2
        class="summary__title"
        v-if="id && order && order.orderStatusId && order.orderStatusId.id === confirmStatus.id"
      >
        Ваш заказ подтверждён
      </h2>
      <h2
        class="summary__title"
        v-if="id && order && order.orderStatusId && order.orderStatusId.id === cancelStatus.id"
      >
        Ваш заказ отменён
      </h2>
      <h3 class="summary__name">{{ car.name }}</h3>
      <p v-if="car.number">
        <span class="car-number">{{ car.number }}</span>
      </p>
      <p>
        <strong>Доступна с</strong> {{ dateFrom }}<br />
        <strong>по</strong> {{ dateTo }}
      </p>
      <p><strong>Топливо</strong> {{ tank || 0 }}%</p>
    </div>
    <div class="summary__car" v-if="car.thumbnail">
      <img :src="car.thumbnail.path" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "summary-component",
  props: {
    id: {
      type: String,
    },
  },
  computed: {
    car() {
      return this.$store.getters.getOrderModel.value;
    },
    dateFrom() {
      return this.$store.getters.getOrderDateFrom;
    },
    dateTo() {
      return this.$store.getters.getOrderDateTo;
    },
    fullTank() {
      return this.$store.getters.getOrderService("isFullTank");
    },
    tank() {
      return this.fullTank ? 100 : this.car.tank;
    },
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
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/abstracts/_variables.scss";
@import "@/assets/style/components/_summary.scss";
</style>