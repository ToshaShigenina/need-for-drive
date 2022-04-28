<template>
  <header class="main-content__header main-header">
    <div class="container">
      <div
        class="
          row
          align-items-center
          justify-content-end justify-content-sm-between
        "
      >
        <div class="col-sm-auto col-100">
          <router-link to="/" class="main-header__brand brand-name">
            Need for drive
          </router-link>
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
};
</script>

<style scoped lang="scss">
@import '@/assets/style/abstracts/_variables.scss';
@import '@/assets/style/components/_header.scss';
@import '@/assets/style/components/_brand.scss';
@import '@/assets/style/components/_location.scss';
</style>