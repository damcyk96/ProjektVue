<template>
  <li>
    <div>
      <h3>Project name: {{ project }}</h3>
      <h4>From: {{ from }} to: {{ to }}</h4>
      <h4>{{ position }}</h4>
    </div>
    <hr />
    <div v-if="isFeedbackDev">
      <div v-for="feedback in feedbacks" :key="feedback.id">
        <h3>{{ feedback.supervisor }}</h3>
        <p>{{ feedback.message }}</p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ['project', 'from', 'to', 'position', 'feedbacks'],
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
