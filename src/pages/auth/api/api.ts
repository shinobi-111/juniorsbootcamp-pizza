import {BASE_URL, OTP, SIGN_IN, type SignInResponse, type User} from "../api";


export async function getOtpCode(phone: string) {

  const response = await fetch(`${BASE_URL}/${OTP}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
        phone: phone.replace(/\D/g, ''),
    })
  })

  if (!response.ok) {
    throw new Error('Не удалось отправить OTP')
  }

  return response.json()
}

export async function signIn({phone, otpCode}: {phone: string; otpCode: string}): Promise<User> {

  const response = await fetch(`${BASE_URL}/${SIGN_IN}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-application': 'web',
    },
    credentials: 'include',
    body: JSON.stringify({
      phone: phone.replace(/\D/g, ''),
      code: Number(otpCode),
    })
  })

  if (!response.ok) {
    throw new Error('Не удалось отправить OTP')
  }
  const data: SignInResponse = await response.json()
  return data.user
}
