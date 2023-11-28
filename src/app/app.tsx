import { Suspense } from 'react'
import { Router } from '../router'
import { SignUpContextProvider } from 'context'
import { Loader } from 'components/atoms'

function App () {
  return (
    <Suspense fallback={<Loader />}>
      <SignUpContextProvider>
        <Router />
      </SignUpContextProvider>
    </Suspense>
  )
}

export default App
