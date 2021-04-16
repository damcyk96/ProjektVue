<template>
  <h2>Are you sure to delete that account?</h2>
  <base-button @click="submitDelete">Yes, delete</base-button>
  <base-button to="/developers">No, back to developers</base-button>
</template>

<script>
export default {
  emits: ['delete-data'],
  methods: {
    submitDelete() {
      const formData = {
        id: this.id
      };
      this.$emit('delete-data', formData);
    }
  }
};
</script>
