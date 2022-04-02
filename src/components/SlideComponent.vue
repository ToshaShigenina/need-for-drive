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