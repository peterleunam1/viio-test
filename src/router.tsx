import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Home } from 'pages'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
