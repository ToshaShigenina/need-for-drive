<template>
  <nav class="main-sidebar__menu">
    <ul class="main-menu">
      <li
        class="main-menu__item"
        v-for="(link, i) in links"
        :key="'main-menu' + i"
        :class="{ _active: link.active }"
      >
        <a :href="link.url" class="main-menu__link">{{ link.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "menu-component",
  props: {
    links: {
      type: Array,
      require: true,
    },
  },
};
</script>