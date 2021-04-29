<template>
  <h2>Are you sure to delete this feedback?</h2>
  <base-button @click="submitDelete">Yes, delete</base-button>
  <base-button to="/developers">No, back to developers</base-button>
</template>

<script>
export default {
  emits: ['delete-data'],
  methods: {
    submitDelete() {
      const formData = {
        id: this.$route.params.id
      };
      console.log(formData);
      this.$emit('delete-data', formData);
    }
  }
};
</script>
