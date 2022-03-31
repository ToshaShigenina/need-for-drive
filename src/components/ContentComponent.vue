<template>
  <article class="main-content__article main-article">
    <div class="container">
      <h1 class="main-article__heading main-heading">
        {{ content.title }}<br>
        <span class="text-accent">{{ name }}</span>
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
    name: {
      type: String,
      require: true,
    }
  },
  data () {
    return {
      content: {
        title: "Каршеринг",
        lead: "Поминутная аренда авто твоего города",
        phone: "8 (495) 234-22-44",
        copyright: "© 2016-2019 «Need for drive»",
        link: {
          url: "/order",
          text: "Забронировать",
        },
      }
    }
  }
};
</script>