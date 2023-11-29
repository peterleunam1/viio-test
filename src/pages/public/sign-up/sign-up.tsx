import { Title } from 'components/atoms'
import { SignUpPersonalData } from 'components/organisms'
import { AuthLayout } from 'components/templates'

export default function SignUp () {
  return (
    <AuthLayout title="Sign Up">
      <Title text="Join today!" />
     <SignUpPersonalData />
    </AuthLayout>
  )
}
