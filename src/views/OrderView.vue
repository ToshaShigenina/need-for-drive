<template>
  <div class="wrapper wrapper_inner">
    <div class="container">
      <div class="row">
        <header-component />
      </div>

      <tabs-component :list="tabs" :active="active" @to-tab="toTab">
        <template v-slot:tab-0>
          <div class="row justify-content-between">
            <div class="col-md-70 col-sm-60 col-100">
              <div class="content point">
                <div class="point__form form">
                  <input-text-component
                    v-model="city.value"
                    type="city"
                    :data="cityVariant"
                    :label="city.label"
                    width="94px"
                    placeholder="Начните вводить город..."
                    class="form__group"
                  />
                  <input-text-component
                    v-model="point.value"
                    type="point"
                    :data="pointVariant"
                    :label="point.label"
                    width="94px"
                    placeholder="Начните вводить пункт..."
                    class="form__group"
                  />
                </div>

                <map-component />
              </div>
            </div>
            <div class="col-md-30 col-sm-40 col-100">
              <order-component>
                <template v-slot:btn>
                  <button
                    type="button"
                    class="btn mw-100"
                    :disabled="tabs[1].disabled"
                    @click="toTab(1)"
                  >
                    Выбрать модель
                  </button>
                </template>
              </order-component>
            </div>
          </div>
        </template>
        <template v-slot:tab-1>
          <div class="row justify-content-between">
            <div class="col-md-70 col-sm-60 col-100">
              <div class="content model">
                <ul class="model__options input-list">
                  <li v-for="category in categoryList" :key="category.id">
                    <input-switch-component
                      type="radio"
                      :label="category.text"
                      name="category"
                      :value="category.id"
                      v-model="categoryActive"
                    />
                  </li>
                </ul>
                <model-list-component :category="categoryActive"/>
              </div>
            </div>
            <div class="col-md-30 col-sm-40 col-100">
              <order-component>
                <template v-slot:btn>
                  <button
                    type="button"
                    class="btn mw-100"
                    :disabled="tabs[2].disabled"
                    @click="toTab(2)"
                  >
                    Дополнительно
                  </button>
                </template>
              </order-component>
            </div>
          </div>
        </template>
        <template v-slot:tab-2>
          <div class="row justify-content-between">
            <div class="col-md-70 col-sm-60 col-100">
              <div class="content option">
                <div class="option__item color">
                  <ul class="model__options input-list">
                    <li v-for="(color, i) in colors" :key="i">
                      <input-switch-component
                        type="radio"
                        :label="color"
                        name="color"
                        :value="color"
                        v-model="colorActive"
                      />
                    </li>
                  </ul>
                </div>
                <div class="option__item period">
                  <date-picker-component 
                    v-model="dateStart" 
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
                    :clearable="true"
                    :disabled-date="notBeforeToday"
                  >
                    <template v-slot:input>
                      <input-text-component
                        v-model="dateStart"
                        type="date_start"
                        label="C"
                        width="20px"
                        placeholder="Введите дату и время"
                      />
                    </template>
                  </date-picker-component>
                  <date-picker-component 
                    v-model="dateEnd" 
                    type="datetime" 
                    value-type="format" 
                    format="DD.MM.YYYY HH:mm" 
                    :lang="lang" 
                    :editable="false" 
                    :confirm="true" 
                    time-title-format="DD.MM.YYYY" 
                    :default-value="new Date(parse(dateStart))" 
                    :minute-step="5" 
                    :show-second="false" 
                    :clearable="true"
                    :disabled-date="notBeforeDateStart"
                    :disabled="!dateStart"
                  >
                    <template v-slot:input>
                      <input-text-component
                        v-model="dateEnd"
                        type="date_end"
                        label="C"
                        width="20px"
                        :disabled="!dateStart"
                        placeholder="Введите дату и время"
                      />
                    </template>
                  </date-picker-component>
                </div>
              </div>
            </div>
            <div class="col-md-30 col-sm-40 col-100">
              <order-component>
                <template v-slot:btn>
                  <button
                    type="button"
                    class="btn mw-100"
                    :disabled="tabs[3].disabled"
                    @click="toTab(3)"
                  >
                    Итого
                  </button>
                </template>
              </order-component>
            </div>
          </div>
        </template>
        <template v-slot:tab-3>
          <div class="row justify-content-between">
            <div class="col-md-70 col-sm-60 col-100">
              <div class="content">{{ tabList[3] }}</div>
            </div>
            <div class="col-md-30 col-sm-40 col-100">
              <order-component>
                <template v-slot:btn>
                  <button type="button" class="btn mw-100">Заказать</button>
                </template>
              </order-component>
            </div>
          </div>
        </template>
      </tabs-component>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import TabsComponent from "@/components/TabsComponent.vue";
import OrderComponent from "@/components/OrderComponent.vue";
import InputTextComponent from "@/components/InputTextComponent.vue";
import InputSwitchComponent from "@/components/InputSwitchComponent.vue";
import MapComponent from "@/components/MapComponent.vue";
import ModelListComponent from "@/components/ModelListComponent.vue";
import DatePickerComponent from "@/components/DatePickerComponent.vue";

export default {
  name: "OrderView",
  components: {
    HeaderComponent,
    TabsComponent,
    OrderComponent,
    InputTextComponent,
    InputSwitchComponent,
    MapComponent,
    ModelListComponent,
    DatePickerComponent,
  },
  data() {
    return {
      active: 0,
      categoryActive: 0,
      colorActive: "Любой",
      tabList: ["Местоположение", "Модель", "Дополнительно", "Итого"],
      dateStart: this.formatter(new Date()),
      dateEnd: null,
      lang: {
        formatLocale: {
          firstDayOfWeek: 1,
        },
        monthBeforeYear: false,
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
    model() {
      return this.$store.getters.getOrderModel;
    },
    colors() {
      const car = this.$store.getters.getCar(this.model.id);
      if (car) return car.colors;
      return [];
    },
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
    cityVariant() {
      return this.$store.getters.getCityVariant;
    },
    pointVariant() {
      return this.$store.getters.getPointVariant;
    },
    tabs() {
      return this.tabList.map((item, i) => {
        const result = { text: item };
        if (this.active === i || i === 0) {
          result.disabled = false;
        } else if (i === 1) {
          result.disabled = !(this.city.value && this.point.value);
        } else if (i === 2) {
          result.disabled = !this.model.value;
        } else {
          result.disabled = true;
        }
        return result;
      });
    },
  },
  methods: {
    toTab(i) {
      if (!this.tabs[i].disabled) this.active = i;
    },
    notBeforeToday(date) {
      const beforeToday = date < new Date(new Date().setHours(0, 0, 0, 0));
      const afterEnd = this.dateEnd ? date > new Date(new Date(this.parse(this.dateEnd)).setHours(0, 0, 0, 0)) : null;
      return afterEnd !== null ? (beforeToday || afterEnd) : beforeToday;
    },
    notBeforeDateStart(date) {
      const dateStart = this.dateStart ? new Date(this.parse(this.dateStart)) : null;
      return dateStart !== null ? date < new Date(dateStart.setDate(dateStart.getDate() - 1)) : false;
    },
    formatter(date) {
      if(typeof date === 'object') {
        const fullNumber = num => num < 10 ? '0'+num : num;
        return `${fullNumber(date.getDate())}.${fullNumber(date.getMonth()+1)}.${date.getFullYear()} ${fullNumber(date.getHours())}:${fullNumber(
          (Math.trunc(date.getMinutes() / 5) * 5) + 10
        )}`;
      }
      return date;
    },
    parse (dateString) {
      if(dateString) {
        const str = dateString.split('.');
        return `${str[1]}.${str[0]}.${str[2]}`;
      }
      return dateString;
    },
  },
};
</script>
