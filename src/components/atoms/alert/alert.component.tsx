import {
  ExclamationCircleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
import './alert.styled.scss'

interface AlertProps {
  message: string
  type: 'success' | 'error'
}

export default function Alert ({ message, type }: AlertProps) {
  const className: string = `alert alert--${type}`
  return (
    <span className={className}>
      {type === 'success'
        ? (
        <CheckCircleIcon width="30px" />
          )
        : (
        <ExclamationCircleIcon width="30px" />
          )}
      <p className='alert__message'>{message}</p>
    </span>
  )
}
