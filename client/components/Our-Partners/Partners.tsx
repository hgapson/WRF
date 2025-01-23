import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AnnualReportModal from './AnnualReportModal' // Adjust the path as needed
import { partners } from './Model'
import ocean from '../public/ocean.jpg'
import { FaHandshake } from 'react-icons/fa'

const Partners: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div className="min-h-screen bg-blue-950">
      {/* Hero Section */}
      <section
        className="h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${ocean})` }}
      >
        <div className="flex h-full flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="mb-4 text-5xl font-bold">Our Partners</h1>
          <p className="mb-8 text-lg">
            We are proud to collaborate with our amazing partners.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-lg bg-green-500 px-6 py-3 text-white transition duration-300 hover:bg-green-600"
            >
              Annual Reports
            </button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-cyan-700 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-extrabold">Our Partners</h2>
          <div className="mb-8 flex justify-center">
            <FaHandshake className="text-6xl text-yellow-600" />
          </div>
          <div className="mx-auto mb-8 max-w-3xl">
            <p className="text-lg">
              We work with a range of partners to enhance our services and
              support for migrants. Join us in making a difference.
            </p>
          </div>
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-10">
            {partners.map((partner, index) => (
              <div key={index}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-24 object-contain"
                />
                <div className="p-6">
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-blue-800 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="become-a-partner" className="bg-blue-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Become a Partner</h2>
          <p className="mb-8 text-lg">
            Join our network of esteemed partners and collaborate with us to
            achieve great things together.
          </p>
          <Link
            to="/Contact"
            className="rounded-lg bg-blue-500 px-6 py-3 text-white transition duration-300 hover:bg-blue-600"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <AnnualReportModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default Partners
