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
export interface PersonalDataModel {
  name: string
  lastName: string
  phone: number
  city: string
}

export interface NewUserCredentialsModel extends CredentialsModel {
  email: string
}

export interface UserModel {
  email: string
  username: string
  password: string
  name: Name
  address: Address
  phone: string
}

export interface Address {
  city: string
  street: string
  number: string
  zipcode: string
  geolocation: Geolocation
}

export interface Geolocation {
  lat: string
  long: string
}

export interface Name {
  firstName: string
  lastName: string
}
export interface CredentialsToSignUp {
  crediantials: UserModel
}
export interface SingUpReturnedData {
  id: number
}

export interface ChildrenModel {
  children: React.ReactNode
}

export interface RegexModel {
  pattern: RegExp
  message: string
}

export interface SignUpContextProps {
  personalData: PersonalDataModel
  addPersonalData: (value: PersonalDataModel) => void
}
