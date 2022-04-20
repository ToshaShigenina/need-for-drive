<template>
  <div>
    <label 
      :for="id" 
      class="text-right" 
      :style="{ width: width }"
    >
      {{ label }}
    </label>
    <div class="input" ref="inputText">
      <input
        type="text"
        autocomplete="off"
        :id="id"
        :value="value[dataField]"
        :disabled="disabled"
        :placeholder="placeholder"
        @input="changeValue($event.target.value)"
      />

      <button
        v-if="value"
        type="button"
        class="input__close"
        @click="changeValue('')"
      ></button>
    </div>
  </div>
</template>
<script>
export default {
  name: "input-text-component",
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
    id: {
      type: String,
    },
    width: {
      type: String,
      default: "auto",
    },
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    changeValue(value) {
      this.$emit("input", value);
    },
    clearValue(value) {
      this.$emit("clear");
      this.changeValue(value);
    },
  },
};
</script>
