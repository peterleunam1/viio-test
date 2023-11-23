import { AuthHeader } from 'components/molecules'
import './auth-layout.styled.scss'

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
}
export default function AuthLayout ({ children, title }: AuthLayoutProps) {
  return (
    <main className='main'>
      <AuthHeader title={title} />
      <section className='main__section'>{children}</section>
    </main>
  )
}
