<template>
  <div class="slider__item slide">
    <div class="slide__content">
      <h2 class="slide__heading">{{ title }}</h2>
      <p class="slide__description">
        {{ description }}
      </p>
      <a :href="link.url" class="btn slide__btn">{{ link.text }}</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "slider-item-component",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: Object,
      required: true,
    },
  },
};
</script>