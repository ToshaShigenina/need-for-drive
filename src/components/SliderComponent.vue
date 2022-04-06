<template>
  <div class="slider" ref="slider">
    <div class="slider__wrapper" :style="{ transform: `translateX(${translate})` }">
      <slide-component
        v-for="(slide, i) in slides"
        :key="'slide' + i"
        :title="slide.title"
        :description="slide.description"
        :link="slide.link"
        :class="[{ _active: active === i }, slide.class]"
        :style="{ width: `${width}px` }"
      ></slide-component>
    </div>

    <pagination-component
      :active="active"
      :count="slides.length"
      @to-slide="toSlide"
    />

    <button
      type="button"
      class="slider__btn slider__prev"
      :disabled="active === 0"
      @click="prevSlide"
    ></button>
    <button
      type="button"
      class="slider__btn slider__next"
      :disabled="active === slides.length - 1"
      @click="nextSlide"
    ></button>
  </div>
</template>
<script>
import PaginationComponent from "./PaginationComponent.vue";
import SlideComponent from "./SlideComponent.vue";

export default {
  name: "slider-component",
  components: {
    SlideComponent,
    PaginationComponent,
  },
  props: {
    slides: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      active: 0,
      width: 0
    };
  },
  computed: {
    translate () {
      return (this.width * this.active * -1) + 'px';
    }
  },
  methods: {
    prevSlide() {
      this.active--;
    },
    nextSlide() {
      this.active++;
    },
    toSlide(i) {
      this.active = i;
    },
    getWidth() {
      this.width = this.$refs.slider.clientWidth;
    }
  },
  mounted() {
    this.getWidth();
    window.addEventListener('resize', this.getWidth.bind(this))
  },
};
</script>