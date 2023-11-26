import { type ChangeEvent, useState } from 'react'
import { type NewUserCredentialsModel, type UserModel, type PersonalDataModel } from 'models'
import { newUserCredentialsInitialValues, userInitialValues } from 'constant'
import { postCreateUser } from 'services'

interface UseCreateUserProps {
  personalData: PersonalDataModel
}

export default function useCreateUser ({ personalData }: UseCreateUserProps) {
  const [credentials, setCredentials] = useState<NewUserCredentialsModel>(
    newUserCredentialsInitialValues
  )
  const [newUser, setNewUser] = useState<UserModel>(userInitialValues)
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const { name, lastName, phone, city } = personalData
  const { email, password, username } = credentials

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  }

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const register = async (event: ChangeEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()

      const newUserComplete = {
        name: {
          firstName: name,
          lastName
        },
        email,
        username,
        password,
        phone: phone.toString(),
        address: {
          ...newUser.address,
          city
        }
      }

      setNewUser(newUserComplete)
      setLoading(true)
      const result = await postCreateUser({
        crediantials: newUserComplete
      })
      setLoading(false)
      if (result) {
        handleShowModal()
      } else setError(true)
    } catch (error) {
      console.log(error)
    }
  }

  return { credentials, error, onChange, register, loading, showModal, handleCloseModal }
}
