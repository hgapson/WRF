import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import sea from '../public/sea.jpg' // Update with the correct path
import { BsSend } from 'react-icons/bs'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

const Footer = () => {
  const navigate = useNavigate()

  const handleTeam = () => {
    navigate('/about-us#team')
  }

  const handleMoreStoriesClick = () => {
    navigate('/about-us#testimonies')
  }

  const handleVision = () => {
    navigate('/about-us#vision')
  }
  return (
    <footer className="relative h-[105vh] w-full md:h-[90vh] lg:h-[75vh] xl:h-[70vh] ">
      {/* Background Video */}
      <div className="absolute inset-0  overflow-hidden">
        <img className="h-full w-full object-cover" src={sea} alt="sea" />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center overflow-auto bg-black bg-opacity-40 p-4">
        {/* Contact Form */}
        <div className="mx-auto mb-6 flex max-w-lg flex-col items-center sm:mb-8">
          <div className="mb-4 text-center text-white">
            <h2 className="text-xl font-bold md:text-2xl">Contact Us</h2>
          </div>

          <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
            <input
              className="mb-2 w-full rounded-md border-none p-2 sm:mb-0 sm:w-2/3"
              type="text"
              placeholder="Your message"
            />
            <button className="flex w-full items-center rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 sm:w-1/3">
              <span>Send</span>
              <BsSend className="ml-2" />
            </button>
          </div>
        </div>

        {/* Footer Cards */}
        <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-2 rounded-lg bg-gray-100 bg-opacity-80 p-4 md:p-6 lg:flex-row lg:p-8">
          {/* Footer Intro */}
          <div className="mb-4 flex flex-1 flex-col rounded-lg bg-yellow-100 p-4 lg:mb-0 lg:p-6">
            <div className="flex-1">
              <h1 className="mb-4 text-lg md:text-xl lg:text-2xl">
                WAIKATO REFUGEE FORUM
              </h1>
              <p className="text-base md:text-lg">
                Waikato Refugee Forum partners with refugees to access
                life-changing solutions and transforms how the world supports
                them.
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-4 text-white lg:flex-row lg:gap-6">
              <div className="flex gap-4 text-white">
                <a
                  href="https://www.facebook.com/yourprofile"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://www.instagram.com/yourprofile"
                  className="text-pink-500 hover:text-pink-700"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </div>
              <a
                href="https://maps.google.com/?q=46G+Boundary road+Claudelands,+Hamilton"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-blue-500 px-4 py-2 text-center text-white transition-colors duration-300 hover:bg-blue-600 md:px-6 md:py-3 lg:px-4 lg:py-2 lg:text-sm "
              >
                View on Map
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-1 gap-4 lg:flex-row lg:gap-8">
            <div className="flex-1">
              <h3 className="mb-2 text-base font-semibold md:text-lg lg:text-xl">
                Our Work
              </h3>
              <ul className="space-y-2 text-sm md:text-base lg:text-lg">
                <li>
                  <Link to="/events" className="hover:text-blue-500">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/vacancies" className="hover:text-blue-500">
                    Opportunities
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-500">
                    Advocacy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h3 className="mb-2 text-base font-semibold md:text-lg lg:text-xl">
                About Us
              </h3>
              <ul className="space-y-2 text-sm md:text-base lg:text-lg">
                <li>
                  <button
                    onClick={handleVision}
                    className="hover:text-blue-500"
                  >
                    Mission & Vision
                  </button>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-500">
                    Contact
                  </Link>
                </li>

                <li>
                  <button onClick={handleTeam} className="hover:text-blue-500">
                    Team
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h3 className="mb-2 text-base font-semibold md:text-lg lg:text-xl">
                Resources
              </h3>
              <ul className="space-y-2 text-sm md:text-base lg:text-lg">
                <li>
                  <Link to="/why-we-help" className="hover:text-blue-500">
                    Who we serve
                  </Link>
                </li>
                <li>
                  <Link to="/our-partners" className="hover:text-blue-500">
                    Partners
                  </Link>
                </li>

                <li>
                  <button
                    onClick={handleMoreStoriesClick}
                    className="hover:text-blue-500"
                  >
                    Stories
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
