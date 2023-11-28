import { AppLayout } from 'components/templates'
import { ListOfProducts, ProductInfo } from 'components/organisms'
import { useParams } from 'react-router-dom'
import { useProducts, useSingleProduct } from 'hooks'
import { type ProductModel } from 'models'
import { SkeletonDetails, SkeletonProducts } from 'components/molecules'

export default function ProductDetail () {
  const id = useParams<{ id: string }>().id ?? '0'
  const { product, loading, error } = useSingleProduct({ id })
  const { products, loading: laod } = useProducts()

  const relatedProducts: ProductModel[] = products.filter(
    (item) => item.category === product.category
  )
  return (
    <AppLayout>
      {loading ? <SkeletonDetails /> : error ? <p>Error</p> : <ProductInfo product={product} />}
      {laod && <SkeletonProducts />}
      <ListOfProducts products={relatedProducts} label="Related Products" />
    </AppLayout>
  )
}
