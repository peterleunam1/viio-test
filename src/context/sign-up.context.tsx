import { personalDataInitialValues } from 'constant'
import {
  type PersonalDataModel,
  type ChildrenModel,
  type SignUpContextProps
} from 'models'
import { createContext, useState } from 'react'

const ContextSignUp = createContext<SignUpContextProps>({
  personalData: personalDataInitialValues,
  addPersonalData () {}
})

export function SignUpContextProvider ({ children }: ChildrenModel) {
  const [personalData, setPersonalData] = useState<PersonalDataModel>(
    personalDataInitialValues
  )

  const addPersonalData = (value: PersonalDataModel) => {
    setPersonalData(value)
  }

  return (
    <ContextSignUp.Provider value={{ personalData, addPersonalData }}>
      {children}
    </ContextSignUp.Provider>
  )
}

export default ContextSignUp
