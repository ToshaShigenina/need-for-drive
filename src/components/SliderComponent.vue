<template>
  <carousel class="slider" :perPage="1" :navigationEnabled="true">
    <slide v-for="(slide, i) in slides" :key="'slide' + i" :virtualIndex="i" :class="slide.class">
      <slide-component
        :description="slide.description"
        :title="slide.title"
        :link="slide.link"
      />
    </slide>
  </carousel>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import SlideComponent from "./SlideComponent.vue";

export default {
  name: "slider-component",
  components: {
    Carousel,
    Slide,
    SlideComponent,
  },
  props: {
    slides: {
      type: Array,
    },
  },
  data() {
    return {
      options: {},
    };
  },
};
</script>