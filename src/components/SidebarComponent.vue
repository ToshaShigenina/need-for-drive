<template>
  <aside class="main-sidebar" :class="{ _open: open }">
    <button
      type="button"
      class="main-sidebar__toggler menu-toggler"
      @click="isOpen"
    >
      <span></span>
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
import LangComponent from "./LangComponent.vue";
import MenuComponent from "./MenuComponent.vue";
import SocialComponent from "./SocialComponent.vue";

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
    LangComponent,
    MenuComponent,
    SocialComponent,
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