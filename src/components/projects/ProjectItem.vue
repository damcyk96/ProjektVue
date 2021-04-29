<template>
  <li>
    <div>
      <h2>Project name: {{ project }}</h2>
      <h3>Supervisor: {{ supervisor }}</h3>
      <h4>From: {{ from }} to: {{ to }}</h4>
      <h4>{{ position }}</h4>
      <div>
        <base-badge
          v-for="technology in technologies"
          :key="technology"
          :type="technology"
          :title="technology"
        ></base-badge>
      </div>
    </div>
    <hr />
    <FeedbacksReceived :feedbacks="feedbacks" v-if="isFeedbackDev" />
  </li>
</template>

<script>
import FeedbacksReceived from '../feedbacks/FeedbacksReceived';
export default {
  components: {
    FeedbacksReceived
  },
  props: [
    'project',
    'from',
    'to',
    'position',
    'supervisor',
    'technologies',
    'feedbacks'
  ],
  computed: {
    isFeedbackDev() {
      return this.$store.getters['developers/isFeedbackDev'];
    }
  }
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #0076bb;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #1b1272;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>
