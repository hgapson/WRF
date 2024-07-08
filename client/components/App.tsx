//import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Background from './Background' // Adjust the path as per your project structure
import Events from './Events'
//import '../styles/main.scss'

const App = () => {
  return (
    <div className="app">
      <main className="main-contener">
        <div className="heading">
          <Header />
        </div>
        <div className="background">
          <Background />
        </div>
        <div className="background">
          <Events />
        </div>

        {/* Your main content here */}
        <div className="footer">
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
