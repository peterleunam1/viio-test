import { searchesCategories } from 'constant'
import { type ProductModel } from 'models'

interface GetFilterParams {
  products: ProductModel[]
  filter: string
}

export const getFilterProducts = ({ products, filter }: GetFilterParams): ProductModel[] => {
  switch (filter) {
    case searchesCategories.relevance:
      return products.sort((a, b) => {
        if (a.rating.count > b.rating.count) return -1
        if (a.rating.count < b.rating.count) return 1
        return 0
      })
    case searchesCategories.latest:
      return products.slice(0, 2)
    case searchesCategories.topSales:
      return products.sort((a, b) => a.rating.rate - b.rating.rate)
    case searchesCategories.price:
      return products.sort((a, b) => a.price - b.price)
    default:
      return products
  }
}
