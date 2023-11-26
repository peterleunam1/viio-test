import {
  HomeIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  HeartIcon,
  UserIcon
} from '@heroicons/react/24/outline'

interface NavIcon {
  icon: JSX.Element
  name: string
}

export const navIcons: NavIcon[] = [
  {
    icon: <HomeIcon />,
    name: 'home'
  },
  {
    icon: <MagnifyingGlassIcon />,
    name: 'search'
  },
  {
    icon: <ShoppingCartIcon />,
    name: 'cart'
  },
  {
    icon: <HeartIcon />,
    name: 'favorites'
  },
  {
    icon: <UserIcon />,
    name: 'profile'
  }
]
