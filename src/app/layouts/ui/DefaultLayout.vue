<script setup lang="ts">
import {useQuery} from "@pinia/colada";
import {homeApi} from '@/pages'

const { data: currentUser } = useQuery({
  key: ['current-user'],
  query: homeApi.getCurrentUser,
})

</script>

<template>
  <section class="default-layout">
    <header class="default-layout__header">
      <div>HEADER</div>
      <div v-if="currentUser">
        Авторизован
      </div>
      <div v-else>
        Не авторизован
      </div>
    </header>
    <div class="default-layout__content">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">
.default-layout {
  &__header {
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
