<template>
  <article class="main-content__article main-article">
    <div class="container">
      <h1 class="main-article__heading main-heading">
        {{ content.title }}<br />
        <span class="text-accent">{{ name }}</span>
      </h1>
      <p class="main-article__lead lead">{{ content.lead }}</p>
      <router-link :to="content.link.url" class="main-article__btn btn">
        {{ content.link.text }}
      </router-link>
    </div>
  </article>
</template>

<script>
export default {
  name: "content-component",
  props: {
    name: {
      type: String,
      require: true,
    },
  },
  computed: {
    content () {
      return this.$store.getters.getContent;
    }
  }
};
</script>