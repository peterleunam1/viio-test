import { type ChangeEvent } from 'react'
import { Button, Input, Modal } from 'components/atoms'
import { publicRoutes, signUpFields } from 'constant'
import './sign-up-credentials.styled.scss'
import { useCreateUser, useGlobalPersonalData, useNavigation } from 'hooks'
import { SignUpMessage } from 'components/molecules'

export default function SignUpCredentials () {
  const personalDataFields = signUpFields.slice(4)
  const { user } = useGlobalPersonalData()
  const { goTo } = useNavigation()
  const {
    credentials,
    error,
    onChange,
    register,
    loading,
    showModal,
    handleCloseModal
  } = useCreateUser({
    personalData: user
  })
  const { email, password, username } = credentials
  const isDisabled = !email || !password || !username
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event)
  }

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    await register(event)
  }

  const handleBack = () => {
    goTo(`/${publicRoutes.SIGNUP}`)
  }

  const handleClose = () => {
    handleCloseModal()
  }

  return (
    <>
      {error && <p>There was an error</p>}
      <form className="formCredentials" onSubmit={handleSubmit}>
        {personalDataFields.map((elements) => (
          <Input key={elements.name} onChange={handleChange} {...elements}>
            {elements.icon}
          </Input>
        ))}
        <div className="formCredentials__button">
          <Button
            variant="default"
            type="submit"
            onClick={() => {}}
            disabled={isDisabled}
            isLoading={loading}
          >
            Sign Up
          </Button>
          <Button variant="outline" type="button" onClick={handleBack}>
            Back
          </Button>
        </div>
      </form>
      <Modal status={showModal} onClose={handleClose}>
        <SignUpMessage />
      </Modal>
    </>
  )
}
