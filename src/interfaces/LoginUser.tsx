export interface LoginData {
  data: Login,
}

export interface Login {
  user: UserLogin
  token: string
  refresh_token: string
  permissions: string[] | null
  roles: string[] | null
}

export interface UserLogin {
  id: number
  name: string
  email: string
  username: string
  blocked: number
  email_verified_at: Date | null
  last_activity_at: Date | null
  created_at: string
  updated_at: string
}