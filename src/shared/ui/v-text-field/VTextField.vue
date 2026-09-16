<script setup lang="ts">
  const {type = 'text', placeholder = ''} = defineProps<{
    type?: 'text' | 'password'
    placeholder?: string
  }>()
  const model = defineModel<string>()
</script>

<template>
  <input
    v-model="model"
    :placeholder
    class="text-field"
    :type
  >
</template>

<style src="./VTextField.scss">

</style>
