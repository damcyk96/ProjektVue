<template>
  <div v-if="!isLoading">
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>{{ rate }} per hour</h3>
      </base-card>
    </section>
    <section v-if="isSuperUser">
      <base-card>
        <header>
          <h2>Add feedback for {{ fullName }}</h2>
          <base-button link :to="feedbackLink">Feedbacks</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
      </base-card>
    </section>

    <section>
      <base-card>
        <p>{{ description }}</p>
      </base-card>
    </section>
    <section>
      <base-card>
        <AddedProjects />
      </base-card>
    </section>
  </div>
</template>

<script>
//import FeedbacksReceived from '../feedbacks/FeedbacksReceived';
import AddedProjects from '../../components/projects/AddedProjects';

export default {
  components: {
    AddedProjects
  },
  props: ['id'],
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    fullName() {
      return (
        this.selectedDeveloper.firstName + ' ' + this.selectedDeveloper.lastName
      );
    },
    areas() {
      return this.selectedDeveloper.areas;
    },
    rate() {
      return this.selectedDeveloper.hourlyRate;
    },
    description() {
      return this.selectedDeveloper.description;
    },
    feedbackLink() {
      return this.$route.path + '/' + this.id + '/feedback';
    },
    selectedDeveloper() {
      return this.$store.getters['developers/developers'].find(
        developer => developer.id === this.id
      );
    },
    isSuperUser() {
      return this.$store.getters.isSuperUser;
    }
  },
  created() {
    this.loadDevelopers();
  },
  methods: {
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
    }
  }
};
</script>
