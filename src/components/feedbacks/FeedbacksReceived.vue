<template>
  <div>
    <section>
      <base-card>
        <header>
          <h2>Feedbacks Received</h2>
        </header>
        <div v-if="feedbacks">
          <ul>
            <div v-for="feedback in feedbacks" :key="feedback.id">
              <li>
                <h2>Supervisor: {{ feedback.supervisor }}</h2>
                <p>Content: {{ feedback.message }}</p>
                <p>Date: {{ feedback.date }}</p>
                <base-button class="deleteFeedback"
                  >Delete this feedback</base-button
                >
              </li>
            </div>
          </ul>
        </div>
        <h3 v-else>Haven't received any feedbacks yet!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['feedbacks'],
  methods: {
    deleteData() {
      this.$store.dispatch('developers/deleteDeveloper');
      this.$router.replace('/developers');
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
