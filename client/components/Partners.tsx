import React from 'react'
import police from '../public/Police.png'
import winz from '../public/winz.png'
import settlement from '../public/settlement.png'

const ImageCardSection = () => {
  return (
    <section className="bg-blue-950 px-4 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        {/* Title and Subtitle */}
        <h2 className="mb-4 text-3xl font-bold text-white">Our Partners</h2>
        <h3 className="mb-6 text-lg italic text-white">
          Thank you for contribution on former refugees awareness
        </h3>

        {/* Image Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[police, winz, settlement].map((image, index) => (
            <div
              key={index}
              className="card mx-auto max-w-xs overflow-hidden rounded-lg bg-white shadow-lg"
              style={{ maxWidth: '200px', maxHeight: '300px' }} // Adjusted size
            >
              <img
                src={image}
                alt={`Card ${index + 1}`}
                className="h-36 w-full object-cover" // Adjusted image size
              />
              <div className="p-4">
                <h3 className="mb-2 text-center text-xl font-medium">
                  Project Title {index + 1}
                </h3>
                <p className="mb-4 text-center text-gray-700">
                  Brief description of project {index + 1}.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
            onClick={() => (window.location.href = '/readMore')}
          >
            Read More
          </button>
          <button
            className="rounded bg-green-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-green-600"
            onClick={() => (window.location.href = '/annualReport')}
          >
            Annual Report
          </button>
        </div>
      </div>
    </section>
  )
}

export default ImageCardSection
