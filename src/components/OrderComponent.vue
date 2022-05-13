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

    <p class="order__result" v-if="orderPrice">
      <strong>Цена:</strong> {{ orderPrice }}&nbsp;₽
    </p>
    <p v-else-if="model.value.id" class="order__result">
      <strong>Цена:</strong> от&nbsp;{{ model.value.priceMin }}&nbsp;₽
      до&nbsp;{{ model.value.priceMax }}&nbsp;₽
    </p>

    <slot name="btn"></slot>
  </div>
</template>
<script>
import { parse } from "@/plugins/datetime";

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
    orderPrice() {
      const rateMinuteId = "62593c9d73b61100181028ed";
      const rateDayMinuteId = "627de9582d3c990011916cc1";
      const rateDayId = "62593cac73b61100181028ee";
      const rateWeekendId = "6271495e9093d200112245e8";
      const rateWeekId = "62593cca73b61100181028ef";
      const rateWeekSaleId = "62593cd573b61100181028f0";
      const rateMonthId = "6259003d73b61100181028d9";
      const rateQuarterId = "626ac00373b611001810412b";
      const rateQuarterSaleId = "62593cf073b61100181028f1";
      const rateYearId = "62593d0273b61100181028f2";
      const rateYearSaleId = "626ac3ae73b611001810412f";
      const dateFrom = this.period.value.dateFrom;
      const dateTo = this.period.value.dateTo;

      let price = 0;

      if (dateFrom && dateTo && this.rate.value.id) {
        const period =
          (new Date(parse(dateTo)).getTime() -
            new Date(parse(dateFrom)).getTime()) /
          (1000 * 60);
        let inMinute = 0;

        if (this.model.value.id) price = this.model.value.priceMin;
        if (this.fullTank) price += this.fullTank.price;
        if (this.childChair) price += this.childChair.price;
        if (this.rightWheel) price += this.rightWheel.price;

        if (
          this.rate.value.id === rateMinuteId ||
          this.rate.value.id === rateDayMinuteId
        ) {
          inMinute = this.rate.value.price;
        }

        if (this.rate.value.id === rateDayId) {
          inMinute = this.rate.value.price / (24 * 60);
        }
        if (this.rate.value.id === rateWeekendId) {
          inMinute = this.rate.value.price / (24 * 60 * 3);
        }
        if (
          this.rate.value.id === rateWeekId ||
          this.rate.value.id === rateWeekSaleId
        ) {
          inMinute = this.rate.value.price / (7 * 24 * 60);
        }
        if (this.rate.value.id === rateMonthId) {
          inMinute = this.rate.value.price / (30 * 24 * 60);
        }
        if (this.rate.value.id === rateQuarterId) {
          inMinute = this.rate.value.price / (90 * 24 * 60);
        }
        if (this.rate.value.id === rateQuarterSaleId) {
          inMinute = this.rate.value.price / (93 * 24 * 60);
        }
        if (
          this.rate.value.id === rateYearId ||
          this.rate.value.id === rateYearSaleId
        ) {
          inMinute = this.rate.value.price / (365 * 24 * 60);
        }

        price += Math.ceil(inMinute * period);
      }
      return price;
    },
  },
  watch: {
    orderPrice(value) {
      this.$store.commit("setOrderPrice", value);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/abstracts/_variables.scss";
@import "@/assets/style/components/_order.scss";
</style>