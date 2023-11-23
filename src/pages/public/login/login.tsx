import { type ChangeEvent, useState } from 'react'
import { LoginForm } from 'components/organisms'
import { AuthLayout } from 'components/templates'
import { type CredentialsModel } from 'models'

export default function Login () {
  const [credentials, setCredentials] = useState<CredentialsModel>({ email: '', password: '' })
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    console.log(credentials, event)
  }

  return (
    <AuthLayout title='Log In'>
       <h1>MAYNOOTH</h1>
      <LoginForm onChange={handleChange} onSubmit={handleSubmit} />
    </AuthLayout>
  )
}
