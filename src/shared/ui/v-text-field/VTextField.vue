<script setup lang="ts">
  const {type = 'text', placeholder = '', message = ''} = defineProps<{
    type?: 'text' | 'password' | 'number'
    placeholder?: string
    message?: string
  }>()
  const model = defineModel<string>()
</script>

<template>
  <div class="text-field">
    <input
      v-model="model"
      :placeholder
      class="text-field__input"
      :type
    >
    <div
      v-if="message"
      class="text-field__message"
    >
      {{ message }}
    </div>
  </div>
</template>

<style src="./VTextField.scss">

</style>
