import { type ChangeEvent } from 'react'
import { Button, Input } from 'components/atoms'
import { SocialAuth } from 'components/molecules'
import { loginFields } from 'constant'
import './login-form.styled.scss'

interface LoginFormProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: ChangeEvent<HTMLFormElement>) => void
  isLoading: boolean
}

export default function LoginForm ({ onChange, onSubmit, isLoading }: LoginFormProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event)
  }
  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(event)
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        {loginFields.map((elements) => (
          <Input key={elements.name} onChange={handleChange} {...elements}>
            {elements.icon}
          </Input>
        ))}
        <div className="form__remember">
          <span className="form__checkbox">
            <input type="checkbox" />
            <p>Remember me</p>
          </span>
          <span>Forgot Password?</span>
        </div>
        <Button
          variant="default"
          type="submit"
          isLoading={isLoading}
          onClick={() => {
            console.log('click')
          }}
        >
          Log In
        </Button>
      </form>
      <SocialAuth />
    </>
  )
}
