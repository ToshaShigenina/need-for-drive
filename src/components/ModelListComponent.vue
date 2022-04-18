<template>
  <ul class="model__list">
    <li v-for="model in modelVariant" :key="model.id">
      <div
        class="model__card"
        :class="{ _active: active === model.id }"
        @click="selectModel(model)"
      >
        <h2 class="model__name">{{ model.name }}</h2>
        <span class="model__cost">
          {{ model.priceMin }} - {{ model.priceMax }} ₽
        </span>
        <img
          :src="model.thumbnail.path"
          :alt="model.name"
          class="model__img"
        />
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "model-list-component",
  props: {
    category: {
      default: 0,
    },
  },
  data() {
    return {
      active: null,
    };
  },
  computed: {
    model: {
      get() {
        return this.$store.getters.getOrderModel;
      },
      set(value) {
        this.$store.commit("setOrderModelValue", value);
      },
    },
    modelVariant() {
      return this.$store.getters.getModelVariant(this.category);
    },
  },
  methods: {
    selectModel(model) {
      if (this.active === model.id) {
        this.active = null;
        this.model = {
          id: null,
          name: "",
        };
      } else {
        this.active = model.id;
        this.model = model;
      }
    },
  },
  created() {
    this.active = this.model.value.id;
  }
};
</script>
