<template>
  <base-card>
    <h2>Find Devs</h2>
    <span class="filter-option">
      <input type="checkbox" id="react" checked @change="setFilter" />
      <label for="react">React</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="csharp" checked @change="setFilter" />
      <label for="csharp">C#</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="java" checked @change="setFilter" />
      <label for="java">Java</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="python" checked @change="setFilter" />
      <label for="python">Python</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="tester" checked @change="setFilter" />
      <label for="tester">Tester</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        react: true,
        csharp: true,
        java: true,
        python: true,
        tester: true
      }
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
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
