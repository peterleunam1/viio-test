import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { privateRoutes } from 'constant'
import { RoutesWithNotFound } from 'utils'

const Home = lazy(async () => await import('./home/home'))
const Search = lazy(async () => await import('./search/search'))
const ProductDetail = lazy(async () => await import('./product-detail/product-detail'))

export default function Private () {
  return (
    <RoutesWithNotFound>
      <Route path={privateRoutes.HOME} element={<Home />} />
      <Route path={privateRoutes.SEARCH} element={<Search />} />
      <Route path={privateRoutes.SEARCH_DATA} element={<Search />} />
      <Route path={privateRoutes.PRODUCT_DETAILS} element={<ProductDetail />} />
    </RoutesWithNotFound>
  )
}
