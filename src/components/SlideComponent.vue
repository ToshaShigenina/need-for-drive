<template>
  <div class="slider__item">
    <h2 class="slider__heading">{{ title }}</h2>
    <p class="slider__description">
      {{ description }}
    </p>
    <a
      :href="link.url"
      class="btn slider__btn"
      >{{ link.text }}</a
    >
  </div>
</template>
<script>
export default {
  name: "slide-component",
  props: {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    link: {
      type: Object,
      require: true,
    },
  },
};
</script>