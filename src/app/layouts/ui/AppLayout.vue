<script setup lang="ts">
import {computed} from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const layout = computed(() => route?.meta?.layoutComponent)

</script>

<template>
  <component :is="layout">
    <template #actions>
      <button>Action</button>
    </template>
    <slot></slot>
  </component>
</template>

<style scoped lang="scss">

</style>
