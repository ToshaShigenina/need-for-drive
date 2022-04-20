<template>
  <div class="option__item color">
    <p class="option__type">Цвет</p>
    <ul class="input-list">
      <li v-for="(item, i) in colors" :key="i">
        <input-switch-component
          type="radio"
          :label="item"
          name="color"
          :value="item"
          v-model="color"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import InputSwitchComponent from "@/components/InputSwitchComponent.vue";

export default {
  name: "color-component",
  components: {
    InputSwitchComponent,
  },
  props: {
    car: {
      type: Object,
      required: true,
    },
  },
  computed: {
    colors() {
      const defaultColor = "Любой";
      return [defaultColor].concat(...this.car.colors);
    },
    color: {
      get() {
        return this.$store.getters.getOrderColor.value;
      },
      set(value) {
        this.$store.commit("setOrderColorValue", value);
      },
    },
  },
  created() {
    if (!this.color) this.color = "Любой";
  },
};
</script>