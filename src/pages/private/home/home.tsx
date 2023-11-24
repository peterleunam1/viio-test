import { Button } from 'components/atoms'
import { publicRoutes, storageTypes } from 'constant'
import { clearLocalStorage } from 'utils'
import { useNavigation } from 'hooks'

export default function Home () {
  const { goTo } = useNavigation()

  const hancleLogout = () => {
    clearLocalStorage(storageTypes.TOKEN)
    goTo(`/${publicRoutes.LOGIN}`)
  }

  return (
    <>
    <h1>Home</h1>
    <Button variant="outline" onClick={hancleLogout}>Salir</Button>
    </>
  )
}
