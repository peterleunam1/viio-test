import {
  HomeIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  HeartIcon,
  UserIcon
} from '@heroicons/react/24/outline'
import { privateRoutes } from './routes.constant'

interface NavIcon {
  icon: JSX.Element
  name: string
  path: string
}

export const navIcons: NavIcon[] = [
  {
    icon: <HomeIcon />,
    name: 'home',
    path: privateRoutes.HOME
  },
  {
    icon: <MagnifyingGlassIcon />,
    name: 'search',
    path: privateRoutes.SEARCH
  },
  {
    icon: <ShoppingCartIcon />,
    name: 'cart',
    path: ''
  },
  {
    icon: <HeartIcon />,
    name: 'favorites',
    path: ''
  },
  {
    icon: <UserIcon />,
    name: 'profile',
    path: ''
  }
]
