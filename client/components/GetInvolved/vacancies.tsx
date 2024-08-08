import React, { useState } from 'react'
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { Job, jobList } from '../models' // Import Job type and jobList

const Vacancies: React.FC = () => {
  const [savedJobs, setSavedJobs] = useState<string[]>([])
  const [selectedJob, setSelectedJob] = useState<string | null>(null)

  // Function to toggle save status of a job
  const toggleSaveJob = (jobId: string) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId],
    )
  }

  // Function to handle apply button click
  const handleApplyClick = (jobId: string) => {
    setSelectedJob(jobId)
  }

  // Determine which job to display if a job is selected
  const jobToDisplay = selectedJob
    ? jobList.find((job) => job.id === selectedJob)
    : null

  return (
    <div className="mt-12 min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-8 text-4xl font-bold">Current Vacancies</h1>
        <p className="mb-8 text-lg">
          Join our team and help make a difference. Check out our current
          vacancies below.
        </p>

        {jobToDisplay ? (
          <div className="mb-8 rounded-lg bg-white p-6 text-left shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">{jobToDisplay.title}</h2>
            <p className="mb-2 text-gray-600">
              Location: {jobToDisplay.location}
            </p>
            <p className="mb-4 text-gray-700">{jobToDisplay.description}</p>
            <div className="flex items-center justify-between">
              <a
                href="/apply"
                className="rounded-lg bg-blue-500 px-6 py-3 text-white transition duration-300 hover:bg-blue-600"
              >
                Apply Now
              </a>
              <button
                onClick={() => setSelectedJob(null)}
                className="mt-4 rounded-lg bg-gray-500 px-6 py-3 text-white transition duration-300 hover:bg-gray-600"
              >
                Back to Vacancies
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobList.map((job: Job) => (
              <div
                key={job.id}
                className="overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-bold">{job.title}</h2>
                    <button
                      onClick={() => toggleSaveJob(job.id)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {savedJobs.includes(job.id) ? (
                        <FaBookmark />
                      ) : (
                        <FaRegBookmark />
                      )}
                    </button>
                  </div>
                  <p className="mb-2 text-gray-600">Location: {job.location}</p>
                  <p className="mb-4 text-gray-700">{job.description}</p>
                  <button
                    onClick={() => handleApplyClick(job.id)}
                    className="rounded-lg bg-blue-500 px-6 py-3 text-white transition duration-300 hover:bg-blue-600"
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Vacancies
