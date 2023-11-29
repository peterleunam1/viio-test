import { type ProductModel } from 'models'

interface GetProductsByQueryModel {
  query: string
  products: ProductModel[]
}

export const getProductsByQuery = ({ query, products }: GetProductsByQueryModel): ProductModel[] => {
  if (!query) return []
  return products.filter((product) => {
    return product.title.toLowerCase().includes(query.toLowerCase()) ?? []
  })
}
