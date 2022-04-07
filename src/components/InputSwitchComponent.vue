<template>
  <label :class="type">
    <input
      :type="type"
      :name="name"
      :value="value"
      :checked="isChecked"
      @change="changeValue($event.target)"
    />
    <span>{{ label }}</span>
  </label>
</template>
<script>
export default {
  name: "input-switch-component",
  model: {
    prop: "modelValue",
  },
  props: {
    value: {
      require: true,
    },
    modelValue: {
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      } else {
        return this.modelValue === this.value;
      }
    },
  },
  methods: {
    changeValue(target) {
      let isChecked = target.checked;
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue];
        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }
        this.$emit("input", newValue);
      } else {
        this.$emit("input", this.value);
      }
    },
  },
};
</script>
