<template>
  <div id="app">
    <div class="wrapper">
      <sidebar-component />
      <div class="wrapper_inner wrapper">
        <main class="main-content">
          <header-component />
          <content-component />
          <footer-component />
        </main>
        <slider-component :slides="slides" />
      </div>
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