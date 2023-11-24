import { lazy } from 'react'
import { BrowserRouter, Route, Navigate } from 'react-router-dom'
import { RoutesWithNotFound } from 'utils'
import { privateRoutes, publicRoutes } from 'constant'
import { AuthGuard } from 'guards'

const Login = lazy(async () => await import('./pages/public/login/login'))
const Private = lazy(async () => await import('./pages/private/private'))

export const Router = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route
          path={privateRoutes.HOME}
          element={<Navigate to={privateRoutes.PRIVATE} />}
        />
        <Route path={publicRoutes.LOGIN} element={<Login />} />
        <Route element={<AuthGuard />}>
          <Route path={`${privateRoutes.PRIVATE}/*`} element={<Private />} />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  )
}
