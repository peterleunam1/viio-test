import { LoginForm } from 'components/organisms'
import { AuthLayout } from 'components/templates'
import { useUserLogin } from 'hooks'

export default function Login () {
  const { handleChange, handleSubmit, isLoading, error } = useUserLogin()
  return (
    <AuthLayout title="Log In">
      <h1>MAYNOOTH</h1>
      {error && <p>Invalid credentials</p>}
      <LoginForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </AuthLayout>
  )
}
