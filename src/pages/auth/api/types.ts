export type User = {
  _id: string
  phone: string
  email: string
  firstname: string
  lastname: string
  middlename: string
}

export type SignInResponse = {
  success: boolean
  user: User
}
