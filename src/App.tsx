// App.tsx
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import RegistrationPage from './pages/RegistrationPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/register-fleet" element={<RegistrationPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App