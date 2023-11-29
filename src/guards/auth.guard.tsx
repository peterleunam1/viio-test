import { Navigate, Outlet } from 'react-router-dom'
import { publicRoutes, storageTypes } from 'constant'
import { getLocalStorage } from 'utils'

const privateValidationFragment = <Outlet />
const publicValidationFragment = <Navigate replace to={publicRoutes.LOGIN} />

export default function AuthGuard () {
  const token = getLocalStorage(storageTypes.TOKEN)
  return token ? privateValidationFragment : publicValidationFragment
}
