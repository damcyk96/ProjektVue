<template>
  <div>
    <section>
      <base-card>
        <header>
          <h2>Feedbacks Received</h2>
        </header>
        <div v-if="feedbacks">
          <ul>
            <li>
              <div v-for="feedback in feedbacks" :key="feedback.id">
                <h2>{{ feedback.supervisor }}</h2>
                <p>{{ feedback.message }}</p>
              </div>
            </li>
          </ul>
        </div>
        <h3 v-else>Haven't received any feedbacks yet!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['feedbacks']
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
