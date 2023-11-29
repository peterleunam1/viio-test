import { Alert, Title } from 'components/atoms'
import { LoginForm } from 'components/organisms'
import { AuthLayout } from 'components/templates'
import { Alerts } from 'constant'
import { useUserLogin } from 'hooks'

export default function Login () {
  const { handleChange, handleSubmit, isLoading, error } = useUserLogin()
  return (
    <AuthLayout title="Log In">
      <Title text="MAYNOOTH" />
      {error && <Alert message={Alerts.ERROR_LOGIN} type='error' />}
      <LoginForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </AuthLayout>
  )
}
