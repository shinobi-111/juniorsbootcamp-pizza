<script setup lang="ts">
import type {Tag, Variant} from "./types.ts";

const {tag = 'span', variant} = defineProps<{
    tag?: Tag,
    variant: Variant
  }>()
</script>

<template>
  <component
    :is="tag"
    :class="['typography', `typography--${variant}`]"
  >
    <slot />
  </component>
</template>

<style  src="./VTypography.scss"></style>
