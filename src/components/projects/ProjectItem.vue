<template>
  <li>
    <div>
      <h3>For project: {{ project }}</h3>
      <h4>From: {{ from }} to: {{ to }}</h4>
    </div>
    <hr />
  </li>
</template>

<script>
export default {
  props: ['project', 'from', 'to']
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
