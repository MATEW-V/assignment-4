import { useState } from 'react'
import './App.css'
import AmbiguousCase from './components/AmbiguousCase.jsx'
import HeronsFormula from './components/HeronsFormula.jsx'

function App() {
  return (
    <div className="app-container">
    <AmbiguousCase />,<HeronsFormula />
    </div>
  )
}

export default App
