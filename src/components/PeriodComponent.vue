<template>
  <div class="option__item period">
    <p class="option__type">Дата аренды</p>
    <ul class="option__list">
      <li>
        <date-picker-component 
          v-model="dateFrom"
          :disabled-date="notBeforeToday"
          id="date_start"
          label="C"
          width="20px"
          placeholder="Введите дату и время"
          class="form-group"
          @clear="clearDateFrom"
        />
      </li>
      <li>
        <date-picker-component 
          v-model="dateTo" 
          :default-value="dateFrom" 
          :disabled-date="notBeforedateFrom"
          :disabled="!dateFrom"
          id="date_end"
          label="По"
          width="20px"
          placeholder="Введите дату и время"
          class="form-group"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import DatePickerComponent from "@/components/DatePickerComponent.vue";
import { parse, format } from "@/plugins/datetime";

export default {
  name: "period-component",
  components: {
    DatePickerComponent,
  },
  computed: {
    dateFrom: {
      get() {
        return format(this.$store.getters.getOrderDateFrom);
      },
      set(value) {
        this.$store.commit("setOrderDateFromValue", format(value));
      },
    },
    dateTo: {
      get() {
        return format(this.$store.getters.getOrderDateTo);
      },
      set(value) {
        this.$store.commit("setOrderDateToValue", format(value));
      },
    },
  },
  methods: {
    clearDateFrom() {
      this.dateTo = "";
    },
    notBeforeToday(date) {
      const beforeToday = date < new Date(new Date().setHours(0, 0, 0, 0));
      const afterEnd = this.dateTo
        ? date > new Date(new Date(parse(this.dateTo)).setHours(0, 0, 0, 0))
        : null;
      return afterEnd !== null ? beforeToday || afterEnd : beforeToday;
    },
    notBeforedateFrom(date) {
      const dateStart = this.dateFrom ? new Date(parse(this.dateFrom)) : null;
      return dateStart !== null
        ? date < new Date(dateStart.setDate(dateStart.getDate() - 1))
        : false;
    },
  },
};
</script>