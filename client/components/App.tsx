//import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Background from './Background' // Adjust the path as per your project structure
import Event from './Events'
import Reason from './Reason'
import '../styles/main.scss'

const App = () => {
  return (
    <div className="app">
      <main className="main-container">
        <div className="heading">
          <Header />
        </div>
        <div className="background ">
          <Background />
        </div>
        <div className="event bg-blue-950">
          <Event />
        </div>
        <div className="reason bg-blue-950">
          <Reason />
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
