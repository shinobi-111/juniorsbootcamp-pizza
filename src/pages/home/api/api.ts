import {BASE_URL, type ProfileResponse, type User, USER_DATA} from "../api";


export async function getCurrentUser(): Promise<User> {

  const response = await fetch(`${BASE_URL}/${USER_DATA}`, {
    method: 'GET',
    credentials: 'include'
  })

  if (!response.ok) {
    throw new Error('Не удалось получить профиль юзера')
  }
  const data: ProfileResponse = await response.json();

  return data.user
}
