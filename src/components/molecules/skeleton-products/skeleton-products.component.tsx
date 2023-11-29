import { Skeleton } from 'components/atoms'
import './skeleton-products.styled.scss'

export default function SkeletonProducts () {
  return (
    <div className="products">
      {[...Array(5)].map((_, index) => (
        <div className='skeleton-product' key={index}>
          <Skeleton />
        </div>
      ))}
    </div>
  )
}
