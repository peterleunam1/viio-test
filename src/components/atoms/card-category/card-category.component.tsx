import { getCapitalize } from 'utils'
import './card-category.styled.scss'

interface CardCategoryProps {
  text: string
}

export default function CardCategory ({ text }: CardCategoryProps) {
  const textCapitalized = getCapitalize(text)
  return <article className="card-tag">{textCapitalized}</article>
}
