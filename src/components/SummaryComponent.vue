<template>
  <div class="content summary">
    <div class="summary__order">
      <h3 class="summary__name">{{ car.name }}</h3>
      <p>
        <span class="car-number">{{ car.number }}</span>
      </p>
      <p>
        <strong>Доступна с</strong> {{ dateFrom }}<br>
        <strong>по</strong> {{ dateTo }}
      </p>
      <p>
        <strong>Топливо</strong> {{ tank }}%
      </p>
    </div>
    <div class="summary__car">
      <img :src="car.thumbnail.path" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "summary-component",
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
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/abstracts/_variables.scss";
@import "@/assets/style/components/_summary.scss";
</style>