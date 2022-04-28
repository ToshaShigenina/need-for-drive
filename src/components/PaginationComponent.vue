<template>
  <ul class="pagination">
    <li class="pagination__prev">
      <button :disabled="page === 1" @click="toPage(page - 1)"></button>
    </li>
    <li
      class="pagination__dot _content"
      :class="{ _active: page === 1 }"
    >
      <button @click="toPage(1)">1</button>
    </li>
    <li
      v-if="pages >= 2"
      class="pagination__dot _content"
      :class="{ _active: page === 2 }"
    >
      <button @click="toPage(2)">2</button>
    </li>

    <li v-if="(pages >= 7) && (page > 4)"><span>...</span></li>

    <li
      v-if="(pages >= 5) && (page >= 4) && (page < pages)"
      class="pagination__dot _content"
    >
      <button @click="toPage(page - 1)">{{ page - 1 }}</button>
    </li>
    <li
      v-if="(pages >= 5) && (page >= 3) && (page < pages - 1)"
      class="pagination__dot _content _active"
    >
      <button>{{ page }}</button>
    </li>
    <li
      v-if="(pages >= 5) && (page >= 2) && (page < pages - 2)"
      class="pagination__dot _content"
    >
      <button @click="toPage(page + 1)">{{ page + 1 }}</button>
    </li>

    <li v-if="(pages >= 6) && (page < pages - 3)"><span>...</span></li>

    <li
      v-if="pages >= 4"
      class="pagination__dot _content"
      :class="{ _active: page === pages - 1 }"
    >
      <button @click="toPage(pages - 1)">{{ pages - 1 }}</button>
    </li>
    <li
      v-if="pages >= 3"
      class="pagination__dot _content"
      :class="{ _active: page === pages }"
    >
      <button @click="toPage(pages)">{{ pages }}</button>
    </li>
    <li class="pagination__next">
      <button :disabled="page === pages" @click="toPage(page + 1)"></button>
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
      if (i !== this.page) this.$emit("to-page", i);
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/style/abstracts/_variables.scss';
@import '@/assets/style/components/_pagination.scss';
</style>