<template>
  <div class="content model">
    <ul class="model__options input-list">
      <li v-for="category in categoryList" :key="category.id">
        <input-switch-component
          type="radio"
          :label="category.name"
          name="category"
          :value="category.id"
          v-model="active"
        />
      </li>
    </ul>
    <model-list-component :category="active"/>
  </div>
</template>
<script>
import InputSwitchComponent from "@/components/InputSwitchComponent.vue";
import ModelListComponent from "@/components/ModelListComponent.vue";

export default {
  name: "model-component",
  components: {
    InputSwitchComponent,
    ModelListComponent,
  },
  data() {
    return {
      active: 0,
    };
  },
  computed: {
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
  },
};
</script>