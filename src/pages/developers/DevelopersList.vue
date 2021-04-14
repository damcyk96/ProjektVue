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
          <base-button to="/auth?redirect=register" v-if="!isLoggedIn"
            >Login to add your data</base-button
          >
          <base-button
            v-if="isLoggedIn && !isDeveloper && !isLoading"
            to="/register"
            >Register as Dev</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasDevelopers">
          <developer-item
            v-for="developer in filteredDevelopers"
            :key="developer.id"
            :id="developer.id"
            :first-name="developer.firstName"
            :last-name="developer.lastName"
            :rate="developer.hourlyRate"
            :areas="developer.areas"
            :privilege="developer.privilege"
          ></developer-item>
        </ul>
        <h3 v-if="filteredDevelopers.length == 0 && !isloading">
          No developes found.
        </h3>
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
      error: null
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    isDeveloper() {
      return this.$store.getters['developers/isDeveloper'];
    },
    isFeedbackDev() {
      return this.$store.getters['developers/isFeedbackDev'];
    },
    filteredDevelopers() {
      const developers = this.$store.getters['developers/developers'];
      const newFilters = this.activeFilters.filters;
      return developers.filter(developer =>
        Object.keys(newFilters).some(
          name => newFilters[name] && developer.areas.includes(name)
        )
      );
    },
    hasDevelopers() {
      return !this.isLoading && this.$store.getters['developers/hasDevelopers'];
    },
    activeFilters() {
      return this.$store.state.filters;
    }
  },
  created() {
    this.loadDevelopers();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
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
