import { useCallback, useEffect, useState } from 'react'
import { type GetSingleProductParams, type ProductModel } from 'models'
import { getSingleProduct } from 'services'
import { productInitialValues } from 'constant'

export default function useSingleProduct ({ id }: GetSingleProductParams) {
  const [product, setProduct] = useState<ProductModel>(productInitialValues)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const getProduct = useCallback(async () => {
    try {
      setLoading(true)
      const response = await getSingleProduct({ id })
      setLoading(false)
      return response
    } catch (error: unknown) {
      setError(true)
    }
  }, [id])

  useEffect(() => {
    getProduct().then((response) => {
      if (!response) {
        setError(true)
      } else {
        setProduct(response)
      }
    })
  }, [id, getProduct])

  return {
    product,
    loading,
    error
  }
};
