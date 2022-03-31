<template>
  <ul class="main-sidebar__social social-list">
    <li
      class="social-list__item"
      v-for="(link, i) in links"
      :key="'social' + i"
    >
      <a :href="link.url" class="social-list__link social-link" :class="link.class"></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "social-component",
  props: {
    links: {
      type: Array,
      require: true,
    },
  },
};
</script>