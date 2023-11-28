import { Skeleton } from 'components/atoms'
import './skeleton-details.styled.scss'

export default function SkeletonDetails () {
  return (
    <div className="container-detail">
      <div className="skeleton-details__image">
        <Skeleton />
      </div>
      <div className="skeleton-details__info">
        <div className="skeleton-details__title">
          <Skeleton />
        </div>
        {[...Array(6)].map((_, index) => (
          <div className="skeleton-details__general" key={index}>
            <Skeleton />
          </div>
        ))}
      </div>
    </div>
  )
}
