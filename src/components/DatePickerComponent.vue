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
    :default-value="new Date()"
    :minute-step="5"
    :show-second="false"
    :disabled-date="notBeforeToday"
  >
    <template v-slot:icon-calendar>
      <span></span>
    </template>
    <template v-slot:icon-clear>
      <span></span>
    </template>
    <template v-slot:input>
      <input-text-component
        v-model="value"
        type="date_start"
        label="C"
        width="20px"
        placeholder="Введите дату и время"
      />
    </template>
  </date-picker>
</template>
<script>
import DatePicker from "vue2-datepicker";
import "../assets/style/components/_datepicker.scss";
import "vue2-datepicker/locale/ru";

export default {
  name: "dete-time-picker-component",
  props: {
    value: {
      default: null,
    },
    label: {
      type: String,
      default: "",
    },
    id: {
      type: String,
    },
    width: {
      type: String,
      default: "auto",
    },
  },
  components: {
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
  methods: {},
};
</script>
