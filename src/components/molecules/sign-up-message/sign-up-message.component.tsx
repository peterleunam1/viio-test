import { Alerts, BASE_URL, publicRoutes } from 'constant'
import './sign-up-message.styled.scss'
import { Alert, Button } from 'components/atoms'
import { useNavigation } from 'hooks'
import { useState } from 'react'

export default function SignUpMessage () {
  const { goTo } = useNavigation()
  const [success, setSuccess] = useState(false)
  const URL: string = BASE_URL + 'docs'

  const handleRedirectToLogin = () => {
    setSuccess(true)
    setTimeout(() => {
      goTo(`/${publicRoutes.LOGIN}`)
      setSuccess(false)
    }, 2000)
  }

  return (
   <>
   {success && <div className='message__alert'>
    <Alert type="success" message={Alerts.SUCCESS}/>
   </div>}
    <article>
      <h3 className="message__title">Log In exitoso</h3>
      <p>
        The{' '}
        <a
          className="message__link"
          href={URL}
          target="_blank"
          rel="noreferrer"
        >
          fakestoreapi
        </a>{' '}
        returns an object with a new identifier (ID). Please note that nothing
        will actually be inserted into the database. To access the system, use
        the credentials provided in the documentation.
      </p>
      <p>
        <strong>Username: </strong>johnd
      </p>
      <p>
        <strong>Password: </strong>m38rmF$
      </p>
      <div className="message__button">
        <Button variant="default" type="button" onClick={handleRedirectToLogin}>
          Log In
        </Button>
      </div>
    </article>
    </>
  )
}
