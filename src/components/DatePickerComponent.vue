<template>
  <date-picker
    :value="value"
    type="datetime"
    value-type="format"
    format="DD.MM.YYYY HH:mm"
    :lang="lang"
    :editable="false"
    :confirm="true"
    time-title-format="DD.MM.YYYY"
    :default-value="defaultValue"
    :minute-step="5"
    :show-second="false"
    :disabled-date="disabledDate"
    :disabled="disabled"
    @input="inputValue($event)"
  >
    <template v-slot:icon-calendar>
      <span></span>
    </template>
    <template v-slot:icon-clear>
      <span></span>
    </template>
    <template v-slot:input>
      <input-text-component
        :value="value"
        :id="id"
        :label="label"
        :width="width"
        :placeholder="placeholder"
        :disabled="disabled"
        class="form-group"
        @input="inputValue($event)"
        @clear="$emit('clear')"
      />
    </template>
  </date-picker>
</template>
<script>
import InputTextComponent from "@/components/InputTextComponent.vue";
import DatePicker from "vue2-datepicker";
import "../assets/style/components/_datepicker.scss";
import "vue2-datepicker/locale/ru";

export default {
  name: "dete-time-picker-component",
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
    defaultValue: {
      default: () => new Date(),
    },
    disabledDate: {
      default: false,
    },
  },
  components: {
    InputTextComponent,
    DatePicker,
  },
  data() {
    return {
      lang: {
        formatLocale: {
          firstDayOfWeek: 1,
        },
        monthBeforeYear: false,
      },
    };
  },
  computed: {},
  methods: {
    inputValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>
