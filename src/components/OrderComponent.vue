<template>
  <div class="order">
    <h2 class="order__heading">Ваш заказ:</h2>

    <ul class="order__list">
      <li class="order__item">
        <span>{{ point.label }}</span>
        <span>
          {{ city.value }}<br v-if="point.value && city.value" />
          {{ point.value }}
        </span>
      </li>
      <li class="order__item" v-for="item in filteredOrder" :key="item.type">
        <span>{{ item.label }}</span>
        <span>{{ item.value }}</span>
      </li>
    </ul>

    <p class="order__result"><strong>Цена:</strong> от 8 000 до 12 000 ₽</p>

    <slot name="btn"></slot>
  </div>
</template>
<script>
export default {
  name: "order-component",
  computed: {
    filteredOrder() {
      return this.$store.getters.getFilteredOrder;
    },
    city() {
      return this.$store.getters.getOrderCity;
    },
    point() {
      return this.$store.getters.getOrderPoint;
    },
  },
};
</script>
