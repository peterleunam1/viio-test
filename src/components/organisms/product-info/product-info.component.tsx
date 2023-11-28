import { type ProductModel } from 'models'

import './product-info.styled.scss'
import { DetailsFromProduct } from 'components/molecules'

interface ProductInfoProps {
  product: ProductModel
}

export default function ProductInfo ({ product }: ProductInfoProps) {
  const { image, title } = product ?? {}
  return (
    <section className="container-detail">
      <picture className="container-detail__container-image">
        <img
          src={image}
          alt={title}
          className="container-detail__image"
        />
      </picture>
      <DetailsFromProduct product={product} />
    </section>
  )
}
