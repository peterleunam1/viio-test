import { EnvelopeIcon } from '@heroicons/react/24/outline'
import './input.styled.scss'
import { useState, type ChangeEvent } from 'react'
import { getCapitalize } from 'utils'
import { type RegexModel } from 'models'

interface InputProps {
  placeholder: string
  type: string
  name: string
  label?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  regex: RegexModel
}

export default function Input ({ name, onChange, placeholder, regex, type, label }: InputProps) {
  const [error, setError] = useState<boolean>(false)
  const { pattern, message } = regex
  const patternParsed: string = pattern.toString()
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
        <EnvelopeIcon className="label__icon" />
        <input
          className="label__input"
          placeholder={placeholder}
          type={type}
          name={name}
          pattern={patternParsed}
          onChange={handleChange}
        />
      </span>
      {error && <small className="label__error">{message}</small>}
    </label>
  )
}
