<template>
  <aside class="main-sidebar" :class="{ _open: open }">
    <button
      type="button"
      class="main-sidebar__toggler menu-toggler"
      @click="isOpen"
    >
      <span></span>
    </button>
    <div class="backdrop main-sidebar__backdrop">
      <div class="main-sidebar__content">
        <menu-component />
        <social-component />
      </div>
    </div>
    <lang-component />
  </aside>
</template>

<script>
import LangComponent from "./LangComponent.vue";
import MenuComponent from "./MenuComponent.vue";
import SocialComponent from "./SocialComponent.vue";

export default {
  name: "sidebar-component",
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
      this.open
        ? document.body.classList.add("_overflow")
        : document.body.classList.remove("_overflow");
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/abstracts/_variables.scss';
@import '@/assets/style/components/_sidebar.scss';
@import '@/assets/style/components/_toggler.scss';
</style>