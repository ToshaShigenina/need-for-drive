<template>
  <footer class="main-content__footer main-footer">
    <div class="container">
      <div class="row justify-content-sm-between justify-content-end">
        <div class="col-sm-auto col-12 main-footer__copyright">
          <p class="copyright">
            © 2016-2019 «{{ name }}»
          </p>
        </div>
        <div class="col-sm-auto col-12 main-footer__contact">
          <address class="main-contact">
            <a href="tel:84952342244" class="main-contact__link">8 (495) 234-22-44</a>
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
    name: {
      type: String,
      require: true,
    },
  },
};
</script>