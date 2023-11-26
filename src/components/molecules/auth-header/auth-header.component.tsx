import { useNavigation } from 'hooks'
import './auth-header.styled.scss'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { publicRoutes } from 'constant'

interface AuthHeaderProps {
  title: string
}

export default function AuthHeader ({ title }: AuthHeaderProps) {
  const { goTo } = useNavigation()

  const handleBack = () => {
    goTo(`/${publicRoutes.LOGIN}`)
  }

  return (
    <header className='header'>
      <ChevronLeftIcon className='header__icon' onClick={handleBack}/>
      <h3 className='header__title'>{title}</h3>
    </header>
  )
}
