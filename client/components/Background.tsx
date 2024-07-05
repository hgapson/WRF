//import React from 'react'
import cover from '../public/cover.jpg'
import '../styles/main.scss'

const Background = () => {
  return (
    <div className="main-content">
      <section className="home section">
        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              <h3 className="hello">
                Welcome to <span className="name"> WRF</span>
              </h3>
              <h3 className="my-profession">
                <span className="typing">Waikato Refugee Forum</span>
              </h3>
              <p className="font-serif">
                Bring together the voice of all refugee communities settle in
                the Waikato Region
              </p>
              <a href="#contact" className="btn hire-me">
                Contact Us
              </a>
            </div>
            <div className="home-image padd-15">
              <img src={cover} alt="background" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Background
