//import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Background from './Background' // Adjust the path as per your project structure
import Event from './Events'
import Reason from './Reason'
import '../styles/main.scss'
import GetInvolved from './GetInvolved'
import ImageCardSection from './Partners'
import TestimonialsSection from './Testimonial'

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
        <div className="event ">
          <Event />
        </div>
        <div className="reason bg-blue-950">
          <Reason />
        </div>
        <div className="involved bg-blue-950">
          <GetInvolved />
        </div>
        <div className="partners bg-blue-950">
          <ImageCardSection />
        </div>
        <div className="testimonial">
          <TestimonialsSection />
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
