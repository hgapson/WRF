import React from 'react'

export const jobList = [
  {
    id: '1',
    title: 'Volunteer Coordinator',
    location: 'Hamilton, NZ',
    description:
      'We are looking for a dedicated volunteer coordinator to join our team and help manage our volunteer program.',
  },
  {
    id: '2',
    title: 'Community Outreach Specialist',
    location: 'Hamilton, NZ',
    description:
      'Join us in our efforts to reach out to the community and spread awareness about our programs.',
  },
  {
    id: '3',
    title: 'Fundraising Manager',
    location: 'Hamilton, NZ',
    description:
      'Help us raise the necessary funds to support our programs and initiatives.',
  },
  // Add more job listings as needed
]

const Vacancies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-8 text-4xl font-bold">Current Vacancies</h1>
        <p className="mb-8 text-lg">
          Join our team and help make a difference. Check out our current
          vacancies below.
        </p>

        {jobList.map((job) => (
          <div
            key={job.id}
            className="mb-8 rounded-lg bg-white p-6 text-left shadow-lg"
          >
            <h2 className="mb-4 text-2xl font-bold">{job.title}</h2>
            <p className="mb-2 text-gray-600">Location: {job.location}</p>
            <p className="mb-4 text-gray-700">{job.description}</p>
            <button className="rounded-lg bg-blue-500 px-6 py-3 text-white transition duration-300 hover:bg-blue-600">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Vacancies
