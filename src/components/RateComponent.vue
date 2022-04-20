<template>
  <div class="option__item rate">
    <p class="option__type">Тариф</p>
    <ul class="option__list">
      <li v-for="item in rates" :key="item.id">
        <input-switch-component
          type="radio"
          :label="`${item.rateTypeId.name}, ${item.price}₽/${item.rateTypeId.unit}`"
          name="rate"
          :value="item.id"
          v-model="activeRate"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import InputSwitchComponent from "@/components/InputSwitchComponent.vue";

export default {
  name: "rate-component",
  components: {
    InputSwitchComponent,
  },
  computed: {
    rates() {
      return this.$store.getters.getRateList;
    },
    activeRate: {
      get() {
        return this.$store.getters.getOrderRate.value.id;
      },
      set(id) {
        this.$store.commit("setOrderRateValueById", id);
      },
    },
  },
};
</script>