<template>
  <transition name="fade">
    <loader-component v-if="!modelVariant.length"/>
    <div v-else class="content model">
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
  </transition>
</template>
<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import InputSwitchComponent from "@/components/InputSwitchComponent.vue";
import ModelListComponent from "@/components/ModelListComponent.vue";

export default {
  name: "model-component",
  components: {
    LoaderComponent,
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
    modelVariant() {
      return this.$store.getters.getModelVariant(this.active);
    },
  },
};
</script>