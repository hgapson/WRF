import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-blue-950 py-12 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About Us */}
          <div>
            <h3 className="mb-4 text-3xl font-semibold">About Us</h3>
            <p className="mb-4 text-lg font-semibold italic text-gray-300">
              Waikato Refugee Forum partners with former refugees to access
              life-changing solutions for their settlement journey in New
              Zealand.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/WaikatoRefugeeForum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaFacebookF size={22} />
              </a>
              <a
                href="https://twitter.com/wrefugeeforum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400  hover:text-blue-600"
              >
                <FaTwitter size={22} />
              </a>
              <a
                href="https://www.instagram.com/wrefugeeforum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
              >
                <FaLinkedinIn size={22} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="px-16">
            <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/events"
                  className="text-gray-300 hover:text-blue-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/vacancies"
                  className="text-gray-300 hover:text-blue-500"
                >
                  Opportunities
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-blue-500"
                >
                  Advocacy
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-blue-500">
                  Newsletters
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="px-12">
            <h3 className="mb-4 text-xl font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about-us#vision"
                  className="text-gray-300 hover:text-blue-500"
                >
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link
                  to="/why-we-help"
                  className="text-gray-300 hover:text-blue-500"
                >
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link
                  to="/our-partners"
                  className="text-gray-300 hover:text-blue-500"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us#testimonies"
                  className="text-gray-300 hover:text-blue-500"
                >
                  Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Contact</h3>
            <p className="mb-2 text-gray-300">
              46G Boundary Road, Claudelands, Hamilton
            </p>
            <p className="mb-2 text-gray-300">
              Email:{' '}
              <a
                href="mailto:projects@wrf.org.nz"
                className="hover:text-blue-500"
              >
                projects@wrf.org.nz
              </a>
            </p>
            <p className="mb-2 text-gray-300">
              Phone:{' '}
              <a href="tel:+64273948990" className="hover:text-blue-500">
                +64 27 394 8990
              </a>
            </p>
            <a
              href="https://maps.google.com/?q=46G+Boundary+road+Claudelands,+Hamilton"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              View on Map
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Waikato Refugee Forum. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
