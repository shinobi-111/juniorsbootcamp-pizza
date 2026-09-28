<script setup lang="ts">
import {ChevronLeftIcon} from "@/shared/lib/icons";
import {VButton, VTextField, VTypography} from "@/shared/ui";
import { maskito as vMaskito } from '@maskito/vue'
import {authApi} from "@/pages/auth/api";
import {computed, onMounted, onUnmounted, ref} from "vue";
import {useMutation, useQueryCache} from "@pinia/colada";
import {onlyDigitsMaskOptions} from "@/shared/lib/mask";
import {useRouter} from "vue-router";
import {RouteNamesEnum} from "@/shared/config";
import type {ButtonProperty} from "@/pages/auth/ui/components/v-otp/types.ts";
import {useRegle} from "@regle/core";
import {regex, required, withMessage} from "@regle/rules";





const emit = defineEmits<{
  'next-step': []
}>()
const {phone} = defineProps<{
  phone: string
}>()

const router = useRouter()
const otpCode = ref<string>('')
const seconds = ref(10)

let timerId: ReturnType<typeof setInterval> | null = null;

const queryCache = useQueryCache()

const { mutate: signIn } = useMutation({
  mutation: authApi.signIn,
  onSuccess(data) {
    queryCache.setQueryData(['current-user'], data)
    router.replace({name: RouteNamesEnum.Home})
  },
})

const { mutate: requestOtp } = useMutation({
  mutation: authApi.getOtpCode,
  onSuccess() {
    startTimer()
  }
})

const resendButtonProperty  = computed<ButtonProperty>(() => {
  return seconds.value === 0 ? {
    variant: 'secondary',
    text:  'Отправить код повторно'
  } : {
    variant: 'ghost',
    text:  `Отправить код повторно через ${seconds.value} секунд`
  }
})

function startTimer () {
  stopTimer()
  seconds.value = 10;
  timerId = setInterval(() => {
    seconds.value--
    if (seconds.value <= 0) {
      stopTimer()
    }
  }, 1000)
}

function stopTimer () {
  if (timerId) {
    clearInterval(timerId)
    timerId = null
  }
}

function resendOtp() {
  if (seconds.value !== 0) {
    return
  }
  requestOtp(phone)
}
const { r$ } = useRegle(
  { otpCode },
  {
    otpCode: {
      required: withMessage(
        required,
        'Введите проверочный код',
      ),
      otp: withMessage(
        regex(/^\d{6}$/),
        'Код должен состоять из 6 цифр',
      ),
    },
  },
);

async function handleSubmit() {
  const { valid } = await r$.$validate()

  if (!valid) {
    return
  }

  signIn({ otpCode: r$.$value.otpCode, phone })
}

onMounted(startTimer)
onUnmounted(stopTimer)
</script>

<template>
  <form @submit.prevent="handleSubmit">
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
          v-model="r$.$value.otpCode"
          v-maskito="onlyDigitsMaskOptions"
          placeholder="Проверочный код"
          :message="r$.otpCode.$errors[0]"
        />
      </div>
    </div>
    <div class="otp__button-container">
      <VButton type="submit">
        Войти
      </VButton>
      <VButton
        :variant="resendButtonProperty.variant"
        @click="resendOtp"
      >
        {{ resendButtonProperty.text }}
      </VButton>
      <VTypography
        variant="caption"
        class="otp__information"
      >
        Указанный OTP-код не является действительным и используется только в рамках тестового проекта. Ознакомиться с ним можно на странице с отп кодами.
      </VTypography>
    </div>
  </form>
</template>

<style  lang="scss" src="./VOtp.scss">

</style>
