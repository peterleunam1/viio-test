import { BASE_URL, publicRoutes } from 'constant'
import './sign-up-message.styled.scss'
import { Button } from 'components/atoms'
import { useNavigation } from 'hooks'

export default function SignUpMessage () {
  const { goTo } = useNavigation()

  const URL: string = BASE_URL + 'docs'

  const handleRedirectToLogin = () => {
    goTo(`/${publicRoutes.LOGIN}`)
  }

  return (
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
  )
}
