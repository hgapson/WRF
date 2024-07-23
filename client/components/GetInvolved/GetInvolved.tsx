import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegBookmark } from 'react-icons/fa'
import { jobList } from '../models' // Import job data

const GetInvolved: React.FC = () => {
  const volunteeringJobIds = ['1', '2', '3']
  const volunteeringJobs = jobList.filter((job) =>
    volunteeringJobIds.includes(job.id),
  )

  return (
    <div className="min-h-screen bg-gray-100">
      <section
        className="h-96 bg-cover bg-center"
        style={{ backgroundImage: 'url(/path-to-hero-image.jpg)' }}
      >
        <div className="flex h-full flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="mb-4 text-5xl font-bold">Get Involved</h1>
          <p className="mb-8 text-lg">
            Join us in making a difference through various opportunities.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Volunteering</h2>
          <p className="mb-8 text-lg">
            Become a volunteer and help us achieve our mission. Your time and
            skills can make a huge impact.
          </p>
          <div className="mb-8 grid grid-cols-1 gap-4 text-left md:grid-cols-3">
            {volunteeringJobs.map((job) => (
              <div key={job.id} className="rounded-lg bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <FaRegBookmark className="cursor-pointer text-gray-500 hover:text-gray-700" />
                </div>
                <p className="mb-2 text-gray-600">Location: {job.location}</p>
                <p className="mb-4 text-gray-700">{job.description}</p>
                <Link
                  to={`/vacancies/${job.id}`}
                  className="rounded-lg bg-blue-500 px-6 py-3 text-white transition duration-300 hover:bg-blue-600"
                >
                  Apply
                </Link>
              </div>
            ))}
          </div>
          <Link
            to="/vacancies"
            className="rounded-lg bg-blue-500 px-6 py-3 text-white transition duration-300 hover:bg-blue-600"
          >
            View All Vacancies
          </Link>
        </div>
      </section>

      {/* Other sections remain unchanged */}
    </div>
  )
}

export default GetInvolved
