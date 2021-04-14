<template>
  <div v-if="!isLoading">
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>{{ rate }} per hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <div v-if="isFeedbackDev && receivedProjects > 0">
          <header>
            <h2>Add feedback for {{ fullName }}</h2>
            <base-button link :to="feedbackLink">Feedbacks</base-button>
          </header>
          <router-view></router-view>
        </div>
        <h4 v-else>
          You can't add any feedback. Developer
          {{ fullName }} hasn't add any project yet.
        </h4>
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
        <added-projects :id="id"> </added-projects>
      </base-card>
    </section>
  </div>
</template>

<script>
import AddedProjects from '../../components/projects/AddedProjects.vue';

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
      return this.$route.path + '/feedback';
    },
    selectedDeveloper() {
      return this.$store.getters['developers/developers'].find(
        developer => developer.id === this.id
      );
    },
    isFeedbackDev() {
      return this.$store.getters['developers/isFeedbackDev'];
    },
    receivedProjects() {
      return this.$store.getters['projects/projects'].length;
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
