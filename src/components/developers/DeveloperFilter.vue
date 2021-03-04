<template>
  <base-card>
    <h2>Find Devs</h2>
    <span class="filter-option" v-for="(key, value) in filters" :key="key">
      <input type="checkbox" :id="filter" checked @change="setFilter" />
      <label :for="filter">{{ value }}</label>
    </span>
  </base-card>
</template>

<script>
import { filters } from '../../store/specialisation.js';
export default {
  emits: ['change-filter'],
  data() {
    return filters;
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      this.filter[inputId] = isActive;
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
