<script setup lang="ts">
import {useMutation, useQuery, useQueryCache} from "@pinia/colada";
import {homeApi} from '@/pages'
import {VButton} from "@/shared/ui";
import {useRouter} from "vue-router";
import {RouteNamesEnum} from "@/shared/config";
import {authApi} from "@/pages/auth"
const router = useRouter()

const { data: currentUser } = useQuery({
  key: ['current-user'],
  query: homeApi.getCurrentUser,
})

const queryCache = useQueryCache()

const { mutate: signOut } = useMutation({
  mutation: authApi.signOut,
  onSuccess() {
    const user = queryCache.get(['current-user'])
    console.log(user)
    if (user) {
      queryCache.cancel(user)
      queryCache.remove(user)
    }
    router.replace({name: RouteNamesEnum.Auth})
  },
})

</script>

<template>
  <section class="default-layout">
    <header class="default-layout__header">
      <div>HEADER</div>
      <div
        v-if="currentUser"
        class="default-layout__profile-container"
      >
        <VButton
          @click="router.replace({name: RouteNamesEnum.Profile})"
        >
          Перейти в профиль
        </VButton>

        <VButton
          variant="primary"
          @click="signOut"
        >
          Выйти
        </VButton>
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
  height: 100dvh;
  &__header {
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__content {
    height: calc(100% - 32px);
  }

  &__profile-container {
    display: flex;
    gap: 5px;
  }
}
</style>
