import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Background from './Welcome/Background.tsx'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-indigo-950 text-gray-100">
      <Header />
      <Background />

      <main className="flex-1">{/* Your main content here */}</main>
      <Footer />
    </div>
  )
}

export default App
