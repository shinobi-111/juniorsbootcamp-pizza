<script setup lang="ts">
import type {Variant} from "./types.ts";

  const {variant = 'primary', type ='button'} = defineProps<{
    variant?: Variant
    type?: 'button' | 'submit'
  }>()
</script>

<template>
  <button
    :class="['button', `button--${variant}`]"
    :type="type"
  >
    <slot />
  </button>
</template>

<style src="./VButton.scss">

</style>
