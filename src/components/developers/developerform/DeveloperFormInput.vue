<template>
  <div class="form-control" :class="{ invalid: false }">
    <label :for="title">{{ title }}</label>
    <input
      v-if="!textarea"
      :type="type"
      :id="name"
      @input="event => $emit('update:value', event.target.value)"
    />
    <textarea
      v-else
      :id="name"
      :rows="rows"
      @input="event => $emit('update:value', event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    name: {
      type: String,
      required: true,
      default: null
    },
    title: {
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
