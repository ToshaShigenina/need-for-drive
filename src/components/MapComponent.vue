<template>
  <div class="map">
    <p>Выбрать на карте:</p>
    <yandex-map
      ref="map"
      :coords="coords"
      :zoom="zoom"
      :show-all-markers="true"
      class="map__frame"
    >
      <ymap-marker
        v-for="point in pointVariant"
        :key="point.id"
        :icon="icon"
        :marker-id="point.id"
        :coords="point.coords"
        :balloon="{ header: point.name, body: point.address }"
        :hint-content="point.address"
        @click="selectMarker(point.coords)"
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
      zoom: 3,
      icon: {
        iconLayout: "default#image",
        iconImageHref: `${require("../assets/img/marker.svg")}`,
        iconImageSize: [18, 18],
      },
    };
  },
  computed: {
    pointVariant() {
      return this.$store.getters.getPointVariant;
    },
  },
  methods: {
    selectMarker(coords) {
      console.log(coords);
      this.zoom = 8;
      this.$emit("set-coords", coords);
      // :marker-fill="{ color: '#ffffff', opacity: 1 }"
      // :marker-stroke="{ color: '#0ec261', width: 5 }"
    },
  },
};
</script>
