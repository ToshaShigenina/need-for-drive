<template>
  <article class="main-content__article main-article">
    <div class="container">
      <h1 class="main-article__heading main-heading">
        {{ content.title }}<br>
        <span class="text-accent">{{ content.name }}</span>
        </h1>
      <p class="main-article__lead lead">{{ content.lead }}</p>
      <a :href="content.link.url" class="main-article__btn btn">{{
        content.link.text
      }}</a>
    </div>
  </article>
</template>

<script>
export default {
  name: "content-component",
  props: {
    content: {
      type: Object,
      require: true,
    },
  },
};
</script>