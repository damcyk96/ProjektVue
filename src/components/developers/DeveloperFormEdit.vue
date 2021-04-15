<template>
  <form @submit.prevent="submitForm">
    <developer-form-input
      :class="{ invalid: !inputs.description.isValid }"
      name="description"
      title="Description"
      textarea
      v-model:value="inputs.description.val"
    >
    </developer-form-input>
    <developer-form-input
      :class="{ invalid: !inputs.rate.isValid }"
      name="rate"
      title="Rate"
      type="number"
      v-model:value="inputs.rate.val"
    >
    </developer-form-input>

    <div class="form-control" :class="{ invalid: !inputs.areas.isValid }">
      <h3>Areas of Expertise</h3>
      <label class="area-label" :for="area" v-for="area in areas" :key="area">
        <input
          type="checkbox"
          :value="area"
          :id="area"
          v-model="inputs.areas.val"
          @blur="clearValidity('areas')"
        />
        {{ area }} Developer
      </label>

      <p v-if="!inputs.areas.isValid">
        At least one expertise must be selected.
      </p>
    </div>

    <p v-if="!isFormValid">Please fix the above errors and submit again.</p>
    <base-button>Update</base-button>
  </form>
</template>

<script>
import DeveloperFormInput from './developerform/DeveloperFormInput.vue';
export default {
  components: { DeveloperFormInput },
  emits: ['update-data'],
  data() {
    return {
      inputs: {
        description: {
          val: '',
          isValid: true
        },
        rate: {
          val: null,
          isValid: true
        },
        areas: {
          val: [],
          isValid: true
        }
      }
    };
  },
  computed: {
    isFormValid() {
      return Object.values(this.inputs).every(input => input.isValid);
    },
    areas() {
      let areasArray = this.$store.state.filters.filters;
      areasArray = Object.keys(areasArray);
      return areasArray;
    }
  },
  methods: {
    clearValidity(input) {
      this.inputs[input].isValid = true;
    },
    validateForm() {
      if (this.inputs.description.val === '') {
        this.inputs.description.isValid = false;
      }
      if (!this.inputs.rate.val || this.inputs.rate.val < 0) {
        this.inputs.rate.isValid = false;
      }
      if (this.inputs.areas.val.length === 0) {
        this.inputs.areas.isValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.isFormValid) {
        return;
      }
      const formData = {
        desc: this.inputs.description.val,
        rate: this.inputs.rate.val,
        areas: this.inputs.areas.val
      };
      this.$emit('update-data', formData);
    }
  }
};
</script>

<style>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}
label:first-letter {
  text-transform: capitalize;
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
.area-label {
  text-transform: capitalize;
  font-weight: 400;
}
.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
