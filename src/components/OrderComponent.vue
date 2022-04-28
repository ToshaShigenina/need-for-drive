<template>
  <div class="order">
    <h2 class="order__heading">Ваш заказ:</h2>

    <ul class="order__list">
      <li class="order__item">
        <span>{{ point.label }}</span>
        <span>
          {{ city.value.name }}<br v-if="city.value.id && point.value.id" />
          {{ point.value.address }}
        </span>
      </li>
      <li v-if="model.value.id" key="order-model" class="order__item">
        <span>{{ model.label }}</span>
        <span>
          {{ model.value.name }}
        </span>
      </li>
      <li v-if="color.value" key="order-color" class="order__item">
        <span>{{ color.label }}</span>
        <span>
          {{ color.value }}
        </span>
      </li>
      <li
        v-if="period.value.dateFrom && period.value.dateTo"
        key="order-period"
        class="order__item"
      >
        <span>{{ period.label }}</span>
        <span>
          {{ periodValue }}
        </span>
      </li>
      <li v-if="rate.value.id" key="order-rate" class="order__item">
        <span>{{ rate.label }}</span>
        <span>
          {{ rate.value.rateTypeId.name }}
        </span>
      </li>

      <li v-if="fullTank" key="full-tank" class="order__item">
        <span>{{ fullTank.label }}</span>
        <span>Да</span>
      </li>
      <li v-if="childChair" key="child-chair" class="order__item">
        <span>{{ childChair.label }}</span>
        <span>Да</span>
      </li>
      <li v-if="rightWheel" key="right-wheel" class="order__item">
        <span>{{ rightWheel.label }}</span>
        <span>Да</span>
      </li>
    </ul>

    <p class="order__result" key="order-price">
      <strong>Цена:</strong> от 8 000 до 12 000 ₽
    </p>

    <slot name="btn"></slot>
  </div>
</template>
<script>
export default {
  name: "order-component",
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
    color() {
      return this.$store.getters.getOrderColor;
    },
    period() {
      return this.$store.getters.getOrderPeriod;
    },
    periodValue() {
      return this.$store.getters.getPeriod;
    },
    rate() {
      return this.$store.getters.getOrderRate;
    },
    serviceList() {
      return this.$store.getters.getOrderServiceList;
    },
    fullTank() {
      return this.$store.getters.getOrderService("isFullTank");
    },
    childChair() {
      return this.$store.getters.getOrderService("isNeedChildChair");
    },
    rightWheel() {
      return this.$store.getters.getOrderService("isRightWheel");
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/style/abstracts/_variables.scss';
@import '@/assets/style/components/_order.scss';
</style>