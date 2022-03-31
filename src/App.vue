<template>
  <div id="app">
    <div class="wrapper">
      <sidebar-component
        :menu="menu"
        :social="social"
      />
      <main class="main-content">
        <header-component :title="name" />
        <content-component :name="name" />
        <footer-component
          :name="name"
          :phone="phone"
        />
      </main>
      <slider-component :slides="slides" />
    </div>
  </div>
</template>

<script>
import SliderComponent from "./components/SliderComponent.vue";
import SidebarComponent from "./components/SidebarComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import ContentComponent from "./components/ContentComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    SliderComponent,
    SidebarComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
  },
  data() {
    return {
      name: "Need for drive",
      phone: "8 (495) 234-22-44",
      menu: [
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
      ],
      social: [
        {
          url: "#",
          class: "social-link_tg",
        },
      ],
      slides: [
        {
          title: "Бесплатная парковка",
          description:
            "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
          class: "slide_parking",
          link: {
            url: "#",
            text: "Подробнее",
          },
        },
        {
          title: "Страховка",
          description: "Полная страховка страховка автомобиля",
          class: "slide_insurance",
          link: {
            url: "#",
            text: "Подробнее",
          },
        },
        {
          title: "Бензин",
          description: "Полный бак на любой заправке города за наш счёт",
          class: "slide_petrol",
          link: {
            url: "#",
            text: "Подробнее",
          },
        },
        {
          title: "Обслуживание",
          description: "Автомобиль проходит еженедельное ТО",
          class: "slide_service",
          link: {
            url: "#",
            text: "Подробнее",
          },
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#app {
  display: flex;
  align-items: stretch;
  min-height: 100vh;
}
</style>