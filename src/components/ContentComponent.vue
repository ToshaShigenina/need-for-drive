<template>
  <article class="main-content__article main-article">
    <div class="container">
      <h1 class="main-article__heading main-heading">
        Каршеринг<br>
        <span class="text-accent">{{ name }}</span>
        </h1>
      <p class="main-article__lead lead">Поминутная аренда авто твоего города</p>
      <a href="#" class="main-article__btn btn">Забронировать</a>
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
};
</script>