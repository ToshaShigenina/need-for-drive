<template>
  <div class="order">
    <h2 class="order__heading">Ваш заказ:</h2>

    <ul class="order__list">
      <li class="order__item">
        <span>{{ point.label }}</span>
        <span>
          {{ city.value.name }}<br v-if="city.value.id && point.value.id">
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
      <li v-if="period.value.dateFrom && period.value.detaTo" key="order-period" class="order__item">
        <span>{{ period.label }}</span>
        <span>
          {{ period.dateFrom }}
        </span>
      </li>
      <li v-if="rate.value.id" key="order-rate" class="order__item">
        <span>{{ rate.label }}</span>
        <span>
          {{ rate.value.name }}
        </span>
      </li>
      <li v-if="tank.value" key="order-tank" class="order__item">
        <span>{{ tank.label }}</span>
        <span>
          Да
        </span>
      </li>
      <li v-if="chair.value" key="order-chair" class="order__item">
        <span>{{ chair.label }}</span>
        <span>
          Да
        </span>
      </li>
      <li v-if="wheel.value" key="order-wheel" class="order__item">
        <span>{{ wheel.label }}</span>
        <span>
          Да
        </span>
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
    rate() {
      return this.$store.getters.getOrderRate;
    },
    tank() {
      return this.$store.getters.getOrderTank;
    },
    chair() {
      return this.$store.getters.getOrderChair;
    },
    wheel() {
      return this.$store.getters.getOrderWheel;
    },
  },
};
</script>
