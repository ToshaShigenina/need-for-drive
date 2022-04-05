<template>
  <div id="app">
    <div class="wrapper">
      <sidebar-component />
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
};
</script>
<style lang="scss" scoped>
#app {
  display: flex;
  align-items: stretch;
  min-height: 100vh;
}
</style>