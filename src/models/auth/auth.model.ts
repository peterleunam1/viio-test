export interface CredentialsModel {
  username: string
  password: string
}
export interface UserLogin {
  token: string
}

export interface CredentialsToLogin {
  crediantials: CredentialsModel
}

export interface ChildrenModel {
  children: React.ReactNode
}

export interface RegexModel {
  pattern: RegExp
  message: string
}
