<template>
  <li>
    <div>
      <h2>{{ supervisor }}</h2>
      <h3>For project: {{ project }}</h3>
      <h4>From: {{ from }} to: {{ to }}</h4>
    </div>
    <hr />
    <p>{{ message }}</p>
  </li>
</template>

<script>
export default {
  props: ['supervisor', 'project', 'from', 'to', 'message']
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
