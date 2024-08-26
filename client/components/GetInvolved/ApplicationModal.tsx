import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm, SubmitHandler } from 'react-hook-form'
import Modal from '../Modal' // Import your generic Modal component

interface ApplicationModalProps {
  jobTitle: string
  isOpen: boolean
  onClose: () => void
}

type FormValues = {
  name: string
  phoneNumber: string
  email: string
  jobType: string
  cv: File | null
  coverLetter: File | null
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({
  jobTitle,
  isOpen,
  onClose,
}) => {
  const form = useRef<HTMLFormElement>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null) // New state for error message

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      jobType: jobTitle,
      cv: null,
      coverLetter: null,
    },
  })

  const sendEmail: SubmitHandler<FormValues> = (data) => {
    if (form.current) {
      emailjs
        .sendForm(
          'service_huukdph',
          'template_p934xyh',
          form.current,
          '_AfuqjrcWWBEbnsoh',
        )
        .then(
          () => {
            setSuccessMessage('Your application has been sent successfully!')
            setErrorMessage(null) // Clear any previous error message
            reset() // Reset the form
            setTimeout(() => {
              setSuccessMessage(null)
              onClose() // Close the modal after success
            }, 3000)
          },
          (error) => {
            console.log('FAILED...', error.text)
            setErrorMessage(
              'There was a problem sending your application. Please try again later.',
            ) // Set the error message
          },
        )
        .catch((error) => {
          console.error('Error sending application:', error)
          setErrorMessage(
            'There was a problem sending your application. Please try again later.',
          ) // Set the error message
        })
    }
  }

  return (
    <Modal showModal={isOpen} handleClose={onClose}>
      <h2 className="mb-4 text-2xl font-bold">Apply for {jobTitle}</h2>

      {successMessage && (
        <div className="mb-4 text-center text-green-500">{successMessage}</div>
      )}

      {errorMessage && (
        <div className="mb-4 text-center text-red-500">{errorMessage}</div>
      )}

      <form ref={form} onSubmit={handleSubmit(sendEmail)} className="space-y-4">
        <div>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            placeholder="Your Name"
            name="name"
            className="w-full rounded border px-3 py-2"
          />
          {errors.name && (
            <p className="text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            {...register('email', { required: 'Email is required' })}
            type="email"
            placeholder="Your Email"
            name="email"
            className="w-full rounded border px-3 py-2 text-sm"
          />
          {errors.email && (
            <p className="text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>
        <div>
          <input
            {...register('phoneNumber', {
              required: 'Phone number is required',
            })}
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            className="w-full rounded border px-3 py-2 text-gray-800"
          />
          {errors.phoneNumber && (
            <p className="text-sm text-red-400">{errors.phoneNumber.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Type
          </label>
          <input
            {...register('jobType')}
            type="text"
            name="jobType"
            value={jobTitle}
            readOnly
            className="w-full rounded border bg-gray-100 px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload CV
          </label>
          <input
            {...register('cv', { required: 'CV is required' })}
            type="file"
            name="cv"
            accept=".pdf,.doc,.docx"
            className="w-full rounded border px-3 py-2"
          />
          {errors.cv && (
            <p className="text-sm text-red-400">{errors.cv.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Cover Letter
          </label>
          <input
            {...register('coverLetter', {
              required: 'Cover letter is required',
            })}
            type="file"
            name="coverLetter"
            accept=".pdf,.doc,.docx"
            className="w-full rounded border px-3 py-2"
          />
          {errors.coverLetter && (
            <p className="text-sm text-red-400">{errors.coverLetter.message}</p>
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
