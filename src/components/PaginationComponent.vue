<template>
  <ul class="slider__pagination pagination">
    <li class="pagination__dot" v-for="i in count" :key="'dot' + i" :class="{ _active: i === active + 1 }">
      <button type="button" @click="toSlide(i - 1)"></button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "pagination-component",
  props: {
    active: {
      type: Number,
      require: true,
    },
    count: {
      type: Number,
      require: true,
    },
  },
  methods: {
    toSlide(i) {
      this.$emit("to-slide", i);
    },
  },
};
</script>