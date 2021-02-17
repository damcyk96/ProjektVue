<template>
  <div>
    <base-dialog :show="!!error" title="error" @close="handleError">
      <!-- podwójna konwersja by był bool na 100% -->
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <developer-filter @change-filter="setFilters"></developer-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadDevelopers(true)"
            >Refresh</base-button
          >
          <base-button v-if="!isDeveloper && !isLoading" link to="/register"
            >Register as Dev</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasDevelopers">
          <developer-item
            v-for="developer in filteredDeveloper"
            :key="developer.id"
            :id="developer.id"
            :first-name="developer.firstName"
            :last-name="developer.lastName"
            :rate="developer.hourlyRate"
            :areas="developer.areas"
          ></developer-item>
        </ul>
        <h3 v-else>No developes found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import DeveloperItem from '../../components/developers/DeveloperItem';
import DeveloperFilter from '../../components/developers/DeveloperFilter';

export default {
  components: {
    DeveloperItem,
    DeveloperFilter
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        react: true,
        csharp: true,
        java: true,
        python: true,
        tester: true
      }
    };
  },
  computed: {
    isDeveloper() {
      return this.$store.getters['developers/isDeveloper'];
    },
    filteredDeveloper() {
      const developers = this.$store.getters['developers/developers'];
      return developers.filter(developer => {
        if (this.activeFilters.react && developer.areas.includes('react')) {
          return true;
        }
        if (this.activeFilters.csharp && developer.areas.includes('csharp')) {
          return true;
        }
        if (this.activeFilters.java && developer.areas.includes('java')) {
          return true;
        }
        if (this.activeFilters.python && developer.areas.includes('python')) {
          return true;
        }
        if (this.activeFilters.tester && developer.areas.includes('tester')) {
          return true;
        }
        return false;
      });
    },
    hasDevelopers() {
      return !this.isLoading && this.$store.getters['developers/hasDevelopers'];
    }
  },
  created() {
    //TO DO: FIX IT
    //this.loadDevelopers();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    }
  },
  async loadDevelopers(refresh = false) {
    this.isLoading = true;
    try {
      await this.$store.dispatch('developers/loadDevelopers', {
        forceRefresh: refresh
      });
    } catch (error) {
      this.error = error.message || 'Something went wrong!';
    }
    this.isLoading = false;
  },
  handleError() {
    this.error = null;
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
