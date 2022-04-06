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
  data() {
    return {
      links: [
        {
          url: "#",
          active: true,
          text: "ПАРКОВКА",
        },
        {
          url: "#",
          active: false,
          text: "СТРАХОВКА",
        },
        {
          url: "#",
          active: false,
          text: "БЕНЗИН",
        },
        {
          url: "#",
          active: false,
          text: "ОБСЛУЖИВАНИЕ",
        },
      ]
    }
  }
};
</script>