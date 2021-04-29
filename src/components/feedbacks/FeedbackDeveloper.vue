<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label>Choose project:</label>
      <select v-model.trim="project">
        <option
          v-for="project in receivedProjects"
          :key="project.id"
          :value="project.id"
          >{{
            'In project:' + project.project + ' as ' + project.position
          }}</option
        >
      </select>
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea rows="5" id="message" v-model.trim="message"></textarea>
    </div>
    <p class="errors" v-if="!formIsValid">
      Please enter a valid email and non-empty message.
    </p>
    <div class="actions">
      <base-button>Add Feedback</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      project: '',
      supervisor: '',
      message: '',
      formIsValid: true
    };
  },
  props: ['id'],
  computed: {
    receivedProjects() {
      return this.$store.getters['projects/projects'];
    },
    fullNameSuperVisor() {
      return this.$store.getters['developers/fullNameDeveloper'];
    }
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (this.project === '' || this.message === '') {
        this.formIsValid = false;
        return;
      }
      this.$store.dispatch('feedbacks/feedbackDeveloper', {
        project: this.project,
        supervisor: this.fullNameSuperVisor,
        message: this.message,
        developerId: this.$route.params.id,
        date: new Date().toLocaleString()
      });
      this.$router.replace('/developers');
    }
  }
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #1d6ead;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
