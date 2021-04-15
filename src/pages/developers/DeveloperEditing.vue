<template>
  <section>
    <base-card>
      <h2>Change your data</h2>
      <developer-form-edit @update-data="updateData"></developer-form-edit>
    </base-card>
  </section>
</template>

<script>
import DeveloperFormEdit from '../../components/developers/DeveloperFormEdit';

export default {
  components: {
    DeveloperFormEdit
  },
  computed: {},
  methods: {
    updateData(data) {
      this.$store.dispatch('developers/updateDeveloper', data);
      this.$router.replace('/developers');
    }
  }
};
</script>
