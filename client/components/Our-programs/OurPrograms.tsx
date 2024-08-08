import React from 'react'
import youth from '../public/youth.jpg'
import orientation from '../public/orientation.jpg'
import support from '../public/support.jpg'
import student from '../public/students.jpg'

const programs = [
  {
    title: 'Youth Trainings',
    description: 'Description for Program 1',
    image: youth,
  },
  {
    title: 'Orientation',
    description: 'Description for Program 2',
    image: orientation,
  },
  {
    title: 'Supporting ',
    description: 'Description for Program 3',
    image: support,
  },
]

const OurPrograms = () => {
  return (
    <div className="mt-16 min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="mt-16 h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${student})` }}
      >
        <div className="flex h-full flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="mb-4 text-5xl font-bold">Our Programs</h1>
          <p className="text-lg">
            Explore the various programs we offer to help former refugee to be
            settled
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="mb-2 text-2xl font-bold">{program.title}</h2>
                  <p className="mb-4 text-gray-700">{program.description}</p>
                  <a
                    href="#"
                    className="rounded-lg bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurPrograms
