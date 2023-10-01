
import { Route, Router, Routes } from 'react-router'
import './App.css'
import Menu from './components/Menu'
import HomePage from './components/HomePage'
import DriftPage from './components/DriftPage'
import TimeAttackPage from './components/TimeAttackPage'
import ForzaPage from './components/ForzaPage'

function App() {

  return (
    <>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
            <Route path='*' element={<div>404</div>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
