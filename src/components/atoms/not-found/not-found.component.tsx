import { useNavigation } from 'hooks'
import { privateRoutes } from 'constant'
import './not-found.styled.scss'

export default function NotFound () {
  const { goTo } = useNavigation()

  const handleReturn = () => {
    goTo(`/${privateRoutes.PRIVATE}`)
  }

  return (
    <section className="not-found">
      <h1>Not Found - 404</h1>
      <p className="not-found__return" onClick={handleReturn}>
        Return to the homepage.
      </p>
    </section>
  )
}
