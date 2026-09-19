import {BASE_URL, OTP, SIGN_IN} from "@/pages/auth/api";

export async function getOtpCode(phone: string) {

  const response = await fetch(`${BASE_URL}/${OTP}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        phone: phone.replace(/\D/g, ''),
    })
  })

  if (!response.ok) {
    throw new Error('Не удалось отправить OTP')
  }

  return response.json()
}

export async function signIn({phone, otpCode}: {phone: string; otpCode: string}) {

  const response = await fetch(`${BASE_URL}/${SIGN_IN}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      phone: phone.replace(/\D/g, ''),
      code: Number(otpCode),
    })
  })

  if (!response.ok) {
    throw new Error('Не удалось отправить OTP')
  }

  return response.json()
}
