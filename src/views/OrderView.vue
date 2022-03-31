<template>
  <div class="container">
    <header-component />
    <div class="row">
      <div class="col-auto"></div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "OrderView",
  components: {
    HeaderComponent,
  },
  computed: {
    name() {
      return this.$store.getters.getName;
    }
  },
};
</script>
