import { Title } from 'components/atoms'
import { SignUpCredentials } from 'components/organisms'
import { AuthLayout } from 'components/templates'

export default function SignUpConfirm () {
  return (
    <AuthLayout title="Sign Up">
      <Title text="One more step ..." />
      <SignUpCredentials />
    </AuthLayout>
  )
}
