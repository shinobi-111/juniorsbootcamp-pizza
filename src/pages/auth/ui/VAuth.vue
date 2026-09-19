<script setup lang="ts">
import {ref} from "vue";
import {VOtp, VPhone} from "@/pages/auth/ui/components";

const phone = ref('')
const steps = ref<'phone' | 'otp'>('phone')


</script>
<template>
  <VPhone
    v-if="steps === 'phone'"
    v-model="phone"
    @next-step="steps = 'otp'"
  />
  <VOtp
    v-else
    :phone
    @next-step="steps = 'phone'"
  />
</template>
<style src="./VAuth.scss"></style>
