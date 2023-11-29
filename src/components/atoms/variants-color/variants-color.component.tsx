import { ChevronRightIcon } from '@heroicons/react/24/outline'
import './variants-color.styled.scss'

export default function VariantsColor () {
  return (
    <span className="variation-container">
      <header className="variation-container__header">
        <strong>Color</strong>
        <ChevronRightIcon width="1.5625rem" />
      </header>
      <div className="variation-container__content">
        {[0, 1, 3, 4, 5].map((item) => (
          <div className="variation-container__circle" key={item}>
            .
          </div>
        ))}
      </div>
    </span>
  )
}
