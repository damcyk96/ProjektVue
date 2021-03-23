<template>
  <base-card>
    <h2 data-testid="dev__filter-h2">Find Devs</h2>
    <span
      :data-testid="`filter-span-${key}`"
      class="filter-option"
      v-for="(value, key) in filters"
      :key="key"
    >
      <input
        :data-testid="`filter-input-${key}`"
        type="checkbox"
        :id="key"
        :checked="value"
        @change="setFilter(key, $event)"
      />
      <label :data-testid="`filter-label-${key}`" :for="key">{{ key }}</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  methods: {
    setFilter(key, event) {
      const filterPayload = {
        value: event.target.checked,
        key
      };
      this.$store.dispatch('filters/setFilter', filterPayload);
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
