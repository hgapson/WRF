//import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Background from './Background' // Adjust the path as per your project structure

const App = () => {
  return (
    <div className="app">
      <div className="heading">
        <Header />
      </div>
      <div className="background">
        <Background />
      </div>

      {/* Your main content here */}

      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
