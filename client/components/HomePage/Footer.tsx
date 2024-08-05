//import React, { useState } from 'react'
//import SubscriptionForm from '../footer/Subscribe'
//import SocialMediaLinks from '../footer/Social'
//import '../main.scss'
//import Links from '../footer/Links'
import SocialMediaLinks from '../footer/Social'
import { FiChevronDown, FiSend } from 'react-icons/fi'
import '../footer/footer.scss'
import video from '../public/171124_H1_006.mp4'

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video loop autoPlay muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlayContent">
          <div className="secContent container">
            <div className="contactDiv">
              <div className="text">
                <h2>Subscribe to our News Letters</h2>
              </div>
              <div className="inputDiv">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  name="email"
                  id="email"
                />
                <button className="btn" type="submit">
                  SEND
                  <FiSend className="icon" />
                </button>
              </div>
            </div>

            <div className="footerCard">
              <div className="footerIntro">
                <div className="footerParagraph">
                  <h1>Waikato Refugee Forum</h1>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veniam ab dolores nesciunt, molestias aspernatur obcaecati!
                  Iste pariatur maxime atque, ipsam laudantium quidem, animi
                  dolores, ad labore odit voluptates ea error.
                </div>
                <div className="footerSocials">
                  <SocialMediaLinks />
                </div>
              </div>

              <div className="footerLinks">
                <div className="linkGroup">
                  <span className="groupTitle flex">
                    OUR AGENCY
                    <FiChevronDown className="icon" />
                  </span>
                  <ul>
                    <li className="footerList">Services</li>
                    <li className="footerList">Services</li>
                    <li className="footerList">Services</li>
                    <li className="footerList">Services</li>
                  </ul>
                </div>
                <div className="linkGroup">
                  <span className="groupTitle flex">
                    OUR AGENCY <FiChevronDown className="icon" />
                  </span>
                  <ul>
                    <li className="footerList">Services</li>
                    <li className="footerList">Services</li>
                    <li className="footerList">Services</li>
                    <li className="footerList">Services</li>
                  </ul>
                </div>
                <div className="linkGroup">
                  <span className="groupTitle flex">
                    OUR AGENCY
                    <FiChevronDown className="icon" />
                  </span>
                  <ul>
                    <li className="footerList">Services</li>
                    <li className="footerList">Services</li>
                    <li className="footerList">Services</li>
                    <li className="footerList">Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
