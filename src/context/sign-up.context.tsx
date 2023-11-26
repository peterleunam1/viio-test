import { personalDataInitialValues } from 'constant'
import {
  type PersonalDataModel,
  type ChildrenModel,
  type SignUpContextProps
} from 'models'
import { createContext, useState } from 'react'

const ContextSignUp = createContext<SignUpContextProps>({
  user: personalDataInitialValues,
  addPersonalData () {}
})

export function SignUpContextProvider ({ children }: ChildrenModel) {
  const [user, setUser] = useState<PersonalDataModel>(
    personalDataInitialValues
  )

  const addPersonalData = (value: PersonalDataModel) => {
    setUser(value)
  }

  return (
    <ContextSignUp.Provider value={{ user, addPersonalData }}>
      {children}
    </ContextSignUp.Provider>
  )
}

export default ContextSignUp
