<template>
  <transition name="fade">
    <loader-component v-if="!modelVariant.length" />
    <div v-else class="content model">
      <ul class="model__options input-list">
        <li v-for="category in categoryList" :key="category.id">
          <input-switch-component
            type="radio"
            :label="category.name"
            name="category"
            :value="category.id"
            v-model="categoryActive"
            @input="load()"
          />
        </li>
      </ul>

      <transition name="fade">
        <loader-component v-if="!modelVariant.length" />
        <model-list-component v-else :category="categoryActive" />
      </transition>
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
      page: 1,
      limit: 6,
    };
  },
  computed: {
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
    categoryActive: {
      get() {
        return this.$store.getters.getCategoryActive;
      },
      set(id) {
        this.$store.commit("setCategoryActive", id);
      },
    },
    modelVariant() {
      return this.$store.getters.getModelVariant(this.active);
    },
    query() {
      console.log(this.categoryActive);
      if (this.categoryActive) {
        return `limit=${this.limit}&page=${this.page}&categoryId=${this.categoryActive}`;
      }
      return `limit=${this.limit}&page=${this.page}`;
    },
  },
  methods: {
    load(e) {
      console.log(e);
      this.$store.dispatch("loadModelVariant", this.query);
    },
  },
  created() {
    this.load();
  },
};
</script>