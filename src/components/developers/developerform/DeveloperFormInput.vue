<template>
  <div class="form-control" :class="{ invalid: !firstName.isValid }">
    <label :for="name">{{ name }}</label>
    <input
      v-if="!textarea"
      :type="type"
      :id="name"
      v-model.trim="name.val"
      @blur="clearValidity(name)"
    />
    <textarea
      v-else
      :id="name"
      :rows="rows"
      v-model.trim="description.val"
      @blur="clearValidity('description')"
    ></textarea>
    <p v-if="!name.isValid">{{ name.capitalize() }} must not be empty.</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: null
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    textarea: {
      type: Boolean,
      required: false,
      default: null
    },
    rows: {
      type: Number,
      required: false,
      default: null
    }
  }
};
</script>

<style></style>
