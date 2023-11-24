import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { privateRoutes } from 'constant'
import { RoutesWithNotFound } from 'utils'

const Home = lazy(async () => await import('./home/home'))

export default function Private () {
  return (
    <RoutesWithNotFound>
      <Route path={privateRoutes.HOME} element={<Home />} />
    </RoutesWithNotFound>
  )
}
