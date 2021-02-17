<template>
  <section>
    <base-card>
      <h2>Add a dev</h2>
      <developer-form @save-data="saveData"></developer-form>
    </base-card>
  </section>
</template>

<script>
import DeveloperForm from '../../components/developers/DeveloperForm';

export default {
  components: {
    DeveloperForm
  },
  computed: {},
  methods: {
    saveData(data) {
      this.$store.dispatch('developers/registerDeveloper', data);
      this.$router.replace('/developers');
    }
  }
};
</script>
