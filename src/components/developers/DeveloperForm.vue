<template>
  <form @submit.prevent="submitForm">
    <developer-form-input name="firstName"> </developer-form-input>
    <developer-form-input name="lastName"> </developer-form-input>
    <developer-form-input name="description" textarea="true" rows="5">
    </developer-form-input>
    <developer-form-input name="rate" type="number"> </developer-form-input>

    <div class="form-control" :class="{ invalid: !isFormValid }">
      <h3>Areas of Expertise</h3>
      <developer-form-area v-for="area in areas" :key="area" :areas="area">
      </developer-form-area>
      <p v-if="!isFormValid">At least one expertise must be selected.</p>
    </div>
    <p v-if="!isFormValid">Please fix the above errors and submit again.</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
import DeveloperFormArea from './developerform/DeveloperFormArea.vue';
import DeveloperFormInput from './developerform/DeveloperFormInput.vue';
export default {
  components: { DeveloperFormArea, DeveloperFormInput },
  emits: ['save-data'],
  data() {
    return {
      inputs: {
        firstName: {
          val: '',
          isValid: true
        },
        lastName: {
          val: '',
          isValid: true
        },
        description: {
          val: '',
          isValid: true
        },
        rate: {
          val: null,
          isValid: true
        },
        areas: {
          val: null,
          isValid: true
        }
      }
    };
  },
  computed: {
    isFormValid() {
      console.log(Object.values(this.inputs).every(input => input.isValid));
      return Object.values(this.inputs).every(input => input.isValid);
    }
  },
  methods: {
    clearValidity(input) {
      this.inputs[input].isValid = true;
    },
    validateForm() {
      this.inputs.formIsValid = true;
      if (this.firstName.val === '') {
        this.inputs.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.inputs.lastName.val === '') {
        this.inputs.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.inputs.description.val === '') {
        this.inputs.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.inputs.rate.val || this.inputs.rate.val < 0) {
        this.inputs.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.inputs.areas.val.length === 0) {
        this.inputs.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val
      };
      console.log(formData);

      this.$emit('save-data', formData);
    }
  }
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #1d6ead;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #1d6ead solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
