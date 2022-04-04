<template>
  <div class="input">
    <input
      type="text"
      :id="type"
      :value="value"
      @input="changeValue($event.target.value)"
      autocomplete="off"
      v-bind="$attrs"
    />

    <button
      type="button"
      class="input__close"
      @click="changeValue('')"
      v-if="value"
    ></button>

    <ul
      class="input__result"
      v-if="value && data && filteredData.length && open"
    >
      <li
        v-for="(item, i) in filteredData"
        :key="`${type}-${i}`"
        @click="selectValue(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "inpup-component",
  props: {
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
    },
    data: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    filteredData() {
      return this.data.filter((item) =>
        item.toLowerCase().includes(this.value.toLowerCase())
      );
    },
  },
  methods: {
    changeValue(value) {
      this.open = true;
      this.$emit("input", value);
    },
    selectValue(value) {
      this.open = false;
      this.$emit("input", value);
    },
  },
};
</script>
