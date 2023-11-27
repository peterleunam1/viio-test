import { BellIcon } from '@heroicons/react/24/outline'
import './home-header.styled.scss'

export default function HomeHeader () {
  return (
    <header className="home-header">
      <strong className='home-header__title'>MAYNOOTH</strong>
      <BellIcon className="home-header__icon" />
    </header>
  )
}
