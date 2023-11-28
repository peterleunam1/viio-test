import { useEffect, useState } from 'react'
import { type ProductModel } from 'models'
import { getAllProducts } from 'services'

export default function useProducts () {
  const [products, setProducts] = useState<ProductModel []>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const getProducts = async () => {
    try {
      setLoading(true)
      const response = await getAllProducts()
      setLoading(false)
      return response
    } catch (error: unknown) {
      setError(true)
    }
  }

  useEffect(() => {
    getProducts().then((response) => {
      if (!response) {
        setError(true)
      } else {
        setProducts(response)
      }
    })
  }, [])

  return {
    products: products ?? [],
    loading,
    error
  }
};
