<template>
  <transition name="fade">
    <loader-component v-if="!car.id" />
    <div v-else class="content additional option">
      <color-component :car="car" />
      <period-component />
      <rate-component />
      <service-component />
    </div>
  </transition>
</template>
<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import ColorComponent from "@/components/ColorComponent.vue";
import PeriodComponent from "@/components/PeriodComponent.vue";
import RateComponent from "@/components/RateComponent.vue";
import ServiceComponent from "@/components/ServiceComponent.vue";

export default {
  name: "additional-component",
  components: {
    LoaderComponent,
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