// ApplicationModal.tsx
import React, { useState } from 'react'
import Modal from '../Modal' // Import your generic Modal component

interface ApplicationModalProps {
  jobTitle: string
  isOpen: boolean
  onClose: () => void
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({
  jobTitle,
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobType: jobTitle,
    cv: null as File | null,
    coverLetter: null as File | null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }))
  }

  const handleDownload = (file: File | null) => {
    if (file) {
      const link = document.createElement('a')
      link.href = URL.createObjectURL(file)
      link.download = file.name
      link.click()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    onClose() // Close the modal after submission
  }

  return (
    <Modal showModal={isOpen} handleClose={onClose}>
      <h2 className="mb-4 text-2xl font-bold">
        Apply for{' '}
        <span className="italic text-gray-800 underline">{jobTitle}</span>
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full rounded border px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full rounded border px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full rounded border px-3 py-2"
          />
        </div>
        <div></div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload CV
          </label>
          <input
            type="file"
            name="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleInputChange}
            className="w-full rounded border px-3 py-2"
          />
          {formData.cv && (
            <button
              type="button"
              onClick={() => handleDownload(formData.cv)}
              className="mt-2 text-blue-500 hover:underline"
            >
              Download CV
            </button>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Cover Letter
          </label>
          <input
            type="file"
            name="coverLetter"
            accept=".pdf,.doc,.docx"
            onChange={handleInputChange}
            className="w-full rounded border px-3 py-2"
          />
          {formData.coverLetter && (
            <button
              type="button"
              onClick={() => handleDownload(formData.coverLetter)}
              className="mt-2 text-blue-500 hover:underline"
            >
              Download Cover Letter
            </button>
          )}
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-500 px-6 py-3 text-white transition duration-300 hover:bg-blue-600"
        >
          Send Application
        </button>
      </form>
    </Modal>
  )
}

export default ApplicationModal
