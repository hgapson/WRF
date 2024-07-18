import { useState } from 'react'
import { Link } from 'react-router-dom'

function NavLinks() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-gray-100 p-4 shadow-md md:flex md:items-center md:justify-between">
      {/* Desktop Menu */}
      <div className="space-x-6 md:flex">
        <Link
          to="/"
          className="font-semibold text-gray-800 hover:text-blue-500"
        >
          Home
        </Link>

        <Link
          to="/"
          className="font-semibold text-gray-800 hover:text-blue-500"
        >
          About Us
        </Link>

        <Link
          to="/"
          className="font-semibold text-gray-800 hover:text-blue-500"
        >
          Our Programs
        </Link>

        <Link
          to="/"
          className="font-semibold text-gray-800 hover:text-blue-500"
        >
          Our Partners
        </Link>

        <Link
          to="/"
          className="font-semibold text-gray-800 hover:text-blue-500"
        >
          Get Involved
        </Link>

        <Link
          to="Contact"
          className="font-semibold text-gray-800 hover:text-blue-500"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} mt-4 md:hidden`}>
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
    </nav>
  )
}

export default NavLinks
