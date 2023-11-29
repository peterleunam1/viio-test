import { getCapitalize } from 'utils'
import './searches-categories.styled.scss'
import { searchesCategoriesData } from 'constant'

interface SearchesCategoriesProps {
  filter: string
  handleSetFilter: (filter: string) => void
}

export default function SearchesCategories ({ filter, handleSetFilter }: SearchesCategoriesProps) {
  const handleSetFilterCategory = (filter: string) => {
    handleSetFilter(filter)
  }

  return (
    <ul className="list-searches">
      {searchesCategoriesData.map(({ id, name }) => {
        const NameCapitalize = getCapitalize(name)
        const listSearchesItemClass =
          filter === name
            ? 'list-searches__item--active'
            : 'list-searches__item'
        return (
          <li
            key={id}
            className={listSearchesItemClass}
            onClick={() => {
              handleSetFilterCategory(name)
            }}
          >
            {NameCapitalize}
          </li>
        )
      })}
    </ul>
  )
}
