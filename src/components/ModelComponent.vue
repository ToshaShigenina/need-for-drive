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
            @input="changePage(1)"
          />
        </li>
      </ul>

      <transition name="fade">
        <loader-component v-if="!loadModels" />
        <model-list-component v-else />
      </transition>

      <pagination-component
        v-if="(count > limit) && loadModels"
        :limit="limit"
        :page="page"
        :count="count"
        @to-page="changePage"
      />
    </div>
  </transition>
</template>
<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import InputSwitchComponent from "@/components/InputSwitchComponent.vue";
import ModelListComponent from "@/components/ModelListComponent.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";

export default {
  name: "model-component",
  components: {
    LoaderComponent,
    InputSwitchComponent,
    ModelListComponent,
    PaginationComponent,
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
    count() {
      return this.$store.getters.getModelsCount;
    },
    loadModels () {
      return this.$store.getters.getLoadModels;
    },
    modelVariant() {
      return this.$store.getters.getModelVariant;
    },
    query() {
      if (this.categoryActive) {
        return `limit=${this.limit}&page=${this.page - 1}&categoryId=${
          this.categoryActive
        }`;
      }
      return `limit=${this.limit}&page=${this.page - 1}`;
    },
  },
  methods: {
    load() {
      this.$store.dispatch("loadModelVariant", this.query);
    },
    changePage(i) {
      this.page = i;
      this.load();
    },
  },
  created() {
    this.load();
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/style/abstracts/_variables.scss';
@import '@/assets/style/components/_model.scss';
</style>