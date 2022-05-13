<template>
  <transition name="fade">
    <div v-if="open" class="popup" @click.self="closePopup">
      <div class="popup__content">
        <h2 class="popup__title text-center">
          <slot name="title">Подтвердить заказ</slot>
        </h2>
        <slot name="success"></slot>
        <button v-if="cancel" class="btn btn_cancel popup__btn" @click="closePopup">
          <slot name="cancel">Вернуться</slot>
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
    cancel: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    closePopup() {
      this.$emit("close-popup", false);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/style/abstracts/_variables.scss";
@import "@/assets/style/components/_popup.scss";
</style>