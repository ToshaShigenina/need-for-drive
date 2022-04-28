<template>
  <button
    type="button"
    class="main-sidebar__lang lang-toggler"
    @click="changeLang"
  >
    {{ lang }}
  </button>
</template>

<script>
export default {
  name: "lang-component",
  data() {
    return {
      lang: "Eng",
    };
  },
  methods: {
    changeLang() {
      this.lang = this.lang === "Eng" ? "Рус" : "Eng";
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/abstracts/_variables.scss';
@import '@/assets/style/components/_lang.scss';
</style>