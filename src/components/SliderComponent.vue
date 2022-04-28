<template>
  <div class="slider" ref="slider">
    <div
      class="slider__wrapper"
      :style="{ transform: `translateX(${translate})` }"
    >
      <slider-item-component
        v-for="(slide, i) in slides"
        :key="'slide' + i"
        :title="slide.title"
        :description="slide.description"
        :link="slide.link"
        :class="[{ _active: active === i }, slide.class]"
        :style="{ width: `${width}px` }"
      />
    </div>

    <slider-pagination-component
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
import SliderPaginationComponent from "./SliderPaginationComponent.vue";
import SliderItemComponent from "./SliderItemComponent.vue";

export default {
  name: "slider-component",
  components: {
    SliderItemComponent,
    SliderPaginationComponent,
  },
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      active: 0,
      width: 0,
    };
  },
  computed: {
    translate() {
      return this.width * this.active * -1 + "px";
    },
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
      if (this.$refs.slider) this.width = this.$refs.slider.clientWidth;
    },
  },
  mounted() {
    this.getWidth();
    window.addEventListener("resize", this.getWidth.bind(this));
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/style/abstracts/_variables.scss';
@import '@/assets/style/components/_slider.scss';
</style>