import { ContextSignUp } from 'context'
import { useContext } from 'react'

export default function useGlobalPersonalData () {
  const context = useContext(ContextSignUp)
  if (context === undefined) {
    throw new Error('useGlobalPersonalData must be used within a SignUpContextProvider')
  }
  return context
}
