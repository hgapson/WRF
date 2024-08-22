import React, { useState } from 'react'
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { Job, jobList } from '../models' // Import Job type and jobList
import ApplicationModal from './ApplicationModal' // Import ApplicationModal

const Vacancies: React.FC = () => {
  const [savedJobs, setSavedJobs] = useState<string[]>([])
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Function to toggle save status of a job
  const toggleSaveJob = (jobId: string) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId],
    )
  }

  // Function to handle apply button click
  const handleApplyClick = (job: Job) => {
    setSelectedJob(job)
  }

  // Function to open the modal when apply button is clicked in the details
  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  return (
    <div className="mt-12 min-h-screen bg-blue-950 py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-8 text-4xl font-bold text-white">
          Current Vacancies
        </h1>
        <p className="mb-8 text-lg text-white">
          Join our team and help make a difference. Check out our current
          vacancies below.
        </p>

        {selectedJob ? (
          // Job Details View
          <div className="mb-8 rounded-lg bg-white p-6 text-left shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">{selectedJob.title}</h2>
            <p className="mb-2 text-gray-600">
              Location: {selectedJob.location}
            </p>
            <p className="mb-4 text-gray-700">{selectedJob.description}</p>
            <div className="flex items-center justify-between">
              <button
                onClick={handleOpenModal}
                className="rounded-lg bg-blue-500 px-6 py-3 text-white transition duration-300 hover:bg-blue-600"
              >
                Apply Now
              </button>
              <button
                onClick={() => setSelectedJob(null)}
                className="mt-4 rounded-lg bg-gray-500 px-6 py-3 text-white transition duration-300 hover:bg-gray-600"
              >
                Back to Vacancies
              </button>
            </div>
          </div>
        ) : (
          // Job List View
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
                    onClick={() => handleApplyClick(job)}
                    className="rounded-lg bg-blue-500 px-6 py-3 text-white transition duration-300 hover:bg-blue-600"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Render the Application Modal */}
        {selectedJob && (
          <ApplicationModal
            jobTitle={selectedJob.title}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </div>
  )
}

export default Vacancies
