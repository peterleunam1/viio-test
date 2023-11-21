import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Hello world</>} />
      </Routes>
    </BrowserRouter>
  )
}
