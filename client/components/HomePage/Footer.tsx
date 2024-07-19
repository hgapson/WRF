// src/components/HomePage/Footer.tsx

import React from 'react'
import SubscriptionForm from './Subscribe' // Adjust the path as per your project structure
import SocialMediaLinks from './Social' // Adjust the path as per your project structure
import '../main.scss'
// Ensure this path is correct

function Footer() {
  return (
    <footer className="footer bg-blue-100 p-6">
      <div className="container mx-auto flex flex-col items-center justify-center md:flex-row">
        {/* First Section with SubscriptionForm */}
        <SubscriptionForm />

        {/* Second Section with SocialMediaLinks */}
        <div className="mt-4 flex justify-center">
          <SocialMediaLinks />
        </div>
      </div>
    </footer>
  )
}

export default Footer
