<template>
  <ul class="heading-bordered tabs-nav">
    <li
      v-for="(item, i) in list"
      :key="'nav-tabs-' + i"
      class="tabs-nav__item"
      :class="{ _active: active.index === i }"
    >
      <button
        type="button"
        :disabled="active.index !== i && item.disabled"
        @click="toTab(i, item.component)"
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
      type: Object,
    },
  },
  methods: {
    toTab(index, component) {
      if (this.active !== index) {
        this.$emit("change", {
          index,
          component,
        });
      }
    },
  },
};
</script>