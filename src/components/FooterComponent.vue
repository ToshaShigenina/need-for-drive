<template>
  <footer class="main-content__footer main-footer">
    <div class="container">
      <div class="row justify-content-sm-between justify-content-end">
        <div class="col-sm-auto col-12 main-footer__copyright">
          <p class="copyright">{{ copyright }}</p>
        </div>
        <div class="col-sm-auto col-12 main-footer__contact">
          <address class="main-contact">
            <a :href="phoneLink" class="main-contact__link">{{ phone }}</a>
          </address>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-component",
  props: {
    copyright: {
      type: String,
    },
    phone: {
      type: String,
      require: true,
    },
  },
  computed: {
    phoneLink() {
      return `tel://${this.phone}`;
    },
  },
};
</script>