<script setup lang="ts">
import type {Variant} from "./types.ts";

  const {variant = 'primary'} = defineProps<{
    variant?: Variant
  }>()
</script>

<template>
  <button :class="['button', `button--${variant}`]">
    <slot />
  </button>
</template>

<style src="./VButton.scss">

</style>
