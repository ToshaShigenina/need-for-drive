<template>
  <div id="app">
    <div class="wrapper">
      <sidebar-component :menu="menu" :social="social" />
      <router-view />
    </div>
  </div>
</template>

<script>
import SidebarComponent from "./components/SidebarComponent.vue";

export default {
  name: "App",
  components: {
    SidebarComponent,
  },
  computed: {
    menu() {
      return this.$store.getters.getMenuLinks;
    },
    social() {
      return this.$store.getters.getSocialLinks;
    },
  },
};
</script>
<style lang="scss" scoped>
#app {
  display: flex;
  align-items: stretch;
  min-height: 100vh;
}
</style>