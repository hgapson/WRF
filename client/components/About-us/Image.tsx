import React from 'react'
import about from '../public/about.jpg'

const BackgroundSection = () => {
  return (
    <section className="px-4 py-12 text-gray-800 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Transparent Cover Image with Title */}
        <div className="relative mb-12">
          <img
            src={about}
            alt="Cover"
            className="h-64 w-full rounded-lg object-cover shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-4xl font-semibold text-white">About Us</h1>
          </div>
        </div>

        {/* Introduction Section */}

        {/* Get Involved */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">
            Get Involved
          </h2>
          <p>
            There are many ways you can support our cause. Whether through
            volunteering, donations, or advocacy, your involvement makes a
            difference.
          </p>
          <button
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
            onClick={() => (window.location.href = '/getInvolved')}
          >
            Get Involved
          </button>
        </div>

        {/* Contact Information */}
      </div>
    </section>
  )
}

export default BackgroundSection
