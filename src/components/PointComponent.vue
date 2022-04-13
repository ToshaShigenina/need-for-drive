<template>
  <transition name="fade">
    <loader-component v-if="!cityVariant.length" />
    <div v-else class="content point">
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
      <map-component :coords="coords" @set-coords="setCoords" />
    </div>
  </transition>
</template>
<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import InputTextComponent from "@/components/InputTextComponent.vue";
import MapComponent from "@/components/MapComponent.vue";

export default {
  name: "point-component",
  components: {
    LoaderComponent,
    InputTextComponent,
    MapComponent,
  },
  data() {
    return {
      coords: [57.43016, 46.947032],
    };
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
    setCoords(value) {
      console.log(value);
      if (value) this.coords = value;
      // console.log(this.coords);
    },
  },
};
</script>