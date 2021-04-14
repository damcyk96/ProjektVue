<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Added projects to profile</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasProjects && !isLoading">
          <project-item
            v-for="req in receivedProjects"
            :key="req.id"
            :project="req.project"
            :from="req.from"
            :to="req.to"
            :position="req.position"
          ></project-item>
        </ul>
        <h3 v-else>Haven't added any project to profile yet!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import ProjectItem from './ProjectItem.vue';

export default {
  components: {
    ProjectItem
  },
  props: ['id'],
  data() {
    return {
      isLoading: false,
      error: null
    };
  },
  computed: {
    receivedProjects() {
      return this.$store.getters['projects/projects'];
    },
    hasProjects() {
      return this.$store.getters['projects/hasProjects'];
    }
  },
  created() {
    this.loadProjects(this.id);
  },
  methods: {
    async loadProjects(id) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('projects/fetchProjects', id);
      } catch (error) {
        this.error = error.message || 'Something failed!';
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
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
