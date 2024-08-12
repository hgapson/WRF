import React from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import ReCAPTCHA from 'react-google-recaptcha'

type FormValues = {
  name: string
  phoneNumber: string
  email: string
  message: string
  captcha: string
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<FormValues>({
    mode: 'onTouched',
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data)
    // Perform additional form submission logic here
  }

  const handleRecaptchaChange = (value: string | null) => {
    if (value) {
      clearErrors('captcha')
    } else {
      setError('captcha', {
        type: 'manual',
        message: 'Captcha is required',
      })
    }
  }

  return (
    <div className="contact-form-container mx-auto max-w-md rounded-lg bg-black p-8 shadow-lg">
      <p className="mb-6 text-center text-lg text-white underline">
        GET IN TOUCH
      </p>
      <h2 className="mb-4 text-center text-3xl font-semibold text-white">
        Give Us Your Query
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="mb-4">
          <input
            type="text"
            id="name"
            placeholder="Your name"
            {...register('name', { required: 'Name is required' })}
            className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white placeholder-gray-400"
          />
          {errors.name && (
            <p className="text-xm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="flex-1">
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Your number"
              {...register('phoneNumber', {
                required: 'Phone number is required',
              })}
              className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white placeholder-gray-400"
            />
            {errors.phoneNumber && (
              <p className="text-xm text-red-400">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div className="flex-1">
            <input
              type="email"
              id="email"
              placeholder="Your email"
              {...register('email', { required: 'Email is required' })}
              className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white placeholder-gray-400"
            />
            {errors.email && (
              <p className="text-xm text-red-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <textarea
            id="message"
            placeholder="Your message"
            {...register('message', { required: 'Message is required' })}
            className="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white placeholder-gray-400"
          />
          {errors.message && (
            <p className="text-sm text-red-400">{errors.message.message}</p>
          )}
        </div>

        <div className="mb-4">
          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={handleRecaptchaChange}
          />
          {errors.captcha && (
            <p className=" text-sm text-red-400">{errors.captcha.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded bg-blue-500 p-3 text-white hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default ContactForm
