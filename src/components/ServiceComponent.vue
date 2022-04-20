<template>
  <div class="option__item service">
    <p class="option__type">Доп услуги</p>
    <ul class="option__list">
      <li v-for="item in services" :key="item.type">
        <input-switch-component
          type="checkbox"
          :label="`${item.label}, ${item.price}P`"
          name="services"
          :value="item.type"
          v-model="activeServices"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import InputSwitchComponent from "@/components/InputSwitchComponent.vue";

export default {
  name: "service-component",
  components: {
    InputSwitchComponent,
  },
  computed: {
    services() {
      return this.$store.getters.getServices;
    },
    activeServices: {
      get() {
        return this.$store.getters.getOrderServiceList;
      },
      set(value) {
        this.$store.commit("setOrderServiceValue", value);
      },
    },
  },
};
</script>