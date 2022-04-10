<template>
  <ul class="model__list">
    <li v-for="(car, i) in carVariant" :key="i">
      <div
        class="model__card"
        :class="{ _active: active === car.id }"
        @click="isActiveCar(car.id)"
      >
        <h2 class="model__name">{{ car.name }}</h2>
        <span class="model__cost">
          {{ car.priceMin }} - {{ car.priceMax }} ₽
        </span>
        <img
          :src="car.thumbnail"
          :alt="car.name"
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
      type: Number,
    }
  },
  data() {
    return {
      active: null
    }
  },
  computed: {
    model: {
      get() {
        return this.$store.getters.getOrderModel;
      },
      set(value) {
        this.$store.commit("setCarValue", value);
      },
    },
    carVariant() {
      return this.$store.getters.getCarVariant(this.category);
    },
  },
  methods: {
    isActiveCar(id) {
      if (this.active === id) {
        this.active = null;
        this.model = null;
      } else {
        this.active = id;
        this.model = id;
      }
    },
  }
};
</script>
