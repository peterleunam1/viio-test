import { Skeleton } from 'components/atoms'
import './skeleton-products.styled.scss'

export default function SkeletonProducts () {
  return (
    <div className="products">
      {[...Array(5)].map((_, index) => (
        <div style={{ width: '170px', height: '170px' }} key={index}>
          <Skeleton />
        </div>
      ))}
    </div>
  )
}
