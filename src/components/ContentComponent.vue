<template>
  <article class="main-content__article main-article">
    <div class="container">
      <h1 class="main-article__heading main-heading">
        Каршеринг<br />
        <span class="text-accent">Need for drive</span>
      </h1>
      <p class="main-article__lead lead">
        Поминутная аренда авто твоего города
      </p>
      <router-link to="/order" class="main-article__btn btn">
        Забронировать
      </router-link>
    </div>
  </article>
</template>

<script>
export default {
  name: "content-component",
};
</script>