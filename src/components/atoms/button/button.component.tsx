import { type ChildrenModel } from 'models'
import './button.styled.scss'

interface ButtonProps extends ChildrenModel {
  type?: 'button' | 'submit' | 'reset'
  variant: 'outline' | 'default'
  disabled?: boolean
  isLoading?: boolean
  onClick: () => void
}

export default function Button ({ children, onClick, type = 'button', disabled = false, isLoading = false, variant }: ButtonProps) {
  const className = isLoading
    ? 'button button--loading'
    : `button button--${variant}`

  const handleClick = () => {
    onClick()
  }

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={handleClick}
      type={type}
    >
      {isLoading ? 'Loading ...' : children}
    </button>
  )
}
