<template>
    <div class="loader">
        <div class="loader__dual-ring"></div>
    </div>
</template>
<script>
export default {
  name: "loader-component",
};
</script>
<style lang="scss" scoped>
@import "../assets/style/abstracts/_variables.scss";

.loader {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 64px 0;

  &__dual-ring {
    $size: 80px;

    display: inline-block;
    width: $size;
    height: $size;

    &::after {
      $size: 64px;

      content: " ";
      display: block;
      width: $size;
      height: $size;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid $color-main-accent;
      border-color: $color-main-accent transparent $color-main-accent
        transparent;
      animation: loader-dual-ring 1.2s linear infinite;
    }
  }
}

@keyframes loader-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>