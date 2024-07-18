import React from 'react'
import { Outlet } from 'react-router-dom'
import './main.scss'

const App: React.FC = () => {
  return (
    <div className="app">
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  )
}

export default App
