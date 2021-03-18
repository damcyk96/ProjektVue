<template>
  <base-card>
    <h2 data-testid="dev__filter-h2">Find Devs</h2>
    <span
      data-testid="dev__filter"
      class="filter-option"
      v-for="(key, value) in filters"
      :key="key"
    >
      <input
        type="checkbox"
        :id="filter"
        checked
        @change="setFilter(key, $event)"
      />
      <label :for="filter">{{ value }}</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  methods: {
    setFilter() {
      const filterPayload = {
        key: this.key,
        value: this.value
      };
      this.$store.dispatch('setFilter', filterPayload);
    }
  },
  computed: {
    filters() {
      return this.$store.state.filters.filters;
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
