import { Alerts } from 'constant'
import { ContextSignUp } from 'context'
import { useContext } from 'react'

export default function useGlobalPersonalData () {
  const context = useContext(ContextSignUp)
  if (context === undefined) {
    throw new Error(Alerts.GLOBAL_STATE)
  }
  return context
}
