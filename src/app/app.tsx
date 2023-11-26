import { Suspense } from 'react'
import { Router } from '../router'
import { SignUpContextProvider } from 'context'

function App () {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SignUpContextProvider>
        <Router />
      </SignUpContextProvider>
    </Suspense>
  )
}

export default App
