// src/components/ContactPage/Contact.tsx

import '../main.scss'
import ContactForm from './Form'
import ContactSection from './Map'

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10 pt-[80px] ">
      <ContactSection />
      <ContactForm />
    </div>
  )
}

export default Contact
