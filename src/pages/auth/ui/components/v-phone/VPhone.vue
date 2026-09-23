<script setup lang="ts">
import {VTextField, VTypography, VButton} from "@/shared/ui";
import { maskito as vMaskito } from '@maskito/vue'
import {phoneMaskOptions} from "@/shared/lib/mask";
import {useMutation} from "@pinia/colada";
import {authApi} from "@/pages/auth/api";
import {useRegle} from "@regle/core";
import {withMessage} from "@regle/rules";

const phone = defineModel<string>({default: ''})
const emit = defineEmits<{
  'next-step': []
}>()

const { mutate: requestOtp } = useMutation({
  mutation: authApi.getOtpCode,
  onSuccess() {
    emit('next-step')
  },
})

const { r$ } = useRegle(
  { phone },
  {
    phone: {
      phoneLength: withMessage(
        (value) => {
          if (typeof value !== 'string') {
            return false
          }

          return value.replace(/\D/g, '').length === 11
        },
        'Введите корректный номер телефона',
      ),
    },
  },
  {
    autoDirty: false,
  },
)
async function sendOtpCode() {
  const { valid } = await r$.$validate()

  if (!valid) {
    return
  }

  requestOtp(phone.value)
}
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
    <form @submit.prevent="sendOtpCode">
      <div class="auth-page__phone">
        <VTextField
          v-model="phone"
          v-maskito="phoneMaskOptions"
          placeholder="+7"
          :message="r$.phone.$errors[0]"
        />
      </div>
      <div class="auth-page__submit">
        <VButton>
          Продолжить
        </VButton>
      </div>
    </form>
  </div>
</template>

<style lang="scss" src="./VPhone.scss">

</style>
