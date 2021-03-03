<template>
  <div>
    <input
      type="checkbox"
      :id="expertise"
      :value="expertise"
      v-model="expertise"
      @blur="clearValidity('areas')"
    />
    <label :for="expertise">{{ expertise }} Developer</label>
  </div>
</template>

<script>
export default {
  props: {
    expertise: {
      type: String,
      required: true,
      default: null
    }
  }
};
</script>

<style scoped>
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

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
