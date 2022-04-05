<template>
  <div class="wrapper wrapper_inner">
    <main class="main-content">
      <header-component />
      <content-component />
      <footer-component />
    </main>
    <slider-component :slides="slides" />
  </div>
</template>

<script>
import SliderComponent from "@/components/SliderComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ContentComponent from "@/components/ContentComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "IndexView",
  components: {
    SliderComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
  },
  computed: {
    slides() {
      return this.$store.getters.getSlides;
    },
  },
};
</script>
