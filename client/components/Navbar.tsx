import { useState } from 'react'
import '../styles/main.scss'

function NavLinks() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="flex flex-col items-center justify-between bg-gray-100 p-4 shadow-md md:flex-row">
      <nav className="mt-4 hidden space-x-6 md:mt-0 md:flex">
        <a
          href="#home"
          className="font-semibold text-gray-800 hover:text-blue-500"
        >
          Home
        </a>
        <a
          href="#about-us"
          className="font-semibold text-gray-800 hover:text-blue-500"
        >
          About Us
        </a>
        <a
          href="#our-programs"
          className="font-semibold text-gray-800 hover:text-blue-500"
        >
          Our Programs
        </a>
        <a
          href="#our-partners"
          className="font-semibold text-gray-800 hover:text-blue-500"
        >
          Our Partners
        </a>
        <a
          href="#get-involved"
          className="font-semibold text-gray-800 hover:text-blue-500"
        >
          Get Involved
        </a>
        <a
          href="#contact-us"
          className="font-semibold text-gray-800 hover:text-blue-500"
        >
          Contact Us
        </a>
      </nav>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-800 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="mt-4 md:hidden">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a
                href="#home"
                className="font-semibold text-gray-800 hover:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className="font-semibold text-gray-800 hover:text-blue-500"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#our-programs"
                className="font-semibold text-gray-800 hover:text-blue-500"
              >
                Our Programs
              </a>
            </li>
            <li>
              <a
                href="#our-partners"
                className="font-semibold text-gray-800 hover:text-blue-500"
              >
                Our Partners
              </a>
            </li>
            <li>
              <a
                href="#get-involved"
                className="font-semibold text-gray-800 hover:text-blue-500"
              >
                Get Involved
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                className="font-semibold text-gray-800 hover:text-blue-500"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default NavLinks
