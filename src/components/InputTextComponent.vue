<template>
  <div>
    <label :for="id" class="text-right" :style="{ width: width }">
      {{ label }}
    </label>
    <div class="input">
      <input
        type="text"
        :id="id"
        :value="value"
        @input="changeValue($event.target.value)"
        autocomplete="off"
        :placeholder="placeholder"
        :disabled="disabled"
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
          :key="`${id}-${i}`"
          @click="selectValue(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "input-text-component",
  props: {
    value: {
      default: "",
    },
    label: {
      type: String,
      default: "",
    },    
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
    },
    width: {
      type: String,
      default: "auto",
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
