import './card-category.styled.scss'

interface CardCategoryProps {
  text: string
}

export default function CardCategory ({ text }: CardCategoryProps) {
  return (
    <article className="card-tag">{text}</article>
  )
}
