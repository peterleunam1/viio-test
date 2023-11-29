import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { SearchHeader, SearchesCategories } from 'components/molecules'
import { ListOfProducts } from 'components/organisms'
import { AppLayout } from 'components/templates'
import { searchesCategories } from 'constant'
import { useProducts } from 'hooks'
import { getFilterProducts, getProductsByQuery } from 'utils'

export default function Search () {
  const query = useParams<{ query: string }>().query ?? ''
  const [filter, setFilter] = useState<string>(searchesCategories.relevance)
  const { products } = useProducts()
  const productsSearched = getProductsByQuery({ products, query })
  const filteredProducts = getFilterProducts({ products: productsSearched, filter })

  const handleSetFilter = (filter: string) => {
    setFilter(filter)
  }
  const label: string = query && `${filteredProducts.length} Results for: ${query}`

  return (
    <AppLayout>
      <SearchHeader />
      <SearchesCategories filter={filter} handleSetFilter={handleSetFilter}/>
      <ListOfProducts products={filteredProducts ?? []} label={label} />
    </AppLayout>
  )
}
