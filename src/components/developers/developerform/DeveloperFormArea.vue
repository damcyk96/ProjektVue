<template>
  <!-- jak przejsc po calej tablicy z data, chociaz tutaj powinienem te react,csharp itd miec w jednym miejscu i wtedy v-model -->
  <div>
    <input
      type="checkbox"
      :id="areas.val"
      :value="areas.val"
      v-model="areas.val"
      @blur="clearValidity('areas')"
    />
    <label :for="areas.val">{{ areas.val }} Developer</label>
  </div>
</template>

<script>
import areas from '../../../store/index';
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
