<template>
  <div class="wrapper wrapper_inner">
    <div class="container">
      <div class="row">
        <header-component />
      </div>

      <div class="row">
        <div class="col-12">
          <tabs-component :list="tabList">
            <template v-slot:tab-0> Content 1 </template>
            <template v-slot:tab-1> Content 2 </template>
            <template v-slot:tab-2> Content 3 </template>
            <template v-slot:tab-3> Content 4 </template>
          </tabs-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import TabsComponent from "@/components/TabsComponent.vue";

export default {
  name: "OrderView",
  components: {
    HeaderComponent,
    TabsComponent,
  },
  data() {
    return {
      tabList: [
        {
          text: "Местоположение",
          disabled: false,
        },
        {
          text: "Модель",
          disabled: false,
        },
        {
          text: "Дополнительно",
          disabled: false,
        },
        {
          text: "Итого",
          disabled: false,
        },
      ],
    };
  },
  computed: {
    name() {
      return this.$store.getters.getName;
    },
  },
};
</script>
