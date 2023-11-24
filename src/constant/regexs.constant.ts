import { type RegexModel } from 'models'

type Regexs = Record<string, RegexModel>

export const regexs: Regexs = {
  EMAIL: {
    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message: 'Invalid email address'
  },
  PASSWORD: {
    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    message: 'Must contain at least one uppercase letter, one lowercase letter, and one number.'
  },
  USERNAME: {
    pattern: /^[a-zA-Z0-9._-]{3,}$/,
    message: 'Must contain at least 3 characters and only letters, numbers, underscores, periods and dashes are allowed.'
  },
  FREE: {
    pattern: /.*/,
    message: ''
  }
}
