<script setup lang="ts">
import {VTextField, VTypography, VButton} from "@/shared/ui";
import { maskito as vMaskito } from '@maskito/vue'
import {phoneMaskOptions} from "@/shared/lib/mask";
import {useMutation} from "@pinia/colada";
import {authApi} from "@/pages/auth/api";

const phone = defineModel<string>({default: ''})
const emit = defineEmits<{
  'next-step': []
  'resend-code': []
}>()
const { mutate: requestOtp } = useMutation({
  mutation: authApi.getOtpCode,
  onSuccess() {
    emit('next-step')
  },
})

</script>

<template>
  <div class="auth-page">
    <VTypography
      class="auth-page__title"
      variant="title-md"
      tag="div"
    >
      Авторизация
    </VTypography>
    <VTypography
      tag="div"
      class="auth-page__description"
      variant="body-sm"
    >
      Введите номер телефона для входа в свой профиль
    </VTypography>
    <div class="auth-page__phone">
      <VTextField
        v-model="phone"
        v-maskito="phoneMaskOptions"
        placeholder="+7"
      />
    </div>
    <div class="auth-page__submit">
      <VButton @click="requestOtp(phone)">
        Продолжить
      </VButton>
    </div>
  </div>
</template>

<style lang="scss" src="./VPhone.scss">

</style>
