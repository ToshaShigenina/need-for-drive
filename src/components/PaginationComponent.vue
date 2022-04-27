<template>
  <ul class="pagination">
    <li class="pagination__prev">
      <button @click="toPage(0)"></button>
    </li>
    <li
      v-for="i in pages"
      :key="i"
      class="pagination__dot _content"
      :class="{ _active: i === page + 1 }"
    >
      <button @click="toPage(i - 1)">{{ i }}</button>
    </li>
    <li class="pagination__next">
      <button @click="toPage(pages - 1)"></button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "pagination-component",
  props: {
    count: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      default: 6,
    },
    page: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    pages() {
      return Math.ceil(this.count / this.limit);
    },
  },
  methods: {
    toPage(i) {
      this.$emit('to-page', i);
    },
  },
};
</script>