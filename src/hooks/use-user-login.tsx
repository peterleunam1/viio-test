import { type UserLogin, type CredentialsModel } from 'models'
import { type ChangeEvent, useState } from 'react'
import { postUserLogin } from 'services'
import useNavigation from './use-navigation'
import { privateRoutes, storageTypes } from 'constant'
import { persistLocalStorage } from 'utils'

export default function useUserLogin () {
  const [credentials, setCredentials] = useState<CredentialsModel>({
    username: '',
    password: ''
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const { goTo } = useNavigation()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      setIsLoading(true)
      const token = await postUserLogin({ crediantials: credentials })
      setIsLoading(false)
      if (token) {
        persistLocalStorage<UserLogin>(storageTypes.TOKEN, token)
        goTo(`/${privateRoutes.PRIVATE}`)
      } else setError(true)
    } catch (error: unknown) {
      console.error(error)
    }
  }

  return { handleChange, handleSubmit, isLoading, error }
}
