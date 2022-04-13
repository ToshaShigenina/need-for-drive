<template>
  <nav class="main-sidebar__menu">
    <ul class="main-menu">
      <li
        v-for="(link, i) in links"
        :key="'main-menu' + i"
        class="main-menu__item"
      >
        <router-link :to="link.url" class="main-menu__link">{{ link.text }}</router-link>
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