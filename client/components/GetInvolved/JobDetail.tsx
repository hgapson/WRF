import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Job, jobList } from '../models' // Import job data and types

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const job = jobList.find((job: Job) => job.id === id)

  if (!job) {
    return <p>Job not found</p>
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="rounded-lg bg-white p-6 text-left shadow-lg">
          <h1 className="mb-4 text-4xl font-bold">{job.title}</h1>
          <p className="mb-2 text-gray-600">Location: {job.location}</p>
          <p className="mb-4 text-gray-700">{job.description}</p>
          <div className="flex items-center justify-between">
            <a
              href="/apply"
              className="rounded-lg bg-blue-500 px-6 py-3 text-white transition duration-300 hover:bg-blue-600"
            >
              Apply Now
            </a>
            <Link
              to="/vacancies"
              className="rounded-lg bg-gray-500 px-6 py-3 text-white transition duration-300 hover:bg-gray-600"
            >
              View All Vacancies
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetail
