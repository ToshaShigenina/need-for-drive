<template>
  <div class="tabs">
    <tabs-nav-component :active="active" :list="list" @to-tab="toTab" />
    <div class="tabs__body">
      <div
        class="tabs__item"
        v-for="(item, i) in list"
        :key="`tab-${i}`"
        :class="{ _active: active === i }"
      >
        <slot :name="`tab-${i}`" />
      </div>
    </div>
  </div>
</template>
<script>
import TabsNavComponent from "@/components/TabsNavComponent.vue";

export default {
  name: "tabs-component",
  components: {
    TabsNavComponent,
  },
  props: {
    list: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    toTab(i) {
      this.active = i;
    },
  },
};
</script>