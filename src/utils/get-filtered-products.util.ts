import { searchesCategories } from 'constant'
import { type ProductModel } from 'models'

interface GetFilterParams {
  products: ProductModel[]
  filter: string
}

export const getFilterProducts = ({ products, filter }: GetFilterParams): ProductModel[] => {
  if (filter === searchesCategories.relevance) {
    const newProducts = products.sort((a, b) => {
      if (a.rating.count > b.rating.count) return -1
      if (a.rating.count < b.rating.count) return 1
      return 0
    })
    return newProducts
  }
  if (filter === searchesCategories.latest) {
    const newProducts = products.slice(0, 2)
    return newProducts
  }
  if (filter === searchesCategories.topSales) {
    const newProducts = products.sort((a, b) => a.rating.rate - b.rating.rate)
    return newProducts
  }
  if (filter === searchesCategories.price) {
    const newProducts = products.sort((a, b) => a.price - b.price)
    return newProducts
  }
  return products
}
