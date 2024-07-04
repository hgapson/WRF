//import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Background from './Background' // Adjust the path as per your project structure

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-indigo-950">
      <Header />
      <main className="flex-1 pb-16 pt-0">
        <Background />
        {/* Your main content here */}
        <div className="container mx-auto mt-8"></div>
      </main>
      <Footer />
    </div>
  )
}

export default App
