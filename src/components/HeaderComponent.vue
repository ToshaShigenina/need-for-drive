<template>
  <header class="main-content__header main-header">
    <div class="container">
      <div class="row align-items-center justify-content-end justify-content-sm-between">
        <div class="col-sm-auto col-100">
          <router-link to="/" class="main-header__brand brand-name">{{ name }}</router-link>
        </div>
        <div class="col-sm-auto col-100 text-right">
          <button class="main-header__location location">Ульяновск</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "header-component",
  computed: {
    name() {
      return this.$store.getters.getName;
    }
  },
};
</script>