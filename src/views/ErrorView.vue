<template>
  <div class="wrapper wrapper_inner">
    <main class="main-content">
      <header-component />
      <article class="main-content__article main-article">
        <div class="container">
          <h2 class="heading main-article__heading">
            {{ type }}
          </h2>
          <div class="main-article__content">
            <p>
              {{ message }}
            </p>
          </div>
          <router-link class="main-article__btn btn" to="/">
            На главную
          </router-link>
        </div>
      </article>
      <footer-component />
    </main>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "ErrorView",
  components: {
    HeaderComponent,
    FooterComponent,
  },
  props: {
    type: {
      type: String,
      default: '404'
    },
    message: {
      type: String,
      default: 'Страница не найдена!'
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/style/abstracts/_variables.scss";
@import "@/assets/style/components/_main.scss";
@import "@/assets/style/components/_article.scss";
</style>