import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import { NavItem } from 'components/atoms'
import { navIcons } from 'constant'
import './nav-bar.styled.scss'

export default function NavBar () {
  return (
    <nav className="nav">
      <h2 className="nav__logo">MN</h2>
      <ul className="nav__list">
        {navIcons.map(({ icon, name }) => (
          <NavItem key={name} name={name}>
            {icon}
          </NavItem>
        ))}
      </ul>
      <ArrowLeftOnRectangleIcon className="nav__icon" />
    </nav>
  )
}
