import {
  ChevronLeftIcon,
  FunnelIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { Input } from 'components/atoms'
import { privateRoutes, regexs } from 'constant'
import './search-header.styled.scss'
import { useState, type ChangeEvent } from 'react'
import { useNavigation } from 'hooks'

export default function SearchHeader () {
  const [query, setQuery] = useState<string>('')
  const { goTo } = useNavigation()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setQuery(value)
    if (value) {
      goTo(`/${privateRoutes.PRIVATE}/search/${value}`)
    } else {
      goTo(`/${privateRoutes.PRIVATE}/search`)
    }
  }

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    goTo(`/${privateRoutes.PRIVATE}/search/${query}`)
  }

  return (
    <header className="search-header">
      <ChevronLeftIcon width="1.5rem" />
      <form className="search-header__form" onSubmit={handleSubmit}>
        <Input
          placeholder="search..."
          name="search"
          type="text"
          onChange={handleChange}
          regex={regexs.FREE}
        >
          <MagnifyingGlassIcon />
        </Input>
      </form>
      <FunnelIcon width="1.5rem" />
    </header>
  )
}
