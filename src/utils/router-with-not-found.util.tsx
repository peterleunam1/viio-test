import { NotFound } from 'components/atoms'
import { type ChildrenModel } from 'models'
import { Route, Routes } from 'react-router-dom'

export const RoutesWithNotFound = ({ children }: ChildrenModel) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
