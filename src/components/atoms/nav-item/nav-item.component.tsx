import { type ChildrenModel } from 'models'
import { getCapitalize } from 'utils'
import './nav-item.styled.scss'
import { useNavigation } from 'hooks'
import { privateRoutes } from 'constant'

interface NavItemProps extends ChildrenModel {
  name: string
  path: string
}

export default function NavItem ({ children, name, path }: NavItemProps) {
  const { goTo } = useNavigation()
  let ubication = window.location.pathname.split('/')[2]

  if (ubication === undefined) ubication = 'home'
  const nameCapitalized = getCapitalize(name)

  const navItemClassName: string =
    name === ubication ? 'item item--active' : 'item'
  const navNameClassName: string =
    name === ubication ? 'item__name item__name--active' : 'item__name'
  const navIconClassName: string =
    name === ubication ? 'item__icon item__icon--active' : 'item__icon'

  const handleRedirectTo = () => {
    if (path !== '') goTo(`/${privateRoutes.PRIVATE}/${path}`)
    if (name === 'home') goTo(`/${privateRoutes.PRIVATE}`)
  }

  return (
    <li className={navItemClassName} onClick={handleRedirectTo}>
      <span className={navIconClassName}>{children}</span>
      <span className={navNameClassName}>{nameCapitalized}</span>
    </li>
  )
}
