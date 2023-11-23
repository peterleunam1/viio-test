import { type ChangeEvent } from 'react'
import { Button, Input } from 'components/atoms'
import { SocialAuth } from 'components/molecules'
import { regexs } from 'constant'
import './login-form.styled.scss'

interface LoginFormProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: ChangeEvent<HTMLFormElement>) => void
}

export default function LoginForm ({ onChange, onSubmit }: LoginFormProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event)
  }
  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(event)
  }
  const email: string = 'email'
  const password: string = 'password'
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <Input
          placeholder="your@example.com"
          type={email}
          name={email}
          label={email}
          onChange={handleChange}
          regex={regexs.EMAIL}
        />
        <Input
          placeholder="your password"
          type={password}
          name={password}
          label={password}
          onChange={handleChange}
          regex={regexs.PASSWORD}
        />
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
