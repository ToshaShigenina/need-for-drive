<template>
  <div class="map">
    <p>Выбрать на карте:</p>
    <yandex-map
      v-if="pointVariant.length"
      ref="map"
      :coords="coords"
      :zoom="zoom"
      :show-all-markers="showAllMarkers"
      :scroll-zoom="false"
      :controls="['zoomControl']"
      class="map__frame"
      @map-was-initialized="initMap"
    >
      <ymap-marker
        v-for="point in pointVariant"
        :key="point.id"
        :icon="icon"
        :marker-id="point.id"
        :coords="point.coords"
        :hint-content="`<strong>${point.cityId.name}</strong><br>${point.address}`"
        @click="selectMarker($event, point)"
      />
    </yandex-map>
  </div>
</template>
<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";

export default {
  name: "map-component",
  components: {
    yandexMap,
    ymapMarker,
  },
  props: {
    coords: {
      type: Array,
    },
  },
  data() {
    return {
      // coords: [57.43016, 46.947032],
      map: null,
      zoom: 4,
      showAllMarkers: true,
      icon: {
        layout: "default#image",
        imageHref: `${require("../assets/img/marker.svg")}`,
        imageSize: [18, 18],
        imageOffset: [-10, -8],
      },
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
    pointVariant() {
      return this.$store.getters.getPointVariant;
    },
    cityVariant() {
      return this.$store.getters.getCityVariant;
    },
  },
  watch: {
    coords(value) {
      const point = this.pointVariant.find((item) => {
        if (item.coords[0] === value[0] && item.coords[1] === value[1])
          return item;
      });
      const city = this.cityVariant.find((item) => {
        if (point) {
          if (item.id === point.cityId.id) return item;
        } else {
          if (item.coords[0] === value[0] && item.coords[1] === value[1])
            return item;
        }
      });

      if (city && !point) {
        this.zoom = 6;
        if (!this.city.value.id) this.city = city;
      } else if (city && point) {
        this.zoom = 16;
        if (!this.city.value.id) this.city = city;
        if (!this.point.value.id) this.point = point;
      } else {
        this.zoom = 4;
      }
      this.map.setCenter(value, this.zoom);
    },
  },
  methods: {
    selectMarker(_, point) {
      this.$emit("set-coords", point.coords);
    },
    initMap(map) {
      this.map = map;
      this.map.setCenter(this.coords, this.zoom);
    },
  },
  created() {
    if (this.city.value.id && this.point.value.id) {
      this.zoom = 16;
      this.showAllMarkers = false;
    }
  },
};
</script>
