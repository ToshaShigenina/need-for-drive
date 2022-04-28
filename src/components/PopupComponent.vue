<template>
  <transition name="fade">
    <div v-if="open" class="popup" @click.self="closePopup">
      <div class="popup__content">
        <h2 class="popup__title text-center">
          Подтвердить заказ
        </h2>
        <router-link class="btn popup__btn" to="/">
          Подтвердить
        </router-link>
        
        <button class="btn btn_cancel popup__btn" @click="closePopup">
          Вернуться
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "popup-component",
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closePopup() {
      this.$emit("close-popup", false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/abstracts/_variables.scss";
@import "@/assets/style/components/_popup.scss";
</style>