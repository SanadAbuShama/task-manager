import './App.css'
import { Route, Routes } from 'react-router'
import { SignUp } from './routes'

function App() {

  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  )
}

export default App
