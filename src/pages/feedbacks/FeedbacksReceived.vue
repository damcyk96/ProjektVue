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
          <h2>Feedbacks Received</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasFeedbacks && !isLoading">
          <feedback-item
            v-for="req in receivedFeedbacks"
            :key="req.id"
            :supervisor="req.supervisor"
            :project="req.project"
            :from="req.from"
            :to="req.to"
            :message="req.message"
          ></feedback-item>
        </ul>
        <h3 v-else>Haven't received any feedbacks yet!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import FeedbackItem from '../../components/feedbacks/FeedbackItem.vue';

export default {
  components: {
    FeedbackItem
  },
  data() {
    return {
      isLoading: false,
      error: null
    };
  },
  computed: {
    receivedFeedbacks() {
      return this.$store.getters['feedbacks/feedbacks'];
    },
    hasFeedbacks() {
      return this.$store.getters['feedbacks/hasFeedbacks'];
    }
  },
  created() {
    this.loadFeedbacks();
  },
  methods: {
    async loadFeedbacks() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('feedbacks/fetchFeedbacks');
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
