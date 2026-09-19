<script setup lang="ts">
import {ChevronLeftIcon} from "@/shared/lib/icons";
import {VButton, VTextField, VTypography} from "@/shared/ui";
import {authApi} from "@/pages/auth/api";
import {ref} from "vue";
import {useMutation} from "@pinia/colada";
import {onlyDigitsMaskOptions} from "@/shared/lib/mask";

const emit = defineEmits<{
  'next-step': []
}>()
const {phone} = defineProps<{
  phone: string
}>()

const otpCode = ref<string>('')

const { mutate: signIn } = useMutation({
  mutation: authApi.signIn,
  onSuccess() {
   console.log('success')
  },
})

const { mutate: requestOtp } = useMutation({
  mutation: authApi.getOtpCode,
})

</script>

<template>
  <div class="otp">
    <div class="otp__title-container">
      <ChevronLeftIcon
        class="otp__back"
        @click="emit('next-step')"
      />
      <VTypography
        variant="title-md"
        tag="div"
      >
        Проверочный код
      </VTypography>
    </div>
    <VTypography
      tag="div"
      class="otp__description"
      variant="body-sm"
    >
      На указзанный вами номер был отправлен проверочный код
    </VTypography>
    <div class="otp__field-code">
      <VTextField
        v-model="otpCode"
        v-maskito="onlyDigitsMaskOptions"
        placeholder="Проверочный код"
      />
    </div>
  </div>
  <div class="otp__button-container">
    <VButton @click="signIn({ otpCode, phone })">
      Войти
    </VButton>
    <VButton
      variant="secondary"
      @click="requestOtp(phone)"
    >
      Отправить код повторно
    </VButton>
    <VTypography
      variant="caption"
      class="otp__information"
    >
      Указанный OTP-код не является действительным и используется только в рамках тестового проекта. Ознакомиться с ним можно на странице с отп кодами.
    </VTypography>
  </div>
</template>

<style  lang="scss" src="./VOtp.scss">

</style>
