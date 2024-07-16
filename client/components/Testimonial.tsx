import React, { useState, useEffect } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import testimonial from '../public/testimonial.jpg'
import '../styles/main.scss'

const testimonialsData = [
  {
    name: 'John Doe',
    message:
      'This organization has changed my life. Their support has been invaluable.',
  },
  {
    name: 'Jane Smith',
    message:
      'I am so grateful for the assistance I received. They truly care about people.',
  },
  {
    name: 'Samuel Green',
    message:
      'Thanks to their programs, I was able to start a new chapter in my life.',
  },
]

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(Math.floor(Math.random() * testimonialsData.length))
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const { name, message } = testimonialsData[currentTestimonial]

  return (
    <section className="bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-3xl font-bold md:w-full">
        Testimonials
      </h2>
      <div className="container mx-auto flex flex-col items-center justify-center md:flex-row">
        {/* Fixed Image */}
        <div className="relative mb-8 h-full w-full md:mb-0 md:w-1/2">
          <div className="parallelogram-container">
            <img
              src={testimonial}
              alt="Testimonial"
              className="parallelogram h-full w-full"
            />
          </div>
        </div>

        {/* Testimonial Message */}
        <div className="flex flex-col justify-center md:w-1/2">
          <div className="testimonial-message relative bg-white p-6 text-gray-700 shadow-lg">
            <FaQuoteLeft className="absolute left-0 top-0 ml-2 mt-2 text-4xl text-gray-300" />
            <p className="mb-4 mt-8">{message}</p>
            <h3 className="text-lg font-medium">{name}</h3>
            <button
              className="mt-4 rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
              onClick={() => (window.location.href = '/fullStory')}
            >
              Full Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
