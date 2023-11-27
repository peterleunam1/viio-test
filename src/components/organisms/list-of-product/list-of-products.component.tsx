import { Container } from 'components/atoms'
import { Product } from 'components/molecules'
import './list-of-product.styled.scss'
import { type ProductModel } from 'models'

interface ListOfProductsProps {
  products: ProductModel[]
  label?: string
}
export default function ListOfProducts ({ products, label }: ListOfProductsProps) {
  return (
    <Container>
      {label && <strong>{label}</strong>}
      <div className='products'>
        {products.map(({ id, image, price, title }) => (
          <Product key={id} id={id} image={image} price={price} name={title}/>
        ))}
      </div>
    </Container>
  )
}
