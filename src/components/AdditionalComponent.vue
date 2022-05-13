<template>
  <div class="content additional option">
    <color-component :car="car" />
    <period-component />
    <rate-component />
    <service-component />
  </div>
</template>
<script>
import ColorComponent from "@/components/ColorComponent.vue";
import PeriodComponent from "@/components/PeriodComponent.vue";
import RateComponent from "@/components/RateComponent.vue";
import ServiceComponent from "@/components/ServiceComponent.vue";

export default {
  name: "additional-component",
  components: {
    ColorComponent,
    PeriodComponent,
    RateComponent,
    ServiceComponent,
  },
  computed: {
    car() {
      return this.$store.getters.getOrderModel.value;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/style/abstracts/_variables.scss";
@import "@/assets/style/components/_option.scss";
</style>