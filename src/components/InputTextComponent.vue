<template>
  <div class="form__group">
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
        @click="open = true"
      />

      <button
        v-if="value"
        type="button"
        class="input__close"
        @click="changeValue('')"
      ></button>

      <ul
        v-if="data && filteredData.length && open"
        class="input__result"
      >
        <li
          v-for="item in filteredData"
          :key="item.id"
          @click="selectValue(item)"
        >
          {{ item[dataField] }}
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
      type: Object,
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
    data: {
      type: Array,
      default: () => [],
    },
    dataField: {
      type: String,
      default: "name",
    },
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    filteredData() {
      if (this.data.length) {
        return this.data.filter((item) =>
          item[this.dataField]
            .toLowerCase()
            .includes(this.value[this.dataField].toLowerCase())
        );
      }
      return [];
    },
  },
  methods: {
    changeValue(value) {
      const item = this.data
        .find((elem) => elem[this.dataField] === value) || {};
      if (!Object.keys(item).lenght) {
        item[this.dataField] = value;
        item.id = null;
        this.$emit("clear");
      }
      this.createEvent(item);
    },
    selectValue(value) {
      this.open = false;
      this.createEvent(value);
    },
    createEvent(item) {
      this.$emit("input", item);
      this.$emit("to-order", item);
    },
    closeResultList(e) {
      const target = e.target.closest(".input");
      if (!target || target !== this.$refs.inputText) this.open = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.closeResultList.bind(this));
  },
};
</script>
