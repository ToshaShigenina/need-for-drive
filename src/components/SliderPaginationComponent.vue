<template>
  <ul class="slider__pagination pagination">
    <li
      v-for="i in count"
      :key="'dot' + i"
      class="pagination__dot"
      :class="{ _active: i === active + 1 }"
    >
      <button type="button" @click="toSlide(i - 1)"></button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "slider-pagination-component",
  props: {
    active: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  methods: {
    toSlide(i) {
      this.$emit("to-slide", i);
    },
  },
};
</script>