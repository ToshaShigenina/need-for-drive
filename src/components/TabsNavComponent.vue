<template>
  <ul class="heading-bordered tabs-nav">
    <li
      class="tabs-nav__item"
      v-for="(item, i) in list"
      :key="'nav-tabs-' + i"
      :class="{ _active: active === i }"
    >
      <button
        type="button"
        :disabled="active !== i && item.disabled"
        @click="toTab(i)"
      >
        {{ item.text }}
      </button>
    </li>
  </ul>
</template>
<script>
export default {
  name: "tabs-nav-component",
  props: {
    list: {
      type: Array,
      require: true,
    },
    active: {
      type: Number,
    },
  },
  methods: {
    toTab(i) {
      if (this.active !== i) this.$emit("to-tab", i);
    },
  },
};
</script>