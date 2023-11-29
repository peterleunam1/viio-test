import { type ProductModel } from 'models'
import { StarIcon } from '@heroicons/react/24/solid'
import { HeartIcon, ShareIcon } from '@heroicons/react/24/outline'
import { VariantsColor } from 'components/atoms'
import './details-from-products.styled.scss'

interface DetailsFromProductProps {
  product: ProductModel
}

export default function DetailsFromProduct ({ product }: DetailsFromProductProps) {
  return (
    <article className="info-container">
      <h2 className="info-container__detail-title">{product.title}</h2>
      <span className="info-container__price-container">
        <p className="info-container__price-text">R.p {product.price}</p>
        <p className="info-container__price-desc">20% off</p>
      </span>
      <p className="info-container__price-dashed">R.p 300000</p>
      <span className="info-container__rate">
        <div className="info-container__rate-star">
          <p className="info-container__rate-star-p">
            {product.rating.count} sold
          </p>
          <p className="info-container__price-desc">
            {product.rating.rate} <StarIcon width="20px" />
          </p>
        </div>
        <div>
          <HeartIcon width="1.5625rem" />
          <ShareIcon width="1.5625rem" />
        </div>
      </span>
      <VariantsColor />
      <strong>Description</strong>
      <p className="info-container__description">{product.description}.</p>
    </article>
  )
}
