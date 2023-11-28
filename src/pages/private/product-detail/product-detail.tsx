import { AppLayout } from 'components/templates'
import { ListOfProducts, ProductInfo } from 'components/organisms'
import { useParams } from 'react-router-dom'
import { useProducts, useSingleProduct } from 'hooks'
import { type ProductModel } from 'models'

export default function ProductDetail () {
  const id = useParams<{ id: string }>().id ?? '0'
  const { product } = useSingleProduct({ id })
  const { products } = useProducts()
  const relatedProducts: ProductModel[] = products.filter((item) => item.category === product.category)
  return (
    <AppLayout>
       <ProductInfo product={product} />
       <ListOfProducts products={relatedProducts} label='Related Products'/>
    </AppLayout>
  )
}
