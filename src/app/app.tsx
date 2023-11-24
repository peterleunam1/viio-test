import { Suspense } from 'react'
import { Router } from '../router'

function App () {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router />
    </Suspense>
  )
}

export default App
