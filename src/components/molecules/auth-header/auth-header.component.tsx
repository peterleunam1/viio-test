import './auth-header.styled.scss'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

interface AuthHeaderProps {
  title: string
}
export default function AuthHeader ({ title }: AuthHeaderProps) {
  return (
    <header className='header'>
      <ChevronLeftIcon className='header__icon'/>
      <h3 className='header__title'>{title}</h3>
    </header>
  )
}
