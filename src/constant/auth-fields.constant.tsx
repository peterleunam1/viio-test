import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { regexs } from './regexs.constant'

const username: string = 'username'
const password: string = 'password'

export const loginFields = [
  {
    placeholder: 'your username',
    type: username,
    name: username,
    label: username,
    regex: regexs.USERNAME,
    icon: <EnvelopeIcon />
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

export const signUpFields = [
  {
    placeholder: 'your name',
    type: 'text',
    name: 'name',
    label: 'name',
    regex: regexs.TEXT,
    icon: <EnvelopeIcon />
  },
  {
    placeholder: 'your last name',
    type: 'text',
    name: 'lastName',
    label: 'last name',
    regex: regexs.TEXT,
    icon: <EnvelopeIcon />
  },
  {
    placeholder: 'you phone number',
    type: 'number',
    name: 'phone',
    label: 'phone',
    regex: regexs.NUMBERS,
    icon: <EnvelopeIcon />
  },
  {
    placeholder: 'country',
    type: 'text',
    name: 'city',
    label: 'country',
    regex: regexs.TEXT,
    icon: <EnvelopeIcon />
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
    icon: <EnvelopeIcon />
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
