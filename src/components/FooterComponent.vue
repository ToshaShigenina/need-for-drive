<template>
  <footer class="main-content__footer main-footer">
    <div class="container">
      <div class="row justify-content-sm-between justify-content-end">
        <div class="col-sm-auto col-12 main-footer__copyright">
          <p class="copyright">© 2016-2019 «Need for drive»</p>
        </div>
        <div class="col-sm-auto col-100 main-footer__contact">
          <address class="main-contact">
            <a href="tel:84952342244" class="main-contact__link">
              8 (495) 234-22-44
            </a>
          </address>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-component",
};
</script>

<style scoped lang="scss">
@import '@/assets/style/abstracts/_variables.scss';
@import '@/assets/style/components/_footer.scss';
@import '@/assets/style/components/_contact.scss';
</style>