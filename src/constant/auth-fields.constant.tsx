import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
  IdentificationIcon,
  PhoneArrowDownLeftIcon,
  FlagIcon
} from '@heroicons/react/24/outline'
import { regexs } from './regexs.constant'
import { type RegexModel } from 'models'

const username: string = 'username'
const password: string = 'password'

interface FieldsModel {
  placeholder: string
  type: string
  name: string
  label: string
  regex: RegexModel
  icon: JSX.Element
}

export const loginFields: FieldsModel[] = [
  {
    placeholder: 'your username',
    type: username,
    name: username,
    label: username,
    regex: regexs.USERNAME,
    icon: <UserIcon />
  },
  {
    placeholder: 'your password',
    type: password,
    name: password,
    label: password,
    regex: regexs.FREE,
    icon: <LockClosedIcon />
  }
]

export const signUpFields: FieldsModel[] = [
  {
    placeholder: 'your name',
    type: 'text',
    name: 'name',
    label: 'name',
    regex: regexs.TEXT,
    icon: <IdentificationIcon />
  },
  {
    placeholder: 'your last name',
    type: 'text',
    name: 'lastName',
    label: 'last name',
    regex: regexs.TEXT,
    icon: <IdentificationIcon />
  },
  {
    placeholder: 'you phone number',
    type: 'number',
    name: 'phone',
    label: 'phone',
    regex: regexs.NUMBERS,
    icon: <PhoneArrowDownLeftIcon />
  },
  {
    placeholder: 'country',
    type: 'text',
    name: 'city',
    label: 'country',
    regex: regexs.TEXT,
    icon: <FlagIcon />
  },
  {
    placeholder: 'your email',
    type: 'email',
    name: 'email',
    label: 'email',
    regex: regexs.EMAIL,
    icon: <EnvelopeIcon />
  },
  {
    placeholder: 'your username',
    type: 'text',
    name: username,
    label: username,
    regex: regexs.USERNAME,
    icon: <UserIcon />
  },
  {
    placeholder: 'your password',
    type: password,
    name: password,
    label: password,
    regex: regexs.PASSWORD,
    icon: <LockClosedIcon />
  }
]
