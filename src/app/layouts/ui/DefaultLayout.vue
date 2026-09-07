<script setup lang="ts">

</script>

<template>
  <section class="default-layout">
    <header>
      <div>HEADER</div>
      <slot name="actions"></slot>
    </header>
    <div class="default-layout__content">
      <slot/>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>
