import {
  type UserModel,
  type NewUserCredentialsModel,
  type PersonalDataModel,
  type CredentialsModel
} from 'models'

export const credentiaslInitialValues: CredentialsModel = {
  username: '',
  password: ''
}

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

export const productInitialValues = {
  id: 0,
  title: '',
  price: 0,
  image: '',
  description: '',
  category: '',
  rating: {
    rate: 0,
    count: 0
  }
}
