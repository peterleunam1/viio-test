interface SearchesCategoriesModel {
  relevance: string
  latest: string
  topSales: string
  price: string
}

interface SearchesCategoriesDataModel {
  id: number
  name: string
}

export const searchesCategories: SearchesCategoriesModel = {
  relevance: 'relevance',
  latest: 'latest',
  topSales: 'top sales',
  price: 'price'
}

export const searchesCategoriesData: SearchesCategoriesDataModel[] = [
  {
    id: 1,
    name: searchesCategories.relevance
  },
  {
    id: 2,
    name: searchesCategories.latest
  },
  {
    id: 3,
    name: searchesCategories.topSales
  },
  {
    id: 4,
    name: searchesCategories.price
  }
]
