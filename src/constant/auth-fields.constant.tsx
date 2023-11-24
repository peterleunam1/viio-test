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
