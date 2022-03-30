<template>
  <aside class="main-sidebar" :class="{ _open: open }">
    <button
      type="button"
      class="main-sidebar__toggler menu-toggler"
      @click="isOpen"
    >
      <span>Меню</span>
    </button>
    <div class="main-sidebar__content">
      <menu-component :links="menu" />
      <social-component :links="social" />
    </div>
    <lang-component />
    <div class="backdrop main-sidebar__backdrop"></div>
  </aside>
</template>

<script>
import Lang from "./LangComponent.vue";
import Menu from "./MenuComponent.vue";
import Social from "./SocialComponent.vue";

export default {
  name: "sidebar-component",
  props: {
    social: {
      type: Array,
      require: true,
    },    
    menu: {
      type: Array,
      require: true,
    },
  },
  components: {
    "lang-component": Lang,
    "menu-component": Menu,
    "social-component": Social,
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    isOpen() {
      this.open = !this.open;
    },
  },
};
</script>