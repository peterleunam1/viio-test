import { HeartIcon } from '@heroicons/react/24/outline'
import './product.styled.scss'
import { privateRoutes } from 'constant'
import { useNavigation } from 'hooks'
interface ProductProps {
  id: number
  name: string
  price: number
  image: string
}
export default function Product ({ id, name, price, image }: ProductProps) {
  const { goTo } = useNavigation()

  const handleRedirect = () => {
    goTo(`/${privateRoutes.PRIVATE}/${privateRoutes.PRODUCT_DETAILS.replace(':id', id.toString())}`)
  }

  return (
    <article className="product" onClick={handleRedirect}>
        <span className='product__icon' > <HeartIcon /></span>
      <picture className="product__container-img">
        <img src={image} alt={`${id}-${name}`} className='product__img' loading='lazy'/>
      </picture>
      <span className="product__info">
        <strong className="product__text">{name}</strong>
        <p className="product__text">{price}</p>
      </span>
    </article>
  )
}
