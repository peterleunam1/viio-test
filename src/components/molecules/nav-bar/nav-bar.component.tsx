import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import { NavItem } from 'components/atoms'
import { navIcons, privateRoutes, publicRoutes, storageTypes } from 'constant'
import './nav-bar.styled.scss'
import { useNavigation } from 'hooks'
import { clearLocalStorage } from 'utils'

export default function NavBar () {
  const { goTo } = useNavigation()

  const handleRedirectToHome = () => {
    goTo(`/${privateRoutes.PRIVATE}`)
  }
  const handleLogout = () => {
    clearLocalStorage(storageTypes.TOKEN)
    goTo(`/${publicRoutes.LOGIN}`)
  }
  return (
    <nav className="nav">
      <h2 className="nav__logo" onClick={handleRedirectToHome}>
        MN
      </h2>
      <ul className="nav__list">
        {navIcons.map(({ icon, name, path }) => (
          <NavItem key={name} name={name} path={path}>
            {icon}
          </NavItem>
        ))}
      </ul>
      <ArrowLeftOnRectangleIcon className="nav__icon" onClick={handleLogout} />
    </nav>
  )
}
