<template>
  <transition name="fade">
    <loader-component v-if="!cityVariant.length" />
    <div v-else class="content point">
      <div class="point__form">
        <input-search-component
          v-model="city.value"
          id="city"
          :data="cityVariant"
          :label="city.label"
          width="94px"
          placeholder="Начните вводить город..."
          class="form-group"
          @clear="clearValue"
          @input="setCoords(city.value.coords)"
        />
        <input-search-component
          v-model="point.value"
          id="point"
          :data="pointVariant"
          data-field="address"
          :label="point.label"
          width="94px"
          placeholder="Начните вводить пункт..."
          class="form-group"
          @clear="setCoords(city.value.coords)"
          @input="setCoords(point.value.coords)"
        />
      </div>
      <map-component :coords="coords" @set-coords="setCoords" />
    </div>
  </transition>
</template>
<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import InputSearchComponent from "@/components/InputSearchComponent.vue";
import MapComponent from "@/components/MapComponent.vue";

export default {
  name: "point-component",
  components: {
    LoaderComponent,
    InputSearchComponent,
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
    clearValue() {
      this.point = {
        id: null,
        address: "",
      };
      this.setCoords();
    },
    setCoords(coords) {
      if (coords) this.coords = coords;
      else this.coords = [57.43016, 46.947032];
    },
  },
  created() {
    if (this.city.value.id || this.point.value.id) {
      this.coords = this.point.value.coords || this.city.value.coords;
    }
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/style/abstracts/_variables.scss';
@import '@/assets/style/components/_point.scss';
</style>