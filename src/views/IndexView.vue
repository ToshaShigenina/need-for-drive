<template>
  <div class="wrapper wrapper_inner">
    <main class="main-content">
      <header-component />
      <content-component />
      <footer-component />
    </main>
    <slider-component :slides="slides" />
  </div>
</template>

<script>
import SliderComponent from "@/components/SliderComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ContentComponent from "@/components/ContentComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "IndexView",
  components: {
    SliderComponent,
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

<style scoped lang="scss">
@import '@/assets/style/abstracts/_variables.scss';
@import '@/assets/style/components/_main.scss';
</style>