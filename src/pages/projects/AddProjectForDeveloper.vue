<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="name">Project name</label>
        <input type="text" id="project" v-model.trim="project" />
      </div>
      <div class="form-control">
        <label>Choose supervisor:</label>
        <select v-model.trim="supervisor">
          <option
            v-for="developer in superDevelopers"
            :key="developer.id"
            :value="developer.firstName + ' ' + developer.lastName"
            >{{ developer.firstName + ' ' + developer.lastName }}</option
          >
        </select>
      </div>
      <div class="form-control">
        <h3>Areas of Expertise</h3>
        <label class="area-label" :for="area" v-for="area in areas" :key="area">
          <input
            type="checkbox"
            :value="area"
            :id="area"
            v-model="technologies"
          />
          {{ area }}
        </label>
      </div>
      <span>Checked names: {{ technologies }}</span>

      <div class="form-control">
        <label for="from">From</label>
        <input type="date" id="from" v-model.trim="from" />
      </div>
      <div class="form-control">
        <label for="to">To</label>
        <input type="date" id="to" v-model.trim="to" />
      </div>
      <div class="form-control">
        <label for="position">Position</label>
        <input type="text" id="position" v-model.trim="position" />
      </div>
      <p class="errors" v-if="!formIsValid">
        Please check again your form.
      </p>
      <div class="actions">
        <base-button>Add project to your profile</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      project: '',
      from: '',
      to: '',
      position: '',
      supervisor: '',
      technologies: [],
      formIsValid: true
    };
  },
  computed: {
    superDevelopers() {
      return this.$store.getters['developers/superDevelopers'];
    },
    areas() {
      let areasArray = this.$store.state.filters.filters;
      areasArray = Object.keys(areasArray);
      return areasArray;
    }
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.project === '' ||
        this.from === '' ||
        this.to === '' ||
        this.position === ''
      ) {
        this.formIsValid = false;
        return;
      }
      this.$store.dispatch('projects/projectForDeveloper', {
        project: this.project,
        from: this.from,
        to: this.to,
        position: this.position,
        supervisor: this.supervisor,
        technologies: this.technologies,
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
