<script setup lang="ts">

import {VButton, VTypography} from "@/shared/ui";
import {useRouter} from "vue-router";
import {RouteNamesEnum} from "@/shared/config";

const router = useRouter()
</script>

<template>
  <div class="not-found">
    <div class="not-found__image">
      <img
        src="@/shared/lib/image/error.png"
        alt="not found"
      >
    </div>
    <div class="not-found__content">
      <VTypography variant="title-md">
        Ой, страница потерялась в продакшене...
      </VTypography>
      <VTypography variant="body-sm">
        Страница не найдена: возможно, её удалили во время очередного мерж-реквеста или этот эндпоинт пока находится в стадии разработки.
      </VTypography>
    </div>
    <VButton @click="router.replace({name: RouteNamesEnum.Home})">
      Посмотреть меню
    </VButton>
  </div>
</template>

<style lang="scss" src="./VNotFound.scss">

</style>
