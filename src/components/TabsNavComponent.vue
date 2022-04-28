<template>
  <ul class="heading-bordered tabs-nav">
    <li
      v-for="(item, i) in list"
      :key="'nav-tabs-' + i"
      class="tabs-nav__item"
      :class="{ _active: active === item.component }"
    >
      <button
        type="button"
        :disabled="active !== item.component && item.disabled"
        @click="toTab(item.component)"
      >
        {{ item.text }}
      </button>
    </li>
  </ul>
</template>
<script>
export default {
  name: "tabs-nav-component",
  model: {
    prop: "active",
    event: "change",
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
    active: {
      type: String,
      required: true,
    },
  },
  methods: {
    toTab(component) {
      if (this.active !== component) {
        this.$emit("change", component);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/style/abstracts/_variables.scss';
@import '@/assets/style/components/_tabs.scss';
</style>