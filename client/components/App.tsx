import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Background from './Welcome/Background.tsx'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Background />
      <main className="flex-1">
        {/* Your main content here */}
        <div className="container mx-auto">
          <h1 className="mt-8 text-2xl font-bold">Main Content</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            convallis libero vitae nisl ullamcorper, nec euismod risus
            ultricies.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
