import { type ChildrenModel } from 'models'
import { Route, Routes } from 'react-router-dom'

export const RoutesWithNotFound = ({ children }: ChildrenModel) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<p>Not found</p>} />
    </Routes>
  )
}
