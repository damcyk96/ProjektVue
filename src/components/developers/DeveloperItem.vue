<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>{{ privilege }}</h4>
    <h4>{{ rate }} per hour</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button
        v-if="isSuperUser"
        mode="outline"
        :to="{ name: 'feedbackDev', params: { id: id } }"
        >Feedback</base-button
      >
      <base-button :to="{ name: 'developer', params: { id: id } }"
        >View Details</base-button
      >
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas', 'privilege'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    isSuperUser() {
      return this.$store.getters.isSuperUser;
    }
  }
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
