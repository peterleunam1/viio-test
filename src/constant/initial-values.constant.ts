import { type UserModel, type NewUserCredentialsModel, type PersonalDataModel } from 'models'

export const personalDataInitialValues: PersonalDataModel = {
  name: '',
  lastName: '',
  phone: 0,
  city: ''
}
export const newUserCredentialsInitialValues: NewUserCredentialsModel = {
  email: '',
  password: '',
  username: ''
}

export const userInitialValues: UserModel = {
  email: '',
  username: '',
  password: '',
  name: { firstName: '', lastName: '' },
  address: {
    city: '',
    street: '7835 new road',
    number: '3',
    zipcode: '12926-3874',
    geolocation: { lat: '-37.3159', long: '81.1496' }
  },
  phone: ''
}
