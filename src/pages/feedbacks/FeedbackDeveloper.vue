<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="supervisor">Supervisor name</label>
      <input type="text" id="supervisor" v-model.trim="supervisor" />
    </div>
    <div class="form-control">
      <label for="project">Project name</label>
      <input type="text" id="project" v-model.trim="project" />
    </div>
    <div class="form-control">
      <label for="from">From</label>
      <input type="date" id="project" v-model.trim="from" />
    </div>
    <div class="form-control">
      <label for="to">To</label>
      <input type="date" id="project" v-model.trim="to" />
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
      supervisor: '',
      project: '',
      from: '',
      to: '',
      message: '',
      formIsValid: true
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.supervisor === '' ||
        this.message === '' ||
        this.from === '' ||
        this.to === ''
      ) {
        this.formIsValid = false;
        return;
      }
      this.$store.dispatch('feedbacks/feedbackDeveloper', {
        supervisor: this.supervisor,
        project: this.project,
        from: this.from,
        to: this.to,
        message: this.message,
        developerId: this.$route.params.id
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
