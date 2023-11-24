import { type CredentialsModel } from 'models'
import { type ChangeEvent, useState } from 'react'
import { postUserLogin } from 'services'
import useNavigation from './use-navigation'

export default function useUserLogin () {
  const { goTo } = useNavigation()
  const [credentials, setCredentials] = useState<CredentialsModel>({
    username: '',
    password: ''
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      setIsLoading(true)
      const token = await postUserLogin({ crediantials: credentials })
      setIsLoading(false)
      if (!token) setError(true)
      else goTo('/home')
    } catch (error: unknown) {
      console.error(error)
    }
  }

  return { handleChange, handleSubmit, isLoading, error }
}
