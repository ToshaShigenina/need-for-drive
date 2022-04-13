<template>
  <div class="content point">
    <div class="point__form">
      <input-text-component
        v-model="city.value"
        id="city"
        :data="cityVariant"
        :label="city.label"
        width="94px"
        placeholder="Начните вводить город..."
        class="form-group"
        @clear="clearPointValue"
      />
      <input-text-component
        v-model="point.value"
        id="point"
        :data="pointVariant"
        data-field="address"
        :label="point.label"
        width="94px"
        placeholder="Начните вводить пункт..."
        class="form-group"
      />
    </div>
    <map-component />
  </div>
</template>
<script>
import InputTextComponent from "@/components/InputTextComponent.vue";
import MapComponent from "@/components/MapComponent.vue";

export default {
  name: "point-component",
  components: {
    InputTextComponent,
    MapComponent,
  },
  computed: {
    city: {
      get() {
        return this.$store.getters.getOrderCity;
      },
      set(value) {
        this.$store.commit("setOrderCityValue", value);
      },
    },
    point: {
      get() {
        return this.$store.getters.getOrderPoint;
      },
      set(value) {
        this.$store.commit("setOrderPointValue", value);
      },
    },
    cityVariant() {
      return this.$store.getters.getCityVariant;
    },
    pointVariant() {
      return this.$store.getters.getFilteredPointVariant(this.city.value.name);
    },
  },
  methods: {
    clearPointValue() {
      this.point = {
        id: null,
        address: "",
      };
    },
  },
};
</script>