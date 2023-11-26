import { Navigate, Outlet } from 'react-router-dom'
import { publicRoutes } from 'constant'
import { useGlobalPersonalData } from 'hooks'

const privateValidationFragment = <Outlet />
const publicValidationFragment = <Navigate replace to={publicRoutes.SIGNUP} />

export default function RegisterGuard () {
  const { personalData } = useGlobalPersonalData()
  return personalData.name ? privateValidationFragment : publicValidationFragment
}
