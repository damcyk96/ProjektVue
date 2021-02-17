<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.react {
  background-color: #1168cc;
  color: white;
}

.csharp {
  background-color: #09350f;
  color: white;
}

.java {
  background-color: #0a35f3;
  color: white;
}

.python {
  background-color: #14e00d;
  color: white;
}

.tester {
  background-color: #5f0ebb;
  color: white;
}
</style>
