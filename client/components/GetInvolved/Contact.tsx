import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm(
          'service_huukdph',
          'template_emmyh0z',
          form.current,
          '_AfuqjrcWWBEbnsoh',
        )
        .then(
          () => {
            console.log('SUCCESS!')
          },
          (error) => {
            console.log('FAILED...', error.text)
          },
        )
        .catch((error) => {
          console.error('Error sending email:', error)
        })
    }
  }

  return (
    <section>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Phone</label>
        <textarea name="phone" />
        <label>Email</label>
        <textarea name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </section>
  )
}

export default Contact
