import { useState, type ChangeEvent } from 'react'
import { Button, Input } from 'components/atoms'
import {
  personalDataInitialValues,
  publicRoutes,
  signUpFields
} from 'constant'
import './sign-up-personal-data.styled.scss'
import { type PersonalDataModel } from 'models'
import { useGlobalPersonalData, useNavigation } from 'hooks'

export default function SignUpPersonalData () {
  const personalDataFields = signUpFields.slice(0, 4)
  const [personalData, setPersonalData] = useState<PersonalDataModel>(
    personalDataInitialValues
  )
  const { addPersonalData } = useGlobalPersonalData()
  const { goTo } = useNavigation()
  const { city, lastName, name, phone } = personalData
  const isDisabled = !city || !lastName || !name || !phone

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPersonalData({
      ...personalData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    addPersonalData(personalData)
    goTo(`/${publicRoutes.SIGNUPCREDENTIALS}`)
  }

  const handleRedirectToLogin = () => {
    goTo(`/${publicRoutes.LOGIN}`)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {personalDataFields.map((elements) => (
        <Input key={elements.name} onChange={handleChange} {...elements}>
          {elements.icon}
        </Input>
      ))}
      <div className="form__button">
        <Button
          variant="default"
          type="submit"
          onClick={() => {}}
          disabled={isDisabled}
        >
          Continuar
        </Button>
      </div>
      <p>
        Already have an account?
        <strong className="form__redirect" onClick={handleRedirectToLogin}>
          {' '}
          Log In.
        </strong>
      </p>
    </form>
  )
}
