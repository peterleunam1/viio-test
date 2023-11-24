import { useState, type ChangeEvent } from 'react'
import { type ChildrenModel, type RegexModel } from 'models'
import { getCapitalize } from 'utils'
import './input.styled.scss'

interface InputProps extends ChildrenModel {
  placeholder: string
  type: string
  name: string
  label?: string
  regex: RegexModel
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input ({ children, name, onChange, placeholder, regex, type, label }: InputProps) {
  const [error, setError] = useState<boolean>(false)
  const { pattern, message } = regex
  const labelCapitalized: string = getCapitalize(label ?? '')
  const containerClassName: string = error
    ? 'label__container label__container--error'
    : 'label__container'

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const { value } = event.target
    if (pattern.test(value)) {
      setError(false)
      onChange(event)
    } else setError(true)
  }

  return (
    <label className="label">
      {label && <strong>{labelCapitalized}</strong>}
      <span className={containerClassName}>
        <i className="label__icon">{children}</i>
        <input
          className="label__input"
          placeholder={placeholder}
          type={type}
          name={name}
          onChange={handleChange}
        />
      </span>
      {error && <small className="label__error">{message}</small>}
    </label>
  )
}
