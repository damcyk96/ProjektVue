<template>
  <section>
    <base-card>
      <h2>Delete account</h2>
      <developer-form-delete @delete-data="deleteData"></developer-form-delete>
    </base-card>
  </section>
</template>

<script>
import DeveloperFormDelete from '../../components/developers/DeveloperFormDelete';

export default {
  components: {
    DeveloperFormDelete
  },

  methods: {
    deleteData() {
      this.$store.dispatch('developers/deleteDeveloper', {
        id: this.$route.params.id
      });
      this.$router.replace('/developers');
    }
  }
};
</script>
